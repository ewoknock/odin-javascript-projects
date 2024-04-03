/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after{
    box-sizing: border-box;
}

*{
    margin: 0;
    padding: 0;
}

:root{
    --color-background: #323232;
    --color-white: white;
    --color-muted-grey: #efefef;
    --color-grey: #323232;
    --color-green: #00ca80;
    --color-blue: #005986;
    --color-muted-blue: #4b7ea0;
    --color-primary: #F7F8FA;
    --font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --border-radius: 1rem;
    --box-shadow: 0px 2px 17px 5px rgba(0,0,0,0.12);

}

html{
    overflow-y: hidden;
    height: 100%;
    font-family: var(--font-family);
}

body{
    background-color: var(--color-primary);
}

main{  
    background-color: var(--color-muted-blue);
    display: flex;
    height: 100vh;
}

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-blue);
    color: var(--color-white);
    padding: 1rem;
    font-size: 1.2rem;
}

.nav-search-bar{
    background-color: var(--color-muted-blue);
    border-radius: var(--border-radius);
    padding: .5rem 2rem;
    border: none;
    text-align: left;
}

.nav-search-bar,
.nav-search-bar::placeholder{
    color: var(--color-white);
    overflow: visible;
}

.nav-temp-selector{
    display: flex;
    align-items: center;
    gap: .3rem;
}

.nav-temp-selector span{
    padding-bottom: .4rem;
}

.nav-actions button{
    border: none;
    color: var(--color-white);
    font-size: 1rem;
    background-color: var(--color-blue);
}

.nav-actions div{
    font-size: .9rem;
    font-weight: 500;
    padding-bottom: .1rem;
}

.nav-actions button:hover,
.active{
    text-decoration: underline;
    text-underline-offset: .3rem;
}

/*  CITY CARD    */
.card-container{
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-content: space-around;
    margin: 5rem 5rem 8rem 5rem;
    width: 90%;

}

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: var(--color-white);
    background-color: var(--color-blue);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 2rem;
}

.card-header{
    font-size: 2rem;
    text-align: center;
}

.card div{
    font-size: 2rem;
    font-weight: 500;
}


/*  CITY WEATHER CARD   */

.details{
    padding: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.details-summary,
.hourly-summary{
    display: flex;
    flex-direction: column;
    color: var(--color-white);
    background-color: var(--color-blue);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1rem;
    gap: .5rem;
    width: 60%;
}

.details-summary-header,
.hourly-summary-header{
    background-color: var(--color-blue);
    font-size: 1.5rem;
}

.details-summary-header span{
    font-size: 1rem;
}

.details-summary-content{
    display: flex;
    justify-content: space-between;
}

.details-summary-section{
    display: flex;
    flex-direction: column;
    font-weight: 700;
    gap: .1rem;
}

.content-temperature{
    font-size: 3rem;
}

.content-weather img{
    width: 75px;
}

/*  Hourly Forecast Card    */
td{
    text-align: center;
}

.hourly-weather img{
    width: 30px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,2BAA2B;IAC3B,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,2BAA2B;IAC3B,wBAAwB;IACxB,kJAAkJ;IAClJ,qBAAqB;IACrB,+CAA+C;;AAEnD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mCAAmC;IACnC,yBAAyB;IACzB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,mCAAmC;IACnC,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;;IAEI,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,SAAS;IACT,2DAA2D;IAC3D,6BAA6B;IAC7B,2BAA2B;IAC3B,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;IACzB,mCAAmC;IACnC,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA,yBAAyB;;AAEzB;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mCAAmC;IACnC,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;IACb,UAAU;IACV,UAAU;AACd;;AAEA;;IAEI,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA,6BAA6B;AAC7B;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf","sourcesContent":["*,\n*::before,\n*::after{\n    box-sizing: border-box;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    --color-background: #323232;\n    --color-white: white;\n    --color-muted-grey: #efefef;\n    --color-grey: #323232;\n    --color-green: #00ca80;\n    --color-blue: #005986;\n    --color-muted-blue: #4b7ea0;\n    --color-primary: #F7F8FA;\n    --font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --border-radius: 1rem;\n    --box-shadow: 0px 2px 17px 5px rgba(0,0,0,0.12);\n\n}\n\nhtml{\n    overflow-y: hidden;\n    height: 100%;\n    font-family: var(--font-family);\n}\n\nbody{\n    background-color: var(--color-primary);\n}\n\nmain{  \n    background-color: var(--color-muted-blue);\n    display: flex;\n    height: 100vh;\n}\n\nnav{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--color-blue);\n    color: var(--color-white);\n    padding: 1rem;\n    font-size: 1.2rem;\n}\n\n.nav-search-bar{\n    background-color: var(--color-muted-blue);\n    border-radius: var(--border-radius);\n    padding: .5rem 2rem;\n    border: none;\n    text-align: left;\n}\n\n.nav-search-bar,\n.nav-search-bar::placeholder{\n    color: var(--color-white);\n    overflow: visible;\n}\n\n.nav-temp-selector{\n    display: flex;\n    align-items: center;\n    gap: .3rem;\n}\n\n.nav-temp-selector span{\n    padding-bottom: .4rem;\n}\n\n.nav-actions button{\n    border: none;\n    color: var(--color-white);\n    font-size: 1rem;\n    background-color: var(--color-blue);\n}\n\n.nav-actions div{\n    font-size: .9rem;\n    font-weight: 500;\n    padding-bottom: .1rem;\n}\n\n.nav-actions button:hover,\n.active{\n    text-decoration: underline;\n    text-underline-offset: .3rem;\n}\n\n/*  CITY CARD    */\n.card-container{\n    display: grid;\n    gap: 2rem;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    justify-content: space-around;\n    margin: 5rem 5rem 8rem 5rem;\n    width: 90%;\n\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--color-white);\n    background-color: var(--color-blue);\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    padding: 2rem;\n}\n\n.card-header{\n    font-size: 2rem;\n    text-align: center;\n}\n\n.card div{\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n\n/*  CITY WEATHER CARD   */\n\n.details{\n    padding: 3rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n}\n\n.details-summary,\n.hourly-summary{\n    display: flex;\n    flex-direction: column;\n    color: var(--color-white);\n    background-color: var(--color-blue);\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    padding: 1rem;\n    gap: .5rem;\n    width: 60%;\n}\n\n.details-summary-header,\n.hourly-summary-header{\n    background-color: var(--color-blue);\n    font-size: 1.5rem;\n}\n\n.details-summary-header span{\n    font-size: 1rem;\n}\n\n.details-summary-content{\n    display: flex;\n    justify-content: space-between;\n}\n\n.details-summary-section{\n    display: flex;\n    flex-direction: column;\n    font-weight: 700;\n    gap: .1rem;\n}\n\n.content-temperature{\n    font-size: 3rem;\n}\n\n.content-weather img{\n    width: 75px;\n}\n\n/*  Hourly Forecast Card    */\ntd{\n    text-align: center;\n}\n\n.hourly-weather img{\n    width: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/gifs/lightning.gif":
/*!********************************!*\
  !*** ./src/gifs/lightning.gif ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c7df35f4a9686daea3e93a6c4b8fdc24.gif");

/***/ }),

/***/ "./src/gifs/partly-cloudy-day.gif":
/*!****************************************!*\
  !*** ./src/gifs/partly-cloudy-day.gif ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f681128b7d2f1f9a0087e46fbd441a85.gif");

/***/ }),

