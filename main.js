var canvas = document.querySelector("#game");
var ctx = canvas.getContext("2d");


var map = [
	
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

];

var snake = [
	
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];


/*
	Update Function
*/

var currentMovement = Const.dir.LEFT;
function update() {
	requestAnimationFrame(update, canvas);

	switch(Game.state)
	{
		case Game.BUILDMAP:
			buildMap( map );
			console.log("BUILDMAP: MAP COMPLETE.");

			buildMap( snake );
			console.log("BUILDMAP: SNAKE COMPLETE.");
			Game.state = Game.READY;
		break;

		case Game.READY:
			if( moveUp || moveDown || moveLeft || moveRight) {
				Game.state = Game.PLAYING;

				/*
					Reset keypresses
				*/
				moveUp = false;
				moveDown = false;
				moveLeft = false;
				moveRight = false;
			}
		break;

		case Game.PLAYING:
			play();
		break;

		case Game.END:
			if( moveUp || moveDown || moveLeft || moveRight) {
				
				/*
					Empty game object arrays
				*/
				GO.snakeParts = [];
				GO.renderables = [];
				GO.foodParts = [];


				/*
					Reset keypresses
				*/
				moveUp = false;
				moveDown = false;
				moveLeft = false;
				moveRight = false;

				Game.state = Game.BUILDMAP;
				currentMovement = Const.dir.LEFT;
			}
		break;
	}

	render();

};

update();


/*
	controls
*/
var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;

window.addEventListener('keydown', function(event) {
	var UP = 38;
	var DOWN = 40;
	var LEFT = 37;
	var RIGHT = 39;


	switch(event.keyCode)
	{
		case UP:
			moveUp = true;
		break;
		
		case DOWN:
			moveDown = true;
		break;
		
		case LEFT:
			moveLeft = true;
		break;
		
		case RIGHT:
			moveRight = true;
		break;
	}
}, false);




/*
	Play Function
*/



function play() {


	/*
		Must not go opposite direction
	*/
	switch( currentMovement )
	{
		case Const.dir.UP:
			moveDown = false;
		break;

		case Const.dir.DOWN:
			moveUp = false;
		break;

		case Const.dir.LEFT:
			moveRight = false;
		break;

		case Const.dir.RIGHT:
			moveLeft = false;
		break;
	}


	
		

	/*
		If snake head is in a junction
	*/
	if( (GO.snakeParts[0].x % 16) === 0 && (GO.snakeParts[0].y % 16) === 0 ) {

		for (var i = 0; i < GO.snakeParts.length; i++) {
			
			var snake = GO.snakeParts[i];


			/*
				Process the queue
			*/
			var newDir = snake.process();

			switch(newDir) {
				case Const.dir.UP: 
					snake.move.up();
				break;

				case Const.dir.DOWN: 
					snake.move.down();
				break;

				case Const.dir.LEFT: 
					snake.move.left();
				break;

				case Const.dir.RIGHT: 
					snake.move.right();
				break;

				case Const.dir.NOCHANGE:
					console.log("NO CHANGE");
				break;

			}

			/*
				Replenish the queue
			*/
			snake.addOneToQueue( currentMovement );
		};	
	}



	/*
		Check for user input
	*/
	if(moveUp && !moveLeft || moveUp && !moveRight) {
		currentMovement = Const.dir.UP;
		moveUp = false;
	}

	if(moveDown && !moveLeft || moveDown && !moveRight) {
		currentMovement = Const.dir.DOWN;
		moveDown = false;
	}

	if(moveLeft && !moveUp || moveLeft && !moveDown) {
		currentMovement = Const.dir.LEFT;
		moveLeft = false;
	}

	if(moveRight && !moveUp || moveRight && !moveLeft) {
		currentMovement = Const.dir.RIGHT;
		moveRight = false;
	}



	/*
		Check for collision of snake with food
	*/
	for (var i = 0; i < GO.foodParts.length; i++) {
		var food = GO.foodParts[i];
		var head = GO.snakeParts[0];

		if( Collision.box( head, food ) ) {

			/*
				Hide and respawn food
			*/
			food.visible = false;
			var newCoor = food.getNewCoor();
			food.x = newCoor.x;
			food.y = newCoor.y;
			food.visible = true;

			growSnake();
		}
	};



	/*
		Move the snakeparts
	*/
	for (var i = 0; i < GO.snakeParts.length; i++) {
		var snake = GO.snakeParts[i];
		snake.x += snake.move.x;
		snake.y += snake.move.y;
	};



	/*
		Check for collision of snake with its body
	*/

	for (var i = 0; i < GO.snakeParts.length; i++) {
		var snake = GO.snakeParts[i];
		var head = GO.snakeParts[0];
		/*
			Check collision of the head with the body parts
			exception is the head and neck (i = 0, i = 1, i = 2)
		*/
		if( Collision.box( head, snake ) && i > 2 ) {
			Game.state = Game.END;
		}
	};


	/*
		Check for collision of snake with wall
	*/

	for (var i = 0; i < GO.wallParts.length; i++) {
		var wall = GO.wallParts[i];
		var head = GO.snakeParts[0];

		if( Collision.box( head, wall ) ) {
			Game.state = Game.END;
		}
	};


	
}



