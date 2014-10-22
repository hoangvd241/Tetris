/*global define*/

define(['Shape'],
function (Shape) {
	function IShape() {
		Shape.call(this, [[1], [1], [1], [1]], 'I');
	}

	IShape.prototype = Object.create(Shape.prototype);
	IShape.prototype.constructor = IShape;

	IShape.prototype.rotate = function () {
		var newArr = this.arr.length === 1 ? [[1], [1], [1], [1]] : [[1, 1, 1, 1]];
		var result = new IShape();
		result.arr = newArr;
		result.name = this.name;
		return result;
	};

	return IShape;
});