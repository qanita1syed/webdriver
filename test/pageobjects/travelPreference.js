class travelPreference
{
    get travelPreference()
{
return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/nav[1]/a[4]")
}

get seatPrefEdit()
{
return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-account-navbar[1]/div[1]/div[1]/ace-travel-preferences[1]/div[2]/ace-seat-preference-form[1]/div[1]/div[1]/div[1]/ace-button[1]/button[1]")
}
get seatDirection()
{
return $("//select[@id='seat-direction-options']")
}

async travelPreferenceFun()
{
    await this.travelPreference.click();
    await browser.pause(3000)
}
async seatPrefEditFun()
{
    await this.seatPrefEdit.click();
    await browser.pause(3000)
}
async seatDirectionFun()
{
    await this.seatDirection.click();
    const list = ["Don't mind", "Backward", "Forward", "Airline"];
    // let input = await $("//select[@id='seat-direction-options']")
    // await input.getValue(list[Math.floor(Math.random() * list.length)])
    // browser.keys("\ue007");
    // await browser.pause(5000)
    const inputUser = await $("//select[@id='seat-direction-options']");
    const value = await inputUser.getValue(list[Math.floor(Math.random() * list.length)]);
    await browser.pause(5000)


}





}


module.exports = new travelPreference();