export default eventHandler(async () => {
  const demos = await useStorage().getItem('/data/demoJsonStoreData.json')
  return demos ?? [{content: "No demos found"}]
})
