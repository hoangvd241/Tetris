/*global define*/

define(
['jquery'],
function ($)
{
	function Render()
	{
	}

	Render.boardContainerId = 'boardContainer';
	Render.boardFilledClass = 'boardFilled';
	Render.shapeFilledClass = 'shapeFilled';

	Render.prototype.drawBoard = function (board) {
		var boardContainer = $('#' + Render.boardContainerId).empty();
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board[0].length; j++) {
				var id = getNodeId(i, j);
				var node = $('#' + id)[0];
				if (!node) {
					node = $('<div />', { id: id });
					boardContainer.append(node);
				}
				if (board[i][j] === 1) {
					node.addClass(Render.boardFilledClass);
				}
				else {
					node.removeAttr('class');
				}
			}
		}
	};

	function getNodeId(i, j)
	{
		return 'node-' + i + '-' + j;
	}

	Render.prototype.drawShape = function (posChanged) {
		var oldPos = posChanged.oldPos;
		var newPos = posChanged.newPos;
		for (var i = 0; i < oldPos.length; i++) {
			$('#' + getNodeId(oldPos[i].x, oldPos[i].y)).removeAttr('class');
		}

		for (var i = 0; i < newPos.length; i++) {
			$('#' + getNodeId(newPos[i].x, newPos[i].y)).addClass(Render.shapeFilledClass);
		}
	};

	return Render;
});