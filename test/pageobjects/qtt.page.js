
class QTT {
  get fromStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]");
  }

  get banStation(){
    return $(`//*[@id="qtt"]/div/ace-qtt-station-pickers/div[1]/div/div/div[1]/ace-station-picker/div/div[1]/div/span/span/text()`)
  }

  get toStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get searchInputField(){
    return $(`//input[@id='regular-qtt-station-picker-origin-input']`)
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickAndSelectFromStation() {
    await this.fromStation.click();
    await this.searchInputField.setValue("Banbury");
    browser.keys("\ue007");

    // await browser.pause(3000)

  }
}

module.exports = new QTT();
