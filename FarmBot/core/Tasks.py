# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import asyncio
import json
import random
import time
from .Wallet import Wallet
from .Game import Game
from utilities.utilities import getConfig
from mcf_utils.tgAccount import tgAccount as TG
from mcf_utils.api import API


class Tasks:
    def __init__(
        self,
        log,
        httpRequest,
        account_name,
        bot_globals,
        tgAccount=None,
        license_key=None,
    ):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.tgAccount = tgAccount
        self.recheck_claim = False
        self.license_key = license_key
        self.bot_globals = bot_globals
        self.processed_tasks = []
        self.game = Game(self.log, self.http, self.account_name)

    async def claim_tasks(self):
        try:
            self.recheck_claim = False
            self.log.info(
                f"<g>📃 Claiming tasks for account <cyan>{self.account_name}</cyan>...</g>"
            )

            self.processed_tasks = []
            tasks_list = self.get_tasks()
            if tasks_list is None:
                return False

            for section in tasks_list:
                if "tasks" in section:
                    for task in section["tasks"]:
                        await self.handle_task(task)

                if "subSections" in section:
                    for sub_section in section["subSections"]:
                        await self.handle_sub_section(sub_section)

            if self.recheck_claim:
                time.sleep(random.randint(5, 15))
                self.log.info(
                    f"<g>📃 Rechecking tasks for account <cyan>{self.account_name}</cyan>...</g>"
                )
                return await self.claim_tasks()

            self.log.info(
                f"<g>✅ Tasks claimed for account <cyan>{self.account_name}</cyan>!</g>"
            )
            return True
        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim tasks!</r>")
            return False

    async def handle_task(self, task):
        try:
            if ("isHidden" in task and task["isHidden"]) or "type" not in task:
                return

            task_id = task.get("id")
            task_status = task.get("status")
            if task_status is None or task_id is None:
                return

            if task_status == "FINISHED":
                return

            task_title = task.get("title", "Unknown Task")

            if task_status == "READY_FOR_CLAIM":
                if task_id in self.processed_tasks:
                    return
                self.log.info(f"<g>📃 Claiming task <c>{task_title}</c>...</g>")
                self.claim_task_request(task_id)
                self.processed_tasks.append(task_id)
                self.log.info(f"<g>✅ Task <c>{task_title}</c> claimed!</g>")
                time.sleep(random.randint(1, 5))
                self.game.get_balance()
                return

            if "subTasks" in task:
                for sub_task in task["subTasks"]:
                    await self.handle_task(sub_task)

            task_kind = task.get("kind")
            if task_kind is not None and task_kind in ["QUEST", "GROUP"]:
                return

            task_validation_type = task.get("validationType", "DEFAULT")
            if task_status == "STARTED" and task_validation_type not in ["KEYWORD"]:
                self.log.info(
                    f"<g>🟡 <c>{task_title}</c> Task is not ready to claim and is under verification.</g>"
                )
                return

            task_type = task.get("type")
            if task_type is None or task_type in [
                "PROGRESS_TARGET",
                "ONCHAIN_TRANSACTION",
            ]:
                return

            task_kind = task.get("kind")
            if task_kind is None or task_kind in ["ONGOING"]:
                return

            await self.start_progress(task)
        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to handle task!</r>")
            return

    async def start_progress(self, task):
        try:
            if task is None or "id" not in task:
                return

            task_id = task["id"]
            task_type = task.get("type")
            task_title = task.get("title", "Unknown Task")
            task_validation_type = task.get("validationType", "DEFAULT")
            answer_keyword = None

            if task_type == "WALLET_CONNECTION":
                wallet = Wallet(self.log, self.http, self.account_name)
                wallet_info = wallet.get_my()
                if wallet_info is None:
                    self.log.info(
                        f"<y>🟡 Wallet ins not connected to finish <c>{task_title}</c> task!</y>"
                    )
                    return
            elif task_type == "SOCIAL_SUBSCRIPTION":
                socialSubscription = task.get("socialSubscription", {})
                if (
                    "openInTelegram" in socialSubscription
                    and socialSubscription["openInTelegram"]
                    and self.tgAccount is not None
                ):
                    self.log.info(
                        f"<g>📒 Joining to Group/Channel <c>{task_title}</c> in Telegram...</g>"
                    )

                    channel_url = socialSubscription.get("url", "")

                    if channel_url != "" and (
                        "t.me" in channel_url or "@" in channel_url
                    ):
                        try:
                            await self.tgAccount.joinChat(
                                channel_url.replace("https://t.me/", "").replace(
                                    "@", ""
                                )
                            )
                            self.log.info(
                                f"<g>✅ Joined Telegram Group/Channel <c>{task_title}</c> successfully!</g>"
                            )
                        except Exception as e:
                            pass
            elif task_type == "APPLICATION_LAUNCH":
                if not getConfig("allow_start_other_bots", True):
                    self.log.info(
                        f"<y>🟡 'Auto Start Bots' is disabled. Skipping the task <c>{task_title}</c>.</y>"
                    )
                    return
                if self.tgAccount is None:
                    self.log.info(
                        f"<y>🟡 Cannot use the 'Auto Start Bots' feature for the task <c>{task_title}</c> because the account is not using the Pyrogram library.</y>"
                    )
                    return

                bot_data = task.get("applicationLaunch", {}).get("url", None)
                if bot_data is None:
                    return

                data = {
                    "task_type": "invite",
                    "task_data": bot_data,
                }
                api_response = self.get_api_data(data)
                if (
                    api_response is None
                    or "status" not in api_response
                    or api_response["status"] != "success"
                ):
                    return

                ref_link = api_response.get("referral")
                bot_id = api_response.get("bot_id")
                if ref_link is None or bot_id is None:
                    return

                self.log.info(f"<g>🚀 Starting bot <c>{task_title}</c>...</g>")
                try:
                    tg = TG(
                        bot_globals=self.bot_globals,
                        log=self.log,
                        accountName=self.account_name,
                        proxy=self.http.proxy,
                        BotID=bot_id,
                        ReferralToken=ref_link,
                    )
                    await tg.getWebViewData()

                    self.log.info(f"<g>✅ Bot <c>{bot_id}</c> started!</g>")
                    await asyncio.sleep(5)
                except Exception as e:
                    self.log.error(f"<r>⭕ {e} failed to start bot!</r>")
                    return
            elif task_type == "SOCIAL_MEDIA_CHECK" or task_type == "INTERNAL":
                pass
            else:
                self.log.info(f"<y>🟡 Task <c>{task_title}</c> is not supported!</y>")
                return

            if task_id in self.processed_tasks:
                return

            if task_validation_type == "KEYWORD":
                try:
                    data = {
                        "task_type": "keyword",
                        "task_id": task_id,
                        "task_name": task_title,
                    }
                    self.log.info(
                        f"<g>🔑 Getting keyword for task <c>{task_title}</c>...</g>"
                    )
                    api_response = self.get_api_data(data)
                    if api_response is None or "keyword" not in api_response:
                        return

                    answer_keyword = api_response.get("keyword")
                    if answer_keyword is None or answer_keyword == "":
                        return
                except Exception as e:
                    self.log.error(f"<r>⭕ {e} failed to get keyword!</r>")
                    return

                self.log.info(f"<g>🔑 Keyword found for task <c>{task_title}</c></g>")

            task_status = task.get("status")
            if task_status not in ["STARTED", "READY_FOR_VERIFY"]:
                self.log.info(f"<g>📔 Starting task <c>{task_title}</c>...</g>")
                self.processed_tasks.append(task_id)
                start_response = self.start_task_request(task_id)
                if start_response is None:
                    time.sleep(random.randint(1, 5))
                    return
                self.log.info(f"<g>✅ Task <c>{task_title}</c> started!</g>")
                self.recheck_claim = True

            time.sleep(random.randint(10, 25))
            if task_validation_type == "KEYWORD" and answer_keyword is not None:
                self.log.info(f"<g>🔑 Validating task <c>{task_title}</c>...</g>")
                self.processed_tasks.append(task_id)
                self.validate_task_request(task_id, answer_keyword)
                self.log.info(f"<g>✅ Task <c>{task_title}</c> validated!</g>")
                time.sleep(random.randint(1, 4))

            self.game.get_balance()

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to start progress!</r>")
            return

    def validate_task_request(self, task_id, keyword):
        try:
            response = self.http.post(
                url=f"/api/v1/tasks/{task_id}/validate",
                domain="earn",
                data=json.dumps({"keyword": keyword}),
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to validate task!</r>")

        return None

    def start_task_request(self, task_id):
        try:
            response = self.http.post(
                url=f"/api/v1/tasks/{task_id}/start",
                domain="earn",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to start task!</r>")
            return None

    def claim_task_request(self, task_id):
        try:
            response = self.http.post(
                url=f"/api/v1/tasks/{task_id}/claim",
                domain="earn",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim task!</r>")
            return None

    async def handle_sub_section(self, sub_section):
        try:
            if "tasks" in sub_section and "title" in sub_section:
                for task in sub_section["tasks"]:
                    await self.handle_task(task)
        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to handle sub section!</r>")
            return

    def get_tasks(self):
        try:
            response = self.http.get(
                url="/api/v1/tasks",
                domain="earn",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tasks!</r>")
            return None

    def get_api_data(self, data):
        if self.license_key is None:
            return None

        apiObj = API(self.log)
        data["game_name"] = "blum"
        data["action"] = "get_task"
        response = apiObj.get_task_answer(self.license_key, data)
        time.sleep(3)
        if "error" in response:
            self.log.error(f"<y>⭕ API Error: {response['error']}</y>")
            return None
        elif "status" in response and response["status"] == "success":
            return response
        elif (
            "status" in response
            and response["status"] == "error"
            and "message" in response
        ):
            self.log.info(f"<y>🟡 {response['message']}</y>")
            return None
        else:
            self.log.error(
                f"<y>🟡 Unable to get task answer, please try again later</y>"
            )
            return None