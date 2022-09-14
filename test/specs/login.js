const LoginPage = require('./../pageobjects/login.page');
const { email, password } = require('./../data/credentails');
const SecurePage = require('./../pageobjects/secure.page');

describe('My Login application', () => {
   
    // beforeall(function () {
    // console.log("-----Before All Test Suit-----");     });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        //await LoginPage.login('qanita.bokhari@wizardscrew.com', 'Keetusyed1@');
        await LoginPage.login(email, password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Login successful');
    })
});