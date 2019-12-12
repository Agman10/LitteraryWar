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
            //console.log(this.bullets[i])
            /* if (this.bulletDirection == "up") this.bullets[i].move(0, -4);
            else if (this.bulletDirection == "right") this.bullets[i].move(4, 0); */
            /*if (bullet.direction == "upRight") this.bullets[i].move(4, -4);
            if (bullet.direction == "right") this.bullets[i].move(4, 0);
            if (bullet.direction == "downRight") this.bullets[i].move(4, 4);
            if (bullet.direction == "down") this.bullets[i].move(0, 4);
            if (bullet.direction == "downLeft") this.bullets[i].move(-4, 4);
            if (bullet.direction == "left") this.bullets[i].move(-4, 0);
            if (bullet.direction == "upLeft") this.bullets[i].move(-4, -4); */


            if (this.bullets[i].y < 0 - this.height) {
                this.bullets.splice(i, 1)
            }
        }

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
        switch (this.direction) {
            case "up":
                ySpeed = -4;
                break
            case "upRight":
                xSpeed = 4;
                ySpeed = -4;
                break
            case "right":
                xSpeed = 4;
                ySpeed = 0;
                break
            case "downRight":
                xSpeed = 4;
                ySpeed = 4;
                break
            case "down":
                xSpeed = 0;
                ySpeed = 4;
                break
            case "downLeft":
                xSpeed = 0;
                ySpeed = -4;
                break
            case "left":
                xSpeed = 0;
                ySpeed = -4;
                break
            case "upLeft":
                xSpeed = 0;
                ySpeed = -4;
                break

        }
        //this.bulletDirection = this.direction
        this.bullets.push(new Bullet(this.x + 17, this.y - 50, xSpeed, ySpeed));
        /* console.log(bullet.direction)
        for (var i = 0; i < this.bullets.length; i++) {
            console.log(this.bullets[i])
        } */
    }
}
player = new Player(200, 300);