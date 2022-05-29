import {login, getUser, getLoginPage, getResources} from "../BaseTest";
import User from "../../User";

describe("IncorrectSignInTest", function () {
    before(function () {
        getResources();
    });

    let loginPage;
    beforeEach(function () {
        loginPage = getLoginPage();
    });

    it(('Login with wrong login'), function () {
        loginPage.loginIncorrectly('wrongLogin', 'wrongPass');
    });

    it(('Login with correct login, but wrong password'), function () {
        loginPage.loginIncorrectly(getUser().login, 'wrongPass');
    });

});
