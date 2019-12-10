class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        var ship = canvas.getContext("2d");
        ship.font = "30px Arial";
        ship.fillStyle = "white";
        ship.textAlign = "center";

        ship.fillText("S", this.x, this.y - 25);
        ship.fillText("HIP", this.x, this.y);
    }
}
player = new Player(200, 300);