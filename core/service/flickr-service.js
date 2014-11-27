/**
 * Created by peter on 2014/11/20.
 */

var Montage = require("montage/core/core").Montage,
    Reqwest = require("./reqwest");

exports.FlickrService = Montage.specialize({

    apiUrl:{
      value:''
    },

    apiKey:{
        value:''
    },

    constructor:{
        value:function FlickrService(url, apiKey){
            this.apiUrl = url;
            this.apiKey = apiKey;
        }
    },

    getCategories:{
       value:function(){
               return [
                   {
                       'categoryName':'Sports',
                       'keyWords':'sports'
                   },
                   {
                       'categoryName':'Photography',
                       'keyWords':'photography'
                   },
                   {
                       'categoryName':'Building',
                       'keyWords':'Architecture  Building Bridge'
                   },
                   {
                       'categoryName':'Car',
                       'keyWords':'car'
                   },
                   {
                       'categoryName':'Cartoon',
                       'keyWords':'cartoon animation'
                   },
                   {
                       'categoryName':'Flowers',
                       'keyWords':'flower tree season'
                   },
                   {
                       'categoryName':'Wedding',
                       'keyWords':'wedding, dress'
                   },
                   {
                       'categoryName':'Foods',
                       'keyWords':'food drink restaurant'
                   },
                   {
                       'categoryName':'Design',
                       'keyWords':'design elements'
                   },
                   {
                       'categoryName':'Pets',
                       'keyWords':'pet'
                   },
                   {
                       'categoryName':'Travelling',
                       'keyWords':'travel'
                   },
                   {
                       'categoryName':'Kids',
                       'keyWords':'kid'
                   },
                   {
                       'categoryName':'Sciences',
                       'keyWords':'Science, Space, Military, Technology'
                   },
                   {
                       'categoryName':'Holiday',
                       'keyWords':'holiday,celebrations, kid'
                   },
                   {
                       'categoryName':'Animals',
                       'keyWords':'Animals, Insects, Fish, Reptiles'
                   }
               ];
       }
    },

    getData:{
        value:function(keywordText, handler){
            var filter = '';
            if(keywordText){
                filter = '?method=flickr.photos.search&format=json&per_page=50&height=250&api_key=' + this.apiKey +
                        '&extras=description, date_upload,date_taken, owner_name, last_update,url_sq,url_q, url_s, url_m, url_n, url_z, url_c, url_l,url_b, url_o&' +
                        'text=' + keywordText;
            }
            else{
                /*filter = '?method=flickr.photos.getRecent&format=json&per_page=50&height=250&api_key=' + this.apiKey +
                '&extras=description, date_upload,date_taken, owner_name, last_update, url_s, url_m, url_n, url_z, url_c, url_l, url_o&';
                */
                filter = '?method=flickr.photos.search&format=json&per_page=50&height=250&api_key=' + this.apiKey +
                '&extras=description, date_upload,date_taken, owner_name, last_update,url_sq, url_q, url_s, url_m, url_n, url_z, url_c, url_l,url_b, url_o&text=Chengdu';
            }

            this._makeRequest(this.apiUrl + '/' + filter, handler);
        }
    },

    jsonp: {
        value:function(url){
            var head = document.head;
            var script = document.createElement("script");

            script.setAttribute("src", url);
            head.appendChild(script);
            head.removeChild(script);
        }
    },

    _makeRequest:{
        value:function(url, handler){
            if (!url) {
                return;
            }

            request =  Reqwest({
                url: url,
                type: "jsonp",
                method: "get",
                jsonpCallback: "jsonFlickrApi",
                jsonpCallbackName: "jsonFlickrApi"
            })
                .then(function (value) {
                    handler(value);
                });
        }
    }

});