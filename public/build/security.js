"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["security"],{

/***/ "./assets/scripts/core/Api.ts"
/*!************************************!*\
  !*** ./assets/scripts/core/Api.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Api: () => (/* binding */ Api),
/* harmony export */   api: () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_35__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }




































function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
    this.defaultTimeout = 15000;
  }
  return _createClass(Api, [{
    key: "get",
    value: function get(url, payload) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('GET', url, payload, config);
    }
  }, {
    key: "post",
    value: function post(url, payload) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('POST', url, payload, config);
    }
  }, {
    key: "put",
    value: function put(url, payload) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('PUT', url, payload, config);
    }
  }, {
    key: "delete",
    value: function _delete(url, payload) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('DELETE', url, payload, config);
    }
  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(method, rawUrl, payload) {
        var _config$timeout, _config$credentials;
        var config,
          controller,
          timeout,
          timeoutId,
          options,
          url,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              config = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
              controller = new AbortController();
              timeout = (_config$timeout = config.timeout) !== null && _config$timeout !== void 0 ? _config$timeout : this.defaultTimeout;
              timeoutId = setTimeout(function () {
                controller.abort();
              }, timeout);
              options = {
                method: method,
                signal: controller.signal,
                credentials: (_config$credentials = config.credentials) !== null && _config$credentials !== void 0 ? _config$credentials : 'same-origin',
                headers: _objectSpread({}, config.headers)
              };
              url = payload ? this.payloadHandler(method, payload, rawUrl, options) : rawUrl;
              return _context.a(2, this.fetch(url, options, timeoutId));
          }
        }, _callee, this);
      }));
      function request(_x, _x2, _x3) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url, options, timeoutId) {
        var response, contentType, payload, _payload$success, _payload$message, _payload$data, _payload$errors, _payload$meta, textContent, isAbortError, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return globalThis.fetch(url, options);
            case 1:
              response = _context2.v;
              contentType = response.headers.get('content-type') || '';
              if (response.ok) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2, this.buildErrorResponse(response, contentType));
            case 2:
              if (!(response.status === 204 || response.status === 205)) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2, {
                success: true,
                message: 'success',
                data: null,
                errors: null,
                meta: null
              });
            case 3:
              if (!contentType.includes('json')) {
                _context2.n = 6;
                break;
              }
              _context2.n = 4;
              return response.json();
            case 4:
              payload = _context2.v;
              if (!this.isApiResponse(payload)) {
                _context2.n = 5;
                break;
              }
              return _context2.a(2, {
                success: (_payload$success = payload.success) !== null && _payload$success !== void 0 ? _payload$success : true,
                message: (_payload$message = payload.message) !== null && _payload$message !== void 0 ? _payload$message : 'success',
                data: (_payload$data = payload.data) !== null && _payload$data !== void 0 ? _payload$data : null,
                errors: (_payload$errors = payload.errors) !== null && _payload$errors !== void 0 ? _payload$errors : null,
                meta: (_payload$meta = payload.meta) !== null && _payload$meta !== void 0 ? _payload$meta : null
              });
            case 5:
              return _context2.a(2, {
                success: true,
                message: 'success',
                data: payload,
                errors: null,
                meta: null
              });
            case 6:
              _context2.n = 7;
              return response.text();
            case 7:
              textContent = _context2.v;
              return _context2.a(2, {
                success: true,
                message: 'success',
                data: textContent,
                errors: null,
                meta: null
              });
            case 8:
              _context2.p = 8;
              _t = _context2.v;
              isAbortError = _t instanceof DOMException && _t.name === 'AbortError';
              return _context2.a(2, {
                success: false,
                message: isAbortError ? 'Request timeout' : 'Network error',
                data: null,
                errors: isAbortError ? {
                  timeout: true
                } : _t,
                meta: null
              });
            case 9:
              _context2.p = 9;
              clearTimeout(timeoutId);
              return _context2.f(9);
            case 10:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 8, 9, 10]]);
      }));
      function fetch(_x4, _x5, _x6) {
        return _fetch.apply(this, arguments);
      }
      return fetch;
    }()
  }, {
    key: "buildErrorResponse",
    value: function () {
      var _buildErrorResponse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(response, contentType) {
        var fallbackMessage, _raw$data, _raw$errors, _raw$meta, payload, _payload$message2, _payload$data2, _payload$errors2, _payload$meta2, raw, text;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              fallbackMessage = "HTTP ".concat(response.status);
              if (!contentType.includes('json')) {
                _context3.n = 3;
                break;
              }
              _context3.n = 1;
              return response.json();
            case 1:
              payload = _context3.v;
              if (!this.isApiResponse(payload)) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2, {
                success: false,
                message: (_payload$message2 = payload.message) !== null && _payload$message2 !== void 0 ? _payload$message2 : fallbackMessage,
                data: (_payload$data2 = payload.data) !== null && _payload$data2 !== void 0 ? _payload$data2 : null,
                errors: (_payload$errors2 = payload.errors) !== null && _payload$errors2 !== void 0 ? _payload$errors2 : null,
                meta: (_payload$meta2 = payload.meta) !== null && _payload$meta2 !== void 0 ? _payload$meta2 : null
              });
            case 2:
              raw = payload;
              return _context3.a(2, {
                success: false,
                message: typeof raw.message === 'string' ? raw.message : fallbackMessage,
                data: (_raw$data = raw.data) !== null && _raw$data !== void 0 ? _raw$data : null,
                errors: (_raw$errors = raw.errors) !== null && _raw$errors !== void 0 ? _raw$errors : payload,
                meta: (_raw$meta = raw.meta) !== null && _raw$meta !== void 0 ? _raw$meta : null
              });
            case 3:
              _context3.n = 4;
              return response.text();
            case 4:
              text = _context3.v;
              return _context3.a(2, {
                success: false,
                message: text || fallbackMessage,
                data: null,
                errors: null,
                meta: null
              });
          }
        }, _callee3, this);
      }));
      function buildErrorResponse(_x7, _x8) {
        return _buildErrorResponse.apply(this, arguments);
      }
      return buildErrorResponse;
    }()
  }, {
    key: "payloadHandler",
    value: function payloadHandler(method, payload, url, options) {
      if (method === 'GET') {
        var qs = new URLSearchParams();
        if (payload instanceof FormData) {
          payload.forEach(function (value, key) {
            if (value !== undefined && value !== null) {
              qs.append(key, String(value));
            }
          });
        } else {
          Object.entries(payload).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            if (value !== undefined && value !== null) {
              qs.append(key, String(value));
            }
          });
        }
        var queryString = qs.toString();
        if (queryString) {
          return url + (url.includes('?') ? '&' : '?') + queryString;
        }
        return url;
      }
      if (payload instanceof FormData) {
        options.body = payload;
        return url;
      }
      options.headers = _objectSpread(_objectSpread({}, options.headers), {}, {
        'Content-Type': 'application/json'
      });
      options.body = JSON.stringify(payload);
      return url;
    }
  }, {
    key: "isApiResponse",
    value: function isApiResponse(value) {
      if (_typeof(value) !== 'object' || value === null) {
        return false;
      }
      return 'success' in value || 'message' in value || 'data' in value || 'errors' in value || 'meta' in value;
    }
  }]);
}();
var api = new Api();

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

