/// <reference types="cypress" />
import { HomePage } from "./Pages/Homepage"
import { Products } from "./Pages/Products"

const product = new Products()
const randomid = Math.floor(Math.random() * 10000)
const home = new HomePage()
const user = {
  firstName: `Samir${randomid}`,
  lastName: "Xyz",
  email: `Samir${randomid}@gmail.com`,
  password: '12345',
  company: "kuet",
  address: 'mirpur',
  address2: "mohakhali",
  country: "India",
  state: 'Bihar',
  city: "delhi",
  zipCode: "555",
  mobileNumber: "64973",
  birthday: {
    days: 31,
    months: 5,
    years: "2012"
  }
}

// Task 1&2 done here
it("Verify Homepage", () => {
  home.visit()
  home.isPageVisible()
})

it("signup", () => {
  home.visit()
  home.StartSignup(user.firstName, user.lastName, user.email)
  home.FillSignup(user)
  home.Signup()
  home.Logout()
})

it("Verify Invalid login", () => {
  home.visit()
  home.StartLogin('sss@gmail.com', '123445')
  home.VerifyInvalidLogin()
})

it("Verify Products page", () => {
  home.visit()
  home.StartLogin(user.email, user.password)
  home.visitProductPage()
  product.VerifyProductPage()
})

it("Search Products", () => {
  home.visit()
  home.StartLogin(user.email, user.password)
  home.visitProductPage()
  product.SearchProducts('Men Tshirt')
  product.verifyProduct('Men Tshirt')

})

it("Verify Negative", () => {
  home.visit()
  home.StartLogin(user.email, user.password)
  home.visitProductPage()
  product.GotoProduct('Men Tshirt')
  product.EnterQuantityNegative(-2)
  product.AddtoCart()
  home.visitCart()
  product.VerifyNegativePrice('400', '-800')
})

it("Verify Price", () => {
  home.visit()
  home.StartLogin(user.email, user.password)
  home.visitProductPage()
  product.GotoProduct('Men Tshirt')
  product.EnterQuantityNegative(10)
  product.AddtoCart()
  home.visitCart()
  product.VerifyPositive('400', '3200')
  product.VerifyProceed()
  product.PlaceOrder('Sam', '123', '555', '5', '2027')
  product.DownloadInvoice()
  product.VerifyInvoice(user.firstName, user.lastName, '3200')
  product.DeleteInvoice()
  product.LogOut()
})


