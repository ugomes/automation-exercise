describe('Fluxo de compra do Automation Exercise', () => {
  it('Deve adicionar produto com quantidade 4 no carrinho e validar', () => {
    // 1. Acessar a página
    cy.visit('/');

    // 2. Verificar se a página inicial está visível com assert
    cy.url().should('include', 'automationexercise');
    cy.get('a[href="/"]').should('be.visible').then(($el) => {
      expect($el.text().toLowerCase()).to.include('home');
    });

    // 3. Clicar em "View Product" do primeiro produto
    cy.get('.features_items .product-image-wrapper')
      .first()
      .contains('View Product')
      .click();

    // 4. Verificar se detalhe do produto foi aberto
    cy.get('.product-information').should('be.visible').then(($info) => {
      expect($info.text().length).to.be.greaterThan(10);
    });

    // 5. Alterar quantidade para 4
    cy.get('#quantity').clear().type('4');

    // 6. Clicar no botão "Add to cart"
    cy.get('button.cart').click();

    // 7. Clicar no botão "View Cart"
    cy.contains('View Cart').click();

    // 8. Verificar se o produto aparece no carrinho com quantidade 4
    cy.get('.cart_quantity').should('be.visible').then(($qtd) => {
      const quantidade = $qtd.text().trim();
      expect(quantidade).to.eq('4');
    });
  });
});
