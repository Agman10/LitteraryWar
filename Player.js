class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.bullets = []
        this.direction = "up";
        this.bulletDirection = "up";
        this.collision = "none";
    }

    update() {
        for (var i = 0; i < this.bullets.length; i++) {
            if (this.x < this.bullets[i].x + this.bullets[i].width &&
                this.x + this.width > this.bullets[i].x &&
                this.y < this.bullets[i].y + this.bullets[i].height &&
                this.y + this.height > this.bullets[i].y) {
                console.log("collision")
            }
            if (this.bullets[i].x < wall.x + wall.width &&
                this.bullets[i].x + this.bullets[i].width > wall.x &&
                this.bullets[i].y < wall.y + wall.height &&
                this.bullets[i].y + this.bullets[i].height > wall.y) {
                this.bullets.splice(i, 1)
            }
            if (this.bullets[i].x < 0 - this.bullets[i].width ||
                this.bullets[i].x > canvas.width + this.bullets[i].width ||
                this.bullets[i].y < 0 - this.bullets[i].height ||
                this.bullets[i].y > canvas.height + this.bullets[i].height) {
                this.bullets.splice(i, 1)
                //console.log(this.bullets.length)
            }

        }
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

        /* ctx.save();
        if (this.direction == "up") {
            ctx.fillText("S", this.x + 15, this.y + 25);
            ctx.fillText("HIP", this.x, this.y + 50);
        }
        if (this.direction == "upRight") {
            ctx.fillText("S", this.x + 30, this.y + 25);
            ctx.fillText("HIP", this.x, this.y + 50);
        }
        if (this.direction == "right") {
            ctx.fillText("S", this.x + 1, this.y + 25);
            ctx.fillText("H", this.x, this.y + 50);
            ctx.fillText("IP", this.x + 21, this.y + 35);
        }
        if (this.direction == "downRight") {
            ctx.fillText("SHI", this.x, this.y + 25);
            ctx.fillText("P", this.x + 30, this.y + 50);
        }
        if (this.direction == "down") {
            ctx.fillText("SHI", this.x, this.y + 25);
            ctx.fillText("P", this.x + 15, this.y + 50);
        }
        if (this.direction == "downLeft") {
            ctx.fillText("SHI", this.x, this.y + 25);
            ctx.fillText("P", this.x, this.y + 50);
        }
        if (this.direction == "left") {
            ctx.fillText("S", this.x - 2, this.y + 35);
            ctx.fillText("H", this.x + 13, this.y + 35);
            ctx.fillText("I", this.x + 37, this.y + 25);
            ctx.fillText("P", this.x + 32, this.y + 50);
        }
        if (this.direction == "upLeft") {
            ctx.fillText("S", this.x, this.y + 25);
            ctx.fillText("HIP", this.x, this.y + 50);
        }
        ctx.restore(); */

        ctx.restore();
        ctx.save();
        ctx.fillStyle = "lightblue";
        ctx.font = "10px Arial";
        if (this.direction == "up") {
            ctx.fillText("G", this.x + 21, this.y - 16);
            ctx.fillText("U", this.x + 21, this.y - 8);
            ctx.fillText("N", this.x + 21, this.y);
        }
        if (this.direction == "upRight") {
            ctx.fillText("G", this.x + 50, this.y);
            ctx.fillText("U", this.x + 56, this.y - 8);
            ctx.fillText("N", this.x + 62, this.y - 16);
        }
        if (this.direction == "right") {
            ctx.fillText("GUN", this.x + 50, this.y + 27);
        }
        if (this.direction == "downRight") {
            ctx.fillText("G", this.x + 50, this.y + 58);
            ctx.fillText("U", this.x + 56, this.y + 66);
            ctx.fillText("N", this.x + 62, this.y + 74);
        }
        if (this.direction == "down") {
            ctx.fillText("G", this.x + 21, this.y + 58);
            ctx.fillText("U", this.x + 21, this.y + 66);
            ctx.fillText("N", this.x + 21, this.y + 74);
        }
        if (this.direction == "downLeft") {
            ctx.fillText("G", this.x - 20, this.y + 74);
            ctx.fillText("U", this.x - 14, this.y + 66);
            ctx.fillText("N", this.x - 8, this.y + 58);
        }
        if (this.direction == "left") {
            ctx.fillText("GUN", this.x - 24, this.y + 27);
        }
        if (this.direction == "upLeft") {
            ctx.fillText("G", this.x - 20, this.y - 16);
            ctx.fillText("U", this.x - 14, this.y - 8);
            ctx.fillText("N", this.x - 8, this.y);
        }
        ctx.restore();

    }
    shoot() {
        let xSpeed = 0;
        let ySpeed = 0;
        let xPos = this.x;
        let yPos = this.y;
        let dir = this.direction;
        let height = bullet.height;
        let width = bullet.width;
        switch (this.direction) {
            case "up":
                xSpeed = 0;
                ySpeed = -8;
                xPos = this.x + 17;
                yPos = this.y - 50;
                height = 45
                width = 16
                break
            case "upRight":
                xSpeed = 6;
                ySpeed = -6;
                xPos = this.x + 55;
                yPos = this.y - 50;
                height = 45
                width = 30
                break
            case "right":
                xSpeed = 8;
                ySpeed = 0;
                xPos = this.x + 55;
                yPos = this.y + 17;
                height = 16
                width = 45
                break
            case "downRight":
                xSpeed = 6;
                ySpeed = 6;
                xPos = this.x + 55;
                yPos = this.y + 55;
                height = 45
                width = 30
                break
            case "down":
                xSpeed = 0;
                ySpeed = 8;
                xPos = this.x + 17;
                yPos = this.y + 55;
                height = 45
                width = 16
                break
            case "downLeft":
                xSpeed = -6;
                ySpeed = 6;
                xPos = this.x - 34;
                yPos = this.y + 55;
                height = 45
                width = 30
                break
            case "left":
                xSpeed = -8;
                ySpeed = 0;
                xPos = this.x - 50;
                yPos = this.y + 17;
                height = 16
                width = 45
                break
            case "upLeft":
                xSpeed = -6;
                ySpeed = -6;
                xPos = this.x - 34;
                yPos = this.y - 50;
                height = 45
                width = 30
                break

        }
        this.bullets.push(new Bullet(xPos, yPos, xSpeed, ySpeed, dir, height, width));
    }
}
player = new Player(200, 300);