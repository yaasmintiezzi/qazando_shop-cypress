/// <reference types="cypress" />
import { LOGIN } from "../support/pages/login/elementos";
import { MINHA_CONTA } from "../support/pages/minha-conta/elementos";

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

        cy.get(MINHA_CONTA.DIV_MODAL_LOGIN_OK)
            .should('be.visible')
            .and('contains.text', 'Login realizado')
            .and('contains.text', 'Olá, yasmintiezzi@gmail.com')

        cy.wait(5000)
        cy.get(MINHA_CONTA.BTN_MODAL_OK)
            .eq(0)
            .should('be.visible')
            .and('have.text', 'OK')
            .click()

        cy.url()
            .should('contains', '/my-account')
    });
})