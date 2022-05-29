import SettingsPage from "./SettingsPage";

export default class ProfilePage {
    constructor() {
        this.checkLoad();
    }

    checkLoad() {
        cy.url().should('contain', '/profile');
        cy.get('[class=main-content-header_title]').should('be.visible').end();
        cy.get('[class=topPanel]').should('be.visible').end();
        cy.get('[class=u-menu_li]').should('be.visible').end();
    }

    goToSettings() {
        cy.get('[data-l="outlandertarget,settings,t,settings"] > .u-menu_a').click();
        return new SettingsPage();
    }

    setStatus(newStatus) {
        cy.get('[data-l="t,profileBio"]').trigger('mouseover');
        cy.wait(1000);
        cy.get('[data-l="t,profileBio"]').click();
        cy.get('.text-field_editor').clear();
        cy.get('.text-field_editor').type(newStatus);
        cy.get('[class="text-field_control __save"]').click();
    }
}