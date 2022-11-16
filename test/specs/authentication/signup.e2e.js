const MainPage = require('../../pageobjects/main.page')
const SignupPage = require('../../pageobjects/signup.page')
data = require('../../data/data.file')

describe('Signup for Application', () => {
    it('should create a new account successfully', async () => {
        await MainPage.open('/')

        await MainPage.createAccountLink.click()
        await expect(SignupPage.inputUserFirstname).toBeExisting()
        await SignupPage.inputUserFirstname.setValue(data.firstName)
        await SignupPage.inputUserLastname.setValue(data.lastName)

        await SignupPage.inputNewsletterCheckBox.click()
        await SignupPage.inputUserEmail.setValue(data.email)
        await SignupPage.inputUserPassword.setValue(data.password)
        await SignupPage.inputUserConfirmPassword.setValue(data.password)
        await SignupPage.createAccountBtn.click()
    });
});