// https://nuxt.com/docs/guide/directory-structure/server

export default defineEventHandler(async () => {
  const response = await fetch('https://randomuser.me/api/')
  return await response.json()
})
