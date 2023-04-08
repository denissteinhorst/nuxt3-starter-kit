<a name="readme-top"></a>

<h1 align="center">Nuxt 3 - Starter Kit <br/>- work in progress, <a href="https://github.com/denissteinhorst/nuxt3-starter-kit/blob/main/TODO.md">current state</a> -</h1>

<div align="center">
  <br>
  <a>
    <img src="docs/logos/nuxt.png" alt="nuxt Logo" height="48">&nbsp;
    <img src="docs/logos/vue.png" alt="vue Logo" height="48">&nbsp;
    <img src="docs/logos/vite.png" alt="vite Logo" height="48">&nbsp;
    <img src="docs/logos/pinia.png" alt="vite Logo" height="48">&nbsp;
    <img src="docs/logos/histoire.png" alt="histoire Logo" height="48">&nbsp;
    <img src="docs/logos/vitest.png" alt="vitest Logo" height="48">&nbsp;
    <img src="docs/logos/playwrite.png" alt="playwrite Logo" height="48">&nbsp;
  <br>  <br>
   <img src="docs/logos/postcss.png" alt="postcss Logo" height="26">&nbsp;
    <img src="docs/logos/eslint.png" alt="eslint Logo" height="26">&nbsp;
    <img src="docs/logos/prettier.png" alt="prettier Logo" height="26">&nbsp;
    <img src="docs/logos/typescript.png" alt="typescript Logo" height="26">&nbsp;
    <img src="docs/logos/sass.png" alt="sass Logo" height="26">&nbsp;
    <img src="docs/logos/pnpm.png" alt="pnpm Logo" height="26">&nbsp;
    <img src="docs/logos/vueuse.png" alt="vueuse Logo" height="26">&nbsp;
    <img src="docs/logos/vuemacros.png" alt="vuemacros Logo" height="26">&nbsp;
    <img src="docs/logos/i18n.png" alt="i18n Logo" height="26">&nbsp;
  </a>
  <br>
  <br>
  <p>- containing everything you'll ever need to jumpstart your next Project! -</p>
  <h1 align="center">&nbsp;</h1>
</div>

## About The Project

This Nuxt 3 Starter Kit is the plug and play solution for all your developer needs. We're talking: different Environments, Testing, Staging, Typing, Linting n'Everything already pre-configured. Heck, I even added full-fledged demo components! **Everything to bring you up to speed** 🚀

BUT: This Kit does not come with an UI Framework though, you can easily add one of your choice like:
[Bootstrap](https://getbootstrap.com/), [TailwindCSS](https://tailwindcss.com/), [Vuetify](https://vuetifyjs.com/en/), [Element Plus](https://element-plus.org/), [Quasar](https://quasar.dev/), [NaiveUI](https://www.naiveui.com/), [Bulma](https://bulma.io/), [Cherry](https://cherry.design) ...I'm sure you'll find something that fits your needs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Prerequisites
  This Project requires the following to be installed:
  - [Node.js](https://nodejs.org/en/) (build & tested with v18.15.0)
  - [PNPM](https://pnpm.io/) (build & tested with v8.1.1)
  - optional: [NVM](https://github.com/nvm-sh/nvm) (build & tested with v0.38.0)

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation
<details>
<summary>Click here to expand the Installation Guide</summary>
<br>
<ul>
<li>
  <b>1) Install or Check correct node version </b>      

  ```bash
  nvm install --lts=Hydrogen 18.15.0
  ```
  ```bash
  nvm -v && node -v && npm -v
  ```
</li>
  <br>
<li>
  <b>2) Clone the Repository</b>      

  ```bash
  git clone https://github.com/denissteinhorst/nuxt3-starter-kit.git
  ```
</li>
  <br>
<li>
  <b>3) Switch into project Directory and install Dependencies</b>      

  ```bash
  cd nuxt3-starter-kit
  pnpm install
  pnpm post install
  ```
</li>
</ul>
</details>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
<details>
<summary>Click here to expand the Usage Guide</summary>

<ul>
<br>
<li>
  <b>1) Since the ".env.*"-Files aren't part of the Repo, you need to create them </b>      
 <br> <br>
 
  _(assuming you are already in the project directory)_
  <br><br>

  for Mac/Linux Terminal:
  ```bash
  for target in .env.development .env.staging .env.production; do cp .env $target; done
  ```

  for Windows Powershell:
  ```PowerShell
  foreach ($target in ".env.development", ".env.staging", ".env.production") {Copy-Item .env $target}
  ```
