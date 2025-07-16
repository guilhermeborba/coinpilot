describe('Carregamento da lista', () => {
  it('carrega pelo menos 20 moedas', () => {
    cy.visit('/')
    cy.get('[data-testid="coin-card"]').should('have.length.at.least', 20)
  })
})
