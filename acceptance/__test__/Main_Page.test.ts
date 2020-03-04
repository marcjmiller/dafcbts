Feature('Main Page');

Scenario('I see the TitleBar', (I) => {
    I.amOnPage('/');
    I.see('DumbAFCbts');
    I.see('LOGIN');
    I.click('.themeToggle');
});
