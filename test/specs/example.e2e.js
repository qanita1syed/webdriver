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
       
        await expect(internet.pageheader).toBeDisplayed();
        console.log($("//h2[contains(text(),'Bookings')]").isDisplayed())

         })  

      it('Does the page Sub-hearder is existing?', async () => {
       // internet.open();
       await expect (internet.subheading).toBeExisting();
       })

    it('get text for element', async () => {
       // await internet.open();
        let text = await $("div.col.col-8");
        await expect(text).toBeExisting()
       await expect(text).toHaveTextContaining('You have no active bookings.')
    })
});
describe('Interacting with elements', function () {
    xit('get text for element', () => {
        //browser.url('/')
        //internet.open();
        let text = $(".col col-8").gettext()
        console.log(internet.subheading.toBeExisting())
        console.log(text)
    })
  
}); 