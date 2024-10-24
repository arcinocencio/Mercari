import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

let browser:Browser;
let bCtx:BrowserContext;
let page:Page;
setDefaultTimeout(1000 * 60 * 2);

Before(async function () {
    browser = await chromium.launch({headless: false, channel: "chrome", args:['--start-maximized'] });
    bCtx = await browser.newContext({viewport: null, javaScriptEnabled: true});
    page = await bCtx.newPage();
});


After(async function () {
    await page.close();
    await bCtx.close();
    await browser.close();
})

export function getBasePage():Page{ 
    return page;};