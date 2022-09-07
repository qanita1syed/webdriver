
//const Page = require('./page');
class internet{

    get pageheader() {
        return $(`//h2[contains(text(),'Bookings')]`)
    }
    get subheading() {
        return $('div.col.col-8') 
    }
    get search() {
        return $('button.btn.btn-link')
        //return $("p[aceannounce]")
    }
        get bookTickets()
        {
        return  $("a[data-elid='book-tickets']")
        }
        
        get buyTicketsPageHeading()
        {
        return $ ("//h1[contains(text(),'Buy tickets to anywhere in Great Britain')]")
         }
          


    open(path) {
        return super.open(path);
    }
}
module.exports = new internet()