const LoginPage = require('../pageobjects/login.page');
const {email, password}= require('../data/credentails')
const internet = require('./../pageobjects/internet');
const QTT = require('./../pageobjects/qtt.page');



describe('Select the Tickets', () => {

    beforeAll(() => {
        LoginPage.open();
       })
    

    it('should click on Book Tickets', async () => {
        await LoginPage.open();
       await LoginPage.login(email, password);
        let text = await $("a[data-elid='book-tickets']");
        //await expect(internet.bookTickets).toBeExisting.click();
        await $("a[data-elid='book-tickets']").click();
    })
    it('SELECT Origin station', async () => {
        await QTT.clickAndSelectFromStation();
    })

    it('SELECT Destination station', async () => {
        await QTT.clickAndSelecttToStation();
    })
    it('Should select the date of going towards destination', async () => {
        await QTT.clickOutBoundToday();
    })
    it('Should select the date Return Ticket', async () => {
        await QTT.clickReturnDate();
    })
    it('should click on adults and kids drop down menu', async () => {
        await QTT.adultsAndkids();
    })
    it('should click on adults and kids drop down menu', async () => {
        await QTT.addPlusButton();
    })
    it('should click on adults and kids drop down menu', async () => {
        await QTT.addPlusChildren();
    })
    it('should click Done button', async () => {
        await QTT.doneBtn();
    })

    it('should click search and buy button', async () => {
        await QTT.clickSearchAndBuy();
    })

    // afterAll(() => {
    //     browser.close();
    //     //window.close();
    //    })

});