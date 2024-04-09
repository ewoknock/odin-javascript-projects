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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;AACtB;;;AAGA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;AAC3B","sourcesContent":["body{\n    background-color: lightgrey;\n}\n\nmain{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.boards{\n    display: flex;\n    justify-content: space-around;\n    \n}\n\nh2,\n.numbers{\n    text-align: center;\n}\n\n.board-container{\n    padding: 1rem;\n}\n\n.board{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.board-inner-wrapper{\n    display: flex;\n    gap: .6rem;\n}\n\n.column-description{\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    gap: 2px;\n}\n\n.row-description{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.grid-cell{\n    height: 20px;\n    width: 20px;\n    border: 1px solid black;\n    background-size: contain;\n}\n\n.grid-cell:hover{\n    background-color: grey;\n    opacity: 0.2;\n}\n\n.ship{\n    background-color: blue;\n}\n\n.hit{\n    background-color: red;\n}\n\n.miss{\n    background-color: grey;\n}\n\n.alert-container{\n    position: relative;\n    margin: 2rem auto;\n    width: 60%;\n    text-align: center;\n}\n\n\n.delete{\n    position: absolute;\n    right: .5rem;\n    top: .5rem;\n    border: none;\n    border-radius: 1rem;\n}\n\n.board-container,\n.alert-container{\n    background-color: white;\n}\n"],"sourceRoot":""}]);
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

    if(type === 'player'){
        ships.forEach((ship) => {
            const shipImages = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.getShipImages)(ship.name)
            for(let i = 0; i < ship.length; i++){
                const cell = board.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`)
                if(ship.orientation === 'vertical'){
                    cell.style.transform = 'rotate(90deg)'
                }
                cell.style.backgroundImage = `url(${shipImages[i]})`
            }
        })
    }

    missedAttacks.forEach((coordinate) => {
        const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
        cell.classList.add('miss')
    })

    ships.forEach((ship) => {
        ship.hits.forEach((coordinate) => {
            const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
            cell.classList.add("hit")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLCtCQUErQixrQ0FBa0MsR0FBRyxTQUFTLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsWUFBWSxvQkFBb0Isb0NBQW9DLFNBQVMsa0JBQWtCLHlCQUF5QixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxXQUFXLG9CQUFvQiwwQ0FBMEMsNkNBQTZDLGVBQWUsR0FBRyx5QkFBeUIsb0JBQW9CLGlCQUFpQixHQUFHLHdCQUF3QixvQkFBb0IsNkNBQTZDLGVBQWUsR0FBRyxxQkFBcUIsb0JBQW9CLDBDQUEwQyxlQUFlLEdBQUcsZUFBZSxtQkFBbUIsa0JBQWtCLDhCQUE4QiwrQkFBK0IsR0FBRyxxQkFBcUIsNkJBQTZCLG1CQUFtQixHQUFHLFVBQVUsNkJBQTZCLEdBQUcsU0FBUyw0QkFBNEIsR0FBRyxVQUFVLDZCQUE2QixHQUFHLHFCQUFxQix5QkFBeUIsd0JBQXdCLGlCQUFpQix5QkFBeUIsR0FBRyxjQUFjLHlCQUF5QixtQkFBbUIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsR0FBRyx3Q0FBd0MsOEJBQThCLEdBQUcscUJBQXFCO0FBQ25pRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3BHMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxx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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsOERBQVM7QUFDcEI7O0FBTUM7Ozs7Ozs7O1VDckZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNJc0I7QUFDYztBQUNoQjs7QUFFcEIsc0RBQVE7QUFDUix1REFBUTs7QUFFUixhQUFhLHFEQUFXO0FBQ3hCO0FBQ0Esd0RBQVU7QUFDVixtRUFBb0Isa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTAxLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDIucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wMy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDUucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wNi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA3LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDgucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wOS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTEwLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTEucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xMi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTEzLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTQucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xNS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTE4LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTkucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0yMC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTIxLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMjIucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0yMy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTI0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvZXhwbG9zaW9uLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9nYW1lLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvc2hpcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9zaGlwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxubWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uYm9hcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgXG59XG5cbmgyLFxuLm51bWJlcnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5ib2FyZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMnB4O1xufVxuXG4uYm9hcmQtaW5uZXItd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogLjZyZW07XG59XG5cbi5jb2x1bW4tZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcbiAgICBnYXA6IDJweDtcbn1cblxuLnJvdy1kZXNjcmlwdGlvbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMnB4O1xufVxuXG4uZ3JpZC1jZWxse1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5ncmlkLWNlbGw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBvcGFjaXR5OiAwLjI7XG59XG5cbi5zaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWlzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uYWxlcnQtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uZGVsZXRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLjVyZW07XG4gICAgdG9wOiAuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmJvYXJkLWNvbnRhaW5lcixcbi5hbGVydC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0FBRWpDOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYm9hcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgXFxufVxcblxcbmgyLFxcbi5udW1iZXJze1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmJvYXJkLWlubmVyLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjZyZW07XFxufVxcblxcbi5jb2x1bW4tZGVzY3JpcHRpb257XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLnJvdy1kZXNjcmlwdGlvbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uZ3JpZC1jZWxse1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uZ3JpZC1jZWxsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYWxlcnQtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5kZWxldGV7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC41cmVtO1xcbiAgICB0b3A6IC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIsXFxuLmFsZXJ0LWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc3MjFiY2Y5ZjE0YTMwMmE2YzNkYjI0YWI0NjEyZDEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YmE1NmJjZjQxNmEzNDJlNDYyM2E2YWY4NzUyNTdkMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDRmYjkxY2MyNTllZDg4OGVlMzY2NWI1MGIyYmE3ODUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQzODQ0NmY3YThiYjM5ZmVkNmU4NDMzY2M3Y2RmZTkzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNzA3YTE3ZjQzYTVlMmRiY2ZjNDY4NTI1MWZhYWUxOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmI0NmNkNjgyZmJkZDVlYWI3YmUyNDBmYjg2MTRiODQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE5MmZmNDBiZmU5ZmVkYmUyZDA4YjhmODdkMWE1MzQ5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYjFkMTA0NjVmNDE0ZjUwMjM4NDhkM2NlZDU1NDNiMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjQwNDUzNTUyMWU5ZWE1NmE2MjEyYjgxZTEwMGIxMzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ1ZTNiOWU1ZWY3MmUxZDEzZDEwMjc3MWMzZmMxYTMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlZTJkOWE1Zjg3OTNlZGQxMTQyZTFjMGVlZTMzNmY0Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjkyOWMxN2Y1MDEwNjVjNDcxY2YyY2FiMjhhMjM3OGQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBiNjkxNzM4YmE1NmZhNWVlYjUzMWZhZGI0YmZhMzI4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4Y2YyNGIwMTAwOTE2YmIyNDAxMjRlYjE4ZjY5N2IxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTE4M2Q0YzQyMzQwMWE0Y2ZkZDdmZDMyYjFjMzY2ZDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYyYWNkOTdiOTlhOTE0YTY0NTUwZmFiNzI3OTIzMWNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0MTJiNzc3ZDEzYzEzYjgwY2VkOGMzOTI5MTZmZmNmOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmI3YjE0ZGIzZGRiYTUzZWQzYzZlNWJkMWFlNzEyMjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFiOWVmOGU1YWQyMjBjYThkZWFhZDRmZjI3MGE0ZGY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTNmMjYwYjZkOTQyNzFkMjI0NDJlMjgyOTc5MzJlNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2JmMjZiY2NhNmVjZGFlZTA5MjBmMjdiNTc5NmFlZWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI5ODhiZWExMjg1OTYwOTcwZGMxNTVlNTVmOTczZmJhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5N2QxMWVkOGE3YmQwM2I0ZjFlM2IwMmZkNDBjM2E2ZC5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFxuICAgIGdldFNoaXBJbWFnZXMsXG4gICAgZ2V0RXhwbG9zaW9uSW1hZ2UgXG59IGZyb20gXCIuL3NoaXBzXCJcblxuY29uc3QgY3JlYXRlQWxlcnQgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydCcpXG4gICAgYWxlcnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQtbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWVzc2FnZVwiPiR7bWVzc2FnZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgY29uc3QgYnV0dG9uID0gYWxlcnQucXVlcnlTZWxlY3RvcignYnV0dG9uJylcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KVxuICAgICAgICBhbGVydC5pbm5lckhUTUwgPSAnJ1xuICAgIH0pXG59XG4gXG5jb25zdCBjcmVhdGVSZXNldEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVzZXQnKVxuICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXNldCBHYW1lXCJcbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydCcpXG4gICAgYWxlcnQuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pXG59XG5cbmNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gICAgY3JlYXRlQWxlcnQod2lubmVyKVxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY2VsbCcpXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUF0dGFjaylcbiAgICB9KVxuICAgIGNyZWF0ZVJlc2V0QnV0dG9uKClcbn1cblxuY29uc3QgdXBkYXRlR3JpZCA9ICh0eXBlID0gJ3BsYXllcicsIGdhbWVCb2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ3BsYXllcicgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjInKVxuICAgIGNvbnN0IHsgc2hpcHMsIG1pc3NlZEF0dGFja3MgfSA9IGdhbWVCb2FyZDtcblxuICAgIGlmKHR5cGUgPT09ICdwbGF5ZXInKXtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcEltYWdlcyA9IGdldFNoaXBJbWFnZXMoc2hpcC5uYW1lKVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtzaGlwLmNvb3JkaW5hdGVzW2ldWzBdfVwiXVtkYXRhLXk9XCIke3NoaXAuY29vcmRpbmF0ZXNbaV1bMV19XCJdYClcbiAgICAgICAgICAgICAgICBpZihzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2hpcEltYWdlc1tpXX0pYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1pc3NlZEF0dGFja3MuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRpbmF0ZVswXX1cIl1bZGF0YS15PVwiJHtjb29yZGluYXRlWzFdfVwiXWApXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgfSlcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5oaXRzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkaW5hdGVbMV19XCJdYClcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5jb25zdCBkcmF3R3JpZCA9ICh0eXBlID0gJ3BsYXllcicpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IHR5cGUgPT09ICdwbGF5ZXInID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyJylcbiAgICBib2FyZC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZm9yKGxldCBpID0gMCA7IGkgPCAxMDA7IGkrKyl7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpXG5cbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGkgJSAxMClcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIE1hdGguZmxvb3IoIGkgLyAxMCkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQXR0YWNrKGV2ZW50KXtcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgZ2FtZUluc3RhbmNlID0gZXZlbnQudGFyZ2V0LmdhbWVJbnN0YW5jZVxuXG4gICAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSlcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpKVxuICAgIHRyeXtcbiAgICAgICAgY29uc3QgYXR0YWNrID0gZ2FtZUluc3RhbmNlLmF0dGFjayhbeCx5XSlcbiAgICAgICAgaWYoYXR0YWNrID09PSAnaGl0Jyl7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnWW91IGhpdCBhIHNoaXAhJylcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQXR0YWNrKVxuICAgICAgICB9ZWxzZSBpZihhdHRhY2sgPT09ICdtaXNzJyl7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUF0dGFjaylcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5jaGFuZ2VQbGF5ZXIoKVxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBnYW1lSW5zdGFuY2UuY29tcHV0ZXJBdHRhY2soKVxuICAgICAgICAgICAgaWYoY29tcHV0ZXJBdHRhY2sgPT09ICdtaXNzJyl7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ1lvdSBib3RoIG1pc3NlZCEnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjb21wdXRlckF0dGFjayA9PT0gJ2hpdCcpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdZb3UgbWlzc2VkIGJ1dCB0aGUgY29tcHV0ZXIgaGl0IScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UuY2hhbmdlUGxheWVyKClcbiAgICAgICAgICAgIHVwZGF0ZUdyaWQoJ3BsYXllcicsIGdhbWVJbnN0YW5jZS5wbGF5ZXIxLmdldEJvYXJkKCkpXG4gICAgICAgICAgICB1cGRhdGVHcmlkKCdjb21wdXRlcicsIGdhbWVJbnN0YW5jZS5wbGF5ZXIyLmdldEJvYXJkKCkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2FtZU92ZXIgPSBnYW1lSW5zdGFuY2UuZ2FtZUVuZCgpXG5cbiAgICAgICAgaWYoZ2FtZU92ZXIpe1xuICAgICAgICAgICAgZW5kR2FtZShnYW1lT3ZlcilcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5zZXR1cEdhbWUoKVxuICAgICAgICB9XG4gICAgfWNhdGNoKGUpe1xuXG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVFdmVudExpc3RlbmVycyA9ICh0eXBlID0gJ3BsYXllcicsIGdhbWVJbnN0YW5jZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ3BsYXllcicgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjInKVxuICAgIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY2VsbCcpXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZighY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpICYmICFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKXtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQXR0YWNrKVxuICAgICAgICAgICAgY2VsbC5nYW1lSW5zdGFuY2UgPSBnYW1lSW5zdGFuY2VcbiAgICAgICAgfVxuXG4gICAgfSlcbn1cblxuZXhwb3J0IHtcbiAgICBkcmF3R3JpZCxcbiAgICB1cGRhdGVHcmlkLFxuICAgIHVwZGF0ZUV2ZW50TGlzdGVuZXJzLFxuICAgIGNyZWF0ZUFsZXJ0XG59IiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBcIlxuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIlxuXG5jb25zdCBnYW1lRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0ge1xuICAgICAgICBjdXJyZW50UGxheWVyOiBudWxsLFxuICAgICAgICBlbmVteUJvYXJkOiBudWxsLFxuICAgICAgICBwbGF5ZXIxOiBudWxsLFxuICAgICAgICBwbGF5ZXIyOiBudWxsLFxuICAgICAgICBjaGFuZ2VQbGF5ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15Qm9hcmQgPSB0aGlzLmN1cnJlbnRQbGF5ZXIuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5jdXJyZW50UGxheWVyID09PSB0aGlzLnBsYXllcjEgPyB0aGlzLnBsYXllcjIgOiB0aGlzLnBsYXllcjFcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZG9tU2hpcFBsYWNlbWVudChib2FyZCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgICAgICAgICAgc2hpcEZhY3RvcnkoJ0NhcnJpZXInLCA1KSwgXG4gICAgICAgICAgICAgICAgc2hpcEZhY3RvcnkoJ0JhdHRsZXNoaXAnLCA0KSxcbiAgICAgICAgICAgICAgICBzaGlwRmFjdG9yeSgnQ3J1aXNlcicsIDMpLFxuICAgICAgICAgICAgICAgIHNoaXBGYWN0b3J5KCdTdWJtYXJpbmUnLCAzKSxcbiAgICAgICAgICAgICAgICBzaGlwRmFjdG9yeSgnRGVzdHJveWVyJywgMilcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9ICcnXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2hpbGUoIXZhbGlkUGxhY2VtZW50KXtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRQbGFjZW1lbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRQbGFjZW1lbnQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYXR0YWNrKGNvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQbGF5ZXIuYXR0YWNrKHRoaXMuZW5lbXlCb2FyZCwgY29vcmRpbmF0ZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVyQXR0YWNrKGhpdHMgPSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlCb2FyZC5taXNzZWRBdHRhY2tzLnNvbWUoKG1pc3NlZEF0dGFjaykgPT4gbWlzc2VkQXR0YWNrWzBdID09PSBjb29yZGluYXRlc1swXSAmJiBtaXNzZWRBdHRhY2tbMV0gPT09IGNvb3JkaW5hdGVzWzFdKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlckF0dGFjaygpXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrID0gdGhpcy5hdHRhY2soY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0YWNrKVxuICAgICAgICAgICAgICAgIGlmKGF0dGFjayA9PT0gJ2hpdCcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKGhpdHMrMSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaGl0cyA9PT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpdHNcbiAgICAgICAgfSxcbiAgICAgICAgc2V0dXBHYW1lKCl7XG4gICAgICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIoKVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyKClcbiAgICAgICAgICAgIHRoaXMucmFuZG9tU2hpcFBsYWNlbWVudCh0aGlzLnBsYXllcjEuZ2V0Qm9hcmQoKSlcbiAgICAgICAgICAgIHRoaXMucmFuZG9tU2hpcFBsYWNlbWVudCh0aGlzLnBsYXllcjIuZ2V0Qm9hcmQoKSlcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyMVxuICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkID0gdGhpcy5wbGF5ZXIyLmdldEJvYXJkKClcbiAgICAgICAgfSxcbiAgICAgICAgZ2FtZUVuZCgpe1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIxLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5nZXRCb2FyZCgpLmFsbFNoaXBzU3VuaygpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1BsYXllciB3aW5zJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXlHYW1lKCl7XG4gICAgICAgICAgICB3aGlsZSghdGhpcy5nYW1lRW5kKCkpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVGYWN0b3J5IiwiY29uc3QgY2hlY2tIaXQgPSAoY29vcmRpbmF0ZXMsIHNoaXBzKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXNcbiAgICBsZXQgaGl0U2hpcCA9IG51bGxcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYoY29vcmRpbmF0ZVswXSA9PT0geCAmJiBjb29yZGluYXRlWzFdID09PSB5KVxuICAgICAgICAgICAgaGl0U2hpcCA9IHNoaXBcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBoaXRTaGlwXG59XG5cbmNvbnN0IGdlbmVyYXRlU2hpcENvb3JkaW5hdGVzID0gKHNoaXAsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXNcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc2hpcENvb3JkaW5hdGVzLnB1c2goW3ggKyBpLCB5XSkgOiBzaGlwQ29vcmRpbmF0ZXMucHVzaChbeCwgeSArIGldKVxuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzXG59XG5cbmNvbnN0IGNvb3JkaW5hdGVzT25Cb2FyZCA9IChzaGlwQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgb25Cb2FyZCA9IGZhbHNlO1xuICAgIG9uQm9hcmQgPSBzaGlwQ29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3gseV0gPSBjb29yZGluYXRlO1xuICAgICAgICByZXR1cm4geCA+PSAwICYmIHggPD0gOSAmJiB5ID49IDAgJiYgeSA8PSA5XG4gICAgfSlcbiAgICByZXR1cm4gb25Cb2FyZFxufVxuXG5jb25zdCBjb29yZGluYXRlc0RvTm90T3ZlcmxhcCA9IChzaGlwcywgc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYoc2hpcC5jb29yZGluYXRlcy5zb21lKChjb29yZCkgPT4gY29vcmRpbmF0ZS5ldmVyeSgodiwgaSkgPT4gdiA9PT0gY29vcmRbaV0pKSl7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBjYW5ub3Qgb3ZlcmxhcCB3aXRoIG90aGVyIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCB2YWxpZGF0ZUNvb3JkaW5hdGVzID0gKHNoaXBzLCBzaGlwQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlO1xuICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc09uQm9hcmQoc2hpcENvb3JkaW5hdGVzKVxuICAgIGlmKCF2YWxpZENvb3JkaW5hdGVzKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBjYW5ub3QgYmUgcGxhY2VkIG9mZiB0aGUgYm9hcmQnKVxuICAgIH1cbiAgICBjb29yZGluYXRlc0RvTm90T3ZlcmxhcChzaGlwcywgc2hpcENvb3JkaW5hdGVzKVxuXG4gICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcbn1cblxuXG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSB7XG4gICAgICAgIHNoaXBzOiBbXSxcbiAgICAgICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgICAgIGFsbFNoaXBzU3Vuaygpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcyl7XG4gICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gZ2VuZXJhdGVTaGlwQ29vcmRpbmF0ZXMoc2hpcCwgY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICB2YWxpZGF0ZUNvb3JkaW5hdGVzKHRoaXMuc2hpcHMsIHNoaXAuY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyl7XG4gICAgICAgICAgICBjb25zdCBzaGlwSGl0ID0gY2hlY2tIaXQoY29vcmRpbmF0ZXMsIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICBpZihzaGlwSGl0KXtcbiAgICAgICAgICAgICAgICBzaGlwSGl0LmhpdChjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCdcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCdcblxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZ2FtZUJvYXJkKClcblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmRcbiAgICBcbiAgICBjb25zdCBhdHRhY2sgPSAoZW5lbXlCb2FyZCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcylcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Qm9hcmQsIGF0dGFjayB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllciIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0czogW10sXG4gICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBoaXQoY29vcmRpbmF0ZSl7XG4gICAgICAgICAgICBpZih0aGlzLmhpdHMubGVuZ3RoIDwgdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0cy5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2hpcFxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeSIsImltcG9ydCBjYXJyaWVySW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjAucG5nJ1xuaW1wb3J0IGNhcnJpZXIxIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTAxLnBuZydcbmltcG9ydCBjYXJyaWVyMiBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wMi5wbmcnXG5pbXBvcnQgY2FycmllcjMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDMucG5nJ1xuaW1wb3J0IGNhcnJpZXI0IGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA0LnBuZydcbmltcG9ydCBjYXJyaWVyNSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wNS5wbmcnXG5cbmltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjEucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXAxIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA2LnBuZydcbmltcG9ydCBiYXR0bGVzaGlwMiBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wNy5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcDMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDgucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXA0IGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA5LnBuZydcblxuaW1wb3J0IGNydWlzZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0yMi5wbmcnXG5pbXBvcnQgY3J1aXNlcjEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTAucG5nJ1xuaW1wb3J0IGNydWlzZXIyIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTExLnBuZydcbmltcG9ydCBjcnVpc2VyMyBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xMi5wbmcnXG5cbmltcG9ydCBzdWJtYXJpbmVJbWFnZSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0yMy5wbmcnXG5pbXBvcnQgc3VibWFyaW5lMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xMy5wbmcnXG5pbXBvcnQgc3VibWFyaW5lMiBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xNC5wbmcnXG5pbXBvcnQgc3VibWFyaW5lMyBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xNS5wbmcnXG5cbmltcG9ydCBkZXN0cm95ZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0yNC5wbmcnXG5pbXBvcnQgZGVzdHJveWVyMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xOC5wbmcnXG5pbXBvcnQgZGVzdHJveWVyMiBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xOS5wbmcnXG5cbmltcG9ydCBleHBsb3Npb24gZnJvbSAnLi9pbWFnZXMvZXhwbG9zaW9uLnBuZydcblxuY29uc3QgY2FycmllciA9IHtcbiAgICBuYW1lOiAnQ2FycmllcicsXG4gICAgbGVuZ3RoOiA1LFxuICAgIGZ1bGxJbWFnZTogY2FycmllckltYWdlLFxuICAgIGltYWdlczogW2NhcnJpZXIxLCBjYXJyaWVyMiwgY2FycmllcjMsIGNhcnJpZXI0LCBjYXJyaWVyNV1cbn1cblxuY29uc3QgYmF0dGxlc2hpcCA9IHtcbiAgICBuYW1lOiAnQmF0dGxlc2hpcCcsXG4gICAgbGVuZ3RoOiA0LFxuICAgIGZ1bGxJbWFnZTogYmF0dGxlc2hpcEltYWdlLFxuICAgIGltYWdlczogW2JhdHRsZXNoaXAxLCBiYXR0bGVzaGlwMiwgYmF0dGxlc2hpcDMsIGJhdHRsZXNoaXA0XVxufVxuXG5jb25zdCBjcnVpc2VyID0ge1xuICAgIG5hbWU6ICdDcnVpc2VyJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgZnVsbEltYWdlOiBjcnVpc2VySW1hZ2UsXG4gICAgaW1hZ2VzOiBbY3J1aXNlcjEsIGNydWlzZXIyLCBjcnVpc2VyM11cbn1cblxuY29uc3Qgc3VibWFyaW5lID0ge1xuICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBmdWxsSW1hZ2U6IHN1Ym1hcmluZUltYWdlLFxuICAgIGltYWdlczogW3N1Ym1hcmluZTEsIHN1Ym1hcmluZTIsIHN1Ym1hcmluZTNdXG59XG5cbmNvbnN0IGRlc3Ryb3llciA9IHtcbiAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgZnVsbEltYWdlOiBkZXN0cm95ZXJJbWFnZSxcbiAgICBpbWFnZXM6IFtkZXN0cm95ZXIxLCBkZXN0cm95ZXIyXVxufVxuXG5jb25zdCBzaGlwcyA9IFtcbiAgICBjYXJyaWVyLFxuICAgIGJhdHRsZXNoaXAsXG4gICAgY3J1aXNlcixcbiAgICBzdWJtYXJpbmUsXG4gICAgZGVzdHJveWVyXG5dXG5cbmNvbnN0IGdldFNoaXBJbWFnZXMgPSAoc2hpcE5hbWUpID0+IHtcbiAgICBjb25zdCBzaGlwID0gc2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSlcbiAgICByZXR1cm4gc2hpcC5pbWFnZXNcbn1cblxuY29uc3QgZ2V0RXhwbG9zaW9uSW1hZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGV4cGxvc2lvblxufVxuXG5leHBvcnQge1xuICAgIHNoaXBzLFxuICAgIGdldFNoaXBJbWFnZXMsXG4gICAgZ2V0RXhwbG9zaW9uSW1hZ2Vcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFxuICAgIGRyYXdHcmlkLCBcbiAgICB1cGRhdGVHcmlkLFxuICAgIHVwZGF0ZUV2ZW50TGlzdGVuZXJzXG59IGZyb20gJy4vbGliL2Rpc3BsYXknXG5pbXBvcnQgZ2FtZUZhY3RvcnkgZnJvbSAnLi9saWIvZ2FtZSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmRyYXdHcmlkKClcbmRyYXdHcmlkKCdjb21wdXRlcicpXG5cbmNvbnN0IGdhbWUgPSBnYW1lRmFjdG9yeSgpO1xuZ2FtZS5zZXR1cEdhbWUoKTtcbnVwZGF0ZUdyaWQoJ3BsYXllcicsIGdhbWUucGxheWVyMS5nZXRCb2FyZCgpKVxudXBkYXRlRXZlbnRMaXN0ZW5lcnMoJ2NvbXB1dGVyJywgZ2FtZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=