/***/ "./assets/scripts/features/security/Register.ts"
/*!******************************************************!*\
  !*** ./assets/scripts/features/security/Register.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register: () => (/* binding */ Register)
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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _api_securityApi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./api/securityApi */ "./assets/scripts/features/security/api/securityApi.ts");
/* harmony import */ var _shared_UI_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/UI/loader */ "./assets/scripts/shared/UI/loader.ts");
/* harmony import */ var _shared_UI_Toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/UI/Toast */ "./assets/scripts/shared/UI/Toast.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

















function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Register = /*#__PURE__*/function () {
  function Register() {
    _classCallCheck(this, Register);
    this.formName = 'registration';
    this.submitBtn = document.getElementById('register-button');
    this.form = document.querySelector("form[name=\"".concat(this.formName, "\"]"));
  }
  return _createClass(Register, [{
    key: "init",
    value: function init() {
      var _this = this;
      if (!this.form || !this.submitBtn) return;
      this.form.addEventListener('submit', function (e) {
        return _this.bindSubmit(e);
      });
    }
  }, {
    key: "bindSubmit",
    value: function () {
      var _bindSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
        var _response$message2, data, response, _response$message, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              e.preventDefault();
              _context.p = 1;
              _shared_UI_loader__WEBPACK_IMPORTED_MODULE_18__.loader.freezeElement(this.submitBtn);
              data = new FormData(this.form);
              _context.n = 2;
              return _api_securityApi__WEBPACK_IMPORTED_MODULE_17__.securityApi.register(data);
            case 2:
              response = _context.v;
              if (response.success) {
                _context.n = 3;
                break;
              }
              _shared_UI_Toast__WEBPACK_IMPORTED_MODULE_19__.toast.error((_response$message = response.message) !== null && _response$message !== void 0 ? _response$message : 'An error occurred, please try again.');
              return _context.a(2);
            case 3:
              _shared_UI_Toast__WEBPACK_IMPORTED_MODULE_19__.toast.success((_response$message2 = response.message) !== null && _response$message2 !== void 0 ? _response$message2 : 'Successfully registered!. You can now log in.');
              _context.n = 4;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 5000);
              });
            case 4:
              this.form.reset();
              window.location.href = '/login';
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              console.error(_t);
            case 6:
              _context.p = 6;
              _shared_UI_loader__WEBPACK_IMPORTED_MODULE_18__.loader.unfreezeElement(this.submitBtn);
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[1, 5, 6, 7]]);
      }));
      function bindSubmit(_x) {
        return _bindSubmit.apply(this, arguments);
      }
      return bindSubmit;
    }()
  }]);
}();

