import { When, Then } from '@cucumber/cucumber';
import { getBasePage } from '../../corelib/basepage.spec';
import { Homepage } from '../pages/homepage';
import { SearchedPage } from '../pages/searchedPage';
import { BaseHelper } from '../../corelib/basehelp.spec';
 
let homepage:Homepage;
let searchPage:SearchedPage;
let basehelper:BaseHelper;


When('Search for {string}', 
    async function (string) {
        homepage = new Homepage(getBasePage());
        await homepage.inputSearchValue(string);
});


Then('Verify there are {string} browsing histories', 
    async function (totalNumberOfSearch: string) {
        homepage = new Homepage(getBasePage());
        await homepage.countSearchedHistory(totalNumberOfSearch);
});

Then('Verify the latest browsing history is showing correctly {string}', 
    async function (search: string) {
        homepage = new Homepage(getBasePage());
        await homepage.verifyLatestSearchedHistory(search);
});

When('Navigate to homepage', 
    async function () {
       searchPage = new SearchedPage(getBasePage());
       await searchPage.clickTheLogo();
});

When('Wait for page to load',
    async function () {
        basehelper = new BaseHelper(getBasePage());
        await basehelper.waitForPageToLoad();
    }
)

When('Clear search bar', 
    async function () {
        searchPage = new SearchedPage(getBasePage());
        await searchPage.clearSearchBar();
})

When('Pause', 
    async function () {
        homepage = new Homepage(getBasePage());
        await homepage.pause();
});

