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
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --box-shadow: 0 .5em 1em .5em rgba(10,10,10,.1);

}

main{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.boards{
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 0 5rem;
}

h2,
.numbers{
    text-align: center;
}

.board-container{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex-grow: 1;
    min-width: 300px;
    max-width: 500px;
}

.board{
    flex-grow: 1;
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
    gap: 2px;
    box-shadow: var(--box-shadow)
}

.board-wrapper{
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
}

.board-inner-wrapper{
    display: flex;
    gap: .6rem;
    aspect-ratio: 1;
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
    border: 1px solid black;
    background-size: contain;
}

.grid-cell:hover{
    background-color: grey;
    opacity: 0.3;
}

.hidden{
    background-size: 0 0;
}

.hit{
    background-color: red;
}

.miss{
    background-color: grey;
}

.alert-container{
    position: relative;
    margin: 1rem auto;
    padding: 1rem;
    width: 30rem;
    text-align: center;
    box-shadow: var(--box-shadow)
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

@media(width < 800px){
    main{
        gap: 0;
    }
    .boards{
        flex-direction: column;
        gap: 0;
        padding: 0;
        align-items: center;
    }

    .board-container{
        max-width: 500px;
        width: 80%;
    }

    .alert-container{
        width: 70%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,+CAA+C;;AAEnD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;IACR;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,QAAQ;AACZ;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB;AACJ;;;AAGA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI;QACI,MAAM;IACV;IACA;QACI,sBAAsB;QACtB,MAAM;QACN,UAAU;QACV,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;QAChB,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ","sourcesContent":[":root{\n    --box-shadow: 0 .5em 1em .5em rgba(10,10,10,.1);\n\n}\n\nmain{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.boards{\n    display: flex;\n    justify-content: center;\n    gap: 4rem;\n    padding: 0 5rem;\n}\n\nh2,\n.numbers{\n    text-align: center;\n}\n\n.board-container{\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    flex-grow: 1;\n    min-width: 300px;\n    max-width: 500px;\n}\n\n.board{\n    flex-grow: 1;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    box-shadow: var(--box-shadow)\n}\n\n.board-wrapper{\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 1;\n    flex-grow: 1;\n}\n\n.board-inner-wrapper{\n    display: flex;\n    gap: .6rem;\n    aspect-ratio: 1;\n}\n\n.column-description{\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    gap: 2px;\n}\n\n.row-description{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.grid-cell{\n    border: 1px solid black;\n    background-size: contain;\n}\n\n.grid-cell:hover{\n    background-color: grey;\n    opacity: 0.3;\n}\n\n.hidden{\n    background-size: 0 0;\n}\n\n.hit{\n    background-color: red;\n}\n\n.miss{\n    background-color: grey;\n}\n\n.alert-container{\n    position: relative;\n    margin: 1rem auto;\n    padding: 1rem;\n    width: 30rem;\n    text-align: center;\n    box-shadow: var(--box-shadow)\n}\n\n\n.delete{\n    position: absolute;\n    right: .5rem;\n    top: .5rem;\n    border: none;\n    border-radius: 1rem;\n}\n\n.board-container,\n.alert-container{\n    background-color: white;\n}\n\n@media(width < 800px){\n    main{\n        gap: 0;\n    }\n    .boards{\n        flex-direction: column;\n        gap: 0;\n        padding: 0;\n        align-items: center;\n    }\n\n    .board-container{\n        max-width: 500px;\n        width: 80%;\n    }\n\n    .alert-container{\n        width: 70%;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   placeShips: () => (/* binding */ placeShips),
/* harmony export */   updateEventListeners: () => (/* binding */ updateEventListeners),
/* harmony export */   updateGrid: () => (/* binding */ updateGrid)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/lib/ships.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/lib/ship.js");



const getCoordinatesFromCell = (cell) => {
    const x = parseInt(cell.getAttribute('data-x'))
    const y = parseInt(cell.getAttribute('data-y'))

    return {x, y}
}

const createAlert = (message) => {
    let alert = document.getElementById('alert')
    alert.innerHTML = `
        <div class="alert-message">
            <p class="message">${message}</p>
        </div>
        `
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
        const shipImages = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.name)
        for(let i = 0; i < ship.length; i++){
            const cell = board.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`)
            cell.classList.add('ship')
            if(ship.orientation === 'vertical'){
                cell.style.transform = 'rotate(90deg)'
            }
            cell.style.backgroundImage = `url(${shipImages[i]})`
            if(type !== 'player'){
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

    const {x, y} = getCoordinatesFromCell(cell)
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
        }
        const gameOver = gameInstance.gameEnd()
        updateGrid('player', gameInstance.player1.getBoard())
        updateGrid('computer', gameInstance.player2.getBoard())
        if(gameOver){
            endGame(gameOver)
        }
    }catch(e){

    }
}

const updateEventListeners = (type = 'player', gameInstance) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const cells = board.querySelectorAll('.grid-cell')
    cells.forEach((cell) => {
        if(type === 'player'){
            cell.removeEventListener('mouseover', setShipImage)
            cell.removeEventListener('mouseout', removeShipImage)
        }else{
            if(!cell.classList.contains('hit') && !cell.classList.contains('miss')){
                cell.addEventListener('click', makeAttack)
                cell.gameInstance = gameInstance
            }
        }
    })
}

const stopPlacing = () => {
    const cells = document.getElementById('player1').querySelectorAll('.grid-cell')

    cells.forEach((cell) => {
        if(!cell.classList.contains('ship'))
        cell.style.backgroundImage = ''

        cell.replaceWith(cell.cloneNode(true))
    })
}

function setShipImage(event){
    const cell = event.target
    const { orientation, shipImages, shipLength } = cell

    const {x, y} = getCoordinatesFromCell(cell)
    for(let i = 0; i < shipLength; i++){
        const cellToChange = orientation === 'horizontal' 
            ? document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`)
            : document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`)
        if(cellToChange){
            if(!cellToChange.classList.contains('ship')){
                cellToChange.style.transform = orientation === 'horizontal' ? 'rotate(0deg)' : 'rotate(90deg)'
                cellToChange.style.backgroundImage = `url(${shipImages[i]})`
            }
        }
    }  
}

function removeShipImage(event){
    const cell = event.target
    const {orientation, shipLength} = cell
    const {x, y} = getCoordinatesFromCell(cell)
    for(let i = 0; i < shipLength; i++){
        const cellToChange = orientation === 'horizontal' 
            ? document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`)
            : document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`)
        if(cellToChange &&!cellToChange.classList.contains('ship')){
            cellToChange.style.backgroundImage = ``
        }
    }  
}

const placeShips = (gameInstance, shipIndex, orientation = 'horizontal') => {
    const cells = document.getElementById('player1').querySelectorAll('.grid-cell')
    const shipTypes = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']
    if(shipIndex < shipTypes.length) {

        const shipName = shipTypes[shipIndex]
        const shipImages = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])(shipName)
        const shipLength = shipImages.length
        document.addEventListener('keydown', (e) => {
            if (e.key === 'r'){
                stopPlacing()
                placeShips(gameInstance, shipIndex, orientation === 'horizontal' ? 'vertical' : 'horizontal')
            }
        })
        cells.forEach((cell) => {
            cell.shipImages = shipImages
            cell.orientation = orientation
            cell.shipLength = shipLength
            cell.addEventListener('mouseover', setShipImage)
            cell.addEventListener('mouseout', removeShipImage)
            cell.addEventListener('click', () => {
                const {x,y} = getCoordinatesFromCell(cell)
                const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength)
                ship.orientation = orientation
                try{
                    gameInstance.player1.getBoard().placeShip(ship, [x,y])
                    updateGrid('player', gameInstance.player1.getBoard())
                    stopPlacing()
                    placeShips(gameInstance, shipIndex+1, orientation)
                }catch(e){
                    createAlert(e.message)       
                }
            })
        })
    }else{
        stopPlacing()
        createAlert("Done placing ships! It's time to attack!")
        updateEventListeners('player', gameInstance)
        updateEventListeners('computer', gameInstance)
    }
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/lib/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/lib/player.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/lib/display.js");




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
                (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Carrier', 5), 
                (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Battleship', 4),
                (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Cruiser', 3),
                (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Submarine', 3),
                (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Destroyer', 2)
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
            this.player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])()
            this.player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])()
            ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.placeShips)(this, 0)
            this.randomShipPlacement(this.player2.getBoard())
            this.currentPlayer = this.player1
            this.enemyBoard = this.player2.getBoard()
            ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Welcome to Battleship!<br>Press 'r' to rotate ships")
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShipImages);


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
game.setupGame()
;(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.updateGrid)('player', game.player1.getBoard())
;(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.updateGrid)('computer', game.player2.getBoard())

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBUTtBQUNSLHVEQUFROztBQUVSLGFBQWEscURBQVc7QUFDeEI7QUFDQSx5REFBVTtBQUNWLHlEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wMS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTAyLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDMucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wNC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA1LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDYucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wNy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA4LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDkucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xMC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTExLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTIucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xMy5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTE0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTUucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xOC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTE5LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMjAucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0yMS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTIyLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMjMucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0yNC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvZ2FtZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvcGxheWVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1ib3gtc2hhZG93OiAwIC41ZW0gMWVtIC41ZW0gcmdiYSgxMCwxMCwxMCwuMSk7XG5cbn1cblxubWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uYm9hcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA0cmVtO1xuICAgIHBhZGRpbmc6IDAgNXJlbTtcbn1cblxuaDIsXG4ubnVtYmVyc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmJvYXJke1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMnB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpXG59XG5cbi5ib2FyZC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5ib2FyZC1pbm5lci13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAuNnJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG59XG5cbi5jb2x1bW4tZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcbiAgICBnYXA6IDJweDtcbn1cblxuLnJvdy1kZXNjcmlwdGlvbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMnB4O1xufVxuXG4uZ3JpZC1jZWxse1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmdyaWQtY2VsbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuLmhpZGRlbntcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMDtcbn1cblxuLmhpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5taXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5hbGVydC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IDMwcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KVxufVxuXG5cbi5kZWxldGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAuNXJlbTtcbiAgICB0b3A6IC41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uYm9hcmQtY29udGFpbmVyLFxuLmFsZXJ0LWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhKHdpZHRoIDwgODAwcHgpe1xuICAgIG1haW57XG4gICAgICAgIGdhcDogMDtcbiAgICB9XG4gICAgLmJvYXJkc3tcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5ib2FyZC1jb250YWluZXJ7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgLmFsZXJ0LWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0NBQStDOztBQUVuRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjtBQUNKOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxNQUFNO0lBQ1Y7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04sVUFBVTtRQUNWLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1ib3gtc2hhZG93OiAwIC41ZW0gMWVtIC41ZW0gcmdiYSgxMCwxMCwxMCwuMSk7XFxuXFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmJvYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHJlbTtcXG4gICAgcGFkZGluZzogMCA1cmVtO1xcbn1cXG5cXG5oMixcXG4ubnVtYmVyc3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbi5ib2FyZHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KVxcbn1cXG5cXG4uYm9hcmQtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmJvYXJkLWlubmVyLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjZyZW07XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLmNvbHVtbi1kZXNjcmlwdGlvbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucm93LWRlc2NyaXB0aW9ue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5ncmlkLWNlbGx7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5ncmlkLWNlbGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDA7XFxufVxcblxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5hbGVydC1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KVxcbn1cXG5cXG5cXG4uZGVsZXRle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAuNXJlbTtcXG4gICAgdG9wOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyLFxcbi5hbGVydC1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEod2lkdGggPCA4MDBweCl7XFxuICAgIG1haW57XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG4gICAgLmJvYXJkc3tcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQtY29udGFpbmVye1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmFsZXJ0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzcyMWJjZjlmMTRhMzAyYTZjM2RiMjRhYjQ2MTJkMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZiYTU2YmNmNDE2YTM0MmU0NjIzYTZhZjg3NTI1N2QyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NGZiOTFjYzI1OWVkODg4ZWUzNjY1YjUwYjJiYTc4NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDM4NDQ2ZjdhOGJiMzlmZWQ2ZTg0MzNjYzdjZGZlOTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ3MDdhMTdmNDNhNWUyZGJjZmM0Njg1MjUxZmFhZTE4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyYjQ2Y2Q2ODJmYmRkNWVhYjdiZTI0MGZiODYxNGI4NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTkyZmY0MGJmZTlmZWRiZTJkMDhiOGY4N2QxYTUzNDkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFiMWQxMDQ2NWY0MTRmNTAyMzg0OGQzY2VkNTU0M2IwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNDA0NTM1NTIxZTllYTU2YTYyMTJiODFlMTAwYjEzOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDVlM2I5ZTVlZjcyZTFkMTNkMTAyNzcxYzNmYzFhMzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVlMmQ5YTVmODc5M2VkZDExNDJlMWMwZWVlMzM2ZjQyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOTI5YzE3ZjUwMTA2NWM0NzFjZjJjYWIyOGEyMzc4ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGI2OTE3MzhiYTU2ZmE1ZWViNTMxZmFkYjRiZmEzMjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhjZjI0YjAxMDA5MTZiYjI0MDEyNGViMThmNjk3YjFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMTgzZDRjNDIzNDAxYTRjZmRkN2ZkMzJiMWMzNjZkNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjJhY2Q5N2I5OWE5MTRhNjQ1NTBmYWI3Mjc5MjMxY2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQxMmI3NzdkMTNjMTNiODBjZWQ4YzM5MjkxNmZmY2Y4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYjdiMTRkYjNkZGJhNTNlZDNjNmU1YmQxYWU3MTIyNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWI5ZWY4ZTVhZDIyMGNhOGRlYWFkNGZmMjcwYTRkZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhM2YyNjBiNmQ5NDI3MWQyMjQ0MmUyODI5NzkzMmU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYmYyNmJjY2E2ZWNkYWVlMDkyMGYyN2I1Nzk2YWVlZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjk4OGJlYTEyODU5NjA5NzBkYzE1NWU1NWY5NzNmYmEucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2V0U2hpcEltYWdlcyBmcm9tICcuL3NoaXBzJ1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBcIlxuXG5jb25zdCBnZXRDb29yZGluYXRlc0Zyb21DZWxsID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpKVxuICAgIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JykpXG5cbiAgICByZXR1cm4ge3gsIHl9XG59XG5cbmNvbnN0IGNyZWF0ZUFsZXJ0ID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWVzc2FnZVwiPiR7bWVzc2FnZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuIFxuY29uc3QgY3JlYXRlUmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0JylcbiAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzZXQgR2FtZVwiXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKVxufVxuXG5jb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgIGNyZWF0ZUFsZXJ0KHdpbm5lcilcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNlbGwnKVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VBdHRhY2spXG4gICAgfSlcbiAgICBjcmVhdGVSZXNldEJ1dHRvbigpXG59XG5cbmNvbnN0IHVwZGF0ZUdyaWQgPSAodHlwZSA9ICdwbGF5ZXInLCBnYW1lQm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IHR5cGUgPT09ICdwbGF5ZXInID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyJylcbiAgICBjb25zdCB7IHNoaXBzLCBtaXNzZWRBdHRhY2tzIH0gPSBnYW1lQm9hcmQ7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBJbWFnZXMgPSBnZXRTaGlwSW1hZ2VzKHNoaXAubmFtZSlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3NoaXAuY29vcmRpbmF0ZXNbaV1bMF19XCJdW2RhdGEteT1cIiR7c2hpcC5jb29yZGluYXRlc1tpXVsxXX1cIl1gKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgIGlmKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzaGlwSW1hZ2VzW2ldfSlgXG4gICAgICAgICAgICBpZih0eXBlICE9PSAncGxheWVyJyl7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuIFxuICAgIG1pc3NlZEF0dGFja3MuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRpbmF0ZVswXX1cIl1bZGF0YS15PVwiJHtjb29yZGluYXRlWzFdfVwiXWApXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgfSlcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5oaXRzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkaW5hdGVbMV19XCJdYClcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuICAgICAgICAgICAgaWYoc2hpcC5pc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5jb25zdCBkcmF3R3JpZCA9ICh0eXBlID0gJ3BsYXllcicpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IHR5cGUgPT09ICdwbGF5ZXInID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyJylcbiAgICBib2FyZC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZm9yKGxldCBpID0gMCA7IGkgPCAxMDA7IGkrKyl7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpXG5cbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGkgJSAxMClcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIE1hdGguZmxvb3IoIGkgLyAxMCkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQXR0YWNrKGV2ZW50KXtcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgZ2FtZUluc3RhbmNlID0gZXZlbnQudGFyZ2V0LmdhbWVJbnN0YW5jZVxuXG4gICAgY29uc3Qge3gsIHl9ID0gZ2V0Q29vcmRpbmF0ZXNGcm9tQ2VsbChjZWxsKVxuICAgIHRyeXtcbiAgICAgICAgY29uc3QgYXR0YWNrID0gZ2FtZUluc3RhbmNlLmF0dGFjayhbeCx5XSlcbiAgICAgICAgaWYoYXR0YWNrID09PSAnaGl0Jyl7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnWW91IGhpdCBhIHNoaXAhJylcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQXR0YWNrKVxuICAgICAgICB9ZWxzZSBpZihhdHRhY2sgPT09ICdtaXNzJyl7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUF0dGFjaylcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5jaGFuZ2VQbGF5ZXIoKVxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBnYW1lSW5zdGFuY2UuY29tcHV0ZXJBdHRhY2soKVxuICAgICAgICAgICAgaWYoY29tcHV0ZXJBdHRhY2sgPT09ICdtaXNzJyl7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ1lvdSBib3RoIG1pc3NlZCEnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjb21wdXRlckF0dGFjayA9PT0gJ2hpdCcpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdZb3UgbWlzc2VkIGJ1dCB0aGUgY29tcHV0ZXIgaGl0IScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UuY2hhbmdlUGxheWVyKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IGdhbWVJbnN0YW5jZS5nYW1lRW5kKClcbiAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZUluc3RhbmNlLnBsYXllcjEuZ2V0Qm9hcmQoKSlcbiAgICAgICAgdXBkYXRlR3JpZCgnY29tcHV0ZXInLCBnYW1lSW5zdGFuY2UucGxheWVyMi5nZXRCb2FyZCgpKVxuICAgICAgICBpZihnYW1lT3Zlcil7XG4gICAgICAgICAgICBlbmRHYW1lKGdhbWVPdmVyKVxuICAgICAgICB9XG4gICAgfWNhdGNoKGUpe1xuXG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVFdmVudExpc3RlbmVycyA9ICh0eXBlID0gJ3BsYXllcicsIGdhbWVJbnN0YW5jZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ3BsYXllcicgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjInKVxuICAgIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY2VsbCcpXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZih0eXBlID09PSAncGxheWVyJyl7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNldFNoaXBJbWFnZSlcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByZW1vdmVTaGlwSW1hZ2UpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSl7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VBdHRhY2spXG4gICAgICAgICAgICAgICAgY2VsbC5nYW1lSW5zdGFuY2UgPSBnYW1lSW5zdGFuY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IHN0b3BQbGFjaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKS5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jZWxsJylcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJydcblxuICAgICAgICBjZWxsLnJlcGxhY2VXaXRoKGNlbGwuY2xvbmVOb2RlKHRydWUpKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNldFNoaXBJbWFnZShldmVudCl7XG4gICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHNoaXBJbWFnZXMsIHNoaXBMZW5ndGggfSA9IGNlbGxcblxuICAgIGNvbnN0IHt4LCB5fSA9IGdldENvb3JkaW5hdGVzRnJvbUNlbGwoY2VsbClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgY2VsbFRvQ2hhbmdlID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyBcbiAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKVxuICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApXG4gICAgICAgIGlmKGNlbGxUb0NoYW5nZSl7XG4gICAgICAgICAgICBpZighY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKXtcbiAgICAgICAgICAgICAgICBjZWxsVG9DaGFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgICAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzaGlwSW1hZ2VzW2ldfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcEltYWdlKGV2ZW50KXtcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3Qge29yaWVudGF0aW9uLCBzaGlwTGVuZ3RofSA9IGNlbGxcbiAgICBjb25zdCB7eCwgeX0gPSBnZXRDb29yZGluYXRlc0Zyb21DZWxsKGNlbGwpXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGNlbGxUb0NoYW5nZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgXG4gICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3ggKyBpfVwiXVtkYXRhLXk9XCIke3l9XCJdYClcbiAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5ICsgaX1cIl1gKVxuICAgICAgICBpZihjZWxsVG9DaGFuZ2UgJiYhY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKXtcbiAgICAgICAgICAgIGNlbGxUb0NoYW5nZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgYFxuICAgICAgICB9XG4gICAgfSAgXG59XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoZ2FtZUluc3RhbmNlLCBzaGlwSW5kZXgsIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNlbGwnKVxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llciddXG4gICAgaWYoc2hpcEluZGV4IDwgc2hpcFR5cGVzLmxlbmd0aCkge1xuXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcFR5cGVzW3NoaXBJbmRleF1cbiAgICAgICAgY29uc3Qgc2hpcEltYWdlcyA9IGdldFNoaXBJbWFnZXMoc2hpcE5hbWUpXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwSW1hZ2VzLmxlbmd0aFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ3InKXtcbiAgICAgICAgICAgICAgICBzdG9wUGxhY2luZygpXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwcyhnYW1lSW5zdGFuY2UsIHNoaXBJbmRleCwgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuc2hpcEltYWdlcyA9IHNoaXBJbWFnZXNcbiAgICAgICAgICAgIGNlbGwub3JpZW50YXRpb24gPSBvcmllbnRhdGlvblxuICAgICAgICAgICAgY2VsbC5zaGlwTGVuZ3RoID0gc2hpcExlbmd0aFxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzZXRTaGlwSW1hZ2UpXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgcmVtb3ZlU2hpcEltYWdlKVxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7eCx5fSA9IGdldENvb3JkaW5hdGVzRnJvbUNlbGwoY2VsbClcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcE5hbWUsIHNoaXBMZW5ndGgpXG4gICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW5zdGFuY2UucGxheWVyMS5nZXRCb2FyZCgpLnBsYWNlU2hpcChzaGlwLCBbeCx5XSlcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZUluc3RhbmNlLnBsYXllcjEuZ2V0Qm9hcmQoKSlcbiAgICAgICAgICAgICAgICAgICAgc3RvcFBsYWNpbmcoKVxuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBzKGdhbWVJbnN0YW5jZSwgc2hpcEluZGV4KzEsIG9yaWVudGF0aW9uKVxuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWxlcnQoZS5tZXNzYWdlKSAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgICBzdG9wUGxhY2luZygpXG4gICAgICAgIGNyZWF0ZUFsZXJ0KFwiRG9uZSBwbGFjaW5nIHNoaXBzISBJdCdzIHRpbWUgdG8gYXR0YWNrIVwiKVxuICAgICAgICB1cGRhdGVFdmVudExpc3RlbmVycygncGxheWVyJywgZ2FtZUluc3RhbmNlKVxuICAgICAgICB1cGRhdGVFdmVudExpc3RlbmVycygnY29tcHV0ZXInLCBnYW1lSW5zdGFuY2UpXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUFsZXJ0LFxuICAgIGRyYXdHcmlkLFxuICAgIHVwZGF0ZUdyaWQsXG4gICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMsXG4gICAgcGxhY2VTaGlwc1xufSIsImltcG9ydCBzaGlwRmFjdG9yeSBmcm9tIFwiLi9zaGlwXCJcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCJcbmltcG9ydCB7IGNyZWF0ZUFsZXJ0LCBwbGFjZVNoaXBzIH0gZnJvbSBcIi4vZGlzcGxheVwiXG5cbmNvbnN0IGdhbWVGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSB7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IG51bGwsXG4gICAgICAgIGVuZW15Qm9hcmQ6IG51bGwsXG4gICAgICAgIHBsYXllcjE6IG51bGwsXG4gICAgICAgIHBsYXllcjI6IG51bGwsXG4gICAgICAgIGNoYW5nZVBsYXllcigpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCb2FyZCA9IHRoaXMuY3VycmVudFBsYXllci5nZXRCb2FyZCgpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucGxheWVyMSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMVxuICAgICAgICB9LFxuICAgICAgICByYW5kb21TaGlwUGxhY2VtZW50KGJvYXJkKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgICAgICAgICBzaGlwRmFjdG9yeSgnQ2FycmllcicsIDUpLCBcbiAgICAgICAgICAgICAgICBzaGlwRmFjdG9yeSgnQmF0dGxlc2hpcCcsIDQpLFxuICAgICAgICAgICAgICAgIHNoaXBGYWN0b3J5KCdDcnVpc2VyJywgMyksXG4gICAgICAgICAgICAgICAgc2hpcEZhY3RvcnkoJ1N1Ym1hcmluZScsIDMpLFxuICAgICAgICAgICAgICAgIHNoaXBGYWN0b3J5KCdEZXN0cm95ZXInLCAyKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJydcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3aGlsZSghdmFsaWRQbGFjZW1lbnQpe1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhdHRhY2soY29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBsYXllci5hdHRhY2sodGhpcy5lbmVteUJvYXJkLCBjb29yZGluYXRlcylcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZXJBdHRhY2soaGl0cyA9IDApe1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgaWYodGhpcy5lbmVteUJvYXJkLm1pc3NlZEF0dGFja3Muc29tZSgobWlzc2VkQXR0YWNrKSA9PiBtaXNzZWRBdHRhY2tbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIG1pc3NlZEF0dGFja1sxXSA9PT0gY29vcmRpbmF0ZXNbMV0pKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKClcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLmF0dGFjayhjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICBpZihhdHRhY2sgPT09ICdoaXQnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlckF0dGFjayhoaXRzKzEpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaGl0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGhpdHMgPT09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoaXRzXG4gICAgICAgIH0sXG4gICAgICAgIHNldHVwR2FtZSgpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxID0gcGxheWVyKClcbiAgICAgICAgICAgIHRoaXMucGxheWVyMiA9IHBsYXllcigpXG4gICAgICAgICAgICBwbGFjZVNoaXBzKHRoaXMsIDApXG4gICAgICAgICAgICB0aGlzLnJhbmRvbVNoaXBQbGFjZW1lbnQodGhpcy5wbGF5ZXIyLmdldEJvYXJkKCkpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjFcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCb2FyZCA9IHRoaXMucGxheWVyMi5nZXRCb2FyZCgpXG4gICAgICAgICAgICBjcmVhdGVBbGVydChcIldlbGNvbWUgdG8gQmF0dGxlc2hpcCE8YnI+UHJlc3MgJ3InIHRvIHJvdGF0ZSBzaGlwc1wiKVxuICAgICAgICB9LFxuICAgICAgICBnYW1lRW5kKCl7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjEuZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnUGxheWVyIHdpbnMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcGxheUdhbWUoKXtcbiAgICAgICAgICAgIHdoaWxlKCF0aGlzLmdhbWVFbmQoKSl7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2FtZVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lRmFjdG9yeSIsImNvbnN0IGNoZWNrSGl0ID0gKGNvb3JkaW5hdGVzLCBzaGlwcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzXG4gICAgbGV0IGhpdFNoaXAgPSBudWxsXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGlmKGNvb3JkaW5hdGVbMF0gPT09IHggJiYgY29vcmRpbmF0ZVsxXSA9PT0geSlcbiAgICAgICAgICAgIGhpdFNoaXAgPSBzaGlwXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gaGl0U2hpcFxufVxuXG5jb25zdCBnZW5lcmF0ZVNoaXBDb29yZGluYXRlcyA9IChzaGlwLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzXG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW11cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHNoaXBDb29yZGluYXRlcy5wdXNoKFt4ICsgaSwgeV0pIDogc2hpcENvb3JkaW5hdGVzLnB1c2goW3gsIHkgKyBpXSlcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1xufVxuXG5jb25zdCBjb29yZGluYXRlc09uQm9hcmQgPSAoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IG9uQm9hcmQgPSBmYWxzZTtcbiAgICBvbkJvYXJkID0gc2hpcENvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LHldID0gY29vcmRpbmF0ZTtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOVxuICAgIH0pXG4gICAgcmV0dXJuIG9uQm9hcmRcbn1cblxuY29uc3QgY29vcmRpbmF0ZXNEb05vdE92ZXJsYXAgPSAoc2hpcHMsIHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGlmKHNoaXAuY29vcmRpbmF0ZXMuc29tZSgoY29vcmQpID0+IGNvb3JkaW5hdGUuZXZlcnkoKHYsIGkpID0+IHYgPT09IGNvb3JkW2ldKSkpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgY2Fubm90IG92ZXJsYXAgd2l0aCBvdGhlciBzaGlwcycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgdmFsaWRhdGVDb29yZGluYXRlcyA9IChzaGlwcywgc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZTtcbiAgICB2YWxpZENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNPbkJvYXJkKHNoaXBDb29yZGluYXRlcylcbiAgICBpZighdmFsaWRDb29yZGluYXRlcyl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgY2Fubm90IGJlIHBsYWNlZCBvZmYgdGhlIGJvYXJkJylcbiAgICB9XG4gICAgY29vcmRpbmF0ZXNEb05vdE92ZXJsYXAoc2hpcHMsIHNoaXBDb29yZGluYXRlcylcblxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG59XG5cblxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0ge1xuICAgICAgICBzaGlwczogW10sXG4gICAgICAgIG1pc3NlZEF0dGFja3M6IFtdLFxuICAgICAgICBhbGxTaGlwc1N1bmsoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IGdlbmVyYXRlU2hpcENvb3JkaW5hdGVzKHNoaXAsIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgdmFsaWRhdGVDb29yZGluYXRlcyh0aGlzLnNoaXBzLCBzaGlwLmNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApXG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgc2hpcEhpdCA9IGNoZWNrSGl0KGNvb3JkaW5hdGVzLCB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYoc2hpcEhpdCl7XG4gICAgICAgICAgICAgICAgc2hpcEhpdC5oaXQoY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZCIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnXG5cbmNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVCb2FyZCgpXG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkXG4gICAgXG4gICAgY29uc3QgYXR0YWNrID0gKGVuZW15Qm9hcmQsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpXG4gICAgfVxuICAgIHJldHVybiB7IGdldEJvYXJkLCBhdHRhY2sgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXIiLCJjb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHM6IFtdLFxuICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaXRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgaGl0KGNvb3JkaW5hdGUpe1xuICAgICAgICAgICAgaWYodGhpcy5oaXRzLmxlbmd0aCA8IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdHMucHVzaChjb29yZGluYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3RvcnkiLCJpbXBvcnQgY2FycmllckltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIwLnBuZydcbmltcG9ydCBjYXJyaWVyMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wMS5wbmcnXG5pbXBvcnQgY2FycmllcjIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDIucG5nJ1xuaW1wb3J0IGNhcnJpZXIzIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTAzLnBuZydcbmltcG9ydCBjYXJyaWVyNCBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wNC5wbmcnXG5pbXBvcnQgY2FycmllcjUgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDUucG5nJ1xuXG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIxLnBuZydcbmltcG9ydCBiYXR0bGVzaGlwMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wNi5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcDIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDcucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXAzIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA4LnBuZydcbmltcG9ydCBiYXR0bGVzaGlwNCBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wOS5wbmcnXG5cbmltcG9ydCBjcnVpc2VySW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjIucG5nJ1xuaW1wb3J0IGNydWlzZXIxIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTEwLnBuZydcbmltcG9ydCBjcnVpc2VyMiBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xMS5wbmcnXG5pbXBvcnQgY3J1aXNlcjMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTIucG5nJ1xuXG5pbXBvcnQgc3VibWFyaW5lSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjMucG5nJ1xuaW1wb3J0IHN1Ym1hcmluZTEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTMucG5nJ1xuaW1wb3J0IHN1Ym1hcmluZTIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTQucG5nJ1xuaW1wb3J0IHN1Ym1hcmluZTMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTUucG5nJ1xuXG5pbXBvcnQgZGVzdHJveWVySW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjQucG5nJ1xuaW1wb3J0IGRlc3Ryb3llcjEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTgucG5nJ1xuaW1wb3J0IGRlc3Ryb3llcjIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTkucG5nJ1xuXG5jb25zdCBjYXJyaWVyID0ge1xuICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgZnVsbEltYWdlOiBjYXJyaWVySW1hZ2UsXG4gICAgaW1hZ2VzOiBbY2FycmllcjEsIGNhcnJpZXIyLCBjYXJyaWVyMywgY2FycmllcjQsIGNhcnJpZXI1XVxufVxuXG5jb25zdCBiYXR0bGVzaGlwID0ge1xuICAgIG5hbWU6ICdCYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gICAgZnVsbEltYWdlOiBiYXR0bGVzaGlwSW1hZ2UsXG4gICAgaW1hZ2VzOiBbYmF0dGxlc2hpcDEsIGJhdHRsZXNoaXAyLCBiYXR0bGVzaGlwMywgYmF0dGxlc2hpcDRdXG59XG5cbmNvbnN0IGNydWlzZXIgPSB7XG4gICAgbmFtZTogJ0NydWlzZXInLFxuICAgIGxlbmd0aDogMyxcbiAgICBmdWxsSW1hZ2U6IGNydWlzZXJJbWFnZSxcbiAgICBpbWFnZXM6IFtjcnVpc2VyMSwgY3J1aXNlcjIsIGNydWlzZXIzXVxufVxuXG5jb25zdCBzdWJtYXJpbmUgPSB7XG4gICAgbmFtZTogJ1N1Ym1hcmluZScsXG4gICAgbGVuZ3RoOiAzLFxuICAgIGZ1bGxJbWFnZTogc3VibWFyaW5lSW1hZ2UsXG4gICAgaW1hZ2VzOiBbc3VibWFyaW5lMSwgc3VibWFyaW5lMiwgc3VibWFyaW5lM11cbn1cblxuY29uc3QgZGVzdHJveWVyID0ge1xuICAgIG5hbWU6ICdEZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMixcbiAgICBmdWxsSW1hZ2U6IGRlc3Ryb3llckltYWdlLFxuICAgIGltYWdlczogW2Rlc3Ryb3llcjEsIGRlc3Ryb3llcjJdXG59XG5cbmNvbnN0IHNoaXBzID0gW1xuICAgIGNhcnJpZXIsXG4gICAgYmF0dGxlc2hpcCxcbiAgICBjcnVpc2VyLFxuICAgIHN1Ym1hcmluZSxcbiAgICBkZXN0cm95ZXJcbl1cblxuY29uc3QgZ2V0U2hpcEltYWdlcyA9IChzaGlwTmFtZSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IHNoaXBOYW1lKVxuICAgIHJldHVybiBzaGlwLmltYWdlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRTaGlwSW1hZ2VzXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgXG4gICAgZHJhd0dyaWQsIFxuICAgIHVwZGF0ZUdyaWQsXG4gICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnNcbn0gZnJvbSAnLi9saWIvZGlzcGxheSdcbmltcG9ydCBnYW1lRmFjdG9yeSBmcm9tICcuL2xpYi9nYW1lJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuZHJhd0dyaWQoKVxuZHJhd0dyaWQoJ2NvbXB1dGVyJylcblxuY29uc3QgZ2FtZSA9IGdhbWVGYWN0b3J5KCk7XG5nYW1lLnNldHVwR2FtZSgpXG51cGRhdGVHcmlkKCdwbGF5ZXInLCBnYW1lLnBsYXllcjEuZ2V0Qm9hcmQoKSlcbnVwZGF0ZUdyaWQoJ2NvbXB1dGVyJywgZ2FtZS5wbGF5ZXIyLmdldEJvYXJkKCkpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=