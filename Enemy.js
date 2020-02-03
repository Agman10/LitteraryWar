class Enemy {
    constructor(x = (Math.floor(Math.random() * 50)) * 10, y = (Math.floor(Math.random() * 50)) * 10, moveSpeed = 1, wallCollision = "none", color = "white", invis = true) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.moveSpeed = moveSpeed;
        //this.enemies = [];
        this.wallCollision = wallCollision;
        //this.randomOffscreenPos = randomOffscreenPos;
        this.color = color
        this.type = "enemy"
        this.invis = invis;
        this.invisFrame = 50;
        this.shootingFrame = 0;

    }

    update() {
        this.shootingFrame++
        /* for (let i in game.world) {
            let wall = game.world[i]
            if (wall.type == "wall") { */
        if (player.alive && this.invis == false) {

            if (player.x > this.x && this.wallCollision != "right") {
                this.xSpeed = this.moveSpeed;
            } else if (player.x < this.x && this.wallCollision != "left") {
                this.xSpeed = -this.moveSpeed;
            } else this.xSpeed = 0;

            if (player.y > this.y && this.wallCollision != "down") {
                this.ySpeed = this.moveSpeed;
            } else if (player.y < this.y && this.wallCollision != "up") {
                this.ySpeed = -this.moveSpeed;
            } else this.ySpeed = 0;


            /* for (let i in game.world) {
                let wall = game.world[i]
                if (wall.type == "wall") { */
            if (this.x < wall.x + wall.width &&
                this.x + this.width > wall.x &&
                this.y + 10 > wall.y + wall.height &&
                this.y < wall.y + wall.height) {
                this.wallCollision = "up";
                if (player.x > wall.x - wall.width / 2) {
                    this.xSpeed = this.moveSpeed;
                } if (player.x < wall.x - wall.width / 2) {
                    this.xSpeed = -this.moveSpeed;
                }
            }
            else if (this.x < wall.x - this.width + 10 &&
                this.x + this.width > wall.x &&
                this.y + this.height > wall.y &&
                this.y < wall.y + wall.height) {
                this.wallCollision = "right";
                if (player.y > wall.y + wall.width / 2) {
                    this.ySpeed = this.moveSpeed;
                } if (player.y < wall.y + wall.width / 2) {
                    this.ySpeed = -this.moveSpeed;
                }
            }
            else if (this.x < wall.x + wall.width &&
                this.x + this.width > wall.x &&
                this.y + this.height > wall.y &&
                this.y < wall.y - this.height + 10) {
                this.wallCollision = "down";
                if (player.x > wall.x - wall.width / 2) {
                    this.xSpeed = this.moveSpeed;
                } if (player.x < wall.x - wall.width / 2) {
                    this.xSpeed = -this.moveSpeed;
                }
            }
            else if (this.x < wall.x + wall.width &&
                this.x + 10 > wall.x + wall.width &&
                this.y + this.height > wall.y &&
                this.y < wall.y + wall.height) {
                this.wallCollision = "left";
                if (player.y > wall.y + wall.height / 2) {
                    this.ySpeed = this.moveSpeed;
                } if (player.y < wall.y + wall.height / 2) {
                    this.ySpeed = -this.moveSpeed;
                }
            }
            else this.wallCollision = "none"
            //}
            //}

            this.move(this.xSpeed, this.ySpeed)

            //}
            //}
        }
        if (this.invis) {
            this.invisFrame--
        } if (this.invisFrame == 0) {
            this.invis = false;
        }
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    powerUpDrop() {
        let random = (Math.floor(Math.random() * 10))
        if (random == 0) game.world.push(new PowerUpDrop(this.x + 12, this.y + 10));
        if (random == 1) game.world.push(new BulletCooldown(this.x + 12, this.y + 10));

    }

    draw() {

        ctx.save();
        /* if (this.invis) {
            ctx.fillStyle = "green";
        } */

        //if (!this.invis) ctx.fillStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        //ctx.strokeRect(this.x, this.y, this.width, this.height);

        /* ctx.font = "20px Arial";
        ctx.fillText("ENE", this.x + 4, this.y + 20); */
        ctx.font = "20px Arial";
        ctx.fillText("PRO", this.x + 4, this.y + 20);
        ctx.save();

        /* ctx.font = "30px Arial";
        ctx.fillText("MY", this.x + 2, this.y + 50); */

        ctx.font = "18px Arial";
        ctx.fillText("BLEM", this.x, this.y + 45);
        ctx.restore();
        ctx.restore();

    }


}


class ShootingEnemy extends Enemy {
    constructor(x, y) {
        super(x, y);
        this.color = "coral"
        this.direction = 0;
        //this.bulletDirection = 0;
        this.collision = "none";
        this.bullets = [];
        this.moveSpeed = 0.5;
        this.type = "shooter"

    }

    shoot() {
        let speed = 3
        let xPos = this.x + 12;
        let yPos = this.y + 15;
        let dir = this.direction;
        let height = 25;
        let width = 25;

        game.world.push(new EnemyBullet(xPos, yPos, speed, dir, height, width));
    }

}
/* enemy = new Enemy()
shootingEnemy = new ShootingEnemy() */