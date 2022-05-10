
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import pageObjects from '../../selectors/pageObjects';

Given('I navigate to Google', () => {
        cy.visit('/')
        const modal = cy.get(pageObjects.modalCookies);
        if (modal !== null) {
                cy.get(pageObjects.buttonAgree).click({ force: true })
        }
        else {
                cy.get(pageObjects.pageGoogleSearch).should('be.visible')
        }
})
When('I search for dogs', () => {
        cy.get(pageObjects.inputGoogleSearch).type(pageObjects.inputValueDogs);
        cy.wait(1000)
})
Then('I expect to see results for dogs', () => {
        cy.get(pageObjects.resultDogsList).should('be.visible')
})