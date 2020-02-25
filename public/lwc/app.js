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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push([0,"lwc~main","node_vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lwc/client/index.ts":
/*!*****************************!*\
  !*** ./lwc/client/index.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my/app */ "./lwc/client/modules/my/app/app.js");



customElements.define('my-app', Object(lwc__WEBPACK_IMPORTED_MODULE_0__["buildCustomElementConstructor"])(my_app__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./lwc/client/modules/my/app/app.html":
/*!********************************************!*\
  !*** ./lwc/client/modules/my/app/app.html ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ "./node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_fractalControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my/fractalControls */ "./lwc/client/modules/my/fractalControls/fractalControls.js");
/* harmony import */ var my_imageControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! my/imageControls */ "./lwc/client/modules/my/imageControls/imageControls.js");
/* harmony import */ var my_fractalCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! my/fractalCanvas */ "./lwc/client/modules/my/fractalCanvas/fractalCanvas.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_4__);







function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    h: api_element,
    c: api_custom_element,
    b: api_bind
  } = $api;
  const {
    _m0,
    _m1,
    _m2,
    _m3,
    _m4
  } = $ctx;
  return [api_element("header", {
    classMap: {
      "slds-grid": true,
      "slds-wrap": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-has-flexi-truncate": true,
      "slds-align-middle": true
    },
    styleMap: {
      "paddingLeft": "1em",
      "background": "white"
    },
    key: 3
  }, [api_element("div", {
    classMap: {
      "slds-text-heading_large": true
    },
    key: 0
  }, [api_text("Mandelbrot Set Generator")]), api_element("div", {
    classMap: {
      "slds-text-body_medium": true
    },
    key: 2
  }, [api_element("a", {
    attrs: {
      "href": "https://github.com/markslott/scala-mandelbrot"
    },
    key: 1
  }, [api_text("View source on GitHub")])])])]), api_element("div", {
    classMap: {
      "slds-grid": true,
      "slds-wrap": true,
      "slds-grid--vertical-stretch": true
    },
    key: 23
  }, [api_element("div", {
    classMap: {
      "slds-col": true,
      "slds-size_1-of-1": true,
      "slds-medium-size_6-of-12": true,
      "slds-large-size_6-of-12": true
    },
    key: 6
  }, [api_custom_element("my-fractal-controls", my_fractalControls__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: 5
  }, [])]), api_element("div", {
    classMap: {
      "slds-col": true,
      "slds-size_1-of-1": true,
      "slds-medium-size_6-of-12": true,
      "slds-large-size_6-of-12": true
    },
    key: 8
  }, [api_custom_element("my-image-controls", my_imageControls__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: 7,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.imageTransform))
    }
  }, [])]), api_element("div", {
    classMap: {
      "slds-grid": true
    },
    styleMap: {
      "width": "100%"
    },
    key: 21
  }, [api_element("div", {
    classMap: {
      "slds-col": true,
      "slds-size_1-of-1": true
    },
    key: 20
  }, [api_element("article", {
    classMap: {
      "slds-card": true
    },
    key: 19
  }, [api_element("div", {
    classMap: {
      "slds-card__body": true
    },
    key: 18
  }, [api_element("div", {
    classMap: {
      "slds-grid": true,
      "slds-wrap": true,
      "slds-gutters": true,
      "slds-align_absolute-center": true
    },
    key: 17
  }, [api_element("div", {
    styleMap: {
      "padding": "0.5em 0.5em 0.5em 0.5em"
    },
    key: 10
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_brand": true
    },
    key: 9,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.compute))
    }
  }, [api_text("Compute Mandelbrot Set")])]), api_element("div", {
    styleMap: {
      "padding": "0.5em 0.5em 0.5em 0.5em"
    },
    key: 12
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_brand": true
    },
    key: 11,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.findInterestingPoint))
    }
  }, [api_text("Random Interesting Point")])]), api_element("div", {
    styleMap: {
      "padding": "0.5em 0.5em 0.5em 0.5em"
    },
    key: 14
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_brand": true
    },
    key: 13,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.drawPalette))
    }
  }, [api_text("Show Color Palette")])]), api_element("div", {
    styleMap: {
      "padding": "0.5em 0.5em 0.5em 0.5em"
    },
    key: 16
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_brand": true
    },
    key: 15,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.imageSnapshot))
    }
  }, [api_text("Image Snapshot")])])])])])])]), api_custom_element("my-fractal-canvas", my_fractalCanvas__WEBPACK_IMPORTED_MODULE_3__["default"], {
    styleMap: {
      "width": "100%"
    },
    props: {
      "xposition": $cmp.xpos,
      "yposition": $cmp.ypos,
      "zoom": $cmp.zoom,
      "depth": $cmp.depth,
      "width": $cmp.width,
      "height": $cmp.height,
      "resolution": $cmp.resolution
    },
    key: 22
  }, [])])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_4__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_app_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _app_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-app-_app-host",
  shadowAttribute: "my-app-_app"
};


