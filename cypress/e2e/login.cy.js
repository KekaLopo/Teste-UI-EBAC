/// <reference types="cypress" />
const perfil = require('../fixtures/example.json') // testando fixture com variavel

    context('Funcionalidade Login', ()=>{
        it('Deve fazer login com sucesso',()=>{
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('have.text','Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
        })

        //testanto fixture acessando pelo arquivo
        it.only('Deve fazer Login com sucesso - Usando Fixture',()=>{
            cy.fixture('example').then(dados => {
                cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
                cy.get('#username').type(dados.usuario)
                cy.get('#password').type(dados.senha)
                cy.get('.woocommerce-form > .button').click()
                cy.get('.page-title').should('have.text','Minha conta')
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
            })
        })

        it('Deve exibir uma mensagem de erro ao inserir usuario invalido ', (    
        )=>{
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type(perfil.usuario+a)
            cy.get('#password').type(perfil.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain','Erro')
        })

    

        it('Deve exibir uma mensagem de erro ao inserir senha invalida ', (    
            )=>{
                cy.visit('http://lojaebac.ebaconline.art.brminha-conta/')
                cy.get('#username').type('aluno_ebac@teste.com')
                cy.get('#password').type('teste@teste')
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
            })


    })