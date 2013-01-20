(function()
{
    define(["jquery","underscore","backbone", "easel","code/Circle", "code/library2"],

        function ($,_,Backbone, cjs, Circle, Lib){

          var clip;
        var Game = Backbone.Model.extend({



            initialize:   function(attrs){

                ///var stage = new cjs.Stage(this.get('canvas'));
                var stage = new cjs.Stage(attrs.canvas);
               // stage.scaleX = stage.scaleY = 0.5;

                //var container = new cjs.Container();
               // stage.addChild( container );


                var test2 = new Circle(10, "blue");


                test2.x = 0;
                stage.addChild(test2) ;

                //console.log( window.dispatcher )
                Common.dispatcher.on('customEvent', this.handler, this);



                var test = new Circle(40,"red");
                stage.addChild(test);



                var symbol = new Lib.Still();
                stage.addChild( symbol );

                clip = new Lib.Anim();
                stage.addChild( clip );
                clip.shadow = new cjs.Shadow("#FF0000",10,10,50);



                cjs.Ticker.addListener(stage);
                cjs.Ticker.setFPS(50);
                cjs.Ticker.useRAF = true;
                //stage.update();

            } ,

            validate: function(attrs){
                console.log("validating");
            },

            handler: function (p){
                console.log("handler " + p);

                if ( !clip.paused ){
                    clip.stop();
                }  else {
                    clip.play();
                }


            }

        });

         return Game;
        });


}
)();