/***/ "./src/gifs/rain.gif":
/*!***************************!*\
  !*** ./src/gifs/rain.gif ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "003394b56c83043f992ea063d2cf370b.gif");

/***/ }),

/***/ "./src/gifs/snowy.gif":
/*!****************************!*\
  !*** ./src/gifs/snowy.gif ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8d91ad14666f88c8589b15f0353b8eaf.gif");

/***/ }),

/***/ "./src/gifs/sunny.gif":
/*!****************************!*\
  !*** ./src/gifs/sunny.gif ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "605a0b09ff30964d146fd43c30c46d0e.gif");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DataConvertor.js":
/*!******************************!*\
  !*** ./src/DataConvertor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTimestamp: () => (/* binding */ formatTimestamp),
/* harmony export */   kelvinToCelsius: () => (/* binding */ kelvinToCelsius),
/* harmony export */   kelvinToFahrenheit: () => (/* binding */ kelvinToFahrenheit)
/* harmony export */ });
const kelvinToFahrenheit = (t) => Math.round((t - 273.15) * 1.8 + 32)

const kelvinToCelsius = (t) => Math.round(t - 273.15)

const formatTimestamp = (time) => {
    let hours = time.getHours()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours %= 12;
    const strTime = `${hours} ${ampm}`
    return strTime

}



/***/ }),

/***/ "./src/cityCards.js":
/*!**************************!*\
  !*** ./src/cityCards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cityDetailsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityDetailsPage */ "./src/cityDetailsPage.js");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _unitsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unitsManager */ "./src/unitsManager.js");
/* harmony import */ var _currentPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentPage */ "./src/currentPage.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _getWeatherIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeatherIcon */ "./src/getWeatherIcon.js");







const makeCard = async(cardContainer, city) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-latitude', city.lat)
    card.setAttribute('data-longitude', city.lon)

    const cardHeader = document.createElement('h1')
    cardHeader.classList.add('card-header')
    cardHeader.append(`${city.name}${city.state ? `, ${  city.state}` : ''}${city.country ? `, ${  city.country}` : ''}`)
    
    card.append(cardHeader)
    cardContainer.append(card)

    const {latitude, longitude} = card.dataset
    await _weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCityWeather(latitude, longitude)
    let cityWeather = _weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getCityWeather()

    const cardWeather = new Image();
    cardWeather.classList.add('card-weather')
    cardWeather.src = (0,_getWeatherIcon__WEBPACK_IMPORTED_MODULE_5__["default"])(cityWeather.weather[0].main)
    card.append(cardWeather)

    const cardTemperature = document.createElement('div')
    cardTemperature.classList.add('card-temperature')
    cardTemperature.append(`${_unitsManager__WEBPACK_IMPORTED_MODULE_2__["default"].getTemperature(cityWeather.main.temp)}°${_unitsManager__WEBPACK_IMPORTED_MODULE_2__["default"].getUnits()}`)
    card.append(cardTemperature)

    card.addEventListener('click', async() => {
        await _weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCityForecast(latitude, longitude)
        const cityForecast = _weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getCityForecast()
        await _weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCityWeather(latitude, longitude)
        cityWeather = _weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getCityWeather()
        ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.clearContent)()
        console.log(cityWeather)
        ;(0,_cityDetailsPage__WEBPACK_IMPORTED_MODULE_0__["default"])(cityWeather, cityForecast.list.slice(0,5))
    })


}

const makeCityCards = async() => {
    const cityList = _weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getCityList()
    _currentPage__WEBPACK_IMPORTED_MODULE_3__["default"].setPage('citySearch')
    const container = document.querySelector('main');
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    cityList.forEach((city) => makeCard(cardContainer, city))

    container.append(cardContainer)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCityCards);

/***/ }),

/***/ "./src/cityDetailsPage.js":
/*!********************************!*\
  !*** ./src/cityDetailsPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataConvertor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataConvertor */ "./src/DataConvertor.js");
/* harmony import */ var _unitsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unitsManager */ "./src/unitsManager.js");
/* harmony import */ var _currentPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentPage */ "./src/currentPage.js");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _getWeatherIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWeatherIcon */ "./src/getWeatherIcon.js");






