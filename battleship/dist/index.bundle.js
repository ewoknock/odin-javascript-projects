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
___CSS_LOADER_EXPORT___.push([module.id, `body{
    background-color: lightgrey;
}

main{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.boards{
    display: flex;
    justify-content: space-around;
    
}

h2,
.numbers{
    text-align: center;
}

.board-container{
    padding: 1rem;
}

.board{
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
    gap: 2px;
}

.board-inner-wrapper{
    display: flex;
    gap: .6rem;
}

.column-description{
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 2px;
}

.row-description{
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    gap: 2px;
}

.grid-cell{
    height: 20px;
    width: 20px;
    border: 1px solid black;
    background-size: contain;
}

.grid-cell:hover{
    background-color: grey;
    opacity: 0.2;
}

.hidden{
    background-size: 0 0;
}

.ship{
    background-color: blue;
}

.hit{
    background-color: red;
}

.miss{
    background-color: grey;
}

.alert-container{
    position: relative;
    margin: 2rem auto;
    width: 60%;
    text-align: center;
}


.delete{
    position: absolute;
    right: .5rem;
    top: .5rem;
    border: none;
    border-radius: 1rem;
}

.board-container,
.alert-container{
    background-color: white;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;AACtB;;;AAGA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;AAC3B","sourcesContent":["body{\n    background-color: lightgrey;\n}\n\nmain{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.boards{\n    display: flex;\n    justify-content: space-around;\n    \n}\n\nh2,\n.numbers{\n    text-align: center;\n}\n\n.board-container{\n    padding: 1rem;\n}\n\n.board{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.board-inner-wrapper{\n    display: flex;\n    gap: .6rem;\n}\n\n.column-description{\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    gap: 2px;\n}\n\n.row-description{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.grid-cell{\n    height: 20px;\n    width: 20px;\n    border: 1px solid black;\n    background-size: contain;\n}\n\n.grid-cell:hover{\n    background-color: grey;\n    opacity: 0.2;\n}\n\n.hidden{\n    background-size: 0 0;\n}\n\n.ship{\n    background-color: blue;\n}\n\n.hit{\n    background-color: red;\n}\n\n.miss{\n    background-color: grey;\n}\n\n.alert-container{\n    position: relative;\n    margin: 2rem auto;\n    width: 60%;\n    text-align: center;\n}\n\n\n.delete{\n    position: absolute;\n    right: .5rem;\n    top: .5rem;\n    border: none;\n    border-radius: 1rem;\n}\n\n.board-container,\n.alert-container{\n    background-color: white;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/lib/images/battleships-01.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-01.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7721bcf9f14a302a6c3db24ab4612d12.png");

/***/ }),

/***/ "./src/lib/images/battleships-02.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-02.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6ba56bcf416a342e4623a6af875257d2.png");

/***/ }),

/***/ "./src/lib/images/battleships-03.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-03.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "44fb91cc259ed888ee3665b50b2ba785.png");

/***/ }),

/***/ "./src/lib/images/battleships-04.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-04.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "438446f7a8bb39fed6e8433cc7cdfe93.png");

/***/ }),

/***/ "./src/lib/images/battleships-05.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-05.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d707a17f43a5e2dbcfc4685251faae18.png");

/***/ }),

/***/ "./src/lib/images/battleships-06.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-06.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2b46cd682fbdd5eab7be240fb8614b84.png");

/***/ }),

/***/ "./src/lib/images/battleships-07.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-07.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a92ff40bfe9fedbe2d08b8f87d1a5349.png");

/***/ }),

/***/ "./src/lib/images/battleships-08.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-08.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1b1d10465f414f5023848d3ced5543b0.png");

/***/ }),

/***/ "./src/lib/images/battleships-09.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-09.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f404535521e9ea56a6212b81e100b139.png");

/***/ }),

/***/ "./src/lib/images/battleships-10.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-10.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d5e3b9e5ef72e1d13d102771c3fc1a33.png");

/***/ }),

/***/ "./src/lib/images/battleships-11.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-11.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ee2d9a5f8793edd1142e1c0eee336f42.png");

/***/ }),

/***/ "./src/lib/images/battleships-12.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-12.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f929c17f501065c471cf2cab28a2378d.png");

/***/ }),

/***/ "./src/lib/images/battleships-13.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-13.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0b691738ba56fa5eeb531fadb4bfa328.png");

/***/ }),

/***/ "./src/lib/images/battleships-14.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-14.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8cf24b0100916bb240124eb18f697b1f.png");

/***/ }),

/***/ "./src/lib/images/battleships-15.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-15.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a183d4c423401a4cfdd7fd32b1c366d5.png");

/***/ }),

/***/ "./src/lib/images/battleships-18.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-18.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "62acd97b99a914a64550fab7279231ce.png");

/***/ }),

/***/ "./src/lib/images/battleships-19.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-19.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "412b777d13c13b80ced8c392916ffcf8.png");

/***/ }),

/***/ "./src/lib/images/battleships-20.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-20.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bb7b14db3ddba53ed3c6e5bd1ae71225.png");

/***/ }),

/***/ "./src/lib/images/battleships-21.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-21.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ab9ef8e5ad220ca8deaad4ff270a4df5.png");

/***/ }),

/***/ "./src/lib/images/battleships-22.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-22.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ca3f260b6d94271d22442e28297932e6.png");

/***/ }),

/***/ "./src/lib/images/battleships-23.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-23.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cbf26bcca6ecdaee0920f27b5796aeef.png");

/***/ }),

/***/ "./src/lib/images/battleships-24.png":
/*!*******************************************!*\
  !*** ./src/lib/images/battleships-24.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2988bea1285960970dc155e55f973fba.png");

/***/ }),

/***/ "./src/lib/images/explosion.png":
/*!**************************************!*\
  !*** ./src/lib/images/explosion.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "97d11ed8a7bd03b4f1e3b02fd40c3a6d.png");

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

/***/ "./src/lib/display.js":
/*!****************************!*\
  !*** ./src/lib/display.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAlert: () => (/* binding */ createAlert),
/* harmony export */   drawGrid: () => (/* binding */ drawGrid),
/* harmony export */   updateEventListeners: () => (/* binding */ updateEventListeners),
/* harmony export */   updateGrid: () => (/* binding */ updateGrid)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/lib/ships.js");


const createAlert = (message) => {
    let alert = document.getElementById('alert')
    alert.innerHTML = `
        <div class="alert-message">
            <button class="delete">X</button>
            <p class="message">${message}</p>
        </div>
        `
    const button = alert.querySelector('button')
    button.addEventListener('click', () => {
        button.removeEventListener('click', () => {})
        alert.innerHTML = ''
    })
}
 
const createResetButton = () => {
    const resetButton = document.createElement('button')
    resetButton.classList.add('reset')
    resetButton.textContent = "Reset Game"
    resetButton.addEventListener('click', () => {
        window.location.reload()
    })
    alert = document.getElementById('alert')
    alert.appendChild(resetButton)
}

const endGame = (winner) => {
    createAlert(winner)
    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach((cell) => {
        cell.removeEventListener('click', makeAttack)
    })
    createResetButton()
}

const updateGrid = (type = 'player', gameBoard) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const { ships, missedAttacks } = gameBoard;

    ships.forEach((ship) => {
        const shipImages = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.getShipImages)(ship.name)
        for(let i = 0; i < ship.length; i++){
            const cell = board.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`)
            if(ship.orientation === 'vertical'){
                cell.style.transform = 'rotate(90deg)'
            }
            cell.style.backgroundImage = `url(${shipImages[i]})`
            console.log(board)
            console.log(type !== 'player')
            if(type !== 'player'){
                console.log(type !== 'player')
                cell.classList.add("hidden")
            }
        }
    })
 

    missedAttacks.forEach((coordinate) => {
        const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
        cell.classList.add('miss')
    })

    ships.forEach((ship) => {
        ship.hits.forEach((coordinate) => {
            const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
            cell.classList.add("hit")
            if(ship.isSunk()){
                cell.classList.remove("hidden")
            }
        })
    })
}


