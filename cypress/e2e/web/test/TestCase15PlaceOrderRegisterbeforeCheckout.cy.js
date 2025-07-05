describe('Fluxo completo de compra no Automation Exercise', () => {
  it('Deve realizar o cadastro, comprar produto e excluir conta', () => {
    // Abrir navegador e acessar o site
    cy.visit('https://automationexercise.com');

    // Verificar se a página inicial está visível
    cy.get('body').should('contain', 'Home');

    // Clicar em 'Signup / Login'
    cy.contains('Signup / Login').click();

    // Preencher nome e e-mail para cadastro
    const nome = 'Teste Cypress';
    const email = `teste_${Date.now()}@teste.com`;

    cy.get('input[data-qa="signup-name"]').type(nome);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    // Preencher formulário de cadastro completo
    cy.get('#id_gender1').check();
    cy.get('#password').type('123456');
    cy.get('#days').select('10');
    cy.get('#months').select('June');
    cy.get('#years').select('1990');

    // Newsletter e ofertas
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Informações de endereço
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('Cypress');
    cy.get('#company').type('Company');
    cy.get('#address1').type('123 Rua Teste');
    cy.get('#address2').type('Complemento');
    cy.get('#country').select('Canada');
    cy.get('#state').type('SP');
    cy.get('#city').type('São Paulo');
    cy.get('#zipcode').type('12345-678');
    cy.get('#mobile_number').type('11999999999');

    cy.get('button[data-qa="create-account"]').click();

    // Verificar 'ACCOUNT CREATED!' e continuar
    cy.contains('Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();

    // Confirmar login com nome do usuário
    cy.contains(`Logged in as ${nome}`).should('be.visible');

    // Adicionar produtos ao carrinho
    cy.contains('Products').click();
    cy.wait(1000); // Aguarda carregar os produtos

    cy.get('.add-to-cart').first().click({ force: true });
    cy.contains('Continue Shopping').click();

    // Clicar no botão 'Cart'
    cy.contains('Cart').click();

    // Verificar se está na página do carrinho
    cy.url().should('include', '/view_cart');
    cy.contains('Shopping Cart').should('be.visible');

    // Clicar em 'Proceed To Checkout'
    cy.contains('Proceed To Checkout').click();

    // Verificar detalhes do endereço e pedido
    cy.contains('Review Your Order').should('be.visible');

    // Inserir comentário
    cy.get('textarea[name="message"]').type('Por favor, envie com cuidado.');
    cy.contains('Place Order').click();

    // Preencher dados de pagamento
    cy.get('input[name="name_on_card"]').type('Teste Cypress');
    cy.get('input[name="card_number"]').type('4111111111111111');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2026');

    cy.contains('Pay and Confirm Order').click();

    // Verificar mensagem de sucesso
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    // Excluir conta
    cy.contains('Delete Account').click();

    // Verificar exclusão da conta
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
  });
});
