/// <reference types="cypress" />


describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });


    it('Deve selecionar um produto da Lista', () => {
        cy.get('[class="product-block grid"]')
            .first() 
            .click()

            //posso usar eq() pra pegar o item que eu quiser começando da posição 0 
            //ou posso usar contains ('e passar o nome dele aqui')
    });

    it.only('Deve Adicionar um produto ao Carrinho', () => {
        let quantidade= 3;
    cy.get('.dropdown-toggle > .mini-cart-items')
        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie')
        .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('Woocommerce-message').should('contains', quantidade+" x Abominable Hoodie")
    });
});