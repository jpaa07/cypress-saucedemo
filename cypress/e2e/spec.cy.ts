describe('template spec', () => {
  it('passes', () => {
    cy.visit('/todo')
    cy.get('[data-test="new-todo"]').type('Buy Milk')
    
  })
})