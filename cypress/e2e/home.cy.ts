describe('Página inicial', () => {
  it('deve exibir o título CoinPilot', () => {
    cy.visit('http://localhost:3000')
    cy.contains('CoinPilot').should('exist')
  })
})
