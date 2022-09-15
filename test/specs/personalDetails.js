const LoginPage = require('../pageobjects/login.page');
const {email, password}= require('../data/credentails')
const myAccount = require('../pageobjects/myAccount');


describe(' personal details ', () => {

     beforeAll(() => {
        LoginPage.open();
       })
    

it('Should Click on Personal Details - YOUR PROFILE', async () => {       // personal details.
    
    await LoginPage.open();
    await LoginPage.login(email, password);
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
// afterAll(() => {
//     browser.close();
//     //window.close();
//    })

});