/***/ },

/***/ "./assets/scripts/features/security/api/securityApi.ts"
/*!*************************************************************!*\
  !*** ./assets/scripts/features/security/api/securityApi.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   securityApi: () => (/* binding */ securityApi)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Api */ "./assets/scripts/core/Api.ts");









function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var securityApi = {
  register: function () {
    var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2, _core_Api__WEBPACK_IMPORTED_MODULE_9__.api.post('/register', data));
        }
      }, _callee);
    }));
    function register(_x) {
      return _register.apply(this, arguments);
    }
    return register;
  }()
};

/***/ },

/***/ "./assets/scripts/features/security/security.ts"
/*!******************************************************!*\
  !*** ./assets/scripts/features/security/security.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register */ "./assets/scripts/features/security/Register.ts");
/* harmony import */ var _core_DomReady__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/DomReady */ "./assets/scripts/core/DomReady.ts");


_core_DomReady__WEBPACK_IMPORTED_MODULE_1__.domReady.ready(function () {
  new _Register__WEBPACK_IMPORTED_MODULE_0__.Register().init();
});

/***/ },

/***/ "./assets/scripts/shared/UI/Toast.ts"
/*!*******************************************!*\
  !*** ./assets/scripts/shared/UI/Toast.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toast: () => (/* binding */ Toast),
/* harmony export */   toast: () => (/* binding */ toast)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var notyf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! notyf */ "./node_modules/notyf/notyf.es.js");
/* harmony import */ var notyf_notyf_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! notyf/notyf.min.css */ "./node_modules/notyf/notyf.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }













