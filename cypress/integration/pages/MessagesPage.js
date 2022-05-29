export default class MessagesPage {
    constructor() {
        this.checkLoad();
    }

    checkLoad() {
        cy.url().should('contain', '/messages');
        cy.get('.topPanel').should('be.visible').end();
    }
}