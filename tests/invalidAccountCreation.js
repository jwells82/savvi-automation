let savvi = {};

module.exports = {
    beforeEach: browser => {
       savvi = browser.page.savviObject()
       savvi.navigate()
           .waitForElementPresent('@root', 5000)
   },
  
   after: browser => {
       browser.end()
   },
   //https://dmutah.atlassian.net/browse/QO2J-291
   'QO2J-291 Invalid Account Creation': browser => {
       savvi
            .click('@clickRegister')
            .setValue('@firstName', '' )
            .setValue('@lastName', '')
            .setValue('@email', '')
            .setValue('@password', '')
            .setValue('@tos', '')
            .click('@createAcct')
            .expect.element('@fNameRqd').text.to.contain('First Name is a required field')
        savvi
            .expect.element('@lNameRqd').text.to.contain('Last Name is a required field')
        savvi
            .expect.element('@emailRqd').text.to.contain('E-mail is a required field')
        savvi
            .expect.element('@passwordRqd').text.to.contain('Password is a required field')
        savvi
            .expect.element('@tosRqd').text.to.contain('You must agree to Savvi\'s Terms of Service')
        savvi
            .setValue('@email', '1')
            .setValue('@password', '1')
            .click('@createAcct')
            .expect.element('@validEmail').text.to.contain('E-mail must be a valid email')
        savvi
            .expect.element('@validPassword').text.to.contain('Password must be at least 6 characters')

   }
}