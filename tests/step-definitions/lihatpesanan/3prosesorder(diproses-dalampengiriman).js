import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import LihatPesananPage from '../../pageobjects/lihatpesanan/lihatpesanan.page';
import DetailPemesananPage from '../../pageobjects/lihatpesanan/detailpemesanan.page';

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[MITRA] 03. Proses Order (Diproses-Dalam Pengiriman)');
allureReporter.addFeature('Proses Order (Diproses-Dalam Pengiriman)');

Given(/^I am on the Lihat Pesanan page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await LihatPesananPage.open()
    await LoginPage.acceptCookie()
    await LihatPesananPage.page()
    await LihatPesananPage.pageList()
});

When(/^I select Kode Pesanan from (.*)$/, async (namaToko) => {
    await LihatPesananPage.filterPesananBaru()
    await browser.pause(3000)
    await LihatPesananPage.search(namaToko)
    await LihatPesananPage.searchResult(namaToko)
    await LihatPesananPage.filterTanggal()
    await LihatPesananPage.viewDetailPemesanan()
});

Then(/^system should be leading to Detail Pemesanan page$/, async () => {
    await DetailPemesananPage.page()
});

Given(/^I am on the Detail Pemesanan page$/, async () => {
    await DetailPemesananPage.pageList()
});

When(/^I change status order$/, async () => {
    await DetailPemesananPage.viewStatus()
    await DetailPemesananPage.updateStatus()
    await DetailPemesananPage.statusDiproses()
    await DetailPemesananPage.updateStatus()
});

Then(/^system should be able to update status order$/, async () => {
    await DetailPemesananPage.statusDalamPengiriman()
});
