import { Logs } from "./services";
import dotenv from "dotenv";
import { RoflService } from "./services/rofl";
dotenv.config();

export const logs = new Logs(process.env.TELEGRAM_BOT_TOKEN!, process.env.TELEGRAM_GROUP_ID!);
async function main() {
    logs.log("Hello, world!");

    // if (process.env.IN_ROFL === "TRUE") {
    //     const rofl = new RoflService();
    //     const key = await rofl.fetchKey("test");
    //     logs.log(`Key: ${key}`);
    // }
}
main();
