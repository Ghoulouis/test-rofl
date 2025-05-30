import { Telegraf } from "telegraf";

export class Logs {
    private bot: Telegraf;
    private chaiId: string;

    constructor(TELEGRAM_BOT_TOKEN: string, TELEGRAM_GROUP_ID: string) {
        this.bot = new Telegraf(TELEGRAM_BOT_TOKEN);
        this.chaiId = TELEGRAM_GROUP_ID;
        this.bot.launch().then(() => {
            this.log("🤖 Bot is running...");
        });
    }

    private escapeHtml(text: string) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    async log(message: string) {
        try {
            console.log(message);
            const safeMessage = this.escapeHtml(message);
            await this.bot.telegram.sendMessage(this.chaiId, safeMessage, {
                parse_mode: "HTML",
            });
        } catch (error) {
            console.error("Telegram Log Error:", error);
        }
    }
}
