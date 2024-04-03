import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 1,
    testDir: 'tests/e2e',
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off",
        baseURL: "https://www.saucedemo.com/"
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' }
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        }
    ]
}

export default config