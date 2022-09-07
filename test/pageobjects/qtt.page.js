class QTT {
  get fromStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]");
  }

  get toStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]");
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
  get adultsSelection()
  {
    return $("//*[@id='qtt']/div/div/div[3]/div/div[1]/ace-passenger-picker")
  }
  get addButton()
{  
return $("//*[@id='qtt']/div/div/div[3]/div/div[1]/ace-passenger-picker/div/div[2]/div[3]/div[1]/ace-numerical-stepper[1]/div/div/div[3]")
}
get addKids()
{
return $("//*[@id='qtt']/div/div/div[3]/div/div[1]/ace-passenger-picker/div/div[2]/div[3]/div[1]/ace-numerical-stepper[2]/div/div/div[3]/ace-button")
}
get doneButton()
{
return $ ("//*[@id='submit-passengers-with-railcard']/button")
}
//==================================================================
get outBoundToday()
{
return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]")
}

get pickDate()
{
return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/div[1]/div[1]/div[1]/ace-calendar[1]/div[2]/div[1]/div[2]/ace-calendar-card[1]/div[1]/div[4]/button[1]")
}
get returnDate()
{
return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]")
}
get returnTicketDate()
{
return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/div[1]/div[1]/div[1]/ace-calendar[1]/div[2]/div[1]/div[3]/ace-calendar-card[2]/div[1]/div[3]/button[7]/span[1]")
}


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
//------------------------------------------------------------------
async clickOutBoundToday()
{
  await this.outBoundToday.click();
  await this.pickDate.click();
  //browser.keys("\ue007");
  await browser.pause(3000)
}
async clickReturnDate()
{
  await this.returnDate.click();
  await this.returnTicketDate.click();
  //browser.keys("\ue007");
  await browser.pause(3000)
}

  async clickSearchAndBuy() {
    await this.searchAndByButton.click();
    await browser.pause(3000)
  }
  async adultsAndkids()
  {
    await this.adultsSelection.click();
    await browser.pause(3000)
  }
  async addPlusButton()
  {
    await this.addButton.click();
    await browser.pause(3000)
  }
  async addPlusChildren()
  {
    await this.addKids.click();
    await browser.pause(3000)
  }
  async doneBtn() {
    await this.doneButton.click();
    await browser.pause(3000)
  }

}
module.exports = new QTT();
