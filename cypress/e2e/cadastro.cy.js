/// <reference types="cypress" />
import { CADASTRO } from "../support/pages/cadastro/elementos";
import { MINHA_CONTA } from "../support/pages/minha-conta/elementos";

describe('Cadastro de usuários', () => {

    it('Validar cadastro com sucesso', () => {
        cy.visit('/register')

        cy.get(CADASTRO.INPUT_NOME)
            .should('be.visible')
            .type('Yaasmin Tiezzi')

        cy.get(CADASTRO.INPUT_EMAIL)
            .should('be.visible')
            .type('yaasmintiezzi@gmail.com')

        cy.get(CADASTRO.INPUT_SENHA)
            .should('be.visible')
            .type('12345678')

        cy.get(CADASTRO.BTN_CADASTRAR)
            .should('be.visible')
            .click()

        cy.wait(3000)
        cy.get(MINHA_CONTA.DIV_MODAL_LOGIN_OK)
            .should('be.visible')
            .and('contains.text', 'Cadastro realizado!')
            .and('contains.text', 'Bem-vindo Yaasmin Tiezzi')

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