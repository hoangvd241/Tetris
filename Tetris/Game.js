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
		var resetBottomRows = function(array, startRow)
		{
			for(var i = startRow; i < array.length; i++)
			{
				for(var j = 0; j < array[0].length; j++)
				{
					array[i][j] = 0;
				}
			}
		}

		var moveRowsToBottom = function(array, startRow, endRow)
		{
			for(var i = endRow; i >= startRow; i--)
			{
				var idx = board.length - 1 - endRow + i;
				var tmp = array[idx];
				array[idx] = array[i];
				array[i] = tmp;
			}
		}

		var board = this.board;

		var lastIndexOfContinuousFilledLine = board.length;
		while (lastIndexOfContinuousFilledLine - 1 > 0 && isLineFilled(board[lastIndexOfContinuousFilledLine - 1]))
		{
			lastIndexOfContinuousFilledLine--;
		}

		resetBottomRows(this.board, lastIndexOfContinuousFilledLine);

		if (lastIndexOfContinuousFilledLine != board.length)
		{
			for (var i = board.length - 1 ; i > 0 ; i--)
			{
				if (i >= lastIndexOfContinuousFilledLine)
				{
					board[i] = board[lastIndexOfContinuousFilledLine - (board.length - 1 - i)];
				}
				else
				{
					board[i] = new Array(board[0].length);
					for (var j = 0; j++; j < board[0].length)
					{
						board[i][j] = 0;
					}
				}
			}
		}
	};

	function doesRowOnlyContainValue(row, value)
	{
		for (var i = 0; i < row.length; i++)
		{
			if (row[i] !== value)
			{
				return false;
			}
		}
		return true;
	}

	function isEmptyRow(row)
	{
		return doesRowOnlyContainValue(row, 0);
	}

	function isFilledRow(row)
	{
		return doesRowOnlyContainValue(row, 1);
	}

	Game.prototype.isGameOver = function ()
	{
		return !isEmptyRow(this.board[0]);
	};

	return Game;
}
);