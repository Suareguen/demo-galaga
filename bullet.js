function Bullet(x, y, board, enemiesArray) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction = -1
    this.speed = 5
    this.sprite = document.createElement('div')

    this.insertBullet = function () {
        this.sprite.setAttribute('class', 'bullet')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function () {
        self.checkCollision()
        let newCoordY = self.y + self.speed * self.direction
        if (newCoordY <= 750 && newCoordY >= 0) {
            self.y = newCoordY
            self.sprite.style.top = self.y + 'px'
        }

        if (self.y <= 0) {
            self.removeBullet()
        }
    }

    this.removeBullet = function() {
        clearInterval(this.timerId)
        board.removeChild(this.sprite)
    }

    this.checkCollision = function () {
    /*     for(let i = 0; i < enemiesArray.length; i++) {
            if (self.x < enemiesArray[i].x + enemiesArray[i].width &&
                self.y < enemiesArray[i].y + enemiesArray[i].height &&
                self.x + self.width > enemiesArray[i].x &&
                self.y + self.height > enemiesArray[i].y) {

            }
        } */
        enemiesArray.forEach(function (enemy, index) {
            if (self.x < enemy.x + enemy.width &&
                self.y < enemy.y + enemy.height &&
                self.x + self.width > enemy.x &&
                self.y + self.height > enemy.y) {
                    enemy.removeEnemy(index)
                    self.removeBullet()
            }
        })
    }

    this.timerId = setInterval(this.move, 25)
}