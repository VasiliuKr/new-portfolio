var scrollByClick = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		$('.arrow-down-link').on('click', _scrollToBottom);
		$('.arrow-up-link').on('click', _scrollToTop);
		// прослушка событий...
	};

	var _scrollToBottom = function (e) {
		e.preventDefault();

		$('body').animate({scrollTop: $(document).height()}, 'slow');
	};

	var _scrollToTop = function (e) {
		e.preventDefault();

		$('body').animate({scrollTop: 0}, 'slow');
	};
	
	return {
		init: init
	};

})();

scrollByClick.init();