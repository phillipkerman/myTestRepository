/*
 * Grayscale plugin.
 * @author arturnt
 */
(function($) {
            console.log("init gs")
    $.fn.grayscale = function() {

        function canvasToGray(imgObj) {
            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');

            canvas.width = imgObj.width;
            canvas.height = imgObj.height;
            ctx.drawImage(imgObj, 0, 0);

            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

            for ( var y = 0; y < imgPixels.height; y++ ) {
                for ( var x = 0; x < imgPixels.width; x++ ) {
                    var i = (y * 4) * imgPixels.width + x * 4;
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }

            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
            this.src = canvas.toDataURL();
        }

        function ieToGray(imgOjb) {
            return $(imgOjb).css({
                'filter': 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)',
                'zoom': '1'
            });
        }

        return $(this).each(function() {

            if(!!document.createElement('canvas').getContext)
                if ( ! new RegExp(window.location.hostname).test(this.src) )
                    $.getImageData({ url: this.src, success: $.proxy(canvasToGray,this) });
                else
                    this.src = canvasToGray(this);
            else if ($.browser.msie)
                ieToGray(this);

        });

    }

})(jQuery);

