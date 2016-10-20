var myMouseParallax = (function () {

	var layer = $('.parallax').find('.parallax__layer');

	var init = function () {
		_setUpListeners();

		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		$(window).on('mousemove', _moveLayers);
		// прослушка событий...
	};

	var _moveLayers = function (e) {
		var mouse_dx = e.pageX,
				mouse_dy = e.pageY,
				w = (window.innerWidth / 2) - mouse_dx,
				h = (window.innerHeight / 2) - mouse_dy;

		layer.map(function (key, value) {
			var bottomPosition = ((window.innerHeight / 2) * ((key + 1) / 100)),
					widthPosition = w * ((key + 1) / 100),
					heightPosition = h * ((key + 1) / 100);

			$(value).css({
				'bottom': '-' + bottomPosition + 'px',
				'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0px)'
			});
		});
	};

	return {
		init: init
	};

})();

myMouseParallax.init();