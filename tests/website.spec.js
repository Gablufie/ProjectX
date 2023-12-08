describe('Website Tests', () => {
    it('Should load the website', () => {
      cy.visit('http://your-website-url')
      cy.title().should('include', 'Your Website Title')
    })
  
    it('Should check the presence of sections', () => {
      cy.get('header').should('be.visible')
      cy.get('#about').should('exist')
      cy.get('#products').should('exist')
      cy.get('#contact').should('exist')
    })
  
    // Add more test cases as needed
  })
  