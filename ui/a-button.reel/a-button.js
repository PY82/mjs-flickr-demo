/**
 * @module ui/bar.reel
 * @requires montage/ui/component
 */

var AbstractButton = require( "montage/ui/base/abstract-button" ).AbstractButton;

/**
 * @class Bar
 * @extends Component
 */
exports.AButton = AbstractButton.specialize( /** @lends Button# */ {

	hasTemplate: {value: true},

	constructor: {
		value: function Button() {
			this.super();
		}
	}
} );
