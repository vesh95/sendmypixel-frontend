const ws = new WebSocket(`wss://${process.env.API_HOST}/updates`)

export default ws