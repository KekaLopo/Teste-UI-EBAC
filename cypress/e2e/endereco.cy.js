///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const user = require('../fixtures/example.json')
const { faker } = require('@faker-js/faker');
var numero = Math.floor(Math.random()*10000);
const dadosEndereco = require('../fixtures/endereco.json')





    describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

        beforeEach(() => {
            cy.visit('minha-conta')
            cy.login(user.usuario,user.senha)
    
        });


        it('Deve fazer cadastro de faturamento com sucesso', ()=>{
    
            EnderecoPage.editarEndrecoFaturamento(faker.name.firstName(),faker.name.lastName(),faker.company.name(),'Brasil','Rua B',numero,'Vitoria da Conquista,','Bahia','13165-000','71989898989','quacklipis@gmail.com')
            cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        })


        it('Deve fazer cadastro de faturamento com sucesso - USANDO MASSA DE DADOS', ()=>{
    
            EnderecoPage.editarEndrecoFaturamento(
                dadosEndereco[2].nome,
                dadosEndereco[2].sobrenome,
                dadosEndereco[2].empresa,
                dadosEndereco[2].pais,
                dadosEndereco[2].endereco,
                dadosEndereco[2].numero,
                dadosEndereco[2].cidade,
                dadosEndereco[2].estado,
                dadosEndereco[2].cep,
                dadosEndereco[2].telefone,
                dadosEndereco[2].email
                )

            cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        })
    });