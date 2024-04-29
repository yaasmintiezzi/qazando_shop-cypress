/// <reference types="cypress" />

import { FATURAMENTO } from "../support/pages/faturamento/elementos";
import Chance from "chance";

const chance = new Chance()

describe('', () => {

    it('Validar a criação de um pedido com sucesso', () => {
        cy.visit('/checkout-one')

        cy.get(FATURAMENTO.INPUT_NAME)
            .should('be.visible')
            .type(chance.first())

        cy.get(FATURAMENTO.INPUT_LAST_NAME)
            .should('be.visible')
            .type(chance.last())

        cy.get(FATURAMENTO.INPUT_COMPANY)
            .should('be.visible')
            .type(chance.company())

        cy.get(FATURAMENTO.INPUT_EMAIL)
            .should('be.visible')
            .type(chance.email({ domain: "teste.net.br" }))

        cy.get(FATURAMENTO.INPUT_COUNTRY)
            .should('be.visible')
            .select('usa')

        cy.get(FATURAMENTO.INPUT_STATE)
            .should('be.visible')
            .select('Aland Islands')

        cy.get(FATURAMENTO.INPUT_ZIP)
            .should('be.visible')
            .type(chance.zip())

        cy.get(FATURAMENTO.INPUT_ADDRESS)
            .should('be.visible')
            .type(chance.address())

        cy.get(FATURAMENTO.INPUT_NOTES)
            .should('be.visible')
            .type(chance.coordinates())

        cy.get(FATURAMENTO.CHECK_SAVE)
            .should('be.visible')
            .check()

        cy.get(FATURAMENTO.BTN_SAVE)
            .should('be.visible')
            .click()

        cy.get(FATURAMENTO.TXT_INF_REGISTRED)
            .find('h3')
            .should('be.visible')
            .and('contain.text', 'Billings Information registred with success!')

        cy.get(FATURAMENTO.TXT_PAYMENT)
            .find('h3')
            .should('be.visible')
            .and('contain.text', 'Payment')

        cy.get(FATURAMENTO.RADIO_PAYMENT)
            .should('be.visible')
            .check()

        cy.get(FATURAMENTO.BTN_PG)
            .should('be.visible')
            .click()

        cy.wait(2)
        cy.get(FATURAMENTO.ALERT_SUCCESS)
            .should('be.visible')
            .find('h2')
            .and('contain.text', 'Order success!')

        cy.get(FATURAMENTO.ALERT_SUCCESS)
            .should('be.visible')
            .find('h3')
            .and('contain.text', 'Congrats! Your order was created with sucess!')
    });
})