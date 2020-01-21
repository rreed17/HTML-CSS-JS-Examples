const canvas = document.getElementById("canvas1");
const ctx = canvas.getBoundingClientRect("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

//mouse
let mouse = {
    x: null,
    y: null,
    radius: 100
}
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x + canvas.clientLeft / 2;
        mouse.y = event.y + canvas.clientTop / 2;
    });

function drawImage() {
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    class Particle {
        contructor(x, y, color, size) {
            this.x = x + canvas.width / 2 - png.width * 2,
                this.y = y + canvas.height / 2 - png.height * 2,
                this.color = color,
                this.size = 2,
                this.baseX = x + canvas.width / 2 - png.width * 2,
                this.baseY = y + canvas.height / 2 - png.heigth * 2,
                this.density = (Math.random() * 10) + 2;
        }
    }
}