var sidebarSticky = (function () {

	var stickyElem = $('.sidebar__list'),
		stickyElemTop = stickyElem.offset().top;
		

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$(window).on('scroll', _sticky);
	};

	var _sticky = function () {
		var scrollToTop = $(window).scrollTop();

		if (stickyElemTop < scrollToTop) {
			stickyElem.addClass('fixed');
		} else {
			stickyElem.removeClass('fixed');

		}
		
	};

	return {
		init: init
	};

})();

sidebarSticky.init()