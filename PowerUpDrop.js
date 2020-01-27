class PowerUpDrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20
        this.height = 20
        this.type = "spread";

    }
    update() {

    }

    draw() {
        ctx.save()
        ctx.font = "13px Arial";
        ctx.fillStyle = "green";
        ctx.textAlign = "center";
        //ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillText("SPR", this.x + 9, this.y + 8);
        ctx.fillText("EAD", this.x + 9, this.y + 20);
        ctx.restore();
    }

    pickUp() {
        if (this.type == "spread") player.powerUp += 10;
        if (this.type == "cooldown" && player.cooldownSpeed > 10) {
            player.cooldownSpeed -= 2.5;
            player.cooldownPowerup++;
        }
    }
}
class BulletCooldown extends PowerUpDrop {
    constructor(x, y) {
        super(x, y);
        this.type = "cooldown";
    }

    draw() {
        ctx.save()
        ctx.font = "13px Arial";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        //ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillText("+FIRE", this.x + 9, this.y + 8);
        ctx.fillText("RATE", this.x + 9, this.y + 20);
        //ctx.fillText("", this.x + 9, this.y + 30);
        ctx.restore();
    }
}

powerUpDrop = new PowerUpDrop(this.x, this.y)
bulletCooldown = new BulletCooldown(this.x, this.y)