import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class LoyaltyRewardPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('[class="h1 mt-16"]') }
    get totalRewardKoin () { return $('[class="loyalty-reward__card__money"]') }

    get AllTab () { return $$('#tabLabel') }
      get expandButton () { return $$('#expansionPanel') }
      get missionName () { return $$('#missionName') }
      get reward () { return $$('#reward') }
      get status () { return $$('#status') }
      get date () { return $$('#date') }

    //Table
    get table () { return $('[class="datatable-scroll ng-star-inserted"]') }
    get cellNamaMisi () { return $$('#cellName') }
    get cellDetailMisi () { return $$('#cellDescription') }
    get cellPotensiReward () { return $$('#cellPotensi') }
    get cellDeadline () { return $$('#cellTempo') }
    get btnIsiKuesioner () { return $$('#btn-kuesioner') }

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
        await this.totalRewardKoin.waitForExist();
        await expect(this.totalRewardKoin).toBeExisting()
        await expect(this.titlePage).toHaveText('Loyalty & Reward')
        await expect(browser).toHaveUrlContaining('dte/loyalty-reward/available')
        console.log('Total Reward Koin 2023: '+await this.totalRewardKoin.getText())
    }

    async taskDetail () {
        await this.btnIsiKuesioner[0].scrollIntoView()
        await expect(this.cellNamaMisi[0]).toBeDisplayed()
        console.log ('Nama Misi: '+await this.cellNamaMisi[0].getText())
        await expect(this.cellDetailMisi[0]).toBeDisplayed()
        console.log ('Detail Misi: '+await this.cellDetailMisi[0].getText())
        await expect(this.cellPotensiReward[0]).toBeDisplayed()
        console.log ('Potensi Reward: '+await this.cellPotensiReward[0].getText()+' Koin')
        await expect(this.cellDeadline[0]).toBeDisplayed()
        console.log ('Jatuh Tempo: '+await this.cellDeadline[0].getText())
    }

    async doTask () {
        await expect(this.btnIsiKuesioner[0]).toBeDisplayed()
        await expect(this.btnIsiKuesioner[0]).toBeClickable()
        await this.btnIsiKuesioner[0].click()
    }

    async openTabSelesai () {
        await this.AllTab[2].click()
        await browser.pause(3000)
        await expect(this.expandButton[0]).toBeDisplayed()
        // await browser.pause(3000)
        await this.expandButton[0].click()
        await browser.pause(3000)
    }

    async taskSelesai () {
        await this.missionName[2].scrollIntoView()
        await expect(this.missionName[2]).toBeDisplayed()
        await expect(this.reward[2]).toBeDisplayed()
        await expect(this.status[2]).toBeDisplayed()
        await expect(this.date[2]).toBeDisplayed()
    }

    
    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/loyalty-reward/available');
    }
}

export default new LoyaltyRewardPage();