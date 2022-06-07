/*! @ponomarevlad/svg-text v0.6.3 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SvgText"] = factory();
	else
		root["SvgText"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SvgUtil = undefined;

	var _SvgText = __webpack_require__(1);

	var _SvgText2 = _interopRequireDefault(_SvgText);

	var _svg = __webpack_require__(2);

	var _math = __webpack_require__(5);

	var math = _interopRequireWildcard(_math);

	var _keys = __webpack_require__(3);

	var keys = _interopRequireWildcard(_keys);

	var _text = __webpack_require__(10);

	var text = _interopRequireWildcard(_text);

	var _style = __webpack_require__(7);

	var style = _interopRequireWildcard(_style);

	var _render = __webpack_require__(8);

	var _render2 = _interopRequireDefault(_render);

	var _assign = __webpack_require__(11);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SvgUtil = exports.SvgUtil = (0, _assign2.default)({ createElement: _svg.createElement }, math, keys, text, style, { render: _render2.default });
	exports.default = _SvgText2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _svg = __webpack_require__(2);

	var _math = __webpack_require__(5);

	var _keys = __webpack_require__(3);

	var _style = __webpack_require__(7);

	var _render = __webpack_require__(8);

	var _render2 = _interopRequireDefault(_render);

	var _isfinite = __webpack_require__(4);

	var _isfinite2 = _interopRequireDefault(_isfinite);

	var _merge = __webpack_require__(6);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _svgEl = null;
	var _styleEl = null;

	var SvgText = function () {
	  /**
	   * @construtor
	   * @param {object} options
	   * @param {SVGElement} options.element to append the text into
	   * @param {string} options.text
	   * @param {number=} options.x
	   * @param {number=} options.y
	   * @param {number=} options.width
	   * @param {number=} options.height
	   * @param {number=} options.maxWidth
	   * @param {number=} options.maxHeight
	   * @param {number=} options.maxLines
	   * @param {string=} options.align [left|center|right] Default is left
	   * @param {string=} options.verticalAlign [top|middle|bottom] Default is top
	   * @param {string=} options.textOverflow [clip|ellipsis|custom] Default is clip
	   * @param {string=} options.selectorNamespace
	   * @param {string=} options.className
	   * @param {object=} options.style Styles to be written as CSS to a `style` element.
	   * @param {object=} options.styleElement The `style` element to write styles to.
	   * @param {object=} options.attrs Attributes applied to the `text` element
	   * @param {object=} options.rect Attributes applied to an underlying `rect`
	   * @param {array=} options.padding [top, right, bottom, left]
	   * @param {array=} options.margin [top, right, bottom, left]
	   */
	  function SvgText(options) {
	    _classCallCheck(this, SvgText);

	    this.options = updateOptions(options);
	    this.uid = this.options.uid;
	    this.rect = this.options.rect ? (0, _svg.createRect)(this.options) : null;
	    this.text = createText(this.options);
	    writeStyleAsCss(this.options);

	    var compStyle = window.getComputedStyle(this.text, null);
	    this.fontSize = parseFloat(compStyle.getPropertyValue('font-size'));
	    this.lineHeight = parseFloat(compStyle.getPropertyValue('line-height')) || this.fontSize * 1.2;
	    this.lines = (0, _render2.default)(this.text, this.options, this.lineHeight);
	    this.bounds = sizeBounds(this.text, this.options);
	    sizeRect(this.rect, this.bounds, this.options.rect);
	    offsetByMargin(this.bounds, this.options.margin);

	    moveText(this.text, this.options, {
	      fontSize: this.fontSize,
	      lineHeight: this.lineHeight,
	      lines: this.lines
	    });
	  }

	  /**
	   * Transforms `text` into a form ready to be opened in Adobe Illustrator.
	   * @param {SVG text element} textWeb SVG element prepared for the web.
	   * @param {SVG text element} textAi Duplicate SVG element to be prepared for Illustrator.
	   * @param {string} font The font as a name that Illustrator will recognize.
	   */


	  _createClass(SvgText, null, [{
	    key: 'forIllustrator',
	    value: function forIllustrator(textWeb, textAi, font) {
	      var compStyle = window.getComputedStyle(textWeb, null);
	      if (font) {
	        textAi.setAttribute('font-family', font);
	      }
	      textAi.setAttribute('font-size', compStyle.getPropertyValue('font-size'));
	      textAi.setAttribute('line-height', compStyle.getPropertyValue('line-height'));
	      textAi.setAttribute('fill', compStyle.getPropertyValue('fill'));
	      textAi.setAttribute('fill-opacity', compStyle.getPropertyValue('fill-opacity'));
	      textAi.removeAttribute('class');
	      return textAi;
	    }
	  }, {
	    key: 'writeStyle',
	    value: function writeStyle(selector, css, style) {
	      var styleEl = style || SvgText.style || null;
	      if (styleEl && SvgText.svg) {
	        selector = getSelectorNamespace(SvgText.svg) + ' ' + selector;
	        (0, _style.writeStyle)(selector, css, styleEl);
	      }
	    }
	  }, {
	    key: 'svg',
	    set: function set(value) {
	      _svgEl = value;
	    },
	    get: function get() {
	      return _svgEl;
	    }
	  }, {
	    key: 'style',
	    set: function set(value) {
	      _styleEl = value;
	    },
	    get: function get() {
	      return _styleEl;
	    }
	  }]);

	  return SvgText;
	}();

	exports.default = SvgText;


	function updateOptions(options) {
	  options.uid = uid();
	  options = updateEnvironment(options);
	  options = updateClassname(options);
	  options = (0, _math.updateSizeOptions)(options);
	  options.attrs = options.attrs && _typeof(options.attrs) === 'object' ? (0, _keys.normalizeKeys)(options.attrs, 'css') : {};
	  return options;
	}

	// Ensure svg, selectorNamespace, and style properties are set.
	function updateEnvironment(options) {
	  options.svg = options.svg || _svgEl || null;
	  options.styleElement = options.styleElement || _styleEl || null;
	  var svgEl = options.element || document.body;
	  while (svgEl && svgEl.nodeName.toUpperCase() !== 'SVG') {
	    svgEl = svgEl.parentElement;
	  }
	  svgEl = svgEl || document.body;
	  if (svgEl.nodeName.toUpperCase() !== 'SVG') {
	    svgEl = (0, _svg.createElement)('svg', {
	      width: 640, height: 480, 'data-svgtext': getSvgUid()
	    });
	    (options.element || document.body).appendChild(svgEl);
	  }
	  options.svg = svgEl;
	  if (!options.svg.hasAttribute('data-svgtext')) {
	    options.svg.setAttribute('data-svgtext', getSvgUid());
	  }
	  if (!options.selectorNamespace || typeof options.selectorNamespace !== 'string') {
	    options.selectorNamespace = getSelectorNamespace(options.svg);
	  }
	  options.styleElement = options.styleElement || options.svg.querySelector('style');
	  if (!options.styleElement) {
	    options.styleElement = document.createElement('style');
	    var firstChild = options.svg.childNodes[0];
	    if (firstChild) {
	      options.svg.insertBefore(options.styleElement, firstChild);
	    } else {
	      options.svg.appendChild(options.styleElement);
	    }
	  }
	  options.element = options.element || options.svg;
	  _svgEl = options.svg;
	  _styleEl = options.styleElement;
	  return options;
	}

	// Set default className to 'svg-text svg-text-[uid]'.
	function updateClassname(options) {
	  if (!options.className || typeof options.className !== 'string') {
	    options.className = 'svg-text';
	  }
	  options.className += '.' + options.className.split(' ')[0] + '-' + options.uid;
	  return options;
	}

	function offsetByMargin(bounds, margin) {
	  bounds.x -= margin[3];
	  bounds.y -= margin[0];
	  bounds.width += margin[3] + margin[1];
	  bounds.height += margin[0] + margin[2];
	}

	// Create the text element.
	function createText(options) {
	  var textOptions = (0, _keys.normalizeKeys)((0, _merge2.default)({}, options.attrs, { 'ai-id': options.uid }));
	  var text = (0, _svg.createElement)('text', textOptions);
	  if (options.className) {
	    text.setAttribute('class', options.className.replace(/\./, ' '));
	  }
	  options.element.appendChild(text);
	  return text;
	}

	function writeStyleAsCss(options) {
	  if (options.style && options.styleElement) {
	    var selectorNamespace = options.selectorNamespace || null;
	    var className = options.className ? ('.' + options.className).replace(' ', '.') : null;
	    var textClassName = className ? 'text' + className : null;
	    var selector = [selectorNamespace ? selectorNamespace + ' ' : '', textClassName || ''].join('');
	    if (selector) {
	      (0, _style.writeStyle)(selector, options.style, options.styleElement);
	    }
	  }
	}

	function sizeBounds(text, options) {
	  var p = options.padding;
	  var textRect = text.getBoundingClientRect();
	  var bounds = {
	    x: options.x,
	    y: options.y,
	    width: textRect.width,
	    height: textRect.height
	  };

	  bounds.width = (0, _math.isPosNum)(options.width) ? options.width : textRect.width + p[3] + p[1];
	  if (options.align === 'right') {
	    bounds.x -= bounds.width;
	  } else if (options.align === 'center') {
	    bounds.x -= bounds.width / 2;
	  }

	  bounds.height = (0, _math.isPosNum)(options.height) ? options.height : textRect.height + p[0] + p[2];
	  if (options.verticalAlign === 'bottom') {
	    bounds.y -= bounds.height;
	  } else if (options.verticalAlign === 'middle') {
	    bounds.y -= bounds.height / 2;
	  }
	  return bounds;
	}

	function sizeRect(rect, bounds, rectSize) {
	  if (rect) {
	    rect.setAttribute('width', (0, _isfinite2.default)(rectSize.width) ? rectSize.width : bounds.width);
	    rect.setAttribute('height', (0, _isfinite2.default)(rectSize.height) ? rectSize.height : bounds.height);
	    rect.setAttribute('x', bounds.x + ((0, _isfinite2.default)(rectSize.x) ? rectSize.x : 0));
	    rect.setAttribute('y', bounds.y + ((0, _isfinite2.default)(rectSize.y) ? rectSize.y : 0));
	  }
	}

	function moveText(text, options, attrs) {
	  alignText(text, options.align);
	  options = verticalAlignText(text, options, attrs);
	  text.setAttribute('transform', 'translate(' + options.textPos.x + ',' + options.textPos.y + ')');
	}

	function alignText(text, align) {
	  if (align === 'center') {
	    text.setAttribute('text-anchor', 'middle');
	  } else if (align === 'right') {
	    text.setAttribute('text-anchor', 'end');
	  } else if (text.hasAttribute('text-anchor')) {
	    text.removeAttribute('text-anchor');
	  }
	}

	function verticalAlignText(text, options, attrs) {
	  options.textPos.y += attrs.fontSize;
	  if (options.verticalAlign === 'middle') {
	    options.textPos.y -= Math.max(attrs.lineHeight, textHeight(text, options, attrs)) / 2;
	  } else if (options.verticalAlign === 'bottom') {
	    options.textPos.y -= textHeight(text, options, attrs);
	  }
	  return options;
	}

	function textHeight(text, options, attrs) {
	  return Math.max(attrs.fontSize, (0, _math.isPosNum)(options.textPos.height) ? options.textPos.height : text.getBoundingClientRect().height);
	}

	function getSelectorNamespace(svg) {
	  var svgId = svg.getAttribute('id');
	  if (svgId) {
	    return 'svg#' + svgId;
	  } else {
	    var svgAttr = svg.getAttribute('data-svgtext');
	    return 'svg[data-svgtext="' + svgAttr + '"]';
	  }
	}

	// Each text field gets its own unique id so it styles can be namespaced to it
	// and also so original SVG text elements can be synced with Illustrator SVG.
	var __uid = 0;
	function uid() {
	  return __uid++;
	}

	function getSvgUid() {
	  var maxId = 0;
	  var svgEls = document.querySelectorAll('svg[data-svgtext]');
	  for (var i = 0; i < svgEls.length; i++) {
	    var id = +svgEls[i].getAttribute('data-svgtext');
	    maxId = isNaN(id) ? maxId : Math.max(id, maxId);
	  }
	  return maxId + 1;
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.createElement = createElement;
	exports.createRect = createRect;
	exports.appendTspan = appendTspan;
	exports.createTspan = createTspan;
	exports.writeInnerHTML = writeInnerHTML;

	var _keys = __webpack_require__(3);

	/**
	 * Convenience/util function to create SVG elements.
	 */
	function createElement(name, attrs) {
	  var node = document.createElementNS('http://www.w3.org/2000/svg', name);
	  if (attrs && (typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs)) === 'object') {
	    attrs = (0, _keys.normalizeKeys)(attrs, 'css');
	    var keys = Object.keys(attrs);
	    for (var i = 0; i < keys.length; i++) {
	      node.setAttribute(keys[i], attrs[keys[i]]);
	    }
	  }
	  return node;
	}

	/**
	 * Create a rect for background color and borders. Width and height will be
	 * added later once text width and height are known.
	 */
	function createRect(options) {
	  var rectOptions = (0, _keys.normalizeKeys)(options.rect, 'css');
	  if (!rectOptions.hasOwnProperty('fill')) {
	    // If `fill` is not specified, make invisible not black.
	    rectOptions['fill-opacity'] = 0;
	  }
	  var rect = createElement('rect', rectOptions);
	  if (options.element) {
	    options.element.appendChild(rect);
	  }
	  return rect;
	}

	/**
	 * Create and append a `tspan`.
	 */
	function appendTspan(text, str, x, y) {
	  var tspan = createTspan(str, x, y);
	  text.appendChild(tspan);
	  return tspan;
	}

	/**
	 * Create a new `tspan`.
	 */
	function createTspan(str) {
	  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	  var tspan = createElement('tspan', { x: x, y: y });
	  writeInnerHTML(tspan, str);
	  return tspan;
	}

	/**
	 * Because `innerHTML` does not work with SVG in older browsers.
	 */
	function writeInnerHTML(svgEl, content) {
	  svgEl.innerHTML = content;
	  var tempEl = document.createElement('div');
	  tempEl.innerHTML = '<svg>' + content + '</svg>';
	  Array.prototype.slice.call(svgEl.childNodes).forEach(function (el) {
	    svgEl.removeChild(el);
	  });
	  Array.prototype.slice.call(tempEl.childNodes[0].childNodes).forEach(function (el) {
	    svgEl.appendChild(el);
	  });
	  return svgEl;
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.toJs = toJs;
	exports.toCss = toCss;
	exports.normalizeKeys = normalizeKeys;

	var _isfinite = __webpack_require__(4);

	var _isfinite2 = _interopRequireDefault(_isfinite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @param {string} prop - String in JavaScript-ready camel case.
	 * @returns {string} String hyphenated in CSS style.
	 */
	function toJs(prop) {
	  return prop.replace(/-([a-z])/g, function (match, p1) {
	    return p1.toUpperCase();
	  });
	}

	/**
	 * @param {string} prop - String in JavaScript-ready camel case.
	 * @returns {string} String hyphenated in CSS style.
	 */
	function toCss(prop) {
	  return prop.replace(/([A-Z])/g, function (match, p1) {
	    return '-' + p1.toLowerCase();
	  });
	}

	/**
	 * Returns a copy of @param object with keys transformed to the desired style,
	 * either 'js' or 'css'.
	 */
	function normalizeKeys(object, style) {
	  var normalizedObj = {};
	  if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
	    var keys = Object.keys(object);
	    keys.forEach(function (key) {
	      var normalizedKey = style === 'js' ? toJs(key) : toCss(key);
	      var value = addUnits(key, object[key]);
	      normalizedObj[normalizedKey] = value;
	    });
	  }
	  return normalizedObj;
	}

	// Default units are pixels (px) so add 'px' to raw numbers.
	function addUnits(key, value) {
	  switch (key) {
	    case 'font-size':
	    case 'fontSize':
	    case 'line-height':
	    case 'lineHeight':
	      if ((0, _isfinite2.default)(value)) {
	        value += 'px';
	      }
	      break;
	  }
	  return value;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	import root from './_root.js';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsFinite = root.isFinite;

	/**
	 * Checks if `value` is a finite primitive number.
	 *
	 * **Note:** This method is based on
	 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	 * @example
	 *
	 * _.isFinite(3);
	 * // => true
	 *
	 * _.isFinite(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isFinite(Infinity);
	 * // => false
	 *
	 * _.isFinite('3');
	 * // => false
	 */
	function isFinite(value) {
	  return typeof value == 'number' && nativeIsFinite(value);
	}

	export default isFinite;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPosNum = isPosNum;
	exports.minNum = minNum;
	exports.maxNum = maxNum;
	exports.autoNum = autoNum;
	exports.toArrayLen4 = toArrayLen4;
	exports.bestSize = bestSize;
	exports.updateSizeOptions = updateSizeOptions;

	var _keys = __webpack_require__(3);

	var _isfinite = __webpack_require__(4);

	var _isfinite2 = _interopRequireDefault(_isfinite);

	var _merge = __webpack_require__(6);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Tests if a value is a valid number and also >= 0.
	 * @returns {boolean}
	 */
	function isPosNum(n) {
	  return (0, _isfinite2.default)(n) && n >= 0;
	}

	/**
	 * Returns the minimum numeric value amongst the arguments, or else "auto".
	 */
	function minNum() {
	  return minMax('min', arguments);
	}

	/**
	 * Returns the maximum numeric value amongst the arguments, or else "auto".
	 */
	function maxNum() {
	  return minMax('max', arguments);
	}

	/**
	 * If @param value is "auto", return @param altNum instead.
	 */
	function autoNum(value, altNum) {
	  return isPosNum(value) ? value : altNum;
	}

	function minMax(compare, args) {
	  var value = 'auto';
	  for (var i = 0; i < args.length; i++) {
	    var n = args[i];
	    if (isPosNum(n)) {
	      if (isPosNum(value)) {
	        if (compare === 'min' && n < value || compare === 'max' && n > value) {
	          value = n;
	        }
	      } else if (value === 'auto') {
	        value = n;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * Transforms value into an array with 4 numbers.
	 * @param {string|number} value - '10px' or 10
	 * @returns {number[]} of length 4
	 */
	function toArrayLen4(value) {
	  var array;
	  var i;
	  if (Array.isArray(value)) {
	    array = value.slice(0, 4);
	  } else if (typeof value === 'string') {
	    var parts = value.replace(/^(\s+)|(\s+)$/g, '').split(/\s+/g).slice(0, 4);
	    array = parts.length ? parts : [value];
	  } else if ((0, _isfinite2.default)(value)) {
	    array = [value];
	  } else {
	    return [0, 0, 0, 0];
	  }

	  switch (array.length) {
	    case 1:
	      for (i = 1; i < 4; i++) {
	        array[i] = array[0];
	      }
	      break;
	    case 2:
	      array[2] = array[0];
	      array[3] = array[1];
	      break;
	    case 3:
	      array[3] = array[1];
	      break;
	    default:
	      break;
	  }

	  for (i = 0; i < 4; i++) {
	    array[i] = parseFloat(array[i]);
	    if (isNaN(array[i])) {
	      array[i] = 0;
	    }
	  }
	  return array;
	}

	/**
	 * Returns the preferred width or height amongst width and maxWidth or height
	 * and maxHeight values in options.
	 */
	function bestSize(options, dimension) {
	  var maxProp = dimension === 'height' ? 'maxHeight' : 'maxWidth';
	  var prop = dimension === 'height' ? 'height' : 'width';
	  var maxOk = isPosNum(options[maxProp]);
	  var valOk = isPosNum(options[prop]);
	  if (maxOk && valOk) {
	    return Math.min(options[maxProp], options[prop]);
	  } else if (maxOk) {
	    return options[maxProp];
	  } else if (valOk) {
	    return options[prop];
	  } else {
	    return 'auto';
	  }
	}

	/**
	 * Validates and updates x, y, width, height, maxWidth, maxHeight options.
	 */
	function updateSizeOptions(options) {
	  options = (0, _merge2.default)({}, options);
	  options.padding = toArrayLen4(options.padding);
	  options.margin = toArrayLen4(options.margin);
	  options.x = addMarginToX(+(options.x || 0), options.align, options.margin);
	  options.y = addMarginToY(+(options.y || 0), options.verticalAlign, options.margin);
	  options.width = isPosNum(options.width) ? options.width : 'auto';
	  options.maxWidth = isPosNum(options.maxWidth) ? options.maxWidth : 'auto';
	  options.height = isPosNum(options.height) ? options.height : 'auto';
	  options.maxHeight = isPosNum(options.maxHeight) ? options.maxHeight : 'auto';
	  options.maxLines = isPosNum(options.maxLines) ? options.maxLines : 'auto';
	  // options.width = minNum(options.width, options.maxWidth);

	  if (isPosNum(options.outerWidth)) {
	    var maxWidth = options.outerWidth - options.margin[3] - options.margin[1];
	    options.maxWidth = isPosNum(options.maxWidth) ? Math.min(maxWidth, options.maxWidth) : maxWidth;
	  }
	  if (isPosNum(options.outerHeight)) {
	    var maxHeight = options.outerHeight - options.margin[0] - options.margin[2];
	    options.maxHeight = isPosNum(options.maxHeight) ? Math.min(maxHeight, options.maxHeight) : maxHeight;
	  }

	  options.textPos = createTextPos(options);
	  return options;
	}

	function createTextPos(options) {
	  var padding = options.padding;
	  var rect = {
	    x: addMarginToX(options.x, options.align, options.padding),
	    y: addMarginToY(options.y, options.verticalAlign, options.padding),
	    width: isPosNum(options.width) ? Math.max(0, options.width - padding[3] - padding[1]) : 'auto',
	    height: isPosNum(options.height) ? Math.max(0, options.height - padding[0] - padding[2]) : 'auto',
	    maxWidth: isPosNum(options.maxWidth) ? Math.max(0, options.maxWidth - padding[3] - padding[1]) : 'auto',
	    maxHeight: isPosNum(options.maxHeight) ? Math.max(0, options.maxHeight - padding[0] - padding[2]) : 'auto'
	  };
	  rect.width = minNum(rect.width, rect.maxWidth);
	  return rect;
	}

	// Also works for padding.
	function addMarginToX(x, align, margin) {
	  if (align === 'right') {
	    x -= margin[1];
	  } else if (align === 'center') {
	    x += margin[3] / 2;
	    x -= margin[1] / 2;
	  } else {
	    x += margin[3];
	  }
	  return x;
	}

	function addMarginToY(y, verticalAlign, margin) {
	  if (verticalAlign === 'bottom') {
	    y -= margin[2];
	  } else if (verticalAlign === 'middle') {
	    y += margin[0] / 2;
	    y -= margin[2] / 2;
	  } else {
	    y += margin[0];
	  }
	  return y;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	import baseMerge from './_baseMerge.js';
	import createAssigner from './_createAssigner.js';

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	export default merge;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.writeStyle = writeStyle;

	var _keys = __webpack_require__(3);

	function writeStyle(selector, textStyle, styleElement) {
	  var style = (0, _keys.normalizeKeys)(textStyle, 'css');
	  var css = Object.keys(style).map(function (key) {
	    return '  ' + key + ': ' + style[key] + ';';
	  });
	  css.unshift('\n' + selector + ' {');
	  css.push('}');
	  css.unshift(getPreviousCss(styleElement));
	  styleElement.innerHTML += css.join('\n');
	}

	function getPreviousCss(el) {
	  var css = '';
	  Array.prototype.slice.call(el.childNodes).forEach(function (el) {
	    css += el.textContent;
	  });
	  return css;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = render;

	var _parse = __webpack_require__(9);

	var _parse2 = _interopRequireDefault(_parse);

	var _math = __webpack_require__(5);

	var _text = __webpack_require__(10);

	var _svg = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Because text in Firefox is just slightly wider than in Chrome, causing
	// linebreaks to be inconsistent across browsers.
	var IS_GECKO = navigator.userAgent.indexOf('Gecko') !== -1 && navigator.userAgent.indexOf('like Gecko') === -1;
	var GECKO_DAMPER = IS_GECKO ? (282.25 - 278.234375) / 280.25 : 0;

	var maxLines = void 0;
	var maxWidth = void 0;
	var maxHeight = void 0;
	var minLineHeight = void 0;

	var chars = void 0;
	var tags = void 0;

	var isFinalLine = void 0;
	var charIndex = void 0;
	var tspan = void 0;
	var tspans = void 0;
	var tspanIndex = void 0;
	var tagIndex = void 0;
	var height = void 0;
	var lineStr = void 0;
	var tmpStr = void 0;
	var clip = void 0;
	var lastBoundIndex = void 0;
	var lineCharIndex = void 0;
	var openTags = void 0;

	// charsRemain is true if current char is not the last non-whitespace char.
	var charsRemain = void 0;

	/**
	 * Render lines of text into <tspan> elements, character by character.
	 * Returns the number of lines rendered.
	 * @param {SVG Text Element} text
	 * @param {object} options
	 * @param {number} lineHeight
	 */
	function render(text, options, lineHeight, fontSize) {
	  maxLines = (0, _math.autoNum)(options.maxLines, Number.MAX_VALUE);
	  if (maxLines < 1) {
	    return 0;
	  }
	  maxWidth = (0, _math.autoNum)((0, _math.bestSize)(options.textPos, 'width'), Number.MAX_VALUE);
	  maxHeight = (0, _math.autoNum)((0, _math.bestSize)(options.textPos, 'height'), Number.MAX_VALUE);
	  minLineHeight = typeof fontSize === 'undefined' ? lineHeight : fontSize * 1.1;
	  if (maxHeight < minLineHeight) {
	    return 0;
	  }

	  if (options.maxLines === 1 || options.width === 'auto' && options.maxWidth === 'auto') {
	    (0, _svg.appendTspan)(text, options.text, 0, 0);
	    return 1;
	  }

	  var parsed = (0, _parse2.default)(options.text);
	  chars = parsed.chars;
	  tags = parsed.tags;
	  charIndex = 0;
	  tspans = [];
	  tspanIndex = 0;
	  tagIndex = 0;
	  lastBoundIndex = 0;
	  lineCharIndex = 0;
	  height = 0;
	  tmpStr = '';
	  clip = (0, _text.textOverflow)(options.textOverflow);
	  openTags = [];
	  var workingLineStr = '';
	  var lineStr = '';
	  var index = 0;

	  while (index < chars.length) {
	    var c = chars[index];
	    charIndex = index;
	    isFinalLine = tspanIndex + 1 === maxLines || height + minLineHeight > maxHeight;
	    charsRemain = !/^\s*$/.test(chars.slice(index).join(''));

	    tmpStr = writeTmpStr(c);
	    var tmpStrF = writeTmpStrF(c);
	    var _tspan = createTspan(text, tmpStrF, lineHeight);

	    var complete = false;

	    var theTextFits = textFits(text);

	    if (theTextFits) {
	      // Text with the test character fits, so now just exit if there are no
	      // more characters to write.
	      lineStr = tmpStr;

	      if (!charsRemain) {
	        complete = true;
	      } else if ((0, _text.isWordBound)(c)) {
	        workingLineStr = tmpStrF;
	      }
	    }

	    if (!theTextFits || c === '\n') {
	      // Text with the test character is too wide or it's a newline
	      // Either way => a new line is needed

	      // If a newline, mark it as a word boundary
	      // If not a newline, we'll split at the last word boundary
	      if (c === '\n') {
	        lastBoundIndex = index;
	      }

	      if (charsRemain) {
	        tmpStr = '';
	        for (var i = 0; i < openTags.length; i++) {
	          tmpStr += openTags[i].markup;
	        }
	        if (lastBoundIndex > lineCharIndex) {
	          if ((0, _text.isHyphen)(chars[lastBoundIndex])) {
	            // Push the hyphen onto the last word.
	            lineCharIndex = lastBoundIndex + 1;
	          } else {
	            // Otherwise start the next line with the word bound character.
	            lineCharIndex = lastBoundIndex;
	          }
	          tmpStr += chars.slice(lineCharIndex, index).join('').replace(/^\s+/g, '');
	          lineStr = workingLineStr;
	        } else {
	          // Split the word at the character level instead of a word boundary.
	          lineCharIndex = index;
	        }
	        if (isFinalLine) {
	          lineStr = lineStr.replace(/^\s+$/, '');
	        } else if (c !== '\n') {
	          // rewind so we start the next line with the current character
	          --index;
	        }
	      }

	      lineStr = lineStr.replace(/^\s+|\s+$/g, '');
	      (0, _svg.writeInnerHTML)(_tspan, lineStr);

	      // Remove temporarily to prevent the width from getting whacky:
	      text.removeChild(_tspan);

	      if (isFinalLine || !lineStr) {

	        complete = true;
	      }

	      workingLineStr = '';
	      ++tspanIndex;
	    }

	    if (!complete && (0, _text.isWordBound)(c)) {
	      lastBoundIndex = index;
	    }

	    if (complete) {
	      break;
	    }
	    index++;
	  }

	  // Re-append `tspan` elements into the container `text` element.
	  tspans.forEach(function (tspan) {
	    text.appendChild(tspan);
	  });
	  return tspans.length;
	}

	// Add the next character to the tmpStr and any inline elements at the same index.
	function writeTmpStr(c) {
	  for (var n = tagIndex; n < tags.length; n++) {
	    if (tags[n].index === charIndex) {
	      tmpStr += tags[n].markup;
	      tagIndex = n + 1;
	      if (tags[n].type === 'open') {
	        openTags.push(tags[n]);
	      } else {
	        for (var i = openTags.length - 1; i >= 0; i--) {
	          if (openTags[i].close === tags[n]) {
	            openTags.splice(i, 1);
	          }
	        }
	      }
	    }
	  }
	  tmpStr += c;
	  return tmpStr;
	}

	// Format the tmpStr by trimming whitespace and adding the text-overflow clip.
	function writeTmpStrF(c) {
	  var str = [tmpStr.replace(/^\s+|\s+$/g, ''), charsRemain && (0, _text.isWordBound)(c) && isFinalLine ? clip : ''].join('');
	  return str;
	}

	// Create a working tspan, if it does not already exist, and insert the
	// test string into it.
	function createTspan(text, tmpStrF, lineHeight) {
	  var tspan = tspans[tspanIndex];
	  if (tspan) {
	    (0, _svg.writeInnerHTML)(tspan, tmpStrF);
	  } else {
	    tspan = tspans[tspanIndex] = (0, _svg.appendTspan)(text, tmpStrF, 0, height);
	    height += lineHeight;
	  }
	  return tspan;
	}

	function textFits(text) {
	  var textWidth = text.getBBox().width;
	  textWidth -= textWidth * GECKO_DAMPER;
	  return textWidth <= maxWidth;
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = extractElements;
	var TEXT = 'TEXT';
	var ELEMENT = 'ELEMENT';

	var tag = void 0;
	var quote = void 0;
	var status = void 0;

	function extractElements(text) {
	  var chars = text.split('');
	  var tags = [];
	  reset();

	  chars.forEach(function (c, index) {
	    switch (status) {
	      case TEXT:
	        if (c === '<') {
	          tag = startTag(c, index);
	        }
	        break;
	      case ELEMENT:
	        tag.markup += c;
	        var match = c.match(/['"]/);
	        if (match) {
	          quote = quote === match[0] ? null : match[0];
	        } else if (!quote && /</.test(c)) {
	          tag = startTag(c, index);
	        } else if (!quote && />/.test(c)) {
	          tags.push(tag);
	          status = TEXT;
	        }
	        break;
	    }
	  });

	  var markupLen = 0;
	  tags.forEach(function (tag) {
	    tag.type = /^<\s*\//.test(tag.markup) ? 'close' : 'open';
	    tag.name = tag.markup.match(/^<\s*\/*\s*([A-Z][A-Z0-9]*)/i)[1];
	    tag.index -= markupLen;
	    markupLen += tag.markup.length;
	    text = [text.substr(0, tag.index), text.substr(tag.index + tag.markup.length)].join('');
	  });

	  linkOpenToCloseTags(tags);
	  return { tags: tags, text: text, chars: text.split('') };
	}

	function linkOpenToCloseTags(tags) {
	  var n = 0;
	  while (n < tags.length) {
	    var _tag = tags[n];
	    if (_tag.type === 'open') {
	      for (var i = n + 1; i < tags.length; i++) {
	        var tagNext = tags[i];
	        if (tagNext.type === 'close' && _tag.name === tagNext.name) {
	          _tag.close = tagNext;
	          break;
	        }
	      }
	    } else {
	      // tags.splice(n, 1);
	    }
	    n++;
	  }
	}

	function reset() {
	  tag = quote = null;
	  status = TEXT;
	}

	function startTag(markup, index) {
	  status = ELEMENT;
	  return { markup: markup, index: index };
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.textOverflow = textOverflow;
	exports.isWordBound = isWordBound;
	exports.isHyphen = isHyphen;
	var ELLIPSIS = '…';

	/**
	 * Translates a text-overflow code into a corresponding string.
	 * @returns {string}
	 */
	function textOverflow(code) {
	  if (code === 'clip') {
	    return '';
	  } else if (code === 'ellipsis') {
	    return ELLIPSIS;
	  } else if (typeof code === 'string') {
	    return code;
	  }
	  return '';
	}

	/**
	 * Returns true if a @param char can be used as a break between words.
	 */
	function isWordBound(char) {
	  return (/[\s-–—]/.test(char)
	  );
	}

	function isHyphen(char) {
	  return (/[-–]/.test(char)
	  );
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	import assignValue from './_assignValue.js';
	import copyObject from './_copyObject.js';
	import createAssigner from './_createAssigner.js';
	import isArrayLike from './isArrayLike.js';
	import isPrototype from './_isPrototype.js';
	import keys from './keys.js';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	export default assign;


/***/ })
/******/ ])
});
;