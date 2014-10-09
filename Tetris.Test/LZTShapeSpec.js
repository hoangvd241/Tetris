/*global define*/
/*global describe, it, expect, beforeEach */

define(
['../Tetris/LZTShape'],
function (LZTShape)
{
	describe('LZTShape test', function ()
	{
		var tShape, lShape, zShape;
		beforeEach(function () {
			tShape = LZTShape.createTShape();
			lShape = LZTShape.createLShape();
			zShape = LZTShape.createZShape();
		});

		it('rotate', function ()
		{
			expect(tShape.rotate().arr).toEqual([[0, 1, 0], [0, 1, 1], [0, 1, 0]]);
			expect(lShape.rotate().arr).toEqual([[1, 1, 1], [1, 0, 0], [0, 0, 0]]);
			expect(zShape.rotate().arr).toEqual([[0, 1, 0], [0, 1, 1], [0, 0, 1]]);
		});

		it('positionsOnBoard', function () {
			var positionsOnBoard = tShape.positionsOnBoard({ x: 2, y: 2 });
			expect(positionsOnBoard.length).toEqual(4);
			expect(positionsOnBoard).toContain({ x: 2, y: 3 });
			expect(positionsOnBoard).toContain({ x: 3, y: 2 });
			expect(positionsOnBoard).toContain({ x: 3, y: 3 });
			expect(positionsOnBoard).toContain({ x: 3, y: 4 });

			positionsOnBoard = lShape.positionsOnBoard({ x: 2, y: 2 });
			expect(positionsOnBoard.length).toEqual(4);
			expect(positionsOnBoard).toContain({ x: 2, y: 2 });
			expect(positionsOnBoard).toContain({ x: 3, y: 2 });
			expect(positionsOnBoard).toContain({ x: 4, y: 2 });
			expect(positionsOnBoard).toContain({ x: 4, y: 3 });

			positionsOnBoard = zShape.positionsOnBoard({ x: 2, y: 2 });
			expect(positionsOnBoard.length).toEqual(4);
			expect(positionsOnBoard).toContain({ x: 2, y: 3 });
			expect(positionsOnBoard).toContain({ x: 2, y: 4 });
			expect(positionsOnBoard).toContain({ x: 3, y: 2 });
			expect(positionsOnBoard).toContain({ x: 3, y: 3 });
		});
	});
});