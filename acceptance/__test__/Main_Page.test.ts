Feature('Main Page');

Before((I) => {
    I.amOnPage('/');
});

Scenario('I see the NavBar', (I) => {
    I.see('DumbAFCbts');
    I.see('LOGIN');
    I.click('.themeToggle');
});

Scenario('I can toggle Themes', (I) => {
    I.seeElement('.toggle-light');
    I.click('.themeToggle');
    I.dontSeeElement('.toggle-light');
    I.seeElement('.toggle-dark');
});
