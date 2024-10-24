import { Page } from "playwright";
import { expect } from "playwright/test";
import { locators } from "../locators/locators";
 
export class SearchedPage {

    page:Page;
    constructor(page:Page) {
        this.page = page;   
    }

   async verifyTierCategory(value: string, tier: string) {
    switch (tier) {
        case "1": 
            await this.checkSelectCategory(value, tier);
            break;
        case "2": 
            await this.checkSelectCategory(value, tier);
            break;
        case "3": 
            await this.checkGroupCategory(value);
            break;
        default:
            throw new Error('Invalid tier value');
    }
   }

   async checkSelectCategory(value: string, tier: string) {
    const selectedText = await this.page.locator(locators.tierCategory(tier)).evaluate((select) => {
        const selectElement = select as HTMLSelectElement;  // Cast select to HTMLSelectElement
        return selectElement.options[selectElement.selectedIndex].text;
      });
      console.log(selectedText);
    await expect(selectedText).toContain(value);
   }

   async checkGroupCategory(value: string) {
    const label = await this.page.locator('//label[@class="merCheckboxLabel"]').filter({hasText: value}).first();
    const isChecked = await label.locator('//input[@checked]').isChecked();
    await expect(isChecked).toBeTruthy();
   }

   async clickTheLogo() {
    await this.page.locator(locators.logo).click();
    await this.page.waitForSelector(locators.searchBarField);
   }

   async clearSearchBar() {
    await this.page.locator(locators.searchBarField).clear();
   }
} 