/***/ }),

/***/ "./lwc/client/modules/my/app/app.js":
/*!******************************************!*\
  !*** ./lwc/client/modules/my/app/app.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.html */ "./lwc/client/modules/my/app/app.html");
/* harmony import */ var _lwc_synthetic_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lwc/synthetic-shadow */ "./node_modules/@lwc/synthetic-shadow/dist/synthetic-shadow.js");
/* harmony import */ var _lwc_synthetic_shadow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lwc_synthetic_shadow__WEBPACK_IMPORTED_MODULE_2__);




 //use this to get CSS to work

class App extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this._initialized = false;
  }

  renderedCallback() {
    if (!this._initialized) {
      this.compute();
      this._initialized = true;
    }
  }

  newPosition(event) {
    var controls = this.template.querySelector("my-fractal-controls");
    controls.xposition = event.detail.xposition;
    controls.yposition = event.detail.yposition;
  }

  imageTransform(event) {
    var fractal = this.template.querySelector("my-fractal-canvas");
    fractal.hue = event.detail.hue;
    fractal.blur = event.detail.blur;
    fractal.saturation = event.detail.saturation;
    fractal.grayscale = event.detail.grayscale;
    fractal.contrast = event.detail.contrast;
    fractal.brightness = event.detail.brightness;
    fractal.performImageTransform();
  }

  imageSnapshot(event) {
    var fractal = this.template.querySelector("my-fractal-canvas");
    fractal.saveImage();
  }

  connectedCallback() {
    console.log("app connected callback");
    this.template.addEventListener('newposition', this.newPosition.bind(this));
  }

  compute() {
    var fractal = this.template.querySelector("my-fractal-canvas");
    var controls = this.template.querySelector("my-fractal-controls");
    fractal.xposition = controls.xposition;
    fractal.yposition = controls.yposition;
    fractal.zoom = controls.zoom;
    fractal.resolution = controls.resolution;
    fractal.depth = controls.depth;
    fractal.width = controls.width;
    fractal.height = controls.height;
    fractal.compute();
  }

  findInterestingPoint() {
    var controls = this.template.querySelector("my-fractal-controls");
    controls.randomInterestingPoint();
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(App, {
  fields: ["_initialized"]
})

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(App, {
  tmpl: _app_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./lwc/client/modules/my/fractalCanvas/fractalCanvas.html":
/*!****************************************************************!*\
  !*** ./lwc/client/modules/my/fractalCanvas/fractalCanvas.html ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fractalCanvas_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fractalCanvas.css */ "./node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
/* harmony import */ var _fractalCanvas_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fractalCanvas_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    h: api_element,
    d: api_dynamic,
    gid: api_scoped_id
  } = $api;
  return [api_element("article", {
    classMap: {
      "slds-card": true
    },
    key: 17
  }, [api_element("div", {
    classMap: {
      "slds-card__header": true,
      "slds-grid": true
    },
    key: 13
  }, [api_element("header", {
    classMap: {
      "slds-media": true,
      "slds-media_center": true,
      "slds-has-flexi-truncate": true
    },
    key: 12
  }, [api_element("div", {
    classMap: {
      "slds-media__body": true
    },
    key: 11
  }, [api_element("h2", {
    classMap: {
      "slds-card__header-title": true
    },
    key: 10
  }, [api_element("a", {
    classMap: {
      "slds-card__header-link": true,
      "slds-truncate": true
    },
    attrs: {
      "href": "javascript:void(0);",
      "title": "Mandelbrot"
    },
    key: 9
  }, [api_element("div", {
    key: 7
  }, [api_element("div", {
    classMap: {
      "slds-grid": true,
      "slds-grid_align-spread": true,
      "slds-p-bottom_x-small": true
    },
    attrs: {
      "id": api_scoped_id("progress-bar-label-id-6")
    },
    key: 3
  }, [api_element("span", {
    key: 0
  }, [api_text("Mandelbrot Set Result")]), api_element("span", {
    attrs: {
      "aria-hidden": "true"
    },
    key: 2
  }, [api_element("strong", {
    attrs: {
      "id": api_scoped_id("progress-complete-text")
    },
    key: 1
  }, [api_dynamic($cmp.percentComplete)])])]), api_element("div", {
    classMap: {
      "slds-progress-bar": true
    },
    attrs: {
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": $cmp.percentComplete,
      "aria-labelledby": `${api_scoped_id("progress-bar-label-id-6")}`,
      "role": "progressbar"
    },
    key: 6
  }, [api_element("span", {
    classMap: {
      "slds-progress-bar__value": true
    },
    attrs: {
      "id": api_scoped_id("progress-complete")
    },
    key: 5
  }, [api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 4
  }, [api_text("Progress: "), api_dynamic($cmp.percentComplete), api_text("%")])])])]), api_element("span", {
    classMap: {
      "slds-text-body_small": true
    },
    key: 8
  }, [api_text("double click to move around the set")])])])])])]), api_element("div", {
    classMap: {
      "slds-card__body": true,
      "slds-align_absolute-center": true
    },
    styleMap: {
      "overflowX": "scroll"
    },
    key: 16
  }, [api_element("canvas", {
    styleMap: {
      "marginRight": "1em",
      "marginLeft": "1em",
      "borderStyle": "double",
      "filter": "blur(0px) hue-rotate(0deg) saturate(100%) grayscale(0%) contrast(100%) brightness(100%) invert(0)"
    },
    attrs: {
      "data-id": "mandelbrot",
      "width": $cmp.width,
      "height": $cmp.height
    },
    key: 14
  }, []), api_element("canvas", {
    styleMap: {
      "display": "none"
    },
    attrs: {
      "data-id": "mandelbrot-copy"
    },
    key: 15
  }, [])])])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_fractalCanvas_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _fractalCanvas_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-fractalCanvas-_fractalCanvas-host",
  shadowAttribute: "my-fractalCanvas-_fractalCanvas"
};


