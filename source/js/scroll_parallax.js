var myScrollParallax = (function () {

	var bg = $('.header').find('.transparent-title'),
			user = $('.header').find('.user-avatar'),
			sectionText = $('.author');

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		$(window).on('scroll', _moveLayers);
		// прослушка событий...
	};

	var _move = function (block, windowScroll, strafeAmount) {
		var strafe = windowScroll / -strafeAmount + '%',
				transformString = 'translate3d(0,' + strafe + ', 0)';

		block.css({
			'transform' : transformString,
			'-webkit-transform' : transformString
		});
	};

	var _moveLayers = function (wScroll) {
		var wScroll = $(window).scrollTop();

		_move(bg, wScroll, 10);
		_move(sectionText, wScroll, 3);
		_move(user, wScroll, 2);
	};

	return {
		init: init
	};

})();

myScrollParallax.init();