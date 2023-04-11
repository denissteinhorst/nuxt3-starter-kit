export default eventHandler(async () => {
    const response = await fetch('https://randomuser.me/api/')
    return response.json()
})
