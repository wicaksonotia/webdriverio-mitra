import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import spinTheWheelPage from '../../pageobjects/spinthewheel/spinthewheel.page';
import mitraSuperPuterCreatePage from '../../pageobjects/spinthewheel/mitrasuperputercreate.page';

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[MITRA] 26. Edit Program STW Mitra');
allureReporter.addFeature('Edit Program STW Mitra');

Given(/^I am on the Spin the Wheel page$/, async () => {
   await LoginPage.open()
   await LoginPage.setLclStorage()
   await spinTheWheelPage.open()
   await browser.pause(3000)
   await LoginPage.acceptCookie()
   await browser.pause(3000)
   await spinTheWheelPage.page()
   //await spinTheWheelPage.pageList()
});

When (/^I search program and click button edit Spin the Wheel(.*)$/, async (program) => {
    await spinTheWheelPage.Search(program)
    await spinTheWheelPage.Edit()
});

Then (/^System should be find program and leading to mitra super puter buat page$/, async () => {
    await mitraSuperPuterCreatePage.Page()
});

Given (/^I am on the mitra super puter buat page$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Nama Program (.*)$/, async (nama_program) => {
    await mitraSuperPuterCreatePage.namaProgram(nama_program)
});

Then (/^System show Nama Program$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I select date in Tanggal Berakhir$/, async () => {
    await mitraSuperPuterCreatePage.tanggalBerakhir1()
});  

Then (/^System show Tanggal Berakhir$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Minimum Frekuensi Belanja B2B Mingguan (.*)$/, async (minimum_frekuensi_belanja) => {
    await mitraSuperPuterCreatePage.minimumFrekuensiBelanja(minimum_frekuensi_belanja)
});

Then (/^System show Minimum Frekuensi Belanja B2B Mingguan$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Maksimal Frekuensi Reward Per Minggu (.*)$/, async (maksimal_frekuensi_reward) => {
    await mitraSuperPuterCreatePage.maksimalFrekuensiReward(maksimal_frekuensi_reward)
});

Then (/^System show Maksimal Frekuensi Reward Per Minggu$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input cari produk disini in Pembatasan Produk$/, async () => {
    await mitraSuperPuterCreatePage.cariProdukDisini()
});

Then (/^system should show listbox$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I select Test Poduct in listbox$/, async () => {
    await mitraSuperPuterCreatePage.selectTestProduct()
});

Then (/^system show Test Poduct$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input min Value (.*)$/, async (min_value) => {
    await mitraSuperPuterCreatePage.MinValue(min_value)
});

Then (/^system show min Value$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I click button Simpan in Detail Program Page$/, async () => {
    await mitraSuperPuterCreatePage.SimpanDetailProgram()
});  

Then (/^System save data in Detail Program Page$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I click tab Audience$/, async () => {
    await mitraSuperPuterCreatePage.tabAudience()
});

Then (/^system should be leading to Audience page$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I select radio button berdasarkan tier$/, async () => {
    await mitraSuperPuterCreatePage.berdasarkanTier()
});

Then (/^System show dropdown pilih tier$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I click pilih tier$/, async () => {
    await mitraSuperPuterCreatePage.dropPilihTier()
});

Then (/^System show checkbox tier$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I click pilih tier gold$/, async () => {
    await mitraSuperPuterCreatePage.optionTierGold()
});

Then (/^System show tier gold$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I click button Update Audience$/, async () => {
    await mitraSuperPuterCreatePage.updateAudience()
});

Then (/^system show update data in target audience$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});
