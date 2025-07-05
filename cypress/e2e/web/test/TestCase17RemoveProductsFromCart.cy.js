describe('Remover produto do carrinho - Automation Exercise', () => {
  it('Deve adicionar e remover um produto do carrinho', () => {
    // Abrir navegador e acessar o site
    cy.visit('https://automationexercise.com');

    // Verificar se a página inicial está visível
    cy.contains('Home').should('be.visible');

    // Adicionar produto ao carrinho
    cy.visit('https://automationexercise.com/products');
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();

    // Clicar em "Continue Shopping"
    cy.contains('Continue Shopping').click();

    // Ir para o carrinho
    cy.contains('Cart').click();

    // Verificar se a página do carrinho está sendo exibida
    cy.url().should('include', '/view_cart');
    cy.contains('Shopping Cart').should('be.visible');

    // Clicar no botão 'X' para remover produto
    cy.get('.cart_delete > a').first().click();

    // Verificar que o produto foi removido
    cy.get('.cart_description').should('not.exist');
  });
});

