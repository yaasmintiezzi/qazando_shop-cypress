import { MINHA_CONTA } from "./elementos"

class MY_ACCOUNT {
    static fazValidacaoModal(string1, string2){
        cy.wait(5000)
        cy.get(MINHA_CONTA.DIV_MODAL_LOGIN_OK)
            .should('be.visible')
            .and('contains.text', string1)
            .and('contains.text', string2)

        cy.wait(2000)
        cy.get(MINHA_CONTA.BTN_MODAL_OK)
            .eq(0)
            .should('be.visible')
            .and('have.text', 'OK')
            .click()

        cy.url()
            .should('contains', '/my-account')
    }
}
export default MY_ACCOUNT