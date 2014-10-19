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
	//$(document).ready(function () {
	//	$(window).bind('hashchange', function () {
	//		Controller.route(!location.hash ? '/' : location.hash.replace('#!', ''));
	//	}).trigger('hashchange');

	//	$('a').each(function () {
	//		var a = $(this);
	//		if (a.attr('href').substring(0, 4) != 'http') {
	//			a.bind('touchstart', function () {
	//				e.preventDefault();
	//				location.hash = $(this).attr('href');
	//			})
	//		}
	//	});

	//	setTimeout(function () {
	//		$('#pages').addClass('enabletransition');
	//	}, 500);
	//});

	$(document).ready(function () {
		var game = new Game();
		var render = new Render();
		game.bindDrawBoard(render.drawBoard);
		game.bindDrawShape(render.drawShape);

		$(document).keydown(function (e) {
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
			e.preventDefault;
		});

		game.init(10, 20);


	});
});