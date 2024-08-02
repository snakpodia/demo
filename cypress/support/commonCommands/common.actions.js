import {SalaryInsightsPage, 

} from "../../Pages"

const salaryInsightsPage = new SalaryInsightsPage()




Cypress.Commands.add('clickElement', (element)=>{
    cy.get(element).should('be.visible').click()
})

Cypress.Commands.add('forceClickElement', (element)=>{
    cy.get(element).click({force: true})
})

Cypress.Commands.add('typeValue', (field, value)=>{
    cy.get(field).should('be.visible').type(value)
})

Cypress.Commands.add('forceTypeValue', (field, value)=>{
    cy.get(field).type(value, {force: true})
})

Cypress.Commands.add('verifyElement', (element)=>{
    cy.get(element).should('be.visible').should('exist')
})
Cypress.Commands.add('invokeElementText', (element)=>{
    cy.get(element).invoke('prop', 'innerText')
})
Cypress.Commands.add('verifyText', (element, text)=>{
    cy.get(element).should('be.visible').should('contain', text)
})

Cypress.Commands.add('assertText', (element, text)=>{
    cy.get(element).should('have.text', text)
})

Cypress.Commands.add('selectValue', (element, value)=>{
    cy.get(element).should('be.visible').select(value)
})

Cypress.Commands.add('scrollToElement', (element)=>{
    cy.get(element).scrollIntoView()
})

Cypress.Commands.add('Login', ()=>{
        const email = Cypress.env('EMAIL_TEXT')
        const password = Cypress.env('PASSWORD_TEXT')
        cy.clickElement(landingPage.getSelectorkey('sign_in_icon'))
        cy.verifyElement(landingPage.getSelectorkey('email_field'))
        cy.typeValue(landingPage.getSelectorkey('email_field'), email);
        cy.typeValue(landingPage.getSelectorkey('password_field'), password, {log: false});
        cy.clickElement(landingPage.getSelectorkey('sign_in_button'))
        cy.verifyElement(landingPage.getSelectorkey('otp_field'))
        cy.typeValue(landingPage.getSelectorkey('otp_field'), landingPage.selectors.otp_value);
        cy.clickElement(landingPage.getSelectorkey('verify_otp_button'))
    
})

Cypress.Commands.add('clickInstantBuyOrSell', () => {
    cy.clickElement(instantSwapPage.getSelectorkey('instant_buy_and_sell'))

})

Cypress.Commands.add('viewCryptoTransactionPage', () => {
    cy.verifyElement(instantSwapPage.getSelector('buy_tab'))
    instantSwapPage.getSelector('buy_tab').invoke('text').then(($val) => {
        const texts = $val
        expect(texts).to.include('Buy or Sell Instantly')
    })
})


Cypress.Commands.add('verifyTransactionProcessing', ()=>{
    instantSwapPage.getSelector('buy_tab').invoke('text').then(($val)=>{
            const texts = $val
            expect(texts).to.include('Give us a moment while we process your order. It should be completed in a bit')
        })
    
})

Cypress.Commands.add('verifySuccessfulSale', ()=>{
        instantSwapPage.getSelector('buy_tab').invoke('text').then(($val)=>{
            const texts = $val
            expect(texts).to.equal('Your instant order completed successfully.')
        
    })
})

Cypress.Commands.add('clickOrderBook', ()=>{
    cy.clickElement(orderbookPage.getSelectorkey('order_book'))    
})

Cypress.Commands.add('clearInput', (field) => {
        cy.get(field).should('be.visible').clear()
})

//this grants chrome-debugger permissions(if chrome is used) to cypress and reads system's copied wallet Address.
Cypress.Commands.add('getValueCopiedToClipboard', (_text) => {
    cy.wrap(Cypress.automation('remote:debugger:protocol', {
        command: 'Browser.grantPermissions',
        params: {
          permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
          // make the permission tighter by allowing the current origin only
          // like "http://localhost:56978"
          origin: window.location.origin,
        },
    }))
    
    cy.window().its('navigator.permissions')
    .invoke('query', { name: 'clipboard-read' })
  //  .its('state').then(cy.log)

cy.window().its('navigator.clipboard')
            .invoke('readText')
            .then((text) => {
               // expect(text).to.have.lengthOf.above(20);
                cy.log(text)
            })

  })

  Cypress.Commands.add('getRandomNumber100to150', () => {

    // Generate a random number between 100 and 150
    const randomNumber100to150 = Math.floor(Math.random() * (150 - 100 + 1) + 100);
  
    cy.log(`Random Number: ${randomNumber100to150}`);

    // Store the random number in a variable
  cy.wrap(randomNumber100to150).as('randomNumber100to150');

    });

    Cypress.Commands.add('getRandomNumber200to1000', () => {

        // Generate a random number between 200 and 1000
        const randomNumber200to1000 = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
      
        cy.log(`Random Number: ${randomNumber200to1000}`);
    
        // Store the random number in a variable
      cy.wrap(randomNumber200to1000).as('randomNumber200to1000');
    
        });
    