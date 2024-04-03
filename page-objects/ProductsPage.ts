import { expect, Locator, Page } from '@playwright/test'

export class ProductsPage {
    readonly page: Page
    readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.title = page.locator('data-test=title')
    }
}