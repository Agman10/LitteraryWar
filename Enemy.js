class Enemy {
    constructor(x = (Math.floor(Math.random() * 50)) * 10, y = (Math.floor(Math.random() * 50)) * 10, moveSpeed = 1, wallCollision = "none", color = "white") {
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

    }

    update() {

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

        //console.log(this.x, this.y)
        //console.log(this.wallCollision)


        this.move(this.xSpeed, this.ySpeed)
        //console.log(this.y)
    }

    move(x, y) {
        this.x += x;
        this.y += y;
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
        this.moveSpeed = 0.1;
        this.type = "shooter"
    }
    /* directionUpdate() {
        if (player.x < this.x && player.y < this.y + 35) {
            this.direction = "left"
        } else this.direction = "downLeft" */
    /* if (player.x > this.x) {
        this.direction = "right";
    } else if (player.x < this.x) {
        this.direction = "left";
    }

    if (player.y > this.y) {
        this.direction = "down";
    } else if (player.y < this.y) {
        this.direction = "up";
    } */

    //console.log(this.direction)
    //}
    shoot() {
        let diagonal = 6;
        let straight = 8;
        let xSpeed = 0;
        let ySpeed = 0;
        let xPos = this.x;
        let yPos = this.y;
        let dir = this.direction;
        let height = 25;
        let width = 25;

        game.world.push(new EnemyBullet(xPos, yPos, xSpeed, ySpeed, dir, height, width));
    }

}
/* enemy = new Enemy()
shootingEnemy = new ShootingEnemy() */