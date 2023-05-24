import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class DetailPemesananPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("div.h1.mt-16");
  }

  get tabMenu() {
    return $("#mat-tab-label-1-1");
  }

  get btnUbah() {
    return $("span.pl-8");
  }
  get jumlahProduk() {
    return $("td:nth-child(7) > div > span");
  }
  get editJumlah() {
    return $('input[formcontrolname="amount"]');
  }
  get btnSimpan() {
    return $("tr:nth-child(1) > td:nth-child(9) > div");
  }
  get btnSubmit() {
    return $("button.mat-raised-button");
  }

  //status
  get pesananDilihat() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-pesanan-dilihat-color"]'
    );
  }
  get diproses() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-diproses-color"]'
    );
  }
  get konfirmasiPerubahan() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-konfirmasi-perubahan-color"]'
    );
  }
  get perubahanDisetujui() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-perubahan-disetujui-color"]'
    );
  }
  get siapDiambil() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-siap-diambil-color"]'
    );
  }
  get dalamPengiriman() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-dalam-pengiriman-color"]'
    );
  }
  get pesananDiterima() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-pesanan-diterima-color"]'
    );
  }
  get selesai() {
    return $(
      '[class="status text-truncate h6 p-4 status-order mat-selesai-color"]'
    );
  }

  get drpdwnStatusPemesanan() {
    return $("div.mat-select-trigger");
  }
  get selectStatusPemesanan() {
    return $$('mat-option[role="option"] > span');
  }
  get btnPerbaruiStatus() {
    return $("button.mat-accent");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async pageList() {
    await expect(this.titlePage).toHaveText("Detail Pemesanan");
  }

  async openTabProdukYangDibeli() {
    await this.tabMenu.waitForClickable();
    await expect(this.tabMenu).toBeClickable();
    await this.tabMenu.click();
  }

  async showQuantityBefore() {
    await console.log(
      "Jumlah produk sebelum direvisi: " + (await this.jumlahProduk.getText())
    );
  }

  async reviseQuantity(jumlah) {
    await this.btnUbah.waitForClickable();
    await expect(this.btnUbah).toBeClickable();
    await this.btnUbah.click();
    await this.editJumlah.waitForClickable();
    await expect(this.editJumlah).toBeClickable();
    await this.editJumlah.click();
    await this.editJumlah.setValue(jumlah);
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await this.btnSubmit.waitForClickable();
    await expect(this.btnSubmit).toBeClickable();
    await this.btnSubmit.click();
  }

  async showQuantityAfter() {
    // await console.log('Jumlah produk sesudah direvisi: '+await this.jumlahProduk.getText())
  }

  async viewStatus() {
    await this.pesananDilihat.scrollIntoView();
    await expect(this.pesananDilihat).toBeExisting();
    await expect(this.drpdwnStatusPemesanan).toBeExisting();
  }

  async updateStatus() {
    await this.drpdwnStatusPemesanan.waitForClickable();
    await expect(this.drpdwnStatusPemesanan).toBeClickable();
    await this.drpdwnStatusPemesanan.click();
    await this.selectStatusPemesanan[0].waitForClickable();
    await expect(this.selectStatusPemesanan[0]).toBeClickable();
    await this.selectStatusPemesanan[0].click();
    await this.btnPerbaruiStatus.waitForClickable();
    await expect(this.btnPerbaruiStatus).toBeClickable();
    await this.btnPerbaruiStatus.click();
  }

  async updateStatusSelesai() {
    await this.drpdwnStatusPemesanan.waitForClickable();
    await expect(this.drpdwnStatusPemesanan).toBeClickable();
    await this.drpdwnStatusPemesanan.click();
    await this.selectStatusPemesanan[1].waitForClickable();
    await expect(this.selectStatusPemesanan[1]).toBeClickable();
    await this.selectStatusPemesanan[1].click();
    await this.btnPerbaruiStatus.waitForClickable();
    await expect(this.btnPerbaruiStatus).toBeClickable();
    await this.btnPerbaruiStatus.click();
  }

  async statusDiproses() {
    await expect(this.diproses).toBeExisting();
  }

  async statusKonfirmasiPerubahan() {
    await expect(this.konfirmasiPerubahan).toBeExisting();
  }

  async statusPerubahanDisetujui() {
    await expect(this.perubahanDisetujui).toBeExisting();
  }

  async statusSiapDiambil() {
    await expect(this.siapDiambil).toBeExisting();
  }

  async statusDalamPengiriman() {
    await expect(this.dalamPengiriman).toBeExisting();
  }

  async statusPesananDiterima() {
    await expect(this.pesananDiterima).toBeExisting();
  }

  async statusSelesai() {
    await expect(this.selesai).toBeExisting();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new DetailPemesananPage();
