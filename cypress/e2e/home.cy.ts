describe('Página inicial', () => {
  it('deve exibir o título CoinPilot', () => {
    cy.visit('/')
    cy.contains('CoinPilot').should('exist')
  })
})
