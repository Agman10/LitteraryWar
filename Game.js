class Game {
    constructor() {
        this.world = [];
        this.paused = false;
    }

    start() {

        document.addEventListener("KeyX", () => {
            powerUp.shoot();
        });
        document.addEventListener("KeyR", () => {
            if (!player.alive || this.paused) this.reset()
        });
        document.addEventListener("Enter", () => {
            if (player.alive) this.pause();
            else if (!player.alive) this.reset();
        });
        document.addEventListener("Space", () => {
            if (this.paused) this.pause();
        });
        this.spawnEnemy();
        setInterval(() => this.loop(), 1000 / 60);

    }
    loop() {
        if (!this.paused) {
            this.render();
            this.logic();
            this.deathAnimation()
            this.invincibleFrames()
            this.enemyShoot()
        }
    }
    reset() {
        location.reload();
    }
    pause() {
        if (!this.paused) {
            this.paused = true
            ctx.font = "50px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Paused", 160, 250);
            ctx.save();
            ctx.font = "15px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Controlls:", 5, 400);
            ctx.fillText("Move: Arrow keys", 5, 420);
            ctx.fillText("Shoot: Space", 5, 440);
            ctx.fillText("Spread power up: X", 5, 460);
            ctx.fillText("Reset: R (while paused or on game over)", 5, 480);
        }
        else if (this.paused) this.paused = false
    }

    logic() {
        if (!player.exploding && player.alive) {
            if (keysDown[32]) {
                player.shoot();
            }
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
        powerUpDrop.update()
        wall.update()
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
                        game.world.splice(j, 1);
                        game.spawnEnemy();
                        if (!player.exploding) player.hit();
                    }
                    if (bObj.type == "bullet") {
                        if (eObj.x < bObj.x + bObj.width &&
                            eObj.x + eObj.width > bObj.x &&
                            eObj.y < bObj.y + bObj.height &&
                            eObj.y + eObj.height > bObj.y && !eObj.invis) {
                            game.world.splice(i, 1);
                            game.world.splice(j, 1);
                            eObj.powerUpDrop()
                            player.score += 1;
                            player.uptoten += 1;
                            this.addEnemy()
                            game.spawnEnemy()
                        }
                    }
                    for (let l in game.world) {
                        let pObj = game.world[l]
                        if (pObj.type == "spread" || pObj.type == "cooldown") {
                            if (player.x < pObj.x + pObj.width &&
                                player.x + player.width > pObj.x &&
                                player.y < pObj.y + pObj.height &&
                                player.y + player.height > pObj.y) {
                                game.world.splice(l, 1);
                                pObj.pickUp()
                            }
                        }
                    }
                }
            }
            /* for (let l in game.world) {
                let wall = game.world[l]
                if (wall.type == "wall") { */
            if (bObj.type == "bullet" || bObj.type == "enemyBullet") {
                if (bObj.x < wall.x + wall.width &&
                    bObj.x + bObj.width > wall.x &&
                    bObj.y < wall.y + wall.height &&
                    bObj.y + bObj.height > wall.y) {
                    game.world.splice(i, 1);
                }

                //}
                //}
                if (player.x < bObj.x + bObj.width &&
                    player.x + player.width > bObj.x &&
                    player.y < bObj.y + bObj.height &&
                    player.y + player.height > bObj.y && !player.invis) {
                    game.world.splice(i, 1);
                    if (!player.exploding) player.hit();
                }

                if (bObj.x < 0 - bObj.width ||
                    bObj.x > canvas.width + bObj.width ||
                    bObj.y < 0 - bObj.height ||
                    bObj.y > canvas.height + bObj.height) {
                    game.world.splice(i, 1);
                }
            }
        }
    }



    addEnemy() {
        if (player.uptoten == 10) {
            player.uptoten = 0
            game.spawnEnemy()
        }
    }

    deathAnimation() {
        if (player.exploding == true) {
            player.explode();
        }
        if (player.explodingFrame < 0) {
            player.exploding = false;
            player.explodingFrame = 105;
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
            player.invisFrame = 105;
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
        wall.draw()

        for (let obj of this.world) obj.draw()


    }
    enemyShoot() {
        if (player.alive) {
            for (let i in game.world) {
                let eObj = game.world[i]
                if (eObj.shootingFrame == 250) {
                    eObj.shootingFrame = 0;
                    if (eObj.type == "shooter") {
                        eObj.shoot();

                    }
                }
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
    }
}