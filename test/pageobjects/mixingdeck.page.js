class mixingdeck
{
    get selectTickets()    //mixing deck
    {
      return $('.booking-steps-label')
    }
    get continueButton()   //mixing deck
    {
      return $('.btn.btn-commercial.btn-primary')
    }

    async continue()     // mixing deck
    {
      await this.continueButton.click();
      await browser.pause(3000)
    }

}
module.exports = new mixingdeck();