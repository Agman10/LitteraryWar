class Bullet {
    constructor(x, y, xSpeed, ySpeed, dir, height, width, color = "#70ecfa") {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.height = height;
        this.width = width;
        this.dir = dir;
        this.type = "bullet";
        this.color = color
    }

    update() {
        this.move(this.xSpeed, this.ySpeed)
        //this.move(0, 0)
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    draw() {
        ctx.save()
        ctx.font = "18px Arial";
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";

        //ctx.fillRect(this.x, this.y, this.width, this.height)
        //ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.shadowColor = this.color;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;


        if (this.dir == "up" || this.dir == "down") {
            ctx.textAlign = "center";
            ctx.fillText("Z", this.x + 8, this.y + 14);
            ctx.fillText("A", this.x + 8, this.y + 29);
            ctx.fillText("P", this.x + 8, this.y + 44);
        } if (this.dir == "right" || this.dir == "left") {
            ctx.fillText("Z", this.x + 2, this.y + 15);
            ctx.fillText("A", this.x + 17, this.y + 15);
            ctx.fillText("P", this.x + 32, this.y + 15);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        } if (this.dir == "upRight") {
            ctx.fillText("Z", this.x, this.y + 44);
            ctx.fillText("A", this.x + 8, this.y + 29);
            ctx.fillText("P", this.x + 16, this.y + 14);
        } if (this.dir == "downRight") {
            ctx.fillText("Z", this.x, this.y + 14);
            ctx.fillText("A", this.x + 8, this.y + 28);
            ctx.fillText("P", this.x + 16, this.y + 44);
        } if (this.dir == "downLeft") {
            ctx.fillText("Z", this.x, this.y + 44);
            ctx.fillText("A", this.x + 8, this.y + 29);
            ctx.fillText("P", this.x + 16, this.y + 14);
        } if (this.dir == "upLeft") {
            ctx.fillText("Z", this.x, this.y + 14);
            ctx.fillText("A", this.x + 8, this.y + 28);
            ctx.fillText("P", this.x + 16, this.y + 44);
        }
        ctx.restore();
    }
}

class EnemyBullet extends Bullet {
    constructor() {
        super();
        this.color = "red"
    }
}

enemyBullet = new EnemyBullet(this.x, this.y);

bullet = new Bullet(this.x, this.y);