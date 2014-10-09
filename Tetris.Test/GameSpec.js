/*global define */
/*global describe expect it beforeEach*/

define(['../Tetris/Game', '../Tetris/LZTShape'], function (Game, LZTShape)
{
	describe("Game test", function ()
	{
		var game, oldPos, oldShape;
		beforeEach(function () {
			game = new Game(2, 2);
			game.board = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 2, 0, 0, 0],
										[0, 0, 0, 0, 0, 2, 0, 0, 1],
										[0, 0, 0, 1, 0, 2, 2, 0, 1],
										[0, 0, 0, 1, 0, 0, 0, 0, 1],
										[0, 0, 0, 1, 0, 0, 0, 0, 1],
										[1, 0, 0, 1, 0, 0, 0, 0, 1],
										[1, 0, 0, 1, 1, 0, 0, 0, 1],
										[1, 1, 0, 1, 1, 0, 0, 0, 1],
										[1, 1, 1, 1, 1, 1, 0, 1, 1],
										[1, 1, 1, 1, 1, 1, 0, 1, 1]];
			game.currentShape = LZTShape.createLShape();
			game.currentPos = { x: 2, y: 5 };
			oldPos = game.currentPos;
			oldShape = game.currentShape;
		});

		it('rotateCurrentShape ok', function () {
			game.rotateCurrentShape();
			expect(game.currentPos).toEqual(oldPos);
			expect(game.currentShape.arr).toEqual(oldShape.rotate().arr);
		});

		it('rotateCurrentShape not ok', function () {
			game.currentPos = { x: 3, y: 6 };
			game.rotateCurrentShape();
			expect(game.currentPos).toEqual({ x: 3, y: 6 });
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});

		it('moveLeft ok', function () {
			game.moveLeft();
			expect(game.currentPos).toEqual({ x: oldPos.x, y: oldPos.y - 1 });
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});

		it('moveDown ok', function () {
			game.moveDown();
			expect(game.currentPos).toEqual({ x: oldPos.x + 1, y: oldPos.y });
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});
	});
});