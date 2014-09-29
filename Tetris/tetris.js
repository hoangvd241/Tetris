
Game.prototype.init = function () {
	this.board = new Array(length);
	for (var i = 0; i < length; i++) {
		this.board[i] = new Array(width);
		for (var j = 0; j < width; j++) {
			this.board[i][j] = 0;
		}
	}
}

Game.prototype.removeFilledLines = function () {
	var isLineFilled = function (array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == 0) {
				return false;
			}
		}
		return true;
	}

	var board = this.board;

	var lastIndexOfContinuousFilledLine = -1;
	while (lastIndexOfContinuousFilledLine + 1 < board.length && isLineFilled(board[lastIndexOfContinuousFilledLine + 1]))
	{
		lastIndexOfContinuousFilledLine++;
	}

	for (var i = 0; i < this.length; i++) {
		if (i + lastIndexOfContinuousFilledLine < this.length) {
			board[i] = board[i + lastIndexOfContinuousFilledLine];
		}
		else {
			board[i] = new Array(this.width);
			for (var j = 0; j++; j < 10) {
				board[i][j] = 0;
			}
		}
	}
}

Game.prototype.isGameOver = function () {
	var board = this.board;
	for (var i = 0; i < this.width; i++) {
		if (board[this.length - 1][i] != 0) {
			return true;
		}
	}
	return false;
}



function Position(x, y) {
	this.x = x;
	this.y = y;
}

Position.prototype.move = function (x, y) {
	return new Position(this.x + x, this.y + y);
}

Position.prototype.goLeft = function () {
	return this.move(-1, 0);
}

Position.prototype.goRight = function () {
	return this.move(1, 0);
}





Piece.prototype.positions = function (center, rotate) {
	switch (this.shape) {
		case "T":
			 
	}
}

Position.prototype.rotate = function (center, clockwise) {
	
}

var game = new Game();

console.log(game.board[2][3]);
