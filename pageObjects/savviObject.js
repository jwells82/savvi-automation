let myCommands = {
    login: function (email, password) {
        this.setValue('@email', email)
        this.setValue('@password', password)
        this.click('@login')
        this.click('@logout')
        return this
    }
}

module.exports = {

    url: 'http://staging.savvi.legal',

    commands: [myCommands],

    elements: {
        root: '#root',
        clickRegister: {
            selector: '//*[text()="Register"]',
            locateStrategy: 'xpath'
        },

        loginPage: {
            selector: '//*[text()="Sign in to Savvi"]',
            locateStrategy: 'xpath'
        },

        logout: {
            selector: '(//a)[@class="nav-dropdown__link"][2]',
            locateStrategy: 'xpath'
        },

        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        tos: '#tos',
        createAcct: 'button[type="submit"]',
        login: 'button[type="submit"]',
        profileDropDown: {
            selector: '(//a)[@class="nav__link nav__link-secondary dark"][1]',
            locateStrategy: 'xpath'
        },
       
        fNameRqd: {
            selector: '//*[text()="First Name is a required field"]',
            locateStrategy: 'xpath'
        },

        lNameRqd: {
            selector: '//*[text()="Last Name is a required field"]',
            locateStrategy: 'xpath'
        },

        emailRqd: {
            selector: '//*[text()="E-mail is a required field"]',
            locateStrategy: 'xpath'
        },

        passwordRqd: {
            selector: '//*[text()="Password is a required field"]',
            locateStrategy: 'xpath'
        },

        tosRqd: {
            selector: '//*[text()="You must agree to Savvi\'s Terms of Service"]',
            locateStrategy: 'xpath'
        },

        validEmail: {
            selector: '//*[text()="E-mail must be a valid email"]',
            locateStrategy: 'xpath'
        },

        validPassword: {
            selector: '//*[text()="Password must be at least 6 characters"]',
            locateStrategy: 'xpath'
        },

        welcome: {
            selector: '//*[text()="Welcome to Savvi! Sign up for our"]',
            locateStrategy: 'xpath'
        }

    }
}