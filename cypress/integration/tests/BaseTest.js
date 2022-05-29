import SignIn from "../pages/LoginPage";
import MainPage from '../pages/MainPage'
import User from "../User";

let localResources;
let user = null;

function getResources() {
    cy.fixture('credentials').then(function (resourses) {
        localResources = resourses
    });
}

function getUser() {
    if (user == null) {
        user = new User(localResources.login, localResources.password);
    }
    return user;
}

function getLoginPage() {
    return new SignIn();
}

export {getResources, getUser, getLoginPage};
