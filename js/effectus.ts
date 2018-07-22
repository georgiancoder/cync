class EffectusSliderus {
    constructor() {
        this.counter = 0;
        this.transitionTime = 1000;
        this.ww;
        this.perWidth;
        this.slicehtml;
        this.nextItem;
        this.prevItem;
    }

    init() {
        this.ww = $('.mainCarouselus').innerWidth() - 0.5;
        this.perWidth = this.ww / 12;

        let that = this;

        $(".mainCarouselus .item").removeClass('active');
        $(".mainCarouselus .item").each(function () {
            if ($(this).index() == that.counter) {
                $(this).addClass('active');
            }
            let bg = $(this).data('bg');
            that.slicehtml = '';
            for (i = 0; i < 12; i++) {
                that.slicehtml += `<div class='slice' style="background-image: url('${bg}'); background-size: ${that.ww}px; background-position: -${i * that.perWidth}px center; left: ${i * that.perWidth}px"></div>`;
            }
            $(this).css('background-image', 'unset');

            $(this).find('.slicers').html(that.slicehtml);
        });
    }

    effectus(cb) {

        $(".mainCarouselus .item").removeClass('effectus');
        $(".mainCarouselus .item").eq(this.counter).addClass('effectus');
        setTimeout(cb, this.transitionTime);
    }

    next() {
        $(".mainCarouselus .item").removeClass('np');
        if(this.counter < $(".mainCarouselus .item").length - 1){
            $(".mainCarouselus .item").eq(this.counter).next().addClass('np');
        }else
        {
            $(".mainCarouselus .item").eq(0).addClass('np');
        }
        this.effectus(() => {
            $(".mainCarouselus .item").removeClass('effectus');
            if (this.counter < $(".mainCarouselus .item").length - 1) {
                this.counter++;
            } else {
                this.counter = 0;
            }
            $(".mainCarouselus .item").removeClass('active');
            $(".mainCarouselus .item").eq(this.counter).addClass('active');
            $(".mainCarouselus .item").removeClass('np');
        });
    }

    prev() {
        $(".mainCarouselus .item").removeClass('np');
        if(this.counter > 0){
            $(".mainCarouselus .item").eq(this.counter).prev().addClass('np');
        }else
        {
            $(".mainCarouselus .item").eq($(".mainCarouselus .item").length - 1).addClass('np');
        }
        this.effectus(() => {
            $(".mainCarouselus .item").removeClass('effectus');
            if (this.counter > 0) {
                this.counter--;
            } else {
                this.counter = $(".efectuscaruselos .item").length - 1;
            }
            $(".mainCarouselus .item").removeClass('active');
            $(".mainCarouselus .item").eq(this.counter).addClass('active');
            $(".mainCarouselus .item").removeClass('np');
        });
    }

}
