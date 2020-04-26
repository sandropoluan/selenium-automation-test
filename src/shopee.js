import startDriver from "./core/startDriver";
import config from "config";
import {Builder, By, Key, until} from 'selenium-webdriver';
import dotenv from "dotenv";

const cookieArray = `${process.env.COOKIE}`.split("; ");

(async () => {
  const driver = await startDriver();

  await driver.manage().window().setRect({width: 340, height: 800});

  await driver.get(`${process.env.GAME_URL}`);

  await new Promise(async resolve => {
    cookieArray.map(async function (item) {
      const arrayItem = item.split("=");
      const name = arrayItem[0];
      arrayItem.splice(0, 1);
      const value = arrayItem.join("=");
      await driver.manage().addCookie({name, value, domain: '.shopee.co.id', path: '/'});
    });
    resolve();
  });

  await driver.sleep(1000);
  await driver.get(`${process.env.GAME_URL}`);

  const action = driver.actions();
  try {
    //const selectElement = await driver.findElement(By.id('s-0'));
    await driver.sleep(1000);
  } finally {
    await driver.sleep(30000);
    await driver.quit();
  }
})();