/***/ }),

/***/ "./lwc/client/modules/my/fractalCanvas/fractalCanvas.js":
/*!**************************************************************!*\
  !*** ./lwc/client/modules/my/fractalCanvas/fractalCanvas.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fractalCanvas_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fractalCanvas.html */ "./lwc/client/modules/my/fractalCanvas/fractalCanvas.html");
/* harmony import */ var my_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! my/library */ "./lwc/client/modules/my/library/library.js");





HTMLCanvasElement.prototype.relMouseCoords = my_library__WEBPACK_IMPORTED_MODULE_2__["relMouseCoords"];

class FractalCanvas extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this.xposition = void 0;
    this.yposition = void 0;
    this.zoom = void 0;
    this.resolution = void 0;
    this.depth = void 0;
    this.width = void 0;
    this.height = void 0;
    this.hue = void 0;
    this.blur = void 0;
    this.saturation = void 0;
    this.grayscale = void 0;
    this.contrast = void 0;
    this.brightness = void 0;
    this.percentComplete = void 0;
    this._blocksCompleted = 0;
    this._totalBlocks = void 0;
    this._initialized = false;
  }

  renderedCallback() {
    if (!this._initialized) {
      var canvas = this.template.querySelector("canvas");
      canvas.addEventListener("dblclick", this.canvasClicked.bind(this));
      this.compute();
      this._initialized = true;
    }
  }

  performImageTransform() {
    var styles = "";
    styles += "blur(" + this.blur + "0px) ";
    styles += "hue-rotate(" + this.hue + "deg) ";
    styles += "saturate(" + this.saturation + "%) ";
    styles += "grayscale(" + this.grayscale + "%) ";
    styles += "contrast(" + this.contrast + "%) ";
    styles += "brightness(" + this.brightness + "%) ";
    styles += "invert(0)";
    var canvas = this.template.querySelector("canvas[data-id='mandelbrot']");
    canvas.style.filter = styles;
  }

  saveImage() {
    var canvas = this.template.querySelector("canvas[data-id='mandelbrot']");
    var canvas2 = this.template.querySelector("canvas[data-id='mandelbrot-copy']");
    canvas2.height = canvas.height;
    canvas2.width = canvas.width;
    var filter = getComputedStyle(canvas).filter;
    var ctx2 = canvas2.getContext("2d");
    ctx2.filter = filter;
    ctx2.drawImage(canvas, 0, 0);
    var img = canvas2.toDataURL("image/jpeg");
    var iframe = "<iframe width='" + canvas.width + "px' height='" + canvas.height + "px' src='" + img + "'></iframe>";
    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
  } //recenters the fractal where the user double clicked in the canvas
  //and redraws the fractal


  canvasClicked(event) {
    var coords = event.target.relMouseCoords(event); //compute the position in the mandelbrot drawing

    let startx = this.xposition - this.zoom / 2 * this.width / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"];
    let starty = this.yposition + this.zoom / 2 * this.height / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"];
    let xwidth = 2 * (this.zoom / 2 * this.width) / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"];
    let ywidth = 2 * (this.zoom / 2 * this.height) / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"];
    let xtransform = startx + coords.x / this.width * xwidth;
    let ytransform = starty - coords.y / this.height * ywidth;
    this.xposition = xtransform;
    this.yposition = ytransform;
    this.dispatchEvent(new CustomEvent("newposition", {
      detail: {
        xposition: this.xposition,
        yposition: this.yposition
      },
      bubbles: true
    }));
    this.compute();
  }

  async callAPI(x, y, xpos, ypos, zoom, res, depth, canvas, fractalFunction) {
    var xhr = new XMLHttpRequest();
    var uri = "/mandelbrot?startx=" + xpos + "&starty=" + ypos + "&distance=" + zoom + "&resolution=" + res + "&depth=" + depth;
    const response = await fetch(uri);
    const data = await response.json();
    fractalFunction(data, x, y, res, this.width, this.height, canvas);
    this._blocksCompleted++;
    this.percentComplete = Math.round(this._blocksCompleted / this._totalBlocks * 100);
  } //Makes API calls to get a portion of the fractal. It then stitches together
  //the portions by drawing them on the canvas in the right place. The browser
  //permits 6 open calls at the same time... any more than that and they get
  //queued up, so at most 6 image fragments will get computed at the same time


  compute() {
    const res = Math.pow(2, this.resolution); //let's compute how many partitions (divide and conquer) for the canvas size.
    //let's make a partition (or a square block to be computed) 256x256

    let numBlocksX = Math.ceil(this.width / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"]);
    let numBlocksY = Math.ceil(this.height / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"]); //lets put xposition,yposition in the center of the map
    //let's compute startx and starty (upper left corner)

    let startx = this.xposition - this.zoom * (this.width / 2 / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"]);
    let starty = this.yposition + this.zoom * (this.height / 2 / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"]);
    var canvas = this.template.querySelector("canvas");
    canvas.height = this.height;
    canvas.width = this.width;
    this._totalBlocks = numBlocksX * numBlocksY;
    this._blocksCompleted = 0;
    this.percentComplete = 0;

    for (let y = 0; y < numBlocksY; y++) {
      for (let x = 0; x < numBlocksX; x++) {
        let xpos = startx + x * this.zoom;
        let ypos = starty - y * this.zoom;
        this.callAPI(x, y, xpos, ypos, this.zoom, res, this.depth, canvas, this.drawFractal);
      }
    }
  }

  drawFractal(grid, x, y, res, width, height, canvas) {
    const numBlocksX = Math.ceil(width / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"]);
    const numBlocksY = Math.ceil(height / my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"]);
    var ctx = canvas.getContext("2d");
    var g = grid;

    for (let j = 0; j < g.length; j++) {
      for (let i = 0; i < g[j].length; i++) {
        var colorpick = Math.round(g[i][j]) % my_library__WEBPACK_IMPORTED_MODULE_2__["palette"].length;
        ctx.fillStyle = my_library__WEBPACK_IMPORTED_MODULE_2__["palette"][colorpick];
        let canvasX = Math.ceil(x * width / numBlocksX + i * width / numBlocksX / res);
        let canvasY = Math.ceil(y * height / numBlocksY + j * height / numBlocksY / res);
        let length = Math.ceil(my_library__WEBPACK_IMPORTED_MODULE_2__["partitionSize"] / res);
        ctx.fillRect(canvasX, canvasY, length, length);
      }
    }
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(FractalCanvas, {
  publicProps: {
    xposition: {
      config: 0
    },
    yposition: {
      config: 0
    },
    zoom: {
      config: 0
    },
    resolution: {
      config: 0
    },
    depth: {
      config: 0
    },
    width: {
      config: 0
    },
    height: {
      config: 0
    },
    hue: {
      config: 0
    },
    blur: {
      config: 0
    },
    saturation: {
      config: 0
    },
    grayscale: {
      config: 0
    },
    contrast: {
      config: 0
    },
    brightness: {
      config: 0
    }
  },
  publicMethods: ["performImageTransform", "saveImage", "compute"],
  fields: ["percentComplete", "_blocksCompleted", "_totalBlocks", "_initialized"]
})

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(FractalCanvas, {
  tmpl: _fractalCanvas_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./lwc/client/modules/my/fractalControls/fractalControls.html":
/*!********************************************************************!*\
  !*** ./lwc/client/modules/my/fractalControls/fractalControls.html ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fractalControls_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fractalControls.css */ "./node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
/* harmony import */ var _fractalControls_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fractalControls_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    h: api_element,
    gid: api_scoped_id,
    b: api_bind,
    d: api_dynamic
  } = $api;
  const {
    _m0,
    _m1,
    _m2,
    _m3,
    _m4,
    _m5,
    _m6
  } = $ctx;
  return [api_element("article", {
    classMap: {
      "slds-card": true
    },
    key: 58
  }, [api_element("div", {
    classMap: {
      "slds-card__header": true,
      "slds-grid": true
    },
    key: 5
  }, [api_element("header", {
    classMap: {
      "slds-media": true,
      "slds-media_center": true,
      "slds-has-flexi-truncate": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-media__body": true
    },
    key: 3
  }, [api_element("h2", {
    classMap: {
      "slds-card__header-title": true
    },
    key: 2
  }, [api_element("a", {
    classMap: {
      "slds-card__header-link": true,
      "slds-truncate": true
    },
    attrs: {
      "href": "javascript:void(0);",
      "title": "Accounts"
    },
    key: 1
  }, [api_element("span", {
    key: 0
  }, [api_text("Mandelbrot Set Controls")])])])])])]), api_element("div", {
    classMap: {
      "slds-card__body": true,
      "slds-card__body_inner": true
    },
    key: 57
  }, [api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 10
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("xposition")}`
    },
    key: 7
  }, [api_element("abbr", {
    classMap: {
      "slds-required": true
    },
    attrs: {
      "title": "required"
    },
    key: 6
  }, [api_text("* ")]), api_text("X Position")]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 9
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "type": "number",
      "id": api_scoped_id("xposition")
    },
    props: {
      "required": "",
      "value": $cmp.xposition
    },
    key: 8,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.updateXPosition))
    }
  }, [])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 15
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("yposition")}`
    },
    key: 12
  }, [api_element("abbr", {
    classMap: {
      "slds-required": true
    },
    attrs: {
      "title": "required"
    },
    key: 11
  }, [api_text("* ")]), api_text("Y Position")]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 14
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "type": "number",
      "id": api_scoped_id("yposition")
    },
    props: {
      "required": "",
      "value": $cmp.yposition
    },
    key: 13,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.updateYPosition))
    }
  }, [])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 20
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("zoom")}`
    },
    key: 17
  }, [api_element("abbr", {
    classMap: {
      "slds-required": true
    },
    attrs: {
      "title": "required"
    },
    key: 16
  }, [api_text("* ")]), api_text("Zoom (smaller numbers zoom in, larger zoom out)")]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 19
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "type": "number",
      "id": api_scoped_id("zoom")
    },
    props: {
      "required": "",
      "value": $cmp.zoom
    },
    key: 18,
    on: {
      "change": _m2 || ($ctx._m2 = api_bind($cmp.updateZoom))
    }
  }, [])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 29
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("resolution")}`
    },
    key: 24
  }, [api_element("span", {
    classMap: {
      "slds-slider-label": true
    },
    key: 23
  }, [api_element("span", {
    classMap: {
      "slds-slider-label__label": true
    },
    key: 21
  }, [api_text("Resolution")]), api_element("span", {
    classMap: {
      "slds-slider-label__range": true
    },
    key: 22
  }, [api_text("1 - 8")])])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 28
  }, [api_element("div", {
    classMap: {
      "slds-slider": true
    },
    key: 27
  }, [api_element("input", {
    classMap: {
      "slds-slider__range": true
    },
    attrs: {
      "id": api_scoped_id("resolution"),
      "type": "range",
      "min": "1",
      "max": "8"
    },
    props: {
      "value": $cmp.resolution
    },
    key: 25,
    on: {
      "change": _m3 || ($ctx._m3 = api_bind($cmp.updateResolution))
    }
  }, []), api_element("span", {
    classMap: {
      "slds-slider__value": true
    },
    attrs: {
      "id": api_scoped_id("canvasResolutionSliderValue"),
      "aria-hidden": "true"
    },
    key: 26
  }, [api_dynamic($cmp.resolution)])])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 38
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("depth")}`
    },
    key: 33
  }, [api_element("span", {
    classMap: {
      "slds-slider-label": true
    },
    key: 32
  }, [api_element("span", {
    classMap: {
      "slds-slider-label__label": true
    },
    key: 30
  }, [api_text("Depth (number of iterations)")]), api_element("span", {
    classMap: {
      "slds-slider-label__range": true
    },
    key: 31
  }, [api_text("10 - 10000")])])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 37
  }, [api_element("div", {
    classMap: {
      "slds-slider": true
    },
    key: 36
  }, [api_element("input", {
    classMap: {
      "slds-slider__range": true
    },
    attrs: {
      "id": api_scoped_id("depth"),
      "type": "range",
      "min": "10",
      "max": "10000",
      "step": "25"
    },
    props: {
      "value": $cmp.depth
    },
    key: 34,
    on: {
      "change": _m4 || ($ctx._m4 = api_bind($cmp.updateDepth))
    }
  }, []), api_element("span", {
    classMap: {
      "slds-slider__value": true
    },
    attrs: {
      "id": api_scoped_id("canvasDepthSliderValue"),
      "aria-hidden": "true"
    },
    key: 35
  }, [api_dynamic($cmp.depth)])])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 47
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("canvas-width")}`
    },
    key: 42
  }, [api_element("span", {
    classMap: {
      "slds-slider-label": true
    },
    key: 41
  }, [api_element("span", {
    classMap: {
      "slds-slider-label__label": true
    },
    key: 39
  }, [api_text("Canvas Width (in pixels)")]), api_element("span", {
    classMap: {
      "slds-slider-label__range": true
    },
    key: 40
  }, [api_text("256 - 4096")])])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 46
  }, [api_element("div", {
    classMap: {
      "slds-slider": true
    },
    key: 45
  }, [api_element("input", {
    classMap: {
      "slds-slider__range": true
    },
    attrs: {
      "id": api_scoped_id("canvas-width"),
      "type": "range",
      "min": "0",
      "max": "4096",
      "step": "256"
    },
    props: {
      "value": $cmp.width
    },
    key: 43,
    on: {
      "change": _m5 || ($ctx._m5 = api_bind($cmp.updateWidth))
    }
  }, []), api_element("span", {
    classMap: {
      "slds-slider__value": true
    },
    attrs: {
      "id": api_scoped_id("canvasWidthSliderValue"),
      "aria-hidden": "true"
    },
    key: 44
  }, [api_dynamic($cmp.width)])])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 56
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("canvas-height")}`
    },
    key: 51
  }, [api_element("span", {
    classMap: {
      "slds-slider-label": true
    },
    key: 50
  }, [api_element("span", {
    classMap: {
      "slds-slider-label__label": true
    },
    key: 48
  }, [api_text("Canvas Height (in pixels)")]), api_element("span", {
    classMap: {
      "slds-slider-label__range": true
    },
    key: 49
  }, [api_text("256 - 4096")])])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 55
  }, [api_element("div", {
    classMap: {
      "slds-slider": true
    },
    key: 54
  }, [api_element("input", {
    classMap: {
      "slds-slider__range": true
    },
    attrs: {
      "id": api_scoped_id("canvas-height"),
      "type": "range",
      "min": "0",
      "max": "4096",
      "step": "256"
    },
    props: {
      "value": $cmp.height
    },
    key: 52,
    on: {
      "change": _m6 || ($ctx._m6 = api_bind($cmp.updateHeight))
    }
  }, []), api_element("span", {
    classMap: {
      "slds-slider__value": true
    },
    attrs: {
      "id": api_scoped_id("canvasHeightSliderValue"),
      "aria-hidden": "true"
    },
    key: 53
  }, [api_dynamic($cmp.height)])])])])])])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_fractalControls_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _fractalControls_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-fractalControls-_fractalControls-host",
  shadowAttribute: "my-fractalControls-_fractalControls"
};


/***/ }),

/***/ "./lwc/client/modules/my/fractalControls/fractalControls.js":
/*!******************************************************************!*\
  !*** ./lwc/client/modules/my/fractalControls/fractalControls.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fractalControls_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fractalControls.html */ "./lwc/client/modules/my/fractalControls/fractalControls.html");





class FractalControls extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this.width = 1024;
    this.height = 1024;
    this.resolution = 6;
    this.xposition = -0.75;
    this.yposition = 0.0;
    this.zoom = 1.0;
    this.depth = 60;
  }

  //finds a random point along the edge of the mandelbrot set
  randomInterestingPoint() {
    var theta = Math.random() * 2 * 3.1415926535;
    var r = 0.25;
    var x = r * Math.cos(theta) - 1;
    var y = r * Math.sin(theta);
    this.xposition = x;
    this.yposition = y;
    this.zoom = 0.025;
  }

  updateWidth(event) {
    this.width = event.target.value;
  }

  updateHeight(event) {
    this.height = event.target.value;
  }

  updateResolution(event) {
    this.resolution = event.target.value;
  }

  updateXPosition(event) {
    this.xposition = event.target.value;
  }

  updateYPosition(event) {
    this.yposition = event.target.value;
  }

  updateZoom(event) {
    this.zoom = event.target.value;
  }

  updateDepth(event) {
    this.depth = event.target.value;
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(FractalControls, {
  publicProps: {
    width: {
      config: 0
    },
    height: {
      config: 0
    },
    resolution: {
      config: 0
    },
    xposition: {
      config: 0
    },
    yposition: {
      config: 0
    },
    zoom: {
      config: 0
    },
    depth: {
      config: 0
    }
  },
  publicMethods: ["randomInterestingPoint"]
})

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(FractalControls, {
  tmpl: _fractalControls_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./lwc/client/modules/my/imageControls/imageControls.html":
/*!****************************************************************!*\
  !*** ./lwc/client/modules/my/imageControls/imageControls.html ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imageControls_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageControls.css */ "./node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
/* harmony import */ var _imageControls_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imageControls_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my/slider */ "./lwc/client/modules/my/slider/slider.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_2__);





function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    h: api_element,
    b: api_bind,
    c: api_custom_element
  } = $api;
  const {
    _m0,
    _m1,
    _m2,
    _m3,
    _m4,
    _m5
  } = $ctx;
  return [api_element("article", {
    classMap: {
      "slds-card": true
    },
    styleMap: {
      "height": "100%"
    },
    key: 13
  }, [api_element("div", {
    classMap: {
      "slds-card__header": true,
      "slds-grid": true
    },
    key: 5
  }, [api_element("header", {
    classMap: {
      "slds-media": true,
      "slds-media_center": true,
      "slds-has-flexi-truncate": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-media__body": true
    },
    key: 3
  }, [api_element("h2", {
    classMap: {
      "slds-card__header-title": true
    },
    key: 2
  }, [api_element("a", {
    classMap: {
      "slds-card__header-link": true,
      "slds-truncate": true
    },
    attrs: {
      "href": "javascript:void(0);"
    },
    key: 1
  }, [api_element("span", {
    key: 0
  }, [api_text("Image Transform Controls")])])])])])]), api_element("div", {
    classMap: {
      "slds-card__body": true,
      "slds-card__body_inner": true
    },
    key: 12
  }, [api_custom_element("my-slider", my_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "min": "0",
      "max": "360",
      "step": "1",
      "title": "Hue Rotation (degrees}",
      "value": $cmp.hue
    },
    key: 6,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.updateHue))
    }
  }, []), api_custom_element("my-slider", my_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "min": "0",
      "max": "8",
      "step": "1",
      "title": "Gaussian Blur (in pixels)",
      "value": $cmp.blur
    },
    key: 7,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.updateBlur))
    }
  }, []), api_custom_element("my-slider", my_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "min": "0",
      "max": "1000",
      "step": "25",
      "title": "Saturation (percentage)",
      "value": $cmp.saturation
    },
    key: 8,
    on: {
      "change": _m2 || ($ctx._m2 = api_bind($cmp.updateSaturation))
    }
  }, []), api_custom_element("my-slider", my_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "min": "0",
      "max": "100",
      "step": "10",
      "title": "Grayscale (percentage)",
      "value": $cmp.grayscale
    },
    key: 9,
    on: {
      "change": _m3 || ($ctx._m3 = api_bind($cmp.updateGrayscale))
    }
  }, []), api_custom_element("my-slider", my_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "min": "0",
      "max": "1000",
      "step": "25",
      "title": "Contrast (percentage}",
      "value": $cmp.contrast
    },
    key: 10,
    on: {
      "change": _m4 || ($ctx._m4 = api_bind($cmp.updateContrast))
    }
  }, []), api_custom_element("my-slider", my_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "min": "0",
      "max": "1000",
      "step": "25",
      "title": "Brightness (percentage)",
      "value": $cmp.brightness
    },
    key: 11,
    on: {
      "change": _m5 || ($ctx._m5 = api_bind($cmp.updateBrightness))
    }
  }, [])])])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_2__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_imageControls_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _imageControls_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-imageControls-_imageControls-host",
  shadowAttribute: "my-imageControls-_imageControls"
};


/***/ }),

/***/ "./lwc/client/modules/my/imageControls/imageControls.js":
/*!**************************************************************!*\
  !*** ./lwc/client/modules/my/imageControls/imageControls.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageControls_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageControls.html */ "./lwc/client/modules/my/imageControls/imageControls.html");





class FractalControls extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this.hue = 0;
    this.blur = 0;
    this.brightness = 100;
    this.contrast = 100;
    this.saturation = 100;
    this.grayscale = 0;
    this.inverted = 0;
  }

  get params() {
    return {
      hue: this.hue,
      blur: this.blur,
      brightness: this.brightness,
      contrast: this.contrast,
      saturation: this.saturation,
      grayscale: this.grayscale,
      inverted: this.inverted
    };
  }

  updateHue(event) {
    this.hue = event.target.value;
    this.sendEvent();
  }

  updateBlur(event) {
    this.blur = event.target.value;
    this.sendEvent();
  }

  updateBrightness(event) {
    this.brightness = event.target.value;
    this.sendEvent();
  }

  updateContrast(event) {
    this.contrast = event.target.value;
    this.sendEvent();
  }

  updateSaturation(event) {
    this.saturation = event.target.value;
    this.sendEvent();
  }

  updateGrayscale(event) {
    this.grayscale = event.target.value;
    this.sendEvent();
  }

  updateInverted(event) {}

  sendEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: this.params
    }));
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(FractalControls, {
  publicProps: {
    hue: {
      config: 0
    },
    blur: {
      config: 0
    },
    brightness: {
      config: 0
    },
    contrast: {
      config: 0
    },
    saturation: {
      config: 0
    },
    grayscale: {
      config: 0
    },
    inverted: {
      config: 0
    },
    params: {
      config: 1
    }
  }
})

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(FractalControls, {
  tmpl: _imageControls_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./lwc/client/modules/my/library/library.js":
/*!**************************************************!*\
  !*** ./lwc/client/modules/my/library/library.js ***!
  \**************************************************/
/*! exports provided: relMouseCoords, makeColorGradient, partitionSize, palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relMouseCoords", function() { return relMouseCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeColorGradient", function() { return makeColorGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partitionSize", function() { return partitionSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
function relMouseCoords(event) {
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = this;

  do {
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  } while (currentElement = currentElement.offsetParent);

  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;
  return {
    x: canvasX,
    y: canvasY
  };
}

function makeColorGradient(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) {
  var palette = [];
  const hexchars = "0123456789ABCDEF";

  var byte2Hex = n => String(hexchars.substr(n >> 4 & 0x0f, 1)) + hexchars.substr(n & 0x0f, 1);

  var RGB2Color = (r, g, b) => "#" + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);

  if (center == undefined) center = 128;
  if (width == undefined) width = 127;
  if (len == undefined) len = 50;
  len = len / 2;

  for (var i = 0; i < len + 1; ++i) {
    var red = Math.sin(frequency1 * i + phase1) * width + center;
    var grn = Math.sin(frequency2 * i + phase2) * width + center;
    var blu = Math.sin(frequency3 * i + phase3) * width + center;
    palette[i] = RGB2Color(red, grn, blu);
  }

  for (var i = len; i > 1; --i) {
    var red = Math.sin(frequency1 * i + phase1) * width + center;
    var grn = Math.sin(frequency2 * i + phase2) * width + center;
    var blu = Math.sin(frequency3 * i + phase3) * width + center;
    palette[2 * len - i] = RGB2Color(red, grn, blu);
  }

  return palette;
}

var palette = makeColorGradient(0.0325, 0.0325, 0.0325, 3.3 + 2 * Math.PI / 3, 3.3 + Math.PI / 3, 3.3, 128, 127, 768);
const partitionSize = 256;


/***/ }),

/***/ "./lwc/client/modules/my/slider/slider.html":
/*!**************************************************!*\
  !*** ./lwc/client/modules/my/slider/slider.html ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.css */ "./node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    d: api_dynamic,
    h: api_element,
    t: api_text,
    gid: api_scoped_id,
    b: api_bind
  } = $api;
  const {
    _m0
  } = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 8
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": `${api_scoped_id("brightness")}`
    },
    key: 3
  }, [api_element("span", {
    classMap: {
      "slds-slider-label": true
    },
    key: 2
  }, [api_element("span", {
    classMap: {
      "slds-slider-label__label": true
    },
    key: 0
  }, [api_dynamic($cmp.title)]), api_element("span", {
    classMap: {
      "slds-slider-label__range": true
    },
    key: 1
  }, [api_dynamic($cmp.min), api_text(" - "), api_dynamic($cmp.max)])])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 7
  }, [api_element("div", {
    classMap: {
      "slds-slider": true
    },
    key: 6
  }, [api_element("input", {
    classMap: {
      "slds-slider__range": true
    },
    attrs: {
      "id": api_scoped_id("brightness"),
      "type": "range",
      "min": $cmp.min,
      "max": $cmp.max,
      "step": $cmp.step
    },
    props: {
      "value": $cmp.value
    },
    key: 4,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  }, []), api_element("span", {
    classMap: {
      "slds-slider__value": true
    },
    attrs: {
      "aria-hidden": "true"
    },
    key: 5
  }, [api_dynamic($cmp.value)])])])])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_slider_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _slider_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-slider-_slider-host",
  shadowAttribute: "my-slider-_slider"
};


/***/ }),

/***/ "./lwc/client/modules/my/slider/slider.js":
/*!************************************************!*\
  !*** ./lwc/client/modules/my/slider/slider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.html */ "./lwc/client/modules/my/slider/slider.html");





class FractalControls extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this.elementId = void 0;
    this.min = void 0;
    this.max = void 0;
    this.value = void 0;
    this.title = void 0;
    this.step = void 0;
  }

  connectedCallback() {
    this.elementId = this.randomIdGenerator();
  }

  handleChange(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent("change", {
      detail: this.value
    }));
  }

  randomIdGenerator() {
    var S4 = function () {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };

    return "_" + (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(FractalControls, {
  publicProps: {
    min: {
      config: 0
    },
    max: {
      config: 0
    },
    value: {
      config: 0
    },
    title: {
      config: 0
    },
    step: {
      config: 0
    }
  },
  fields: ["elementId"]
})

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(FractalControls, {
  tmpl: _slider_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ 0:
/*!**************************************************************************************************!*\
  !*** multi ./node_modules/error-overlay-webpack-plugin/lib/entry-basic.js ./lwc/client/index.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mlott/dev/play-scala-mandelbrot/node_modules/error-overlay-webpack-plugin/lib/entry-basic.js */"./node_modules/error-overlay-webpack-plugin/lib/entry-basic.js");
module.exports = __webpack_require__(/*! /Users/mlott/dev/play-scala-mandelbrot/lwc/client/index.ts */"./lwc/client/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map