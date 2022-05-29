import SettingsPopUp from "./SettingsPopUp";

export default class SettingsPage {
    constructor() {
        this.checkLoad();
    }

    checkLoad() {
        cy.get('[class=main-content-header_title]').should('be.visible').end();
    }

    goToSettingsPopUp() {
        cy.get('[data-l="t,profile_form"]').click();
        return new SettingsPopUp();
    }
}