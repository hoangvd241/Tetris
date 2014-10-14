/*global define*/
require.config({
	paths: {
		'Controller': 'Controller',
		'jquery' : 'jquery-1.11.1'
	}
}
);

define(['jquery', 'Controller'], function ($, Controller) {
	$(document).ready(function () {
		$(window).bind('hashchange', function () {
			Controller().route(!location.hash ? '/' : location.hash.replace('#!', ''));
		}).trigger('hashchange');
	});
});