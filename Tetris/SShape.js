/*global define*/

define(['Shape'],
function (Shape) {
	function SShape() {
		Shape.call(this, [[1, 1], [1, 1]], 'S');
	}

	SShape.prototype = Object.create(Shape.prototype);
	SShape.prototype.constructor = SShape;

	SShape.prototype.rotate = function () { return this; };

	return SShape;
});