const makeDetailsSummaryCard = (cityWeather) => {
    const currentTime = new Date(Date.now())

    const detailsSummaryHeader = document.querySelector('.details-summary-header')
    detailsSummaryHeader.innerHTML = `<strong>${cityWeather.name}</strong> <span>as of ${currentTime.toLocaleTimeString()}</span>`

    const detailsTemperature = document.querySelector('.content-temperature')
    detailsTemperature.innerText = `${_unitsManager__WEBPACK_IMPORTED_MODULE_1__["default"].getTemperature(cityWeather.main.temp)}°`
    
    const detailsWeather = document.querySelector('.content-weather')
    const weatherIcon = new Image();
    weatherIcon.src = (0,_getWeatherIcon__WEBPACK_IMPORTED_MODULE_4__["default"])(cityWeather.weather[0].main)
    detailsWeather.append(weatherIcon)

    const detailsHighLow = document.querySelector('.content-high-low')
    detailsHighLow.innerText = `High ${_unitsManager__WEBPACK_IMPORTED_MODULE_1__["default"].getTemperature(cityWeather.main.temp_max)}° • Low ${_unitsManager__WEBPACK_IMPORTED_MODULE_1__["default"].getTemperature(cityWeather.main.temp_min)}°`
}

const createTableCell = (cellClass, value) => {
    const cell = document.createElement('td')
    cell.classList.add(cellClass)
    cell.append(value)
    return cell
}

const makeHourlyForecastCard = (cityForecast) => {
    const forecastContainer = document.querySelector('.hourly-summary-content')

    cityForecast.forEach((weather) => {
        const time = (0,_DataConvertor__WEBPACK_IMPORTED_MODULE_0__.formatTimestamp)(new Date(weather.dt * 1000))
        const weatherCode = new Image()
        weatherCode.src = (0,_getWeatherIcon__WEBPACK_IMPORTED_MODULE_4__["default"])(weather.weather[0].main)
        const temperature = `${_unitsManager__WEBPACK_IMPORTED_MODULE_1__["default"].getTemperature(weather.main.temp)}°`

        const forecastRow = document.createElement('tr')

        const timeCell = createTableCell('hourly-time', time)
        const tempCell = createTableCell('hourly-temp', temperature)
        const weatherCell = createTableCell('hourly-weather', weatherCode)

        forecastRow.append(timeCell)
        forecastRow.append(tempCell)
        forecastRow.append(weatherCell)

        forecastContainer.append(forecastRow)
    })
}

const makeDetailsPage = () => {
    console.log('details page')
    _currentPage__WEBPACK_IMPORTED_MODULE_2__["default"].setPage('details')
    const container = document.querySelector('main');
    const template = document.querySelector('#details-template')
    const detailsTemplate = document.importNode(template.content, true);
    container.append(detailsTemplate);


    makeDetailsSummaryCard(_weatherAPI__WEBPACK_IMPORTED_MODULE_3__["default"].getCityWeather())
    makeHourlyForecastCard(_weatherAPI__WEBPACK_IMPORTED_MODULE_3__["default"].getCityForecast().list.slice(0,5));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeDetailsPage);

/***/ }),

/***/ "./src/currentPage.js":
/*!****************************!*\
  !*** ./src/currentPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const currentPage = (() => {
    let page = 'main'

    const getPage = () => (page)

    const setPage = (str) => {
        page = str
    }

    return {
        getPage, setPage
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentPage);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addContent: () => (/* binding */ addContent),
/* harmony export */   clearContent: () => (/* binding */ clearContent),
/* harmony export */   reloadPage: () => (/* binding */ reloadPage)
/* harmony export */ });
/* harmony import */ var _currentPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentPage */ "./src/currentPage.js");
/* harmony import */ var _cityCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityCards */ "./src/cityCards.js");
/* harmony import */ var _cityDetailsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityDetailsPage */ "./src/cityDetailsPage.js");




const clearContent = () => {
    const content = document.querySelector('.content')
    while (content.firstChild){
        content.firstChild.remove();
    }
}

const addContent = (content) => {
    const main = document.querySelector('main');
    main.append(content)
}

const reloadPage = (cityInfo) => {
    clearContent()
    if (_currentPage__WEBPACK_IMPORTED_MODULE_0__["default"].getPage() === 'citySearch') (0,_cityCards__WEBPACK_IMPORTED_MODULE_1__["default"])(cityInfo)
    if (_currentPage__WEBPACK_IMPORTED_MODULE_0__["default"].getPage() === 'details') (0,_cityDetailsPage__WEBPACK_IMPORTED_MODULE_2__["default"])()

}



/***/ }),

/***/ "./src/getWeatherIcon.js":
/*!*******************************!*\
  !*** ./src/getWeatherIcon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gifs_sunny_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifs/sunny.gif */ "./src/gifs/sunny.gif");
/* harmony import */ var _gifs_rain_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifs/rain.gif */ "./src/gifs/rain.gif");
/* harmony import */ var _gifs_partly_cloudy_day_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gifs/partly-cloudy-day.gif */ "./src/gifs/partly-cloudy-day.gif");
/* harmony import */ var _gifs_snowy_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gifs/snowy.gif */ "./src/gifs/snowy.gif");
/* harmony import */ var _gifs_lightning_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gifs/lightning.gif */ "./src/gifs/lightning.gif");






const getWeatherIcon = (code) => {
    switch(code){
        case 'Clear': return _gifs_sunny_gif__WEBPACK_IMPORTED_MODULE_0__["default"]
        case 'Rain': return _gifs_rain_gif__WEBPACK_IMPORTED_MODULE_1__["default"]
        case 'Clouds': return _gifs_partly_cloudy_day_gif__WEBPACK_IMPORTED_MODULE_2__["default"]
        case 'Snow': return _gifs_snowy_gif__WEBPACK_IMPORTED_MODULE_3__["default"]
        case 'Thunderstorm': return _gifs_lightning_gif__WEBPACK_IMPORTED_MODULE_4__["default"]
        default: return ''
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherIcon);

/***/ }),

/***/ "./src/unitsManager.js":
/*!*****************************!*\
  !*** ./src/unitsManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataConvertor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataConvertor */ "./src/DataConvertor.js");


