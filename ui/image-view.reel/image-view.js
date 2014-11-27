/**
 * Created by peter on 2014/11/24.
 */

var Component = require("montage/ui/component").Component;

exports.ImageView = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Bar() {
            this.super();
            this._searchValue = '';
        }
    },

    templateDidLoad:{
        value:function(){

        }
    },

    enterDocument:{
        value:function(firstTime){
        }
    }
});