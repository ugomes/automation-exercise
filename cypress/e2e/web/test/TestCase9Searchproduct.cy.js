
describe('Test Case 9: Search product', () => {
    it.only('Procurar Produto', () => {
        cy.visit('/');
        cy.title().should('eq', 'Automation Exercise');
        cy.get('a[href="/products"]').click();
        cy.get('h2.title.text-center').should('have.text', 'All Products')
        cy.get('#search_product')
            .type('Blue Top')
            .get('#submit_search') 
            .click(); 
        cy.get('.title.text-center').should('contain', 'Searched Products')
        cy.get('p').contains('Blue Top').should('be.visible');      
       
    });
    
});