describe('GetBackers', () => {
    // Inscription
    it('inscription OK', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('#firstName').type('reonew')
        cy.get('#lastName').type('mars')
        cy.get('#signup-email').type('reomir@gmail.com')
        cy.get('#signup-password').type('reO123!')
        cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click ()
    })
    // Inscription échouée
    it.skip('inscription NOK', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('#firstName').type('reoseb')
        cy.get('#lastName').type('marsden')
        cy.get('#signup-email').type('reoùir@gmail.com')
        //cy.get('#signup-password').type('reO123!')
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click
    })

    
})