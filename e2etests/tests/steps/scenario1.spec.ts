import { Given, When, Then} from '@cucumber/cucumber';
import { getBasePage } from '../../corelib/basepage.spec';
import { Homepage } from '../pages/homepage';
import { CategoriesPage } from '../pages/categories';
import { SearchedPage } from '../pages/searchedPage';

let homepage:Homepage;
let categories:CategoriesPage;
let searchPage:SearchedPage;
       
Given('User navigate to {string}', 
    async function (url: string) {
        homepage = new Homepage(getBasePage());
        await homepage.goToPage(url);
});

When('Click on the search bar {string}',
    async function (placeholder: string) {
        homepage = new Homepage(getBasePage());
        await homepage.clickOnSearchBar(placeholder);
});


When('Click on the {string}', 
    async function (category: string) {
        homepage = new Homepage(getBasePage());
        await homepage.clickOnSearchCategory(category);
    
});

When('Select {string} as the tier {string} category', 
    async function (category: string, tier: string) {
        categories = new CategoriesPage(getBasePage());
        await categories.clickOnCategory(category, tier);
});

Then('Verify that the search conditions on the left sidebar are set correctly {string} {string} and {string}', 
    async function (tier1: string, tier2:string, tier3:string) {
        searchPage = new SearchedPage(getBasePage());
        await searchPage.verifyTierCategory(tier1, "1");
        await searchPage.verifyTierCategory(tier2, "2");
        await searchPage.verifyTierCategory(tier3, "3");
  });


