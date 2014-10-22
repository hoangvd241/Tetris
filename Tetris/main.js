/*global define*/
/*global require*/

require.config({
	paths: {
		'jquery': 'jquery-1.11.1',
		'Game': 'Game',
		'Event': 'Event',
		'IShape': 'IShape',
		'LZTShape': 'LZTShape',
		'Render': 'Render',
		'Shape': 'Shape',
		'ShapeFactory': 'ShapeFactory',
		'SShape': 'SShape'
	}
}
);

define(['jquery', 'Game', 'Render'], function ($, Game, Render) {
	$(document).ready(function () {
		var game;
		var render;

		var startGame = function (e) {
			if (e.which === 32) {
				e.preventDefault();
				$(document).unbind('keydown', startGame);

				game = new Game();
				render = new Render();

				game.bindDrawBoard(render.drawBoard);
				game.bindDrawShape(render.drawShape);
				game.bindGameOver(render.promptGameOver);

				$(document).keydown(controlGame);

				game.bindGameOver(function () {
					$(document).unbind('keydown', controlGame);
					clearInterval(dropDownInterval);
				});

				render.clearBoard();
				game.init(10, 20);

				var dropDownInterval = setInterval(function () {
					game.moveDown();
				}, 1000);
			}
		};

		var controlGame = function (e) {
			/*jshint white:false*/
			switch (e.which) {
				case 37:
					game.moveLeft();
					break;
				case 38:
					game.rotate();
					break;
				case 39:
					game.moveRight();
					break;
				case 40:
					game.moveDown();
					break;
				default:
					return;
			}
			/*jshint white:true*/
			e.preventDefault();
		};

		$(document).keydown(startGame);
	});
});