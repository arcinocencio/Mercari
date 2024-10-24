import { Page } from "playwright";
import { locators } from "../locators/locators";
import { expect } from "playwright/test";
 
export class Homepage {

    page:Page;
    constructor(page:Page) {
        this.page = page;   
    }

    async goToPage(url:string){
        await this.page.goto(url);
    }

    async clickOnSearchBar(placeholder: string){
        switch(placeholder) {
            case "なにをお探しですか":
                await this.page.locator(locators.searchBarField).click();
                break;
            case "検索キーワードを入力":
                await this.page.locator(locators.searchBarFieldWithValue(placeholder)).click();
                break;
            default:
                throw new Error('Invalid placeholder value');
        }
        
    }

    async clickOnSearchCategory(value:string){
        await this.page.locator(locators.searchCategory(value)).click();
    }

    async countSearchedHistory(searchCount: string){
        const totalSearched = await this.page.locator(locators.searchHistory).count();
        await expect(totalSearched).toEqual(parseInt(searchCount));
    }

    async verifyLatestSearchedHistory(value: string){
        const latestSearched = await this.page.locator(locators.searchHistory).first();
        const getText = await latestSearched.textContent();
        await expect(getText).toContain(value);
    }

    async inputSearchValue(value: string){
        await this.page.locator(locators.searchBarField).fill(value);
        await this.page.locator(locators.searchBarField).press('Enter');
    }

    async pause(){
        await this.page.pause();
    }
} 