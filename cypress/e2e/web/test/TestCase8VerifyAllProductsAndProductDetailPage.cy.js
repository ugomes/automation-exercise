describe('Verificar detalhes do produto no Automation Exercise', () => {
  it('Deve navegar até o detalhe do primeiro produto e validar as informações', () => {
    // Navegar para a URL
    cy.visit('/')

    // Verificar se a página inicial está visível
    cy.get('body').should('be.visible')
    cy.title().should('include', 'Automation Exercise')

    // Clicar no botão 'Produtos'
    cy.contains('Products').click()

    // Verificar se o usuário foi redirecionado para a página de todos os produtos
    cy.url().should('include', '/products')
    cy.contains('All Products').should('be.visible')

    // Verificar se a lista de produtos está visível
    cy.get('.features_items').should('be.visible')

    // Clicar em 'Ver Produto' do primeiro produto
    cy.get('.features_items .product-image-wrapper').first().contains('View Product').click()

    // Verificar se o usuário está na página de detalhes do produto
    cy.url().should('include', '/product_details')

    // Verificar se os detalhes do produto estão visíveis
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible') // Nome do produto
      cy.contains('Category').should('be.visible') // Categoria
      cy.contains('Rs.').should('be.visible') // Preço
      cy.contains('Availability').should('be.visible') // Disponibilidade
      cy.contains('Condition').should('be.visible') // Condição
      cy.contains('Brand').should('be.visible') // Marca
    })
  })
})
