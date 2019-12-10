class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        var pow = canvas.getContext("2d");
        pow.font = "18px Arial";
        pow.fillStyle = "red";
        pow.textAlign = "center";

        pow.shadowColor = "red";
        pow.shadowOffsetX = 0;
        pow.shadowOffsetY = 0;
        pow.shadowBlur = 10;

        pow.fillText("P", this.x, this.y);
        pow.fillText("O", this.x, this.y + 15);
        pow.fillText("W", this.x, this.y + 30);
    }
}
bullet = new Bullet(200, 185);