function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Toast = /*#__PURE__*/function () {
  function Toast() {
    _classCallCheck(this, Toast);
    this.notyf = new notyf__WEBPACK_IMPORTED_MODULE_13__.Notyf({
      duration: 4000,
      position: {
        x: 'right',
        y: 'top'
      },
      dismissible: true,
      types: [{
        type: 'info',
        background: '#0d6efd',
        icon: '<i class="fas fa-info-circle text-white"></i>'
      }, {
        type: 'success',
        background: '#10b981'
      }]
    });
  }
  return _createClass(Toast, [{
    key: "success",
    value: function success(message) {
      this.notyf.success(message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.notyf.error(message);
    }
  }, {
    key: "info",
    value: function info(message, iconHtml) {
      var options = {
        type: 'info',
        message: message
      };
      if (iconHtml) {
        options.icon = iconHtml;
      }
      this.notyf.open(options);
    }
  }, {
    key: "confirm",
    value: function confirm(options) {
      return new Promise(function (resolve) {
        var title = options.title,
          text = options.text,
          _options$confirmButto = options.confirmButtonText,
          confirmButtonText = _options$confirmButto === void 0 ? 'Confirm' : _options$confirmButto,
          _options$cancelButton = options.cancelButtonText,
          cancelButtonText = _options$cancelButton === void 0 ? 'Cancel' : _options$cancelButton,
          _options$reverseColor = options.reverseColors,
          reverseColors = _options$reverseColor === void 0 ? false : _options$reverseColor,
          _options$confirmButto2 = options.confirmButtonColor,
          confirmButtonColor = _options$confirmButto2 === void 0 ? reverseColors ? '#FF5A5F' : '#0d6efd' : _options$confirmButto2,
          _options$cancelButton2 = options.cancelButtonColor,
          cancelButtonColor = _options$cancelButton2 === void 0 ? reverseColors ? '#0d6efd' : '#FF5A5F' : _options$cancelButton2;
        var dialog = document.createElement('dialog');
        dialog.className = 'ys-dialog-native p-4 rounded-2xl shadow border-0 bg-white';
        dialog.innerHTML = "\n        <form method=\"dialog\" class=\"flex flex-col gap-3\">\n          <h3 class=\"text-base font-bold text-gray-900 m-0\">".concat(title, "</h3>\n          ").concat(text ? "<p class=\"text-gray-600 m-0\">".concat(text, "</p>") : '', "\n\n          <div class=\"flex justify-end gap-2 mt-3\">\n            <button\n                value=\"cancel\"\n                style=\"background-color:").concat(cancelButtonColor, "\"\n                class=\"px-4 py-2 text-white rounded-2xl border-0 hover:opacity-90 transition\"\n            >\n              ").concat(cancelButtonText, "\n            </button>\n            <button\n                value=\"confirm\"\n                style=\"background-color:").concat(confirmButtonColor, "\"\n                class=\"px-4 py-2 text-white rounded-2xl border-0 hover:opacity-90 transition\"\n            >\n              ").concat(confirmButtonText, "\n            </button>\n          </div>\n        </form>\n      ");
        dialog.addEventListener('close', function () {
          var isConfirmed = dialog.returnValue === 'confirm';
          resolve({
            isConfirmed: isConfirmed
          });
          dialog.remove();
        });
        document.body.appendChild(dialog);
        dialog.showModal();
      });
    }
  }]);
}();
var toast = new Toast();

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

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-742664","vendors-node_modules_notyf_notyf_min_css-node_modules_notyf_notyf_es_js-node_modules_core-js_-d279c6"], () => (__webpack_exec__("./assets/scripts/features/security/security.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQzVDc0MsTUFBTSxDQUFDNUIsU0FBUyxDQUFDSSxHQUFHLENBQUMscUJBQXFCLENBQUM7TUFDM0N3QixNQUFNLENBQUN4SixXQUFXLEdBQUdnQixJQUFJO01BQ3pCd0ksTUFBTSxDQUFDZCxLQUFLLENBQUNlLFNBQVMsR0FBRyxLQUFLO01BQzlCRCxNQUFNLENBQUNkLEtBQUssQ0FBQ2dCLFFBQVEsR0FBRyxRQUFRO01BQ2hDRixNQUFNLENBQUNkLEtBQUssQ0FBQ2lCLFVBQVUsR0FBRyxLQUFLO01BQy9CSCxNQUFNLENBQUNkLEtBQUssQ0FBQ2tCLEtBQUssR0FBR3BCLFNBQVM7TUFDOUJ6RSxNQUFNLENBQUN5RCxXQUFXLENBQUNnQyxNQUFNLENBQUM7SUFDOUI7SUFDQWYsT0FBTyxDQUFDakIsV0FBVyxDQUFDekQsTUFBTSxDQUFDO0lBQzNCa0UsT0FBTyxDQUFDVCxXQUFXLENBQUNpQixPQUFPLENBQUM7RUFDaEMsQ0FBQztFQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSXBELGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBWTRDLE9BQU8sRUFBRTtJQUNoQyxJQUFJQSxPQUFPLEVBQUU7TUFDVCxJQUFNUSxPQUFPLEdBQUdSLE9BQU8sQ0FBQzNELGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztNQUNoRSxJQUFJbUUsT0FBTyxFQUNQQSxPQUFPLENBQUNsQixNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDLE1BQ0k7TUFDRDtNQUNBaEUsUUFBUSxDQUFDc0csZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FDL0M3TixPQUFPLENBQUMsVUFBQzhOLEVBQUU7UUFBQSxPQUFLQSxFQUFFLENBQUN2QyxNQUFNLENBQUMsQ0FBQztNQUFBLEVBQUM7SUFDckM7RUFDSjtBQUNKLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2NvcmUvQXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2NvcmUvRG9tUmVhZHkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZmVhdHVyZXMvc2VjdXJpdHkvUmVnaXN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZmVhdHVyZXMvc2VjdXJpdHkvYXBpL3NlY3VyaXR5QXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2ZlYXR1cmVzL3NlY3VyaXR5L3NlY3VyaXR5LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NoYXJlZC9VSS9Ub2FzdC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zaGFyZWQvVUkvbG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcGkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRUaW1lb3V0ID0gMTUwMDA7XG4gICAgfVxuICAgIGdldCh1cmwsIHBheWxvYWQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0dFVCcsIHVybCwgcGF5bG9hZCwgY29uZmlnKTtcbiAgICB9XG4gICAgcG9zdCh1cmwsIHBheWxvYWQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCB1cmwsIHBheWxvYWQsIGNvbmZpZyk7XG4gICAgfVxuICAgIHB1dCh1cmwsIHBheWxvYWQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwgcGF5bG9hZCwgY29uZmlnKTtcbiAgICB9XG4gICAgZGVsZXRlKHVybCwgcGF5bG9hZCwgY29uZmlnID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnREVMRVRFJywgdXJsLCBwYXlsb2FkLCBjb25maWcpO1xuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0KG1ldGhvZCwgcmF3VXJsLCBwYXlsb2FkLCBjb25maWcgPSB7fSkge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQgPz8gdGhpcy5kZWZhdWx0VGltZW91dDtcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBjb25maWcuY3JlZGVudGlhbHMgPz8gJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi5jb25maWcuaGVhZGVycyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybCA9IHBheWxvYWQgPyB0aGlzLnBheWxvYWRIYW5kbGVyKG1ldGhvZCwgcGF5bG9hZCwgcmF3VXJsLCBvcHRpb25zKSA6IHJhd1VybDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2godXJsLCBvcHRpb25zLCB0aW1lb3V0SWQpO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaCh1cmwsIG9wdGlvbnMsIHRpbWVvdXRJZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnbG9iYWxUaGlzLmZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEVycm9yUmVzcG9uc2UocmVzcG9uc2UsIGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29udGVudFR5cGUuaW5jbHVkZXMoJ2pzb24nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBcGlSZXNwb25zZShwYXlsb2FkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcGF5bG9hZC5zdWNjZXNzID8/IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBwYXlsb2FkLm1lc3NhZ2UgPz8gJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZC5kYXRhID8/IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IHBheWxvYWQuZXJyb3JzID8/IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhOiBwYXlsb2FkLm1ldGEgPz8gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB0ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgbWV0YTogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBpc0Fib3J0RXJyb3IgPSBlcnJvciBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiBlcnJvci5uYW1lID09PSAnQWJvcnRFcnJvcic7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGlzQWJvcnRFcnJvciA/ICdSZXF1ZXN0IHRpbWVvdXQnIDogJ05ldHdvcmsgZXJyb3InLFxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBpc0Fib3J0RXJyb3IgPyB7IHRpbWVvdXQ6IHRydWUgfSA6IGVycm9yLFxuICAgICAgICAgICAgICAgIG1ldGE6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgYnVpbGRFcnJvclJlc3BvbnNlKHJlc3BvbnNlLCBjb250ZW50VHlwZSkge1xuICAgICAgICBjb25zdCBmYWxsYmFja01lc3NhZ2UgPSBgSFRUUCAke3Jlc3BvbnNlLnN0YXR1c31gO1xuICAgICAgICBpZiAoY29udGVudFR5cGUuaW5jbHVkZXMoJ2pzb24nKSkge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXBpUmVzcG9uc2UocGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcGF5bG9hZC5tZXNzYWdlID8/IGZhbGxiYWNrTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZC5kYXRhID8/IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogcGF5bG9hZC5lcnJvcnMgPz8gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbWV0YTogcGF5bG9hZC5tZXRhID8/IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IHBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHR5cGVvZiByYXcubWVzc2FnZSA9PT0gJ3N0cmluZycgPyByYXcubWVzc2FnZSA6IGZhbGxiYWNrTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBkYXRhOiByYXcuZGF0YSA/PyBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yczogKHJhdy5lcnJvcnMgPz8gcGF5bG9hZCksXG4gICAgICAgICAgICAgICAgbWV0YTogcmF3Lm1ldGEgPz8gbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogdGV4dCB8fCBmYWxsYmFja01lc3NhZ2UsXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgbWV0YTogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcGF5bG9hZEhhbmRsZXIobWV0aG9kLCBwYXlsb2FkLCB1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHFzID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIHBheWxvYWQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXMuYXBwZW5kKGtleSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBheWxvYWQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXMuYXBwZW5kKGtleSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cmwgKyAodXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPycpICsgcXVlcnlTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IHBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICBpc0FwaVJlc3BvbnNlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJyBpbiB2YWx1ZSB8fCAnbWVzc2FnZScgaW4gdmFsdWUgfHwgJ2RhdGEnIGluIHZhbHVlIHx8ICdlcnJvcnMnIGluIHZhbHVlIHx8ICdtZXRhJyBpbiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgYXBpID0gbmV3IEFwaSgpO1xuIiwiLyoqXG4gKiBBbGxvd3MgZXhlY3V0aW5nIGEgZnVuY3Rpb24gd2hlbiB0aGUgRE9NIGlzIGZ1bGx5IGxvYWRlZC5cbiAqIEF2b2lkcyByZXBlYXRpbmcgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIC4uLilcbiAqXG4gKiBVc2FnZTpcbiAqIERvbVJlYWR5LnJ1bigoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdET00gcmVhZHknKTtcbiAqIH0pO1xuICovXG5leHBvcnQgY2xhc3MgRG9tUmVhZHkge1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBlbnRpcmUgcGFnZSAoaW5jbHVkaW5nIGltYWdlcyBhbmQgc3ViZnJhbWVzKSBpcyBsb2FkZWQuXG4gICAgICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtEb21SZWFkeX1cbiAgICAgKi9cbiAgICBvbkxvYWQoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBET00gaXMgcmVhZHkgKGJ1dCBiZWZvcmUgaW1hZ2VzIGFuZCBzdWJmcmFtZXMgYXJlIGxvYWRlZCkuXG4gICAgICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtEb21SZWFkeX1cbiAgICAgKi9cbiAgICByZWFkeShjYWxsYmFjaykge1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZG9tUmVhZHkgPSBuZXcgRG9tUmVhZHkoKTtcbiIsImltcG9ydCB7IHNlY3VyaXR5QXBpIH0gZnJvbSAnLi9hcGkvc2VjdXJpdHlBcGknO1xuaW1wb3J0IHsgbG9hZGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL1VJL2xvYWRlcic7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9VSS9Ub2FzdCc7XG5leHBvcnQgY2xhc3MgUmVnaXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZvcm1OYW1lID0gJ3JlZ2lzdHJhdGlvbic7XG4gICAgICAgIHRoaXMuc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBmb3JtW25hbWU9XCIke3RoaXMuZm9ybU5hbWV9XCJdYCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtIHx8ICF0aGlzLnN1Ym1pdEJ0bilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB0aGlzLmJpbmRTdWJtaXQoZSkpO1xuICAgIH1cbiAgICBhc3luYyBiaW5kU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9hZGVyLmZyZWV6ZUVsZW1lbnQodGhpcy5zdWJtaXRCdG4pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZWN1cml0eUFwaS5yZWdpc3RlcihkYXRhKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgPz8gJ0FuIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UubWVzc2FnZSA/PyAnU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQhLiBZb3UgY2FuIG5vdyBsb2cgaW4uJyk7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwMCkpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgbG9hZGVyLnVuZnJlZXplRWxlbWVudCh0aGlzLnN1Ym1pdEJ0bik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL0FwaSc7XG5leHBvcnQgY29uc3Qgc2VjdXJpdHlBcGkgPSB7XG4gICAgcmVnaXN0ZXI6IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucG9zdCgnL3JlZ2lzdGVyJywgZGF0YSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9SZWdpc3Rlcic7XG5pbXBvcnQgeyBkb21SZWFkeSB9IGZyb20gJy4uLy4uL2NvcmUvRG9tUmVhZHknO1xuZG9tUmVhZHkucmVhZHkoKCkgPT4ge1xuICAgIG5ldyBSZWdpc3RlcigpLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTm90eWYgfSBmcm9tICdub3R5Zic7XG5pbXBvcnQgJ25vdHlmL25vdHlmLm1pbi5jc3MnO1xuZXhwb3J0IGNsYXNzIFRvYXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub3R5ZiA9IG5ldyBOb3R5Zih7XG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6ICdyaWdodCcsIHk6ICd0b3AnIH0sXG4gICAgICAgICAgICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMGQ2ZWZkJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFzIGZhLWluZm8tY2lyY2xlIHRleHQtd2hpdGVcIj48L2k+J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMTBiOTgxJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdWNjZXNzKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5ub3R5Zi5zdWNjZXNzKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBlcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubm90eWYuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGluZm8obWVzc2FnZSwgaWNvbkh0bWwpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpY29uSHRtbCkge1xuICAgICAgICAgICAgb3B0aW9ucy5pY29uID0gaWNvbkh0bWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub3R5Zi5vcGVuKG9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25maXJtKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHRpdGxlLCB0ZXh0LCBjb25maXJtQnV0dG9uVGV4dCA9ICdDb25maXJtJywgY2FuY2VsQnV0dG9uVGV4dCA9ICdDYW5jZWwnLCByZXZlcnNlQ29sb3JzID0gZmFsc2UsIGNvbmZpcm1CdXR0b25Db2xvciA9IHJldmVyc2VDb2xvcnMgPyAnI0ZGNUE1RicgOiAnIzBkNmVmZCcsIGNhbmNlbEJ1dHRvbkNvbG9yID0gcmV2ZXJzZUNvbG9ycyA/ICcjMGQ2ZWZkJyA6ICcjRkY1QTVGJywgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc05hbWUgPSAneXMtZGlhbG9nLW5hdGl2ZSBwLTQgcm91bmRlZC0yeGwgc2hhZG93IGJvcmRlci0wIGJnLXdoaXRlJztcbiAgICAgICAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cImRpYWxvZ1wiIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtLTBcIj4ke3RpdGxlfTwvaDM+XG4gICAgICAgICAgJHt0ZXh0ID8gYDxwIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBtLTBcIj4ke3RleHR9PC9wPmAgOiAnJ31cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0yIG10LTNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7Y2FuY2VsQnV0dG9uQ29sb3J9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlci0wIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7Y2FuY2VsQnV0dG9uVGV4dH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7Y29uZmlybUJ1dHRvbkNvbG9yfVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJweC00IHB5LTIgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXItMCBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke2NvbmZpcm1CdXR0b25UZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIGA7XG4gICAgICAgICAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNDb25maXJtZWQgPSBkaWFsb2cucmV0dXJuVmFsdWUgPT09ICdjb25maXJtJztcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgaXNDb25maXJtZWQgfSk7XG4gICAgICAgICAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdCgpO1xuIiwiZXhwb3J0IGNvbnN0IGxvYWRlciA9IHtcbiAgICAvKipcbiAgICAgKiBTaG93cyB0aGUgcGFnZSBsb2FkZXJcbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VMb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZV9sb2FkZXInKTtcbiAgICAgICAgaWYgKHBhZ2VMb2FkZXIpIHtcbiAgICAgICAgICAgIHBhZ2VMb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICBpZiAocGFnZUxvYWRlci5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICBwYWdlTG9hZGVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIHBhZ2UgbG9hZGVyXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwYWdlTG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VfbG9hZGVyJyk7XG4gICAgICAgIGlmIChwYWdlTG9hZGVyKVxuICAgICAgICAgICAgcGFnZUxvYWRlci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEZyZWV6ZXMgYW4gSFRNTCBlbGVtZW50IGJ5IGRpc3BsYXlpbmcgYSBsb2FkZXIgb3ZlciBpdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBmcmVlemVcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB7XG4gICAgICogICBkYXJrZW4/OiBib29sZWFuO1xuICAgICAqICAgcm91bmRlZD86IHN0cmluZyB8IGJvb2xlYW47XG4gICAgICogICB0ZXh0Pzogc3RyaW5nO1xuICAgICAqICAgdGV4dENvbG9yPzogc3RyaW5nO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBmcmVlemVFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgZGFya2VuID0gdHJ1ZSwgcm91bmRlZCA9IGZhbHNlLCB0ZXh0ID0gJycsIHRleHRDb2xvciA9ICcjMjMyZDU1JyB9ID0gb3B0aW9ucztcbiAgICAgICAgLy8gUmVtb3ZlIGFueSBleGlzdGluZyBsb2FkZXJcbiAgICAgICAgdGhpcy51bmZyZWV6ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIC8vIE92ZXJsYXkgd3JhcHBlclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudC1sb2FkZXItd3JhcHBlcicpO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuekluZGV4ID0gJzk5OTknO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgICAvLyBGb3JjZSB0aGUgcGFyZW50IHRvIHJlbGF0aXZlIHBvc2l0aW9uaW5nXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnIHx8ICFjb21wdXRlZFN0eWxlLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgfVxuICAgICAgICAvLyBNYWluIGxvYWRlciBlbGVtZW50XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudC1sb2FkZXInKTtcbiAgICAgICAgaWYgKGRhcmtlbilcbiAgICAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdkYXJrZW4nKTtcbiAgICAgICAgLy8gQm9yZGVyIHJhZGl1cyBhcHBsaWVkIGhlcmVcbiAgICAgICAgaWYgKHJvdW5kZWQpIHtcbiAgICAgICAgICAgIGxvYWRlci5zdHlsZS5ib3JkZXJSYWRpdXMgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiByb3VuZGVkID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICA/IHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgOiAnMC41cmVtJzsgLy8gZGVmYXVsdCB2YWx1ZSB3aGVuIHJvdW5kZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gU3Bpbm5lclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudC1sb2FkZXItc3Bpbm5lcicpO1xuICAgICAgICBsb2FkZXIuYXBwZW5kQ2hpbGQoc3Bpbm5lcik7XG4gICAgICAgIC8vIFRleHQgYWRkZWQgaW5zaWRlIHRoZSBsb2FkZXJcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGV4dEVsLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtbG9hZGVyLXRleHQnKTtcbiAgICAgICAgICAgIHRleHRFbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICB0ZXh0RWwuc3R5bGUubWFyZ2luVG9wID0gJzhweCc7XG4gICAgICAgICAgICB0ZXh0RWwuc3R5bGUuZm9udFNpemUgPSAnMC45cmVtJztcbiAgICAgICAgICAgIHRleHRFbC5zdHlsZS5mb250V2VpZ2h0ID0gJzUwMCc7XG4gICAgICAgICAgICB0ZXh0RWwuc3R5bGUuY29sb3IgPSB0ZXh0Q29sb3I7XG4gICAgICAgICAgICBsb2FkZXIuYXBwZW5kQ2hpbGQodGV4dEVsKTtcbiAgICAgICAgfVxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmZyZWV6ZXMgYSBwcmV2aW91c2x5IGZyb3plbiBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgdW5mcmVlemVFbGVtZW50OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnQtbG9hZGVyLXdyYXBwZXInKTtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKVxuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBHbG9iYWwgZmFsbGJhY2s6IHJlbW92ZSBhbGwgbG9hZGVycyBmcm9tIHRoZSBET01cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbGVtZW50LWxvYWRlci13cmFwcGVyJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLnJlbW92ZSgpKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9uZXh0IiwiX3Rocm93IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnRpZXMiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGkiLCJkZWZhdWx0VGltZW91dCIsImdldCIsInVybCIsInBheWxvYWQiLCJjb25maWciLCJ1bmRlZmluZWQiLCJyZXF1ZXN0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsIl9yZXF1ZXN0IiwiX2NhbGxlZSIsIm1ldGhvZCIsInJhd1VybCIsIl9jb25maWckdGltZW91dCIsIl9jb25maWckY3JlZGVudGlhbHMiLCJjb250cm9sbGVyIiwidGltZW91dCIsInRpbWVvdXRJZCIsIm9wdGlvbnMiLCJfYXJncyIsIl9jb250ZXh0IiwiQWJvcnRDb250cm9sbGVyIiwic2V0VGltZW91dCIsImFib3J0Iiwic2lnbmFsIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicGF5bG9hZEhhbmRsZXIiLCJmZXRjaCIsIl94IiwiX3gyIiwiX3gzIiwiX2ZldGNoIiwiX2NhbGxlZTIiLCJyZXNwb25zZSIsImNvbnRlbnRUeXBlIiwiX3BheWxvYWQkc3VjY2VzcyIsIl9wYXlsb2FkJG1lc3NhZ2UiLCJfcGF5bG9hZCRkYXRhIiwiX3BheWxvYWQkZXJyb3JzIiwiX3BheWxvYWQkbWV0YSIsInRleHRDb250ZW50IiwiaXNBYm9ydEVycm9yIiwiX3QiLCJfY29udGV4dDIiLCJnbG9iYWxUaGlzIiwib2siLCJidWlsZEVycm9yUmVzcG9uc2UiLCJzdGF0dXMiLCJzdWNjZXNzIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvcnMiLCJtZXRhIiwiaW5jbHVkZXMiLCJqc29uIiwiaXNBcGlSZXNwb25zZSIsInRleHQiLCJET01FeGNlcHRpb24iLCJuYW1lIiwiY2xlYXJUaW1lb3V0IiwiX3g0IiwiX3g1IiwiX3g2IiwiX2J1aWxkRXJyb3JSZXNwb25zZSIsIl9jYWxsZWUzIiwiZmFsbGJhY2tNZXNzYWdlIiwiX3JhdyRkYXRhIiwiX3JhdyRlcnJvcnMiLCJfcmF3JG1ldGEiLCJfcGF5bG9hZCRtZXNzYWdlMiIsIl9wYXlsb2FkJGRhdGEyIiwiX3BheWxvYWQkZXJyb3JzMiIsIl9wYXlsb2FkJG1ldGEyIiwicmF3IiwiX2NvbnRleHQzIiwiY29uY2F0IiwiX3g3IiwiX3g4IiwicXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImVudHJpZXMiLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwaSIsIkRvbVJlYWR5Iiwib25Mb2FkIiwiY2FsbGJhY2siLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsInJlYWR5IiwiZG9tUmVhZHkiLCJzZWN1cml0eUFwaSIsImxvYWRlciIsInRvYXN0IiwiUmVnaXN0ZXIiLCJmb3JtTmFtZSIsInN1Ym1pdEJ0biIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbml0IiwiX3RoaXMiLCJiaW5kU3VibWl0IiwiX2JpbmRTdWJtaXQiLCJfcmVzcG9uc2UkbWVzc2FnZTIiLCJfcmVzcG9uc2UkbWVzc2FnZSIsInByZXZlbnREZWZhdWx0IiwiZnJlZXplRWxlbWVudCIsInJlZ2lzdGVyIiwiZXJyb3IiLCJyZXNldCIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiLCJ1bmZyZWV6ZUVsZW1lbnQiLCJfcmVnaXN0ZXIiLCJOb3R5ZiIsIlRvYXN0Iiwibm90eWYiLCJkdXJhdGlvbiIsInBvc2l0aW9uIiwieCIsImRpc21pc3NpYmxlIiwidHlwZXMiLCJ0eXBlIiwiYmFja2dyb3VuZCIsImljb24iLCJpbmZvIiwiaWNvbkh0bWwiLCJvcGVuIiwiY29uZmlybSIsInRpdGxlIiwiX29wdGlvbnMkY29uZmlybUJ1dHRvIiwiY29uZmlybUJ1dHRvblRleHQiLCJfb3B0aW9ucyRjYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0IiwiX29wdGlvbnMkcmV2ZXJzZUNvbG9yIiwicmV2ZXJzZUNvbG9ycyIsIl9vcHRpb25zJGNvbmZpcm1CdXR0bzIiLCJjb25maXJtQnV0dG9uQ29sb3IiLCJfb3B0aW9ucyRjYW5jZWxCdXR0b24yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJkaWFsb2ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaXNDb25maXJtZWQiLCJyZXR1cm5WYWx1ZSIsInJlbW92ZSIsImFwcGVuZENoaWxkIiwic2hvd01vZGFsIiwic2hvdyIsInBhZ2VMb2FkZXIiLCJjbGFzc0xpc3QiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoaWRlIiwiYWRkIiwiZWxlbWVudCIsIl9vcHRpb25zJGRhcmtlbiIsImRhcmtlbiIsIl9vcHRpb25zJHJvdW5kZWQiLCJyb3VuZGVkIiwiX29wdGlvbnMkdGV4dCIsIl9vcHRpb25zJHRleHRDb2xvciIsInRleHRDb2xvciIsIndyYXBwZXIiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsInBvaW50ZXJFdmVudHMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJzcGlubmVyIiwidGV4dEVsIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiXSwic291cmNlUm9vdCI6IiJ9