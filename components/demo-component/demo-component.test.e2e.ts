import { type Browser, chromium, firefox, webkit } from 'playwright'
import { describe, expect, test, beforeAll, afterAll } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils'

describe('demo-component (e2e)', async () => {
  await setup({
    server: true,
    browser: false,
  })

  const browserTypes = [chromium, firefox, webkit]

  test(`renders the contents correct`, async () => {
    const page = await createPage('/demoPageComponentPage', {
      // page options
      viewport: { width: 1280, height: 720 },
    })
    await page.waitForSelector('h3')
    expect(await page.textContent('h3')).toContain(
      "Hello from: '~/components/demo-component.vue'"
    )
    expect(await page.textContent('h4')).toContain(
      "Hello from: '~/pages/DemoPageComponent.vue'. I'm a passed property!"
    )
    expect(await page.textContent('small')).toContain(
      "This is Demo Component's default text since text2 prop was not passed from parent component"
    )
  })

  for (const browserType of browserTypes) {
    let browser: Browser
    beforeAll(async () => {
      browser = await browserType.launch({ headless: true })
    })

    afterAll(async () => {
      browser?.close()
    })

    test(`Screenshot browser test for: ${browserType.name()}`, async () => {
      const page = await createPage('/demoPageComponentPage', {
        viewport: { width: 1280, height: 720 },
      })
      await page.waitForSelector('h3')
      await page.screenshot({
        path: `e2e/__screenshots__/demo-component (${browserType.name()}).png`,
      })

      console.log(
        `\x1b[32m%s\x1b[0m`,
        `Screenshot created, check: ~/e2e/__screenshots__/demo-component (${browserType.name()}).png`
      )
    })
  }
})
