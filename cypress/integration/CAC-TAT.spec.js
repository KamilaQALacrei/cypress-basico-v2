/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it("preenche os campos obrigatórios e envia o formulário", function(){
        const longText = "Esse é um dos teste e2e com automação em cypress que estou aprendendo nas aulas do Walmir, está sendo ótimo e estou aprendendo muito. "
        cy.get('#firstName').type("Kamila")
        cy.get('#lastName').type("Gabriel")
        cy.get('#email').type("KamilaQA@exemplo.com")
        cy.get('#open-text-area').type(longText,{ delay: 0 })
        cy.get('.button[type="submit"]').click()

        cy.get(".success").should('be.visible')
    })

    it("exibe mensagem de erro ao submeter o formulário em branco", function(){

        cy.get('.button[type="submit"]').click()
        
        cy.get('.error').should("be.visible")
    })

    it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function(){

        cy.get('#firstName').type("Kamila")
        cy.get('#lastName').type("Gabriel")
        cy.get('#email').type("KamilaQAexemplo.com")
        cy.get('#open-text-area').type("Teste e2e cypress.")
        cy.get('.button[type="submit"]').click()

        cy.get('.error').should("be.visible")
    })

    it.only("validar que, se um valor não numérico for digitado, seu valor continuará vazio.", function(){

    })
    

  })
  
  