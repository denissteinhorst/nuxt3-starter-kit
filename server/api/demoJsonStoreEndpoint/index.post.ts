export default eventHandler(async (event) => {
  const demo = await readBody(event)
  const demos = (await useStorage().getItem(
    'data/demoJsonStoreData.json'
  )) as Array<{
    id: number
    title: string
    description: string
  }>

  // get last id from demos if demos is not empty

  if (demos.length > 0) {
    const lastId =
      demos?.reduce((prev, current) => (prev.id > current.id ? prev : current))
        ?.id ?? 0
    demo.id = lastId + 1
  } else {
    demo.id = 1
  }

  await useStorage().setItem('data/demoJsonStoreData.json', [
    demo,
    ...(demos ?? []),
  ])
  return 'demo added'
})
