/**
 * @module ui/bar.reel
 * @requires montage/ui/component
 */

var AbstractControl = require( "montage/ui/base/abstract-control").AbstractControl;

/**
 * @class Bar
 * @extends Component
 */
exports.TimeView = AbstractControl.specialize( /** @lends Button# */ {

	hasTemplate: {value: true},

	datetime: {
		set: function( val ) {
			if(!val) return;
			this._datetime = val;
			var pubDate = new Date(val * 1000);
			this.element.innerHTML =  'Taken in: ' + pubDate.getDay() + '/' + pubDate.getMonth() + '/' + pubDate.getFullYear() + ' '+pubDate.getHours()+':'+pubDate.getMinutes() + ':' + pubDate.getSeconds();
		},

		get: function() {
			return this._datetime;
		}
	},

	constructor: {
		value: function Button() {
			this.super();
		}
	}
} );
