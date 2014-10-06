/*global define*/
/*global describe, it, expect */

define(
['../Tetris/LZTShape'],
function (LZTShape)
{
	describe('LZTShape test', function ()
	{
		it('rotate left', function ()
		{
			expect(LZTShape.createTShape().rotateLeft().arr).toEqual([[0, 1, 0], [1, 1, 0], [0, 1, 0]]);
			expect(LZTShape.createLShape().rotateLeft().arr).toEqual([[0, 0, 0], [0, 0, 1], [1, 1, 1]]);
			expect(LZTShape.createZShape().rotateLeft().arr).toEqual([[1, 0, 0], [1, 1, 0], [0, 1, 0]]);
		});

		it('rotate right', function ()
		{
			expect(LZTShape.createTShape().rotateRight().arr).toEqual([[0, 1, 0], [0, 1, 1], [0, 1, 0]]);
			expect(LZTShape.createLShape().rotateRight().arr).toEqual([[1, 1, 1], [1, 0, 0], [0, 0, 0]]);
			expect(LZTShape.createZShape().rotateRight().arr).toEqual([[0, 1, 0], [0, 1, 1], [0, 0, 1]]);
		});
	});
});