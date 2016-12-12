var menu = (function () {

	var menu = $('.fullscreen-menu'),
		menuLinks = menu.find('.fullsreen-menu__link'),
		currentUrl = window.location.href;

	var init = function () {
		_setUpListeners();
		_activeMenuItem();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$('.menu-link').on('click', _openMenu);
		$('.close-btn').on('click', _closeMenu);
	};

	var _activeMenuItem = function () {
		
		menuLinks.each(function() {
			if (currentUrl.indexOf($(this).attr('href')) !== -1)  {
				$(this).addClass('active');
			}
		});

	};

	var _openMenu = function (e) {
		e.preventDefault();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.header-links').removeClass('active');
			$('body').css('position', 'static');
			menu.hide();
		} else {
			$(this).addClass('active');
			$('.header-links').addClass('active');
			$('body').css('position', 'fixed');
			menu.show();
		}
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