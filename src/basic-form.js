import startDriver from "./core/startDriver";
import config from "config";
import {Builder, By, Key, until} from 'selenium-webdriver';

(async () => {
    const driver = await startDriver();
    await driver.get(`https://www.seleniumeasy.com/test/basic-first-form-demo.html`);
    try {
        await setTimeout(async () => {

            const formElement = await driver.findElement(By.id(`get-input`));
            const inputElement = await formElement.findElement(By.id(`user-message`));
            const btnElement = await formElement.findElement(By.className(`btn btn-default`));
            await inputElement.sendKeys(`Hello test input selenium`);
            await btnElement.click();

            await setTimeout(async () => {
                const formElement2 = await driver.findElement(By.id(`gettotal`));
                await driver.executeScript("arguments[0].scrollIntoView();", formElement2);
                await setTimeout(async () => {
                    await formElement2.findElement(By.id(`sum1`)).sendKeys(12);
                    await formElement2.findElement(By.id(`sum2`)).sendKeys(130);
                    await formElement2.findElement(By.className(`btn btn-default`)).click();
                }, 1500);
            }, 2000);
        }, 1500);

        setTimeout(async () => {
            await driver.quit()
        }, 20000);

    } finally {

    }
})();
