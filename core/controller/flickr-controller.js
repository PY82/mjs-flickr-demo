/**
 * Created by peter on 2014/11/20.
 */
var Montage = require("montage").Montage,
    FlickrService = require("../service/flickr-service").FlickrService;

exports.FlickrController = Montage.specialize({
    constructor:{
      value: function FlickrController() {
      }
    },

    apiUrl:{
        set: function (val) {
            this._apiUrl = val;
        },
        get:function(){
            return this._apiUrl;
        }
    },

    searchTerm:{
        value:null
    },

    flickrService:{
        value:null
    },

    images:{
        value:null
    },

    handleApiUrlChange: {
        value: function() {
            if(!this.apiUrl){
                return;
            }
            this.flickrService = new FlickrService(this.apiUrl, 'c9128762569dd8cff6813b73b02996de');

            //get post list
            this.initPostData();
        }

    },

    initPostData: {
        value: function() {
            var self = this;

            this.flickrService.getData(this.searchTerm, function( result ) {
                var images = [];
                for ( var i = 0; i < result.photos.photo.length; i++ ) {
                    images.push(result.photos.photo[i]);
                }
                self.images = []; //If directly set images, the render not change when first time set it. Not sure why, set it to empty firs to workaround
                self.images = images;
            } );
        }
    },

    didCreate:{
        value: function() {
            this.addPathChangeListener( "searchTerm", this, 'handleSearchTermChange' );
            this.addPathChangeListener( "apiUrl", this, "handleApiUrlChange" );
        }
    },

    handleSearchTermChange: {
        value: function( value ) {
            var self = this;
            if(!value){
                return;
            }
           this.initPostData();
        }
    },

    handleSearchKeyPress:{
        value:function(){
            alert('test');
        }
    }
});

