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
		var boardContainer = $('#' + Render.boardContainerId);
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board[0].length; j++) {
				var id = getNodeId(i, j);
				var node = $('#' + id);
				if (node.length === 0) {
					node = $('<div />', { id: id });
					boardContainer.append(node);
				}
				node.removeAttr('class');
				if (board[i][j] === 1) {
					node.addClass(Render.boardFilledClass);
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

		for (var j = 0; j < newPos.length; j++) {
			$('#' + getNodeId(newPos[j].x, newPos[j].y)).addClass(posChanged.name + Render.shapeFilledClass);
		}
	};

	Render.prototype.promptGameOver = function () {
		var boardContainer = $('#' + Render.boardContainerId).empty();
		$('<h1></h1>').text('Game Over').appendTo(boardContainer);
	};

	Render.prototype.clearBoard = function () {
		return $('#' + Render.boardContainerId).empty();
	};

	return Render;
});