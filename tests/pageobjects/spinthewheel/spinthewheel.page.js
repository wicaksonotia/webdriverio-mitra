import Page from '../page';

class spinTheWheelPage extends Page {
    get titlePage () { return $('[class="h1 mt-16"]') }
    get buttonBuatProgramBaru () { return $('button.mat-raised-button.mat-warn')}
    get iconEdit () {return $$('[class="secondary-icon mat-icon material-icons"]')}
    get spintheWheelTab () {return $$('[class="nav-link ng-star-inserted"]')}
    get inputSearch () {return $('[placeholder="Cari"]')}
    
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 600000,
                timeoutMsg: 'expected title page not displayed after 600s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:600000})
        
       // await this.spintheWheelTab[11].scrollIntoView()
       // await this.spintheWheelTab[11].click()
    }

    async pageList () {
        //await this.titlePage.scrollIntoView()
        await this.spintheWheelTab[11].click()
        //await expect(browser).toHaveUrlContaining('dte/spin-the-wheel')
        await expect(this.titlePage).toHaveText('Mitra Super Puter')
        await browser.pause(3000);
    }
 
    async btnProgramBaru () {
        await this.buttonBuatProgramBaru.click()
        await browser.pause(3000);
        await expect(browser).toHaveUrlContaining('dte/spin-the-wheel/create/detail-program')
    }

    async Edit (){
        await this.iconEdit[2].scrollIntoView()
        await this.iconEdit[2].click()
    }

    async Search (program) {
        await this.inputSearch.scrollIntoView()
        await this.inputSearch.setValue(program)
        await browser.pause(2000)

    }

    async Edit1 (){
        await this.iconEdit[26].scrollIntoView()
        await this.iconEdit[26].click()
    }

    open () {
        return super.open('dte/spin-the-wheel');
    }
}

export default new spinTheWheelPage ();