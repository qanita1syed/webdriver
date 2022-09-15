const LoginPage = require('./../pageobjects/login.page');
const { email, password } = require('./../data/credentails');
const SecurePage = require('./../pageobjects/secure.page');
const loginPage = require('./../pageobjects/login.page');

describe('My Login application', () => {
   
   beforeAll( () => {
    LoginPage.open();
   })

//beforeAll (function() {})


    it('should login with valid credentials', async () => {
        await LoginPage.open();

        //await LoginPage.login('qanita.bokhari@wizardscrew.com', 'Keetusyed1@');
        await LoginPage.login(email, password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Login successful');
    })
    // afterAll(() => {
    //     browser.close();
    //     //window.close();
    //    })
});