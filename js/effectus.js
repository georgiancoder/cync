var EffectusSliderus = /** @class */ (function () {
    function EffectusSliderus() {
        this.counter = 0;
        this.transitionTime = 1000;
        this.ww;
        this.perWidth;
        this.slicehtml;
        this.nextItem;
        this.prevItem;
    }
    EffectusSliderus.prototype.init = function () {
        this.ww = $('.mainCarouselus').innerWidth() - 0.5;
        this.perWidth = this.ww / 12;
        var that = this;
        $(".mainCarouselus .item").removeClass('active');
        $(".mainCarouselus .item").each(function () {
            if ($(this).index() == that.counter) {
                $(this).addClass('active');
            }
            var bg = $(this).data('bg');
            that.slicehtml = '';
            for (i = 0; i < 12; i++) {
                that.slicehtml += "<div class='slice' style=\"background-image: url('" + bg + "'); background-size: " + that.ww + "px; background-position: -" + i * that.perWidth + "px center; left: " + i * that.perWidth + "px\"></div>";
            }
            $(this).css('background-image', 'unset');
            $(this).find('.slicers').html(that.slicehtml);
        });
    };
    EffectusSliderus.prototype.effectus = function (cb) {
        $(".mainCarouselus .item").removeClass('effectus');
        $(".mainCarouselus .item").eq(this.counter).addClass('effectus');
        setTimeout(cb, this.transitionTime);
    };
    EffectusSliderus.prototype.next = function () {
        var _this = this;
        $(".mainCarouselus .item").removeClass('np');
        if (this.counter < $(".mainCarouselus .item").length - 1) {
            $(".mainCarouselus .item").eq(this.counter).next().addClass('np');
        }
        else {
            $(".mainCarouselus .item").eq(0).addClass('np');
        }
        this.effectus(function () {
            $(".mainCarouselus .item").removeClass('effectus');
            if (_this.counter < $(".mainCarouselus .item").length - 1) {
                _this.counter++;
            }
            else {
                _this.counter = 0;
            }
            $(".mainCarouselus .item").removeClass('active');
            $(".mainCarouselus .item").eq(_this.counter).addClass('active');
            $(".mainCarouselus .item").removeClass('np');
        });
    };
    EffectusSliderus.prototype.prev = function () {
        var _this = this;
        $(".mainCarouselus .item").removeClass('np');
        if (this.counter > 0) {
            $(".mainCarouselus .item").eq(this.counter).prev().addClass('np');
        }
        else {
            $(".mainCarouselus .item").eq($(".mainCarouselus .item").length - 1).addClass('np');
        }
        this.effectus(function () {
            $(".mainCarouselus .item").removeClass('effectus');
            if (_this.counter > 0) {
                _this.counter--;
            }
            else {
                _this.counter = $(".efectuscaruselos .item").length - 1;
            }
            $(".mainCarouselus .item").removeClass('active');
            $(".mainCarouselus .item").eq(_this.counter).addClass('active');
            $(".mainCarouselus .item").removeClass('np');
        });
    };
    return EffectusSliderus;
}());
// let es = new EffectusSliderus();
// es.init();
//
// $("#next").click(function () {
//     es.next();
// });
// $("#prev").click(function () {
//     es.prev();
// });
