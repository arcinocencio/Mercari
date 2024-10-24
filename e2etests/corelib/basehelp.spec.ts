import { Page } from "playwright";
 
export class BaseHelper {

    page:Page;
    constructor(page:Page) {
        this.page = page;   
    }

    async waitForPageToLoad(){
        await this.page.waitForSelector('//div[@id="item-grid"]');
        await this.page.waitForLoadState('networkidle');
    }

    async pause(){
        await this.page.pause();
    }
} 