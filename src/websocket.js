const ws = new WebSocket(`ws://${process.env.API_HOST}/updates`)

export default ws