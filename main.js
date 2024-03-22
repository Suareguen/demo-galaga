let board = document.getElementById('container')
let player = new Player(225, 750, board)
let enemiesArray = []
let start = document.getElementById('start')
let buttonStart = document.getElementById('btn-start')
let retryButton = document.getElementById('btn-retry')

let endGame = document.getElementById('end-game')



let playerTimerId
let enemiesTimerId

function startGame () {
    player.insertPlayer()
    playerTimerId = setInterval(playerMove, 5)
    enemiesTimerId = setInterval(createEnemy, 500)
}

function playerMove () {
    if(player.isDead === false) {
        player.move()
    }
    else {
        board.removeChild(player.sprite)
        clearInterval(playerTimerId)
        clearInterval(enemiesTimerId)
        enemiesArray.forEach(function(enemy) {
            clearInterval(enemy.timerId)
            board.removeChild(enemy.sprite)
        })
        alert('Game Over!!!')
        board.style.display = 'none'
        endGame.style.display = 'block'
    }
}

function createEnemy () {
    let randomCoordX = Math.floor(Math.random() * 10) * 50
    let enemy = new Enemy(randomCoordX, 0, board, enemiesArray)
    enemy.insertEnemy()
    enemiesArray.push(enemy)
}

buttonStart.addEventListener('click', function(e) {
    debugger
    start.style.display = 'none'
    board.style.display = 'block'
})

retryButton.addEventListener('click', function (e) {
    start.style.display = 'block'
    board.style.display = 'none'
    endGame.style.display = 'none'
})



window.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'a':
            player.direction = -1
            break
        case 'd':
            player.direction = 1
            break
        case ' ':
            let bullet = new Bullet(player.x + player.width / 2 - 3, player.y - 20, board, enemiesArray)
            bullet.insertBullet()
        // case 'w':
        //     player.directionY = -1
        //     break
        // case 's':
        //     player.directionY = 1
        //     break
    }
})


window.addEventListener('keyup', function (e) {
    player.direction = 0
    // player.directionY = 0

})


startGame()