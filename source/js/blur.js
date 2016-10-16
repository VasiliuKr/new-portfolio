var blur = (function () {

	var blur = $('.feedback__form'),
			blurSection = $('.feedback');

	var init = function () {
		_setUpListeners();
		_blurBackground();
		
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$(window).on('resize', _blurBackground);
	};

	var _blurBackground = function () {
		var imgWidth = blurSection.width(),
				posLeft = blurSection.offset().left - blur.offset().left,
				posTop = blurSection.offset().top - blur.offset().top;

		blur.css({
			'background-size' : imgWidth + 'px' + ' ' + 'auto',
			'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
		})
	};

	

	return {
		init: init
	};

})();

blur.init();