</li>
<br>
<li>
  <b>2) Change the Environment Variables for every Environment as needed</b>
  <br> <br>

  | Variable | Description | Default |
  | --- | --- | --- |
  | `APP_ENV` | Environment of the App | dev |
  | `APP_DEBUG` | Debug Mode of the App | true |  
  | `APP_NAME` | Name of the App | Nuxt 3 Starter Kit |
  | `APP_URL` | URL of the App | http://localhost:3000 |
  | `APP_PORT` | Port of the App | 3000 |
</li>
<br>
<li>
  <b>3) start with your desired run-mode</b>  
<br> <br>

  | Command | Description | Port / Location |
  | --- | --- | --- |
  | `pnpm dev` | Starts the Nuxt-Development server with HMR (uses: .env.development) | :3000 |
  | `pnpm build:stage` | Builds the app for staging (uses: .env.staging) | .output |
  | `pnpm build` | Builds the app for production (uses: .env.production) | .output |
  | `pnpm test-ui` | Starts the Vitest-Test-Runner | :51204/__vitest__/ |
  | `pnpm test-e2e` | Starts the Playwrite-Test-Runner | tbd |
  | `pnpm coverage` | Generates Vitest Coverage report | .coverage |
  | `pnpm histoire` | Starts the Histoire-Store UI | :6006 |
  | `pnpm postinstall` | Runs all postinstall scripts | - |


</li>
<br>
</ul>
</details>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
Denis Steinhorst - contact@steinhor.st

Project Link: [https://github.com/denissteinhorst/nuxt3-starter](https://github.com/denissteinhorst/nuxt3-starter)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Closing words
  This Kit is in development. If you have any suggestions, feel free to open an issue or a pull request. I'm always happy to hear from you!
  <p align="right">(<a href="#readme-top">back to top</a>)</p>


## Stack Documentation

|  | Website | Description | Documentation |
| --- | --- | --- | --- |
| Nuxt 3 | [Nuxt 3](https://nuxt.com) | The Intuitive Web Framework | [Nuxt 3 Docs](https://nuxt.com/docs) |
| Vue 3 | [Vue 3](https://vuejs.org) | Next Generation Frontend Tooling | [Vue 3 Docs](https://v3.vuejs.org/) |
| Vite | [Vite](https://vitejs.dev/) | The Progressive JavaScript Framework | [Vite Docs](https://vitejs.dev/guide/) |
| Pinia | [Pinia](https://pinia.esm.dev/) | The intuitive store for Vue.js | [Pinia Docs](https://pinia.esm.dev/) |
| Histoire | [Histoire](https://histoire.dev/) | A new way to write stories | [Histoire Docs](https://histoire.dev/guide/vue3/getting-started.html) |
| Vitest | [Vitest](https://vitest.dev/) | Blazing Fast Unit Test Framework | [Vitest Docs](https://vitest.dev/guide/) |
| Playwright | [Playwright](https://playwright.dev/) | Reliable end-to-end testing | [Playwright Docs](https://playwright.dev/docs/intro) |
| PostCSS | [PostCSS](https://postcss.org/) | A tool for transforming CSS with JavaScript | [PostCSS Docs](https://postcss.org/docs/) |
| ESLint | [ESLint](https://eslint.org/) | Statically analyzes your code to quickly find problems | [ESLint Docs](https://eslint.org/docs/user-guide/getting-started) |
| Prettier | [Prettier](https://prettier.io/) | An opinionated code formatter | [Prettier Docs](https://prettier.io/docs/en/index.html) |
| TypeScript | [TypeScript](https://www.typescriptlang.org/) | is JavaScript with syntax for types | [TypeScript Docs](https://www.typescriptlang.org/docs/) |
| Sass | [Sass](https://sass-lang.com/) | CSS with superpowers | [Sass Docs](https://sass-lang.com/documentation) |
| PNPM | [PNPM](https://pnpm.io/) | Fast, disk space efficient package manager | [PNPM Docs](https://pnpm.io/) |
| VueMacros | [VueMacros](https://vue-macros.sxzz.moe) | Explore and extend more macros and syntax sugar to Vue. | [VueMacros Docs](https://vue-macros.sxzz.moe/guide/) |
| VueUse | [VueUse](https://vueuse.org/) | Collection of essential Vue Composition API utilities | [VueUse Docs](https://vueuse.org/guide/) |
| i18n | [i18n](https://v8.i18n.nuxtjs.org) | Internationalization plugin for Vue/Nuxt | [i18n Docs](https://i18n.nuxtjs.org) |