const drawGrid = (type = 'player') => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    board.innerHTML = ''

    for(let i = 0 ; i < 100; i++){
        const cell = document.createElement('div')
        cell.classList.add('grid-cell')
        board.appendChild(cell)

        cell.setAttribute('data-x', i % 10)
        cell.setAttribute('data-y', Math.floor( i / 10))
    }
}

function makeAttack(event){
    const cell = event.target
    const gameInstance = event.target.gameInstance

    const x = parseInt(cell.getAttribute('data-x'))
    const y = parseInt(cell.getAttribute('data-y'))
    try{
        const attack = gameInstance.attack([x,y])
        if(attack === 'hit'){
            cell.classList.add('hit')
            createAlert('You hit a ship!')
            cell.removeEventListener('click', makeAttack)
        }else if(attack === 'miss'){
            cell.removeEventListener('click', makeAttack)
            gameInstance.changePlayer()
            const computerAttack = gameInstance.computerAttack()
            if(computerAttack === 'miss'){
                createAlert('You both missed!')
            }
            else if(computerAttack === 'hit'){
                createAlert('You missed but the computer hit!')
            }
            gameInstance.changePlayer()
            updateGrid('player', gameInstance.player1.getBoard())
            updateGrid('computer', gameInstance.player2.getBoard())
        }
        const gameOver = gameInstance.gameEnd()

        if(gameOver){
            endGame(gameOver)
            gameInstance.setupGame()
        }
    }catch(e){

    }
}

const updateEventListeners = (type = 'player', gameInstance) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const cells = board.querySelectorAll('.grid-cell')
    cells.forEach((cell) => {
        if(!cell.classList.contains('hit') && !cell.classList.contains('miss')){
            cell.addEventListener('click', makeAttack)
            cell.gameInstance = gameInstance
        }

    })
}



/***/ }),

/***/ "./src/lib/game.js":
/*!*************************!*\
  !*** ./src/lib/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/lib/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/lib/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/lib/player.js");




const gameFactory = () => {
    const game = {
        currentPlayer: null,
        enemyBoard: null,
        player1: null,
        player2: null,
        changePlayer() {
            this.enemyBoard = this.currentPlayer.getBoard()
            this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
        },
        randomShipPlacement(board) {
            const ships = [
                (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('Carrier', 5), 
                (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('Battleship', 4),
                (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('Cruiser', 3),
                (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('Submarine', 3),
                (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('Destroyer', 2)
            ]
            ships.forEach((ship) => {
                let coordinates = []
                let orientation = ''
                let validPlacement = false;
                while(!validPlacement){
                    coordinates = [
                        Math.floor(Math.random() * 10),
                        Math.floor(Math.random() * 10)
                    ]
                    ship.orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical'
                    try{
                        board.placeShip(ship, coordinates)
                        validPlacement = true
                    } catch(error){
                        validPlacement = false
                    }
                }
            })
        },
        attack(coordinates){
            return this.currentPlayer.attack(this.enemyBoard, coordinates)
        },
        computerAttack(hits = 0){
            const coordinates = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ]
            if(this.enemyBoard.missedAttacks.some((missedAttack) => missedAttack[0] === coordinates[0] && missedAttack[1] === coordinates[1])){
                this.computerAttack()
            } else{
                const attack = this.attack(coordinates)
                console.log(attack)
                if(attack === 'hit'){
                    this.computerAttack(hits+1)
                    return 'hit'
                }
            }
            if(hits === 0){
                return 'miss'
            }
            return hits
        },
        setupGame(){
            this.player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])()
            this.player2 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])()
            this.randomShipPlacement(this.player1.getBoard())
            this.randomShipPlacement(this.player2.getBoard())
            this.currentPlayer = this.player1
            this.enemyBoard = this.player2.getBoard()
        },
        gameEnd(){
            if(this.player1.getBoard().allShipsSunk()){
                return 'Computer wins'
            }
            if(this.player2.getBoard().allShipsSunk()){
                return 'Player wins'
            }
            return false
        },
        playGame(){
            while(!this.gameEnd()){
                
            }
        }
    }
    return game
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameFactory);

/***/ }),

