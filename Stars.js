class Stars {
    constructor(string, x, y, randomColors) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.stars = [];
        this.text = string;
        this.randomColors = randomColors;
        this.colors = ["#ffffff", "#ffffc8", "#c8c8ff", "#c8ffc8", "#ffc8c8"];
        //this.colors = ["#ffffff", "#ffff00", "#0000ff", "#00ff00", "#ff0000"];
        this.colorRandomizer = Math.floor(Math.random() * this.colors.length);
        this.random = (Math.floor(Math.random() * 15) + 5) / 10;
    }

    push() {
        this.stars.push(new Stars("*", this.x + 40, this.y + 330, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 53, this.y + 56, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 85, this.y + 170, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 100, this.y + 480, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 213, this.y + 270, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 250, this.y + 30, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 300, this.y + 380, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 337, this.y + 156, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 460, this.y + 250, Math.floor(Math.random() * this.colors.length)));
        this.stars.push(new Stars("*", this.x + 475, this.y + 50, Math.floor(Math.random() * this.colors.length)));
    }

    update() {
        for (var i = 0; i < this.stars.length; i++) {
            if (this.stars[i].y > 500) {
                this.stars[i].y = 0;
                this.stars[i].random = (Math.floor(Math.random() * 15) + 5) / 10;
                this.stars[i].randomColors = Math.floor(Math.random() * this.colors.length);
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

        ctx.fillStyle = stars.colors[this.randomColors];
        ctx.shadowColor = stars.colors[this.randomColors];
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 15;

        ctx.fillText(this.text, this.x + 1, this.y + 17)

        ctx.restore();
    }
}

stars = new Stars("*", 0, 0)