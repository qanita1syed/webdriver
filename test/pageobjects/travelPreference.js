const { default: isSelected } = require("webdriverio/build/commands/element/isSelected")

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
    // 
    
    get nearToToilet(){
        return $('//*[@id="ace-root"]/div/main/div/ace-account-navbar/div/div/ace-travel-preferences/div[2]/ace-seat-preference-form/div/div[2]/form/div[2]/ace-checkbox[1]/label/span')
    }
    get checknearToilet(){
       
        return $('#seat-near-lavatory-checkbox')
    }

    get checkNearPower(){
        return $('#seat-near-power-checkbox')
    }
    get checkNearLuggage(){
        return $('#seat-near-luggage-checkbox')
    }

    get checkNearTable(){
        return $('#seat-near-table-checkbox')
    }

    get nearToPower(){
        return $('//*[@id="ace-root"]/div/main/div/ace-account-navbar/div/div/ace-travel-preferences/div[2]/ace-seat-preference-form/div/div[2]/form/div[2]/ace-checkbox[2]/label/span')
    }
    get nearToLuggage(){
        return $('//*[@id="ace-root"]/div/main/div/ace-account-navbar/div/div/ace-travel-preferences/div[2]/ace-seat-preference-form/div/div[2]/form/div[2]/ace-checkbox[3]/label/span')
    }

    get nearToTable(){
        return $('//*[@id="ace-root"]/div/main/div/ace-account-navbar/div/div/ace-travel-preferences/div[2]/ace-seat-preference-form/div/div[2]/form/div[2]/ace-checkbox[4]/label/span')
    }


    get saveChanges() {
        return $("//button[contains(text(),'Save changes')]")
    }
  
    get addPreferences() {
        return $('//*[@id="edit-delivery-preferences"]/button')
      }

    get royalMail() {
        return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-delivery-preference-form[1]/div[1]/div[2]/form[1]/div[4]/ace-radio[1]/label[1]/div[1]")
    }


    get eTicket(){
        return $('#e-ticket-delivery-method')
    }
    get eTicketXPath(){
        return $('//*[@id="delivery-preferences"]/div[3]/ace-radio/label/span')
    }
    get collectTVM(){
        return $('//*[@id="delivery-preferences"]/div[1]/ace-radio/label/span')
    }
    get printAtHome(){
        return $('//*[@id="delivery-preferences"]/div[2]/ace-radio/label/span')
    }
    get royalMail() {
        return $("//*[@id=\"delivery-preferences\"]/div[4]/ace-radio/label/span")
    }
    get royalMailSpecial(){
        return $('//*[@id="delivery-preferences"]/div[5]/ace-radio/label/span')
    }
    get smartCard(){
        return $('//*[@id="delivery-preferences"]/div[6]/ace-radio/label/span')
    }
    get save() {
        return $("//*[@id=\"save-changes-delivery-preferences\"]/button")
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
        // Generating Random Value
        const randOption = Math.floor(Math.random() * 4) + 1;

        // Deselecting the Selected Options
        
        if (await this.checknearToilet.isSelected() === true){
           
            await this.nearToToilet.click()
        }

         if (await this.checkNearPower.isSelected()===true){
            await this.nearToPower.click()
        }

         if (await this.checkNearLuggage.isSelected() === true){
                await this.nearToLuggage.click()
        }
         if(await this.checkNearTable.isSelected()===true){
             await this.nearToTable.click()
         }
        
        // Deselecting the Selected Options End

        await browser.pause(3000)

        // Selecting Random Option
        if(randOption === 1){
            await this.nearToToilet.click()
        } else if(randOption === 2){
            await this.nearToPower.click()
        } else if(randOption === 3){
            await this.nearToLuggage.click()
        }
        else{
            await this.nearToTable.click()
        }

        await browser.pause(3000)
    }
    async saveChangesFun() {
        await this.saveChanges.click();
        await browser.pause(3000)
    }
    async addPreferencesFun() {
        console.log("IN Add Preferences")
        await this.addPreferences.scrollIntoView()
        await this.addPreferences.click();
        await browser.pause(3000)
    }
  
    async royalMailFun() {

        const res = await this.eTicket.isSelected()

        if(res === true){
        console.log('In Res', res)
            const randOption = Math.floor(Math.random() * 5) + 1;
            // Selecting Random Option
            if(randOption ===1){
                await this.collectTVM.click()
            }
            else if (randOption === 2){
                await this.printAtHome.click()
            }
            else if (randOption === 3){
                await this.royalMail.click()
            }
            else if(randOption ===4){
                await this.royalMailSpecial.click()
            }
            else if (randOption===5){
                await this.smartCard.click()
            }
                   
        }
        else{
        console.log('In Else Part')

            // Selecting ETicket Option
            await this.eTicketXPath.click()
        }
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
        await input.clearValue()
        await input.addValue(4103901)
        await browser.pause(3000)
    }
    async additionalInfoFun() {
        await this.additionalInfo.click();
        let input = await $("//input[@id='travel-assistance-information']")
        await input.clearValue()
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