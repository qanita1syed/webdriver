//const travelPreference = require('../pageobjects/travelPreference');
//const { travelPreferenceFun } = require('../pageobjects/travelPreference');

describe('Travel Preferences page', () => {

    it('should click on travell prefrences', async () => {
       // await LoginPage.open();
        await travelPreference.travelPreferenceFun();

       
    })
});