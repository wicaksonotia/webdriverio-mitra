import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import LoyaltyRewardPage from '../../pageobjects/loyaltydanreward/loyaltydanreward.page';
import IsiKuesionerPage from '../../pageobjects/loyaltydanreward/isikuesioner.page';
const dataTest = require('../../testdata/dte.data');

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[MITRA] 08. Submit Misi TBR (ke Pilgan Singkat)');
allureReporter.addFeature('Submit Misi TBR (ke Pilgan Singkat)');

Given(/^I am on the Loyalty & Reward page$/, async () => {
    await LoginPage.open()
    // await browser.maximizeWindow();
    await LoginPage.setLclStorage()
    await LoyaltyRewardPage.open()
    await browser.pause(3000)
    await LoginPage.acceptCookie()
    await LoyaltyRewardPage.page()
    //await LoyaltyRewardPage.pageList()
    await browser.pause(3000)
    await LoyaltyRewardPage.taskDetail()
});

When(/^I click button Isi Kuesioner$/, async () => {
    await LoyaltyRewardPage.doTask()
});

Then(/^system should be leading to Kuesioner page$/, async () => {
    await browser.pause(3000)
    // await IsiKuesionerPage.page()
    await IsiKuesionerPage.pageList()
});

When(/^I do and submit questionnaire form$/, async () => {
    await IsiKuesionerPage.kePilganSingkat(dataTest.jawabanKuesioner.jawabanSingkat)
});

Then(/^system should be able to submit data$/, async () => {
    await LoyaltyRewardPage.page()
    await LoyaltyRewardPage.pageList()
});
