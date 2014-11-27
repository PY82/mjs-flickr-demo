/**
 * Created by peter on 2014/11/25.
 */
var Component = require("montage/ui/component").Component;

exports.ImageShow = Component.specialize(/** @lends Main# */ {

    photo:{
      get:function(){
          return this._photo;
      },
        set:function(val){
            if(!val) return;
            this._photo = val;
            this.templateObjects.owner.classList.add('PhotoShow-picClose--open');
        }
    },
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

    didDraw:{
        value:function(firstTime){
            var closebtn = this.templateObjects.closeBtn.element;
            closebtn.addEventListener("click", this);
        }
    },

    handleEvent:{
        value:function(event){
            if(event.currentTarget.className.indexOf('PhotoShow-picClose') >= 0){
                this.templateObjects.owner.classList.delete('PhotoShow-picClose--open');
            }
        }
    },

    enterDocument:{
        value:function(firstTime){
            if(firstTime){
            }
        }
    }
});