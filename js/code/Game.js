(function()
{


    define(["code/Circle"], function (Circle){

        var Game = function(canvas){

           var stage = new createjs.Stage(canvas);

           var circle = new createjs.Shape();
           circle.graphics.beginFill("blue").drawCircle(0, 0, 50);
           circle.x = 50;
           circle.y = 50;
           stage.addChild(circle);


            var test = new Circle(100);
            stage.addChild(test);


            stage.update();

        }

       return Game;
    });

}
)();