
const LoginPage = require('../pageobjects/login.page');
const {email, password}= require('../data/credentails')
const travelPreference = require('../pageobjects/travelPreference');

describe('Travel Preferences page', () => {

    beforeAll(() => {
        LoginPage.open();
       })
    

    it('should click on travell prefrences', async () => {
        await LoginPage.open();
       await LoginPage.login(email, password);
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

    // afterAll(() => {
    //     browser.close();
    //     //window.close();
    //    })
    
});