/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function ($) {\n    \"use strict\";\n\n    // Spinner\n    var spinner = function () {\n        setTimeout(function () {\n            if ($('#spinner').length > 0) {\n                $('#spinner').removeClass('show');\n            }\n        }, 1);\n    };\n    spinner();\n    \n    \n    // Initiate the wowjs\n    new WOW().init();\n\n\n    // Sticky Navbar\n    $(window).scroll(function () {\n        if ($(this).scrollTop() > 300) {\n            $('.sticky-top').addClass('shadow-sm').css('top', '0px');\n        } else {\n            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');\n        }\n    });\n    \n    \n    // Back to top button\n    $(window).scroll(function () {\n        if ($(this).scrollTop() > 300) {\n            $('.back-to-top').fadeIn('slow');\n        } else {\n            $('.back-to-top').fadeOut('slow');\n        }\n    });\n    $('.back-to-top').click(function () {\n        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');\n        return false;\n    });\n\n\n    // Facts counter\n    $('[data-toggle=\"counter-up\"]').counterUp({\n        delay: 10,\n        time: 2000\n    });\n\n\n    // Date and time picker\n    $('.date').datetimepicker({\n        format: 'L'\n    });\n    $('.time').datetimepicker({\n        format: 'LT'\n    });\n\n\n    // Header carousel\n    $(\".header-carousel\").owlCarousel({\n        autoplay: false,\n        animateOut: 'fadeOutLeft',\n        items: 1,\n        dots: true,\n        loop: true,\n        nav : true,\n        navText : [\n            '<i class=\"bi bi-chevron-left\"></i>',\n            '<i class=\"bi bi-chevron-right\"></i>'\n        ]\n    });\n\n\n    // Testimonials carousel\n    $(\".testimonial-carousel\").owlCarousel({\n        autoplay: false,\n        smartSpeed: 1000,\n        center: true,\n        dots: false,\n        loop: true,\n        nav : true,\n        navText : [\n            '<i class=\"bi bi-arrow-left\"></i>',\n            '<i class=\"bi bi-arrow-right\"></i>'\n        ],\n        responsive: {\n            0:{\n                items:1\n            },\n            768:{\n                items:2\n            }\n        }\n    });\n\n    \n})(jQuery);\n\n\n\n//# sourceURL=webpack://my-gulp/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;