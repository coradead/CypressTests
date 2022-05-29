import {beforeWithoutLogin, loginPage, getUser, getResources, getLoginPage} from "../BaseTest";


describe("ProfileTests", function () {
    before(function () {
        getResources();
    });

    let profilePage;
    beforeEach(function () {
        profilePage = getLoginPage().loginUser(getUser()).goToProfile();
    });

    it(('Change profile status'), function () {
        // let oldStatus = profilePage.getStatus();
        //
        // let newStatus = "Новый статус";
        // profilePage.setStatus(newStatus);
        //
        // // reload the page without using the cache
        // cy.reload(true)
        //
        // expect(profilePage.getStatus()).to.equal(newStatus);
        //
        // profilePage.setStatus(oldStatus);

        cy.get('[class="text-field_text"]')
            .invoke('text')
            .then((amount) => {
                let newStatus = "Новый статус";
                profilePage.setStatus(newStatus);

                // reload the page without using the cache
                cy.reload(true)

                cy.get('[class="text-field_text"]')
                    .invoke('text')
                    .should((val) => {
                        expect(val).to.equal(newStatus);

                    })

                profilePage.setStatus(amount);
            });
    });
});
