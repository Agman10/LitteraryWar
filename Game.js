class Game {
    constructor() { }

    start() {
        document.addEventListener("Space", () => {
            player.shoot();
        });
        setInterval(() => this.loop(), 1000 / 60);
        setInterval(() => this.logic(), 1000 / 120);
    }

    logic() {

        if (keysDown[37] && player.x != 0) {
            player.move(-1, 0)
        }
        if (keysDown[38] && player.y != 0) {
            player.move(0, -1)
        }
        if (keysDown[39] && player.x != 500 - player.width) {
            player.move(1, 0)
        }
        if (keysDown[40] && player.y != 500 - player.height) {
            player.move(0, 1)
        }

        if (keysDown[65] && bullet.x != 0) {
            bullet.move(-1, 0)
        }
        if (keysDown[87] && bullet.y != 0) {
            bullet.move(0, -1)
        }
        if (keysDown[68] && bullet.x != 500 - bullet.width) {
            bullet.move(1, 0)
        }
        if (keysDown[83] && bullet.y != 500 - bullet.height) {
            bullet.move(0, 1)
        }

        /* if (keysDown[32]) {
            player.shoot();
        } */


        player.update();
    }

    loop() {
        this.render();
    }

    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("*", 100, 100)
        ctx.fillText("*", 63, 430)
        ctx.fillText("*", 300, 350)
        ctx.fillText("*", 250, 250)
        ctx.fillText("*", 400, 150)
        ctx.fillText("*", 300, 350)
        ctx.fillText("*", 100, 320)
        ctx.fillText("*", 180, 30)
        ctx.fillText("*", 30, 230)
        ctx.fillText("*", 380, 440)
        ctx.restore();

        player.draw()
        bullet.draw();
        player.bullets.forEach(bullet => {
            bullet.draw();
            bullet.update();
        });
    }
}