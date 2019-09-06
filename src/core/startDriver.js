import {Builder, By, Key, until} from 'selenium-webdriver';
import dotenv from "dotenv";

dotenv.config();

export default async () => {
    return await new Builder().forBrowser(process.env.BROWSER).build();
}
