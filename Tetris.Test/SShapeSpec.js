/*global define*/
/*global describe, it, expect */

define(
['../Tetris/SShape'],
function (SShape)
{
	describe('SShape test', function ()
	{
		it('rotate', function ()
		{
			expect(new SShape().rotateLeft().arr).toEqual([[1, 1], [1, 1]]);
			expect(new SShape().rotateRight().arr).toEqual([[1, 1], [1, 1]]);
		});
	});
});