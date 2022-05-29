import MainPage from "./MainPage";

export default class LoginPage {
    constructor() {
        cy.visit('https://ok.ru');
        this.checkLoad();
    }

    checkLoad() {
        cy.url().should('eq', 'https://ok.ru/')
        cy.get('.topPanel').should('be.visible').end();
        cy.get('.tab-body').should('be.visible').end();
    }

    fillEmail(value) {
        const field = cy.get('#field_email');
        field.clear();
        field.type(value);

        return this;
    }

    fillPassword(value) {
        const field = cy.get('#field_password');
        field.clear();
        field.type(value);

        return this;
    }

    submit() {
        const button = cy.get('[type=submit]');
        button.click();
    }

    login(email, password) {
        this.fillEmail(email)
            .fillPassword(password)
            .submit();

        cy.get('.login_error').should('not.exist');

        return new MainPage();
    }

    loginIncorrectly(email, password) {
        this.fillEmail(email)
            .fillPassword(password)
            .submit();

        return cy.get('.login_error')
            .should('exist')
            .should('have.text', 'Неправильно указан логин и/или пароль');
    }

    loginUser(user) {
        return this.login(user.login, user.password)
    }
}
