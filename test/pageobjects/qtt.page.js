const { default: $ } = require("webdriverio/build/commands/element/$");




class QTT {
  get fromStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]");
  }

  get toStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]");
  }
  get adult()
  {
    return $("//*[@id='qtt']/div/div/div[3]/div/div[1]/ace-passenger-picker")
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get searchInputField() {
    return $(`//input[@id='regular-qtt-station-picker-origin-input']`)
  }

  get searchInputToField() {
    return $('//input[@id="regular-qtt-station-picker-destination-input"]')
  }

  get searchAndByButton() {
    return $('#search-qtt')
  }
  get selectTickets()    //mixing deck
  {
    return $('.booking-steps-label')
  }
  get continueButton()   //mixing deck
  {
    return $('.btn.btn-commercial.btn-primary')
  }
  get deiveryAndExtras()    // deliveryExtras
  {
    return $('.page-title')
  }
  get contBtn()          // deliveryExtras
  {
    return $('.btn.btn-commercial.btn-primary')
  }

  get reviewAndpayPage()   //reviewPayPage
  {
    return $('.page-title')
  }
  get payNowBtn() {
    return $('.btn.btn-commercial.btn-primary')
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickAndSelectFromStation() {
    await this.fromStation.click();
    await this.searchInputField.setValue("Banbury");
    browser.keys("\ue007");
    await browser.pause(3000)
  }
  async clickAndSelecttToStation() {
    await this.toStation.click();
    await this.searchInputToField.setValue("Bicester Village");
    browser.keys("\ue007");
    await browser.pause(3000)

  }
  async clickSearchAndBuy() {
    await this.searchAndByButton.click();
    await browser.pause(3000)
  }
  async continue()     // mixing deck
  {
    await this.continueButton.click();
    await browser.pause(3000)
  }
  async continuebtn2()   // deliveryExtras
  {
    await this.contBtn.click();
    await browser.pause(3000)
  }

  async payNow() {
    await this.payNowBtn.click();
    await browser.pause(3000)
  }
}
module.exports = new QTT();
