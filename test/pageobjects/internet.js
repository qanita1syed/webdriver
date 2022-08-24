const Page = require('./page');

class internet{

    get pageheader() {
        return $(`//h2[contains(text(),'Bookings')]`)
        //return $('.account-header')
        //return $('.account-nav-link')
    }
    get subheading() {
        return $('div.col.col-8') 
    }
    get search() {
        //return $('.btn btn-link')
        return $('button.btn.btn-link')
    
    }
    open(path) {
        return super.open(path);
    }
}
module.exports = new internet()