describe('Проверка формы авторизации', function () {

/*1*/   it('Проверка на позитивный кейс авторизации', function () {
            cy.visit('https://login.qa.studio/');//Зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru');//Нашли поле ввода логина и ввели верный логин
            cy.get('#pass').type('iLoveqastudio1');//Нашли поле ввода пароля и ввели верный пароль
            cy.get('#loginButton').click();//Нашли кнопку войти и кликнули
            cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');//Проверка наличия текста и видимость
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверка наличия крестика и то, что он виден пользователю.
        })
/*2*/   it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');//Зашли на сайт
            cy.get('#forgotEmailButton').click();//Нашли кнопку Забыли пароль и кликнули
            cy.get('#mailForgot').type('german@dolnikov.ru');//Нашли поле ввода логина и ввели ввели верный логин
            cy.get('#restoreEmailButton').click();//Нашли кнопку Отправить код и кликнули
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');//Проверка наличия текста и видимость
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверка наличия крестика и то, что он виден пользователю.
        })
/*3*/   it('Проверка на негативный кейс авторизации', function () {
            cy.visit('https://login.qa.studio/');//Зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru');//Нашли поле ввода логина и ввели верный логин
            cy.get('#pass').type('iLoveqastudio11');//Нашли поле ввода пароля и ввели НЕ верный пароль
            cy.get('#loginButton').click();//Нашли кнопку войти и кликнули
            cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');//Проверка наличия текста и видимость
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверка наличия крестика и то, что он виден пользователю.
        })
/*4*/   it('Проверка на негативный кейс авторизации', function () {
            cy.visit('https://login.qa.studio/');//Зашли на сайт
            cy.get('#mail').type('1german@dolnikov.ru');//Нашли поле ввода логина и ввели НЕ верный логин
            cy.get('#pass').type('iLoveqastudio1');//Нашли поле ввода пароля и ввели верный пароль
            cy.get('#loginButton').click();//Нашли кнопку войти и кликнули
            cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');//Проверка наличия текста и видимость
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверка наличия крестика и то, что он виден пользователю.
        })
/*5*/   it('Проверка валидации данных', function () {
            cy.visit('https://login.qa.studio/');//Зашли на сайт
            cy.get('#mail').type('germandolnikov.ru');//Нашли поле ввода логина и ввели логин без @
            cy.get('#pass').type('iLoveqastudio1');//Нашли поле ввода пароля и ввели верный пароль
            cy.get('#loginButton').click();//Нашли кнопку войти и кликнули
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');//Проверка наличия текста и видимость
            //В задании не написанно про проверку наличия крестика, но на всякий случай добавил.
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверка наличия крестика и то, что он виден пользователю.
        })
/*6*/   it('Проверка на позитивный кейс авторизации', function () {
            cy.visit('https://login.qa.studio/');//Зашли на сайт
            cy.get('#mail').type('GerMan@dolnikov.ru');//Нашли поле ввода логина и ввели верный логин
            cy.get('#pass').type('iLoveqastudio1');//Нашли поле ввода пароля и ввели верный пароль
            cy.get('#loginButton').click();//Нашли кнопку войти и кликнули
            cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');//Проверка наличия текста и видимость
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверка наличия крестика и то, что он виден пользователю.
})

 }) 