// ***********************************************
// Test: Login Failure - Automation Exercise
// ***********************************************

describe('Teste de Login Inválido Email e Password', () => {
  it('Deve exibir mensagem de erro ao tentar login com credenciais inválidas', () => {
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
    cy.get('input[data-qa="login-email"]').type('email_incorreto@teste.com')
    cy.get('input[data-qa="login-password"]').type('senha_incorreta')
    
    // 7. Clique no botão 'login'
    cy.get('button[data-qa="login-button"]').click()
    
    // 8. Verifique se o erro 'Seu e-mail ou senha estão incorretos!' está visível
    cy.get('p').contains('Your email or password is incorrect!').should('be.visible')
  })
})