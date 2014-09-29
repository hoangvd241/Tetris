/*global define */
/*global describe expect it*/

define(
['../Tetris/Piece'],
function (Piece)
{
	describe("Piece", function ()
	{
		it("rotate", function ()
		{
			var aPiece = new Piece("T");
			expect(aPiece.rotateClockwise().shapeArr).toEqual([[0, 1, 0], [0, 1, 1], [0, 1, 0]]);
			expect(aPiece.rotateCounterClockwise().shapeArr).toEqual([[0, 1, 0], [1, 1, 0], [0, 1, 0]]);
		});
	});
});