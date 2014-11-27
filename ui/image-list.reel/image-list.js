/**
 * Created by peter on 2014/11/24.
 */
var Component = require("montage/ui/component").Component;

/**
 * @class List
 * @extends Component
 */
exports.ImageList = Component.specialize( /** @lends List# */ {
    constructor: {
        value: function List() {
            this.super();
        }
    },

    contentController: {
        value: null
    },

    enterDocument: {
        value: function( firstTime ) {
            if ( firstTime ) {

            }
        }
    },

    selectedImage:{
        value:null
    },

    selectedIndex:{
        value:0
    },

    didDraw:{
        value:function(){
        }
    },

    templateDidLoad: {
        value: function() {
            this.addPathChangeListener( "templateObjects.items.selection.0", this, "handleSelection" );
        }
    },

    handleSelection: {
        value: function( selected ) {
            debugger
            if(!selected) return;
            if(!this.contentController) return;
            if(!this.contentController.images) return;

            this.selectedImage = selected;
            this.templateObjects.items.contentController.clearSelection();
        }
    }
});