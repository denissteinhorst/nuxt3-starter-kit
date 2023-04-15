import { describe, expect, test } from 'vitest'
import { setup, fetch, $fetch, url } from '@nuxt/test-utils'

describe('demo-public-api-component (e2e)', async () => {
  await setup({
    server: true,
    browser: false,
  })

  test('renders the demoPublicApiPage page', async () => {
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Showcase: CRUD-Operations')
  })

  test('renders the demoPublicApiComponent', async () => {
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Current Demo Data')
  })

  test('demoPublicApiPage contacts the API', async () => {
    const endpoint = url('/api/demoPublicApiEndpoint')
    const response = await fetch(endpoint).then(async (res) => await res.json())

    expect(response).not.toEqual([])
  })
})
