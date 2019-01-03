class Ball extends createjs.Shape {

    constructor(){
	super();
	this.x = 300;
	this.y = 200;
	this.graphics.beginFill("#ff0000").drawCircle(0, 0, 20);
    }   
}


class Game{
    
    constructor(ball){
	this.ball = ball;
	this.canvas = document.getElementById("game-canvas");
	this.stage = new createjs.Stage(this.canvas);
	createjs.Ticker.framerate = 30;
	createjs.Ticker.addEventListener("tick", this.stage);
	
	this.stage.addChild(this.ball);
	createjs.Ticker.addEventListener("tick", this.update.bind(this));

	this.textX = new createjs.Text('X: ' + this.ball.x, "40px Arial", "red");
	this.textX.x = this.textX.y = 100;
	this.textX.textBaseline = "alphabetic";
	this.stage.addChild(this.textX);

	this.textY = new createjs.Text('Y: ' + this.ball.x, "40px Arial", "red");
	this.textY.x = this.textY.y = 150;
	this.textY.textBaseline = "alphabetic";
	this.stage.addChild(this.textY);
    }

    update() {

	if(this.ball.x >= 400){
	    this.ball.x += 2;
	}else{
	    this.ball.x -= 2;
	}

	this.textX.text = 'X: ' +  this.ball.x; 
	this.textY.text = 'Y: ' +  this.ball.y;
    }

    updateScore(){
    }

    collision() {
	if(this.ball.x >= 300){
	    
	}
    }
}

var game = new Game(new Ball);
