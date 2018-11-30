$(document).ready(function(){
	var slider = $('.slider-block-inn').slick({
		arrows:false,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		draggable: false
	});
	$(document).on('click', '.slider-block-prev', function (e) {
		slider.slick('slickPrev');
		e.preventDefault();
		watchSlider();
	});
	$(document).on('click', '.slider-block-next', function (e) {
		slider.slick('slickNext');
		e.preventDefault();
		watchSlider();
	});
	watchSlider();
});

function watchSlider(){
	let sliderItems = $(document).find('.slider-block-item');
	let sliderPrev = $(document).find('.slider-block-prev__img');
	let sliderNext = $(document).find('.slider-block-next__img');
	if( sliderItems[0].classList.contains("slick-active") ){
		sliderPrev.attr("src", "assets/images/arrow-prev-disabled.png");
	} else {
		sliderPrev.attr("src", "assets/images/arrow-prev.png");
	}
	if( sliderItems[sliderItems.length-1].classList.contains("slick-active") ){
		sliderNext.attr("src", "assets/images/arrow-next-disabled.png");
	} else {
		sliderNext.attr("src", "assets/images/arrow-next.png");
	}
}