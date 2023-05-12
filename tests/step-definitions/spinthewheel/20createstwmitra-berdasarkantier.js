import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import spinTheWheelPage from '../../pageobjects/spinthewheel/spinthewheel.page';
import mitraSuperPuterCreatePage from '../../pageobjects/spinthewheel/mitrasuperputercreate.page';

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[MITRA] 20. Create Program STW Mitra (Audience - Berdasarkan Tier)');
allureReporter.addFeature('Create Program STW Mitra (Audience - Berdasarkan Tier)');

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

When (/^I click button Buat Program Baru$/, async () => {
    await spinTheWheelPage.btnProgramBaru()
});

Then (/^system should be leading to mitra super puter buat page$/, async () => {
    await mitraSuperPuterCreatePage.Page()
});

Given (/^I am on the mitra super puter buat page$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Nama Program (.*)$/, async (nama_program) => {
    await mitraSuperPuterCreatePage.namaProgram(nama_program)
});

Then (/^System should be able to input Nama Program$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Total Budget (.*)$/, async (total_budget) => {
    await mitraSuperPuterCreatePage.totalBudget(total_budget)
});

Then (/^System should be able to input Total Budget$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I select date in Tanggal Mulai$/, async () => {
    await mitraSuperPuterCreatePage.tanggalMulai()
});  

Then (/^System should be able to select Tanggal Mulai$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I select time in Jam Mulai$/, async () => {
    await mitraSuperPuterCreatePage.jamMulai()
});  

Then (/^System should be able to select time in Jam Mulai$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I select date in Tanggal Berakhir$/, async () => {
    await mitraSuperPuterCreatePage.tanggalBerakhir()
});  

Then (/^System should be able to select date in Tanggal Berakhir$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Minimum Nilai Transaksi (.*)$/, async (minimum_nilai_transaksi) => {
    await mitraSuperPuterCreatePage.minimumNilaiTransaksi(minimum_nilai_transaksi)
});

Then (/^System should be able to input Minimum Nilai Transaksi$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I select time in Jam Berakhir$/, async () => {
    await mitraSuperPuterCreatePage.jamBerakhir()
});  

Then (/^System should be able to select Jam Berakhir$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Limit Spin Keseluruhan (.*)$/, async (limit_spin_keseluruhan) => {
    await mitraSuperPuterCreatePage.limitSpinKeseluruhan(limit_spin_keseluruhan)
});

Then (/^System should be able to input Limit Spin Keseluruhan$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Minimum Frekuensi Belanja B2B Mingguan (.*)$/, async (minimum_frekuensi_belanja) => {
    await mitraSuperPuterCreatePage.minimumFrekuensiBelanja(minimum_frekuensi_belanja)
});

Then (/^System should be able to input Minimum Frekuensi Belanja B2B Mingguan$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I input Maksimal Frekuensi Reward Per Minggu (.*)$/, async (maksimal_frekuensi_reward) => {
    await mitraSuperPuterCreatePage.maksimalFrekuensiReward(maksimal_frekuensi_reward)
});

Then (/^System should be able to input Maksimal Frekuensi Reward Per Minggu$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I click button Simpan in Detail Program$/, async () => {
    await mitraSuperPuterCreatePage.SimpanDetailProgram()
});  

Then (/^System should be able to submit data in Detail Program$/, async () => {
    await mitraSuperPuterCreatePage.DetailProgramPage()
});

When (/^I click tab Audience$/, async () => {
    await mitraSuperPuterCreatePage.tabAudience()
});

Then (/^system should be leading to Audience$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I select radio button berdasarkan tier$/, async () => {
    await mitraSuperPuterCreatePage.berdasarkanTier()
});

Then (/^System should be able to select dropdown pilih tier$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I click pilih tier$/, async () => {
    await mitraSuperPuterCreatePage.dropPilihTier()
});

