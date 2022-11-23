const Page = require('../pageobjects/page')

class CartPage extends Page{
    get checkoutBtn(){
        return $('ul > li > button')
    }
}

module.exports = new CartPage()