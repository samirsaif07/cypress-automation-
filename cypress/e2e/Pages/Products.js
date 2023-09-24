
/// <reference types="cypress" />

export class Products {

    VerifyProductPage() {
        cy.get('#sale_image').should('exist').and('be.visible')
        cy.get('.features_items').should('exist').and('be.visible')
    }

    SearchProducts(productname) {
        cy.get('#search_product').should('exist').and('be.visible').type(productname)
        cy.get('#submit_search').should('exist').and('be.visible').click()

    }

    GotoProduct(productname) {
        this.SearchProducts(productname)
        cy.get('.choose > .nav > li > a').should('exist').and('be.visible').click()
    }

    verifyProduct(productname) {
        cy.get('.productinfo > p').should('exist').and('be.visible').and('include.text', productname)

    }

    EnterQuantityNegative(quantity) {

        cy.get('#quantity').should('exist').and('be.visible').clear().type(quantity)

    }

    AddtoCart() {
        cy.get(':nth-child(5) > .btn').should('exist').and('be.visible').click()
        cy.get('.modal-footer > .btn').should('exist').and('be.visible').click()
    }

    VerifyNegativePrice(cart_price, cart_total_price) {

        this.VerifyPrice(cart_price, cart_total_price)

    }

    VerifyPrice(cart_price, cart_total_price) {

        cy.get('.cart_price').should('exist').and('be.visible').and('include.text', cart_price)
        cy.get('.cart_total_price').should('exist').and('be.visible').and('include.text', cart_total_price)
    }


    VerifyPositive(cart_price, cart_total_price) {
        this.VerifyPrice(cart_price, cart_total_price)
    }

    VerifyProceed() {

        cy.get('.btn.btn-default.check_out').should('exist').and('be.visible').and('not.be.disabled').click()
        cy.get('.active').should('exist').and('be.visible')
        cy.get(':nth-child(2) > .heading').should('exist').and('be.visible')
        cy.get(':nth-child(4) > .heading').should('exist').and('be.visible')
        cy.get(':nth-child(7) > .btn').should('exist').and('be.visible')

    }

  

    PlaceOrder(name, cardnumber, cvc, expiryM, expiryY) {
        cy.get('a[href="/payment"]').should('exist').and('be.visible').click()
        cy.get('input[data-qa="name-on-card"]').should('exist').and('be.visible').type(name)
        cy.get('input[data-qa="card-number"]').should('exist').and('be.visible').type(cardnumber)
        cy.get('input[data-qa="cvc"]').should('exist').and('be.visible').type(cvc)
        cy.get('input[data-qa="expiry-month"]').should('exist').and('be.visible').type(expiryM)
        cy.get('input[data-qa="expiry-year"]').should('exist').and('be.visible').type(expiryY)
        cy.get('button[data-qa="pay-button"]').should('exist').and('be.visible').click()
    }

    DownloadInvoice() {
        cy.get('[data-qa="order-placed"]~a.check_out').should('exist').and('be.visible').trigger('click')

    }

    VerifyInvoice(firstName, lastName, purchaseAmount) {
        const invoiceText = `Hi ${firstName} ${lastName}, Your total purchase amount is ${purchaseAmount}. Thank you`

        cy.readFile('cypress/downloads/invoice.txt').should('exist').and('eq', invoiceText)
    }

    //only works for windows
    //replace with rm -rf cypress/downloads/invoice.txt for linux/mac
    DeleteInvoice() {
        cy.exec("del /Q cypress\\downloads\\invoice.txt");
        cy.readFile('cypress/downloads/invoice.txt').should('not.exist')
    }

    LogOut() {
        cy.get('a[href="/logout"]').should('exist').and('be.visible').click()
    }




}