Then (/^System should be able to show checkbox tier$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I click checkbox pilih tier and update$/, async () => {
    await mitraSuperPuterCreatePage.optionTierBasic()
    await mitraSuperPuterCreatePage.updateAudience()
    await mitraSuperPuterCreatePage.dropPilihTier()
    await mitraSuperPuterCreatePage.optionTierBasic1()
    await mitraSuperPuterCreatePage.optionTierPlatinum()
    await mitraSuperPuterCreatePage.updateAudience()
    await mitraSuperPuterCreatePage.dropPilihTier()
    await mitraSuperPuterCreatePage.optionTierPlatinum1()
    await mitraSuperPuterCreatePage.optionTierGold()
    await mitraSuperPuterCreatePage.updateAudience()
    await mitraSuperPuterCreatePage.dropPilihTier()
    await mitraSuperPuterCreatePage.optionTierPlatinum()
    await mitraSuperPuterCreatePage.updateAudience()
});

Then (/^System should be able click tier and click button update tier$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I click button Simpan in Audience$/, async () => {
    await mitraSuperPuterCreatePage.simpanAudience()
});

Then (/^System should be able to submit data in Audience$/, async () => {
    await mitraSuperPuterCreatePage.AudienceTabPage()
});

When (/^I click tab Pengaturan Mekanisme$/, async () => {
    await mitraSuperPuterCreatePage.tabPengaturanMekanisme()
});

Then (/^system should be leading to Pengaturan Mekanisme$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input poin1 in pengaturan Mekanisme (.*)$/, async (poin1) => {
    await mitraSuperPuterCreatePage.Poin1(poin1)
});

Then (/^system should be able to input poin1$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input kesempatan1 (.*)$/, async (kesempatan1) => {
    await mitraSuperPuterCreatePage.Kesempatan1(kesempatan1)
});

Then (/^system should be able to input kesempatan1$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input poin2 in pengaturan Mekanisme (.*)$/, async (poin2) => {
    await mitraSuperPuterCreatePage.Poin2(poin2)
});

Then (/^system should be able to input poin2$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input kesempatan2 (.*)$/, async (kesempatan2) => {
    await mitraSuperPuterCreatePage.Kesempatan2(kesempatan2)
});

Then (/^system should be able to input kesempatan2$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input poin3 in pengaturan Mekanisme (.*)$/, async (poin3) => {
    await mitraSuperPuterCreatePage.Poin3(poin3)
});

Then (/^system should be able to input poin3$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input kesempatan3 (.*)$/, async (kesempatan3) => {
    await mitraSuperPuterCreatePage.Kesempatan3(kesempatan3)
});

Then (/^system should be able to input kesempatan3$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input poin4 in pengaturan Mekanisme (.*)$/, async (poin4) => {
    await mitraSuperPuterCreatePage.Poin4(poin4)
});

Then (/^system should be able to input poin4$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input kesempatan4 (.*)$/, async (kesempatan4) => {
    await mitraSuperPuterCreatePage.Kesempatan4(kesempatan4)
});

Then (/^system should be able to input kesempatan4$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input poin5 in pengaturan Mekanisme (.*)$/, async (poin5) => {
    await mitraSuperPuterCreatePage.Poin5(poin5)
});

Then (/^system should be able to input poin5$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I input kesempatan5 (.*)$/, async (kesempatan5) => {
    await mitraSuperPuterCreatePage.Kesempatan5(kesempatan5)
});

Then (/^system should be able to input kesempatan5$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I click button perbarui contoh$/, async () => {
    await mitraSuperPuterCreatePage.perbaruiContoh()
});

Then (/^system should be able to update poin and kesempatan$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I click button publish ke aplikasi$/, async () => {
    await mitraSuperPuterCreatePage.publishkeAplikasi()
});

Then (/^system should be able to click button publish spin the wheel$/, async () => {
    await mitraSuperPuterCreatePage.pengaturanMekanismePage()
});

When (/^I click tab program berjalan$/, async () => {
    await mitraSuperPuterCreatePage.tabProgramBerjalan()
});

Then (/^system should be leading to program berjalan$/, async () => {
    await mitraSuperPuterCreatePage.Page()
});