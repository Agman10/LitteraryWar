class PowerUp {
    constructor() {

    }
    shoot() {
        if (!player.exploding && player.powerUp > 0 && player.alive) {
            let xPos = player.x;
            let yPos = player.y;
            let dir = player.direction;
            let height = bullet.height;
            let width = bullet.width;
            let speed = 5
            let x1 = 0
            let x2 = 0
            let y1 = 0
            let y2 = 0
            let radian1 = - 45
            let radian2 = 45
            //aplayer.weaponCooldown = 30;
            switch (player.direction) {
                case 270:
                    //up
                    xPos = player.x + 17;
                    yPos = player.y - 50;
                    height = 45
                    width = 16
                    x1 = -20
                    x2 = 10
                    y1 = -20
                    y2 = -20
                    break
                case 315:
                    //upright
                    xPos = player.x + 55;
                    yPos = player.y - 50;
                    height = 45
                    width = 30
                    radian2 = -315
                    x2 = 0
                    y2 = 25
                    break
                case 0:
                    //right
                    xPos = player.x + 55;
                    yPos = player.y + 17;
                    height = 16
                    width = 45
                    radian1 = 315
                    x1 = 10
                    x2 = 10
                    y1 = -30
                    y2 = 0
                    break
                case 45:
                    //downright
                    xPos = player.x + 55;
                    yPos = player.y + 55;
                    height = 45
                    width = 30
                    break
                case 90:
                    //down
                    xPos = player.x + 17;
                    yPos = player.y + 55;
                    height = 45
                    width = 16
                    x1 = 10
                    x2 = -20
                    y1 = 20
                    y2 = 20
                    break
                case 135:
                    //downleft
                    xPos = player.x - 34;
                    yPos = player.y + 55;
                    height = 45
                    width = 30
                    x1 = 15
                    x2 = -10
                    y1 = 0
                    y2 = 0
                    break
                case 180:
                    //left
                    xPos = player.x - 50;
                    yPos = player.y + 17;
                    height = 16
                    width = 45
                    x1 = 5
                    x2 = 5
                    y1 = 0
                    y2 = -30
                    break
                case 225:
                    //upleft
                    xPos = player.x - 34;
                    yPos = player.y - 50;
                    height = 45
                    width = 30
                    x1 = -15
                    x2 = 10
                    y1 = 25
                    y2 = 0
                    break

            }
            game.world.push(new Bullet(xPos, yPos, speed, dir, height, width));
            game.world.push(new Bullet(xPos + x1, yPos + y1, speed, dir + radian1, height, width));
            game.world.push(new Bullet(xPos + x2, yPos + y2, speed, dir + radian2, height, width));
            player.powerUp--
        }

    }
}
powerUp = new PowerUp()