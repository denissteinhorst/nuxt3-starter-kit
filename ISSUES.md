# OPEN ISSUES (Help Wanted)

## Vitest (unit testing)
### command: "pnpm run test:unit, test:unit-ui"
s
The tests are running as expected, but besides the test the following error is thrown:

```bash
[nuxt] error caught during app initialization TypeError: Cannot destructure property 'cookieOptions' of '__vite_ssr_import_2__.useRuntimeConfig(...).public.persistedState' as it is undefined.
    at /Users/.../nuxt3-starter-kit/node_modules/.pnpm/@pinia-plugin-persistedstate+nuxt@1.1.1_@pinia+nuxt@0.4.8_pinia@2.0.34/node_modules/@pinia-plugin-persistedstate/nuxt/dist/runtime/plugin.mjs:8:11
    at fn (/Users/.../nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/nuxt.js:175:27)
    at callWithNuxt (/Users/.../nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/nuxt.js:180:12)
    at applyPlugin (/Users/.../nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/nuxt.js:121:29)
    at Module.applyPlugins (/Users/.../nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/nuxt.js:131:11)
    at initApp (/Users/.../nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/entry.js:47:7)
```

## Histoire
### command: "pnpm run story"

#### issue: Histoire is starting up as usual, but its displaying the nuxt custom error page below each component as well as under the histoire page itself, plus its throwing the following error:

```bash
(node:20544) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
components/demo-component/demo-component.story.vue 965ms (setup:27ms, execute:18ms, run:920ms)
[nuxt] error caught during app initialization ReferenceError: navigator is not defined
    at getBrowserLocale (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/virtual:nuxt:/Users/dst/Developer/Repositorys/nuxt3-starter-kit/.nuxt/i18n.internal.mjs:172:5)
    at Module.detectBrowserLanguage (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/virtual:nuxt:/Users/dst/Developer/Repositorys/nuxt3-starter-kit/.nuxt/i18n.internal.mjs:291:21)
    at Module.detectLocale (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/virtual:nuxt:/Users/dst/Developer/Repositorys/nuxt3-starter-kit/.nuxt/i18n.utils.mjs:137:119)
    at /Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/@nuxtjs+i18n@8.0.0-beta.11_vue@3.2.47/node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n.mjs:56:45
    at async applyPlugin (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/nuxt.js:121:23)
    at async Module.applyPlugins (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/nuxt.js:131:5)
    at async initApp (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/entry.js:47:7)
No error handlers registered to handle middleware errors. You can register an error handler with `router.onError()` ReferenceError: window is not defined
    at handleNavigation (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/plugins/router.js:74:9)
    at async /Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/plugins/router.js:183:5
    at async initApp (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/entry.js:53:7)
[nuxt] error caught during app initialization ReferenceError: document is not defined
    at normalizeContainer (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/@vue+runtime-dom@3.2.47/node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js:1616:21)
    at app.mount (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/@vue+runtime-dom@3.2.47/node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js:1537:27)
    at initApp (/Users/dst/Developer/Repositorys/nuxt3-starter-kit/node_modules/.pnpm/nuxt@3.3.2_@types+node@18.15.11_eslint@8.38.0_sass@1.61.0_typescript@5.0.4/node_modules/nuxt/dist/app/entry.js:55:14)
```

