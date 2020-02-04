class Player {
    constructor(x, y, color = "white") {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.bullets = []
        this.direction = 0;
        this.bulletDirection = 0;
        this.collision = "none";
        this.alive = true;
        this.exploding = false;
        this.explodingFrame = 120;
        this.invis = false;
        this.invisFrame = 120;
        this.lives = 3;
        this.score = 0;
        this.uptoten = 0;
        this.speed = 2.5;
        this.color = color;
        this.cooldownSpeed = 30;
        this.weaponCooldown = 0;
        this.powerUp = 0;
        this.cooldownPowerup = 0;
        this.health = 2;
    }

    update() {
        /* for (let i in game.world) {
            let wall = game.world[i]
            if (wall.type == "wall") { */

        if (this.x < wall.x + wall.width &&
            this.x + this.width > wall.x &&
            this.y + 10 > wall.y + wall.height &&
            this.y < wall.y + wall.height) {
            this.collision = "up";
        }
        else if (this.x < wall.x - this.width + 10 &&
            this.x + this.width > wall.x &&
            this.y + this.height > wall.y &&
            this.y < wall.y + wall.height) {
            this.collision = "right";
        }
        else if (this.x < wall.x + wall.width &&
            this.x + this.width > wall.x &&
            this.y + this.height > wall.y &&
            this.y < wall.y - this.height + 10) {
            this.collision = "down";
        }
        else if (this.x < wall.x + wall.width &&
            this.x + 10 > wall.x + wall.width &&
            this.y + this.height > wall.y &&
            this.y < wall.y + wall.height) {
            this.collision = "left";
        }

        else this.collision = "none"
        //}
        //}
        ctx.save();
        ctx.fillStyle = "white";
        ctx.font = "15px Arial";
        //ctx.fillText("Lives: " + this.lives, 5, 15);
        ctx.fillText("Omprov: " + this.lives, 5, 15);
        ctx.fillText("Score: " + this.score, 5, 30);
        ctx.fillText("Spread: " + this.powerUp, 5, 45);
        ctx.fillText("Fire Rate: " + this.cooldownPowerup, 5, 60);

        ctx.restore();

        if (this.lives < 0) {
            this.alive = false
        }

        this.weaponCooldown--;
    }
    move() {
        this.x += Math.cos(this.direction / (180 / Math.PI)) * this.speed;
        this.y += Math.sin(this.direction / (180 / Math.PI)) * this.speed;
    }
    draw() {
        if (player.alive && !player.exploding) {
            ctx.save();
            ctx.font = "30px Arial";
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            //ctx.fillRect(this.x, this.y, this.width, this.height);
            //ctx.strokeRect(this.x, this.y, this.width, this.height);

            /* ctx.fillText("S", this.x, this.y + 25);
            ctx.fillText("H", this.x + 25, this.y + 25);
            ctx.fillText("I", this.x + 5, this.y + 50);
            ctx.fillText("P", this.x + 25, this.y + 50); */

            ctx.fillText("E", this.x, this.y + 25);
            ctx.fillText("L", this.x + 28, this.y + 25);
            ctx.fillText("E", this.x, this.y + 50);
            ctx.fillText("V", this.x + 27, this.y + 50);

            ctx.save();
            ctx.fillStyle = "lightblue";
            ctx.font = "10px Arial";
            if (this.direction == 270) {
                /* ctx.fillText("G", this.x + 21, this.y - 16);
                ctx.fillText("U", this.x + 21, this.y - 8);
                ctx.fillText("N", this.x + 21, this.y); */
                ctx.fillText("I", this.x + 23, this.y - 20);
                ctx.fillText("D", this.x + 21, this.y - 12);
                ctx.fillText("É", this.x + 21, this.y);
            }
            if (this.direction == 315) {
                /* ctx.fillText("G", this.x + 50, this.y);
                ctx.fillText("U", this.x + 56, this.y - 8);
                ctx.fillText("N", this.x + 62, this.y - 16); */
                ctx.fillText("I", this.x + 52, this.y);
                ctx.fillText("D", this.x + 54, this.y - 8);
                ctx.fillText("É", this.x + 60, this.y - 16);
            }
            if (this.direction == 0) {
                /* ctx.fillText("GUN", this.x + 50, this.y + 27); */
                ctx.fillText("IDÉ", this.x + 50, this.y + 27);
            }
            if (this.direction == 45) {
                //downright
                /* ctx.fillText("G", this.x + 50, this.y + 58);
                ctx.fillText("U", this.x + 56, this.y + 66);
                ctx.fillText("N", this.x + 62, this.y + 74); */
                ctx.fillText("I", this.x + 52, this.y + 58);
                ctx.fillText("D", this.x + 54, this.y + 66);
                ctx.fillText("É", this.x + 60, this.y + 74);
            }
            if (this.direction == 90) {
                /* ctx.fillText("G", this.x + 21, this.y + 58);
                ctx.fillText("U", this.x + 21, this.y + 66);
                ctx.fillText("N", this.x + 21, this.y + 74); */
                ctx.fillText("I", this.x + 23, this.y + 58);
                ctx.fillText("D", this.x + 21, this.y + 66);
                ctx.fillText("É", this.x + 21, this.y + 77);
            }
            if (this.direction == 135) {
                //downleft
                /* ctx.fillText("G", this.x - 20, this.y + 74);
                ctx.fillText("U", this.x - 14, this.y + 66);
                ctx.fillText("N", this.x - 8, this.y + 58); */
                ctx.fillText("I", this.x - 18, this.y + 74);
                ctx.fillText("D", this.x - 14, this.y + 66);
                ctx.fillText("É", this.x - 8, this.y + 58);
            }
            if (this.direction == 180) {
                //left
                /* ctx.fillText("GUN", this.x - 24, this.y + 27); */
                ctx.fillText("IDÉ", this.x - 18, this.y + 27);
            }
            if (this.direction == 225) {
                //upleft
                /* ctx.fillText("G", this.x - 20, this.y - 16);
                ctx.fillText("U", this.x - 14, this.y - 8);
                ctx.fillText("N", this.x - 8, this.y); */
                ctx.fillText("I", this.x - 18, this.y - 16);
                ctx.fillText("D", this.x - 14, this.y - 8);
                ctx.fillText("É", this.x - 8, this.y);
            }
            ctx.restore();

            if (this.invis) {
                let counter = "IIIIII"
                let counterState = Math.floor(this.invisFrame / (105 / counter.length))
                ctx.font = "10px Arial";

                ctx.fillText(counter.substring(0, counterState), this.x + 15, this.y);
            }
        }
        if (player.exploding && this.alive) {
            let counter = "IIIIII"
            let counterState = Math.floor(this.explodingFrame / (105 / counter.length))
            player.color = "orange"

            ctx.save();
            //ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.font = "16px Arial";
            ctx.fillStyle = this.color;
            //ctx.fillText("EXPLO", this.x, this.y + 12);
            ctx.fillText("AV", this.x + 15, this.y + 15);
            ctx.restore();

            ctx.save();
            //ctx.font = "19px Arial";
            ctx.font = "12px Arial";
            ctx.fillStyle = this.color;
            //ctx.fillText("SION", this.x + 1, this.y + 27);
            ctx.fillText("STÄNGD", this.x + 1, this.y + 27);
            ctx.restore();

            ctx.save();
            ctx.font = "30px Arial";
            ctx.fillStyle = this.color;
            ctx.fillText(counter.substring(0, counterState), this.x, this.y + 50);

        }

        if (!this.alive) {

            ctx.font = "50px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Game Over", 120, 250);
            ctx.save();
            ctx.font = "20px Arial";
            ctx.fillText("Press R to restart", 170, 270);
            ctx.save();
            //ctx.strokeRect(this.x, this.y, this.width, this.height);
            //ctx.font = "30px Arial";
            ctx.font = "60px Arial";
            ctx.fillStyle = "red";
            /* ctx.fillText("D", this.x, this.y + 25);
            ctx.fillText("E", this.x + 25, this.y + 25);
            ctx.fillText("A", this.x + 5, this.y + 50);
            ctx.fillText("D", this.x + 25, this.y + 50); */
            ctx.fillText("F", this.x + 7, this.y + 47);
        }

    }

    hit() {
        //if (this.lives < 0) this.alive = false

        if (!this.exploding && this.alive) {
            /* if (this.health > 0) {
                //this.invis = true
                //this.invincible()
                this.health--

            } */
            //if (this.health == 0) {
            this.lives -= 1;
            this.exploding = true;
            this.explode()
            //this.health = 2;
            //}
        }
    }

    explode() {
        if (this.exploding && this.alive) {
            this.explodingFrame--
        }
    }

    invincible() {
        if (this.invis) {
            this.invisFrame--
            this.color = "gray"
        }
    }

    shoot() {
        //enemyBullet.getDirection();
        if (!player.exploding && this.weaponCooldown <= 0) {
            let xPos = this.x;
            let yPos = this.y;
            let dir = this.direction;
            let height = bullet.height;
            let width = bullet.width;
            let speed = 5
            this.weaponCooldown = this.cooldownSpeed;
            switch (this.direction) {
                case 270:
                    //up
                    xPos = this.x + 17;
                    yPos = this.y - 50;
                    height = 45
                    width = 16
                    break
                case 315:
                    //upright
                    xPos = this.x + 55;
                    yPos = this.y - 50;
                    height = 45
                    width = 30
                    break
                case 0:
                    //left
                    xPos = this.x + 55;
                    yPos = this.y + 17;
                    height = 16
                    width = 45
                    break
                case 45:
                    //downright
                    xPos = this.x + 55;
                    yPos = this.y + 55;
                    height = 45
                    width = 30
                    break
                case 90:
                    //down
                    xPos = this.x + 17;
                    yPos = this.y + 55;
                    height = 45
                    width = 16
                    break
                case 135:
                    //downleft
                    xPos = this.x - 34;
                    yPos = this.y + 55;
                    height = 45
                    width = 30
                    break
                case 180:
                    //left
                    xPos = this.x - 50;
                    yPos = this.y + 17;
                    height = 16
                    width = 45
                    break
                case 225:
                    //upleft
                    xPos = this.x - 34;
                    yPos = this.y - 50;
                    height = 45
                    width = 30
                    break

            }
            game.world.push(new Bullet(xPos, yPos, speed, dir, height, width));
        }
    }
}
player = new Player(200, 250);