describe('Busca de moedas', () => {
  it('filtra moedas ao digitar no input', () => {
    cy.visit('/')
    cy.get('input[placeholder="Buscar moeda..."]').type('Ethereum')
    cy.contains('Ethereum (ETH)').should('exist')
    cy.contains('Bitcoin (BTC)').should('not.exist')
  })
})
