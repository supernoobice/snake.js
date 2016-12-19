/*
	GameState Module
*/
var Game = (function(){

	/*
		The States of the Game codes
	*/
	var BUILDMAP = 0;
	var PLAYING = 1;
	var END = 2;
	var READY = 3;

	/*
		Current state of the game
	*/
	var state = BUILDMAP;


	/*
		Set a new state
	*/
	var setState = function(newState) {
		state = newState;
		console.log("SET NEW GAME STATE");
	};

	return {
		state 		: state,
		setState 	: setState,
		BUILDMAP 	: BUILDMAP,
		PLAYING 	: PLAYING,
		END 		: END,
		READY		: READY
	};

})();



/*
	Constants Module
*/
var Const = (function(){

	/*
		Direction codes
	*/
	var dir = {
		IDLE 	: 0,
		UP 		: 1,
		DOWN 	: 2,
		LEFT 	: 3,
		RIGHT 	: 4,
		NOCHANGE : 5
	};

	return {

		dir : dir

	};

})();



/*
	Game Objects Module
*/
var GO = (function(){

	/*
		Objects to render
	*/
	var renderables = [];

	/*
		Parts of the snake
	*/
	var snakeParts = [];

	/*
		Wall parts
	*/
	var wallParts = [];

	/*
		Food
	*/
	var foodParts = [];

	return {
		renderables : renderables,
		snakeParts : snakeParts,
		wallParts : wallParts,
		foodParts : foodParts,
		EMPTY	: 0,
		WALL	: 1,
		SNAKE 	: 2,
		FOOD 	: 3
	}

})();



/*
	Wall Object
*/
var Wall = function() {
	
	return {
		visible : true,
		x : 0,
		y : 0,
		width : 16,
		height : 16,
		color : "#000000"
	};

};



/*
	Food Object
*/
var Food = function(){

	var visible = true;

	var hide = function() {
		visible = false;
	};

	var show = function() {
		visible = true;
	};

	/*
		Generate a random number
	*/
	var randomize = function(start, end) {
		return Math.floor((Math.random() * end) + start);
	};

	/* 
		Get new coordinates
	*/
	var getNewCoor = function() {

		x = randomize(1, 28) * 16;
		y = randomize(1, 23) * 16;

		return { x : x, y : y }	
	};

	return {		
		x 			: 0,
		y 			: 0,
		width 		: 16,
		height 		: 16,
		color 		: "#7cb8ff",
		hide 		: hide,
		show 		: show,
		visible 	: visible,
		getNewCoor 	: getNewCoor
	};

};



/*
	Snake Object
*/
var Snake = function() {

	/*
		movement queue
	*/
	var _queue = [];

	/*
		movement
	*/
	var move = {
		x : 0,
		y : 0,

		stop 	: function() {
			setMovement(Const.dir.IDLE);
		},

		up 		: function() {
			setMovement(Const.dir.UP);
		},

		down 	: function() {
			setMovement(Const.dir.DOWN);
		},

		left 	: function() {
			setMovement(Const.dir.LEFT);
		},

		right 	: function() {
			setMovement(Const.dir.RIGHT);
		}

	};


	/*
		Add direction to queue
	*/
	var add = function(dir) {
		
		for( var i = 0; i < GO.snakeParts.length + 1; i++ ) {
			_queue.push(dir);
		}
	};

	/*
		Adds one direction to queue
	*/
	var addOneToQueue = function(dir){
		_queue.push(dir);
	};

	/* 
		show queue 
	*/
	var show = function() {
		return _queue;
	};

	/*
		process next movement in queue
	*/
	var process = function() {
		// console.log(_queue);
		return _queue.shift();
	};

	/* 
		set movement
		@movementCode - from Const.dir module
	*/
	var setMovement = function(movementCode) {
		switch(movementCode)
		{
			case Const.dir.IDLE:
				move.x = 0;
				move.y = 0;
			break;

			case Const.dir.UP:
				move.x = 0;
				move.y = -4;
			break;

			case Const.dir.DOWN:
				move.x = 0;
				move.y = 4;
			break;

			case Const.dir.LEFT:
				move.x = -4;
				move.y = 0;
			break;

			case Const.dir.RIGHT:
				move.x = 4;
				move.y = 0;
			break;
		}
	};


	/*
		Get current movement
		return x, y movement pixels
	*/
	var getMovement = function() {
		
		return { 
			x : move.x, 
			y : move.y 
		};

	};


	return {
		x 			: 0,
		y 			: 0,
		width 		: 16,
		height 		: 16,
		visible		: true,
		color 		: "#237901",
		move 		: move,
		add 		: add,
		show 		: show,
		process 	: process,
		setMovement : setMovement,
		getMovement	: getMovement,
		queue 		: _queue,
		addOneToQueue : addOneToQueue
	};

};




/* 
	Collision Module
*/

var Collision = ( function () {

	var _getCenterX = function (sprite) 
	{
		return sprite.x + (sprite.width * 0.5);
	};

	var _getCenterY = function (sprite) 
	{
		return sprite.y + (sprite.height * 0.5);
	};

	var _getHalfWidth = function (sprite) 
	{
		return sprite.width * 0.5;
	};

	var _getHalfHeight = function (sprite) 
	{
		return sprite.height * 0.5;
	};



	/* 
		Box Collision
		@sprite1 - sprite object
		@sprite2 - sprite object to check collision with
		returns true if sprite1 and sprite2 collides using box.
	*/

	var box = function (sprite1, sprite2) {
		var hit = false;
		var sprite1centerX = _getCenterX( sprite1 );
		var sprite2centerX = _getCenterX( sprite2);

		var sprite1centerY = _getCenterY( sprite1 );
		var sprite2centerY = _getCenterY( sprite2 );

		var vx = sprite1centerX - sprite2centerX;
		var vy = sprite1centerY - sprite2centerY;

		var totalHalfWidths   = _getHalfWidth( sprite1 ) + _getHalfWidth( sprite2 );
		var totalHalfHeights  = _getHalfHeight( sprite1 ) + _getHalfHeight( sprite2 );
		
		if(Math.abs(vx) < totalHalfWidths)
		{
			if(Math.abs(vy) < totalHalfHeights)
			{
				hit = true;
			}
		}
		
		return hit;
	};



	/* 
		expose to public
	*/
	return {
		box : box
	};



})();