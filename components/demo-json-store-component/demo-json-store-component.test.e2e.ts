import { describe, expect, test } from 'vitest'
import { setup, fetch, $fetch, url } from '@nuxt/test-utils'

describe('demo-json-store-component (e2e)', async () => {
  await setup({
    server: true,
    browser: false,
  })

  const localApiResponse = [{ content: 'No demos found' }]

  const localApiJsonResponse = [
    {
      content: 'What an awesome project! 😎',
      id: 1,
      title: 'Nuxt3 Starter Kit',
    },
  ]

  test('renders the demoJsonStorePage page', async () => {
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Showcase: CRUD-Operations')
  })

  test('renders the demoJsonStoreComponent', async () => {
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Current Demo Data')
  })

  test('demoJsonStorePage contacts the API', async () => {
    const endpoint = url('/api/demoJsonStoreEndpoint')
    const response = await fetch(endpoint).then(async (res) => await res.json())

    expect(response).toStrictEqual(localApiJsonResponse)
  })
})
