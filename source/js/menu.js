var menu = (function () {

	var menu = $('.fullscreen-menu');

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$('.menu-link').on('click', _openMenu);
		$('.close-btn').on('click', _closeMenu);
	};

	var _openMenu = function (e) {
		e.preventDefault();

		$(this).hide();
		menu.show();
	};

	var _closeMenu = function (e) {
		e.preventDefault();

		$('.menu-link').show();
		menu.hide();
	};

	return {
		init: init
	};

})();

menu.init();