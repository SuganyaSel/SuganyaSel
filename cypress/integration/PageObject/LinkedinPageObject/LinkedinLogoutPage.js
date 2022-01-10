const selectors={
    messageOverlay: '.msg-overlay-list-bubble__default-conversation-container',
    meDropdown: '.global-nav__primary-link.artdeco-dropdown__trigger.artdeco-dropdown__trigger--placement-bottom.ember-view',
    logout: '.global-nav__secondary-link.mv1'

}

module.exports={
    logout()
    {
        cy.get(selectors.messageOverlay).click();
        cy.get(selectors.meDropdown).click();
        cy.get(selectors.logout).click({force:true});
    }
}