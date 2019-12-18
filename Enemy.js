class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.collision = "none"
    }

    update() {
        let xSpeed = 0;
        let ySpeed = 0;
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

        if (player.x > this.x) {
            xSpeed = 1;
        } else if (player.x < this.x) {
            xSpeed = -1;
        }

        if (player.y > this.y) {
            ySpeed = 1;
        } else if (player.y < this.y) {
            ySpeed = -1;
        }

        if (this.collision == "up" || this.collision == "down") {
            ySpeed = 0;
            //xSpeed = 1;
        }

        if (this.collision == "left" || this.collision == "right") {
            xSpeed = 0;
            //ySpeed = 1;
        }
        this.move(xSpeed, ySpeed)

        console.log(this.collision)
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    draw() {
        ctx.save();
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
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
enemy = new Enemy(300, 150)