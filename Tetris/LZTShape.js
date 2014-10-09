/*global define*/

define(
['./Shape'],
function (Shape) {
	function LZTShape(arr) {
		Shape.call(this, arr);
	}

	LZTShape.prototype = Object.create(Shape.prototype);
	LZTShape.prototype.constructor = LZTShape;

	LZTShape.createLShape = function () { return new LZTShape([[1, 0, 0], [1, 0, 0], [1, 1, 0]]); };
	LZTShape.createTShape = function () { return new LZTShape([[0, 1, 0], [1, 1, 1], [0, 0, 0]]); };
	LZTShape.createZShape = function () { return new LZTShape([[0, 1, 1], [1, 1, 0], [0, 0, 0]]); };

	LZTShape.prototype.rotate = function () {
		var rotatedArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				rotatedArr[j][2 - i] = this.arr[i][j];
			}
		}
		return new LZTShape(rotatedArr);
	};

	return LZTShape;
});