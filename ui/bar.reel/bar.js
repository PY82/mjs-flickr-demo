/**
 * Created by peter on 2014/11/21.
 */

var Component = require("montage/ui/component").Component;

exports.Bar = Component.specialize(/** @lends Bar# */ {
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
            this.addEventListener("mousedown", this)
        }
    },

    didDraw:{
        value:function(firstTime){
            var search = this.templateObjects.search.element;
            search.addEventListener("keydown", this);
        }
    },

    searchValue:{
        get:function(){
            return this._searchValue;
        },
        set:function(val){
            this._searchValue = val;
        }
    },

    handleAction:{
        value:function(event){
        }
    },
    handleEvent:{
        value:function(event){
        if(event._event.which == 13){
                this.searchValue = this.templateObjects.search.value;
            }
        }
    }
});