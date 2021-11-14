(self["webpackChunk"] = self["webpackChunk"] || []).push([["ad"],{

/***/ "./assets/js/ad.js":
/*!*************************!*\
  !*** ./assets/js/ad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_string_replace_js"], () => (__webpack_exec__("./assets/js/ad.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWQuanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaW5kZXgiLCJ2YWwiLCJ0bXBsIiwiZGF0YSIsInJlcGxhY2UiLCJhcHBlbmQiLCJoYW5kbGVEZWxldGVCdXR0b25zIiwidGFyZ2V0IiwiZGF0YXNldCIsInJlbW92ZSIsInVwZGF0ZUNvdW50ZXIiLCJjb3VudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLEtBQWhCLENBQXNCLFlBQVk7QUFDOUI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JHLEdBQXRCLEVBQWYsQ0FGOEIsQ0FJOUI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHSixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSyxJQUFoQixDQUFxQixXQUFyQixFQUFrQ0MsT0FBbEMsQ0FBMEMsV0FBMUMsRUFBdURKLEtBQXZELENBQWIsQ0FMOEIsQ0FPOUI7O0FBQ0FGLEdBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JPLE1BQWhCLENBQXVCSCxJQUF2QjtBQUVBSixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsQ0FBMEJELEtBQUssR0FBRyxDQUFsQyxFQVY4QixDQVk5Qjs7QUFDQU0scUJBQW1CO0FBQ3RCLENBZEQ7O0FBZ0JBLFNBQVNBLG1CQUFULEdBQStCO0FBQzNCUixHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0MsS0FBbEMsQ0FBd0MsWUFBWTtBQUNoRCxRQUFNUSxNQUFNLEdBQUcsS0FBS0MsT0FBTCxDQUFhRCxNQUE1QjtBQUNBVCxLQUFDLENBQUNTLE1BQUQsQ0FBRCxDQUFVRSxNQUFWO0FBQ0gsR0FIRDtBQUlIOztBQUVELFNBQVNDLGFBQVQsR0FBeUI7QUFDckIsTUFBTUMsS0FBSyxHQUFHLENBQUNiLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCYyxNQUE5QztBQUVBZCxHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsR0FBdEIsQ0FBMEJVLEtBQTFCO0FBQ0g7O0FBRURELGFBQWE7QUFDYkosbUJBQW1CLEciLCJmaWxlIjoiYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcjYWRkLWltYWdlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gSmUgcsOpY3Vww6hyZSBsZSBudW3DqXJvIGRlcyBmdXR1cnMgY2hhbXBzIHF1ZSBlaiB2YWlzIGNyw6llclxyXG4gICAgY29uc3QgaW5kZXggPSArJCgnI3dpZGdldHMtY291bnRlcicpLnZhbCgpO1xyXG5cclxuICAgIC8vIEplIHLDqWN1cMOocmUgbGUgcHJvdG90eXBlIGRlcyBlbnRyw6llc1xyXG4gICAgY29uc3QgdG1wbCA9ICQoJyNhZF9pbWFnZXMnKS5kYXRhKCdwcm90b3R5cGUnKS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcblxyXG4gICAgLy8gSidpbmplY3RlIGNlIGNvZGUgYXUgc2VpbiBkZSBsYSBkaXZcclxuICAgICQoJyNhZF9pbWFnZXMnKS5hcHBlbmQodG1wbCk7XHJcblxyXG4gICAgJCgnI3dpZGdldHMtY291bnRlcicpLnZhbChpbmRleCArIDEpO1xyXG5cclxuICAgIC8vIEplIGfDqHJlIGxlIGJvdXRvbiBzdXBwcmltZXJcclxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbnMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25zKCkge1xyXG4gICAgJCgnYnV0dG9uW2RhdGEtYWN0aW9uPVwiZGVsZXRlXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgJCh0YXJnZXQpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKSB7XHJcbiAgICBjb25zdCBjb3VudCA9ICskKCcjYWRfaW1hZ2VzIGRpdi5mb3JtLWdyb3VwJykubGVuZ3RoO1xyXG5cclxuICAgICQoJyN3aWRnZXRzLWNvdW50ZXInKS52YWwoY291bnQpO1xyXG59XHJcblxyXG51cGRhdGVDb3VudGVyKCk7XHJcbmhhbmRsZURlbGV0ZUJ1dHRvbnMoKTsiXSwic291cmNlUm9vdCI6IiJ9