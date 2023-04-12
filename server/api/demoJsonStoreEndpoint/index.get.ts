// https://nuxt.com/docs/guide/directory-structure/server

export default defineEventHandler(async (event) => {
  const demos = await useStorage().getItem('/data/demoJsonStoreData.json')
  return demos ?? [{content: "No demos found"}]
})
