/// <reference types="cypress" />
import { LOGIN } from "../support/pages/login/elementos";
import MY_ACCOUNT from "../support/pages/minha-conta/metodos"; //metodo

describe('Login', () => {

    it('Validar login com sucesso', () => {
        cy.visit('login')

        cy.get(LOGIN.INPUT_LOGIN)
            .should('be.visible')
            .type('yasmintiezzi@gmail.com')

        cy.get(LOGIN.INPUT_SENHA)
            .should('be.visible')
            .type('12345678')

        cy.get(LOGIN.BTN_LOGIN)
            .should('be.visible')
            .click()
            .wait(2)

        MY_ACCOUNT.fazValidacaoModal("Login realizado", `Olá, yasmintiezzi@gmail.com`) //metodo alt
    });
})