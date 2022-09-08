class travelPreference {
    get travelPreference() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/nav[1]/a[4]")
    }

    get seatPrefEdit() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-seat-preference-form[1]/div[1]/div[1]/div[1]/ace-button[1]/button[1]")
    }
    get seatDirection() {
        return $("//select[@id='seat-direction-options']")
    }
    get seatPosition() {
        return $("//select[@id='seat-position-options']")
    }
    get quietCoach() {
        return $("//select[@id='seat-quiet-coach-options']")
    }
    get nearTo() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-seat-preference-form[1]/div[1]/div[2]/form[1]/div[2]/ace-checkbox[3]/label[1]/div[1]")
    }

    get saveChanges() {
        return $("//button[contains(text(),'Save changes')]")
    }
    get addPreferences() {
        return $("//button[contains(text(),'Add preferences')]")
    }
    get royalMail() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-delivery-preference-form[1]/div[1]/div[2]/form[1]/div[4]/ace-radio[1]/label[1]/div[1]")
    }
    get save() {
        return $("//button[contains(text(),'Save changes')]")
    }
    get travelAssistanceEdit() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-travel-assistance-preference-form[1]/div[1]/div[1]/div[1]/ace-button[1]/button[1]")
    }
    get radioYes() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-travel-assistance-preference-form[1]/div[1]/div[3]/p[1]/ace-radio[2]/label[1]/div[1]")
    }
    get enterPhNum() {
        return $("//input[@id='travel-assistance-phone-number']")
    }
    get additionalInfo() {
        return $("//input[@id='travel-assistance-information']")
    }
    get saveLast() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-travel-assistance-preference-form[1]/div[1]/div[3]/form[1]/div[1]/ace-button[1]/button[1]")
    }

    async travelPreferenceFun() {
        await this.travelPreference.click();
        await browser.pause(3000)
    }
    async seatPrefEditFun() {
        await this.seatPrefEdit.click();
        await browser.pause(3000)
    }
    async seatDirectionFun() {
        const selectBox = await this.seatDirection;
        await selectBox.click();
        const randomIndex = this.getRandomNumberBetween(0, 3);
        console.log(randomIndex);
        await selectBox.selectByAttribute('value', randomIndex.toString())
        // const value = await selectBox.getValue();
        // console.log(value)
        await browser.pause(5000)
    }
    async seatPositionFun() {
        const selectBox = await this.seatPosition;
        await selectBox.click();
        const randomIndex = this.getRandomNumberBetween(0, 3);
        console.log(randomIndex);
        await selectBox.selectByAttribute('value', randomIndex.toString())
        await browser.pause(5000)
    }
    async quietCoachFun() {
        const selectBox = await this.quietCoach;
        await selectBox.click();
        const randomIndex = this.getRandomNumberBetween(0, 1);
        console.log(randomIndex);
        await selectBox.selectByAttribute('value', randomIndex.toString())
        await browser.pause(5000)
    }
    async nearToFun() {
        await this.nearTo.click();
        await browser.pause(3000)
    }
    async saveChangesFun() {
        await this.saveChanges.click();
        await browser.pause(3000)
    }
    async addPreferencesFun() {
        await this.addPreferences.click();
        await browser.pause(3000)
    }
    async royalMailFun() {
        await this.royalMail.click();
        await browser.pause(3000)
    }
    async saveFun() {
        await this.save.click();
        await browser.pause(3000)
    }
    async travelAssistanceEditFun() {
        await this.travelAssistanceEdit.click();
        await browser.pause(3000)
    }
    async radioFun() {
        await this.radioYes.click();
        await browser.pause(3000)
    }
    async enterPhNumFun() {
        await this.enterPhNum.click();
        let input = await $("//input[@id='travel-assistance-phone-number']")
        await input.addValue(4103901)
        await browser.pause(3000)
    }
    async additionalInfoFun() {
        await this.additionalInfo.click();
        let input = await $("//input[@id='travel-assistance-information']")
        await input.addValue('nothing much')
        await browser.pause(3000)
    }
    async saveLastFun() {
        await this.saveLast.click();
        await browser.pause(3000)
    }

    getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
module.exports = new travelPreference();