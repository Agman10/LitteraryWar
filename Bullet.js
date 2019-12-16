class Bullet {
    constructor(x, y, xSpeed, ySpeed, dir, height, width) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.height = height;
        this.width = width;
        this.dir = dir;
    }

    update() {
        this.move(this.xSpeed, this.ySpeed)
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    draw() {
        //var ctx = canvas.getContext("2d");
        ctx.save()
        ctx.font = "18px Arial";
        ctx.fillStyle = "red";
        ctx.strokeStyle = "white";

        ctx.shadowColor = "red";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;



        if (this.dir == "right" || this.dir == "left") {
            //ctx.fillText("POW", this.x + 0, this.y + 14);
            /* ctx.textAlign = "center";
            ctx.fillText("P", this.x + 8, this.y + 14);
            ctx.fillText("O", this.x + 20, this.y + 14);
            ctx.fillText("W", this.x + 35, this.y + 14); */
            ctx.fillText("P", this.x, this.y + 14);
            ctx.fillText("O", this.x + 13, this.y + 14);
            ctx.fillText("W", this.x + 28, this.y + 14);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        } else if (this.dir == "upRight") {
            //ctx.textAlign = "center";
            ctx.fillText("P", this.x + 16, this.y + 14);
            ctx.fillText("O", this.x + 8, this.y + 29);
            ctx.fillText("W", this.x, this.y + 44);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        } else if (this.dir == "downRight") {
            //ctx.textAlign = "center";
            ctx.fillText("P", this.x, this.y + 14);
            ctx.fillText("O", this.x + 6, this.y + 28);
            ctx.fillText("W", this.x + 14, this.y + 44);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        } else if (this.dir == "downLeft") {
            //ctx.textAlign = "center";
            ctx.fillText("P", this.x + 16, this.y + 14);
            ctx.fillText("O", this.x + 8, this.y + 29);
            ctx.fillText("W", this.x, this.y + 44);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        } else if (this.dir == "upLeft") {
            //ctx.textAlign = "center";
            ctx.fillText("P", this.x, this.y + 14);
            ctx.fillText("O", this.x + 6, this.y + 28);
            ctx.fillText("W", this.x + 14, this.y + 44);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        } else {
            ctx.textAlign = "center";
            ctx.fillText("P", this.x + 8, this.y + 14);
            ctx.fillText("O", this.x + 8, this.y + 29);
            ctx.fillText("W", this.x + 8, this.y + 44);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
        ctx.restore();
    }
}
bullet = new Bullet(player.x, player.y);