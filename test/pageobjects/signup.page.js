const Page = require('./page');

class SignupPage extends Page {

    get inputUserFirstname(){
        return $('#firstname')
    }

    get inputUserLastname(){
        return $('#lastname')
    }

    get inputNewsletterCheckBox(){
        return $('#is_subscribed')
    }

    get inputUserEmail(){
        return $('#email_address')
    }

    get inputUserPassword(){
        return $('#password')
    }

    get inputUserConfirmPassword(){
        return $('#password-confirmation')
    }

    get createAccountBtn(){
        return $('button.submit')
    }

    get message(){
        return $('div.message-error > div')
    }

    get successMessage(){
        return $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div')
    }

    get profileDropdown(){
        return $('header > div.panel.wrapper > div > ul > li.customer-welcome > span > button')
    }

    get signoutLink(){
        return $('ul > li.customer-welcome.active > div > ul > li.authorization-link > a')
    }
}

module.exports = new SignupPage()