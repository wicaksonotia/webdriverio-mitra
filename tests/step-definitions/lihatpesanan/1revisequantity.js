import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import LihatPesananPage from "../../pageobjects/lihatpesanan/lihatpesanan.page";
import DetailPemesananPage from "../../pageobjects/lihatpesanan/detailpemesanan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[MITRA] 01. Revise Quantity");
allureReporter.addFeature("Revise Quantity");

Given(/^I am on the Lihat Pesanan page$/, async () => {
  await LoginPage.open();
  // await browser.maximizeWindow();
  await LoginPage.setLclStorage();
  await LihatPesananPage.open();
  await LoginPage.acceptCookie();
  await LihatPesananPage.page();
  await LihatPesananPage.pageList();
});

When(/^I select Kode Pesanan from (.*)$/, async (namaToko) => {
  await LihatPesananPage.filterPesananBaru();
  await browser.pause(3000);
  await LihatPesananPage.search(namaToko);
  await LihatPesananPage.searchResult(namaToko);
  await LihatPesananPage.filterTanggal();
  await LihatPesananPage.viewDetailPemesanan();
});

Then(/^system should be leading to Detail Pemesanan page$/, async () => {
  await DetailPemesananPage.page();
});

Given(/^I am on the Detail Pemesanan page$/, async () => {
  await DetailPemesananPage.pageList();
});

When(
  /^I select tab Produk yang Dibeli, revise quantity product and submit$/,
  async () => {
    await DetailPemesananPage.openTabProdukYangDibeli();
    await DetailPemesananPage.showQuantityBefore();
    await browser.pause(3000);
    await DetailPemesananPage.reviseQuantity({ jumlah: "3" });
  }
);

Then(/^system should be able to update quantity product order$/, async () => {
  await DetailPemesananPage.showQuantityAfter();
});
