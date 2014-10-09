/*global define*/

define(['./LZTShape', './SShape', './IShape'],
function (LZTShape, SShape, IShape) {
	function ShapeFactory() {
	}

	ShapeFactory.generateRandomShape = function () {
		var randomNum = Math.floor(Math.random() * 4);

		/*jshint white:false*/
		switch (randomNum) {
			case 0:
				return new LZTShape.createLShape();
			case 1:
				return new LZTShape.createTShape();
			case 2:
				return new LZTShape.createZShape();
			case 3:
				return new IShape();
			default:
				return new SShape();
		}
		/*jshint white:true*/
	};

	return ShapeFactory;
});