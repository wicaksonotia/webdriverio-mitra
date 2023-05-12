import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class IsiKuesionerPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('div.h1.mt-16') }

    get taskName () { return $('#name') }
    get dataDescription () { return $('#dataDescription') }
    get koinReward () { return $('#totalCoin') }
    get deadline () { return $('#deadline') }

    get rbPilgan () { return $$('[class="mat-radio-container"]') }
    get inputText () { return $('#input-text') }
    get inputParagraf () { return $('[placeholder="Ketik jawabanmu disini..."]') }
    get inputAngka () { return $('[type="number"]') }
    get checkbox () { return $$('[class="mat-checkbox-inner-container"]') }
    get date () { return $$('[class="mat-icon material-icons"]') }
    get popUpCalendar () { return $('mat-datepicker-content tbody.mat-calendar-body') }
    get btnSimpanDraft () { return $('#btnSaveDraft') }
    get btnLanjutKirim () { return $('#btnNext') }

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
        // await expect(this.taskName).toBeDisplayed()
        console.log(await this.taskName.getText())
        // await expect(this.dataDescription).toBeDisplayed()
        console.log(await this.dataDescription.getText())
        // await expect(this.koinReward).toBeDisplayed()
        console.log(await this.koinReward.getText())
        // await expect(this.deadline).toBeDisplayed()
        console.log(await this.deadline.getText())
    }

    async keSingkat (jawaban) {
        await browser.pause(3000)
        await this.rbPilgan[0].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.inputText.waitForExist();
        await this.inputText.setValue(jawaban);
        await this.btnLanjutKirim.click()
    }

    async keParagraf (jawaban) {
        await this.rbPilgan[1].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.inputParagraf.waitForExist();
        await this.inputParagraf.setValue(jawaban);
        await this.btnLanjutKirim.click()
    }

    async kePilganAngka (jawaban) {
        await this.rbPilgan[2].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.rbPilgan[1].waitForExist();
        await this.rbPilgan[1].click()
        await this.inputAngka.waitForExist();
        await this.inputAngka.setValue(jawaban);
        await browser.pause(3000)
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
    }

    async kePilganSingkat (jawaban) {
        await this.rbPilgan[3].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.rbPilgan[1].waitForExist();
        await this.rbPilgan[1].click()
        await this.inputText.waitForExist();
        await this.inputText.setValue(jawaban);
        await browser.pause(3000)
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
    }

    async kePilganParagraf (jawaban) {
        await this.rbPilgan[4].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.rbPilgan[1].waitForExist();
        await this.rbPilgan[1].click()
        await this.inputParagraf.waitForExist();
        await this.inputParagraf.setValue(jawaban);
        await browser.pause(3000)
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
    }

    async keCentang () {
        await this.rbPilgan[5].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.checkbox[0].waitForExist();
        await this.checkbox[0].click();
        await this.btnLanjutKirim.click()
    }

    async keUnggah () {
        await this.rbPilgan[6].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await browser.pause(15000)
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
    }

    async keAngka (jawaban) {
        await this.rbPilgan[6].scrollIntoView()
        await this.rbPilgan[7].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.inputAngka.waitForExist();
        await this.inputAngka.setValue(jawaban);
        await this.btnLanjutKirim.click()
    }

    async keTanggal () {
        await this.rbPilgan[6].scrollIntoView()
        await this.rbPilgan[8].click()
        // await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.date[2].waitForExist();
        await this.date[2].click();
        await this.popUpCalendar.waitForExist();
        await this.popUpCalendar.$$('tr')[3].$$('td')[1].$('div').click();
        await this.btnLanjutKirim.click()
    }

    async keSC () {
        await this.rbPilgan[6].scrollIntoView()
        await this.rbPilgan[9].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.rbPilgan[0].waitForExist();
        await this.rbPilgan[0].click()
        await this.btnLanjutKirim.click()
    }

    async keSCIR () {
        await this.rbPilgan[6].scrollIntoView()
        await this.rbPilgan[10].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await browser.pause(15000)
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
    }

    async kePlanogramIR () {
        await this.rbPilgan[6].scrollIntoView()
        await this.rbPilgan[11].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await browser.pause(1500)
        await this.btnLanjutKirim.scrollIntoView()
        await browser.pause(15000)
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
    }

    async keUPC (jawaban) {
        await this.rbPilgan[6].scrollIntoView()
        await this.rbPilgan[12].click()
        await this.btnLanjutKirim.scrollIntoView()
        await this.btnLanjutKirim.click()
        await this.inputParagraf.waitForExist();
        await this.inputParagraf.setValue(jawaban);
        await this.btnLanjutKirim.click()
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new IsiKuesionerPage();