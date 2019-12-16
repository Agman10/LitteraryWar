class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.bullets = []
        this.direction = "up";
        this.bulletDirection = "up";
    }

    update() {
        for (var i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i].y < 0 - this.bullets[i].height ||
                this.bullets[i].y > canvas.height + this.bullets[i].height ||
                this.bullets[i].x < 0 - this.bullets[i].width ||
                this.bullets[i].x > canvas.width + this.bullets[i].width) {
                this.bullets.splice(i, 1)
                console.log(this.bullets.length)
            }
        }

        /* if (player.direction == "right" || player.direction == "left") {
            bullet.height = 16;
            bullet.width = 45;
        } else if (player.direction == "upRight" || player.direction == "downRight" || player.direction == "downLeft") {
            bullet.height = 45;
            bullet.width = 30;
        } else {
            bullet.height = 45;
            bullet.width = 16;
        } */

    }
    move(x, y) {
        this.x += x;
        this.y += y;
        //console.log(this.x + " " + this.y)
    }
    draw() {
        //var ctx = canvas.getContext("2d");
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        //ctx.textAlign = "center";
        //ctx.fillText("S", this.x + 50, this.y - 25);
        //ctx.strokeRect(this.x - 10, this.y - 47, 20, 25)
        /* ctx.beginPath();
        ctx.moveTo(this.x + 15, this.y);
        ctx.lineTo(this.x + 35, this.y);
        ctx.lineTo(this.x + 35, this.y + 25);
        ctx.lineTo(this.x + 50, this.y + 25);
        ctx.lineTo(this.x + 50, this.y + 50);
        ctx.lineTo(this.x, this.y + 50);
        ctx.lineTo(this.x, this.y + 25);
        ctx.lineTo(this.x + 15, this.y + 25);
        ctx.closePath();
        ctx.stroke(); */

        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillText("S", this.x + 15, this.y + 25);
        ctx.fillText("HIP", this.x, this.y + 50);
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "red";
        if (this.direction == "up") ctx.fillRect(this.x + 22, this.y, 5, 5);
        if (this.direction == "upRight") ctx.fillRect(this.x + 45, this.y, 5, 5);
        if (this.direction == "right") ctx.fillRect(this.x + 45, this.y + 22, 5, 5);
        if (this.direction == "downRight") ctx.fillRect(this.x + 45, this.y + 45, 5, 5);
        if (this.direction == "down") ctx.fillRect(this.x + 22, this.y + 45, 5, 5);
        if (this.direction == "downLeft") ctx.fillRect(this.x, this.y + 45, 5, 5);
        if (this.direction == "left") ctx.fillRect(this.x, this.y + 22, 5, 5);
        if (this.direction == "upLeft") ctx.fillRect(this.x, this.y, 5, 5);
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
                ySpeed = -6;
                xPos = this.x + 17;
                yPos = this.y - 50;
                height = 45
                width = 16
                break
            case "upRight":
                xSpeed = 4; //4
                ySpeed = -4; //-4
                xPos = this.x + 50;
                yPos = this.y - 50;
                height = 45
                width = 30
                break
            case "right":
                xSpeed = 6;
                ySpeed = 0;
                xPos = this.x + 50;
                yPos = this.y + 17;
                height = 16
                width = 45
                break
            case "downRight":
                xSpeed = 4;
                ySpeed = 4;
                xPos = this.x + 50;
                yPos = this.y + 50;
                height = 45
                width = 30
                break
            case "down":
                xSpeed = 0;
                ySpeed = 6;
                xPos = this.x + 17;
                yPos = this.y + 50;
                height = 45
                width = 16
                break
            case "downLeft":
                xSpeed = -4; //-4
                ySpeed = 4; //4
                xPos = this.x - 34;
                yPos = this.y + 50;
                height = 45
                width = 30
                break
            case "left":
                xSpeed = -6;
                ySpeed = 0;
                xPos = this.x - 50;
                yPos = this.y + 17;
                height = 16
                width = 45
                break
            case "upLeft":
                xSpeed = -4;
                ySpeed = -4;
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