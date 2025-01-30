export async function setPixel(x,y, color) {
    return fetch(`https://${process.env.API_HOST}/set`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({x, y, color})
    })
}

export async function getState() {
    return fetch(`https://${host}/state`)
}