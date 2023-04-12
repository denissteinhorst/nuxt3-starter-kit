// https://nuxt.com/docs/guide/directory-structure/composables

// Thanks to VueMacros, we can now import our model from dedicated file
// https://vue-macros.sxzz.moe/features/better-define.html
import {
  type ICoordinates,
  type IDob,
  type IID,
  type IInfo,
  type ILocation,
  type ILogin,
  type IName,
  type IPicture,
  type IRandomUser,
  type IResult,
  type IStreet,
  type ITimezone
} from "./useDemoPublicApiComposable.model"; // not used in this example ;)


export default async function useDemoPublicApiComposable() {
  const { data: demoPublicData, refresh } = await useFetch('/api/demoPublicApiEndpoint')

  return {
    demoPublicData,
    refresh
  }
}