/*
	Render Function
*/
function render() {
	ctx.clearRect( 0, 0, canvas.width, canvas.height );

	var sprites = GO.renderables;

	if(sprites.length !== 0) {

		for ( var i = 0; i < sprites.length; i++ ) {
			var sprite = sprites[i];

			if( sprite.visible ) {
				ctx.save();
				ctx.fillStyle = sprite.color;
				ctx.fillRect(sprite.x, sprite.y, sprite.width, sprite.height);
				ctx.restore();
			}
		};
	}
}






/* 
	buildMap function 
*/
function buildMap(mapMatrix) {

	for( var i = 0; i < mapMatrix.length; i++ ) {

		for( var j = 0; j < mapMatrix[i].length; j++) {

			var tile = mapMatrix[i][j];

			if( tile !== 0 ) {

				switch( tile ) {
					
					case GO.WALL:
						var wall = new Wall();
						wall.x = j * 16;
						wall.y = i * 16;
						GO.renderables.push( wall );
						GO.wallParts.push( wall );
					break;

					case GO.SNAKE:
						var snake = new Snake();
						snake.x = j * 16;
						snake.y = i * 16;
						snake.add(Const.dir.LEFT);
						snake.setMovement(Const.dir.LEFT);

						GO.renderables.push( snake );
						GO.snakeParts.push( snake );
					break;

					case GO.FOOD:
						var food = new Food();
						food.x = j * 16;
						food.y = i * 16;
						GO.renderables.push( food );
						GO.foodParts.push( food );
					break;
				}

			};

		}

	}

}




function growSnake() {
	
	var length = GO.snakeParts.length;
	var tail = GO.snakeParts[length - 1];
	
	var tailMovement = tail.getMovement();

	var newPart = new Snake();
	

	/*
		Set default movement for the new part
	*/
	newPart.move.x = tailMovement.x;
	newPart.move.y = tailMovement.y;


	/*
		Populate queue
	*/
	newPart.addOneToQueue( 99 );
	

	for (var i = 0; i < tail.queue.length; i++) {
		newPart.addOneToQueue( tail.queue[i] );
	};


	/*
		Set where the new part will appear
	*/
	if( tailMovement.x < 0 && tailMovement.y === 0) {
		newPart.x = tail.x + 16;
		newPart.y = tail.y;	
		
	}

	if( tailMovement.x > 0 && tailMovement.y === 0) {
		newPart.x = tail.x - 16;
		newPart.y = tail.y;	
		
	}

	if( tailMovement.y < 0 && tailMovement.x === 0) {
		newPart.x = tail.x;
		newPart.y = tail.y + 16;
		
	}

	if( tailMovement.y > 0 && tailMovement.x === 0) {
		newPart.x = tail.x;
		newPart.y = tail.y - 16;	
		
	}
	

	GO.renderables.push( newPart );
	GO.snakeParts.push( newPart );
}