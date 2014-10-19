/*global define */
/*global describe, it, setFixtures, expect */

define(['jquery', 'Render', 'jasmine-jquery'],
function ($, Render) {
	describe('Render test', function () {
		it('drawBoard', function () {
			setFixtures('<div id="boardContainer"></div>');
			var render = new Render();
			render.drawBoard([[0, 0], [1, 0]]);
			expect($('#boardContainer').html()).toEqual('<div id="node-0-0"></div><div id="node-0-1"></div><div id="node-1-0" class="' + Render.boardFilledClass + '"></div><div id="node-1-1"></div>');
		});

		it('drawShape', function () {
			setFixtures('<div id="boardContainer"><div id="node-0-0" class="' + Render.shapeFilledClass + '"></div><div id="node-0-1"></div><div id="node-1-0"></div><div id="node-1-1"></div></div>');
			var render = new Render();
			render.drawShape({ oldPos: [{ x: 0, y: 0 }], newPos: [{ x: 0, y: 1 }] });
			expect($('#boardContainer').html()).toEqual('<div id="node-0-0"></div><div id="node-0-1" class="' + Render.shapeFilledClass + '"></div><div id="node-1-0"></div><div id="node-1-1"></div>');
		});
	});
});