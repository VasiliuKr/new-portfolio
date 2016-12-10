var blogSidebar = (function () {

	var sidebar = $('.sidebar'),
		buttonArrow = sidebar.find('.sidebar-toggle__arrow'),
		menu = $('.sidebar__list'),
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
		$('.sidebar-toggle').on('click', _toggleSidebar);
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

		if (sidebar.hasClass('sidebar_active')) {
			sidebar.removeClass('sidebar_active');
			buttonArrow.removeClass('sidebar-toggle__arrow_left')
			.addClass('sidebar-toggle__arrow_right');
		}
		
	};

	var _toggleSidebar = function (e) {
		e.preventDefault();

		if (sidebar.hasClass('sidebar_active')) {
			sidebar.removeClass('sidebar_active');
			buttonArrow.removeClass('sidebar-toggle__arrow_left')
			.addClass('sidebar-toggle__arrow_right');
		} else {
			sidebar.addClass('sidebar_active');
			buttonArrow.removeClass('sidebar-toggle__arrow_right')
			.addClass('sidebar-toggle__arrow_left');
		}
	}

	return {
		init: init
	};

})();

blogSidebar.init()