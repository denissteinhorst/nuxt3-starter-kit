export default eventHandler(async (event) => {
  const id: number = parseInt(event.context.params?.id ?? '0')
  const editedDemo = await readBody(event)
  const demos = (await useStorage().getItem(
    'data/demoJsonStoreData.json'
  )) as Array<{
    id: number
    title: string
    description: string
  }>
  const newDemos = demos.map((demo) => {
    if (demo.id === id) {
      return editedDemo
    }
    return demo
  })
  await useStorage().setItem('data/demoJsonStoreData.json', newDemos)
  return 'demo edited'
})
