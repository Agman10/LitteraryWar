class Game {
    constructor() { }

    start() {
        document.addEventListener("Space", () => {
            player.shoot();
        });
        setInterval(() => this.loop(), 1000 / 60);
        setInterval(() => this.logic(), 1000 / 60);
    }

    logic() {
        let speed = 3;



        if (keysDown[38]) {
            player.direction = "up"
        }
        if (keysDown[39]) {
            player.direction = "right"
        }
        if (keysDown[40]) {
            player.direction = "down"
        }
        if (keysDown[37]) {
            player.direction = "left"
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

        if (keysDown[38] && player.y > 0 && player.collision != "up") {
            //up
            player.move(0, -speed)
        }
        if (keysDown[39] && player.x < 500 - player.width && player.collision != "right") {
            //right
            player.move(speed, 0)
        }
        if (keysDown[40] && player.y < 500 - player.height && player.collision != "down") {
            //down
            player.move(0, speed)
        }
        if (keysDown[37] && player.x > 0 && player.collision != "left") {
            //left
            player.move(-speed, 0)
        }

        /* if (player.x < wall.width - player.width &&
            player.y < wall.height - player.height) {
            console.log("test")
        } */

        stars.update();
        enemy.update();
        player.update();
    }

    loop() {
        this.render();
    }

    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.stars.forEach(stars => {
            stars.draw();
            stars.update();
        });
        player.draw()
        player.bullets.forEach(bullet => {
            bullet.draw();
            bullet.update();
        });
        enemy.draw();
        wall.draw();
        //console.log(player.collision)
        //console.log((Math.floor(Math.random() * 50)) * 10)
        //console.log(Math.floor(Math.random() * 4))
    }
}