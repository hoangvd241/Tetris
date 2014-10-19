/*global require*/
require.config({
	baseUrl : '../Tetris',
	paths: {
		underscore : 'underscore',
		jquery: 'jquery-1.11.1',
		Render: 'Render',
		Game: 'Game',
		Shape: 'Shape',
		LZTShape: 'LZTShape',
		IShape: 'IShape',
		SShape: 'SShape',
		ShapeFactory: 'ShapeFactory',
		Event : 'Event',
		'jasmine-jquery' : '../Tetris.Test/jasmine-jquery'
	},
	shim: {
		'jasmine-jquery' : ['jquery']
	}
});