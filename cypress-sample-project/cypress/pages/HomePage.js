class HomePage {
    elements = {
        welcomeMessage: () => cy.get('#content > div > h4')
    }

    verifyWelcomeMessage() {
        this.elements.welcomeMessage().should('contain', 'Welcome to the Secure Area. When you are done click logout below.');
    }
}

module.exports = new HomePage();
