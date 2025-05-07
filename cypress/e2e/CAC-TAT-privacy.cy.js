describe('Central de Atendimento ao Cliente TAT - Política de Privacidade', () => {
  beforeEach(() => {
    cy.visit('./src/privacy.html')
  })

  Cypress._.times(2, () => {
    it('Verifica o título da aplicação', () => {
      cy.title()
          .should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
    })
  })
  
})