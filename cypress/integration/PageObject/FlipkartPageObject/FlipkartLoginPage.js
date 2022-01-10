const selectors = {
    loginButton: '._1_3w1N',
    usernameText: '._2IX_2-.VJZDxU',
    passwordText: '._2IX_2-._3mctLh.VJZDxU',
    signUpButton: '._2KpZ6l._2HKlqd._3AWRsL'
};

module.exports = {

    Login(username, password) {
        cy.get(selectors.loginButton).click();
        cy.get(selectors.usernameText).first().clear();
        cy.get(selectors.usernameText).first().type(username);
        cy.get(selectors.passwordText).clear();
        cy.get(selectors.passwordText).type(password);
        cy.get(selectors.signUpButton).click();
    },
}
