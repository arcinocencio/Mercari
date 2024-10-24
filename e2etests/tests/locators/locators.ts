export const locators = {
    searchBarField: '//input[contains(@placeholder, "なにをお探しですか")]',
    searchBarFieldWithValue:(value: string) => `//input[@aria-label="${value}"]`,
    tierCategory:(tier: string) => `//*[@id="accordion_content"]//div[contains(@class, "merSelect fluid")][${tier}]//select`,
    searchCategory:(value: string) => `//p[contains(text(), "${value}")]`,
    categories: (value: string) => `//a[text() = "${value}"]`,
    searchHistory: '//section[@data-testid="search-history"]//div[contains(@class, "merListItem")]',
    logo: '//a[@location-2="logo"]',
}