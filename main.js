class Ball extends createjs.Shape
{    
    constructor(){
	super();
	this.x = 300;
	this.y = 200;
	this.radius = 15;
	this.right = true;
	this.graphics.beginFill("#ff0000").drawCircle(0, 0, this.radius);

	this.velocity = {
	    x: 2,
	    y: 2
	};
	
	this.on("tick", this.tick);
    }

    tick(){
	this.x = this.right?
	    this.x + this.velocity.x :
	    this.x - this.velocity.x;	
    }
}

class Paddle extends createjs.Shape {
    constructor(){
	super();
	this.x = 10;
	this.y = 50;
	this.graphics.beginFill('green').drawRect(this.x, this.y, 20, 100);

	this.leftKeyDown = false;
	this.rightKeyDown = false;

	document.addEventListener('keydown', this.move.bind(this));
	
	this.on("tick", this.tick);
    }

    tick(){
	if(this.leftKeyDown) this.y -= 1;
	if(this.rightKeyDown) this.y += 1;
    }
    

    move(e) {
	switch(e.keyCode) {
	case 37: //left	
	    this.leftKeyDown = true;
	    break;
	case 39: // right 
	    this.rightKeyDown = true;
	    break;
	}
    }
}


class Game{
    
    constructor(ball, paddle){

	this.canvas = document.getElementById("game-canvas");

	this.screenWidth = this.rightEdge = this.canvas.width;
	this.screenHeight = this.uppperEdge = this.canvas.height;
	this.leftEdge = this.downEdge = 0;
	
	this.ball = ball;
	this.paddle = paddle;
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

	this.stage.addChild(this.paddle);
    }

    update() {

	if((this.ball.x + this.ball.radius) >= this.rightEdge){
	    this.ball.right = false;
	}

	if(this.ball.x - this.ball.radius <= 0){
	    this.ball.right = true;
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

var game = new Game(new Ball, new Paddle);
