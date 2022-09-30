/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
var radomEmail = faker.internet.email();
var nome = faker.name.firstName();
var sobrenome = faker.name.lastName();


describe('Funcionalidade Pré Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o Pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(radomEmail)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });
    
});