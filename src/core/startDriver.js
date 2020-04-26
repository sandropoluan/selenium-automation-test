import {Builder, By, Key, until} from 'selenium-webdriver';
import chrome from "selenium-webdriver/chrome";
import dotenv from "dotenv";

dotenv.config();


export default async () => {

    const opts = new chrome.Options();
    opts.addArguments(['user-agent="Shopee Beeshop"']);

    return await new Builder().withCapabilities(opts).build();
}
