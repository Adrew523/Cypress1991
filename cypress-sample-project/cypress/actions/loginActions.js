const loginPage = require('../pages/loginPage');
const homePage = require('../pages/homePage');

class LoginActions {
    login(username, password) {
        loginPage.visit();
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        homePage.verifyWelcomeMessage();
    }
}

module.exports = new LoginActions();
