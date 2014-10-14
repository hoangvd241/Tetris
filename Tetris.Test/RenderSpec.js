/*global define */
/*global describe, it, setFixtures, expect */

define(['jquery', 'Render', 'Game', 'jasmine-jquery'],
function ($, Render, Game) {
	describe('Render test', function () {
		it('init', function () {
			setFixtures('<div id="boardContainer"></div>');
			var game = new Game(2, 2);
			game.board = [[0, 0], [1, 0]];
			var render = new Render(game);
			render.init();
			expect($('#boardContainer').html()).toEqual('<div id="0-0" class="emptyPosition"></div><div id="0-1" class="emptyPosition"></div><div id="1-0" class="filledPosition"></div><div id="1-1" class="emptyPosition"></div>');
		});
	});
});