const Page = require('../pageobjects/page')

class ProductDetails extends Page{

    getSizes(index){
        return $(`div.swatch-attribute.size > div > div:nth-child(${index})`)
    }

    getColor(index){
        return $(`div.swatch-attribute.color > div > div:nth-child(${index})`)
    }

    get inputQuantity(){
        return $('#qty')
    }

    get sizeError(){
        return $('div.swatch-attribute.size > div.mage-error')
    }

    get colorError(){
        return $('div.swatch-attribute.color > div.mage-error')
    }

    get addToCartBtn(){
        return $('#product-addtocart-button')
    }

    get quantityError(){
        return $('#qty-error')
    }

    get successMessage(){
        return $('div.page.messages > div:nth-child(2) > div > div > div')
    }

    get shoppingCartLink(){
        return $('div.page.messages > div:nth-child(2) > div > div > div > a')
    }

    get pageTitle(){
        return $('.page-title')
    }

    addProductToCart(){
        this.getSizes(1).click()
        this.getColor(1).click()
        this.inputQuantity.setValue(1)
        this.addToCartBtn.click()
    }
}

module.exports = new ProductDetails()