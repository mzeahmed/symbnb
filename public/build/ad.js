(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ad"],{

/***/ "./assets/js/ad.js":
/*!*************************!*\
  !*** ./assets/js/ad.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);


$('#add-image').click(function () {
  // Je récupère le numéro des futurs champs que ej vais créer
  var index = +$('#widgets-counter').val(); // Je récupère le prototype des entrées

  var tmpl = $('#ad_images').data('prototype').replace(/__name__/g, index); // J'injecte ce code au sein de la div

  $('#ad_images').append(tmpl);
  $('#widgets-counter').val(index + 1); // Je gère le bouton supprimer

  handleDeleteButtons();
});

function handleDeleteButtons() {
  $('button[data-action="delete"]').click(function () {
    var target = this.dataset.target;
    $(target).remove();
  });
}

function updateCounter() {
  var count = +$('#ad_images div.form-group').length;
  $('#widgets-counter').val(count);
}

updateCounter();
handleDeleteButtons();

/***/ })

},[["./assets/js/ad.js","runtime","vendors~ad"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWQuanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaW5kZXgiLCJ2YWwiLCJ0bXBsIiwiZGF0YSIsInJlcGxhY2UiLCJhcHBlbmQiLCJoYW5kbGVEZWxldGVCdXR0b25zIiwidGFyZ2V0IiwiZGF0YXNldCIsInJlbW92ZSIsInVwZGF0ZUNvdW50ZXIiLCJjb3VudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsS0FBaEIsQ0FBc0IsWUFBWTtBQUM5QjtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDRixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsRUFBZixDQUY4QixDQUk5Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdKLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JLLElBQWhCLENBQXFCLFdBQXJCLEVBQWtDQyxPQUFsQyxDQUEwQyxXQUExQyxFQUF1REosS0FBdkQsQ0FBYixDQUw4QixDQU85Qjs7QUFDQUYsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk8sTUFBaEIsQ0FBdUJILElBQXZCO0FBRUFKLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxHQUF0QixDQUEwQkQsS0FBSyxHQUFHLENBQWxDLEVBVjhCLENBWTlCOztBQUNBTSxxQkFBbUI7QUFDdEIsQ0FkRDs7QUFnQkEsU0FBU0EsbUJBQVQsR0FBK0I7QUFDM0JSLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxLQUFsQyxDQUF3QyxZQUFZO0FBQ2hELFFBQU1RLE1BQU0sR0FBRyxLQUFLQyxPQUFMLENBQWFELE1BQTVCO0FBQ0FULEtBQUMsQ0FBQ1MsTUFBRCxDQUFELENBQVVFLE1BQVY7QUFDSCxHQUhEO0FBSUg7O0FBRUQsU0FBU0MsYUFBVCxHQUF5QjtBQUNyQixNQUFNQyxLQUFLLEdBQUcsQ0FBQ2IsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JjLE1BQTlDO0FBRUFkLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxHQUF0QixDQUEwQlUsS0FBMUI7QUFDSDs7QUFFREQsYUFBYTtBQUNiSixtQkFBbUIsRyIsImZpbGUiOiJhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJyNhZGQtaW1hZ2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBKZSByw6ljdXDDqHJlIGxlIG51bcOpcm8gZGVzIGZ1dHVycyBjaGFtcHMgcXVlIGVqIHZhaXMgY3LDqWVyXHJcbiAgICBjb25zdCBpbmRleCA9ICskKCcjd2lkZ2V0cy1jb3VudGVyJykudmFsKCk7XHJcblxyXG4gICAgLy8gSmUgcsOpY3Vww6hyZSBsZSBwcm90b3R5cGUgZGVzIGVudHLDqWVzXHJcbiAgICBjb25zdCB0bXBsID0gJCgnI2FkX2ltYWdlcycpLmRhdGEoJ3Byb3RvdHlwZScpLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuXHJcbiAgICAvLyBKJ2luamVjdGUgY2UgY29kZSBhdSBzZWluIGRlIGxhIGRpdlxyXG4gICAgJCgnI2FkX2ltYWdlcycpLmFwcGVuZCh0bXBsKTtcclxuXHJcbiAgICAkKCcjd2lkZ2V0cy1jb3VudGVyJykudmFsKGluZGV4ICsgMSk7XHJcblxyXG4gICAgLy8gSmUgZ8OocmUgbGUgYm91dG9uIHN1cHByaW1lclxyXG4gICAgaGFuZGxlRGVsZXRlQnV0dG9ucygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbnMoKSB7XHJcbiAgICAkKCdidXR0b25bZGF0YS1hY3Rpb249XCJkZWxldGVcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgICAkKHRhcmdldCkucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ291bnRlcigpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gKyQoJyNhZF9pbWFnZXMgZGl2LmZvcm0tZ3JvdXAnKS5sZW5ndGg7XHJcblxyXG4gICAgJCgnI3dpZGdldHMtY291bnRlcicpLnZhbChjb3VudCk7XHJcbn1cclxuXHJcbnVwZGF0ZUNvdW50ZXIoKTtcclxuaGFuZGxlRGVsZXRlQnV0dG9ucygpOyJdLCJzb3VyY2VSb290IjoiIn0=