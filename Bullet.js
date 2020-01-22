class Bullet {
    constructor(x, y, speed = 5, dir = 0, height, width, color = "#70ecfa") {
        this.x = x;
        this.y = y;
        /* this.xSpeed = xSpeed;
        this.ySpeed = ySpeed; */
        this.height = height;
        this.width = width;
        this.dir = dir;
        this.type = "bullet";
        this.color = color;
        this.speed = speed;
    }

    update() {
        this.move();
        //this.dir += 5;
        //this.move(0, 0)
        //console.log(this.dir)
    }

    move() {
        this.x += Math.cos(this.dir / (180 / Math.PI)) * this.speed;
        this.y += Math.sin(this.dir / (180 / Math.PI)) * this.speed;
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


        if (this.dir == 270 || this.dir == 90) {
            ctx.textAlign = "center";
            ctx.fillText("Z", this.x + 8, this.y + 14);
            ctx.fillText("A", this.x + 8, this.y + 29);
            ctx.fillText("P", this.x + 8, this.y + 44);
        } if (this.dir == 0 || this.dir == 180) {
            //ctx.rotate((Math.PI / 180) * 45);
            ctx.fillText("Z", this.x + 2, this.y + 15);
            ctx.fillText("A", this.x + 17, this.y + 15);
            ctx.fillText("P", this.x + 32, this.y + 15);
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
        } if (this.dir == 315) {
            ctx.fillText("Z", this.x, this.y + 44);
            ctx.fillText("A", this.x + 8, this.y + 29);
            ctx.fillText("P", this.x + 16, this.y + 14);
        } if (this.dir == 45) {
            //ctx.translate(this.x, this.y)
            /* ctx.translate(this.x, this.y);
            ctx.rotate(Math.PI / 2);
            ctx.translate(this.x, this.y);
            ctx.fillText("ZAP", this.x, this.y); */
            /* ctx.fillText("Z", this.x + 2, this.y + 15);
            ctx.fillText("A", this.x + 17, this.y + 15);
            ctx.fillText("P", this.x + 32, this.y + 15); */
            //ctx.strokeRect(this.x, this.y, this.width, this.height)
            ctx.fillText("Z", this.x, this.y + 14);
            ctx.fillText("A", this.x + 8, this.y + 28);
            ctx.fillText("P", this.x + 16, this.y + 44);
        } if (this.dir == 135) {
            ctx.fillText("Z", this.x, this.y + 44);
            ctx.fillText("A", this.x + 8, this.y + 29);
            ctx.fillText("P", this.x + 16, this.y + 14);
        } if (this.dir == 225) {
            ctx.fillText("Z", this.x, this.y + 14);
            ctx.fillText("A", this.x + 8, this.y + 28);
            ctx.fillText("P", this.x + 16, this.y + 44);
        }
        ctx.restore();
    }
}

class EnemyBullet extends Bullet {
    constructor(xPos, yPos, speed, dir = 0, height, width) {
        super(xPos, yPos, speed, dir, height, width);
        this.color = "red"
        this.type = "enemyBullet"
        this.dir = (Math.atan2(
            player.y + player.height / 2 - (this.y + this.height / 2),
            player.x + player.width / 2 - (this.x + this.width / 2)
        ) * 180) / Math.PI;
    }

    draw() {
        ctx.save()
        ctx.font = "14px Arial";
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";

        //ctx.fillRect(this.x, this.y, this.width, this.height)
        //ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.shadowColor = this.color;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;


        ctx.textAlign = "center";
        ctx.fillText("Z", this.x + 6, this.y + 12);
        ctx.fillText("A", this.x + 18, this.y + 12);
        ctx.fillText("P", this.x + 6, this.y + 24);
        ctx.fillText("!", this.x + 18, this.y + 24);
        ctx.restore();

    }
}

bullet = new Bullet(this.x, this.y);

enemyBullet = new EnemyBullet(this.x, this.y);