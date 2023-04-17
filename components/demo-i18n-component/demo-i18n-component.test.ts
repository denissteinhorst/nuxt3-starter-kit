// @vitest-environment nuxt
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { createI18n } from 'vue-i18n'
import Component from './demo-i18n-component.vue'

// GET THE LOCALES
import de from '~/locales/de-DE.json'
import fr from '~/locales/fr-FR.json'
import en from '~/locales/en-US.json'

describe('demo-i18n-component', () => {
  const i18n = createI18n({
    defaultLocale: 'en-US',
    messages: {
      'en-US': en,
      'de-DE': de,
      'fr-FR': fr,
    },
  })

  const wrapper = shallowMount(Component, {
    global: {
      plugins: [i18n],
    },
  })

  const headlineClass = '.demo-i18n-component__blogentry--title'

  test('renders the Headline in: "default/English"', () => {
    expect(wrapper.find(headlineClass).text()).toBe(
      // @ts-expect-error
      ref(i18n.global.messages).value['en-US'].headline.source
    )
  })

  test('renders the Headline in: "French"', async () => {
    ref(i18n.global.locale).value = 'fr-FR'
    await wrapper.vm.$nextTick()

    expect(wrapper.find(headlineClass).text()).toBe(
      // @ts-expect-error
      ref(i18n.global.messages).value['fr-FR'].headline.source
    )
  })

  test('renders the Headline in: "German"', async () => {
    ref(i18n.global.locale).value = 'de-DE'
    await wrapper.vm.$nextTick()

    expect(wrapper.find(headlineClass).text()).toBe(
      // @ts-expect-error
      ref(i18n.global.messages).value['de-DE'].headline.source
    )
  })
})
