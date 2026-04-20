"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.ts"
/*!***********************!*\
  !*** ./assets/app.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_shared_UI_Autogrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/shared/UI/Autogrow */ "./assets/scripts/shared/UI/Autogrow.ts");
/* harmony import */ var _scripts_core_DomReady__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/core/DomReady */ "./assets/scripts/core/DomReady.ts");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var notyf_notyf_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notyf/notyf.min.css */ "./node_modules/notyf/notyf.min.css");
/* harmony import */ var _scripts_shared_UI_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/shared/UI/loader */ "./assets/scripts/shared/UI/loader.ts");






_scripts_core_DomReady__WEBPACK_IMPORTED_MODULE_1__.domReady.ready(function () {
  _scripts_shared_UI_Autogrow__WEBPACK_IMPORTED_MODULE_0__.Autogrow.init();
}).onLoad(function () {
  _scripts_shared_UI_loader__WEBPACK_IMPORTED_MODULE_5__.loader.hide();
});

/***/ },

/***/ "./assets/scripts/core/DomReady.ts"
/*!*****************************************!*\
  !*** ./assets/scripts/core/DomReady.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomReady: () => (/* binding */ DomReady),
/* harmony export */   domReady: () => (/* binding */ domReady)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);











function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Allows executing a function when the DOM is fully loaded.
 * Avoids repeating document.addEventListener('DOMContentLoaded', ...)
 *
 * Usage:
 * DomReady.run(() => {
 *   console.log('DOM ready');
 * });
 */
var DomReady = /*#__PURE__*/function () {
  function DomReady() {
    _classCallCheck(this, DomReady);
  }
  return _createClass(DomReady, [{
    key: "onLoad",
    value:
    /**
     * Executes the callback when the entire page (including images and subframes) is loaded.
     * @param {() => void} callback
     * @returns {DomReady}
     */
    function onLoad(callback) {
      if (document.readyState === 'complete') {
        callback();
      } else {
        window.addEventListener('load', callback, {
          once: true
        });
      }
      return this;
    }
    /**
     * Executes the callback when the DOM is ready (but before images and subframes are loaded).
     * @param {() => void} callback
     * @returns {DomReady}
     */
  }, {
    key: "ready",
    value: function ready(callback) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
      } else {
        callback();
      }
      return this;
    }
  }]);
}();
var domReady = new DomReady();

/***/ },

/***/ "./assets/scripts/shared/UI/Autogrow.ts"
/*!**********************************************!*\
  !*** ./assets/scripts/shared/UI/Autogrow.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Autogrow: () => (/* binding */ Autogrow)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _functions_debounce__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../functions/debounce */ "./assets/scripts/shared/functions/debounce.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }





















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/**
 * Autogrow applies automatic height growth to textarea elements.
 */
