/*global define*/

define(['./Shape'],
function (Shape)
{
	function SShape()
	{
		Shape.call(this, [[1, 1], [1, 1]]);
	}

	SShape.prototype = Object.create(Shape.prototype);
	SShape.prototype.constructor = SShape;

	SShape.prototype.rotateLeft = function () { return this; };
	SShape.prototype.rotateRight = function () { return this; };

	return SShape;
});