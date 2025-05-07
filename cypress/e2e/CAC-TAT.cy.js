describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('Verifica o título da aplicação', () => {
    cy.title()
        .should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche os campos obrigatórios e envia o formulário', () => {
    cy.fillMandatoryFieldsAndSubmit(
        Cypress.env('first_name'),
        Cypress.env('last_name'),
        Cypress.env('email'),
        Cypress.env('suggestions'))

    cy.verifySucessMessage()
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.fillMandatoryFieldsAndSubmit(
        Cypress.env('first_name'),
        Cypress.env('last_name'),
        'bt',
        Cypress.env('suggestions'))
    
    cy.verifyErrorMessage()    
  })

  it('Exibe mensagem de erro ao prencher o campo telefone aceita apenas números', () => {
    cy.get('[id="phone"]')
        .type('Br1un2o3')
        .should('have.value', '123')
  })

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.fillPreferentialContact(['phone'])
    cy.fillMandatoryFieldsAndSubmit(
        Cypress.env('first_name'),
        Cypress.env('last_name'),
        Cypress.env('email'),
        Cypress.env('suggestions'))

    cy.verifyErrorMessage()
  })

  it('Preenche o campo e depois os limpa usando .clear()', () => {
    cy.get('[id="firstName"]')
        .type('Bruno').should('have.value', 'Bruno')
        .clear().should('be.empty')
  })

  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.submitForm()

    cy.verifyErrorMessage()
  })

  it('Envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit(
        Cypress.env('first_name'),
        Cypress.env('last_name'),
        Cypress.env('email'),
        Cypress.env('suggestions'))

    cy.verifySucessMessage()
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    let product_text = 'YouTube'
    cy.get('select[id="product"]')
        .should('be.visible')
        .select(product_text)
        .should('have.value', product_text.toLowerCase())
  })

  it('seleciona um produto (YouTube) por seu valor(value)', () => {
    let product_value = 'youtube'
    cy.get('select[id="product"]')
        .should('be.visible')
        .select(product_value)
        .should('have.value', product_value)
  })

  it('seleciona um produto (YouTube) por seu indice(index)', () => {
    cy.get('select[id="product"]')
        .should('be.visible')
        .select(1)
        .should('have.value', 'blog')
  })

  it('Marca apenas o tipo de atendimento com valor "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('be.checked')
        .and('have.value', 'feedback')
  })

  it('Marca todos os tipos de atendimentos através dos elementos retornados pelo .get()', () => {
    cy.get('input[type="radio"]')
        .check({delay: 1000})
        .should('be.checked')
  })

  it('Marca todos os tipos de atendimentos iterando através de cada elemento pelo .each e cy.wrap()', () => {
    cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(($radio) => {
            cy.wrap($radio)
                .check()
                .should('be.checked')
    })
  })

  it('Marca um dos tipos de atendimentos pelo .each e cy.wrap()', () => {
    cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(($radio) => {
            if ($radio.text() === 'Elogio') {
                cy.wrap($radio)
                    .check()
                    .should('be.checked')
            }
        })
  })

  it('Marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
        .check().should('be.checked')
        .last()
        .uncheck().should('not.be.checked')
  })

  it('Seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .should(($input) => {expect($input[0].files[0].name).to.equal('example.json')})
  })

  it('Seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(($input) => {expect($input[0].files[0].name).to.equal('example.json')})
  })

  it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json', {encoding: null}).as('fixtureFile')

    cy.get('input[type="file"]')
        .selectFile('@fixtureFile')
        .should(($input) => {expect($input[0].files[0].name).to.equal('example.json')})
  })

  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('a')
        .should('have.attr', 'target', '_blank')
  })

  it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a')
        .invoke('removeAttr', 'target')
        .click()
    
    cy.title()
        .should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
  })
})