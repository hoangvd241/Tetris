/*global define*/
/*global describe, it, expect */

define(
['../Tetris/IShape'],
function (IShape)
{
	describe('IShape test', function ()
	{
		it('rotate', function ()
		{
			expect(new IShape().rotateLeft().arr).toEqual([[1, 1, 1, 1]]);
			expect(new IShape().rotateLeft().rotateRight().arr).toEqual([[1], [1], [1], [1]]);
		});
	});
});