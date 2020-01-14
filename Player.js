class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.bullets = []
        this.direction = 0;
        this.bulletDirection = 0;
        this.collision = "none";
        this.lives = 3;
    }

    update() {

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
        ctx.save();
        ctx.font = "15px Arial";
        ctx.fillText("Lives: " + this.lives, 5, 15);
        ctx.restore();
        //console.log("player " + this.y)
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        //console.log(this.x + " " + this.y)
    }
    draw() {
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillText("S", this.x, this.y + 25);
        ctx.fillText("H", this.x + 25, this.y + 25);
        ctx.fillText("I", this.x + 5, this.y + 50);
        ctx.fillText("P", this.x + 25, this.y + 50);
        ctx.save();
        ctx.fillStyle = "lightblue";
        ctx.font = "10px Arial";
        if (this.direction == 270) {
            ctx.fillText("G", this.x + 21, this.y - 16);
            ctx.fillText("U", this.x + 21, this.y - 8);
            ctx.fillText("N", this.x + 21, this.y);
        }
        if (this.direction == 315) {
            ctx.fillText("G", this.x + 50, this.y);
            ctx.fillText("U", this.x + 56, this.y - 8);
            ctx.fillText("N", this.x + 62, this.y - 16);
        }
        if (this.direction == 0) {
            ctx.fillText("GUN", this.x + 50, this.y + 27);
        }
        if (this.direction == 45) {
            //downright
            ctx.fillText("G", this.x + 50, this.y + 58);
            ctx.fillText("U", this.x + 56, this.y + 66);
            ctx.fillText("N", this.x + 62, this.y + 74);
        }
        if (this.direction == 90) {
            ctx.fillText("G", this.x + 21, this.y + 58);
            ctx.fillText("U", this.x + 21, this.y + 66);
            ctx.fillText("N", this.x + 21, this.y + 74);
        }
        if (this.direction == 135) {
            //downleft
            ctx.fillText("G", this.x - 20, this.y + 74);
            ctx.fillText("U", this.x - 14, this.y + 66);
            ctx.fillText("N", this.x - 8, this.y + 58);
        }
        if (this.direction == 180) {
            //left
            ctx.fillText("GUN", this.x - 24, this.y + 27);
        }
        if (this.direction == 225) {
            //upleft
            ctx.fillText("G", this.x - 20, this.y - 16);
            ctx.fillText("U", this.x - 14, this.y - 8);
            ctx.fillText("N", this.x - 8, this.y);
        }
        ctx.restore();

    }
    shoot() {
        //enemyBullet.getDirection();
        let diagonal = 6;
        let straight = 8;
        let xSpeed = 0;
        let ySpeed = 0;
        let xPos = this.x;
        let yPos = this.y;
        let dir = this.direction;
        let height = bullet.height;
        let width = bullet.width;
        let speed = 5
        switch (this.direction) {
            case 270:
                //up
                speed = 5;
                xPos = this.x + 17;
                yPos = this.y - 50;
                height = 45
                width = 16
                break
            case 315:
                //upright
                //speed = 5
                xPos = this.x + 55;
                yPos = this.y - 50;
                height = 45
                width = 30
                break
            case 0:
                //left
                speed = 5;
                xPos = this.x + 55;
                yPos = this.y + 17;
                height = 16
                width = 45
                break
            case 45:
                //downright
                speed = 5
                xPos = this.x + 55;
                yPos = this.y + 55;
                height = 45
                width = 30
                break
            case 90:
                //down
                speed = 5;
                xPos = this.x + 17;
                yPos = this.y + 55;
                height = 45
                width = 16
                break
            case 135:
                //downleft
                speed = 5
                xPos = this.x - 34;
                yPos = this.y + 55;
                height = 45
                width = 30
                break
            case 180:
                //left
                /* xSpeed = -straight;
                ySpeed = 0; */
                speed = 5;
                xPos = this.x - 50;
                yPos = this.y + 17;
                height = 16
                width = 45
                break
            case 225:
                //upleft
                speed = 5
                xPos = this.x - 34;
                yPos = this.y - 50;
                height = 45
                width = 30
                break

        }
        game.world.push(new Bullet(xPos, yPos, speed, dir, height, width));
    }
}
player = new Player(200, 300);