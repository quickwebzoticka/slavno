$(document).ready(function(){

	let sliderItems = $(document).find('.slider-block-item');
	let sliderPrev = $(document).find('.slider-block-prev__img');
	let sliderNext = $(document).find('.slider-block-next__img');

	if($(document).find('#YMapsID').length != 0){
		ymaps.ready(function () {
			var myMap = new ymaps.Map("YMapsID", {
				center: [59.785032, 29.952116],
				zoom: 11,
			});
			myMap.behaviors.disable('scrollZoom');
			var myPlacemark = new ymaps.Placemark([59.785032, 29.952116], {}, {
					preset: 'islands#darkGreenIcon'
			});
			myMap.geoObjects.add(myPlacemark1);
			myMap.geoObjects.add(myPlacemark);
		});
	}

	$(document).on('click', '.header-menuMob', function(){
		$(document).find('.header-menuActive-wrap').addClass('active');
		$(document).find('body').attr('style','position: fixed');
	});
	$(document).on('click', '.header-menuClose__img', function(){
		$(document).find('.header-menuActive-wrap').removeClass('active');
		$(document).find('body').attr('style','');
	});

	$('.footer-block-menus-list__title').click(function(e) {
		if (screen.width <= 767) {
			e.preventDefault();
			$(this).toggleClass('in').next().slideToggle();
		}
	});
	if (screen.width <= 767) {
		$(document).find('.footer-block-menus-list__title').next().slideUp();
		$(document).find('.footer-block-menus-list__title').addClass('in');
	}
	if (screen.width > 767) {
		$(document).find('.footer-block-menus-list__title').next().slideDown();
		$(document).find('.footer-block-menus-list__title').removeClass('in');
	}
	
	resizewindow();
	$(window).resize(function(e){
		resizewindow();
		if (screen.width <= 767) {
			$(document).find('.footer-block-menus-list__title').next().slideUp();
			$(document).find('.footer-block-menus-list__title').addClass('in');
		}
		if (screen.width > 767) {
			$(document).find('.footer-block-menus-list__title').next().slideDown();
			$(document).find('.footer-block-menus-list__title').removeClass('in');
		}
	});

	// $(".consult-block-left-main-form__tel").inputmask({
	// 	mask : "+7 999 999 99 99",
	// 	showMaskOnHover: false,
	// 	showMaskOnFocus: true
	// });

	var slider = $('.slider .slider-block-inn').slick({
		arrows:false,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		draggable: false,
		swipe: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2.5
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1.5
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$(document).on('click', '.slider-block-prev', function (e) {
		slider.slick('slickPrev');
		watchSlider(sliderItems, sliderPrev, sliderNext);
	});
	$(document).on('click', '.slider-block-next', function (e) {
		slider.slick('slickNext');
		watchSlider(sliderItems, sliderPrev, sliderNext);
	});

	var sliderUchastki = $('.uchastki-block-inn').slick({
		arrows:false,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 3.5,
					dots: true
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2.5,
					dots: true
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1.5,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});
	watchSlider(sliderItems, sliderPrev, sliderNext);

	changedRangeInput($(document).find('#rangeInputFirstPrice'));
	changedRangeInput($(document).find('#rangeInputSecondPrice'));
	changedRangeInput($(document).find('#rangeInputFirstSquare'));
	changedRangeInput($(document).find('#rangeInputSecondSquare'));
	$(document).on('input', '#rangeInputFirstPrice, #rangeInputSecondPrice, #rangeInputFirstSquare, #rangeInputSecondSquare', function (e) {
		changedRangeInput($(this));
		
	});
	$(document).on('input', '#firstPrice, #secondPrice, #firstSquare, #secondSquare', function (e) {
		changedInput($(this));
	});

	$(document).find('.filter-block-right-comm__select').SumoSelect({
		placeholder: 'Выберите из списка',
		forceCustomRendering: true
	});

	var x = document.getElementsByName("input-vol");
	for (i = 0; i < x.length; i++) {
			x[i].onkeypress = function(e) {
					e = e || event;
					if (e.ctrlKey || e.altKey || e.metaKey) return;
					var chr = getChar(e);
					// с null надо осторожно в неравенствах,
					// т.к. например null >= '0' => true
					// на всякий случай лучше вынести проверку chr == null отдельно
					if (chr == null) return;
					if (chr < '0' || chr > '9') {
							return false;
					}
			}
	}
});

function watchSlider(sliderItems, sliderPrev, sliderNext){
	if( sliderItems[0].classList.contains("slick-active") ){
		sliderPrev.attr("src", "assets/images/arrow-prev-disabled.png");
		sliderPrev.attr("style", "cursor: auto");
	} else {
		sliderPrev.attr("src", "assets/images/arrow-prev.png");
		sliderPrev.attr("style", "");
	}
	if( sliderItems[sliderItems.length-1].classList.contains("slick-active") ){
		sliderNext.attr("src", "assets/images/arrow-next-disabled.png");
		sliderNext.attr("style", "cursor: auto");
	} else {
		sliderNext.attr("src", "assets/images/arrow-next.png");
		sliderNext.attr("style", "");
	}
}

function changedRangeInput(elem){
	let numInput = elem.prev();
	numInput.val(elem.val());

	let maxVal = elem.attr("max");
	let val = ($(elem).val() * 100) / maxVal;
	$(elem).css({'background':'-webkit-linear-gradient(left ,#94b56f 0%,#94b56f '+val+'%,transparent '+val+'%, transparent 100%)'});
}

function changedInput(elem){
	let numInput = elem.next();
	
	if(elem.val() == ""){
		numInput.val(0);
		$(numInput).css({'background':'-webkit-linear-gradient(left ,#94b56f 0%,#94b56f '+0+'%,transparent '+0+'%, transparent 100%)'});
	} else {
		numInput.val(elem.val());
		let maxVal = numInput.attr("max");
		let val = ($(numInput).val() * 100) / maxVal;
		$(numInput).css({'background':'-webkit-linear-gradient(left ,#94b56f 0%,#94b56f '+val+'%,transparent '+val+'%, transparent 100%)'});
	}
}

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }

    return null; // специальная клавиша
}

