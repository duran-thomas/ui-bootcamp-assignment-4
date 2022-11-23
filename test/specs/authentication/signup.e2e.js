const mainPage = require('../../pageobjects/main.page')
const signupPage = require('../../pageobjects/signup.page')
const loginData = require('../../data/data.file')
const { faker } = require('@faker-js/faker');

describe('Signup for Application', () => {
    for(const record of loginData){
        it(`should ${record.caseTitle}`, async () => {
            await mainPage.open('/')
            await expect(mainPage.createAccountLink).toExist()
            await mainPage.createAccountLink.click()
            await expect(signupPage.inputUserFirstname).toExist()
            await signupPage.inputUserFirstname.setValue(record.firstName)
            await signupPage.inputUserLastname.setValue(record.lastName)
            if(record.checkNewsletter === 'Yes'){
                await signupPage.inputNewsletterCheckBox.click()
            }
            if(record.email === ''){
                await signupPage.inputUserEmail.setValue(faker.internet.email())
            }else{
                await signupPage.inputUserEmail.setValue(record.email)
            }
            await signupPage.inputUserPassword.setValue(record.password)
            await signupPage.inputUserConfirmPassword.setValue(record.confirmPassword)
            await signupPage.createAccountBtn.click()
            if(record.isRegistered === 'Yes'){
                await expect(signupPage.message).toHaveTextContaining('There is already an account with this email address')
            }else{
                await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/')
                await expect(signupPage.profileDropdown).toExist()
                await signupPage.profileDropdown.click()
                await signupPage.signoutLink.click()
            }   
        })
    }
});