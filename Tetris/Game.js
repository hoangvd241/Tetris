/*global define */

define(
function ()
{
	function Game(width, length)
	{
		this.width = width;
		this.length = length;

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

	//Game.

	Game.prototype.isGameOver = function ()
	{
		for (var i = 0; i < this.width; i++)
		{
			if (this.board[this.length - 1][i] == 0)
			{
				return false;
			}
		}
		return true;
	};

	return Game;
}
);