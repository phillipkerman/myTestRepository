
require.config({
    baseUrl: "./js",
    waitSeconds: 10,

    shim:{
        easel: {
            exports:'createjs'
            },

        tween:{
            deps: ["easel"],
            exports: "tween"
        },

        underscore:{
            exports: "_"
        },

        backbone:{
            deps: [ "jquery", "underscore"],
            exports: "Backbone"
        }

    },



    paths: {

        jquery: "./libs/jquery/jquery",
        underscore: "./libs/underscore/underscore",
        backbone: "./libs/backbone/backbone-min",
        easel: "./libs/easel/easeljs-0.5.0.min",
        tween: "./libs/tween/tweenjs-0.3.0.min"

    }



});


var Common = {};


require([  "code/Game" , "underscore", "backbone"], function( Game, _, Backbone )
{

    Common.dispatcher = _.extend({}, Backbone.Events);

    var g = new Game( { canvas:document.getElementById("mainCanvas") } );

});



