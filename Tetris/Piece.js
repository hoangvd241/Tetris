/*global define*/

define(function ()
{
	function Piece(shape)
	{
		this.shapeArr = getInitShapeArray(shape);
	}

	function getInitShapeArray(shape)
	{
		switch (shape)
		{
		case "T":
			return [[0, 1, 0],
						[1, 1, 1],
						[0, 0, 0]];
		case "L":
			return [[1, 0, 0],
							[1, 0, 0],
							[1, 1, 0]];
		case "S":
			return [[1, 1],
							[1, 1]];
		case "I":
			return [[1], [1], [1], [1]];
		case "Z":
			return [[0, 1, 1],
							[1, 1, 0],
							[0, 0, 0]];
		default:
			return [];
		}
	}

	function rotate(arr, clockwise)
	{
		switch (arr.length)
		{
		case 1:
			return [[1], [1], [1], [1]];
		case 2:
			return arr;
		case 3:
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
			return rotatedArr;
		case 4:
			return [1, 1, 1, 1];
		default:
			throw 'Invalid shape array';
		}
	}

	Piece.prototype.rotateClockwise = function ()
	{
		var result = new Piece('');
		result.shapeArr = rotate(this.shapeArr, true);
		return result;
	};

	Piece.prototype.rotateCounterClockwise = function ()
	{
		var result = new Piece('');
		result.shapeArr = rotate(this.shapeArr, false);
		return result;
	};

	return Piece;
});