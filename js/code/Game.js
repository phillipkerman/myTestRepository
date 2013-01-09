(function()
{
    define(["jquery","underscore","backbone", "easel","code/Circle"],

        function ($,_,Backbone, cjs, Circle){


        var Game = Backbone.Model.extend({


            initialize:   function(attrs){

                ///var stage = new cjs.Stage(this.get('canvas'));
                var stage = new cjs.Stage(attrs.canvas);

                var container = new cjs.Container();
                stage.addChild( container );

                var test2 = new Circle(10, "blue");
                test2.x = 0;
                container.addChild(test2) ;

                //console.log( window.dispatcher )
                Common.dispatcher.on('customEvent', this.handler, this);



                var test = new Circle(40,"red");
                container.addChild(test);


                cjs.Ticker.addListener(stage);
                cjs.Ticker.setFPS(50);
                cjs.Ticker.useRAF = true;
                stage.update();

            } ,

            validate: function(attrs){
                console.log("validating");
            },

            handler: function (p){
                console.log("handler " + p)
            }

        });

         return Game;
        });


}
)();

