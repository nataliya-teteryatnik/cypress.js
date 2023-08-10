
describe('Тестирование qa.studio', function () {
    
    it('Проверяю позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("input[id='mail']").type('german@dolnikov.ru');
        cy.get("input[type='password']").type('iLoveqastudio1');
        cy.get("button[id='loginButton']").click();

        cy.get("h2[id='messageHeader']").contains('Авторизация прошла успешно');
        cy.get("button[id='exitMessageButton']").should('exist');

        cy.end();
    })

    it('Проверяю логику восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("button[id='forgotEmailButton']").click();
        cy.get("input[id='mailForgot']").type('german@dolnikov.ru');
        cy.get("button[id='restoreEmailButton']").click();

        cy.get("h2[id='messageHeader']").contains('Успешно отправили пароль на e-mail');
        cy.get("button[id='exitMessageButton']").should('exist');

        cy.end();
    })

    it('Проверяю негативный кейс авторизации при неправильном пароле', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("input[id='mail']").type('german@dolnikov.ru');
        cy.get("input[type='password']").type('iLoveqastudio');
        cy.get("button[id='loginButton']").click();

        cy.get("h2[id='messageHeader']").contains('Такого логина или пароля нет');
        cy.get("button[id='exitMessageButton']").should('exist');

        cy.end();
    })

    it('Проверяю негативный кейс авторизации при неправильном логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("input[id='mail']").type('german88@dolnikov.ru');
        cy.get("input[type='password']").type('iLoveqastudio1');
        cy.get("button[id='loginButton']").click();

        cy.get("h2[id='messageHeader']").contains('Такого логина или пароля нет');
        cy.get("button[id='exitMessageButton']").should('exist');

        cy.end();
    })

    it('Проверяю негативный кейс валидации при отсутствии @ в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("input[id='mail']").type('germandolnikov.ru');
        cy.get("input[type='password']").type('iLoveqastudio1');
        cy.get("button[id='loginButton']").click();

        cy.get("h2[id='messageHeader']").contains('Нужно исправить проблему валидации');

        cy.end();
    })

    it('Проверяю кейс приведения к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("input[id='mail']").type('GerMan@Dolnikov.ru');
        cy.get("input[type='password']").type('iLoveqastudio1');
        cy.get("button[id='loginButton']").click();

        cy.get("h2[id='messageHeader']").contains('Авторизация прошла успешно');
        cy.get("button[id='exitMessageButton']").should('exist');

        cy.end();
    })
})
