// https://nuxt.com/docs/guide/directory-structure/server

export default defineEventHandler(async (event) => {
    const response = await fetch('https://randomuser.me/api/')
    return response.json()
})
