const internet = require('../pageobjects/internet');


// describe("Interacting with elements", function () {
//     it('get text for element', async () => {
//         await internet.open('account/details/bookings');
//         let text = await $("p[aceannounce]");
//         await expect(text).toBeExisting()
//         await expect(text).toHaveTextContaining('You have no active bookings.')
//         console.log(text)
//     })
//     it("Page header?", async () => {
//         //  browser.url('/')
//         //await internet.openBookTickets()
//         await internet.open('account/details/bookings');
//         let text = await $("a[data-elid='book-tickets']");

//         await $("a[data-elid='book-tickets']").click();
//         const fromDestSelect = await $('#regular-qtt-station-picker-origin-input')
//         await browser.pause(5000)
//         await expect(text).toBeExisting();
//         await expect(text).toHaveTextContaining('Book tickets');
//         await expect(fromDestSelect).toBeExisting()

//         //expect(internet.fromDest).toBeExisting()
//         //console.log(internet.pageheader.isDisplayed())
//         //console.log(internet.search.isExisting());
//     })
// });