/// <reference path="../steps.d.ts" />

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
    I.click('.theme-toggle--button');
    I.dontSeeElement('.toggle-light');
    I.seeElement('.toggle-dark');
    I.click('.theme-toggle--button');
    I.dontSeeElement('.toggle-dark');
    I.seeElement('.toggle-light');
});

Scenario('I can click the login button and submit the form to login', (I) => {
    I.see('LOGIN');
    I.click('LOGIN');
    I.seeElement('.login--modal');
    I.click('SUBMIT');
    I.see('BILLY');
});

Scenario('I see cards loaded with CBTs', (I) => {
    I.waitForText('VIEW ANSWERS', 5);
    I.see('Test CBT Please Ignore', '.cbt-card--container');
    I.see('Its a test', '.cbt-card--content');
    I.see('VIEW ANSWERS', '.cbt-card--button-container');
    I.see('TAKE THIS CBT', '.cbt-card--button-container');
});
