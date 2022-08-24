const { default: $ } = require("webdriverio/build/commands/browser/$") 


const Page = require('./page')

class internet extends Page {

    get pageheader() {
        return $('.page-title font-emphasis')
        //return $('.account-header')
        //return $('.account-nav-link')
    }
    get subheading() {
        return $('.col col-8') 
    }
    get search() {
        //return $('.btn btn-link')
        return $('#book-tickets')
    
    }
    open(path) {
        return super.open(path);
    }
}
module.exports = new internet()