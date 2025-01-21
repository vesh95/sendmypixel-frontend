class UpdateService {
    constructor() {
        this.ws = new WebSocket("ws://localhost:3001/updates")
        this.subscribers = [];
    }

    subscribe(subscriber, callback) {
        this.subscribers.push({callback, subscriber})
    }

    unsubscribe(subscriber) {
        for (let i = 0; i < subscriber.length; i++) {
            if(this.subscribers[i].subscriber === subscriber) {
                this.subscribers.splice(i, 1)
            }
        }
    }

    serve() {
        this.ws.addEventListener("message", (e) => {
            console.log(this.subscribers)
            const pixelData = JSON.parse(e.data)
            for (const subscriber of this.subscribers) {
                subscriber.callback(pixelData)
            }
        })
    }
}

const updater = new UpdateService();

export default updater;