const unitsManager = (() => {
    let units = 'Fahrenheit'

    const getUnits = () => units.charAt(0)

    const setUnits = (unit) => {
        units = unit;
    }

    const getTemperature = (temp) => (units === 'Fahrenheit' ? (0,_DataConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(temp) : (0,_DataConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(temp))

    return {
        getUnits, setUnits, getTemperature
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitsManager);

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_KEY = '8095bf42b6706e42f1b2fde540e8937d'

const weatherAPI = (() => {
    let cityList;
    let cityWeatherData;
    let cityForecast;

    const setCityList = async() => {
        const cityInput = document.querySelector('#city')
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${API_KEY}`, { mode: 'cors'})
        cityList = await response.json();
        cityInput.value = '';
    }

    const getCityList = () => cityList
    
    const setCityWeather = async(latitude, longitude) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
        cityWeatherData = await response.json();
    }

    const getCityWeather = () => cityWeatherData
    
    const setCityForecast = async (latitude, longitude) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
        cityForecast = await response.json();
    }

    const getCityForecast = () => cityForecast
    
    return{
        setCityList,
        setCityWeather,
        setCityForecast,
        getCityList,
        getCityWeather,
        getCityForecast
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _cityCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityCards */ "./src/cityCards.js");
/* harmony import */ var _unitsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unitsManager */ "./src/unitsManager.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const searchBar = document.querySelector('#city');

const fahrenheit = document.querySelector('.nav-temp-fahrenheit')
fahrenheit.classList.add('active')

const cityInfo = ''

const celsius = document.querySelector('.nav-temp-celsius')

fahrenheit.addEventListener('click', () => {
    _unitsManager__WEBPACK_IMPORTED_MODULE_3__["default"].setUnits('Fahrenheit')
    fahrenheit.classList.add('active')
    celsius.classList.remove('active')
    ;(0,_display__WEBPACK_IMPORTED_MODULE_1__.reloadPage)(cityInfo)

})

celsius.addEventListener('click', () => {
    _unitsManager__WEBPACK_IMPORTED_MODULE_3__["default"].setUnits('Celsius')
    celsius.classList.add('active')
    fahrenheit.classList.remove('active')
    ;(0,_display__WEBPACK_IMPORTED_MODULE_1__.reloadPage)(cityInfo)
})

searchBar.addEventListener('keydown', async(e) => {
    if(e.key === 'Enter'){
        if(!searchBar.value) return;

        (0,_display__WEBPACK_IMPORTED_MODULE_1__.clearContent)();

        await _weatherAPI__WEBPACK_IMPORTED_MODULE_0__["default"].setCityList()
        ;(0,_display__WEBPACK_IMPORTED_MODULE_1__.clearContent)();
        (0,_cityCards__WEBPACK_IMPORTED_MODULE_2__["default"])()
    }
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRCxpRUFBZSxVQUFVOzs7Ozs7O1VDeEN6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDZTtBQUNkO0FBQ0U7QUFDcEI7O0FBRXJCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJLHFEQUFVOztBQUVkLENBQUM7O0FBRUQ7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBWTs7QUFFcEIsY0FBYyxtREFBVTtBQUN4QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsc0RBQWE7QUFDckI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2lmcy9saWdodG5pbmcuZ2lmIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2lmcy9wYXJ0bHktY2xvdWR5LWRheS5naWYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9naWZzL3JhaW4uZ2lmIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2lmcy9zbm93eS5naWYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9naWZzL3N1bm55LmdpZiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9EYXRhQ29udmVydG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2l0eUNhcmRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2l0eURldGFpbHNQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3VycmVudFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0V2VhdGhlckljb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91bml0c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlcntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdHtcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICMzMjMyMzI7XG4gICAgLS1jb2xvci13aGl0ZTogd2hpdGU7XG4gICAgLS1jb2xvci1tdXRlZC1ncmV5OiAjZWZlZmVmO1xuICAgIC0tY29sb3ItZ3JleTogIzMyMzIzMjtcbiAgICAtLWNvbG9yLWdyZWVuOiAjMDBjYTgwO1xuICAgIC0tY29sb3ItYmx1ZTogIzAwNTk4NjtcbiAgICAtLWNvbG9yLW11dGVkLWJsdWU6ICM0YjdlYTA7XG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjdGOEZBO1xuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTdweCA1cHggcmdiYSgwLDAsMCwwLjEyKTtcblxufVxuXG5odG1se1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxubWFpbnsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkLWJsdWUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubmF2LXNlYXJjaC1iYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5hdi1zZWFyY2gtYmFyLFxuLm5hdi1zZWFyY2gtYmFyOjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubmF2LXRlbXAtc2VsZWN0b3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjNyZW07XG59XG5cbi5uYXYtdGVtcC1zZWxlY3RvciBzcGFue1xuICAgIHBhZGRpbmctYm90dG9tOiAuNHJlbTtcbn1cblxuLm5hdi1hY3Rpb25zIGJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG5cbi5uYXYtYWN0aW9ucyBkaXZ7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAuMXJlbTtcbn1cblxuLm5hdi1hY3Rpb25zIGJ1dHRvbjpob3Zlcixcbi5hY3RpdmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuM3JlbTtcbn1cblxuLyogIENJVFkgQ0FSRCAgICAqL1xuLmNhcmQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogNXJlbSA1cmVtIDhyZW0gNXJlbTtcbiAgICB3aWR0aDogOTAlO1xuXG59XG5cbi5jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jYXJkLWhlYWRlcntcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBkaXZ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cblxuLyogIENJVFkgV0VBVEhFUiBDQVJEICAgKi9cblxuLmRldGFpbHN7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5kZXRhaWxzLXN1bW1hcnksXG4uaG91cmx5LXN1bW1hcnl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IC41cmVtO1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5kZXRhaWxzLXN1bW1hcnktaGVhZGVyLFxuLmhvdXJseS1zdW1tYXJ5LWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmRldGFpbHMtc3VtbWFyeS1oZWFkZXIgc3BhbntcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kZXRhaWxzLXN1bW1hcnktY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRldGFpbHMtc3VtbWFyeS1zZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGdhcDogLjFyZW07XG59XG5cbi5jb250ZW50LXRlbXBlcmF0dXJle1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmNvbnRlbnQtd2VhdGhlciBpbWd7XG4gICAgd2lkdGg6IDc1cHg7XG59XG5cbi8qICBIb3VybHkgRm9yZWNhc3QgQ2FyZCAgICAqL1xudGR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG91cmx5LXdlYXRoZXIgaW1ne1xuICAgIHdpZHRoOiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsa0pBQWtKO0lBQ2xKLHFCQUFxQjtJQUNyQiwrQ0FBK0M7O0FBRW5EOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCwyREFBMkQ7SUFDM0QsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUdBLHlCQUF5Qjs7QUFFekI7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzIzMjMyO1xcbiAgICAtLWNvbG9yLXdoaXRlOiB3aGl0ZTtcXG4gICAgLS1jb2xvci1tdXRlZC1ncmV5OiAjZWZlZmVmO1xcbiAgICAtLWNvbG9yLWdyZXk6ICMzMjMyMzI7XFxuICAgIC0tY29sb3ItZ3JlZW46ICMwMGNhODA7XFxuICAgIC0tY29sb3ItYmx1ZTogIzAwNTk4NjtcXG4gICAgLS1jb2xvci1tdXRlZC1ibHVlOiAjNGI3ZWEwO1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNGN0Y4RkE7XFxuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC0tYm94LXNoYWRvdzogMHB4IDJweCAxN3B4IDVweCByZ2JhKDAsMCwwLDAuMTIpO1xcblxcbn1cXG5cXG5odG1se1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbm1haW57ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYtc2VhcmNoLWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYXYtc2VhcmNoLWJhcixcXG4ubmF2LXNlYXJjaC1iYXI6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLm5hdi10ZW1wLXNlbGVjdG9ye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4zcmVtO1xcbn1cXG5cXG4ubmF2LXRlbXAtc2VsZWN0b3Igc3BhbntcXG4gICAgcGFkZGluZy1ib3R0b206IC40cmVtO1xcbn1cXG5cXG4ubmF2LWFjdGlvbnMgYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5uYXYtYWN0aW9ucyBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAuMXJlbTtcXG59XFxuXFxuLm5hdi1hY3Rpb25zIGJ1dHRvbjpob3ZlcixcXG4uYWN0aXZle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuM3JlbTtcXG59XFxuXFxuLyogIENJVFkgQ0FSRCAgICAqL1xcbi5jYXJkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbjogNXJlbSA1cmVtIDhyZW0gNXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG5cXG59XFxuXFxuLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmNhcmQtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgZGl2e1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcbi8qICBDSVRZIFdFQVRIRVIgQ0FSRCAgICovXFxuXFxuLmRldGFpbHN7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5kZXRhaWxzLXN1bW1hcnksXFxuLmhvdXJseS1zdW1tYXJ5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZGV0YWlscy1zdW1tYXJ5LWhlYWRlcixcXG4uaG91cmx5LXN1bW1hcnktaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kZXRhaWxzLXN1bW1hcnktaGVhZGVyIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMtc3VtbWFyeS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXRhaWxzLXN1bW1hcnktc2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZ2FwOiAuMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQtdGVtcGVyYXR1cmV7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQtd2VhdGhlciBpbWd7XFxuICAgIHdpZHRoOiA3NXB4O1xcbn1cXG5cXG4vKiAgSG91cmx5IEZvcmVjYXN0IENhcmQgICAgKi9cXG50ZHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIgaW1ne1xcbiAgICB3aWR0aDogMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzdkZjM1ZjRhOTY4NmRhZWEzZTkzYTZjNGI4ZmRjMjQuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY2ODExMjhiN2QyZjFmOWEwMDg3ZTQ2ZmJkNDQxYTg1LmdpZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMDMzOTRiNTZjODMwNDNmOTkyZWEwNjNkMmNmMzcwYi5naWZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGQ5MWFkMTQ2NjZmODhjODU4OWIxNWYwMzUzYjhlYWYuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwNWEwYjA5ZmYzMDk2NGQxNDZmZDQzYzMwYzQ2ZDBlLmdpZlwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qga2VsdmluVG9GYWhyZW5oZWl0ID0gKHQpID0+IE1hdGgucm91bmQoKHQgLSAyNzMuMTUpICogMS44ICsgMzIpXG5cbmNvbnN0IGtlbHZpblRvQ2Vsc2l1cyA9ICh0KSA9PiBNYXRoLnJvdW5kKHQgLSAyNzMuMTUpXG5cbmNvbnN0IGZvcm1hdFRpbWVzdGFtcCA9ICh0aW1lKSA9PiB7XG4gICAgbGV0IGhvdXJzID0gdGltZS5nZXRIb3VycygpXG4gICAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSdcbiAgICBob3VycyAlPSAxMjtcbiAgICBjb25zdCBzdHJUaW1lID0gYCR7aG91cnN9ICR7YW1wbX1gXG4gICAgcmV0dXJuIHN0clRpbWVcblxufVxuXG5leHBvcnQge1xuICAgIGtlbHZpblRvRmFocmVuaGVpdCxcbiAgICBrZWx2aW5Ub0NlbHNpdXMsXG4gICAgZm9ybWF0VGltZXN0YW1wLFxufSIsImltcG9ydCBtYWtlRGV0YWlsc1BhZ2UgZnJvbSBcIi4vY2l0eURldGFpbHNQYWdlXCI7XG5pbXBvcnQgd2VhdGhlckFQSSBmcm9tIFwiLi93ZWF0aGVyQVBJXCI7XG5pbXBvcnQgdW5pdHNNYW5hZ2VyIGZyb20gJy4vdW5pdHNNYW5hZ2VyJ1xuaW1wb3J0IGN1cnJlbnRQYWdlIGZyb20gXCIuL2N1cnJlbnRQYWdlXCI7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgZ2V0V2VhdGhlckljb24gZnJvbSBcIi4vZ2V0V2VhdGhlckljb25cIjtcblxuY29uc3QgbWFrZUNhcmQgPSBhc3luYyhjYXJkQ29udGFpbmVyLCBjaXR5KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScsIGNpdHkubGF0KVxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWxvbmdpdHVkZScsIGNpdHkubG9uKVxuXG4gICAgY29uc3QgY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBjYXJkSGVhZGVyLmFwcGVuZChgJHtjaXR5Lm5hbWV9JHtjaXR5LnN0YXRlID8gYCwgJHsgIGNpdHkuc3RhdGV9YCA6ICcnfSR7Y2l0eS5jb3VudHJ5ID8gYCwgJHsgIGNpdHkuY291bnRyeX1gIDogJyd9YClcbiAgICBcbiAgICBjYXJkLmFwcGVuZChjYXJkSGVhZGVyKVxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kKGNhcmQpXG5cbiAgICBjb25zdCB7bGF0aXR1ZGUsIGxvbmdpdHVkZX0gPSBjYXJkLmRhdGFzZXRcbiAgICBhd2FpdCB3ZWF0aGVyQVBJLnNldENpdHlXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpXG4gICAgbGV0IGNpdHlXZWF0aGVyID0gd2VhdGhlckFQSS5nZXRDaXR5V2VhdGhlcigpXG5cbiAgICBjb25zdCBjYXJkV2VhdGhlciA9IG5ldyBJbWFnZSgpO1xuICAgIGNhcmRXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd2VhdGhlcicpXG4gICAgY2FyZFdlYXRoZXIuc3JjID0gZ2V0V2VhdGhlckljb24oY2l0eVdlYXRoZXIud2VhdGhlclswXS5tYWluKVxuICAgIGNhcmQuYXBwZW5kKGNhcmRXZWF0aGVyKVxuXG4gICAgY29uc3QgY2FyZFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkVGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZW1wZXJhdHVyZScpXG4gICAgY2FyZFRlbXBlcmF0dXJlLmFwcGVuZChgJHt1bml0c01hbmFnZXIuZ2V0VGVtcGVyYXR1cmUoY2l0eVdlYXRoZXIubWFpbi50ZW1wKX3CsCR7dW5pdHNNYW5hZ2VyLmdldFVuaXRzKCl9YClcbiAgICBjYXJkLmFwcGVuZChjYXJkVGVtcGVyYXR1cmUpXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMoKSA9PiB7XG4gICAgICAgIGF3YWl0IHdlYXRoZXJBUEkuc2V0Q2l0eUZvcmVjYXN0KGxhdGl0dWRlLCBsb25naXR1ZGUpXG4gICAgICAgIGNvbnN0IGNpdHlGb3JlY2FzdCA9IHdlYXRoZXJBUEkuZ2V0Q2l0eUZvcmVjYXN0KClcbiAgICAgICAgYXdhaXQgd2VhdGhlckFQSS5zZXRDaXR5V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKVxuICAgICAgICBjaXR5V2VhdGhlciA9IHdlYXRoZXJBUEkuZ2V0Q2l0eVdlYXRoZXIoKVxuICAgICAgICBjbGVhckNvbnRlbnQoKVxuICAgICAgICBjb25zb2xlLmxvZyhjaXR5V2VhdGhlcilcbiAgICAgICAgbWFrZURldGFpbHNQYWdlKGNpdHlXZWF0aGVyLCBjaXR5Rm9yZWNhc3QubGlzdC5zbGljZSgwLDUpKVxuICAgIH0pXG5cblxufVxuXG5jb25zdCBtYWtlQ2l0eUNhcmRzID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgY2l0eUxpc3QgPSB3ZWF0aGVyQVBJLmdldENpdHlMaXN0KClcbiAgICBjdXJyZW50UGFnZS5zZXRQYWdlKCdjaXR5U2VhcmNoJylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpXG4gICAgY2l0eUxpc3QuZm9yRWFjaCgoY2l0eSkgPT4gbWFrZUNhcmQoY2FyZENvbnRhaW5lciwgY2l0eSkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKGNhcmRDb250YWluZXIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDaXR5Q2FyZHMiLCJpbXBvcnQgeyBmb3JtYXRUaW1lc3RhbXAgfSBmcm9tIFwiLi9EYXRhQ29udmVydG9yXCJcbmltcG9ydCB1bml0c01hbmFnZXIgZnJvbSBcIi4vdW5pdHNNYW5hZ2VyXCJcbmltcG9ydCBjdXJyZW50UGFnZSBmcm9tIFwiLi9jdXJyZW50UGFnZVwiXG5pbXBvcnQgd2VhdGhlckFQSSBmcm9tIFwiLi93ZWF0aGVyQVBJXCJcbmltcG9ydCBnZXRXZWF0aGVySWNvbiBmcm9tIFwiLi9nZXRXZWF0aGVySWNvblwiXG5cbmNvbnN0IG1ha2VEZXRhaWxzU3VtbWFyeUNhcmQgPSAoY2l0eVdlYXRoZXIpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKERhdGUubm93KCkpXG5cbiAgICBjb25zdCBkZXRhaWxzU3VtbWFyeUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXN1bW1hcnktaGVhZGVyJylcbiAgICBkZXRhaWxzU3VtbWFyeUhlYWRlci5pbm5lckhUTUwgPSBgPHN0cm9uZz4ke2NpdHlXZWF0aGVyLm5hbWV9PC9zdHJvbmc+IDxzcGFuPmFzIG9mICR7Y3VycmVudFRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9zcGFuPmBcblxuICAgIGNvbnN0IGRldGFpbHNUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRlbXBlcmF0dXJlJylcbiAgICBkZXRhaWxzVGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7dW5pdHNNYW5hZ2VyLmdldFRlbXBlcmF0dXJlKGNpdHlXZWF0aGVyLm1haW4udGVtcCl9wrBgXG4gICAgXG4gICAgY29uc3QgZGV0YWlsc1dlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC13ZWF0aGVyJylcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHdlYXRoZXJJY29uLnNyYyA9IGdldFdlYXRoZXJJY29uKGNpdHlXZWF0aGVyLndlYXRoZXJbMF0ubWFpbilcbiAgICBkZXRhaWxzV2VhdGhlci5hcHBlbmQod2VhdGhlckljb24pXG5cbiAgICBjb25zdCBkZXRhaWxzSGlnaExvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhpZ2gtbG93JylcbiAgICBkZXRhaWxzSGlnaExvdy5pbm5lclRleHQgPSBgSGlnaCAke3VuaXRzTWFuYWdlci5nZXRUZW1wZXJhdHVyZShjaXR5V2VhdGhlci5tYWluLnRlbXBfbWF4KX3CsCDigKIgTG93ICR7dW5pdHNNYW5hZ2VyLmdldFRlbXBlcmF0dXJlKGNpdHlXZWF0aGVyLm1haW4udGVtcF9taW4pfcKwYFxufVxuXG5jb25zdCBjcmVhdGVUYWJsZUNlbGwgPSAoY2VsbENsYXNzLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNlbGxDbGFzcylcbiAgICBjZWxsLmFwcGVuZCh2YWx1ZSlcbiAgICByZXR1cm4gY2VsbFxufVxuXG5jb25zdCBtYWtlSG91cmx5Rm9yZWNhc3RDYXJkID0gKGNpdHlGb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1zdW1tYXJ5LWNvbnRlbnQnKVxuXG4gICAgY2l0eUZvcmVjYXN0LmZvckVhY2goKHdlYXRoZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGltZSA9IGZvcm1hdFRpbWVzdGFtcChuZXcgRGF0ZSh3ZWF0aGVyLmR0ICogMTAwMCkpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb2RlID0gbmV3IEltYWdlKClcbiAgICAgICAgd2VhdGhlckNvZGUuc3JjID0gZ2V0V2VhdGhlckljb24od2VhdGhlci53ZWF0aGVyWzBdLm1haW4pXG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gYCR7dW5pdHNNYW5hZ2VyLmdldFRlbXBlcmF0dXJlKHdlYXRoZXIubWFpbi50ZW1wKX3CsGBcblxuICAgICAgICBjb25zdCBmb3JlY2FzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcblxuICAgICAgICBjb25zdCB0aW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCgnaG91cmx5LXRpbWUnLCB0aW1lKVxuICAgICAgICBjb25zdCB0ZW1wQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCgnaG91cmx5LXRlbXAnLCB0ZW1wZXJhdHVyZSlcbiAgICAgICAgY29uc3Qgd2VhdGhlckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoJ2hvdXJseS13ZWF0aGVyJywgd2VhdGhlckNvZGUpXG5cbiAgICAgICAgZm9yZWNhc3RSb3cuYXBwZW5kKHRpbWVDZWxsKVxuICAgICAgICBmb3JlY2FzdFJvdy5hcHBlbmQodGVtcENlbGwpXG4gICAgICAgIGZvcmVjYXN0Um93LmFwcGVuZCh3ZWF0aGVyQ2VsbClcblxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmQoZm9yZWNhc3RSb3cpXG4gICAgfSlcbn1cblxuY29uc3QgbWFrZURldGFpbHNQYWdlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkZXRhaWxzIHBhZ2UnKVxuICAgIGN1cnJlbnRQYWdlLnNldFBhZ2UoJ2RldGFpbHMnKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzLXRlbXBsYXRlJylcbiAgICBjb25zdCBkZXRhaWxzVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZGV0YWlsc1RlbXBsYXRlKTtcblxuXG4gICAgbWFrZURldGFpbHNTdW1tYXJ5Q2FyZCh3ZWF0aGVyQVBJLmdldENpdHlXZWF0aGVyKCkpXG4gICAgbWFrZUhvdXJseUZvcmVjYXN0Q2FyZCh3ZWF0aGVyQVBJLmdldENpdHlGb3JlY2FzdCgpLmxpc3Quc2xpY2UoMCw1KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VEZXRhaWxzUGFnZSIsImNvbnN0IGN1cnJlbnRQYWdlID0gKCgpID0+IHtcbiAgICBsZXQgcGFnZSA9ICdtYWluJ1xuXG4gICAgY29uc3QgZ2V0UGFnZSA9ICgpID0+IChwYWdlKVxuXG4gICAgY29uc3Qgc2V0UGFnZSA9IChzdHIpID0+IHtcbiAgICAgICAgcGFnZSA9IHN0clxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2UsIHNldFBhZ2VcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRQYWdlIiwiaW1wb3J0IGN1cnJlbnRQYWdlIGZyb20gJy4vY3VycmVudFBhZ2UnXG5pbXBvcnQgbWFrZUNpdHlDYXJkcyBmcm9tICcuL2NpdHlDYXJkcydcbmltcG9ydCBtYWtlRGV0YWlsc1BhZ2UgZnJvbSAnLi9jaXR5RGV0YWlsc1BhZ2UnO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuY29uc3QgYWRkQ29udGVudCA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZChjb250ZW50KVxufVxuXG5jb25zdCByZWxvYWRQYWdlID0gKGNpdHlJbmZvKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KClcbiAgICBpZiAoY3VycmVudFBhZ2UuZ2V0UGFnZSgpID09PSAnY2l0eVNlYXJjaCcpIG1ha2VDaXR5Q2FyZHMoY2l0eUluZm8pXG4gICAgaWYgKGN1cnJlbnRQYWdlLmdldFBhZ2UoKSA9PT0gJ2RldGFpbHMnKSBtYWtlRGV0YWlsc1BhZ2UoKVxuXG59XG5cbmV4cG9ydHtcbiAgICBjbGVhckNvbnRlbnQsXG4gICAgYWRkQ29udGVudCxcbiAgICByZWxvYWRQYWdlXG59IiwiaW1wb3J0IENsZWFyR2lmIGZyb20gJy4vZ2lmcy9zdW5ueS5naWYnXG5pbXBvcnQgUmFpbkdpZiAgZnJvbSAnLi9naWZzL3JhaW4uZ2lmJ1xuaW1wb3J0IENsb3VkR0lmICBmcm9tICcuL2dpZnMvcGFydGx5LWNsb3VkeS1kYXkuZ2lmJ1xuaW1wb3J0IFNub3dHaWYgIGZyb20gJy4vZ2lmcy9zbm93eS5naWYnXG5pbXBvcnQgU3Rvcm1HaWYgIGZyb20gJy4vZ2lmcy9saWdodG5pbmcuZ2lmJ1xuXG5jb25zdCBnZXRXZWF0aGVySWNvbiA9IChjb2RlKSA9PiB7XG4gICAgc3dpdGNoKGNvZGUpe1xuICAgICAgICBjYXNlICdDbGVhcic6IHJldHVybiBDbGVhckdpZlxuICAgICAgICBjYXNlICdSYWluJzogcmV0dXJuIFJhaW5HaWZcbiAgICAgICAgY2FzZSAnQ2xvdWRzJzogcmV0dXJuIENsb3VkR0lmXG4gICAgICAgIGNhc2UgJ1Nub3cnOiByZXR1cm4gU25vd0dpZlxuICAgICAgICBjYXNlICdUaHVuZGVyc3Rvcm0nOiByZXR1cm4gU3Rvcm1HaWZcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICcnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVySWNvbiIsImltcG9ydCB7IGtlbHZpblRvQ2Vsc2l1cywga2VsdmluVG9GYWhyZW5oZWl0IH0gZnJvbSBcIi4vRGF0YUNvbnZlcnRvclwiO1xuXG5jb25zdCB1bml0c01hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGxldCB1bml0cyA9ICdGYWhyZW5oZWl0J1xuXG4gICAgY29uc3QgZ2V0VW5pdHMgPSAoKSA9PiB1bml0cy5jaGFyQXQoMClcblxuICAgIGNvbnN0IHNldFVuaXRzID0gKHVuaXQpID0+IHtcbiAgICAgICAgdW5pdHMgPSB1bml0O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRlbXBlcmF0dXJlID0gKHRlbXApID0+ICh1bml0cyA9PT0gJ0ZhaHJlbmhlaXQnID8ga2VsdmluVG9GYWhyZW5oZWl0KHRlbXApIDoga2VsdmluVG9DZWxzaXVzKHRlbXApKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VW5pdHMsIHNldFVuaXRzLCBnZXRUZW1wZXJhdHVyZVxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgdW5pdHNNYW5hZ2VyOyIsImNvbnN0IEFQSV9LRVkgPSAnODA5NWJmNDJiNjcwNmU0MmYxYjJmZGU1NDBlODkzN2QnXG5cbmNvbnN0IHdlYXRoZXJBUEkgPSAoKCkgPT4ge1xuICAgIGxldCBjaXR5TGlzdDtcbiAgICBsZXQgY2l0eVdlYXRoZXJEYXRhO1xuICAgIGxldCBjaXR5Rm9yZWNhc3Q7XG5cbiAgICBjb25zdCBzZXRDaXR5TGlzdCA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5SW5wdXQudmFsdWV9JmxpbWl0PTUmYXBwaWQ9JHtBUElfS0VZfWAsIHsgbW9kZTogJ2NvcnMnfSlcbiAgICAgICAgY2l0eUxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNpdHlJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENpdHlMaXN0ID0gKCkgPT4gY2l0eUxpc3RcbiAgICBcbiAgICBjb25zdCBzZXRDaXR5V2VhdGhlciA9IGFzeW5jKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHtBUElfS0VZfWAsIHsgbW9kZTogJ2NvcnMnfSlcbiAgICAgICAgY2l0eVdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENpdHlXZWF0aGVyID0gKCkgPT4gY2l0eVdlYXRoZXJEYXRhXG4gICAgXG4gICAgY29uc3Qgc2V0Q2l0eUZvcmVjYXN0ID0gYXN5bmMgKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7QVBJX0tFWX1gLCB7IG1vZGU6ICdjb3JzJ30pXG4gICAgICAgIGNpdHlGb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDaXR5Rm9yZWNhc3QgPSAoKSA9PiBjaXR5Rm9yZWNhc3RcbiAgICBcbiAgICByZXR1cm57XG4gICAgICAgIHNldENpdHlMaXN0LFxuICAgICAgICBzZXRDaXR5V2VhdGhlcixcbiAgICAgICAgc2V0Q2l0eUZvcmVjYXN0LFxuICAgICAgICBnZXRDaXR5TGlzdCxcbiAgICAgICAgZ2V0Q2l0eVdlYXRoZXIsXG4gICAgICAgIGdldENpdHlGb3JlY2FzdFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckFQSVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB3ZWF0aGVyQVBJIGZyb20gJy4vd2VhdGhlckFQSSc7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQsIHJlbG9hZFBhZ2UgfSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IG1ha2VDaXR5Q2FyZHMgZnJvbSAnLi9jaXR5Q2FyZHMnXG5pbXBvcnQgdW5pdHNNYW5hZ2VyIGZyb20gJy4vdW5pdHNNYW5hZ2VyJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG5cbmNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRlbXAtZmFocmVuaGVpdCcpXG5mYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbmNvbnN0IGNpdHlJbmZvID0gJydcblxuY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGVtcC1jZWxzaXVzJylcblxuZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1bml0c01hbmFnZXIuc2V0VW5pdHMoJ0ZhaHJlbmhlaXQnKVxuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgcmVsb2FkUGFnZShjaXR5SW5mbylcblxufSlcblxuY2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1bml0c01hbmFnZXIuc2V0VW5pdHMoJ0NlbHNpdXMnKVxuICAgIGNlbHNpdXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgcmVsb2FkUGFnZShjaXR5SW5mbylcbn0pXG5cbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXN5bmMoZSkgPT4ge1xuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgaWYoIXNlYXJjaEJhci52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuXG4gICAgICAgIGF3YWl0IHdlYXRoZXJBUEkuc2V0Q2l0eUxpc3QoKVxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgbWFrZUNpdHlDYXJkcygpXG4gICAgfVxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=