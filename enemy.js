function Enemy(x, y, board, enemiesArray) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction = 1
    this.speed = 5
    this.sprite = document.createElement('div')

    this.insertEnemy = function () {
        this.sprite.setAttribute('class', 'enemy')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    this.removeEnemy = function(index) {
        if(self.y >= 750) {
            enemiesArray.shift()
        }
        else {
            enemiesArray.splice(index, 1)
        }
        clearInterval(this.timerId)
        board.removeChild(this.sprite)
    }

    this.move = function () {
        self.checkCollision()
        let newCoordY = self.y + self.speed * self.direction
        if (newCoordY <= 750 && newCoordY >= 0) {
            self.y = newCoordY
            self.sprite.style.top = self.y + 'px'
        }

        if(self.y >= 750) {
            self.removeEnemy()
        }
    }

    this.checkCollision = function() {
        if (self.x < player.x + player.width &&
            self.y < player.y + player.height &&
            self.x + self.width > player.x &&
            self.y + self.height > player.y) {
            player.isDead = true
        }
    }

    this.timerId = setInterval(this.move, 25)
}