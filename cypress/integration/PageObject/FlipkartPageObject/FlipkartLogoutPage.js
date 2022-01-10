const selectors = {
    myAccountMouseOver: '.exehdJ',
    logoutButton: '._3vhnxf'
 
};

module.exports = {
    logout(){
        cy.get(selectors.myAccountMouseOver).first().trigger('mouseover');
        cy.get(selectors.logoutButton).contains('Logout').click();
    }
}