/***/ "./src/lib/gameBoard.js":
/*!******************************!*\
  !*** ./src/lib/gameBoard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkHit = (coordinates, ships) => {
    const [x, y] = coordinates
    let hitShip = null
    ships.forEach((ship) => {
        ship.coordinates.forEach((coordinate) => {
            if(coordinate[0] === x && coordinate[1] === y)
            hitShip = ship
        })
    })
    return hitShip
}

const generateShipCoordinates = (ship, coordinates) => {
    const [x, y] = coordinates
    const shipCoordinates = []
    for(let i = 0; i < ship.length; i++){
        ship.orientation === 'horizontal' ? shipCoordinates.push([x + i, y]) : shipCoordinates.push([x, y + i])
    }
    return shipCoordinates
}

const coordinatesOnBoard = (shipCoordinates) => {
    let onBoard = false;
    onBoard = shipCoordinates.every((coordinate) => {
        const [x,y] = coordinate;
        return x >= 0 && x <= 9 && y >= 0 && y <= 9
    })
    return onBoard
}

const coordinatesDoNotOverlap = (ships, shipCoordinates) => {
    ships.forEach((ship) => {
        shipCoordinates.forEach((coordinate) => {
            if(ship.coordinates.some((coord) => coordinate.every((v, i) => v === coord[i]))){
                throw new Error('Ships cannot overlap with other ships')
            }
        })
    })
}

const validateCoordinates = (ships, shipCoordinates) => {
    let validCoordinates = false;
    validCoordinates = coordinatesOnBoard(shipCoordinates)
    if(!validCoordinates){
        throw new Error('Ships cannot be placed off the board')
    }
    coordinatesDoNotOverlap(ships, shipCoordinates)

    return validCoordinates
}


const gameBoard = () => {
    const board = {
        ships: [],
        missedAttacks: [],
        allShipsSunk(){
            return this.ships.every((ship) => ship.isSunk())
        },
        placeShip(ship, coordinates){
            ship.coordinates = generateShipCoordinates(ship, coordinates)
            validateCoordinates(this.ships, ship.coordinates)
            this.ships.push(ship)
        },
        receiveAttack(coordinates){
            const shipHit = checkHit(coordinates, this.ships)
            if(shipHit){
                shipHit.hit(coordinates)
                return 'hit'
            }else{
                this.missedAttacks.push(coordinates)
                return 'miss'
            }
        }
    }
    return board
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

/***/ }),

/***/ "./src/lib/player.js":
/*!***************************!*\
  !*** ./src/lib/player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/lib/gameBoard.js");


const player = () => {
    const board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])()

    const getBoard = () => board
    
    const attack = (enemyBoard, coordinates) => {
        return enemyBoard.receiveAttack(coordinates)
    }
    return { getBoard, attack }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/lib/ship.js":
/*!*************************!*\
  !*** ./src/lib/ship.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipFactory = (name, length) => {
    const ship = {
        name,
        length,
        hits: [],
        orientation: 'horizontal',
        isSunk() {
            return this.hits.length === this.length
        },
        hit(coordinate){
            if(this.hits.length < this.length){
                this.hits.push(coordinate)
            }
        }
    }

    return ship
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);

/***/ }),

/***/ "./src/lib/ships.js":
/*!**************************!*\
  !*** ./src/lib/ships.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getExplosionImage: () => (/* binding */ getExplosionImage),
