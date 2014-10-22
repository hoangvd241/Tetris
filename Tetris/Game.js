/*global define */

define(['ShapeFactory', 'Event'],
function (ShapeFactory, Event) {
	function Game() {
	}

	Game.prototype.init = function (width, length) {
		this.board = new Array(length);
		for (var i = 0; i < length; i++) {
			this.board[i] = new Array(width);
			for (var j = 0; j < width; j++) {
				this.board[i][j] = 0;
			}
		}
		drawBoard(this.board);
		initShape(this);
		this.isGameOver = false;
	};

	Game.prototype.rotate = function () {
		move(this, this.currentShape.rotate(), this.currentPos);
	};

	Game.prototype.moveLeft = function () {
		move(this, this.currentShape, { x: this.currentPos.x, y: this.currentPos.y - 1 });
	};

	Game.prototype.moveRight = function () {
		move(this, this.currentShape, { x: this.currentPos.x, y: this.currentPos.y + 1 });
	};

	Game.prototype.moveDown = function () {
		var isDirtyRow = function (row) {
			for (var i = 0; i < row.length; i++) {
				if (row[i] === 1) {
					return true;
				}
			}
			return false;
		};

		var isFilledRow = function (row) {
			for (var i = 0; i < row.length; i++) {
				if (row[i] !== 1) {
					return false;
				}
			}
			return true;
		};

		var landOnBoard = function (board, shape, shapePos) {
			var positionsOnBoard = shape.positionsOnBoard(shapePos);
			for (var i = 0; i < positionsOnBoard.length; i++) {
				var nextPos = { x : positionsOnBoard[i].x + 1, y : positionsOnBoard[i].y};
				if (positionsOnBoard[i].x === board.length - 1 || (isInsideTheBoard(board, nextPos) && board[nextPos.x][nextPos.y] === 1)) {
					return true;
				}
			}
			return false;
		};

		var addShapeOnBoard = function (board, shape, shapePos) {
			var positionsOnBoard = shape.positionsOnBoard(shapePos);
			for (var i = 0; i < positionsOnBoard.length; i++) {
				var pos = positionsOnBoard[i];
				board[pos.x][pos.y] = 1;
			}
		};

		var removeFilledLines = function (board) {
			var noOfMoves = 0;
			var noOfMovesObj = {};
			for (var i = board.length - 1; i >= 0; i--) {
				if (isFilledRow(board[i]))
				{
					noOfMoves++;
					board[i] = new Array(board[0].length);
					for (var col = 0; col < board[0].length; col++) {
						board[i][col] = 0;
					}
				}
				else if (isDirtyRow(board[i]) && noOfMoves !== 0) {
					noOfMovesObj[i] = noOfMoves;
				}
			}

			for (var j = board.length - 2; j >= 0; j--) {
				if (noOfMovesObj[j]) {
					var tmp = board[j + noOfMovesObj[j]];
					board[j + noOfMovesObj[j]] = board[j];
					board[j] = tmp;
				}
			}
		};

		if (!this.isGameOver)
		{
			if (landOnBoard(this.board, this.currentShape, this.currentPos)) {
				addShapeOnBoard(this.board, this.currentShape, this.currentPos);
				removeFilledLines(this.board);
				drawBoard(this.board);
				initShape(this);
			}
			else
			{
				var newPos = { x: this.currentPos.x + 1, y: this.currentPos.y };
				drawShape(this.currentShape.positionsOnBoard(this.currentPos), this.currentShape.positionsOnBoard(newPos), this.currentShape.name);
				this.currentPos = newPos;
			}
		}
	};

	Game.prototype.bindDrawBoard = function (callback) {
		Event.sub('board_update', callback);
	};

	Game.prototype.bindDrawShape = function (callback) {
		Event.sub('shape_update', callback);
	};

	Game.prototype.bindGameOver = function (callback) {
		Event.sub('game_over', callback);
	};

	function drawBoard(board) {
		Event.pub('board_update', board);
	}

	function drawShape(oldPos, newPos, shapeName) {
		Event.pub('shape_update', { oldPos: oldPos, newPos: newPos, name : shapeName });
	}

	function promptGameOver() {
		Event.pub('game_over');
	}

	function initShape(game) {
		var newShape = ShapeFactory.generateRandomShape();
		var newPos = { x: 0, y: Math.floor(game.board[0].length / 2) };
		game.isGameOver = !isValidOnBoard(game.board, newShape, newPos);
		if (!game.isGameOver)
		{
			game.currentShape = newShape;
			game.currentPos = newPos;
			drawShape([], game.currentShape.positionsOnBoard(game.currentPos), game.currentShape.name);
		}
		else
		{
			promptGameOver();
		}
	}

	function isInsideTheBoard(board, pos) {
		return pos.x >= 0 && pos.x <= board.length - 1 && pos.y >= 0 && pos.y <= board[0].length - 1;
	}

	function isValidOnBoard(board, shape, shapePos) {
		var positionsOnBoard = shape.positionsOnBoard(shapePos);
		for (var i = 0; i < positionsOnBoard.length; i++) {
			var pos = positionsOnBoard[i];
			if (!isInsideTheBoard(board, pos)) {
				return false;
			}
			if (board[pos.x][pos.y] === 1) {
				return false;
			}
		}
		return true;
	}

	function move(game, newShape, newPos) {
		if (!game.isGameOver && isValidOnBoard(game.board, newShape, newPos)) {
			drawShape(game.currentShape.positionsOnBoard(game.currentPos), newShape.positionsOnBoard(newPos), newShape.name);
			game.currentShape = newShape;
			game.currentPos = newPos;
		}
	}

	return Game;
});