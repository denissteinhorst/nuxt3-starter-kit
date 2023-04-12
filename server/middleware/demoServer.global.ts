// https://nuxt.com/docs/guide/directory-structure/server#server-middleware

export default defineEventHandler((event) => {
  console.log(
    'this global middleware was added on Server side and will be run on every api request'
  )
  console.table(event)
})
