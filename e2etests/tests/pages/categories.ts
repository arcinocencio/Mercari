import { Page } from "playwright";
import { locators } from "../locators/locators";
 
export class CategoriesPage {

    page:Page;
    constructor(page:Page) {
        this.page = page;   
    }

    async clickOnCategory(category: string, tier:string) {
        switch(tier) {
            case "1":
                await this.page.locator(locators.categories(category)).first().click();
                break;
            case "2":
                await this.page.locator(locators.categories(category)).first().click();
                break;
            case "3":
                await this.page.locator(locators.categories(category)).first().click();
                break;
            default:
                throw new Error('Invalid tier value');
        }
        
    }
} 