/*global define*/

define(
['jquery'],
function ($)
{
	function Render(game)
	{
		this.game = game;
	}

	var boardContainerId = '#boardContainer';

	Render.prototype.init = function () {
		var game = this.game;
		var gameBoard = game.board;
		var board = $(boardContainerId).empty();
		var positions = [];

		for (var i = 0; i < gameBoard.length; i++) {
			for (var j = 0; j < gameBoard[0].length; j++)
			{
				var id = i + '-' + j;
				var $node = $('<div />', { 
					id: id,
					'class': gameBoard[i][j] === 1 ? 'filledPosition' : 'emptyPosition'
				});
				positions[id] = $node;
				board.append($node);
			}
		}

		this.board = board;
		this.positions = positions;
	};

	Render.prototype.drawShape = function (shape, shapePos, undraw) {
		var shapPositions = shape.positionsOnBoard(shapePos);
		for (var i = 0; i < shapPositions.length; i++) {
			var pos = shapPositions[i];
			this.positions[pos.x + '-' + pos.y].className = undraw ? 'emptyPosition' : shape.name + 'shape';
		}
	};

	return Render;
});