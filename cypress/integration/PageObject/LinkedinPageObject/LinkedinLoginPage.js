const selectors = {
    username: '#session_key',
    password: '#session_password',
    signUp: '.sign-in-form__submit-button'
}

module.exports = {

    navigate(linkedinURL)
    {
      cy.visit(linkedinURL);
    },

    login(username, password) {
        cy.get(selectors.username).clear();
        cy.get(selectors.username).first().type(username);
        cy.get(selectors.password).clear();
        cy.get(selectors.password).type(password);
        return this
    },
    signUp() {
        cy.get(selectors.signUp).click();
    },

}
