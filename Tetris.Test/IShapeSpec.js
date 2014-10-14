/*global define*/
/*global describe, it, expect, beforeEach */

define(
['IShape'],
function (IShape)
{
	describe('IShape test', function ()
	{
		var shape;
		beforeEach(function () {
			shape = new IShape();
		});

		it('rotate', function () {
			expect(shape.rotate().arr).toEqual([[1, 1, 1, 1]]);
			expect(shape.rotate().rotate().arr).toEqual([[1], [1], [1], [1]]);
		});

		it('postionsOnBoard', function () {
			var posOnBoard = shape.positionsOnBoard({ x: 2, y: 2 });
			expect(posOnBoard).toContain({ x: 2, y: 2 });
			expect(posOnBoard).toContain({ x: 3, y: 2 });
			expect(posOnBoard).toContain({ x: 4, y: 2 });
			expect(posOnBoard).toContain({ x: 5, y: 2 });
		});
	});
});