var Autogrow = /*#__PURE__*/function () {
  function Autogrow(textarea) {
    _classCallCheck(this, Autogrow);
    this.textarea = textarea;
    this.onFocus = this.onFocus.bind(this);
    this.autogrow = this.autogrow.bind(this);
    this.onResizeDebounced = (0,_functions_debounce__WEBPACK_IMPORTED_MODULE_21__.debounce)(this.onResize.bind(this), 300);
    this.textarea.addEventListener('focus', this.onFocus);
  }
  return _createClass(Autogrow, [{
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('resize', this.onResizeDebounced);
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.textarea.style.overflow = 'hidden';
      this.textarea.style.resize = 'none';
      this.textarea.style.boxSizing = 'border-box';
      this.autogrow();
      window.addEventListener('resize', this.onResizeDebounced);
      this.textarea.addEventListener('input', this.autogrow);
      this.textarea.removeEventListener('focus', this.onFocus);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.autogrow();
    }
  }, {
    key: "autogrow",
    value: function autogrow() {
      this.textarea.style.height = 'auto';
      this.textarea.style.height = this.textarea.scrollHeight + 'px';
    }
  }], [{
    key: "apply",
    value: function apply(textarea) {
      if (!textarea.__autogrow) {
        textarea.__autogrow = new Autogrow(textarea);
      }
    }
    /**
     * Applies autogrow to all existing textareas and watches for new ones via MutationObserver.
     */
  }, {
    key: "init",
    value: function init() {
      document.querySelectorAll('textarea').forEach(Autogrow.apply);
      var observer = new MutationObserver(function (mutations) {
        var _iterator = _createForOfIteratorHelper(mutations),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;
            var _iterator2 = _createForOfIteratorHelper(mutation.addedNodes),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var node = _step2.value;
                if (node instanceof HTMLTextAreaElement) {
                  Autogrow.apply(node);
                } else if (node instanceof Element) {
                  node.querySelectorAll('textarea').forEach(Autogrow.apply);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }]);
}();

/***/ },

/***/ "./assets/scripts/shared/UI/loader.ts"
/*!********************************************!*\
  !*** ./assets/scripts/shared/UI/loader.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loader: () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);



var loader = {
  /**
   * Shows the page loader
   */
  show: function show() {
    var pageLoader = document.getElementById('page_loader');
    if (pageLoader) {
      pageLoader.classList.remove('d-none');
      if (pageLoader.hasAttribute('style')) {
        pageLoader.removeAttribute('style');
      }
    }
  },
  /**
   * Hides the page loader
   */
  hide: function hide() {
    var pageLoader = document.getElementById('page_loader');
    if (pageLoader) pageLoader.classList.add('d-none');
  },
  /**
   * Freezes an HTML element by displaying a loader over it
   *
   * @param {HTMLElement} element The element to freeze
   * @param options {
   *   darken?: boolean;
   *   rounded?: string | boolean;
   *   text?: string;
   *   textColor?: string;
   * }
   */
  freezeElement: function freezeElement(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!element) return;
    var _options$darken = options.darken,
      darken = _options$darken === void 0 ? true : _options$darken,
      _options$rounded = options.rounded,
      rounded = _options$rounded === void 0 ? false : _options$rounded,
      _options$text = options.text,
      text = _options$text === void 0 ? '' : _options$text,
      _options$textColor = options.textColor,
      textColor = _options$textColor === void 0 ? '#232d55' : _options$textColor;
    // Remove any existing loader
    this.unfreezeElement(element);
    // Overlay wrapper
    var wrapper = document.createElement('div');
    wrapper.classList.add('element-loader-wrapper');
    wrapper.style.position = 'absolute';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.zIndex = '9999';
    wrapper.style.pointerEvents = 'all';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.alignItems = 'center';
    // Force the parent to relative positioning
    var computedStyle = window.getComputedStyle(element);
    if (computedStyle.position === 'static' || !computedStyle.position) {
      element.style.position = 'relative';
    }
    // Main loader element
    var loader = document.createElement('div');
    loader.classList.add('element-loader');
    if (darken) loader.classList.add('darken');
    // Border radius applied here
    if (rounded) {
      loader.style.borderRadius = typeof rounded === 'string' ? rounded : '0.5rem'; // default value when rounded = true
    }
    // Spinner
    var spinner = document.createElement('div');
    spinner.classList.add('element-loader-spinner');
    loader.appendChild(spinner);
    // Text added inside the loader
    if (text) {
      var textEl = document.createElement('div');
      textEl.classList.add('element-loader-text');
      textEl.textContent = text;
      textEl.style.marginTop = '8px';
      textEl.style.fontSize = '0.9rem';
      textEl.style.fontWeight = '500';
      textEl.style.color = textColor;
      loader.appendChild(textEl);
    }
    wrapper.appendChild(loader);
    element.appendChild(wrapper);
  },
  /**
   * Unfreezes a previously frozen element
   *
   * @param {HTMLElement} element
   */
  unfreezeElement: function unfreezeElement(element) {
    if (element) {
      var wrapper = element.querySelector('.element-loader-wrapper');
      if (wrapper) wrapper.remove();
    } else {
      // Global fallback: remove all loaders from the DOM
      document.querySelectorAll('.element-loader-wrapper').forEach(function (el) {
        return el.remove();
      });
    }
  }
};

/***/ },

/***/ "./assets/scripts/shared/functions/debounce.ts"
/*!*****************************************************!*\
  !*** ./assets/scripts/shared/functions/debounce.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Debounce function that limits how often the original function can run.
 *
 * @param callback - The function to execute after the delay.
 * @param delay - The delay in ms before executing the function.
 * @param immediate - Whether to execute the function immediately.
 * @returns - A new function that can be called with the delay behavior.
 */
function debounce(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var immediate = arguments.length > 2 ? arguments[2] : undefined;
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    var callNow = immediate && !timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      if (!immediate) callback.apply(context, args);
    }, delay);
    if (callNow) callback.apply(context, args);
  };
}

/***/ },

