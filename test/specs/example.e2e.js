const LoginPage = require('./../pageobjects/login.page')
const SecurePage = require('./../pageobjects/secure.page');
const internet = require('./../pageobjects/internet');


describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('qanita.bokhari@wizardscrew.com', 'Keetusyed1@');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Login successful');
    })

    it('Page header?', async () => {
         //internet.open();
       // await expect(internet.pageheader).toBeDisplayed();
        console.log($("//h2[contains(text(),'Bookings')]").isDisplayed())
         })  

    it('get text for subheadig element', async () => {
       // await internet.open();
        let text = await $("div.col.col-8");
        await expect(text).toBeExisting()
       await expect(text).toHaveTextContaining('You have no active bookings.')
    })
    it('Book tickets onClick ', async () =>
    {
        let text = await $("a[data-elid='book-tickets']");
        //await expect(internet.bookTickets).toBeDisplayed();
        //await expect(internet.bookTickets).toBeExisting().click();
        await expect(text).toBeExisting()
        await expect(text).toHaveTextContaining('Book tickets')
        await $("a[data-elid='book-tickets']").click();
    })
    it('Buy Tickets Page Heding', async () =>
    {
        let text = await $ ("//h1[contains(text(),'Buy tickets to anywhere in Great Britain')]");
        await expect(text).toBeExisting()
        //await expect(text).toHaveTextContaining('Buy tickets to anywhere in Great Britain')
       // await expect(internet.buyTicketsPageHeading).toBeExisting();
    })

    it('SELECT DESTINATION FROM', async () =>
    {
    let text = await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]")
    await browser.pause(3000)
    await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]").waitForExist({ timeout: 5000 })
    await expect(text).toBeExisting()
    await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]").click();
    await browser.pause(3000)

    await browser.actions()
    .keyDown(Key.SHIFT)
    .sendKeys('a')
    await browser.pause(3000)
    })

    /*it('SELECT pickFrom', async () =>
    {
    let text = await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[2]")
    await expect(text).toBeExisting()
    $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[2]").selectByVisibleText("Banbury (BAN)");  
    // $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[2]").selectByAttribute(attribute, "Banbury (BAN)")
    })

    it('SELECT station from TO FIELD', async () =>
    {
    let text = await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]")
    await browser.pause(3000)
    await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]").waitForExist({ timeout: 5000 })
    await expect(text).toBeExisting()
    await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]").click();
    })

    it('SELECT statin To', async () =>
    {
        let text = await $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]")
        await expect(text).toBeExisting()
        $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]").selectByVisibleText("Bicester Village (BIT)"); 
    })

    it('click on SearchAndBuyButton', async () =>
    {
        let text = await $("//button[contains(text(),'Search and Buy')]")
        await expect(text).toBeExisting()
     //await text.click()
    //await $("//button[contains(text(),'Search and Buy')]").click();
 
    }) */
});
