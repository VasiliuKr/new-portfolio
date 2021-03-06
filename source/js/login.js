
var contactMe = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		$('#login').on('submit', _submitForm);
	};

	var _submitForm = function (e) {
		e.preventDefault();

		var form = $(this),
			url = 'contactme.php',
			defObj = _ajaxForm(form, url);

			// что-то будем делать с ответом с сервера defObj
	};


	var _ajaxForm = function (form, url) {
		
		if (!validation.validateForm(form)) return false;
		// если false то код ниж не произойдет
	};

	return {
		init: init
	};

})();

contactMe.init();
