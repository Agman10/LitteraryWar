class Bullet {
    constructor(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.direction = "null";
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.height = 45;
        this.width = 16;

    }

    update() {
        /* if (this.direction == "up") this.move(0, -4);
        if (this.direction == "upRight") this.move(4, -4);
        if (this.direction == "right") this.move(4, 0);
        if (this.direction == "downRight") this.move(4, 4);
        if (this.direction == "down") this.move(0, 4);
        if (this.direction == "downLeft") this.move(-4, 4);
        if (this.direction == "left") this.move(-4, 0);
        if (this.direction == "upLeft") this.move(-4, -4); */

        this.move(this.xSpeed, this.ySpeed)
        //this.direction = player.direction
    }

    move(x, y) {
        //if (this.direction == "up") this.y -= 4;
        //if (this.direction == "down") this.y += 4;
        this.x += x;
        this.y += y;
        //console.log(this.x + " " + this.y)
    }

    direction() {
        /* if (this.direction == "up") this.move(0, -4);
        if (this.direction == "upRight") this.move(4, -4);
        if (this.direction == "right") this.move(4, 0);
        if (this.direction == "downRight") this.move(4, 4);
        if (this.direction == "down") this.move(0, 4);
        if (this.direction == "downLeft") this.move(-4, 4);
        if (this.direction == "left") this.move(-4, 0);
        if (this.direction == "upLeft") this.move(-4, -4); */
    }

    draw() {
        //var ctx = canvas.getContext("2d");
        ctx.save()
        ctx.font = "18px Arial";
        ctx.fillStyle = "red";
        ctx.strokeStyle = "white";
        ctx.textAlign = "center";
        ctx.shadowColor = "red";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;

        ctx.fillText("P", this.x + 8, this.y + 14);
        ctx.fillText("O", this.x + 8, this.y + 29);
        ctx.fillText("W", this.x + 8, this.y + 44);
        //ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.restore();
    }
}
bullet = new Bullet(player.x, player.y);