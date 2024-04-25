/// <reference types="cypress" />
import { CADASTRO } from "../support/pages/cadastro/elementos";
import MY_ACCOUNT from "../support/pages/minha-conta/metodos";
import Chance from "chance";

const chance = new Chance()

describe('Cadastro de usuários', () => {

    it('Validar cadastro com sucesso', () => {
        let nome_cadastro = chance.name()
        cy.visit('/register')

        cy.get(CADASTRO.INPUT_NOME)
            .should('be.visible')
            .type(nome_cadastro)

        cy.get(CADASTRO.INPUT_EMAIL)
            .should('be.visible')
            .type(chance.email({ domain: "gmail.com" }))

        cy.get(CADASTRO.INPUT_SENHA)
            .should('be.visible')
            .type(`${Cypress.env('SENHA')}`)

        cy.get(CADASTRO.BTN_CADASTRAR)
            .should('be.visible')
            .click()

        MY_ACCOUNT.fazValidacaoModal("Cadastro realizado!", `Bem-vindo ${nome_cadastro}`)
    });
})