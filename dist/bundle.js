/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./assets/css/styles.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./assets/css/styles.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./assets/css/styles.scss":
/*!********************************!*\
  !*** ./assets/css/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./assets/css/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/lib/core.js":
/*!************************!*\
  !*** ./js/lib/core.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $ = function $(selector) {
  return new $.prototype.Init(selector); // return new object with new prototype
};

$.prototype.Init = function (selector) {
  if (!selector) {
    return this; // return {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.Init.prototype = $.prototype; // bind object prototype to construcor prototype

window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./js/lib/libMain.js":
/*!***************************!*\
  !*** ./js/lib/libMain.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./js/lib/core.js");
/* harmony import */ var _modules_diplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/diplay */ "./js/lib/modules/diplay.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./js/lib/modules/classes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./js/lib/modules/actions.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./js/lib/modules/attributes.js");





/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./js/lib/modules/actions.js":
/*!***********************************!*\
  !*** ./js/lib/modules/actions.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./js/lib/core.js");
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-loader */ "../node_modules/file-loader/dist/cjs.js");
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_loader__WEBPACK_IMPORTED_MODULE_1__);



_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callbackFunc) {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].addEventListener || !eventName || !callbackFunc) {
      return this;
    }

    this[i].addEventListener(eventName, callbackFunc);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callbackFunc) {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].removeEventListener || !eventName || !callbackFunc) {
      return this;
    }

    this[i].removeEventListener(eventName, callbackFunc);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (callbackFunc) {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].click || !this[i].addEventListener) {
      return this;
    }

    if (callbackFunc) {
      this[i].addEventListener('click', callbackFunc);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./js/lib/modules/attributes.js":
/*!**************************************!*\
  !*** ./js/lib/modules/attributes.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./js/lib/core.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (attrName, attrValue) {
  var _this = this;

  var _loop = function _loop(i) {
    if (!_this[i].setAttribute) {
      return "continue";
    }

    if (!attrName) {
      console.error('Attribute name is undefined');
      return {
        v: _this
      };
    }

    if (Array.isArray(attrName)) {
      attrName.forEach(function (item) {
        _this[i].setAttribute(item, attrValue);
      });
    } else if (attrValue) {
      _this[i].setAttribute(attrName, attrValue);
    } else {
      _this[i].setAttribute(attrName, '');
    }
  };

  for (var i = 0; i < this.length; i += 1) {
    var _ret = _loop(i);

    switch (_ret) {
      case "continue":
        continue;

      default:
        if (_typeof(_ret) === "object") return _ret.v;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (attrName) {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].removeAttribute) {
      continue;
    }

    if (!attrName) {
      console.error('Attribute name is undefined');
      return this;
    }

    this[i].removeAttribute(attrName);
  }

  return this;
};

/***/ }),

/***/ "./js/lib/modules/classes.js":
/*!***********************************!*\
  !*** ./js/lib/modules/classes.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (var i = 0; i < this.length; i += 1) {
    var _this$i$classList;

    (_this$i$classList = this[i].classList).add.apply(_this$i$classList, arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.delClass = function () {
  for (var i = 0; i < this.length; i += 1) {
    var _this$i$classList2;

    if (!this[i].classList) {
      continue;
    }

    (_this$i$classList2 = this[i].classList).remove.apply(_this$i$classList2, arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (UserClass) {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(UserClass);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hasClass = function (UserClass) {
  var classExist = false;

  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }

    if (this[i].classList.contains(UserClass)) {
      classExist = true;
    }
  }

  return classExist;
};

/***/ }),

/***/ "./js/lib/modules/diplay.js":
/*!**********************************!*\
  !*** ./js/lib/modules/diplay.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dBlock = function () {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'block';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dFlex = function () {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'flex';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dNone = function () {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dReset = function () {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dToggle = function () {
  for (var i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = ''; // reboot display

      console.log(this[i].style.display);

      if (window.getComputedStyle(this[i]).display === 'none') {
        this[i].style.display = 'block'; // if display was none toggle it to block
      }
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/styles.scss */ "./assets/css/styles.scss");
/* harmony import */ var _assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_libMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/libMain */ "./js/lib/libMain.js");
/* eslint-disable no-undef */



var action = function action() {
  console.log(this, 'LOX');
};

console.log($('div'));

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./js/script.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./js/script.js */"./js/script.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map