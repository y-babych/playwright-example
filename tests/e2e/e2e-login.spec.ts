import { test, expect } from "@playwright/test"
import { LoginPage } from "../../page-objects/LoginPage"
import { ProductsPage } from "../../page-objects/ProductsPage"

test.describe.parallel("Login Flow", () => {
    let loginPage: LoginPage
    let productsPage: ProductsPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        productsPage = new ProductsPage(page)
        await loginPage.visit()
    })

    test('Negative - Login with incorrect credentials', async () => {
        await loginPage.loginWithCredentials('invalid username', 'invalid password')
        await loginPage.verifyErrorMessage('Username and password do not match any user in this service')
    })

    test('Negative - Login with empty credentials', async () => {
        await loginPage.loginWithCredentials('', '')
        await loginPage.verifyErrorMessage('Username is required')
    })

    test('Positive - Login as standard user', async () => {
        await loginPage.loginWithCredentials('standard_user','secret_sauce')
        await expect(productsPage.title).toBeVisible()
    })
})