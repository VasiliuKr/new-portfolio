var flipModule = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$('.autorization-button').on('click', _flipTab);
	};

	var _flipTab = function (e) {
		e.preventDefault();

		var $this = $(this),
		flipper = $('.flipper');

		$this.css('visibility', 'hidden');
		flipper.css('transform', 'rotateY(180deg)');
		
		$('a.form__btn').click(function(e) {
			e.preventDefault();
			$this.css('visibility', 'visible');
			flipper.css('transform', 'rotateY(0deg)');
			
		});
	};

	return {
		init: init
	};

})();

flipModule.init();

