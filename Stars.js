class Stars {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.stars = [];
        this.random = (Math.floor(Math.random() * 15) + 5) / 10
    }

    push() {
        this.stars.push(new Stars(this.x + 53, this.y + 56));
        this.stars.push(new Stars(this.x + 337, this.y + 156));
        this.stars.push(new Stars(this.x + 85, this.y + 170));
        this.stars.push(new Stars(this.x + 213, this.y + 270));
        this.stars.push(new Stars(this.x + 300, this.y + 380));
        this.stars.push(new Stars(this.x + 460, this.y + 250));
        this.stars.push(new Stars(this.x + 40, this.y + 330));
        this.stars.push(new Stars(this.x + 250, this.y + 30));
        this.stars.push(new Stars(this.x + 100, this.y + 480));
        this.stars.push(new Stars(this.x + 475, this.y + 50));
    }

    update() {
        for (var i = 0; i < this.stars.length; i++) {
            if (this.stars[i].y > 500) {
                this.stars[i].y = 0;
                this.stars[i].random = (Math.floor(Math.random() * 15) + 5) / 10
                //console.log(this.stars[i].random)
            }
        }
        this.move(0, this.random)
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    draw() {
        ctx.save();
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.shadowColor = "white";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 15;
        /* ctx.strokeStyle = "white";
        ctx.strokeRect(this.x, this.y, 10, 10) */

        ctx.fillText("*", this.x + 1, this.y + 17)
        /* ctx.fillText("*", 100, 100)
        ctx.fillText("*", 63, 430)
        ctx.fillText("*", 300, 350)
        ctx.fillText("*", 250, 250)
        ctx.fillText("*", 400, 150)
        ctx.fillText("*", 300, 350)
        ctx.fillText("*", 100, 320)
        ctx.fillText("*", 180, 30)
        ctx.fillText("*", 30, 230)
        ctx.fillText("*", 380, 440) */
        ctx.restore();
    }
}

stars = new Stars(0, 0)