export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-test',
    (from, to) => {
      console.log(
        'this global middleware was added on Client side and will be run on every route change'
      )
      console.table({ from, to })
    },
    { global: true }
  )
})
