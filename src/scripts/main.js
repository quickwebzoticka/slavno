$(document).ready(function(){
	$(document).on('click', '.header-menuMob', function(){
		$(document).find('.header-menuActive-wrap').addClass('active');
		$(document).find('body').attr('style','position: fixed');
	});
	$(document).on('click', '.header-menuClose__img', function(){
		$(document).find('.header-menuActive-wrap').removeClass('active');
		$(document).find('body').attr('style','');
	});

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
		placeholder: 'Выберите из списка'
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

function watchSlider(){
	let sliderItems = $(document).find('.slider-block-item');
	let sliderPrev = $(document).find('.slider-block-prev__img');
	let sliderNext = $(document).find('.slider-block-next__img');
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
