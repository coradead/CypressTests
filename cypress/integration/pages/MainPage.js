import MessagesPage from "./MessagesPage";
import ProfilePage from "./ProfilePage";
import {loginPage} from "../tests/BaseTest";

export default class MainPage {
    constructor() {
        this.checkLoad();
    }

    checkLoad() {
        cy.url().should('eq', 'https://ok.ru/')
        cy.get('.topPanel').should('be.visible').end();
    }

    goToMessages() {
        cy.get('[id=msg_toolbar_button]').click();
        return new MessagesPage();
    }

    goToProfile() {
        cy.get('.__navigation > :nth-child(1) > .nav-side_i').click();
        return new ProfilePage();
    }
}