/// <reference types="cypress" />
export class HomePage {
    visit() {
        cy.visit('https://automationexercise.com/')
    }

    isPageVisible() {
        cy.get('a > img').should('exist').and('be.visible')
        cy.get('#slider').should('exist').and('be.visible')
    }

    StartSignup(firstName, lastName, email) {

        cy.get('a[href="/login"]').should('exist').and('be.visible').click()
        cy.url().should('include', 'login')

        // sign up 

        cy.get('[data-qa="signup-name"]').should('exist').and('be.visible').type(`${firstName} ${lastName}`)
        cy.get('[data-qa="signup-email"]').should('exist').and('be.visible').type(email)
        cy.get('[data-qa="signup-button"]').should('exist').and('be.visible').click()

    }

    FillSignup(user) {

        cy.url().should('include', 'signup')
        cy.get('input[value="Mr"]').should('exist').and('be.visible').check()
        cy.get('input[data-qa="password"]').should('exist').and('be.visible').type(user.password)
        cy.get('select[data-qa="days"]').should('exist').and('be.visible').select(user.birthday.days)
        cy.get('select[data-qa="months"]').should('exist').and('be.visible').select(user.birthday.months)
        cy.get('select[data-qa="years"]').should('exist').and('be.visible').select(user.birthday.years)

        cy.get('input[id="newsletter"]').check().should('be.checked')
        cy.get('input[id="optin"]').check().should('be.checked')

        cy.get('input[data-qa="first_name"]').should('exist').and('be.visible').type(user.firstName)
        cy.get('input[data-qa="last_name"]').should('exist').and('be.visible').type(user.lastName)
        cy.get('input[data-qa="company"]').should('exist').and('be.visible').type(user.company)
        cy.get('input[data-qa="address"]').should('exist').and('be.visible').type(user.address)
        cy.get('input[data-qa="address2"]').should('exist').and('be.visible').type(user.address2)
        cy.get('select[data-qa="country"]').should('exist').and('be.visible').select(user.country)
        cy.get('input[data-qa="state"]').should('exist').and('be.visible').type(user.state)
        cy.get('input[data-qa="city"]').should('exist').and('be.visible').type(user.city)
        cy.get('input[data-qa="zipcode"]').should('exist').and('be.visible').type(user.zipCode)
        cy.get('input[data-qa="mobile_number"]').should('exist').and('be.visible').type(user.mobileNumber)

    }

    Signup() {
        cy.get('button[data-qa="create-account"]').should('exist').and('be.visible').click()
        cy.url().should('include', 'account_created')
        cy.get('a[data-qa="continue-button"]').should('exist').and('be.visible').click()
    }

    Logout() {
        cy.get('a[href="/logout"]').should('exist').and('be.visible').click()

    }

    StartLogin(email, password) {
        cy.get('a[href="/login"]').should('exist').and('be.visible').click()
        cy.url().should('include', 'login')

        cy.get('[data-qa="login-email"]').should('exist').and('be.visible').clear().type(email)
        cy.get('[data-qa="login-password"]').should('exist').and('be.visible').clear().type(password)
        cy.get('[data-qa="login-button"]').should('exist').and('be.visible').click()
    }

    VerifyInvalidLogin() {
        cy.get('p[style]').should('exist').and('be.visible').and('include.text', 'Your email or password is incorrect!')
    }

    visitProductPage(){
        cy.get('a[href="/products"]').should('exist').and('be.visible').click()
    }
    
    visitCart(){
        cy.contains('Cart').should('exist').and('be.visible').click({ multiple: true })
    }

}