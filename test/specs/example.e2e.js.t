const LoginPage = require('./../pageobjects/login.page');
const SecurePage = require('./../pageobjects/secure.page');
const internet = require('./../pageobjects/internet');
const QTT = require('./../pageobjects/qtt.page');
const mixingdeck = require('./../pageobjects/mixingdeck.page');
const deiveryAndExtras = require('./../pageobjects/deliveryExtra.page');
const reviewPayPage = require('./../pageobjects/reviewPay.page');
const { email, password } = require('./../data/credentails');
const myAccount = require('../pageobjects/myAccount');
const travelPreference = require('../pageobjects/travelPreference');
const { travelPreferenceFun } = require('../pageobjects/travelPreference');



describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        //await LoginPage.login('qanita.bokhari@wizardscrew.com', 'Keetusyed1@');
        await LoginPage.login(email, password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Login successful');
    })

    it('Page header?', async () => {
        console.log($("//h2[contains(text(),'Bookings')]").isDisplayed())
    })

    it('get text for subheadig element', async () => {
        let text = await $("div.col.col-8");
        await expect(text).toBeExisting()
        await expect(text).toHaveTextContaining('You have no active bookings.')
    })

    it('Should Click on Personal Details - YOUR PROFILE', async () => {       // BOOK TICkEtS -- personal details.
        //let text = await $("a[data-elid='book-tickets']");
        //await expect(internet.bookTickets).toBeExisting().click();
        // working below
        // await expect(text).toBeExisting()
        // await expect(text).toHaveTextContaining('Book tickets')
        // await $("a[data-elid='book-tickets']").click();
        await myAccount.personalDeatailsfun();
        await myAccount.editBtnFun();
        await myAccount.firstNameFun();
        await myAccount.surtNameFun();
        await myAccount.dateFun();
        await myAccount.monthFun();
        await myAccount.yearFun();
        await myAccount.addAnotherNumFun();
        await myAccount.enterAnotherNumFun();
        await myAccount.saveChangesBtnFun();
    })
    it('Should Click on Personal Details - YOUR Address', async () => {
        await myAccount.addAddressFun();
        await myAccount.addressNameFun();
        await myAccount.countryFun();
        await myAccount.countyFun();
        await myAccount.cityFun();
        await myAccount.postCodeFun();
        await myAccount.addressline1Fun();
        await myAccount.addressline2Fun();
        //await internet.checkBoxTickFun();
        await myAccount.saveBtnFun();


    })
    it('Should remove the address', async () => {
        await myAccount.removeBtnFun();
    })
    it('Should click on confirmation button', async () => {
        await myAccount.con();
    })
    it('Should click on Travel Preference', async () => {
        await travelPreference.travelPreferenceFun();
    })
    it('Should click on Seat Pref edit button', async () => {
        await travelPreference.seatPrefEditFun();
        await travelPreference.seatDirectionFun();
        await travelPreference.seatPositionFun();
        await travelPreference.quietCoachFun();
        await travelPreference.nearToFun();
        await travelPreference.saveChangesFun();
    })
    it('Should click on Add Preference edit button', async () => {
        await travelPreference.addPreferencesFun();
        await travelPreference.royalMailFun();
        await travelPreference.saveFun();

    })
    it('Should click on Travel Assistance Edit', async () => {
        await travelPreference.travelAssistanceEditFun();
        await travelPreference.radioFun();
        await travelPreference.enterPhNumFun();
        await travelPreference.additionalInfoFun();
        await travelPreference.saveLastFun();

    })

























    xit('Buy Tickets Page Heding', async () => {
        let text = await $("//h1[contains(text(),'Buy tickets to anywhere in Great Britain')]");
        await expect(text).toBeExisting()
    })

    xit('SELECT Origin station', async () => {
        await QTT.clickAndSelectFromStation();
    })

    xit('SELECT Destination station', async () => {
        await QTT.clickAndSelecttToStation();
    })
    xit('Should select the date of going towards destination', async () => {
        await QTT.clickOutBoundToday();
    })
    xit('Should select the date Return Ticket', async () => {
        await QTT.clickReturnDate();
    })


    xit('should click on adults and kids drop down menu', async () => {
        await QTT.adultsAndkids();
    })
    xit('should click on adults and kids drop down menu', async () => {
        await QTT.addPlusButton();
    })
    xit('should click on adults and kids drop down menu', async () => {
        await QTT.addPlusChildren();
    })
    xt('should click Done button', async () => {
        await QTT.doneBtn();
    })

    xit('should click search and buy button', async () => {
        await QTT.clickSearchAndBuy();
    })

    xit('Should g to mixing-deck page ', async () => {    // mixing deck

        let text = await $(".booking-steps-label");
        await expect(text).toBeExisting();

    })

    // previous skipped
    xit('Should go to mixing deck page', async () => {   // mixing deck
        await mixingdeck.continue();
    })
    xit('Should go to DilveryAndExtrasPage', async () =>   //DeliveryExtras
    {
        let text = await $('.page-title');
        await expect(text).toBeExisting();
    })
    // it('Should go to See more option', async () =>   //DeliveryExtras
    // {
    //     await deiveryAndExtras.seeMore();
    // })

    // it('should go to TVM radio button', async () =>     //TVM
    // {
    //     await deiveryAndExtras.tvmMachine();
    // })

    xit('should go to DilveryAndExtrasPage', async () =>      //DeliveryExtras
    {
        await deiveryAndExtras.continuebtn2();
    })
    xit('should go to review and Pay Page', async () =>      //reviewPayPage
    {
        let text = await $('.page-title');
        await expect(text).toBeExisting();
    })
    xit('should go to pay now page', async () =>      // pay now page
    {
        await reviewPayPage.payNow();
    })

});
