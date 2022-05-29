export default class SettingsPopUp {
    constructor() {
        this.checkLoad();
    }

    checkLoad() {

    }

    setName(newName) {
        cy.get('[id="field_name"]').clear();
        cy.get('[id="field_name"]').type(newName);
        cy.get('[data-l="t,profile_form_settings"]').click();
    }

}