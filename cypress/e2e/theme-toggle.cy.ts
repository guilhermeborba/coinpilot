describe('Botão de tema', () => {
  it('alterna entre tema claro e escuro', () => {
    cy.visit('/')

    cy.get('html').should('not.have.class', 'dark')

    cy.get('button').click()

    cy.get('html').should('have.class', 'dark')
  })
})
