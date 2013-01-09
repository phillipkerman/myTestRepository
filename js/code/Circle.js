(function()
{


    define(["easel", "backbone"], function (cjs,Backbone){


       var Circle = function (radius, color){

           this.initialize(radius, color)

        }

        var p = Circle.prototype = new cjs.Container();

        Circle.prototype.Container_initialize = p.initialize;

        Circle.prototype.initialize = function(radius, color) {
            this.Container_initialize();

            var circle = new cjs.Shape();
            circle.graphics.beginFill(color).drawCircle(0, 0, radius);
            circle.x = radius;
            circle.y = radius;
            this.addChild(circle);

            circle.cache(-radius, -radius, radius*2, radius*2 );
            circle.onPress = function(evt) {

              var offset = {x: evt.target.x-evt.stageX, y: evt.target.y-evt.stageY};

                Common.dispatcher.trigger("customEvent", evt);

                // add handlers directly to the event object:
                evt.onMouseMove = function(evt) {

                    evt.target.x = evt.stageX + offset.x;
                    evt.target.y = evt.stageY + offset.y;

                };
                evt.onMouseUp = function(evt) {
                };
            };

        }

        return Circle;
    });

})();

