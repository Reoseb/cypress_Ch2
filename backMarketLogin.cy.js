//Connexion
describe('GetBackers', () => {
it('inscription OK', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
    cy.get('#signin-email').type('reomir@gmail.com')
    cy.get('#signin-password').type('reO123!')
    cy.get('[data-qa=signin-submit-button]').click ()
    })
})
