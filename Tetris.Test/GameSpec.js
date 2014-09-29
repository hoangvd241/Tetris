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
			game.board[1][0] = 1;
			game.board[1][1] = 1;
			expect(game.isGameOver()).toBe(true);
		});
	});
});