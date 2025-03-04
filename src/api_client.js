export default class ApiClient {
    constructor(initData) {
        this.initData = initData;
    }

    async setPixel(x, y, color) {
        return fetch(`http://${process.env.API_HOST}/api/v1/set`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `tma ${this.initData}`
            },
            method: "POST",
            body: JSON.stringify({x, y, color})
        })
    }

    async getState() {
        return fetch(`http://${process.env.API_HOST}/api/v1/state`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `tma ${this.initData}`
            },
            method: "GET"
        })
    }
}