// @vitest-environment nuxt
import { shallowMount } from '@vue/test-utils';
import { beforeAll, describe, expect, test } from 'vitest';
import { type IDemoComponent } from './demo-component.model';
import Component from './demo-component.vue';

describe('Demo Component (Unit)', () => {

  const preWrapper = shallowMount(Component, {
    props: {
      text: 'lorem',
      text2: 'ipsum',
    } as IDemoComponent,
  });
  
  beforeAll(() => {
    expect(preWrapper.vm).toBeTruthy();
  });


  test('to match inline snapshot', () => {
    const wrapper = shallowMount(Component, {
      props: {
        text: 'lorem',
        text2: 'ipsum',
        } as IDemoComponent,
      });

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div data-v-af492ccf=\\"\\" class=\\"demo-component\\">
        <h3 data-v-af492ccf=\\"\\" class=\\"demo-component__title\\"> Hello from: '~/components/demo-component.vue' </h3>
        <h4 data-v-af492ccf=\\"\\">lorem</h4><small data-v-af492ccf=\\"\\">ipsum</small>
        <p data-v-af492ccf=\\"\\">This Component could be anything...</p>
        <ul data-v-af492ccf=\\"\\">
          <li data-v-af492ccf=\\"\\">a Blog Post</li>
          <li data-v-af492ccf=\\"\\">a Product Card</li>
          <li data-v-af492ccf=\\"\\">a Promo Slider</li>
          <li data-v-af492ccf=\\"\\">a List or just an Item of it</li>
          <li data-v-af492ccf=\\"\\">... ¯\\\\_(ツ)_/¯</li>
        </ul>
        <hr data-v-af492ccf=\\"\\">
        <nuxt-link-stub data-v-af492ccf=\\"\\" to=\\"https://nuxt.com/docs/guide/directory-structure/components\\" target=\\"_blank\\"></nuxt-link-stub>
      </div>"
    `);
  });
});
