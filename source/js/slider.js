var slider = (function () {

	var flag = true;

	var init = function () {

		_createDots();
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$('.slider__controls-btn').on('click', _clickArrow);
		$('.slider__dots_link').on('click', _dotNavigation);
	};

	var _clickArrow = function (e) {
		e.preventDefault();

		var 
				$this = $(this),
				slides = $this.closest('.portfolio').find('.portfolio__item'),
				activeSlide = slides.filter('.active'),
				nextSlide = activeSlide.next(),
				prevSlide = activeSlide.prev(),
				firstSlide = slides.first(),
				lastSlide = slides.last();

		if ($this.hasClass('slider__controls-btn_next')) {

			if (nextSlide.length) {
				_moveSlide(nextSlide, 'forward');
			} else {
				_moveSlide(firstSlide, 'forward');
			}
			
		} else {
			
			if (prevSlide.length) {
				_moveSlide(prevSlide, 'backward');
			} else {
				_moveSlide(lastSlide, 'backward');
			}
		}
	};

	var _moveSlide = function (slide, direction) {
		var
				container = slide.closest('.portfolio'),
				slides = container.find('.portfolio__item'),
				activeSlide = slides.filter('.active'),
				slideWidth = slides.width(),
				duration = 500,
				reqCssPosition = 0,
				reqSlideStrafe = 0;

		if (flag) {

			flag = false;

			if (direction === 'forward') {
				reqCssPosition = slideWidth;
				reqSlideStrafe = -slideWidth;
			} else if (direction === 'backward') {
				reqCssPosition = -slideWidth;
				reqSlideStrafe = slideWidth;
			}

			slide.css('left', reqCssPosition).addClass('inslide');

			var movableSlide = slides.filter('.inslide');

			activeSlide.animate({left: reqSlideStrafe}, duration);

			movableSlide.animate({left: 0}, duration, function(){
				var $this = $(this);

				slides.css('left', '0').removeClass('active');

				$this.toggleClass('inslide active');

				_setActiveDot(container.find('.slider__dots'));

				flag = true;
			});
		}
		
	};

	var _createDots = function () {
		var container = $('.portfolio');

		var dotMarkup = '<li class="slider__dots_item"><a class="slider__dots_link" href="#"></a></li>';

		container.each(function(){
			var 
					$this = $(this),
					slides = $this.find('.portfolio__item'),
					dotContainer = $this.find('.slider__dots');

			for (var i = 0; i < slides.size(); i++) {
				dotContainer.append(dotMarkup);
			}

			_setActiveDot(dotContainer);

		});
	};

	var _setActiveDot = function (container) {
		var slides = container.closest('.portfolio').find('.portfolio__item');

		container
			.find('.slider__dots_item')
			.eq(slides.filter('.active').index())
			.addClass('active')
			.siblings()
			.removeClass('active');
	};

	var _dotNavigation = function (e) {
		e.preventDefault();

		var
				$this = $(this),
				dots = $this.closest('.slider__dots').find('.slider__dots_item'),
				activeDot = dots.filter('.active'),
				dot = $this.closest('.slider__dots_item'),
				curDotNum = dot.index(),
				direction = (activeDot.index() < curDotNum) ? 'forward' : 'backward',
				reqSlide = $this.closest('.portfolio').find('.portfolio__item').eq(curDotNum);

		if(!dot.hasClass('active')) {
			_moveSlide(reqSlide, direction);
		}
		
	};

	return {
		init: init
	};

})();

slider.init();