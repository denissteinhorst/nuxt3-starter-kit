export default eventHandler(async (event) => {
  const id: number = parseInt(event.context.params?.id ?? '0')
  const demos = (await useStorage().getItem(
    'data/demoJsonStoreData.json'
  )) as Array<{
    id: number
    title: string
    content: string
  }>
  const newDemos = demos.filter((demo) => demo.id !== id)
  await useStorage().setItem('data/demoJsonStoreData.json', newDemos)
  return 'demo deleted'
})
