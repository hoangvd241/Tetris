/*global define*/

define(
['./Shape'],
function (Shape)
{
	function LZTShape(arr)
	{
		Shape.call(this, arr);
	}

	LZTShape.prototype = Object.create(Shape.prototype);
	LZTShape.prototype.constructor = LZTShape;

	LZTShape.createLShape = function () { return new LZTShape([[1, 0, 0], [1, 0, 0], [1, 1, 0]]); };
	LZTShape.createTShape = function () { return new LZTShape([[0, 1, 0], [1, 1, 1], [0, 0, 0]]); };
	LZTShape.createZShape = function () { return new LZTShape([[0, 1, 1], [1, 1, 0], [0, 0, 0]]); };

	function rotate(arr, clockwise)
	{
		var rotatedArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
		for (var i = 0; i < 3; i++)
		{
			for (var j = 0; j < 3; j++)
			{
				if (clockwise)
				{
					rotatedArr[j][2 - i] = arr[i][j];

				}
				else
				{
					rotatedArr[2 - j][i] = arr[i][j];
				}
			}
		}
		return new LZTShape(rotatedArr);
	}

	LZTShape.prototype.rotateLeft = function () { return rotate(this.arr, false); };
	LZTShape.prototype.rotateRight = function () { return rotate(this.arr, true); };

	return LZTShape;
});