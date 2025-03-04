import ws from "./websocket";
import ApiClient from "./api_client";
import "./index.scss"
import {retrieveLaunchParams} from '@telegram-apps/sdk';

const { initDataRaw } = retrieveLaunchParams();

const client = new ApiClient(initDataRaw)

client.getState().then(req => {
    req.json().then(data => {
        for (const row in data) {
            for (const col in row) {
                drawer.draw(row, col, data[row][col].color)
            }
        }
    })
})



const navPanel = document.getElementById('nav')
const canvas = document.getElementById('canvas')

const logicalWidth = 100;
const logicalHeight = 100;
const scale = 10;

canvas.width = logicalWidth;
canvas.height = logicalHeight;
canvas.style.width = `${logicalWidth * scale}px`;
canvas.style.height = `${logicalHeight * scale}px`;

class Drawer {
    constructor(
        canvas,
        navPanel,
    ) {
        this.canvas = canvas
        this.navPanel = navPanel
        /**
         * @type CanvasRenderingContext2D
         */
        this.ctx = canvas.getContext("2d")
        this.ctx.imageSmoothingEnabled = false;

        this.rect = canvas.getBoundingClientRect();
    }

    draw(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, 1, 1)
    }

    clickEvent(e) {
        const x = Math.floor((e.clientX - this.rect.left) / scale);
        const y = Math.floor((e.clientY - this.rect.top) / scale);
        navPanel.innerHTML = `${Math.floor(x/10)}, ${Math.floor(y/10)}`
        client.setPixel(x, y, 'black').then(r => console.log(r.json().then()))
    }

    moveEvent(e) {
        let x = Math.floor(e.x - this.rect.left)
        let y = Math.floor(e.y - this.rect.top)
        navPanel.innerHTML = `${Math.floor(x/10)}, ${Math.floor(y/10)}`
    }
}

const drawer = new Drawer(canvas, navPanel)

canvas.addEventListener('click', drawer.clickEvent.bind(drawer));
canvas.addEventListener('mousemove', drawer.moveEvent.bind(drawer))

ws.addEventListener('message', function (e) {
    const pixel = JSON.parse(e.data)
    drawer.draw(pixel.x, pixel.y, pixel.color)
})