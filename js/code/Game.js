(function()
{
    define(["jquery","underscore","backbone", "easel","code/Circle"],

        function ($,_,Backbone, createjs, Circle){

        var dispatcher = _.clone(Backbone.Events);

        var Game = Backbone.Model.extend({


            initialize:   function(attrs){

               // var stage = new createjs.Stage(this.get('canvas'));
                var stage = new createjs.Stage(attrs.canvas);


                var test2 = new Circle(10, "blue",dispatcher);
                test2.x = 0;
                stage.addChild(test2) ;

                dispatcher.on('customEvent', this.handler, this);

                var test = new Circle(40,"red",dispatcher);
                stage.addChild(test);


                createjs.Ticker.addListener(stage);
                createjs.Ticker.setFPS(50);
                stage.update();

            } ,
            validate: function(attrs){
                console.log("validating")
            },

            handler: function (p){
                console.log("handler " + p)
            }

        });

         return Game;
        });


}
)();

