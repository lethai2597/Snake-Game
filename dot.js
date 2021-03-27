function Dot(game){
    this.game = game

    this.x = Math.floor(Math.random()*40)*10
    this.y = Math.floor(Math.random()*40)*10
    this.createNew = false

    this.init = function(){
        this.draw()
    }

    this.update = function(){
        if(this.createNew) {
            this.x = Math.floor(Math.random()*40)*10
            this.y = Math.floor(Math.random()*40)*10
            this.createNew = false
        }
    }

    this.draw = function(){
        game.context.fillStyle = 'red';
        game.context.strokestyle  = '#eee';
        game.context.fillRect(this.x, this.y, 10, 10);
        game.context.strokeRect(this.x, this.y, 10, 10);
    }
}