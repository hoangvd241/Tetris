/*global define */
/*global describe expect it*/

define(['../Tetris/Game'], function (Game)
{
	describe("Game test", function ()
	{
		it("isGameOver", function ()
		{
			var game = new Game(2, 2);
			expect(game.isGameOver()).toBe(false);
			game.board[1][1] = 1;
			game.board[1][0] = 1;
			expect(game.isGameOver()).toBe(true);
		});

		it("removeFilledLines", function ()
		{
			var game = new Game(5, 3);
			game.board = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 1], [1, 1, 1]];
			game.removeFilledLines();
			expect(game.board).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [0, 1, 0]]);
		});
	});
});