/* harmony export */   getShipImages: () => (/* binding */ getShipImages),
/* harmony export */   ships: () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _images_battleships_20_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/battleships-20.png */ "./src/lib/images/battleships-20.png");
/* harmony import */ var _images_battleships_01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/battleships-01.png */ "./src/lib/images/battleships-01.png");
/* harmony import */ var _images_battleships_02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/battleships-02.png */ "./src/lib/images/battleships-02.png");
/* harmony import */ var _images_battleships_03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/battleships-03.png */ "./src/lib/images/battleships-03.png");
/* harmony import */ var _images_battleships_04_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/battleships-04.png */ "./src/lib/images/battleships-04.png");
/* harmony import */ var _images_battleships_05_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/battleships-05.png */ "./src/lib/images/battleships-05.png");
/* harmony import */ var _images_battleships_21_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/battleships-21.png */ "./src/lib/images/battleships-21.png");
/* harmony import */ var _images_battleships_06_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/battleships-06.png */ "./src/lib/images/battleships-06.png");
/* harmony import */ var _images_battleships_07_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/battleships-07.png */ "./src/lib/images/battleships-07.png");
/* harmony import */ var _images_battleships_08_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/battleships-08.png */ "./src/lib/images/battleships-08.png");
/* harmony import */ var _images_battleships_09_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/battleships-09.png */ "./src/lib/images/battleships-09.png");
/* harmony import */ var _images_battleships_22_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/battleships-22.png */ "./src/lib/images/battleships-22.png");
/* harmony import */ var _images_battleships_10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/battleships-10.png */ "./src/lib/images/battleships-10.png");
/* harmony import */ var _images_battleships_11_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/battleships-11.png */ "./src/lib/images/battleships-11.png");
/* harmony import */ var _images_battleships_12_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/battleships-12.png */ "./src/lib/images/battleships-12.png");
/* harmony import */ var _images_battleships_23_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/battleships-23.png */ "./src/lib/images/battleships-23.png");
/* harmony import */ var _images_battleships_13_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/battleships-13.png */ "./src/lib/images/battleships-13.png");
/* harmony import */ var _images_battleships_14_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/battleships-14.png */ "./src/lib/images/battleships-14.png");
/* harmony import */ var _images_battleships_15_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/battleships-15.png */ "./src/lib/images/battleships-15.png");
/* harmony import */ var _images_battleships_24_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/battleships-24.png */ "./src/lib/images/battleships-24.png");
/* harmony import */ var _images_battleships_18_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/battleships-18.png */ "./src/lib/images/battleships-18.png");
/* harmony import */ var _images_battleships_19_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/battleships-19.png */ "./src/lib/images/battleships-19.png");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/explosion.png */ "./src/lib/images/explosion.png");





























const carrier = {
    name: 'Carrier',
    length: 5,
    fullImage: _images_battleships_20_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    images: [_images_battleships_01_png__WEBPACK_IMPORTED_MODULE_1__["default"], _images_battleships_02_png__WEBPACK_IMPORTED_MODULE_2__["default"], _images_battleships_03_png__WEBPACK_IMPORTED_MODULE_3__["default"], _images_battleships_04_png__WEBPACK_IMPORTED_MODULE_4__["default"], _images_battleships_05_png__WEBPACK_IMPORTED_MODULE_5__["default"]]
}

const battleship = {
    name: 'Battleship',
    length: 4,
    fullImage: _images_battleships_21_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    images: [_images_battleships_06_png__WEBPACK_IMPORTED_MODULE_7__["default"], _images_battleships_07_png__WEBPACK_IMPORTED_MODULE_8__["default"], _images_battleships_08_png__WEBPACK_IMPORTED_MODULE_9__["default"], _images_battleships_09_png__WEBPACK_IMPORTED_MODULE_10__["default"]]
}

const cruiser = {
    name: 'Cruiser',
    length: 3,
    fullImage: _images_battleships_22_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    images: [_images_battleships_10_png__WEBPACK_IMPORTED_MODULE_12__["default"], _images_battleships_11_png__WEBPACK_IMPORTED_MODULE_13__["default"], _images_battleships_12_png__WEBPACK_IMPORTED_MODULE_14__["default"]]
}

const submarine = {
    name: 'Submarine',
    length: 3,
    fullImage: _images_battleships_23_png__WEBPACK_IMPORTED_MODULE_15__["default"],
    images: [_images_battleships_13_png__WEBPACK_IMPORTED_MODULE_16__["default"], _images_battleships_14_png__WEBPACK_IMPORTED_MODULE_17__["default"], _images_battleships_15_png__WEBPACK_IMPORTED_MODULE_18__["default"]]
}

const destroyer = {
    name: 'Destroyer',
    length: 2,
    fullImage: _images_battleships_24_png__WEBPACK_IMPORTED_MODULE_19__["default"],
    images: [_images_battleships_18_png__WEBPACK_IMPORTED_MODULE_20__["default"], _images_battleships_19_png__WEBPACK_IMPORTED_MODULE_21__["default"]]
}

const ships = [
    carrier,
    battleship,
    cruiser,
    submarine,
    destroyer
]

const getShipImages = (shipName) => {
    const ship = ships.find((ship) => ship.name === shipName)
    return ship.images
}

const getExplosionImage = () => {
    return _images_explosion_png__WEBPACK_IMPORTED_MODULE_22__["default"]
}





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
/* harmony import */ var _lib_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/display */ "./src/lib/display.js");
/* harmony import */ var _lib_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/game */ "./src/lib/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.drawGrid)()
;(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.drawGrid)('computer')

