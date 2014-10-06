/*global define*/

define(function ()
{
	//function Shape(shape)
	//{
	//	this.arr = getInitShapeArray(shape);
	//}

	function Shape(arr)
	{
		this.arr = arr;
	}

	function rotate3x3Arr(shape, clockwise)
	{
		var newArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
		for (var i = 0; i < 3; i++)
		{
			for (var j = 0; j < 3; j++)
			{
				if (clockwise)
				{
					newArr[j][2 - i] = shape.arr[i][j];

				}
				else
				{
					newArr[2 - j][i] = shape.arr[i][j];
				}
			}
		}
		shape.arr = newArr;
		return shape;
	};

	Shape.prototype.rotateLeft = function ()
	{
		return rotate3x3Arr(this, false);
	}

	Shape.prototype.rotateRight = function ()
	{
		return rotate3x3Arr(this, true);
	}

	//function getInitShapeArray(shape)
	//{
	//	switch (shape)
	//	{
	//	case "T":
	//		return [[0, 1, 0],
	//					[1, 1, 1],
	//					[0, 0, 0]];
	//	case "L":
	//		return [[1, 0, 0],
	//						[1, 0, 0],
	//						[1, 1, 0]];
	//	case "S":
	//		return [[1, 1],
	//						[1, 1]];
	//	case "I":
	//		return [[1], [1], [1], [1]];
	//	case "Z":
	//		return [[0, 1, 1],
	//						[1, 1, 0],
	//						[0, 0, 0]];
	//	default:
	//		return [];
	//	}
	//}

	//function rotate(arr, clockwise)
	//{
	//	switch (arr.length)
	//	{
	//		case 1:
	//			return [[1], [1], [1], [1]];
	//		case 2:
	//			return arr;
	//		case 3:
	//			var rotatedArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	//			for (var i = 0; i < 3; i++)
	//			{
	//				for (var j = 0; j < 3; j++)
	//				{
	//					if (clockwise)
	//					{
	//						rotatedArr[j][2 - i] = arr[i][j];

	//					}
	//					else
	//					{
	//						rotatedArr[2 - j][i] = arr[i][j];
	//					}
	//				}
	//			}
	//			return rotatedArr;
	//		case 4:
	//			return [1, 1, 1, 1];
	//		default:
	//			throw 'Invalid shape array';
	//	}
	//}

	//Shape.prototype.rotateClockwise = function ()
	//{
	//	var result = new Shape('');
	//	result.arr = rotate(this.arr, true);
	//	return result;
	//};

	//Shape.prototype.rotateCounterClockwise = function ()
	//{
	//	var result = new Shape('');
	//	result.arr = rotate(this.arr, false);
	//	return result;
	//};

	//Shape.prototype.positionsInBoard = function(centerPos)
	//{
	//	var result = [];
	//	var shapeArr = this.shapeArr;
	//	switch(shapeArr.length)
	//	{
	//		case 1:
	//			for(var j = 0; j < shapeArr[0].length; j++)
	//			{
	//				result.push({ x: centerPos.x, y: centerPos.y - 1 + j });
	//			}
	//		case 2:
	//			for(var i= 0; i < shapeArr.length; i++)
	//			{
	//				for(var )
	//			}
	//	}
	//}

	return Shape;
});