import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class LihatPesananPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('div.h1.mt-16') }

    //Filter
    get searchInput () { return $('[placeholder="Cari Pesanan"]') }
    get tabPesananBaru () { return $('#id-pesanan-baru') }
      get pesananBaru () { return $('#child-id-pesanan-baru') }
    get tabPesananDiproses () { return $('#id-diproses') }
      get pesananDisetujui () { return $('#child-id-perubahan-disetujui') }
      get konfirmasiPerubahan () { return $('#child-id-konfirmasi-perubahan') }
      get pesananDiproses () { return $('#child-id-diproses') }
    get tabPesananDiterima () { return $('#id-pesanan-diterima') }
    get selectDate () { return $$('[role="listbox"]') }
    get select () { return $$('[role="option"]') }

    //Table
    get datatableBody () { return $('datatable-body.datatable-body') }
    get dataRow () { return $$('datatable-row-wrapper.datatable-row-wrapper') }
    get kodePesanan () { return $$('datatable-body-cell > div > span.row-name') }
    get namaToko () { return $$('datatable-body-cell:nth-child(1) > div > span') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 600000,
                timeoutMsg: 'expected title page not displayed after 600s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:600000})
    }
    
    async pageList () {
        await this.searchInput.waitForExist();
        await expect(this.searchInput).toBeExisting()
        await expect(this.titlePage).toHaveText('Lihat Pesanan')
        await expect(browser).toHaveUrlContaining('orders/from-retailer')
        // await expect(this.datatableBody).toBeExisting()
        // await expect(this.dataRow).toBeExisting()
    }

    async search (namaToko) {
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.setValue(namaToko)
        // await browser.pause(3000)
    }

    async searchResult (namaToko) {
        await browser.waitUntil(
            async () => (await (this.namaToko[0]).isExisting()),
            {
                timeout: 20000,
                timeoutMsg: 'expected search result not displayed after 20s'
            }
        )
        await browser.pause(3000)
        await expect(this.namaToko[0]).toBeExisting();
        await expect(this.namaToko[0]).toHaveText(namaToko);
    }

    async filterPesananBaru () {
        await this.tabPesananBaru.waitForExist();
        await this.tabPesananBaru.waitForClickable();
        await expect(this.tabPesananBaru).toBeClickable()
        await this.tabPesananBaru.click()
        await expect(this.pesananBaru).toBeClickable()
        await this.pesananBaru.click()
    }

    async filterPerubahanDisetujui () {
        await this.tabPesananDiproses.waitForExist();
        await this.tabPesananDiproses.waitForClickable();
        await expect(this.tabPesananDiproses).toBeClickable()
        await this.tabPesananDiproses.click()
        await expect(this.pesananDisetujui).toBeClickable()
        await this.pesananDisetujui.click()
    }

    async filterPesananDiterima () {
        await this.tabPesananDiterima.waitForExist();
        await this.tabPesananDiterima.waitForClickable();
        await expect(this.tabPesananDiterima).toBeClickable()
        await this.tabPesananDiterima.click()
    }
    
    async filterTanggal () {
        await this.selectDate[2].waitForClickable();
        await this.selectDate[2].click()
        await expect(this.select[1]).toBeExisting()
        await expect(this.select[1]).toBeClickable()
        await this.select[1].click()
        await browser.keys("Escape")
    }

    async viewDetailPemesanan () {
        await this.kodePesanan[0].waitForClickable();
        await expect(this.kodePesanan[0]).toBeClickable()
        await this.kodePesanan[0].click()
    }
    
    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('orders/from-retailer');
    }
}

export default new LihatPesananPage();