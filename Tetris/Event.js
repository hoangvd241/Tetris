/*global define*/

/* Event system taken from https://gist.github.com/cedmax/1000193 */

define(function () {
	var Event = function (_) {
		return {
			sub: function (a, b) {
				(_[a] || (_[a] = [])).push(b);
			},
			pub: function (a, b, c, d) {
				for (d = -1, c = [].concat(_[a]) ; c[++d];) { c[d](b); }
			}
		};
	}({});

	return Event;
});