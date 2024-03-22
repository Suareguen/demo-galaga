function Player (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction = 0
    // this.directionY = 0
    this.speed = 5
    this.sprite = document.createElement('div')
    this.isDead = false

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function () {
        let newCoordX = self.x + self.speed * self.direction
        // let newCoordY = self.y + self.speed * self.directionY

        if(newCoordX <= 450 && newCoordX >= 0) {
            self.x = newCoordX
            self.sprite.style.left = self.x + 'px'
        }
/*         if (newCoordY <= 750 && newCoordY >= 0) {
            self.y = newCoordY
            self.sprite.style.top = self.y + 'px'
        } */
    }
}
