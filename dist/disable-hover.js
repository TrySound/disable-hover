/*!
 * disable-hover 1.0.3
 * Disable hover effects on scroll
 * https://github.com/TrySound/disable-hover

 * Released under the MIT license
 * Copyright (c) 2015, Bogdan Chadkin <trysound@yandex.ru>
 */

;(function (window, document) {

	var isClassList = ! ("classList" in document.createElement("_"))

	function addClass(el, name) {
		if(isClassList) {
			el.classList.add(name);
		} else {
			el.className += (el.className ? ' ' : '') + name;
		}
	}

	function removeClass(el, name) {
		if(isClassList) {
			el.classList.remove(name);
		} else {
			el.className = el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
		}
	}


	document.addEventListener('DOMContentLoaded', function () {
		var body = document.body,
			isDisabled = false,
			timer;

		function disableHover() {
			if( ! isDisabled) {
				addClass(body, 'disable-hover');
				isDisabled = true;
			}
		}
		
		function enableHover() {
			if(isDisabled) {
				removeClass(body, 'disable-hover');
				isDisabled = false;
			}
		}

		window.addEventListener('scroll', function() {
			clearTimeout(timer);
			disableHover();

			timer = setTimeout(enableHover, 500);
		}, false);
	}, false);

} (window, document));
