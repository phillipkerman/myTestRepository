

(function()
{
    define([ "easel","movieclip", "tween"],

        function (cjs) {

            var p; // shortcut to reference prototypes
            var lib = {};
        // stage content:
            (lib.main = function() {
                this.initialize();
            }).prototype = p = new cjs.Container();
            p.nominalBounds = new cjs.Rectangle(0,0,0,0);
            p.nominalBounds = new cjs.Rectangle(214,122.5,156,129);


        // symbols:
            (lib.Still = function() {
                this.initialize();

                // Layer 1
                this.shape = new cjs.Shape();
                this.shape.graphics.f("#FFAD5D").s("#FFFFFF").ss(1,1,1).p("AMMqDIAAUHI4WAAIAA0HQIjQ5Pzw5IAAAA").cp();
                this.shape.setTransform(78,64.5);

                this.addChild(this.shape);
            }).prototype = p = new cjs.Container();
            p.nominalBounds = new cjs.Rectangle(0,0,156,129);


            (lib.Anim = function(mode,startPosition,loop) {
                this.initialize(mode,startPosition,loop,{},true);

                // Layer 1
                this.instance = new lib.Still();
                this.instance.setTransform(78,64.5,1,1,0,0,0,78,64.5);

                this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,x:243,y:57.5},29).to({x:78,y:64.5},15).wait(1));

            }).prototype = p = new cjs.MovieClip();
            p.nominalBounds = new cjs.Rectangle(0,0,156,129);

            return lib;
        });
})();