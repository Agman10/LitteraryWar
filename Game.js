class Game {
    constructor() { }

    start() {
        setInterval(() => this.loop(), 1000 / 60);
    }

    loop() {
        this.render();
    }

    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.draw()
        bullet.draw();
        console.log("rendering")
    }
}