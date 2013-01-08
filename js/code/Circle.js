(function()
{


    define(["easel", "backbone"], function (createjs,Backbone){


       var Circle = function (radius, color, dispatcher){

           this.initialize(radius, color, dispatcher)

        }

        var p = Circle.prototype = new createjs.Container();

        Circle.prototype.Container_initialize = p.initialize;

        Circle.prototype.initialize = function(radius, color, dispatcher) {
            this.Container_initialize();

            var circle = new createjs.Shape();
            circle.graphics.beginFill(color).drawCircle(0, 0, radius);
            circle.x = radius;
            circle.y = radius;
            this.addChild(circle);

            circle.cache(-radius, -radius, radius*2, radius*2 );
            circle.onPress = function(evt) {

                dispatcher.trigger("customEvent", evt);

                // add handlers directly to the event object:
                evt.onMouseMove = function(evt) {
                    evt.target.x = evt.stageX;
                    evt.target.y = evt.stageY;

                };
                evt.onMouseUp = function(evt) {
                };
            };

        }

        return Circle;
    });

})();

