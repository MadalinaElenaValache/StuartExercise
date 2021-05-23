const Page = require('./page');

/**
 * sub page containing specific selectors and methods for Login page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emailInput () { return $('#email') }
    get passwordInput () { return $('#password') }
    get loginButton () { return $('#logInButton') }

    login (email, password) {
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.loginButton.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('log-in');
    }
}

module.exports = new LoginPage();
