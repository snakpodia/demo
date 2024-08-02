Cypress.Commands.add('clickP2PMenu', () => {
    cy.fixture('selectors').then((s) => {
        cy.clickElement(s.p2p_menu_option)
    })
})

Cypress.Commands.add('clickGoOffline', () => {
    cy.fixture('selectors').then((s) => {
        cy.clickElement(s.go_offline_button)
    })
})

Cypress.Commands.add('clickGoOnline', () => {
    cy.fixture('selectors').then((s) => {
        cy.clickElement(s.go_online_button)
    })
})

Cypress.Commands.add('clickSettingsSection', () => {
    cy.fixture('selectors').then((s) => {
        cy.clickElement(s.settings_section)
    })
})

Cypress.Commands.add('clickMyOffersOption', () => {
    cy.fixture('selectors').then((s) => {
        cy.clickElement(s.my_offers_option)
    })
})

Cypress.Commands.add('verifySettingsSection', () => {
    cy.fixture('selectors').then((s) => {
        cy.verifyElement(s.settings_section)
    })
})

Cypress.Commands.add('verifyOfflineText', () => {
    cy.fixture('selectors').then((s) => {
        cy.verifyText(s.settings_message, 'currently OFFLINE')
    })
})

Cypress.Commands.add('verifyOnlineText', () => {
    cy.fixture('selectors').then((s) => {
        cy.verifyText(s.settings_message, 'currently ONLINE')
    })
})

Cypress.Commands.add('verifyCreatOfferButton', () => {
    cy.fixture('selectors').then((s) => {
        cy.verifyElement(s.create_offer_button)
    })
})

Cypress.Commands.add('verifyGoOnlineButton', () => {
    cy.fixture('selectors').then((s) => {
        cy.verifyElement(s.go_online_button)
    })
})

Cypress.Commands.add('verifyGoOfflineButton', () => {
    cy.fixture('selectors').then((s) => {
        cy.verifyElement(s.go_offline_button)
    })
})

Cypress.Commands.add('verifyOffersInfo', () => {
    cy.fixture('selectors').then((s) => {
        cy.verifyElement(s.my_offers_info_message)
    })
})

Cypress.Commands.add('verifyMyOffersSuccessMessage', () => {
    cy.fixture('selectors').then((s) => {
        cy.invokeElementText(s.alertbox)
        .should('equal', "Successful")
    })
})

Cypress.Commands.add('myOffersCheck', () => {
    cy.fixture('selectors').then((s) => {            
   
        cy.verifyElement(s.not_created_offer)
        
    })
})

