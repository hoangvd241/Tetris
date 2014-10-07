/*global define */

define(
function ()
{
	function Game(width, length)
	{
		this.board = new Array(length);
		for (var i = 0; i < length; i++)
		{
			this.board[i] = new Array(width);
			for (var j = 0; j < width; j++)
			{
				this.board[i][j] = 0;
			}
		}
	}

	Game.prototype.removeFilledLines = function ()
	{
		var resetBottomRows = function (array, startRow)
		{
			for (var i = startRow; i < array.length; i++)
			{
				for (var j = 0; j < array[0].length; j++)
				{
					array[i][j] = 0;
				}
			}
		};

		var moveRowsToBottom = function (array, startRow, endRow)
		{
			for (var i = endRow; i >= startRow; i--)
			{
				var idx = board.length - 1 - endRow + i;
				var tmp = array[idx];
				array[idx] = array[i];
				array[i] = tmp;
			}
		};

		var board = this.board;

		var firstRowFilled = board.length;
		while (firstRowFilled - 1 >= 0 && isFilledRow(board[firstRowFilled - 1]))
		{
			firstRowFilled--;
		}
		resetBottomRows(board, firstRowFilled);

		if (firstRowFilled < board.length)
		{
			var firstRowDirty = firstRowFilled;
			while (firstRowDirty - 1 >= 0 && isDirtyRow(board[firstRowDirty - 1]))
			{
				firstRowDirty--;
			}
			moveRowsToBottom(board, firstRowDirty, firstRowFilled - 1);
		}
	};

	function isFilledRow(row)
	{
		for (var i = 0; i < row.length; i++)
		{
			if (row[i] !== 1)
			{
				return false;
			}
		}
		return true;
	}

	function isDirtyRow(row)
	{
		for(var i=0; i < row.length; i++)
		{
			if (row[i] === 1)
			{
				return true;
			}
		}
		return false;
	}

	Game.prototype.isGameOver = function ()
	{
		return isDirtyRow(this.board[0]);
	};

	Game.prototype.rotateCurrentShapeLeft = function ()
	{
		move(this, this.currentShape, this.currentShape.rotateLeft(), this.currentPos, this.currentPos);
	}

	Game.prototype.rotateCurrentShapeRight = function ()
	{
		move(this, this.currentShape, this.currentShape.rotateRight(), this.currentPos, this.currentPos);
	}

	Game.prototype.moveDown = function()
	{
		move(this, this.currentShape, this.currentShape, this.currentPos, { x: this.currentPos.x + 1, y: this.currentPos.y });
	}

	function move(game, oldShape, newShape, oldPos, newPos)
	{
		if (isValidOnBoard(game.board, newShape, newPos))
		{
			if (landOnBoard(game.board, newShape, newPos))
			{
				addShapeOnBoard(game.board, newShape, newPos);

			}
			removeShapeFromBoard(game.board, oldShape, oldPos);
			addShapeOnBoard(game.board, newShape, newPos);
			game.currentShape = newShape;
			game.currentPos = newPos;
		}
	}

	function removeShapeFromBoard(board, shape, shapePos)
	{
		fillShapeOnBoard(board, shape, shapePos, 0);
	}

	function addShapeOnBoard(board, shape, shapePos)
	{
		var positionsInBoard = shape.positionsInBoard(shapePos);
		for (var i = 0; i < positionsInBoard.length; i++)
		{
			var pos = positionsInBoard[i];
			board[pos.x][pos.y] = 1;
		}
	}

	function fillShapeOnBoard(board, shape, shapePos, value)
	{

	}

	function landOnBoard(board, shape, shapePos)
	{
		var positionsInBoard = shape.positionsInBoard(shapePos);
		for(var i = 0; i < positionsInBoard.length; i++)
		{
			var pos = { x: positionsInBoard[i].x + 1, y: positionsInBoard[i].y };
			if (isInsideTheBoard(board, pos) && (pos.x == board.length -1 || board[pos.x][pos.y] === 1))
			{
				return true;
			}
		}
		return false;
	}

	function isValidOnBoard(board, shape, shapePos)
	{
		var positionsInBoard = shape.positionsInBoard(shapePos);
		for(var i = 0; i < positionsInBoard.length; i++)
		{
			var pos = positionsInBoard[i];
			if (!isInsideTheBoard(board, pos))
			{
				return false;
			}
			if (board[pos.x][pos.y] === 1)
			{
				return false;
			}
		}
		return true;
	}

	function isInsideTheBoard(board, pos)
	{
		return pos.x >= 0 && pos.x <= board.length - 1 && pos.y >= 0 && pos.y <= board[0].length - 1;
	}

	return Game;
}
);