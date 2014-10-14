/*global define*/

define(function () {
	function Shape(arr, name) {
		this.arr = arr;
		this.name = name;
	}

	Shape.prototype.rotate = function () { throw "Implement in subclass"; };

	Shape.prototype.positionsOnBoard = function (posInBoard) {
		var result = [];
		for (var i = 0; i < this.arr.length; i++) {
			for (var j = 0; j < this.arr[i].length; j++) {
				if (this.arr[i][j] === 1) {
					result.push({ x: posInBoard.x + i, y: posInBoard.y + j });
				}
			}
		}
		return result;
	};

	return Shape;
});