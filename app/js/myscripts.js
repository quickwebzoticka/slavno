$(document).ready(function(){

	//инизиализация слайдеров
	let sliderItems1 = $(document).find('.gallery-wrapper_1 .slider-block-item'),
		sliderPrev1  = $(document).find('.gallery-wrapper_1 .slider-block-prev__img'),
		sliderNext1  = $(document).find('.gallery-wrapper_1 .slider-block-next__img'),
		sliderNext2  = $(document).find('.gallery-wrapper_2 .slider-block-next__img'),
		sliderPrev2  = $(document).find('.gallery-wrapper_2 .slider-block-prev__img'),
		sliderItems2 = $(document).find('.gallery-wrapper_2 .slider-block-item');


	let slider3 = $('.gallery-wrapper_1  .slider-block-inn').slick({
		arrows:false,
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		draggable: false
	});	
	$(document).on('click', '.gallery-wrapper_1 .slider-block-prev', function (e) {
		slider3.slick('slickPrev');
		e.preventDefault();
		watchSlider(sliderItems1, sliderPrev1, sliderNext1);
	});
	$(document).on('click', '.gallery-wrapper_1 .slider-block-next', function (e) {
		slider3.slick('slickNext');
		e.preventDefault();
		watchSlider(sliderItems1, sliderPrev1, sliderNext1);
	});

	let slider2 = $('.gallery-wrapper_2 .slider-block-inn').slick({
		arrows:false,
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		draggable: false
	});
	$(document).on('click', '.gallery-wrapper_2 .slider-block-prev', function (e) {
		slider2.slick('slickPrev');
		e.preventDefault();
		watchSlider(sliderItems2, sliderPrev2, sliderNext2);
	});
	$(document).on('click', '.gallery-wrapper_2 .slider-block-next', function (e) {
		slider2.slick('slickNext');
		e.preventDefault();
		watchSlider(sliderItems2, sliderPrev2, sliderNext2);
	});
	
	watchSlider(sliderItems1, sliderPrev1, sliderNext1);
	watchSlider(sliderItems2, sliderPrev2, sliderNext2);
	//конец инизиализации слайдеров
});