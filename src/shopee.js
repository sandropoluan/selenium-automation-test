import startDriver from "./core/startDriver";
import {expect} from "chai";
import {beforeEach, before, after} from "mocha"
import config from "config";
import {Builder, By, Key, until} from 'selenium-webdriver';
import dotenv from "dotenv";

const cookieArray = `${process.env.COOKIE}`.split("; ");

describe("Game Board", () => {
  let driver, firstBlock, rollElement;

  before(async () => {

    driver = await startDriver();

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
      await driver.sleep(500);
      resolve();
    });

    await driver.sleep(1000);
    await driver.get(`${process.env.GAME_URL}`);

    await driver.sleep(3000);
    try {
      firstBlock = await driver.findElement(By.id('s-0'));
    } catch (e) {
      firstBlock = null;
    }

    try {
      rollElement = await driver.findElement(By.xpath("//*[text()[contains(.,'Klik untuk melempar')]]"));
    } catch (e) {
      rollElement = null;
    }
  });

  it("Page is loaded", async () => {
    expect(!!firstBlock).to.equal(true);
  });

  it("Is login", async () => {
    expect(!!rollElement).to.equal(true);
  });

  after(() => {
    driver.quit();
  });
});
