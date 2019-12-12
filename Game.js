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
        if (keysDown[38] && player.y != 0) {
            //up
            player.direction = "up"
            player.move(0, -1)
        }
        if (keysDown[39] && player.x != 500 - player.width) {
            //right
            player.direction = "right"
            player.move(1, 0)
        }
        if (keysDown[40] && player.y != 500 - player.height) {
            //down
            player.direction = "down"
            player.move(0, 1)
        }
        if (keysDown[37] && player.x != 0) {
            //left
            player.direction = "left"
            player.move(-1, 0)
        }

        if (keysDown[38] == true && keysDown[39] == true) {
            // up + right
            player.direction = "upRight"
        }
        else if (keysDown[39] == true && keysDown[40] == true) {
            //right + down
            player.direction = "downRight"
        }
        if (keysDown[40] == true && keysDown[37] == true) {
            //down + left
            player.direction = "downLeft"
        }
        else if (keysDown[37] == true && keysDown[38] == true) {
            //left + up
            player.direction = "upLeft"
        }

        stars.update();
        player.update();
    }

    loop() {
        this.render();
    }

    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //stars.draw()
        stars.stars.forEach(stars => {
            stars.draw();
            stars.update();
        });
        //console.log(player.direction)
        /* console.log("up: " + keysDown[38])
        console.log("right: " + keysDown[39])
        console.log("down: " + keysDown[40])
        console.log("left: " + keysDown[37])
        console.log(player.direction) */
        //console.log(keysDown)

        player.draw()
        //bullet.draw();
        player.bullets.forEach(bullet => {
            bullet.draw();
            bullet.update();
            //bullet.move();
            //console.log(bullet.direction)
        });
    }
}