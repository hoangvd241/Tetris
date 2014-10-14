/*global define */
/*global describe expect it beforeEach*/

define(['Game', 'LZTShape', 'SShape'], function (Game, LZTShape, SShape)
{
	describe("Game test", function ()
	{
		var game, oldPos, oldShape;
		beforeEach(function () {
			game = new Game(8, 11);
							//col: 0, 1, 2, 3, 4, 5, 6, 7, 8
			game.board = [[0, 0, 0, 0, 0, 0, 0, 0, 0], //row 0
										[0, 0, 0, 0, 0, 0, 0, 0, 0], //1
										[0, 0, 0, 0, 0, 0, 0, 0, 0], //2
										[0, 0, 0, 0, 0, 0, 0, 0, 1], //3
										[0, 0, 0, 1, 0, 0, 0, 0, 1], //4
										[0, 0, 0, 1, 0, 0, 0, 0, 1], //5
										[0, 0, 0, 1, 0, 0, 0, 0, 1], //6
										[1, 0, 0, 1, 0, 0, 0, 0, 1], //7
										[1, 0, 0, 1, 1, 0, 0, 0, 1], //8
										[1, 1, 0, 1, 1, 0, 0, 0, 1], //9
										[1, 1, 1, 1, 1, 1, 0, 1, 1], //10
										[1, 1, 1, 1, 1, 1, 0, 1, 1]]; //11
			game.currentShape = LZTShape.createLShape();
			game.currentPos = { x: 2, y: 5 };
			oldPos = game.currentPos;
			oldShape = game.currentShape;
		});

		it('rotate ok', function () {
			game.rotate();
			expect(game.currentPos).toEqual(oldPos);
			expect(game.currentShape.arr).toEqual(oldShape.rotate().arr);
		});

		it('rotateCurrentShape not ok', function () {
			game.currentPos = { x: 3, y: 6 };
			game.rotate();
			expect(game.currentPos).toEqual({ x: 3, y: 6 });
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});

		it('moveLeft ok', function () {
			game.moveLeft();
			expect(game.currentPos).toEqual({ x: oldPos.x, y: oldPos.y - 1 });
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});

		it('moveLeft not ok', function () {
			game.currentPos = { x: 2, y: 4 };
			game.moveLeft();
			expect(game.currentPos).toEqual({ x: 2, y: 4 });
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});

		it('moveRight ok', function () {
			expect(game.currentPos).toEqual(oldPos);
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});

		it('moveRight not ok', function () {
			game.currentPos = { x: 2, y: 6 };
			game.moveRight();
			expect(game.currentPos).toEqual({ x: 2, y: 6 });
			expect(game.currentShape).toEqual(oldShape);
		});

		it('moveDown ok', function () {
			game.moveDown();
			expect(game.currentPos).toEqual({ x: oldPos.x + 1, y: oldPos.y });
			expect(game.currentShape.arr).toEqual(oldShape.arr);
		});

		it('dimiss filled lines', function () {
			game.currentPos = { x: 7, y: 5 };
			game.rotate();
			game.rotate();
			game.moveLeft();
			expect(game.currentPos).toEqual({ x: 7, y: 4 });
			game.moveDown();
			expect(game.currentPos).toEqual({ x: 8, y: 4 });
			game.moveDown();
			expect(game.currentPos).toEqual({ x: 9, y: 4 });
			game.moveDown();
														//col: 0, 1, 2, 3, 4, 5, 6, 7, 8
			expect(game.board).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0],
																	[0, 0, 0, 0, 0, 0, 0, 0, 0],
																	[0, 0, 0, 0, 0, 0, 0, 0, 0],
																	[0, 0, 0, 0, 0, 0, 0, 0, 0],
																	[0, 0, 0, 0, 0, 0, 0, 0, 0],
																	[0, 0, 0, 0, 0, 0, 0, 0, 1],
																	[0, 0, 0, 1, 0, 0, 0, 0, 1],
																	[0, 0, 0, 1, 0, 0, 0, 0, 1],
																	[0, 0, 0, 1, 0, 0, 0, 0, 1],
																	[1, 0, 0, 1, 0, 0, 0, 0, 1],
																	[1, 0, 0, 1, 1, 0, 0, 0, 1],
																	[1, 1, 0, 1, 1, 1, 1, 0, 1]]);
			expect(game.currentPos.x).toEqual(0);
			expect(game).not.toEqual(null);
		});

		it('moveDown land ok', function () {
			game.currentPos = { x: 0, y: 3 };
			game.moveDown();
			game.moveDown();
														//col: 0, 1, 2, 3, 4, 5, 6, 7, 8
			expect(game.board).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0], //row 0
																	[0, 0, 0, 1, 0, 0, 0, 0, 0], //1
																	[0, 0, 0, 1, 0, 0, 0, 0, 0], //2
																	[0, 0, 0, 1, 1, 0, 0, 0, 1], //3
																	[0, 0, 0, 1, 0, 0, 0, 0, 1], //4
																	[0, 0, 0, 1, 0, 0, 0, 0, 1], //5
																	[0, 0, 0, 1, 0, 0, 0, 0, 1], //6
																	[1, 0, 0, 1, 0, 0, 0, 0, 1], //7
																	[1, 0, 0, 1, 1, 0, 0, 0, 1], //8
																	[1, 1, 0, 1, 1, 0, 0, 0, 1], //9
																	[1, 1, 1, 1, 1, 1, 0, 1, 1], //10
																	[1, 1, 1, 1, 1, 1, 0, 1, 1]]); //11
			expect(game.currentPos.x).toEqual(0);
		});

		it('game over', function () {
			game.board = [[0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0],
										[0, 1, 0, 1, 0, 1],
										[0, 1, 0, 1, 0, 1]];
			game.currentPos = { x: 0, y: 2 };
			game.currentShape = new SShape();
			game.moveDown();
			expect(game.isGameOver).toEqual(true);
		});
	});
});