/***/ "./assets/styles/app.scss"
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-742664","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_notyf_notyf_min_css-node-01710e"], () => (__webpack_exec__("./assets/app.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUEsTUFBQUEsSUFBQSxHQUFBSCxJQUFBLEVBQUFHLElBQUE7TUFBSkYsSUFBSSxDQUFBRSxJQUFBLElBQUExQyxTQUFBLENBQUEwQyxJQUFBO0lBQUE7SUFDcEIsSUFBTUMsT0FBTyxHQUFHLElBQUk7SUFDcEIsSUFBTUMsT0FBTyxHQUFHUCxTQUFTLElBQUksQ0FBQ0MsS0FBSztJQUNuQyxJQUFJQSxLQUFLLEVBQ0xPLFlBQVksQ0FBQ1AsS0FBSyxDQUFDO0lBQ3ZCQSxLQUFLLEdBQUdRLFVBQVUsQ0FBQyxZQUFNO01BQ3JCUixLQUFLLEdBQUcsSUFBSTtNQUNaLElBQUksQ0FBQ0QsU0FBUyxFQUNWaEcsUUFBUSxDQUFDcUIsS0FBSyxDQUFDaUYsT0FBTyxFQUFFSCxJQUFJLENBQUM7SUFDckMsQ0FBQyxFQUFFSixLQUFLLENBQUM7SUFDVCxJQUFJUSxPQUFPLEVBQ1B2RyxRQUFRLENBQUNxQixLQUFLLENBQUNpRixPQUFPLEVBQUVILElBQUksQ0FBQztFQUNyQyxDQUFDO0FBQ0wsQzs7Ozs7Ozs7Ozs7QUN2QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2NvcmUvRG9tUmVhZHkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2hhcmVkL1VJL0F1dG9ncm93LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NoYXJlZC9VSS9sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2hhcmVkL2Z1bmN0aW9ucy9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzNlOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0b2dyb3cgfSBmcm9tICcuL3NjcmlwdHMvc2hhcmVkL1VJL0F1dG9ncm93JztcbmltcG9ydCB7IGRvbVJlYWR5IH0gZnJvbSAnLi9zY3JpcHRzL2NvcmUvRG9tUmVhZHknO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ25vdHlmL25vdHlmLm1pbi5jc3MnO1xuaW1wb3J0IHsgbG9hZGVyIH0gZnJvbSAnLi9zY3JpcHRzL3NoYXJlZC9VSS9sb2FkZXInO1xuZG9tUmVhZHlcbiAgICAucmVhZHkoKCkgPT4ge1xuICAgIEF1dG9ncm93LmluaXQoKTtcbn0pXG4gICAgLm9uTG9hZCgoKSA9PiB7XG4gICAgbG9hZGVyLmhpZGUoKTtcbn0pO1xuIiwiLyoqXG4gKiBBbGxvd3MgZXhlY3V0aW5nIGEgZnVuY3Rpb24gd2hlbiB0aGUgRE9NIGlzIGZ1bGx5IGxvYWRlZC5cbiAqIEF2b2lkcyByZXBlYXRpbmcgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIC4uLilcbiAqXG4gKiBVc2FnZTpcbiAqIERvbVJlYWR5LnJ1bigoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdET00gcmVhZHknKTtcbiAqIH0pO1xuICovXG5leHBvcnQgY2xhc3MgRG9tUmVhZHkge1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBlbnRpcmUgcGFnZSAoaW5jbHVkaW5nIGltYWdlcyBhbmQgc3ViZnJhbWVzKSBpcyBsb2FkZWQuXG4gICAgICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtEb21SZWFkeX1cbiAgICAgKi9cbiAgICBvbkxvYWQoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBET00gaXMgcmVhZHkgKGJ1dCBiZWZvcmUgaW1hZ2VzIGFuZCBzdWJmcmFtZXMgYXJlIGxvYWRlZCkuXG4gICAgICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtEb21SZWFkeX1cbiAgICAgKi9cbiAgICByZWFkeShjYWxsYmFjaykge1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZG9tUmVhZHkgPSBuZXcgRG9tUmVhZHkoKTtcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2RlYm91bmNlJztcbi8qKlxuICogQXV0b2dyb3cgYXBwbGllcyBhdXRvbWF0aWMgaGVpZ2h0IGdyb3d0aCB0byB0ZXh0YXJlYSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEF1dG9ncm93IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0YXJlYSkge1xuICAgICAgICB0aGlzLnRleHRhcmVhID0gdGV4dGFyZWE7XG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmF1dG9ncm93ID0gdGhpcy5hdXRvZ3Jvdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUmVzaXplRGVib3VuY2VkID0gZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAzMDApO1xuICAgICAgICB0aGlzLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5vbkZvY3VzKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVEZWJvdW5jZWQpO1xuICAgIH1cbiAgICBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUucmVzaXplID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAgICAgdGhpcy5hdXRvZ3JvdygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZURlYm91bmNlZCk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmF1dG9ncm93KTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMub25Gb2N1cyk7XG4gICAgfVxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLmF1dG9ncm93KCk7XG4gICAgfVxuICAgIGF1dG9ncm93KCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgfVxuICAgIHN0YXRpYyBhcHBseSh0ZXh0YXJlYSkge1xuICAgICAgICBpZiAoIXRleHRhcmVhLl9fYXV0b2dyb3cpIHtcbiAgICAgICAgICAgIHRleHRhcmVhLl9fYXV0b2dyb3cgPSBuZXcgQXV0b2dyb3codGV4dGFyZWEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYXV0b2dyb3cgdG8gYWxsIGV4aXN0aW5nIHRleHRhcmVhcyBhbmQgd2F0Y2hlcyBmb3IgbmV3IG9uZXMgdmlhIE11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgICovXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJykuZm9yRWFjaChBdXRvZ3Jvdy5hcHBseSk7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dG9ncm93LmFwcGx5KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJykuZm9yRWFjaChBdXRvZ3Jvdy5hcHBseSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBsb2FkZXIgPSB7XG4gICAgLyoqXG4gICAgICogU2hvd3MgdGhlIHBhZ2UgbG9hZGVyXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwYWdlTG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VfbG9hZGVyJyk7XG4gICAgICAgIGlmIChwYWdlTG9hZGVyKSB7XG4gICAgICAgICAgICBwYWdlTG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgaWYgKHBhZ2VMb2FkZXIuaGFzQXR0cmlidXRlKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgcGFnZUxvYWRlci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBwYWdlIGxvYWRlclxuICAgICAqL1xuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcGFnZUxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlX2xvYWRlcicpO1xuICAgICAgICBpZiAocGFnZUxvYWRlcilcbiAgICAgICAgICAgIHBhZ2VMb2FkZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBGcmVlemVzIGFuIEhUTUwgZWxlbWVudCBieSBkaXNwbGF5aW5nIGEgbG9hZGVyIG92ZXIgaXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gZnJlZXplXG4gICAgICogQHBhcmFtIG9wdGlvbnMge1xuICAgICAqICAgZGFya2VuPzogYm9vbGVhbjtcbiAgICAgKiAgIHJvdW5kZWQ/OiBzdHJpbmcgfCBib29sZWFuO1xuICAgICAqICAgdGV4dD86IHN0cmluZztcbiAgICAgKiAgIHRleHRDb2xvcj86IHN0cmluZztcbiAgICAgKiB9XG4gICAgICovXG4gICAgZnJlZXplRWxlbWVudChlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IGRhcmtlbiA9IHRydWUsIHJvdW5kZWQgPSBmYWxzZSwgdGV4dCA9ICcnLCB0ZXh0Q29sb3IgPSAnIzIzMmQ1NScgfSA9IG9wdGlvbnM7XG4gICAgICAgIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgbG9hZGVyXG4gICAgICAgIHRoaXMudW5mcmVlemVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAvLyBPdmVybGF5IHdyYXBwZXJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtbG9hZGVyLXdyYXBwZXInKTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnpJbmRleCA9ICc5OTk5JztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICAgICAgLy8gRm9yY2UgdGhlIHBhcmVudCB0byByZWxhdGl2ZSBwb3NpdGlvbmluZ1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJyB8fCAhY29tcHV0ZWRTdHlsZS5wb3NpdGlvbikge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFpbiBsb2FkZXIgZWxlbWVudFxuICAgICAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtbG9hZGVyJyk7XG4gICAgICAgIGlmIChkYXJrZW4pXG4gICAgICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnZGFya2VuJyk7XG4gICAgICAgIC8vIEJvcmRlciByYWRpdXMgYXBwbGllZCBoZXJlXG4gICAgICAgIGlmIChyb3VuZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIuc3R5bGUuYm9yZGVyUmFkaXVzID1cbiAgICAgICAgICAgICAgICB0eXBlb2Ygcm91bmRlZCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgIDogJzAuNXJlbSc7IC8vIGRlZmF1bHQgdmFsdWUgd2hlbiByb3VuZGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIFNwaW5uZXJcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtbG9hZGVyLXNwaW5uZXInKTtcbiAgICAgICAgbG9hZGVyLmFwcGVuZENoaWxkKHNwaW5uZXIpO1xuICAgICAgICAvLyBUZXh0IGFkZGVkIGluc2lkZSB0aGUgbG9hZGVyXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRleHRFbC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LWxvYWRlci10ZXh0Jyk7XG4gICAgICAgICAgICB0ZXh0RWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgdGV4dEVsLnN0eWxlLm1hcmdpblRvcCA9ICc4cHgnO1xuICAgICAgICAgICAgdGV4dEVsLnN0eWxlLmZvbnRTaXplID0gJzAuOXJlbSc7XG4gICAgICAgICAgICB0ZXh0RWwuc3R5bGUuZm9udFdlaWdodCA9ICc1MDAnO1xuICAgICAgICAgICAgdGV4dEVsLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xuICAgICAgICAgICAgbG9hZGVyLmFwcGVuZENoaWxkKHRleHRFbCk7XG4gICAgICAgIH1cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5mcmVlemVzIGEgcHJldmlvdXNseSBmcm96ZW4gZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIHVuZnJlZXplRWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50LWxvYWRlci13cmFwcGVyJyk7XG4gICAgICAgICAgICBpZiAod3JhcHBlcilcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gR2xvYmFsIGZhbGxiYWNrOiByZW1vdmUgYWxsIGxvYWRlcnMgZnJvbSB0aGUgRE9NXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWxlbWVudC1sb2FkZXItd3JhcHBlcicpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5yZW1vdmUoKSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsIi8qKlxuICogRGVib3VuY2UgZnVuY3Rpb24gdGhhdCBsaW1pdHMgaG93IG9mdGVuIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBjYW4gcnVuLlxuICpcbiAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIHRoZSBkZWxheS5cbiAqIEBwYXJhbSBkZWxheSAtIFRoZSBkZWxheSBpbiBtcyBiZWZvcmUgZXhlY3V0aW5nIHRoZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSBpbW1lZGlhdGUgLSBXaGV0aGVyIHRvIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uIGltbWVkaWF0ZWx5LlxuICogQHJldHVybnMgLSBBIG5ldyBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWQgd2l0aCB0aGUgZGVsYXkgYmVoYXZpb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShjYWxsYmFjaywgZGVsYXkgPSAzMDAsIGltbWVkaWF0ZSkge1xuICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lcjtcbiAgICAgICAgaWYgKHRpbWVyKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIGlmIChjYWxsTm93KVxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJBdXRvZ3JvdyIsImRvbVJlYWR5IiwibG9hZGVyIiwicmVhZHkiLCJpbml0Iiwib25Mb2FkIiwiaGlkZSIsIkRvbVJlYWR5IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjYWxsYmFjayIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwiZGVib3VuY2UiLCJ0ZXh0YXJlYSIsIm9uRm9jdXMiLCJiaW5kIiwiYXV0b2dyb3ciLCJvblJlc2l6ZURlYm91bmNlZCIsIm9uUmVzaXplIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVzaXplIiwiYm94U2l6aW5nIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYXBwbHkiLCJfX2F1dG9ncm93IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwibXV0YXRpb24iLCJfaXRlcmF0b3IyIiwiYWRkZWROb2RlcyIsIl9zdGVwMiIsIm5vZGUiLCJIVE1MVGV4dEFyZWFFbGVtZW50IiwiRWxlbWVudCIsImVyciIsImUiLCJmIiwib2JzZXJ2ZSIsImJvZHkiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwic2hvdyIsInBhZ2VMb2FkZXIiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZCIsImZyZWV6ZUVsZW1lbnQiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9vcHRpb25zJGRhcmtlbiIsImRhcmtlbiIsIl9vcHRpb25zJHJvdW5kZWQiLCJyb3VuZGVkIiwiX29wdGlvbnMkdGV4dCIsInRleHQiLCJfb3B0aW9ucyR0ZXh0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJ1bmZyZWV6ZUVsZW1lbnQiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvcmRlclJhZGl1cyIsInNwaW5uZXIiLCJhcHBlbmRDaGlsZCIsInRleHRFbCIsInRleHRDb250ZW50IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJxdWVyeVNlbGVjdG9yIiwiZWwiLCJkZWxheSIsImltbWVkaWF0ZSIsInRpbWVyIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb250ZXh0IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9