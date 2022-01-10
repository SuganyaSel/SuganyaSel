const FlipkartLogin = require("../PageObject/FlipkartPageObject/FlipkartLoginPage");
const FlipkartMobile = require("../PageObject/FlipkartPageObject/FlipkartMobileSearch");
const FlipkartLogout = require("../PageObject/FlipkartPageObject/FlipkartLogoutPage");

describe("Cypress sample testsuite", function () {

    it('Visit flipkart website and check the mobile accessories', () => {
        cy.fixture('testData/FlipkartTestData').then(function (data) {
            this.data = data;
            cy.visit('https://www.flipkart.com/');
            FlipkartLogin.Login(this.data.username, this.data.password);
            FlipkartMobile.assertTitleAfterLogin();
            FlipkartMobile.selectMobile();
            FlipkartLogout.logout();
        })
    })
})