const MainPage = require('../../pageobjects/main.page')
const productDetailsPagePage = require('../../pageobjects/productDetailsPage.page')
const ProductDetailsPage = require('../../pageobjects/productDetailsPage.page')

describe('Add product to cart', () => {
    it('should add a single product to the cart', async () => {
        await MainPage.open('/')

        await MainPage.getProduct(1).click();
        await ProductDetailsPage.getSizes(1).click()
        await ProductDetailsPage.getColor(1).click()
        await ProductDetailsPage.inputQuantity.setValue(1)
        await ProductDetailsPage.addToCartBtn.click()
        await expect(ProductDetailsPage.successMessage).toExist()
        await expect(productDetailsPagePage.successMessage).toHaveTextContaining('You added')
    })
    it('should try to add a product to cart without a size', async () => {
        await MainPage.open('/')

        await MainPage.getProduct(1).click();
        await ProductDetailsPage.getColor(1).click()
        await ProductDetailsPage.inputQuantity.setValue(1)
        await ProductDetailsPage.addToCartBtn.click()
        await expect(ProductDetailsPage.sizeError).toExist()
        await expect(ProductDetailsPage.sizeError).toHaveTextContaining('This is a required field.')
    })
    it('should try to add a product to cart without a color', async () => {
        await MainPage.open('/')

        await MainPage.getProduct(1).click();
        await ProductDetailsPage.getSizes(1).click()
        await ProductDetailsPage.inputQuantity.setValue(1)
        await ProductDetailsPage.addToCartBtn.click()
        await expect(ProductDetailsPage.colorError).toExist()
        await expect(ProductDetailsPage.colorError).toHaveTextContaining('This is a required field.')
    })
    it('should try to add a product to cart with a negative quantity', async () => {
        await MainPage.open('/')

        await MainPage.getProduct(1).click();
        await ProductDetailsPage.getSizes(1).click()
        await ProductDetailsPage.getColor(1).click()
        await ProductDetailsPage.inputQuantity.setValue(-1)
        await ProductDetailsPage.addToCartBtn.click()
        await expect(ProductDetailsPage.quantityError).toExist()
        await expect(ProductDetailsPage.quantityError).toHaveTextContaining('Please enter a quantity greater than 0.')
    })
    it('should try to add a product to cart with a negative quantity', async () => {
        await MainPage.open('/')

        await MainPage.getProduct(1).click();
        await ProductDetailsPage.getSizes(1).click()
        await ProductDetailsPage.getColor(1).click()
        await ProductDetailsPage.inputQuantity.setValue(-1)
        await ProductDetailsPage.addToCartBtn.click()
        await expect(ProductDetailsPage.quantityError).toExist()
        await expect(ProductDetailsPage.quantityError).toHaveTextContaining('Please enter a quantity greater than 0.')
    })
})