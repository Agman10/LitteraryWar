class Wall {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.direction = Math.floor(Math.random() * 2)
        this.size = Math.floor(Math.random() * 4)
        this.type = "wall"
    }
    update() {
        if (this.direction == 0) {
            if (this.x > 170 && this.x < 250 &&
                this.y > 70 && this.y < 300) {
                this.x = (Math.floor(Math.random() * 47)) * 10;
                this.y = (Math.floor(Math.random() * 40)) * 10;
            }
            switch (this.size) {
                case 0:
                    this.width = 30
                    this.height = 100
                    if (this.y > 390) this.y = (Math.floor(Math.random() * 40)) * 10
                    break
                case 1:
                    this.width = 30
                    this.height = 125
                    if (this.y > 370) this.y = (Math.floor(Math.random() * 38)) * 10
                    break
                case 2:
                    this.width = 30
                    this.height = 150
                    if (this.y > 340) this.y = (Math.floor(Math.random() * 35)) * 10
                    break
                case 3:
                    this.width = 30
                    this.height = 175
                    if (this.y > 320) this.y = (Math.floor(Math.random() * 33)) * 10
                    break
            }
        }

        if (this.direction == 1) {
            if (this.x > 40 && this.x < 250 &&
                this.y > 220 && this.y < 300) {
                this.x = (Math.floor(Math.random() * 47)) * 10;
                this.y = (Math.floor(Math.random() * 40)) * 10;
            }
            switch (this.size) {
                case 0:
                    this.width = 95;
                    this.height = 25
                    if (this.x > 400) this.x = (Math.floor(Math.random() * 41)) * 10
                    break
                case 1:
                    this.width = 115;
                    this.height = 25
                    if (this.x > 380) this.x = (Math.floor(Math.random() * 39)) * 10
                    break
                case 2:
                    this.width = 135;
                    this.height = 25
                    if (this.x > 360) this.x = (Math.floor(Math.random() * 37)) * 10
                    break
                case 3:
                    this.width = 155;
                    this.height = 25
                    if (this.x > 340) this.x = (Math.floor(Math.random() * 35)) * 10
                    break
            }
        }
    }
    draw() {
        ctx.save();
        //ctx.textAlign = "center";
        ctx.font = "30px Arial";
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        //ctx.fillRect(this.x, this.y, this.width, this.height)
        //ctx.strokeRect(this.x, this.y, this.width, this.height)

        if (this.direction == 0) {
            ctx.fillText("W", this.x, this.y + 25);
            ctx.fillText("A", this.x + 4, this.y + 50);
            ctx.fillText("L", this.x + 6, this.y + 75);
            ctx.fillText("L", this.x + 6, this.y + 100);
            switch (this.size) {
                case 1:
                    ctx.fillText("L", this.x + 6, this.y + 125)
                    break
                case 2:
                    ctx.fillText("L", this.x + 6, this.y + 125)
                    ctx.fillText("L", this.x + 6, this.y + 150);
                    break
                case 3:
                    ctx.fillText("L", this.x + 6, this.y + 125)
                    ctx.fillText("L", this.x + 6, this.y + 150);
                    ctx.fillText("L", this.x + 6, this.y + 175);
                    break
            }
        }

        if (this.direction == 1) {
            ctx.fillText("W", this.x, this.y + 25);
            ctx.fillText("A", this.x + 30, this.y + 25);
            ctx.fillText("L", this.x + 55, this.y + 25);
            ctx.fillText("L", this.x + 75, this.y + 25);
            switch (this.size) {
                case 1:
                    ctx.fillText("L", this.x + 95, this.y + 25);
                    break
                case 2:
                    ctx.fillText("L", this.x + 95, this.y + 25);
                    ctx.fillText("L", this.x + 115, this.y + 25);
                    break
                case 3:
                    ctx.fillText("L", this.x + 95, this.y + 25);
                    ctx.fillText("L", this.x + 115, this.y + 25);
                    ctx.fillText("L", this.x + 135, this.y + 25);
                    break

            }
        }
        ctx.restore();
    }

}
let randomPosX = (Math.floor(Math.random() * 47)) * 10
let randomPosY = (Math.floor(Math.random() * 40)) * 10

wall = new Wall(randomPosX, randomPosY, this.height, this.width)