const navPanel = document.getElementById('nav')

const canvas = document.getElementById('canvas')

/**
 * @type CanvasRenderingContext2D
 */
const ctx = canvas.getContext("2d")

// Логический размер canvas
const logicalWidth = 100; // Количество логических пикселей по ширине
const logicalHeight = 100; // Количество логических пикселей по высоте

// Физический размер на экране (масштабированный)
const scale = 10; // Увеличиваем каждый логический пиксель в 10 раз

// Устанавливаем размеры canvas
canvas.width = logicalWidth;
canvas.height = logicalHeight;

// Увеличиваем физический размер на экране
canvas.style.width = `${logicalWidth * scale}px`;
canvas.style.height = `${logicalHeight * scale}px`;

// Отключаем сглаживание
ctx.imageSmoothingEnabled = false;

// Добавляем событие клика
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / scale);
    const y = Math.floor((event.clientY - rect.top) / scale);

    // Рисуем черный пиксель
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, 1, 1);
});

canvas.addEventListener('mousemove', function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = Math.floor(e.x - rect.left)
    let y = Math.floor(e.y - rect.top)
    navPanel.innerHTML = `${Math.floor(x/10)}, ${Math.floor(y/10)}`
})

canvas.addEventListener('click', function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = Math.floor(e.x - rect.left)
    let y = Math.floor(e.y - rect.top)
    navPanel.innerHTML = `${x/10}, ${y/10}`
})

function draw(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1)
}