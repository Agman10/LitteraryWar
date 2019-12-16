class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.save();
        ctx.textAlign = "center";
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("W", this.x, this.y);
        ctx.fillText("A", this.x, this.y + 25);
        ctx.fillText("L", this.x, this.y + 50);
        ctx.fillText("L", this.x, this.y + 75);
        ctx.restore();
    }

}

wall = new Wall(50, 50)