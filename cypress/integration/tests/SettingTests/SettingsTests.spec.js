import {getLoginPage, getResources, getUser} from "../BaseTest";

describe("ProfileTests", function () {
    before(function () {
        getResources();
    });

    let settingPage;
    beforeEach(function () {
        settingPage = getLoginPage().loginUser(getUser()).goToProfile().goToSettings();
    });

    it(('Change name'), function () {
        let settingsPopUp = settingPage.goToSettingsPopUp();

        cy.get('[id="field_name"]')
            .invoke('val')
            .then((amount) => {
                let newName = "Коля";
                settingsPopUp.setName(newName);

                // reload the page without using the cache
                cy.reload(true)

                settingsPopUp = settingPage.goToSettingsPopUp();
                cy.wait(1000);

                cy.get('[id="field_name"]')
                    .invoke('val')
                    .should((val) => {
                        expect(val).to.equal(newName);
                    })

                settingsPopUp.setName(amount);
            });
    });
});