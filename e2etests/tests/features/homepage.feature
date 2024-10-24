Feature: Search Feature

Scenario: Search conditions are set correctly
Given User navigate to 'https://jp.mercari.com/'
When Click on the search bar 'なにをお探しですか'
And Click on the 'カテゴリーからさがす'
And Select '本・雑誌・漫画' as the tier '1' category
And Select '本' as the tier '2' category
And Select 'コンピュータ・IT' as the tier '3' category
Then Verify that the search conditions on the left sidebar are set correctly '本・雑誌・漫画' '本' and 'コンピュータ・IT'


Scenario: Search conditions are set correctly from the latest browsing history
Given User navigate to 'https://jp.mercari.com/'
When Click on the search bar 'なにをお探しですか'
And Click on the 'カテゴリーからさがす'
And Select '本・雑誌・漫画' as the tier '1' category
And Select '本' as the tier '2' category
And Select '文学・小説' as the tier '3' category
And Wait for page to load
When Click on the search bar '検索キーワードを入力'
And Click on the 'カテゴリーからさがす'
And Select '本・雑誌・漫画' as the tier '1' category
And Select '本' as the tier '2' category
And Select 'コンピュータ・IT' as the tier '3' category
And Wait for page to load
And Click on the search bar '検索キーワードを入力'
Then Verify there are '2' browsing histories
And Verify the latest browsing history is showing correctly 'コンピュータ・IT'
And Search for 'Javascript'
And Wait for page to load
And Click on the search bar '検索キーワードを入力'
And Clear search bar
Then Verify there are '3' browsing histories
And Verify the latest browsing history is showing correctly 'Javascript'