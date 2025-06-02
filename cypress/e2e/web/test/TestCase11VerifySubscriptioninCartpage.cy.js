describe('Test Case 11: Verify Subscription in Cart page', () => {
  it('Deve verificar inscrição com sucesso no rodapé do carrinho', () => {
    // Acessar o site
    cy.visit('https://automationexercise.com')

    // Verificar que carregou a home
    cy.url().should('eq', 'https://automationexercise.com/')

    // Clicar no botão 'Cart'
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

    // Verificar que está na página do carrinho
    cy.url().should('include', '/view_cart')

    // Rolar até o rodapé
    cy.scrollTo('bottom')

    // Verificar o texto Subscription no rodapé
    cy.contains('h2', 'Subscription').should('be.visible')

    // Digitar e-mail no campo de inscrição
    cy.get('#susbscribe_email')
      .type('teste@exemplo.com')

    // Clicar no botão para inscrever, mesmo que haja mais de 1 botão
    cy.get('#subscribe').click({ multiple: true })

    // Verificar mensagem de sucesso
    cy.contains('You have been successfully subscribed!').should('be.visible')
  })
})
