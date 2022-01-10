const LinkedinLoginPage = require("../PageObject/LinkedinPageObject/LinkedinLoginPage");
const LinkedinSearch = require("../PageObject/LinkedinPageObject/LinkedinSearch");
const LinkedinLogoutPage = require("../PageObject/LinkedinPageObject/LinkedinLogoutPage");

describe("Cypress sample testsuite", function () {

    it('Linkedin Signup page', () => {
        cy.fixture('testData/LinkedinTestData').then(function (data) {
            this.data = data;
            LinkedinLoginPage.navigate(this.data.linkedInurl);
            LinkedinLoginPage.login(this.data.username, this.data.password);
            LinkedinLoginPage.signUp();
            LinkedinSearch.globalSearch();
            LinkedinSearch.checkAllFilters();
            LinkedinLogoutPage.logout();
        })
    })
})
