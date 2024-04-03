import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.userNameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('text=Login')
        this.errorMessage = page.locator('data-test=error')
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async loginWithCredentials(username: string, password: string) {
        await this.userNameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async verifyErrorMessage(expectedError: string) {
        await expect(this.errorMessage).toContainText(expectedError)
    }
}