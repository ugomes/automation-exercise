describe('Fluxo completo de compra com dados aleatórios', () => {
  const nome = `Usuario${Date.now()}`;
  const email = `teste_${Date.now()}@email.com`;
  const senha = '123456';

  it('Cadastro, compra e exclusão de conta', () => {
    // Acessar e cadastrar
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();

    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender1').check();
    cy.get('#password').type(senha);
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');
    cy.get('#first_name').type('Teste');
    cy.get('#last_name').type('Automação');
    cy.get('#address1').type('Rua Teste, 123');
    cy.get('#country').select('Canada');
    cy.get('#state').type('Estado');
    cy.get('#city').type('Cidade');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('11999999999');
    cy.get('[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');
    cy.contains('Continue').click();

    cy.contains(`Logged in as ${nome}`).should('be.visible');

    // Adicionar produto ao carrinho
    cy.visit('https://automationexercise.com/products');
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();
    cy.contains('Continue Shopping').click();

    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
    cy.contains('Proceed To Checkout').click();

    // Inserir comentário e seguir
    cy.get('textarea[name="message"]').type('Pedido urgente, por favor.');
    cy.contains('Place Order').click();

    // Inserir pagamento
    cy.get('[name="name_on_card"]').type('Usuário Teste');
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2028');
    cy.get('[data-qa="pay-button"]').click();
    // Verificar pedido concluído
    cy.contains('Congratulations! Your order has been confirmed').should('be.visible');

    // Excluir conta
    cy.contains('Delete Account').click();
    cy.contains('Your account has been permanently deleted!').should('be.visible');
    cy.contains('Continue').click();
  });
});
