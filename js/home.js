!(function($) {
	'use strict';

	// Hero typed
	if ($('.typed').length) {
		var typed_strings = $('.typed').data('typed-items');
		typed_strings = typed_strings.split(',');
		new Typed('.typed', {
			strings: typed_strings,
			loop: true,
			typeSpeed: 70,
			backSpeed: 30,
			backDelay: 1000
		});
	}

	var $nav = $('.navbar');
	$(document).scroll(function() {
		if ($(this).scrollTop() <= $nav.height()) {
			$nav.removeClass('nav-white');
		}
		if ($(this).scrollTop() > $nav.height()) {
			$nav.addClass('nav-white');
		}
	});

	$('.navbar-toggler').click(function() {
		$nav.addClass('nav-white');
	});
	
	$('#resume-button').click(function(){
	    window.open('https://drive.google.com/file/d/1QkiWsE9dhRNDdHCerhKHfk-6IXKH0Q2U/view?usp=sharing', '_blank');
	});
})(jQuery);
