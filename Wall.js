class Wall {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    draw() {
        ctx.save();
        //ctx.textAlign = "center";
        ctx.font = "30px Arial";
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        //ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillText("W", this.x, this.y + 25);
        ctx.fillText("A", this.x + 4, this.y + 50);
        ctx.fillText("L", this.x + 6, this.y + 75);
        ctx.fillText("L", this.x + 6, this.y + 100);
        ctx.restore();
    }

}

wall = new Wall(50, 50, 100, 30)