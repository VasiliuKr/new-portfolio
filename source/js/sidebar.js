var sidebarSticky = (function () {

	var menu = $('.sidebar__list'),
		menuTop = menu.offset().top + 100,
		menuItems = menu.find('.sidebar__link'),
		titles = [],
		current = -1;

	$('.article-title').each(function(index, title) {
		titles.push($(title).offset().top);
	});

	menuItems.eq(0).addClass('sidebar__link_active');

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$(window).on('scroll', _sticky);
		$('.sidebar__link').on('click', _activeMenuItem);
	};

	var _sticky = function () {
		var scrollToTop = $(window).scrollTop();

		if (menuTop < scrollToTop) {
			menu.addClass('fixed');
		} else {
			menu.removeClass('fixed');

		}

		for (var i = 0; i < titles.length; i++) {
			var titleTop = titles[i] + 180;

			if (scrollToTop > titleTop && current !== i) {
				menuItems.removeClass('sidebar__link_active');
				menuItems.eq(i).addClass('sidebar__link_active');
				current = i;
			}
		}
		// console.log('title: ' + titleTop + ', scroll: ' + scrollToTop);
	};

	var _activeMenuItem = function (e) {
		menuItems.removeClass('sidebar__link_active');
		$(this).addClass('sidebar__link_active');
		
	};

	return {
		init: init
	};

})();

sidebarSticky.init()