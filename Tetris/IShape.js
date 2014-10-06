/*global define*/

define(['./Shape'],
function (Shape)
{
	function IShape()
	{
		Shape.call(this, [[1], [1], [1], [1]]);
	}

	IShape.prototype = Object.create(Shape.prototype);
	IShape.prototype.constructor = IShape;

	function rotate(arr)
	{
		var newArr = arr.length === 1 ? [[1], [1], [1], [1]] : [[1, 1, 1, 1]];
		var result = new IShape();
		result.arr = newArr;
		return result;
	}

	IShape.prototype.rotateLeft = function () { return rotate(this.arr); };
	IShape.prototype.rotateRight = function () { return rotate(this.arr); };

	return IShape;
});