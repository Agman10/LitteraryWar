class Game {
    constructor() {
        this.world = [];
    }

    start() {
        document.addEventListener("Space", () => {
            player.shoot();
            /* for (let i in game.world) {
                let bObj = game.world[i]
                if (bObj.type == "bullet") {

                    console.log(game.world[i])
                }

            } */

            //game.world[0].directionUpdate()

        });
        document.addEventListener("KeyA", () => {

            for (let i in game.world) {
                let eObj = game.world[i]
                if (eObj.type == "shooter") {
                    game.world[i].shoot()
                }
            }
            //game.world[0].getDirection()

        });
        this.spawnEnemy();
        setInterval(() => this.loop(), 1000 / 60);

        setInterval(() => this.logic(), 1000 / 60);
        setInterval(() => this.enemyShoot(), 2500 / 1);
        setInterval(() => this.deathAnimation(), 1000 / 4);
        setInterval(() => this.invincibleFrames(), 1000 / 4);


    }

    logic() {
        if (!player.exploding) {
            if (keysDown[38] && player.y > 0 && player.collision != "up") {
                //up
                player.direction = 270
                player.move()
            }
            if (keysDown[39] && player.x < 500 - player.width && player.collision != "right") {
                //right
                player.direction = 0
                player.move()
            }
            if (keysDown[40] && player.y < 500 - player.height && player.collision != "down") {
                //down
                player.direction = 90
                player.move()
            }
            if (keysDown[37] && player.x > 0 && player.collision != "left") {
                //left
                player.direction = 180
                player.move()
            }

            if (keysDown[38]) {
                //up
                player.direction = 270
            }
            if (keysDown[39]) {
                //right
                player.direction = 0
            }
            if (keysDown[40]) {
                //down
                player.direction = 90
            }
            if (keysDown[37]) {
                //left
                player.direction = 180
            }

            if (keysDown[38] && keysDown[39]) {
                // up + right
                player.direction = 315
            }
            else if (keysDown[39] && keysDown[40]) {
                //right + down
                player.direction = 45
            }
            if (keysDown[40] && keysDown[37]) {
                //down + left
                player.direction = 135
            }
            else if (keysDown[37] && keysDown[38]) {
                //left + up
                player.direction = 225
            }

        }

        stars.update();
        player.update();
        for (let obj of this.world) obj.update()
        for (let i in game.world) {
            let bObj = game.world[i]
            for (let j in game.world) {
                let eObj = game.world[j]

                if (eObj.type == "shooter" || eObj.type == "enemy") {
                    if (player.x < eObj.x + eObj.width &&
                        player.x + player.width > eObj.x &&
                        player.y < eObj.y + eObj.height &&
                        player.y + player.height > eObj.y && !player.invis) {
                        this.enemyDeath()
                        game.spawnEnemy();
                        if (!player.exploding) player.hit();
                    }
                    if (bObj.type == "bullet") {
                        if (eObj.x < bObj.x + bObj.width &&
                            eObj.x + eObj.width > bObj.x &&
                            eObj.y < bObj.y + bObj.height &&
                            eObj.y + eObj.height > bObj.y) {
                            game.world.splice(i, 1)
                            this.enemyDeath()
                            player.score += 1;
                            //game.spawnEnemy()
                            setTimeout(() => { game.spawnEnemy() }, 500);
                        }
                    }

                }

            }
            if (bObj.type == "bullet" || bObj.type == "enemyBullet") {
                if (bObj.x < wall.x + wall.width &&
                    bObj.x + bObj.width > wall.x &&
                    bObj.y < wall.y + wall.height &&
                    bObj.y + bObj.height > wall.y) {
                    game.world.splice(i, 1)
                }

                if (player.x < bObj.x + bObj.width &&
                    player.x + player.width > bObj.x &&
                    player.y < bObj.y + bObj.height &&
                    player.y + player.height > bObj.y && !player.invis) {
                    //console.log("collision")
                    game.world.splice(i, 1)
                    if (!player.exploding) player.hit();

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
        if (player.score > 10) {
            this.spawnEnemy();
        }
    }

    loop() {
        this.render();
    }

    enemyDeath() {
        for (let i in game.world) {
            let eObj = game.world[i]
            if (eObj.type == "enemy" || eObj.type == "shooter") {
                game.world.splice(i, 1)

            }
        }
    }
    deathAnimation() {
        if (player.exploding == true) {
            player.explode();
        }
        if (player.explodingFrame < 0) {
            player.exploding = false;
            player.explodingFrame = 7;
            player.invis = true
            player.x = 200;
            player.y = 300;


        }
    }
    invincibleFrames() {
        if (player.invis == true) {
            player.invincible();
        }
        if (player.invisFrame < 0) {
            player.invis = false
            player.invisFrame = 7;
            player.color = "white"

        }
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
    enemyShoot() {
        for (let i in game.world) {
            let eObj = game.world[i]
            if (eObj.type == "shooter") {
                game.world[i].shoot();

            }
        }
    }
    spawnEnemy(x, y) {

        let randomOffscreenPos = Math.floor(Math.random() * 4)
        let randomEnemyType = Math.floor(Math.random() * 2)
        let enemy = Enemy;

        switch (randomOffscreenPos) {
            case 0:
                x = -50
                break
            case 1:
                x = 500
                break
            case 2:
                y = -50
                break
            case 3:
                y = 500
                break

        }
        switch (randomEnemyType) {
            case 0:
                enemy = Enemy;
                break
            case 1:
                enemy = ShootingEnemy;
                break
        }
        this.world.push(new enemy(x, y));
        //console.log(randomEnemyType)
        //console.log(randomOffscreenPos)
    }
}