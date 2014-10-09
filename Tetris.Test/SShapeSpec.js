/*global define*/
/*global describe, it, expect, beforeEach */

define(
['../Tetris/SShape'],
function (SShape)
{
	describe('SShape test', function ()
	{
		var shape;
		beforeEach(function () {
			shape = new SShape();
		});

		it('rotate', function ()
		{
			expect(shape.rotate().arr).toEqual([[1, 1], [1, 1]]);
		});

		it('positionsOnBoard', function () {
			var posOnBoard = shape.positionsOnBoard({ x: 2, y: 2 });
			expect(posOnBoard).toContain({ x: 2, y: 2 });
			expect(posOnBoard).toContain({ x: 2, y: 3 });
			expect(posOnBoard).toContain({ x: 3, y: 2 });
			expect(posOnBoard).toContain({ x: 3, y: 3 });
		});
	});
});