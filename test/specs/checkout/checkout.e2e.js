const mainPage = require('../../pageobjects/main.page')
const productDetailsPage = require('../../pageobjects/productDetailsPage.page')
const signupPage = require('../../pageobjects/signup.page')
const cartPage = require('../../pageobjects/cart.page')
const checkoutPage = require('../../pageobjects/checkout.page')
const { faker } = require('@faker-js/faker')

describe.only('', () => {

    const password = faker.internet.password(20, false)
    const product = Math.floor(Math.random() * 6) + 1
    const size = Math.floor(Math.random() * 4) + 1
    const color = Math.floor(Math.random() * 3) + 1
    const quantity = Math.floor(Math.random() * 3) + 1
    const shippingType = Math.floor(Math.random() * 2) + 1

    it('Should run a complete checkout flow', async () => {
        //Signup
        await mainPage.open('/')
        await expect(mainPage.createAccountLink).toExist()
        await mainPage.createAccountLink.click()
        await expect(signupPage.inputUserFirstname).toExist()
        await signupPage.inputUserFirstname.setValue(faker.name.firstName())
        await signupPage.inputUserLastname.setValue(faker.name.lastName())
        await signupPage.inputUserEmail.setValue(faker.internet.email())
        await signupPage.inputUserPassword.setValue(password)
        await signupPage.inputUserConfirmPassword.setValue(password)
        await signupPage.createAccountBtn.click()
        await expect(signupPage.successMessage).toBeDisplayedInViewport()
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/')

        //Add Product to Cart
        await mainPage.homePageLink.click();
        await mainPage.getProduct(product).click();
        await expect(productDetailsPage.pageTitle).toExist()
        if(product <= 4){
            await productDetailsPage.getSizes(size).click()
            if(product === 3){
                await productDetailsPage.getColor(1).click()
            }else{
                await productDetailsPage.getColor(color).click()
            }
        }
        await productDetailsPage.inputQuantity.setValue(quantity)
        await expect(productDetailsPage.addToCartBtn).toBeClickable()
        await productDetailsPage.addToCartBtn.click()
        await expect(productDetailsPage.successMessage).toExist()
        await expect(productDetailsPage.successMessage).toHaveTextContaining('You added')

        
        await productDetailsPage.shoppingCartLink.click()
        await expect(cartPage.checkoutBtn).toExist()

        await cartPage.checkoutBtn.click()

        //Complete checkout form
        await expect(checkoutPage.inputAddressStreet).toExist()
        await checkoutPage.inputAddressStreet.setValue(faker.address.street())
        await checkoutPage.inputCity.setValue(faker.address.city())
        await checkoutPage.inputStateDropdown.selectByAttribute('value', '3')
        await checkoutPage.inputZipCode.setValue(faker.address.zipCode())
        await checkoutPage.inputPhoneNumber.setValue(faker.phone.number('###-###-####'))
        await checkoutPage.shippingCheckBox(shippingType).click()
        await expect(checkoutPage.nextBtn).toBeClickable()
        await checkoutPage.nextBtn.click()
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#payment')
        await expect(checkoutPage.placeOrderBtn).toBeClickable()
        await checkoutPage.placeOrderBtn.click()
        await expect(checkoutPage.headingText).toHaveText('Thank you for your purchase!')

        //Verify Order
        const orderNumber = await checkoutPage.orderNumber.getText()
        await checkoutPage.orderNumber.click()
        await expect(checkoutPage.headingText).toExist()
        await expect(checkoutPage.headingText).toHaveTextContaining(orderNumber)
    } )
})