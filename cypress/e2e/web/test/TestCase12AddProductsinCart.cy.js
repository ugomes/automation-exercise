/// <reference types="cypress" />
import 'cypress-real-events/support'

describe('Test Case 12: Add Products in Cart', () => {
  it('Deve adicionar produtos ao carrinho e validar os itens', () => {
    // Acessar o site
    cy.visit('https://automationexercise.com')

    // Verificar se a home carregou
    cy.get('.logo').should('be.visible')

    // Clicar em 'Products'
    cy.get('a[href="/products"]').click()

    // Verificar que está na página de produtos
    cy.url().should('include', '/products')

    // === Adicionar o primeiro produto ===
    cy.get('.product-image-wrapper').eq(0)
      .scrollIntoView()         // Rola até o produto
      .realHover()              // Passa o mouse sobre ele
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click() // Clica no botão 'Add to cart'

    // Clicar em 'Continue Shopping'
    cy.get('.modal-content').contains('Continue Shopping').click()

    // === Adicionar o segundo produto ===
    cy.get('.product-image-wrapper').eq(1)
      .scrollIntoView()
      .realHover()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    // Clicar em 'View Cart'
    cy.get('.modal-content').contains('View Cart').click()

    // Verificar se está na página do carrinho
    cy.url().should('include', '/view_cart')

    // Verificar que há 2 produtos no carrinho
    cy.get('.cart_description').should('have.length', 2)

    // Validar nomes dos produtos
    cy.get('#product-1 > .cart_description > h4 > a')
      .eq(0) // primeiro link
      .should('have.text', 'Blue Top')
        cy.get('#product-2 > .cart_description > h4 > a')
      .should('have.text', 'Men Tshirt')


    // Nomes, quantidades e total dos produtos
    cy.get('.cart_price').eq(0).should('be.visible')
    cy.get('.cart_price').eq(1).should('be.visible')

    cy.get('.cart_quantity').eq(0).should('be.visible')
    cy.get('.cart_quantity').eq(1).should('be.visible')

    cy.get('.cart_total').eq(0).should('be.visible')
    cy.get('.cart_total').eq(1).should('be.visible')
  })
})
