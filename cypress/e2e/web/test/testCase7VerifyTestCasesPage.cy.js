describe('Test Case 7: Verify Test Cases Page', () => {
  it('Deve verificar se a página de Test Cases está acessível', () => {

    cy.visit('/')
    // Verifica se a página inicial foi carregada com sucesso
    cy.get('body').should('be.visible')
    cy.title().should('include', 'Automation Exercise')

    // Clica no botão 'Test Cases'
    cy.contains('Test Cases').click()

    // Verifica se a URL está correta
    cy.url().should('include', '/test_cases')

    // Verifica se o texto esperado está presente
    cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
      .should('be.visible')
  })
})