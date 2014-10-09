/*global define */

define(['./ShapeFactory'],
function (ShapeFactory) {
	function Game(width, length) {
		var initBoard = function (game) {
			game.board = new Array(length);
			for (var i = 0; i < length; i++) {
				game.board[i] = new Array(width);
				for (var j = 0; j < width; j++) {
					game.board[i][j] = 0;
				}
			}
		};

		initBoard(this);
		initShape(this);
		this.isGameOver = false;
	}

	Game.prototype.rotateCurrentShape = function () {
		move(this, this.currentShape, this.currentShape.rotate(), this.currentPos, this.currentPos);
	};

	Game.prototype.moveDown = function () {
		move(this, this.currentShape, this.currentShape, this.currentPos, { x: this.currentPos.x + 1, y: this.currentPos.y });
	};

	Game.prototype.moveLeft = function () {
		move(this, this.currentShape, this.currentShape, this.currentPos, { x: this.currentPos.x, y: this.currentPos.y - 1 });
	};

	Game.prototype.moveRight = function () {
		move(this, this.currentShape, this.currentShape, this.currentPos, { x: this.currentPos.x, y: this.currentPos.y + 1 });
	};

	function initShape(game) {
		game.currentShape = ShapeFactory.generateRandomShape();
		game.currentPos = { x: 0, y: Math.floor(game.board.length / 2) };
	}

	function move(game, oldShape, newShape, oldPos, newPos) {
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

		var isInsideTheBoard = function (board, pos) {
			return pos.x >= 0 && pos.x <= board.length - 1 && pos.y >= 0 && pos.y <= board[0].length - 1;
		};

		var isValidOnBoard = function (board, shape, shapePos) {
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
		};

		var landOnBoard = function (board, shape, shapePos) {
			var positionsOnBoard = shape.positionsOnBoard(shapePos);
			for (var i = 0; i < positionsOnBoard.length; i++) {
				var pos = { x: positionsOnBoard[i].x + 1, y: positionsOnBoard[i].y };
				if (isInsideTheBoard(board, pos) && (pos.x === board.length - 1 || board[pos.x][pos.y] === 1)) {
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
			var resetBottomRows = function (array, startRow) {
				for (var i = startRow; i < array.length; i++) {
					for (var j = 0; j < array[0].length; j++) {
						array[i][j] = 0;
					}
				}
			};

			var moveRowsToBottom = function (array, startRow, endRow) {
				for (var i = endRow; i >= startRow; i--) {
					var idx = board.length - 1 - endRow + i;
					var tmp = array[idx];
					array[idx] = array[i];
					array[i] = tmp;
				}
			};

			var firstRowFilled = board.length;
			while (firstRowFilled - 1 >= 0 && isFilledRow(board[firstRowFilled - 1])) {
				firstRowFilled--;
			}
			resetBottomRows(board, firstRowFilled);

			if (firstRowFilled < board.length) {
				var firstRowDirty = firstRowFilled;
				while (firstRowDirty - 1 >= 0 && isDirtyRow(board[firstRowDirty - 1])) {
					firstRowDirty--;
				}
				moveRowsToBottom(board, firstRowDirty, firstRowFilled - 1);
			}
		};

		var isGameOver = function (game) {
			return isDirtyRow(game.board[0]);
		};

		if (!game.isGameOver && isValidOnBoard(game.board, newShape, newPos)) {
			if (landOnBoard(game.board, newShape, newPos)) {
				addShapeOnBoard(game.board, newShape, newPos);
				removeFilledLines(game.board);
				initShape(game);
			}
			else {
				game.currentShape = newShape;
				game.currentPos = newPos;
			}
			game.isGameOver = isGameOver(game);
		}
	}

	return Game;
});