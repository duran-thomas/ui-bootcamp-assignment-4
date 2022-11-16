const MainPage = require('../../pageobjects/main.page')
const ProductDetails = require('../../pageobjects/productDetailsPage.page')

describe.only('Purchasing a product', () => {
    it('should ', async () => {
        await MainPage.open('/')
        
        await MainPage.getProduct(2).click();
        await ProductDetails.addProductToCart()
        await browser.pause(2000)
        await MainPage.cartBtn.click()
        await browser.pause(1000)
        await MainPage.proceedToCheckoutBtn.click()
        await browser.pause(2000)
    } )
})