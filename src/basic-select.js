import startDriver from "./core/startDriver";
import config from "config";
import {Builder, By, Key, until} from 'selenium-webdriver';

(async () => {
    const driver = await startDriver();
    await driver.get(`https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html`);
    const action =  driver.actions();
    try {
        const selectElement = await driver.findElement(By.id(`select-demo`));
        await driver.sleep(1000);
        await selectElement.findElement(By.css(`option[value='Wednesday']`)).click();
        await driver.sleep(1000);

        const multiSelectElement = await driver.findElement(By.id(`multi-select`));
        await driver.executeScript("arguments[0].scrollIntoView();", multiSelectElement);

        await driver.sleep(500);
        action.keyDown(Key.CONTROL);
        await multiSelectElement.findElement(By.css(`option[value='New Jersey']`)).click();
        await driver.sleep(500);
        await multiSelectElement.findElement(By.css(`option[value='Texas']`)).click();
        await driver.sleep(500);
        await multiSelectElement.findElement(By.css(`option[value='Washington']`)).click();
        action.keyUp(Key.CONTROL);
        await driver.sleep(500);
        await driver.findElement(By.id(`printAll`)).click();

    } finally {
        await driver.sleep(10000);
        await driver.quit();
    }
})();
