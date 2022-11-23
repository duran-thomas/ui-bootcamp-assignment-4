const Page = require('../pageobjects/page')

class CheckoutPage extends Page{

    get inputFirstName(){
        return $('input[name="firstname"]')
    }

    get inputLastName(){
        return $('input[name="lastname"]')
    }

    get inputAddressStreet(){
        return $('input[name="street[0]"]')
    }

    get inputCity(){
        return $('input[name="city"]')
    }

    get inputStateDropdown(){
        return $('#shipping-new-address-form > div:nth-child(6) > div > select')
    }

    get inputZipCode(){
        return $('input[name="postcode"]')
    }

    get inputCountry(){
        return $('input[name="country_id"]')
    }

    get inputPhoneNumber(){
        return $('input[name="telephone"]')
    }

    get inputPhoneNumber(){
        return $('input[name="telephone"]')
    }

    shippingCheckBox(index){
        return $(`#checkout-shipping-method-load > table > tbody > tr:nth-child(${index}) > td:nth-child(1) > input`)
    }

    get nextBtn(){
        return $('div#shipping-method-buttons-container > div > button')
    }

    get placeOrderBtn(){
        return $('div.payment-method-content > div.actions-toolbar > div > button')
    }

    get headingText(){
        return $('h1.page-title')
    }

    get orderNumber(){
        return $('div.checkout-success > p:nth-child(1) > a')
    }


}

module.exports = new CheckoutPage()