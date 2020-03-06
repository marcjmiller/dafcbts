Feature('Main Page');

Before((I) => {
    I.amOnPage('/');
});

Scenario('I see the NavBar rendered properly', (I) => {
    I.seeElement('.menu-icon--wrapper');
    I.see('DumbAFCbts');
    I.see('LOGIN');
    I.seeElement('.lightbulb-icon--wrapper');
});

Scenario('I can toggle Themes using the themetoggle button', (I) => {
    I.seeElement('.toggle-light');
    I.click('.themeToggle');
    I.dontSeeElement('.toggle-light');
    I.seeElement('.toggle-dark');
    I.click('.themeToggle');
    I.dontSeeElement('.toggle-dark');
    I.seeElement('.toggle-light');
});

Scenario('I can click the login button and get to a login prompt', (I) => {
    I.see('LOGIN');
    I.click('LOGIN');
    I.see('.login-modal');
});
