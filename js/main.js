var logger = log4javascript.getLogger("uniqueName");
logger.setLevel(log4javascript.Level.ALL);
logger.addAppender(new log4javascript.BrowserConsoleAppender());
window.logger = logger;
logger.debug("debug: index.html::log4javascript ready.");

require.config({
    baseUrl: "./js",
    waitSeconds: 10,
    paths: {},

    packages: [

        {
            name: "createjs",
            location: "libs/easel/",
            main: "easeljs-0.5.0.min"

        },

        {
            name: "jquery",
            location: "./libs/jquery",
            main: "jquery"
        },
        {
            name: "json2",
            location: "./libs/json2",
            main: "json2"
        },
        {
            name: "underscore",
            location: "./libs/underscore",
            main: "underscore"
        },
        {
            name: "backbone",
            location: "./libs/backbone",
            main: "backbone"
        }
    ]
});


require(["code/Game", "jquery", "createjs"], function(Game)
{
    var g = new Game( document.getElementById("mainCanvas") );

});



