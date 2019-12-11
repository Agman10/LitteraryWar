class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.bullets = []
    }

    move(x, y) {
        this.x += x;
        this.y += y;
        console.log(this.x + " " + this.y)
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

        //ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillText("S", this.x + 15, this.y + 25);
        ctx.fillText("HIP", this.x, this.y + 50);
        ctx.restore();


    }
    shoot() {
        this.bullets.push(new Bullet(this.x + 6, this.y - 4));
    }
}
player = new Player(200, 300);