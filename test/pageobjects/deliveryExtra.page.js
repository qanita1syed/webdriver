

class deiveryAndExtras {
  
  get deiveryAndExtras()    // deliveryExtras
  {
    return $('.page-title')
  }
  get contBtn()          // deliveryExtras
  {
    return $('.btn.btn-commercial.btn-primary')
  }
  get seeMoreOption()
  {
    return $('//*[@id="ace-root"]/div/main/div/ace-seats-and-extras/div/div/div/ace-delivery-form/div/div/div/ace-delivery-options/div[2]/ace-button/button')
  }

  get tvm()
{
return $ ('//*[@id="ace-root"]/div/main/div/ace-seats-and-extras/div/div/div/ace-delivery-form/div/div/div/ace-delivery-options/div/ace-delivery-option[2]/div')
}


  // async seeMore()   // deliveryExtras
  // {
  //   await this.seeMoreOption.click();
  //   await browser.pause(3000)
  // }
  //   async tvmMachine()   // deliveryExtras
  // {
  //   await this.tvm.click();
  //   await browser.pause(3000)
  // }
  async continuebtn2()   // deliveryExtras
  {
    await this.contBtn.click();
    await browser.pause(3000)
  }

}
module.exports = new deiveryAndExtras();