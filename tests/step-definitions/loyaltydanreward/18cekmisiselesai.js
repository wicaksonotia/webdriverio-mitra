import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import LoyaltyRewardPage from '../../pageobjects/loyaltydanreward/loyaltydanreward.page';
const dataTest = require('../../testdata/dte.data');

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[MITRA] 18. Cek Misi Selesai (Sudah Diverifikasi)');
allureReporter.addFeature('Cek Misi Selesai (Sudah Diverifikasi)');

Given(/^I am on the Loyalty & Reward page$/, async () => {
    await LoginPage.open()
    // await browser.maximizeWindow();
    await LoginPage.setLclStorage()
    await LoyaltyRewardPage.open()
    await browser.pause(3000)
    await LoginPage.acceptCookie()
    await LoyaltyRewardPage.page()
    await LoyaltyRewardPage.pageList()
    await browser.pause(3000)
});

When(/^I open tab Selesai and click expand button$/, async () => {
    await LoyaltyRewardPage.openTabSelesai()
});

Then(/^system should be show task table$/, async () => {
    await LoyaltyRewardPage.taskSelesai()
});
