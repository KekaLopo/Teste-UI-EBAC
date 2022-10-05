/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
var randomEmail = faker.internet.email();
var nome = faker.name.firstName();
var sobrenome = faker.name.lastName();


describe('Funcionalidade Pré Cadastro', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o Pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(randomEmail)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

    it.only('Devem completar o Pre cadastro com sucesso usando comandos Customizados',()=>{
        cy.preCadastro(randomEmail,nome,sobrenome)
    })
    
});