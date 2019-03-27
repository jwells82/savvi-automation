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
    //https://dmutah.atlassian.net/browse/QO2J-297
    'QO2J-297 Valid Login1': browser => {
        savvi
            .login('jvwells02@yahoo.com', '111111')
            .expect.element('@welcome').text.to.contain('Welcome to Savvi! Sign up for our')
        savvi
            .click('@profileDropDown')
            .click('@logout')
            .expect.element('@loginPage').text.to.contain('Sign in to Savvi')

    },

    'QO2J-297 Valid Login2': browser => {
        savvi
            .login('jvwells456@gmail.com', '777777')
            .expect.element('@welcome').text.to.contain('Welcome to Savvi! Sign up for our')
        savvi
            .click('@profileDropDown')
            .click('@logout')
            .expect.element('@loginPage').text.to.contain('Sign in to Savvi')

    }
}