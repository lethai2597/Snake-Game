function Game() {
    this.width = 400;
    this.height = 400;
    this.gameCanvas = null;
    this.canvas = null;
    this.context = null;
    this.snake = null;
    this.dot = null;
    this.over = false;
    this.score = 0;
    const self = this;

    this.init = function() {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.canvas.style.backgroundColor = '#000'

        this.gameCanvas = document.getElementById('gameCanvas')
        this.gameCanvas.appendChild(this.canvas)

        this.snake = new Snake(this)
        this.snake.init()

        this.dot = new Dot(this)
        this.dot.init()

        this.loop()
    }

    this.resetFrame = function(){
        this.context.fillStyle = '#000';
        this.context.strokestyle = 'eee';
        this.context.fillRect(0, 0, this.width, this.height)
        this.context.strokeRect(0, 0, this.width, this.height)
    }

    this.loop = function() {
        self.draw()
        self.update()
        setTimeout(self.loop, 100)
    }

    this.draw = function() {
        this.resetFrame()
        this.snake.draw()
        this.dot.draw()
    }

    this.update = function(){
        this.snake.update()
        this.dot.update()
        this.notify()
    }

    this.notify = function(){
        document.getElementById('gameScore').innerHTML = this.score
        document.getElementById('gameInfo').innerHTML = this.over ? `Game Over. <p>Press Enter to Play Again` : ''
    }

    this.again = function(){
        this.over = false
        this.snake = new Snake(this)
        this.snake.init()
        this.dot = new Dot(this)
        this.dot.init()
    }
}

const g = new Game()

g.init()

document.addEventListener('keydown', handlePress)

function handlePress(event){
    const keyPressed = event.code
    const goingUp = g.snake.dy === -10
    const goingDown = g.snake.dy === 10
    const goingRight = g.snake.dx === 10
    const goingLeft = g.snake.dx === -10

    if (keyPressed === 'Enter') {
        if(g.over) {g.score = 0; g.again()}
    } 
    
    if (keyPressed === 'ArrowLeft' && !goingRight)
    {   
        g.snake.dx = -10
        g.snake.dy = 0
    }

    if (keyPressed === 'ArrowUp' && !goingDown)
    {    
        g.snake.dx = 0
        g.snake.dy = -10
    }

    if (keyPressed === 'ArrowRight' && !goingLeft)
    {    
        g.snake.dx = 10
        g.snake.dy = 0
    }

    if (keyPressed === 'ArrowDown' && !goingUp)
    {    
        g.snake.dx = 0
        g.snake.dy = 10
    }
}