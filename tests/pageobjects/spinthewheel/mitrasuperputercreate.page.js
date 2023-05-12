import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class mitraSuperPuterCreatePage extends Page {

   //define selectors using getter methods
   get titlePage () { return $('[class="h1 mt-16"]') }
   get titleTabPage () {return $$('[class="mat-tab-label-content"]')}
   get tablePageAu () {return $('[class="ng-star-inserted"]')}
   
   //create detail program
   get inputNamaProgram () {return $('[placeholder="Nama program Spin the Wheel"]')}
   get inputTotalBudget () {return $('[formcontrolname="total_budget"]')}
   get calendarTanggalMulai () {return $('[formcontrolname="tanggal_mulai"]')}
   get calendarTanggalBerakhir () {return $('[formcontrolname="tanggal_berakhir"]')}
   get popUpCalendar () { return $('mat-datepicker-content tbody.mat-calendar-body')}
   get popupJamMulai () {return $('[formcontrolname="jam_mulai"]')}
   get popupJamBerahir () {return $('[formcontrolname="jam_berakhir"]')}
 
   //jam
   get jam1 () {return $$('[style="transform: rotateZ(-30deg);"]')}
   get jam2 () {return $$('[style="transform: rotateZ(-60deg);"]')}
   get jam3 () {return $$ ('[style="transform: rotateZ(-90deg);"]')}
   get jam4 () {return $$ ('[style="transform: rotateZ(-120deg);"]')}
   get jam5 () {return $$ ('[style="transform: rotateZ(-150deg);"]')}
   get jam6 () {return $$ ('[style="transform: rotateZ(-180deg);"]')}
   get jam7 () {return $$ ('[style="transform: rotateZ(-210deg);"]')}
   get jam8 () {return $$ ('[style="transform: rotateZ(-240deg);"]')}
   get jam9 () {return $$('[style="transform: rotateZ(-270deg);"]')}
   get jam10 () {return $$ ('[style="transform: rotateZ(-300deg);"]')}
   get jam11 () {return $$ ('[style="transform: rotateZ(-330deg);"]')}
   get jam12 () {return $$ ('[style="transform: rotateZ(-360deg);"]')}
   get jam13 () {return $$ ('[style="transform: rotateZ(-390deg);"]')}
   get jam14 () {return $$ ('[style="transform: rotateZ(-420deg);"]')}
   get jam15 () {return $$ ('[style="transform: rotateZ(-450deg);"]')}
   get jam16 () {return $$ ('[style="transform: rotateZ(-480deg);"]')}
   get jam17 () {return $$ ('[style="transform: rotateZ(-510deg);"]')}
   get jam18 () {return $$ ('[style="transform: rotateZ(-540deg);"]')}
   get jam19 () {return $$ ('[style="transform: rotateZ(-570deg);"]')}
   get jam20 () {return $$ ('[style="transform: rotateZ(-600deg);"]')}
   get timebtnOK () {return $$('[class="timepicker-button"][type="button"]')} 

   get textMinimumFB () {return $$('[class="mb-10"]')}
   get inputMinimumNilaiTransaksi () {return $('[formcontrolname="minimum_transaction"]')}
   get inputLimitSpin () {return $('[formcontrolname="limit_spin"]')}
   get inputMinimumFrekuensiBelanja () {return $('[formcontrolname="shopping_frequency"]')}
   get inputMaksimalFrekuensiReward () {return $('[formcontrolname="reward_frequency"]')}
   get searchPembatasanProduk () {return $('[placeholder="Cari produk disini"]')}
   get dropDownPembatasaProduk () {return $$('[role="option"]')}
   get productContainer () {return $('[formarrayname="limit_only"]')}
   get productContainer2 () {return $$('[formarrayname="limit_only"]')}
   get inputMinValue () {return $('[formcontrolname="min_value"]')}
   get inputMinValue2 () {return $$('[formcontrolname="min_value"]')}
   get radioBtnPembatasanProduk () {return $$('[class="mat-radio-container"]')}
   get buttonSimpanDetailProgram () {return $('[class="confirmation-button mat-raised-button mat-warn"]')}

   //audiece page
   get clickTab () {return $$('[role="tab"]')}
   get radiobtnPilihSemua () {return $$('div.mat-radio-container')}
   get radiobtnberdasarkanTier () {return $('#mat-radio-3')}
   get buttonUpdate () {return $('button.mat-raised-button.mat-warn')}
   get buttonSimpanAudience () {return $('[class="confirmation-button mat-raised-button mat-warn"]')}
   get content () {return $('[class="mat-card-content"]')}
   get dropdownPilihTier () {return $('div.mat-select-value')}
   get optionTier () {return $$('[role="option"]')}
   get buttonExportCSV () {return $('[class="mat-stroked-button"]')}
   get buttonImportCSV () {return $('[class="mat-stroked-button ng-star-inserted"]')}
   get buttonKirim () {return $('[class="mat-raised-button mat-primary"]')}
   get buttonBatal () {return $('[class="mat-stroked-button mat-primary"]')}
   get File () {return $('[selectable="1"]')}
   get File1 () {return $('[class="p-24"]')}
   get buttonUbah () {return $('[class="mat-stroked-button ng-star-inserted"]')}
   get closePopupInsertFile () {return $('[class="mat-icon-button"]')}
   get inputSearch () {return $('[placeholder="Cari Nama Toko/Nomor Ponsel"]')}
   get dataTabel () {return $('[class="material shadow-none ngx-datatable fixed-header virtualized scroll-horz selectable checkbox-selection"]')}
   get checkboxCA () {return $$('[class="mat-checkbox-layout"]')}
   get checkboxPelanggan () {return $('[class="mat-checkbox mat-accent ng-star-inserted"]')}
   get tabelCustomAudience () {return $('[class="datatable-body"]')}
   get nextPage () {return $('[class="mat-paginator-navigation-next mat-icon-button"]')}
   get backPage () {return $('[class="mat-paginator-navigation-previous mat-icon-button"]')}

   //pengaturan mekanisme page
   get inputPoin () {return $$('[formcontrolname="point"]')}
   get inputKesempatan () {return $$('[formcontrolname="probability"]')}
   get buttonPerbaruiContoh () {return $('[class="mat-stroked-button mat-warn"]')}
   get buttonPublishkeApk () {return $('[class="mat-raised-button mat-warn"]')}

   //program berjalan
   get containerProgramBerjalan () {return $('[class="p-24 ng-untouched ng-pristine ng-valid"]')}

   //a method to encapsule automation code to interact with the page
   async Page () {
      await expect(this.titlePage).toHaveText('Mitra Super Puter')
      await browser.pause(3000)
   }
 
   //all tab page
   async DetailProgramPage () {
      await expect(this.titleTabPage[0]).toBeDisplayed()
    }

   async AudienceTabPage () {
      await expect(this.titleTabPage[1]).toBeDisplayed()
   }

   async AudienceTabPage2 () {
      await this.titleTabPage[1].scrollIntoView()
      await expect(this.titleTabPage[1]).toBeDisplayed()
   }

   async CustomAudience () {
      await expect(this.tablePageAu).toBeDisplayed()
   }
   async pengaturanMekanismePage () {
      await expect(this.titleTabPage[2]).toBeDisplayed()
   }

   async programBerjalanPage () {
      await expect(this.titleTabPage[3]).toBeDisplayed()
   }

   //dalam tab detail porgram page
   async namaProgram (nama_program) {
      await this.inputNamaProgram.setValue(nama_program);
      //await browser.pause(3000);
   }

   async totalBudget (total_budget) {
      await this.inputTotalBudget.setValue(total_budget);
   }

   async tanggalMulai () {
      await this.calendarTanggalMulai.click()
      await this.popUpCalendar.waitForDisplayed()
      await this.popUpCalendar.$$('tr')[3].$$('td')[4].$('div').click();
   }

   async jamMulai () {
      await this.popupJamMulai.click()
      await this.jam9[0].click()
      await this.timebtnOK[1].click()
   }

   async tanggalBerakhir () {
      await this.calendarTanggalBerakhir.click()
      await this.popUpCalendar.waitForDisplayed()
      await this.popUpCalendar.$$('tr')[4].$$('td')[2].$('div').click();
   }

   async tanggalBerakhir1 () {
      await this.calendarTanggalBerakhir.click()
      await this.popUpCalendar.waitForDisplayed()
      await this.popUpCalendar.$$('tr')[4].$$('td')[2].$('div').click();
   }

   async jamBerakhir () {
      await this.popupJamBerahir.click()
      await this.jam20[0].click()
      await this.timebtnOK[1].click()
      await browser.pause(2000);
   }

   async minimumNilaiTransaksi (minimum_nilai_transaksi) {
      //await this.inputMinimumNilaiTransaksi.scrollIntoView()
      await this.inputMinimumNilaiTransaksi.setValue(minimum_nilai_transaksi);
      //await browser.pause(3000);
   }

   async limitSpinKeseluruhan (limit_spin_keseluruhan) {
      await this.inputLimitSpin.scrollIntoView()
      await this.inputLimitSpin.setValue(limit_spin_keseluruhan);
      await browser.pause(1000);
   }

   async minimumFrekuensiBelanja (minimum_frekuensi_belanja) {
      await this.textMinimumFB[8].scrollIntoView()
      await this.inputMinimumFrekuensiBelanja.setValue(minimum_frekuensi_belanja);
   }

   async maksimalFrekuensiReward (maksimal_frekuensi_reward){
      await this.inputMaksimalFrekuensiReward.setValue(maksimal_frekuensi_reward);
   }

   async SimpanDetailProgram () {
      await this.buttonSimpanDetailProgram.click()
      await browser.pause(4000)
   }

   async cariProdukDisini () {
      await this.searchPembatasanProduk.scrollIntoView()
      await this.searchPembatasanProduk.addValue('')
      await browser.pause(3000)
   }

   async selectTestProduct () {
      await this.dropDownPembatasaProduk[0].click()
   }

   async selectSampoernaAFilter () {
      await this.dropDownPembatasaProduk[1].click()
   }

   async selectWaferDutaMilk () {
      await this.dropDownPembatasaProduk[2].click()
      await browser.pause(5000)
   }

   async selectMarlboroRed () {
      await this.dropDownPembatasaProduk[3].click()
   }

   async MinValue (min_value) {
      await this.productContainer.scrollIntoView()
      await this.inputMinValue.setValue(min_value)
      await browser.pause(3000)
   }

   async MinValue (min_value) {
      await this.productContainer.scrollIntoView()
      await this.inputMinValue.setValue(min_value)
      await browser.pause(3000)
   }

   async MinValue2 (min_value2) {
      await this.productContainer2[1].scrollIntoView()
      await this.inputMinValue2[1].setValue(min_value2)
      await browser.pause(3000)
   }

   async pembatasanProdukAND () {
      await this.radioBtnPembatasanProduk[0].click()
   }

   async pembatasanProdukOR () {
      await this.radioBtnPembatasanProduk[1].click()
   }

   //all tab
   async tabAudience () {
      await this.titleTabPage[1].scrollIntoView()
      //await this.clickTab[1].scrollIntoView()
      await this.clickTab[1].click()
      await browser.pause(7000)
   }

   async tabPengaturanMekanisme () {
      await this.titleTabPage[2].scrollIntoView()
      //await this.clickTab[2].scrollIntoView()
      await this.clickTab[2].click()
   }

   async tabProgramBerjalan () {
      await this.titleTabPage[3].scrollIntoView()
      //await this.clickTab[3].scrollIntoView()
      await this.clickTab[3].click()
      await browser.refresh()
   }

   //dalam tab audience
   
   async pilihSemua () {
      await this.radiobtnPilihSemua[0].scrollIntoView()
      await this.radiobtnPilihSemua[0].click()
      await browser.pause(3000)
   }

   async berdasarkanTier () {
      //await this.radiobtnberdasarkanTier[1].scrollIntoView()
      await this.radiobtnPilihSemua[1].scrollIntoView()
      await this.radiobtnPilihSemua[1].click()
      await browser.pause(5000)
   }

   //berdasarkan tier
   async dropPilihTier () {
      await this.dropdownPilihTier.scrollIntoView()
      await this.dropdownPilihTier.click()
      await browser.pause(2000)
   }

   async optionTierBasic () {
      await this.optionTier[0].click()
      await browser.pause(2000)
      await browser.keys("Escape")
   }

   async optionTierBasic1 () {
      await this.optionTier[0].click()
      await browser.pause(2000)
      //await browser.keys("Escape")
   }

   async optionTierPlatinum () {
      await this.optionTier[1].click()
      await browser.pause(2000)
      await browser.keys("Escape")
   }

   async optionTierPlatinum1 () {
      await this.optionTier[1].click()
      await browser.pause(2000)
      //await browser.keys("Escape")
   }

   async optionTierGold () {
      await this.optionTier[2].click()
      await browser.pause(2000)
      await browser.keys("Escape")
   }

   async optionTierGold1 () {
      await this.optionTier[2].click()
      await browser.pause(2000)
      //await browser.keys("Escape")
   }

   //upload audience
   async uploadAudience () {
      await this.radiobtnPilihSemua[2].scrollIntoView()
      await this.radiobtnPilihSemua[2].click()
   }

   async importCSV () {
      await this.buttonImportCSV.click()
      await browser.pause(5000);
   }

   async exportCSV () {
      await this.buttonExportCSV.click()
      await browser.pause(10000)
   }

   async btnKirim () {
      await this.buttonKirim.click()
   }

   async btnBatal () {
      await this.buttonBatal.click()
   }

   async insertFile1 () {
      await this.File.click()
      await browser.pause(10000);
   }

   async insertFile () {
      //await this.File.click()
      await browser.pause(10000);
   }

   async insertFile2 () {
      //await this.File.click()
      await browser.pause(10000);
      await this.buttonBatal.click()
   }

   async btnUbah () {
      await this.buttonUbah.click()
      await browser.pause(15000)
   }

   async updateAudience () {
      await this.buttonUpdate.scrollIntoView()
      await this.buttonUpdate.click()
      await browser.pause(5000)
   }

   async simpanAudience1 () {
      await this.buttonSimpanAudience.scrollIntoView()
      //await this.buttonSimpanAudience.click()
      await browser.pause(5000)

   }
   async simpanAudience () {
      await this.buttonSimpanAudience.scrollIntoView()
      await this.buttonSimpanAudience.click()
      await browser.pause(7000)
   }

   async closePopup () {
      await this.closePopupInsertFile.scrollIntoView()
      await this.closePopupInsertFile.click()
   }

   //custom audience
   async customAudience () {
      await this.radiobtnPilihSemua[3].scrollIntoView()
      await this.radiobtnPilihSemua[3].click()
      await browser.pause(5000)
      await this.content.scrollIntoView()
   }

   async namaPemilik (nama_pemilik) {

      await this.inputSearch.setValue(nama_pemilik)
      await browser.pause(7000)
   }

   async namaToko (nama_toko) {
      await this.inputSearch.setValue(nama_toko)
      await browser.pause(9000)
   }

   async nomorTelpon (nomor_telpon) {
      await this.inputSearch.setValue(nomor_telpon)
      await browser.pause(10000)
   }

   async clearValueinSearchBox () {
      await this.inputSearch.clearValue()
      await this.inputSearch.addValue(' ')
      await browser.pause(10000)
   }

   async cbPelanggan1 () {
      await this.dataTabel.scrollIntoView()
      await this.checkboxPelanggan.click()
      await browser.pause(3000)
   }

   async cbPelanggan2 () {
      //await this.checkboxCA[2].scrollIntoView()
      await this.checkboxCA[3].click()
      await browser.pause(2000)
   }

   async cbPelanggan3 () {
      //await this.checkboxCA[2].scrollIntoView()
      await this.checkboxCA[4].click()
      await browser.pause(2000)
   }

   async cbPelanggan10 () {
      //await this.tabelCustomAudience.scrollIntoView()
      await this.checkboxCA[9].scrollIntoView()
      await this.checkboxCA[9].click()
      await browser.pause(9000)
   }

   async btnNext () {
      await this.nextPage.click()
      await browser.pause(2000)
   }

   async btnBack () {
      await this.scrollIntoView.backPage()
      await this.backPage.click()
      await browser.pause(2000)
   }

   //pengaturan mekanisme
   async Poin1 (poin1) {
      await this.inputPoin[0].setValue(poin1);
   }

   async Poin2 (poin2) {
      await this.inputPoin[1].setValue(poin2);
   }

   async Poin3 (poin3) {
      await this.inputPoin[2].setValue(poin3);
   }

   async Poin4 (poin4) {
      await this.inputPoin[3].setValue(poin4);
   }

   async Poin5 (poin5) {
      await this.inputPoin[4].scrollIntoView()
      await this.inputPoin[4].setValue(poin5);
   }

   async Kesempatan1 (kesempatan1) {
      await this.inputKesempatan[0].setValue(kesempatan1);
   }

   async Kesempatan2 (kesempatan2) {
      await this.inputKesempatan[1].setValue(kesempatan2);
   }

   async Kesempatan3 (kesempatan3) {
      await this.inputKesempatan[2].setValue(kesempatan3);
   }

   async Kesempatan4 (kesempatan4) {
      await this.inputKesempatan[3].setValue(kesempatan4);
   }

   async Kesempatan5 (kesempatan5) {
      await this.inputKesempatan[4].setValue(kesempatan5);
   }

   async perbaruiContoh () {
      await this.buttonPerbaruiContoh.click()
      await browser.pause(3000)
   }

   async publishkeAplikasi () {
      await this.buttonPublishkeApk.click()
      await browser.pause(5000)
   }

 }

export default new mitraSuperPuterCreatePage ();