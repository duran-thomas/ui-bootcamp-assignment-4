const Page = require('./page')

class MainPage extends Page{

    get createAccountLink(){
        return $('div.header > ul.header.links > li:nth-child(3) a')
    }

    get products(){
        return $(`ol.product-items > li:nth-child(1) > div`)
    }

    get cartBtn(){
        return $('div.minicart-wrapper a.showcart')
    }

    get proceedToCheckoutBtn(){
        return $('#top-cart-btn-checkout')
    }

    open (path) {
        return super.open(`https://magento.softwaretestingboard.com${path}`);
    }

    getProduct(index){
        return $(`ol.product-items > li:nth-child(${index}) > div`)
    }

}

module.exports = new MainPage()