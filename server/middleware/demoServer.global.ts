export default defineEventHandler((event) => {
  console.log(
    'this global middleware was added on Server side and will be run on every api request'
  )
  console.table(event)
})
