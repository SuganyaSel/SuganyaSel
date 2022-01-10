const selectors = {
    mobileSearch: "._3704LK",
    mobileSpecification: "//div[text()='6 GB & Above']",
    mobileFilter: '._3sckoD'

};

module.exports = {

    assertTitleAfterLogin() {
        cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    },
    selectMobile() {
        cy.wait(3000);
        cy.get(selectors.mobileSearch).type('Mobiles').type('{enter}');
        cy.title().should('eq', 'Mobiles- Buy Products Online at Best Price in India - All Categories | Flipkart.com');
        cy.xpath(selectors.mobileSpecification).click({ force: true });
        cy.get(selectors.mobileFilter).should("have.text", "6 GB & Above");
    }
}

