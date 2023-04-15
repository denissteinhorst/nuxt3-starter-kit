<script setup lang="ts">
useServerSeoMeta({
  title: process.env.APP_NAME,
  description: 'testing...',
})

const demoLinks = [
  {
    title: 'Navigate to another Page in (~/pages)',
    linkText: 'goto /demoPage',
    link: '/demoPage',
    highlight: ['navigate to', 'Page in', '(~/pages)'],
  },
  {
    title: 'a Page that not exists and show custom Error Page',
    linkText: 'goto /notExisting',
    link: '/notExisting',
    highlight: ['show custom Error Page'],
  },
  {
    title: 'Navigate to a Page utilizing a custom layout',
    linkText: 'goto /demoPageCustomLayout',
    link: '/demoPageCustomLayoutPage',
    highlight: ['utilizing a custom layout'],
  },
  {
    title: 'Navigate to a Page utilizing a Component from (~/components)',
    linkText: 'goto /demoPageComponent',
    link: '/demoPageComponentPage',
    highlight: ['utilizing a Component'],
  },
  {
    title: 'Navigate to a Page to showcase CRUD-Operations for local JSON data',
    linkText: 'goto /demoJsonStorePage',
    link: '/demoJsonStorePage',
    highlight: ['showcase CRUD-Operations '],
  },
  {
    title:
      'Navigate to a Page to showcase component with data from an public API',
    linkText: 'goto /demoPublicApiPage',
    link: '/demoPublicApiPage',
    highlight: ['showcase component with data from an public API'],
  },
  {
    title: 'Navigate to a Page to showcase pinia store',
    linkText: 'goto /demoPiniaStorePage',
    link: '/demoPiniaStorePage',
    highlight: ['showcase pinia store'],
  },
  {
    title: 'Navigate to a Page to showcase persistent pinia store',
    linkText: 'goto /demoPersistentPiniaStorePage',
    link: '/demoPersistentPiniaStorePage',
    highlight: ['showcase persistent pinia store'],
  },
  {
    title: 'Navigate to a Page to showcase vueuse',
    linkText: 'goto /demoVueusePage',
    link: '/demoVueusePage',
    highlight: ['showcase vueuse'],
  },
  {
    title: 'Navigate to a Page to showcase i18n',
    linkText: 'goto /demoI18nPage',
    link: '/demoI18nPage',
    highlight: ['showcase i18n'],
  },
  {
    title:
      'Middleware on Client- and Server Side<br /><br />Client (~/middleware/demoClient.global.ts):<br />Watch your browser console after every route change<br /><br />Server (~/server/middleware/demoServer.global.ts):<br />Watch your terminal after sending a request to /api/',
    highlight: ['Middleware on Client- and Server Side'],
    linkText: '',
    link: '',
  },
]

const repoLink = 'https://github.com/denissteinhorst/nuxt3-starter-kit'

const readmeLink =
  'https://github.com/denissteinhorst/nuxt3-starter-kit/blob/main/README.md'

const readmeJumpmarks = [
  {
    title: 'About The Project',
    link: '#about-the-project',
  },
  {
    title: 'Prerequisites',
    link: '#prerequisites',
  },
  {
    title: 'Installation',
    link: '#installation',
  },
  {
    title: 'Usage',
    link: '#usage',
  },
  {
    title: 'How to Deploy',
    link: '#how-to-deploy',
  },
  {
    title: 'Troubleshooting',
    link: '#troubleshooting',
  },
  {
    title: 'Contributing',
    link: '#contributing',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
  {
    title: 'Stack Documentation',
    link: '#stack-documentation',
  },
]

const highlight = (text: string, highlight: string[]) => {
  const regex = new RegExp(`(${highlight.join('|')})`, 'gi')
  return text.replace(regex, '<strong>$1</strong>')
}
</script>

<template>
  <div class="index-page">
    <h1 class="index-page__title">
      Thanks for choosing the `Nuxt3-Starter-Kit`
    </h1>

    <p>
      This Nuxt 3 Starter Kit is the plug and play solution for all your
      developer needs. We're talking: different Environments, Testing, Staging,
      Typing, Linting n'Everything already pre-configured. Heck, I even added
      full-fledged demo components! Everything to bring you up to speed 🚀
    </p>

    <p>
      Use the following examples to get a brief overview how things work.<br />
      You can also run: "cleanup.sh / cleanup.ps1" to get rid of all examples!
    </p>

    <table class="index-page__table">
      <tr>
        <th>Available Demos:</th>
        <th></th>
      </tr>
      <tr v-for="demoLink in demoLinks" :key="demoLink.link">
        <td v-html="highlight(demoLink.title, demoLink.highlight)"></td>
        <td>
          <NuxtLink :to="demoLink.link">{{ demoLink.linkText }}</NuxtLink>
        </td>
      </tr>
    </table>

    <p class="index-page__rate">
      <strong>Closing Note:</strong>
      This Kit is in development. If you have any suggestions, feel free to open
      an issue or a pull request. I'm always happy to hear from you!
      <br />If you like the `Nuxt3-Starter-Kit`, please support me by granting a
      ⭐️ on <a :href="repoLink">Github</a>!
    </p>

    <div class="index-page__readme">
      <NuxtLink
        to="https://nuxt.com/docs/getting-started/routing"
        target="_blank"
        >Nuxt Documentation for "Routing"</NuxtLink
      ><br /><br />

      <strong>Documentation Jumpmarks (Github README.md)</strong>
      <ul>
        <li v-for="readme in readmeJumpmarks" :key="readme.title">
          <a :href="`${readmeLink}${readme.link}`" target="_blank">{{
            readme.title
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
$block: 'index-page';

.#{$block} {
  width: 100%;
  max-width: 1200px;
  margin: pxToRem(50) auto;

  &__title {
    font-size: pxToRem(30);
    margin-bottom: pxToRem(20);
    border-bottom: 1px solid black;
  }

  &__spacer {
    height: pxToRem(16);
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    margin-top: pxToRem(32);

    tr {
      &:nth-child(even) {
        background-color: #f8f8f8;
      }
    }

    th {
      text-align: left;
      padding: pxToRem(5);
      border-bottom: 1px solid #d8d8d8;
    }

    td {
      padding: pxToRem(15) pxToRem(5);

      a {
        color: blue;
        text-decoration: none;
        border-bottom: 1px solid #d8d8d8;
        transition: border-bottom 0.2s ease-in-out;

        &:hover {
          border-bottom: 1px solid blue;
        }
      }
    }
  }
  &__rate {
    border-top: 1px solid black;
    margin: pxToRem(50) 0;
    padding: pxToRem(5) 0;
    font-size: pxToRem(14);

    strong {
      display: block;
    }
  }
  &__readme {
    font-size: 14px;

    strong {
      display: block;
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
