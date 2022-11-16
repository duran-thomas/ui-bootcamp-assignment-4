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
}

module.exports = new SignupPage()