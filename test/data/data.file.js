module.exports = [
    {
        caseTitle: 'create account successfully', 
        firstName: 'Test',
        lastName: 'Test',
        checkNewsletter: 'Yes',
        email: '',
        password: 'NewPassword!23',
        confirmPassword: 'NewPassword!23',
        isRegistered: 'No'
    },
    {
        caseTitle: 'try to create account with used email address', 
        firstName: 'Test',
        lastName: 'Test',
        checkNewsletter: 'Yes',
        email: 'test321@test.com',
        password: 'NewPassword!23',
        confirmPassword: 'NewPassword!23',
        isRegistered: 'Yes'
    }
]