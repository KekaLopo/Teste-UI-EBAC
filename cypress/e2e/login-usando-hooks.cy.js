/// <reference types="cypress" />

context('Funcionalidade Login - Hooks', ()=>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso',()=>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('have.text','Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    })


    it('Deve exibir uma mensagem de erro ao inserir usuario invalido ', (    
    )=>{
        
        cy.get('#username').type('aluno_@teste')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida ', (    
        )=>{
            
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
        })


})