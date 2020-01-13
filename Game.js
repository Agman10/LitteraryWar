class Game {
    constructor() {
        this.world = [];
    }

    start() {
        document.addEventListener("Space", () => {
            player.shoot();
            //game.world[0].directionUpdate()
            game.world[0].shoot()

        });
        this.spawnEnemy();
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
        //enemy.update();
        player.update();
        //game.world[0].directionUpdate()
        for (let obj of this.world) obj.update()
        for (let i in game.world) {
            let bObj = game.world[i]
            if (bObj.type == "bullet") {
                if (player.x < bObj.x + bObj.width &&
                    player.x + player.width > bObj.x &&
                    player.y < bObj.y + bObj.height &&
                    player.y + player.height > bObj.y) {
                    console.log("collision")
                }
                if (bObj.x < wall.x + wall.width &&
                    bObj.x + bObj.width > wall.x &&
                    bObj.y < wall.y + wall.height &&
                    bObj.y + bObj.height > wall.y) {
                    game.world.splice(i, 1)
                }
                for (let j in game.world) {
                    let eObj = game.world[j]
                    if (eObj.type == "shooter")
                        if (eObj.x < bObj.x + bObj.width &&
                            eObj.x + eObj.width > bObj.x &&
                            eObj.y < bObj.y + bObj.height &&
                            eObj.y + eObj.height > bObj.y) {
                            game.world.splice(i, 1)
                            game.world.splice(j, 1)
                            game.spawnEnemy();
                        }
                }
            }

            if (bObj.x < 0 - bObj.width ||
                bObj.x > canvas.width + bObj.width ||
                bObj.y < 0 - bObj.height ||
                bObj.y > canvas.height + bObj.height) {
                game.world.splice(i, 1)
                //console.log(this.bullets.length)
            }

        }


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

        //enemy.draw();
        /* enemy.enemies.forEach(enemy => {
            enemy.draw();
            enemy.update();
        }); */
        for (let obj of this.world) obj.draw()
        wall.draw();
        //console.log(Math.floor(Math.random() * 4))
        //enemy.push();
        //console.log(player.collision)
        //console.log((Math.floor(Math.random() * 50)) * 10)
        //console.log(Math.floor(Math.random() * 4))
    }
    spawnEnemy(x, y) {
        let randomOffscreenPos = Math.floor(Math.random() * 4)
        if (randomOffscreenPos == 0) {
            this.world.push(new ShootingEnemy(-50, y));
        }
        if (randomOffscreenPos == 1) {
            this.world.push(new ShootingEnemy(500, y));
        }
        if (randomOffscreenPos == 2) {
            this.world.push(new ShootingEnemy(x, -50));
        }
        if (randomOffscreenPos == 3) {
            this.world.push(new ShootingEnemy(x, 500));
        }
        //console.log(randomOffscreenPos)
    }
}