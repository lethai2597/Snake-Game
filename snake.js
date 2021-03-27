function Snake(game){
    this.game = game;
    this.position = [
        {x: 0, y: 0},  
        {x: 10, y: 0},  
        {x: 20, y: 0},  
        {x: 30, y: 0}
    ]
    this.dx = 10;
    this.dy = 0;

    const self = this;

    this.init = function(){
        this.draw()
    }

    this.update = function(){
        if(
            this.position[this.position.length - 1].x < 0 || 
            this.position[this.position.length - 1].x > 390 || 
            this.position[this.position.length - 1].y < 0 || 
            this.position[this.position.length - 1].y > 390
        ) {
            game.over = true
        }

        if(!game.over){
            const head = {x: this.position[this.position.length - 1].x + this.dx, y: this.position[this.position.length - 1].y + this.dy};
            this.position.push(head);
            if(this.position[this.position.length - 1].x === game.dot.x && this.position[this.position.length - 1].y === game.dot.y){
                game.dot.createNew = true
                game.score++
            }else{
                this.position.shift()
            }
        }

    }

    this.draw = function(){
        self.position.forEach((position, index) => {
            game.context.fillStyle = (self.position.length - 1 === index) ? 'white' : 'green';
            game.context.strokestyle  = '#eee';
            game.context.fillRect(position.x, position.y, 10, 10);
            game.context.strokeRect(position.x, position.y, 10, 10);
        })
    }

}