function resizewindow() {
	if (screen.width >= 1920) {
		$(document).find('.filter-title-br').attr('style', '');
		$(document).find('.consult-block-right__img').attr('src', 'assets/images/consult-tanya.jpg');
		let numBr = $(document).find('.del');
		for(i = 0; i < numBr.length; i++){
			numBr.eq(i).attr('style', '');
		}
		let numBanBr = $(document).find('.banner-br-del');
		for(i = 0; i < numBanBr.length; i++){
			numBanBr.eq(i).attr('style', '');
		}
	}
	
	if (screen.width < 1919 && screen.width >= 1024) {
		$(document).find('.filter-title-br').attr('style', 'display: none');
		$(document).find('.header-logo__img').attr('src', 'assets/images/logo.png');	
		$(document).find('.consult-block-right__img').attr('src', 'assets/images/consult-tanya.png');
		let numBr = $(document).find('.del');
		for(i = 0; i < numBr.length; i++){
			numBr.eq(i).attr('style', '');
		}
		let numBanBr = $(document).find('.banner-br-del');
		for(i = 0; i < numBanBr.length; i++){
			numBanBr.eq(i).attr('style', '');
		}
	}

	if (screen.width < 1023 && screen.width >= 768) {
		$(document).find('.filter-title-br').attr('style', 'display: none');
		$(document).find('.header-logo__img').attr('src', 'assets/images/logo.png');	
		let numBr = $(document).find('.del');
		for(i = 0; i < numBr.length; i++){
			numBr.eq(i).attr('style', 'display: none');
		}
		let numBanBr = $(document).find('.banner-br-del');
		for(i = 0; i < numBanBr.length; i++){
			numBanBr.eq(i).attr('style', '');
		}
		$(document).find('.consult-block-right__img').attr('src', 'assets/images/consult-tanya768.png');	
	}

	if (screen.width < 767 && screen.width >= 480) {
		$(document).find('.filter-title-br').attr('style', 'display: none');
		$(document).find('.header-logo__img').attr('src', 'assets/images/logo-mobile.png');	
		let numBr = $(document).find('.del');
		for(i = 0; i < numBr.length; i++){
			numBr.eq(i).attr('style', 'display: none');
		}
		let numBanBr = $(document).find('.banner-br-del');
		for(i = 0; i < numBanBr.length; i++){
			numBanBr.eq(i).attr('style', '');
		}
	}

	if (screen.width < 479) {
		$(document).find('.filter-title-br').attr('style', 'display: none');
		$(document).find('.header-logo__img').attr('src', 'assets/images/logo-mobile.png');	
		let numBr = $(document).find('.del');
		for(i = 0; i < numBr.length; i++){
			numBr.eq(i).attr('style', 'display: none');
		}
		let numBanBr = $(document).find('.banner-br-del');
		for(i = 0; i < numBanBr.length; i++){
			numBanBr.eq(i).attr('style', 'display: none');
		}
	}
	
}