const game = (0,_lib_game__WEBPACK_IMPORTED_MODULE_1__["default"])();
game.setupGame();
(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.updateGrid)('player', game.player1.getBoard())
;(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.updateEventListeners)('computer', game)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0Ev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RSxtRUFBVTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFjO0FBQzdCLGFBQWEsbUVBQVUsRUFBRSxtRUFBVTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsOERBQVM7QUFDcEI7O0FBTUM7Ozs7Ozs7O1VDckZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNJc0I7QUFDYztBQUNoQjs7QUFFcEIsc0RBQVE7QUFDUix1REFBUTs7QUFFUixhQUFhLHFEQUFXO0FBQ3hCO0FBQ0Esd0RBQVU7QUFDVixtRUFBb0Isa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTAxLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDIucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wMy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDUucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wNi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA3LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDgucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wOS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTEwLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTEucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xMi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTEzLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTQucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xNS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTE4LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTkucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0yMC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTIxLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMjIucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0yMy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTI0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvZXhwbG9zaW9uLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9nYW1lLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvc2hpcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9zaGlwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxubWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uYm9hcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgXG59XG5cbmgyLFxuLm51bWJlcnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5ib2FyZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMnB4O1xufVxuXG4uYm9hcmQtaW5uZXItd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogLjZyZW07XG59XG5cbi5jb2x1bW4tZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcbiAgICBnYXA6IDJweDtcbn1cblxuLnJvdy1kZXNjcmlwdGlvbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMnB4O1xufVxuXG4uZ3JpZC1jZWxse1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5ncmlkLWNlbGw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBvcGFjaXR5OiAwLjI7XG59XG5cbi5oaWRkZW57XG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDA7XG59XG5cbi5zaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWlzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uYWxlcnQtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uZGVsZXRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLjVyZW07XG4gICAgdG9wOiAuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmJvYXJkLWNvbnRhaW5lcixcbi5hbGVydC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYm9hcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgXFxufVxcblxcbmgyLFxcbi5udW1iZXJze1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmJvYXJkLWlubmVyLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjZyZW07XFxufVxcblxcbi5jb2x1bW4tZGVzY3JpcHRpb257XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLnJvdy1kZXNjcmlwdGlvbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uZ3JpZC1jZWxse1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uZ3JpZC1jZWxsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMCAwO1xcbn1cXG5cXG4uc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmFsZXJ0LWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uZGVsZXRle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAuNXJlbTtcXG4gICAgdG9wOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyLFxcbi5hbGVydC1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NzIxYmNmOWYxNGEzMDJhNmMzZGIyNGFiNDYxMmQxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmJhNTZiY2Y0MTZhMzQyZTQ2MjNhNmFmODc1MjU3ZDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ0ZmI5MWNjMjU5ZWQ4ODhlZTM2NjViNTBiMmJhNzg1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0Mzg0NDZmN2E4YmIzOWZlZDZlODQzM2NjN2NkZmU5My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDcwN2ExN2Y0M2E1ZTJkYmNmYzQ2ODUyNTFmYWFlMTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJiNDZjZDY4MmZiZGQ1ZWFiN2JlMjQwZmI4NjE0Yjg0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOTJmZjQwYmZlOWZlZGJlMmQwOGI4Zjg3ZDFhNTM0OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWIxZDEwNDY1ZjQxNGY1MDIzODQ4ZDNjZWQ1NTQzYjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY0MDQ1MzU1MjFlOWVhNTZhNjIxMmI4MWUxMDBiMTM5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNWUzYjllNWVmNzJlMWQxM2QxMDI3NzFjM2ZjMWEzMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWUyZDlhNWY4NzkzZWRkMTE0MmUxYzBlZWUzMzZmNDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5MjljMTdmNTAxMDY1YzQ3MWNmMmNhYjI4YTIzNzhkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwYjY5MTczOGJhNTZmYTVlZWI1MzFmYWRiNGJmYTMyOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGNmMjRiMDEwMDkxNmJiMjQwMTI0ZWIxOGY2OTdiMWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImExODNkNGM0MjM0MDFhNGNmZGQ3ZmQzMmIxYzM2NmQ1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2MmFjZDk3Yjk5YTkxNGE2NDU1MGZhYjcyNzkyMzFjZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDEyYjc3N2QxM2MxM2I4MGNlZDhjMzkyOTE2ZmZjZjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiN2IxNGRiM2RkYmE1M2VkM2M2ZTViZDFhZTcxMjI1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhYjllZjhlNWFkMjIwY2E4ZGVhYWQ0ZmYyNzBhNGRmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2EzZjI2MGI2ZDk0MjcxZDIyNDQyZTI4Mjk3OTMyZTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNiZjI2YmNjYTZlY2RhZWUwOTIwZjI3YjU3OTZhZWVmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyOTg4YmVhMTI4NTk2MDk3MGRjMTU1ZTU1Zjk3M2ZiYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTdkMTFlZDhhN2JkMDNiNGYxZTNiMDJmZDQwYzNhNmQucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBcbiAgICBnZXRTaGlwSW1hZ2VzLFxuICAgIGdldEV4cGxvc2lvbkltYWdlIFxufSBmcm9tIFwiLi9zaGlwc1wiXG5cbmNvbnN0IGNyZWF0ZUFsZXJ0ID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5YPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIGNvbnN0IGJ1dHRvbiA9IGFsZXJ0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSlcbiAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gJydcbiAgICB9KVxufVxuIFxuY29uc3QgY3JlYXRlUmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0JylcbiAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzZXQgR2FtZVwiXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKVxufVxuXG5jb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgIGNyZWF0ZUFsZXJ0KHdpbm5lcilcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNlbGwnKVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VBdHRhY2spXG4gICAgfSlcbiAgICBjcmVhdGVSZXNldEJ1dHRvbigpXG59XG5cbmNvbnN0IHVwZGF0ZUdyaWQgPSAodHlwZSA9ICdwbGF5ZXInLCBnYW1lQm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IHR5cGUgPT09ICdwbGF5ZXInID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyJylcbiAgICBjb25zdCB7IHNoaXBzLCBtaXNzZWRBdHRhY2tzIH0gPSBnYW1lQm9hcmQ7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBJbWFnZXMgPSBnZXRTaGlwSW1hZ2VzKHNoaXAubmFtZSlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3NoaXAuY29vcmRpbmF0ZXNbaV1bMF19XCJdW2RhdGEteT1cIiR7c2hpcC5jb29yZGluYXRlc1tpXVsxXX1cIl1gKVxuICAgICAgICAgICAgaWYoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NoaXBJbWFnZXNbaV19KWBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvYXJkKVxuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSAhPT0gJ3BsYXllcicpXG4gICAgICAgICAgICBpZih0eXBlICE9PSAncGxheWVyJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSAhPT0gJ3BsYXllcicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuIFxuXG4gICAgbWlzc2VkQXR0YWNrcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkaW5hdGVbMV19XCJdYClcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9KVxuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLmhpdHMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2Nvb3JkaW5hdGVbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRpbmF0ZVsxXX1cIl1gKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpXG4gICAgICAgICAgICBpZihzaGlwLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmNvbnN0IGRyYXdHcmlkID0gKHR5cGUgPSAncGxheWVyJykgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ3BsYXllcicgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjInKVxuICAgIGJvYXJkLmlubmVySFRNTCA9ICcnXG5cbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDEwMDsgaSsrKXtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jZWxsJylcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbClcblxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSAlIDEwKVxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgTWF0aC5mbG9vciggaSAvIDEwKSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VBdHRhY2soZXZlbnQpe1xuICAgIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBnYW1lSW5zdGFuY2UgPSBldmVudC50YXJnZXQuZ2FtZUluc3RhbmNlXG5cbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpKVxuICAgIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JykpXG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBhdHRhY2sgPSBnYW1lSW5zdGFuY2UuYXR0YWNrKFt4LHldKVxuICAgICAgICBpZihhdHRhY2sgPT09ICdoaXQnKXtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdZb3UgaGl0IGEgc2hpcCEnKVxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VBdHRhY2spXG4gICAgICAgIH1lbHNlIGlmKGF0dGFjayA9PT0gJ21pc3MnKXtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQXR0YWNrKVxuICAgICAgICAgICAgZ2FtZUluc3RhbmNlLmNoYW5nZVBsYXllcigpXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckF0dGFjayA9IGdhbWVJbnN0YW5jZS5jb21wdXRlckF0dGFjaygpXG4gICAgICAgICAgICBpZihjb21wdXRlckF0dGFjayA9PT0gJ21pc3MnKXtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbGVydCgnWW91IGJvdGggbWlzc2VkIScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGNvbXB1dGVyQXR0YWNrID09PSAnaGl0Jyl7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ1lvdSBtaXNzZWQgYnV0IHRoZSBjb21wdXRlciBoaXQhJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5jaGFuZ2VQbGF5ZXIoKVxuICAgICAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZUluc3RhbmNlLnBsYXllcjEuZ2V0Qm9hcmQoKSlcbiAgICAgICAgICAgIHVwZGF0ZUdyaWQoJ2NvbXB1dGVyJywgZ2FtZUluc3RhbmNlLnBsYXllcjIuZ2V0Qm9hcmQoKSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IGdhbWVJbnN0YW5jZS5nYW1lRW5kKClcblxuICAgICAgICBpZihnYW1lT3Zlcil7XG4gICAgICAgICAgICBlbmRHYW1lKGdhbWVPdmVyKVxuICAgICAgICAgICAgZ2FtZUluc3RhbmNlLnNldHVwR2FtZSgpXG4gICAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG5cbiAgICB9XG59XG5cbmNvbnN0IHVwZGF0ZUV2ZW50TGlzdGVuZXJzID0gKHR5cGUgPSAncGxheWVyJywgZ2FtZUluc3RhbmNlKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSB0eXBlID09PSAncGxheWVyJyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxJykgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMicpXG4gICAgY29uc3QgY2VsbHMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jZWxsJylcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpe1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VBdHRhY2spXG4gICAgICAgICAgICBjZWxsLmdhbWVJbnN0YW5jZSA9IGdhbWVJbnN0YW5jZVxuICAgICAgICB9XG5cbiAgICB9KVxufVxuXG5leHBvcnQge1xuICAgIGRyYXdHcmlkLFxuICAgIHVwZGF0ZUdyaWQsXG4gICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMsXG4gICAgY3JlYXRlQWxlcnRcbn0iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiXG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcFwiXG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiXG5cbmNvbnN0IGdhbWVGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSB7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IG51bGwsXG4gICAgICAgIGVuZW15Qm9hcmQ6IG51bGwsXG4gICAgICAgIHBsYXllcjE6IG51bGwsXG4gICAgICAgIHBsYXllcjI6IG51bGwsXG4gICAgICAgIGNoYW5nZVBsYXllcigpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCb2FyZCA9IHRoaXMuY3VycmVudFBsYXllci5nZXRCb2FyZCgpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucGxheWVyMSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMVxuICAgICAgICB9LFxuICAgICAgICByYW5kb21TaGlwUGxhY2VtZW50KGJvYXJkKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgICAgICAgICBzaGlwRmFjdG9yeSgnQ2FycmllcicsIDUpLCBcbiAgICAgICAgICAgICAgICBzaGlwRmFjdG9yeSgnQmF0dGxlc2hpcCcsIDQpLFxuICAgICAgICAgICAgICAgIHNoaXBGYWN0b3J5KCdDcnVpc2VyJywgMyksXG4gICAgICAgICAgICAgICAgc2hpcEZhY3RvcnkoJ1N1Ym1hcmluZScsIDMpLFxuICAgICAgICAgICAgICAgIHNoaXBGYWN0b3J5KCdEZXN0cm95ZXInLCAyKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJydcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3aGlsZSghdmFsaWRQbGFjZW1lbnQpe1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhdHRhY2soY29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBsYXllci5hdHRhY2sodGhpcy5lbmVteUJvYXJkLCBjb29yZGluYXRlcylcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZXJBdHRhY2soaGl0cyA9IDApe1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgaWYodGhpcy5lbmVteUJvYXJkLm1pc3NlZEF0dGFja3Muc29tZSgobWlzc2VkQXR0YWNrKSA9PiBtaXNzZWRBdHRhY2tbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIG1pc3NlZEF0dGFja1sxXSA9PT0gY29vcmRpbmF0ZXNbMV0pKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKClcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLmF0dGFjayhjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdHRhY2spXG4gICAgICAgICAgICAgICAgaWYoYXR0YWNrID09PSAnaGl0Jyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soaGl0cysxKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihoaXRzID09PSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGl0c1xuICAgICAgICB9LFxuICAgICAgICBzZXR1cEdhbWUoKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IHBsYXllcigpXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIoKVxuICAgICAgICAgICAgdGhpcy5yYW5kb21TaGlwUGxhY2VtZW50KHRoaXMucGxheWVyMS5nZXRCb2FyZCgpKVxuICAgICAgICAgICAgdGhpcy5yYW5kb21TaGlwUGxhY2VtZW50KHRoaXMucGxheWVyMi5nZXRCb2FyZCgpKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXIxXG4gICAgICAgICAgICB0aGlzLmVuZW15Qm9hcmQgPSB0aGlzLnBsYXllcjIuZ2V0Qm9hcmQoKVxuICAgICAgICB9LFxuICAgICAgICBnYW1lRW5kKCl7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjEuZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnUGxheWVyIHdpbnMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcGxheUdhbWUoKXtcbiAgICAgICAgICAgIHdoaWxlKCF0aGlzLmdhbWVFbmQoKSl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdhbWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUZhY3RvcnkiLCJjb25zdCBjaGVja0hpdCA9IChjb29yZGluYXRlcywgc2hpcHMpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlc1xuICAgIGxldCBoaXRTaGlwID0gbnVsbFxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBpZihjb29yZGluYXRlWzBdID09PSB4ICYmIGNvb3JkaW5hdGVbMV0gPT09IHkpXG4gICAgICAgICAgICBoaXRTaGlwID0gc2hpcFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIGhpdFNoaXBcbn1cblxuY29uc3QgZ2VuZXJhdGVTaGlwQ29vcmRpbmF0ZXMgPSAoc2hpcCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlc1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICBzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBzaGlwQ29vcmRpbmF0ZXMucHVzaChbeCArIGksIHldKSA6IHNoaXBDb29yZGluYXRlcy5wdXNoKFt4LCB5ICsgaV0pXG4gICAgfVxuICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNcbn1cblxuY29uc3QgY29vcmRpbmF0ZXNPbkJvYXJkID0gKHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBvbkJvYXJkID0gZmFsc2U7XG4gICAgb25Cb2FyZCA9IHNoaXBDb29yZGluYXRlcy5ldmVyeSgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbeCx5XSA9IGNvb3JkaW5hdGU7XG4gICAgICAgIHJldHVybiB4ID49IDAgJiYgeCA8PSA5ICYmIHkgPj0gMCAmJiB5IDw9IDlcbiAgICB9KVxuICAgIHJldHVybiBvbkJvYXJkXG59XG5cbmNvbnN0IGNvb3JkaW5hdGVzRG9Ob3RPdmVybGFwID0gKHNoaXBzLCBzaGlwQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBpZihzaGlwLmNvb3JkaW5hdGVzLnNvbWUoKGNvb3JkKSA9PiBjb29yZGluYXRlLmV2ZXJ5KCh2LCBpKSA9PiB2ID09PSBjb29yZFtpXSkpKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGNhbm5vdCBvdmVybGFwIHdpdGggb3RoZXIgc2hpcHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoc2hpcHMsIHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIGxldCB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2U7XG4gICAgdmFsaWRDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzT25Cb2FyZChzaGlwQ29vcmRpbmF0ZXMpXG4gICAgaWYoIXZhbGlkQ29vcmRpbmF0ZXMpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGNhbm5vdCBiZSBwbGFjZWQgb2ZmIHRoZSBib2FyZCcpXG4gICAgfVxuICAgIGNvb3JkaW5hdGVzRG9Ob3RPdmVybGFwKHNoaXBzLCBzaGlwQ29vcmRpbmF0ZXMpXG5cbiAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xufVxuXG5cbmNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IHtcbiAgICAgICAgc2hpcHM6IFtdLFxuICAgICAgICBtaXNzZWRBdHRhY2tzOiBbXSxcbiAgICAgICAgYWxsU2hpcHNTdW5rKCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBnZW5lcmF0ZVNoaXBDb29yZGluYXRlcyhzaGlwLCBjb29yZGluYXRlcylcbiAgICAgICAgICAgIHZhbGlkYXRlQ29vcmRpbmF0ZXModGhpcy5zaGlwcywgc2hpcC5jb29yZGluYXRlcylcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBIaXQgPSBjaGVja0hpdChjb29yZGluYXRlcywgdGhpcy5zaGlwcylcbiAgICAgICAgICAgIGlmKHNoaXBIaXQpe1xuICAgICAgICAgICAgICAgIHNoaXBIaXQuaGl0KGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHJldHVybiAnaGl0J1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZFxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQiLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJ1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBnYW1lQm9hcmQoKVxuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZFxuICAgIFxuICAgIGNvbnN0IGF0dGFjayA9IChlbmVteUJvYXJkLCBjb29yZGluYXRlcykgPT4ge1xuICAgICAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgIH1cbiAgICByZXR1cm4geyBnZXRCb2FyZCwgYXR0YWNrIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIGhpdChjb29yZGluYXRlKXtcbiAgICAgICAgICAgIGlmKHRoaXMuaGl0cy5sZW5ndGggPCB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5IiwiaW1wb3J0IGNhcnJpZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0yMC5wbmcnXG5pbXBvcnQgY2FycmllcjEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDEucG5nJ1xuaW1wb3J0IGNhcnJpZXIyIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTAyLnBuZydcbmltcG9ydCBjYXJyaWVyMyBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wMy5wbmcnXG5pbXBvcnQgY2FycmllcjQgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDQucG5nJ1xuaW1wb3J0IGNhcnJpZXI1IGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA1LnBuZydcblxuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0yMS5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcDEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDYucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXAyIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA3LnBuZydcbmltcG9ydCBiYXR0bGVzaGlwMyBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wOC5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcDQgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDkucG5nJ1xuXG5pbXBvcnQgY3J1aXNlckltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIyLnBuZydcbmltcG9ydCBjcnVpc2VyMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xMC5wbmcnXG5pbXBvcnQgY3J1aXNlcjIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTEucG5nJ1xuaW1wb3J0IGNydWlzZXIzIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTEyLnBuZydcblxuaW1wb3J0IHN1Ym1hcmluZUltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIzLnBuZydcbmltcG9ydCBzdWJtYXJpbmUxIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTEzLnBuZydcbmltcG9ydCBzdWJtYXJpbmUyIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE0LnBuZydcbmltcG9ydCBzdWJtYXJpbmUzIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE1LnBuZydcblxuaW1wb3J0IGRlc3Ryb3llckltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTI0LnBuZydcbmltcG9ydCBkZXN0cm95ZXIxIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE4LnBuZydcbmltcG9ydCBkZXN0cm95ZXIyIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTE5LnBuZydcblxuaW1wb3J0IGV4cGxvc2lvbiBmcm9tICcuL2ltYWdlcy9leHBsb3Npb24ucG5nJ1xuXG5jb25zdCBjYXJyaWVyID0ge1xuICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgZnVsbEltYWdlOiBjYXJyaWVySW1hZ2UsXG4gICAgaW1hZ2VzOiBbY2FycmllcjEsIGNhcnJpZXIyLCBjYXJyaWVyMywgY2FycmllcjQsIGNhcnJpZXI1XVxufVxuXG5jb25zdCBiYXR0bGVzaGlwID0ge1xuICAgIG5hbWU6ICdCYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gICAgZnVsbEltYWdlOiBiYXR0bGVzaGlwSW1hZ2UsXG4gICAgaW1hZ2VzOiBbYmF0dGxlc2hpcDEsIGJhdHRsZXNoaXAyLCBiYXR0bGVzaGlwMywgYmF0dGxlc2hpcDRdXG59XG5cbmNvbnN0IGNydWlzZXIgPSB7XG4gICAgbmFtZTogJ0NydWlzZXInLFxuICAgIGxlbmd0aDogMyxcbiAgICBmdWxsSW1hZ2U6IGNydWlzZXJJbWFnZSxcbiAgICBpbWFnZXM6IFtjcnVpc2VyMSwgY3J1aXNlcjIsIGNydWlzZXIzXVxufVxuXG5jb25zdCBzdWJtYXJpbmUgPSB7XG4gICAgbmFtZTogJ1N1Ym1hcmluZScsXG4gICAgbGVuZ3RoOiAzLFxuICAgIGZ1bGxJbWFnZTogc3VibWFyaW5lSW1hZ2UsXG4gICAgaW1hZ2VzOiBbc3VibWFyaW5lMSwgc3VibWFyaW5lMiwgc3VibWFyaW5lM11cbn1cblxuY29uc3QgZGVzdHJveWVyID0ge1xuICAgIG5hbWU6ICdEZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMixcbiAgICBmdWxsSW1hZ2U6IGRlc3Ryb3llckltYWdlLFxuICAgIGltYWdlczogW2Rlc3Ryb3llcjEsIGRlc3Ryb3llcjJdXG59XG5cbmNvbnN0IHNoaXBzID0gW1xuICAgIGNhcnJpZXIsXG4gICAgYmF0dGxlc2hpcCxcbiAgICBjcnVpc2VyLFxuICAgIHN1Ym1hcmluZSxcbiAgICBkZXN0cm95ZXJcbl1cblxuY29uc3QgZ2V0U2hpcEltYWdlcyA9IChzaGlwTmFtZSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IHNoaXBOYW1lKVxuICAgIHJldHVybiBzaGlwLmltYWdlc1xufVxuXG5jb25zdCBnZXRFeHBsb3Npb25JbWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZXhwbG9zaW9uXG59XG5cbmV4cG9ydCB7XG4gICAgc2hpcHMsXG4gICAgZ2V0U2hpcEltYWdlcyxcbiAgICBnZXRFeHBsb3Npb25JbWFnZVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgXG4gICAgZHJhd0dyaWQsIFxuICAgIHVwZGF0ZUdyaWQsXG4gICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnNcbn0gZnJvbSAnLi9saWIvZGlzcGxheSdcbmltcG9ydCBnYW1lRmFjdG9yeSBmcm9tICcuL2xpYi9nYW1lJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuZHJhd0dyaWQoKVxuZHJhd0dyaWQoJ2NvbXB1dGVyJylcblxuY29uc3QgZ2FtZSA9IGdhbWVGYWN0b3J5KCk7XG5nYW1lLnNldHVwR2FtZSgpO1xudXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZS5wbGF5ZXIxLmdldEJvYXJkKCkpXG51cGRhdGVFdmVudExpc3RlbmVycygnY29tcHV0ZXInLCBnYW1lKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==