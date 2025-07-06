describe('Navegação por categorias - Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Deve navegar corretamente pelas categorias Mulheres e Homens', () => {
    // Verifica se as categorias estão visíveis na barra lateral esquerda
    cy.get('.left-sidebar .panel-group').should('be.visible');

    // Clicar na categoria 'Mulheres'
    cy.contains('Women').click();

    // Clicar em uma subcategoria de 'Mulheres', ex: 'Dress'
    cy.contains('Dress').click();

    // Verificar se a página da categoria de mulheres é exibida
    cy.get('.title')
      .should('contain.text', 'Women - Dress Products');

    // Clicar em uma subcategoria da categoria 'Homens'
    cy.contains('Men').click();
    cy.contains('Tshirts').click();

    // Verificar se a página da categoria de homens é exibida
    cy.get('h2.title.text-center')
      .should('have.text', 'Men - Tshirts Products');
  });
});
