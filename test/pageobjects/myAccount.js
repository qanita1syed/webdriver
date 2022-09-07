class myAcccount{

get personalDeatails()
{
return $ ("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/nav[1]/a[3]")
}
 
get editBtn()
{
return $ ("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-personal-details[1]/div[2]/ace-profile-form[1]/div[1]/div[1]/div[1]/ace-button[1]/button[1]")
}
 
get firstName()
{
return $ ("//input[@id='first-name']")
}

get surName()
{
return $ ("//input[@id='last-name']")
}
get date()
{
return $ ("//input[@id='dob-day']")
}
get month()
{
return $ ("//input[@id='dob-month']")
}
get year()
{
return $ ("//input[@id='dob-year']")
}
get addAnotherNum()
{
return $ ("//button[contains(text(),'Add another number')]")
}
get enterAnotherNum()
{
return $ ("//input[@id='phone-number-secondary']")
}
get saveChangesBtn()
{
return $ ("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-personal-details[1]/div[2]/ace-profile-form[1]/div[1]/div[2]/form[1]/div[5]/ace-button[1]/button[1]")
}
get addAddress()
{
return $ ("//button[contains(text(),'Add address')]")
}
get addressName()
{
return $ ("//input[@id='address-name']")
}
get country()
{
return $ ("//select[@id='address-country']")
}
get county()
{
return $ ("//input[@id='address-county']")
}
get city()
{
return $ ("//input[@id='address-city']")
}
get postCode()
{
return $ ("//input[@id='address-postcode']")
}
get addressline1()
{
return $ ("//input[@id='address-line-first']")
}
get addressline2()
{
return $ ("//input[@id='address-line-second']")
}
get checkBoxTick()
{
return $ ("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-personal-details[1]/div[2]/ace-address-form[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/ace-address[1]/div[2]/div[1]/div[2]/ace-checkbox[1]/label[1]/div[1]")
}
get savebtn()
{
return $ ("//button[contains(text(),'Save changes')]")
}
get remove()
{
return $("//button[contains(text(),'Remove')]")
}
get confirm()
{
return $("//button[contains(text(),'Confirm')]")
}

async personalDeatailsfun()
{
    await this.personalDeatails.click();
    await browser.pause(3000)
}

async editBtnFun()
{    const elem = await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-personal-details[1]/div[2]/ace-profile-form[1]/div[1]/div[1]/div[1]/ace-button[1]/button[1]");
      await elem.scrollIntoView();
      await this.editBtn.click();
    
}
async firstNameFun()
{
    await this.firstName.click();
    let input = await $("//input[@id='first-name']")
    //await input.addValue(123);
    await input.addValue(Math.floor(Math.random() * 11)); 
}
async surtNameFun()
{
    await this.surName.click();
    let input = await $("//input[@id='last-name']")
    //await input.addValue(786);
    await input.addValue(Math.floor(Math.random() * 11));
}
async dateFun()
{
    await this.date.click();
    let input = await $("//input[@id='dob-day']")
    await input.addValue(30)
}
async monthFun()
{
    await this.month.click();
    let input = await $("//input[@id='dob-month']")
    await input.addValue(10)
}
async yearFun()
{
    await this.year.click();
    let input = await $("//input[@id='dob-year']")
    await input.addValue(2022)
}
async addAnotherNumFun()
{
    await this.addAnotherNum.click();
}
async enterAnotherNumFun()
{
    await this.enterAnotherNum.click();
    let input = await $("//input[@id='phone-number-secondary']")
    await input.addValue(123456789)
}
async saveChangesBtnFun()
{
    await this.saveChangesBtn.click();
    await browser.pause(3000)
}
async addAddressFun()
{
    await this.addAddress.click();
    await browser.pause(3000)
}
async addressNameFun()
{   const list = [" Qanita", " Syed", " Bokhari"];
    await this.addressName.click();
    let input = await $("//input[@id='address-name']")
    //await input.addValue(' Qanita Syed')
    await input.addValue(list[Math.floor(Math.random() * list.length)])

}
async countryFun()
{
    await this.country.click();
    let input = await $("//select[@id='address-country']")
    await input.addValue('Pakistan')
    browser.keys("\ue007");
    await browser.pause(3000)
}
async countyFun()
{
    await this.county.click();
    let input = await $("//input[@id='address-county']")
    await input.addValue(' Islamabad ')
}
async cityFun()
{
    await this.city.click();
    let input = await $("//input[@id='address-city']")
    await input.addValue(' Lahore ')
}
async postCodeFun()
{
    await this.postCode.click();
    let input = await $("//input[@id='address-postcode']")
    await input.addValue(54000)
}
async addressline1Fun()
{
    await this.addressline1.click();
    let input = await $("//input[@id='address-line-first']")
    await input.addValue('100-m Wapda Town Lahore')
}
async addressline2Fun()
{
    await this.addressline2.click();
    let input = await $("//input[@id='address-line-second']")
    await input.addValue('103-m Wapda Town Lahore')
}
async checkBoxTickFun()
{
    await this.checkBoxTick.click();
    await browser.pause(3000)
}
async saveBtnFun()
{
    await this.savebtn.click();
    await browser.pause(5000)
}
async removeBtnFun()
{
    await this.remove.click();
    await browser.pause(5000)
}
async con()
{
    await this.confirm.click();
    await browser.pause(5000)
}
}

module.exports = new myAcccount();