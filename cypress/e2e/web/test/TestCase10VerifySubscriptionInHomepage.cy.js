describe('Test Case 10 - Verificar inscrição na homepage', () => {
  it('Deve verificar o texto SUBSCRIPTION e realizar a inscrição com sucesso', () => {
    // Acessar o site
    cy.visit('https://automationexercise.com');

    // Verificar se a URL da página inicial está correta
    cy.url().should('include', 'automationexercise');

    // Rolar até o rodapé da página
    cy.scrollTo('bottom');

    // Verificar o texto "SUBSCRIPTION"
    cy.contains('Subscription').should('be.visible');

    // Inserir o e-mail no campo e clicar no botão de seta
    cy.get('#susbscribe_email')
      .type('teste@exemplo.com');
    
    cy.get('#subscribe').click();

    // Verificar a mensagem de sucesso
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});
