class Enemy {
    constructor(x, y, xSpeed, ySpeed, wallCollision) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.enemies = [];
        this.wallCollision = wallCollision;
        this.randomOffscreenPos;
        this.color = "white"
    }

    update() {
        for (var i = 0; i < this.enemies.length; i++) {
            if (player.x > this.enemies[i].x && this.enemies[i].wallCollision != "right") {
                this.enemies[i].xSpeed = 1;
            } else if (player.x < this.enemies[i].x && this.enemies[i].wallCollision != "left") {
                this.enemies[i].xSpeed = -1;
            } else this.enemies[i].xSpeed = 0;

            if (player.y > this.enemies[i].y && this.enemies[i].wallCollision != "down") {
                this.enemies[i].ySpeed = 1;
            } else if (player.y < this.enemies[i].y && this.enemies[i].wallCollision != "up") {
                this.enemies[i].ySpeed = -1;
            } else this.enemies[i].ySpeed = 0;

            if (this.enemies[i].x < wall.x + wall.width &&
                this.enemies[i].x + this.enemies[i].width > wall.x &&
                this.enemies[i].y + 10 > wall.y + wall.height &&
                this.enemies[i].y < wall.y + wall.height) {
                this.enemies[i].wallCollision = "up";
                if (player.x > wall.x - wall.width / 2) {
                    this.enemies[i].xSpeed = 1;
                } if (player.x < wall.x - wall.width / 2) {
                    this.enemies[i].xSpeed = -1;
                }
            }
            else if (this.enemies[i].x < wall.x - this.enemies[i].width + 10 &&
                this.enemies[i].x + this.enemies[i].width > wall.x &&
                this.enemies[i].y + this.enemies[i].height > wall.y &&
                this.enemies[i].y < wall.y + wall.height) {
                this.enemies[i].wallCollision = "right";
                if (player.y > wall.y + wall.width / 2) {
                    this.enemies[i].ySpeed = 1;
                } if (player.y < wall.y + wall.width / 2) {
                    this.enemies[i].ySpeed = -1;
                }
            }
            else if (this.enemies[i].x < wall.x + wall.width &&
                this.enemies[i].x + this.enemies[i].width > wall.x &&
                this.enemies[i].y + this.enemies[i].height > wall.y &&
                this.enemies[i].y < wall.y - this.enemies[i].height + 10) {
                this.enemies[i].wallCollision = "down";
                if (player.x > wall.x - wall.width / 2) {
                    this.enemies[i].xSpeed = 1;
                } if (player.x < wall.x - wall.width / 2) {
                    this.enemies[i].xSpeed = -1;
                }
            }
            else if (this.enemies[i].x < wall.x + wall.width &&
                this.enemies[i].x + 10 > wall.x + wall.width &&
                this.enemies[i].y + this.enemies[i].height > wall.y &&
                this.enemies[i].y < wall.y + wall.height) {
                this.enemies[i].wallCollision = "left";
                if (player.y > wall.y + wall.height / 2) {
                    this.enemies[i].ySpeed = 1;
                } if (player.y < wall.y + wall.height / 2) {
                    this.enemies[i].ySpeed = -1;
                }
            }

            else this.enemies[i].wallCollision = "none"

            //console.log(this.enemies[i].x, this.enemies[i].y)
            //console.log(this.enemies[i].wallCollision)
        }

        this.move(this.xSpeed, this.ySpeed)

    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    push() {
        this.randomOffscreenPos = Math.floor(Math.random() * 4)
        let randomPosX = (Math.floor(Math.random() * 50)) * 10;
        let randomPosY = (Math.floor(Math.random() * 50)) * 10;
        if (this.randomOffscreenPos == 0) {
            this.enemies.push(new Enemy(-50, randomPosY, 0, 0, "none"));
        }
        if (this.randomOffscreenPos == 1) {
            this.enemies.push(new Enemy(500, randomPosY, 0, 0, "none"));
        }
        if (this.randomOffscreenPos == 2) {
            this.enemies.push(new Enemy(randomPosX, -50, 0, 0, "none"));
        }
        if (this.randomOffscreenPos == 3) {
            this.enemies.push(new Enemy(randomPosX, 500, 0, 0, "none"));
        }
    }

    draw() {
        ctx.save();
        ctx.font = "20px Arial";
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillText("ENE", this.x + 4, this.y + 20);
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillText("MY", this.x + 2, this.y + 50);
        ctx.restore();
        ctx.restore();
    }
}


class ShootingEnemy extends Enemy {
    constructor() {
        super();
        this.color = "gray"
        this.direction = "up";
        this.bulletDirection = "up";
        this.collision = "none";
        this.bullets = [];
    }
}

enemy = new Enemy(300, 150)
shootingEnemy = new ShootingEnemy(150, 300)