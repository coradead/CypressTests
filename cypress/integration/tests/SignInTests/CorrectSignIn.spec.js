import {loginPage, getUser, getLoginPage, getResources} from "../BaseTest";

describe("CorrectSignInTest", function () {
    before(function () {
        getResources();
    });

    let loginPage;
    beforeEach(function () {
        loginPage = getLoginPage();
    });

    it(('Login'), function () {
        loginPage.loginUser(getUser())
    });

});
