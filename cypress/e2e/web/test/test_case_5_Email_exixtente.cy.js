describe('cadastro com Email Exixtente', () => {
    it('Deve exibir erro ao tentar se cadastrar com e-mail já registrado', () => {
      // 1. Abra o navegador e acesse a URL
      // (O navegador é aberto automaticamente pelo Cypress)
      cy.visit('/')
      
      // 3. Verifique se a página inicial está visível com sucesso
      cy.get('.logo').should('be.visible')
      cy.title().should('include', 'Automation Exercise')
      
      // 4. Clique no botão 'Inscreva-se / Login'
      cy.get('a[href="/login"]').click()
      
      // 5. Verifique se a opção "Entrar na sua conta" está visível
      cy.get('h2').contains('Login to your account').should('be.visible')
      
      // 6. Digite endereço de e-mail e senha incorretos
      cy.get('input[data-qa="login-email"]').type('1B3oZ@example.com')
      cy.get('input[data-qa="login-password"]').type('123456')
      
      // 7. Clique no botão 'login'
      cy.get('button[data-qa="login-button"]').click()
      
      // 8. Verifique se o erro 'Seu e-mail ou senha são incorretos!' está visível
      cy.contains('Your email or password is incorrect!').should('be.visible')
    })
})