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
        const shipImages = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.getShipImages)(ship.name)
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
        console.log(gameOver)
        updateGrid('player', gameInstance.player1.getBoard())
        updateGrid('computer', gameInstance.player2.getBoard())
        if(gameOver){
            console.log("In Here")
            endGame(gameOver)
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
        cell.removeEventListener('mouseover', setShipImage)
        cell.removeEventListener('mouseout', removeShipImage)

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
        const shipImages = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.getShipImages)(shipName)
        const shipLength = shipImages.length
        document.addEventListener('keydown', (e) => {
            if (e.key === 'r'){
                stopPlacing()
                placeShips(gameInstance, shipIndex+1, orientation === 'horizontal' ? 'vertical' : 'horizontal')
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
            ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Welcome to Battleship!")
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
game.setupGame()
;(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.updateGrid)('player', game.player1.getBoard())
;(0,_lib_display__WEBPACK_IMPORTED_MODULE_0__.updateGrid)('computer', game.player2.getBoard())

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQy9FLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FB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QUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNJc0I7QUFDYztBQUNoQjs7QUFFcEIsc0RBQVE7QUFDUix1REFBUTs7QUFFUixhQUFhLHFEQUFXO0FBQ3hCO0FBQ0EseURBQVU7QUFDVix5REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDEucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wMi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTAzLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDQucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wNS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA2LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMDcucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0wOC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTA5LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTAucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xMS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTEyLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTMucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xNC5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTE1LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMTgucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0xOS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTIwLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMjEucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9iYXR0bGVzaGlwcy0yMi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvaW1hZ2VzL2JhdHRsZXNoaXBzLTIzLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9pbWFnZXMvYmF0dGxlc2hpcHMtMjQucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2ltYWdlcy9leHBsb3Npb24ucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saWIvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL3BsYXllci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpYi9zaGlwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGliL3NoaXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tYm94LXNoYWRvdzogMCAuNWVtIDFlbSAuNWVtIHJnYmEoMTAsMTAsMTAsLjEpO1xuXG59XG5cbm1haW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbn1cblxuLmJvYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNHJlbTtcbiAgICBwYWRkaW5nOiAwIDVyZW07XG59XG5cbmgyLFxuLm51bWJlcnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5ib2FyZHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBnYXA6IDJweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KVxufVxuXG4uYm9hcmQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uYm9hcmQtaW5uZXItd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogLjZyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xufVxuXG4uY29sdW1uLWRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XG4gICAgZ2FwOiAycHg7XG59XG5cbi5yb3ctZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBnYXA6IDJweDtcbn1cblxuLmdyaWQtY2VsbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5ncmlkLWNlbGw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5oaWRkZW57XG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDA7XG59XG5cbi5oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWlzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uYWxlcnQtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdylcbn1cblxuXG4uZGVsZXRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLjVyZW07XG4gICAgdG9wOiAuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmJvYXJkLWNvbnRhaW5lcixcbi5hbGVydC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSh3aWR0aCA8IDgwMHB4KXtcbiAgICBtYWlue1xuICAgICAgICBnYXA6IDA7XG4gICAgfVxuICAgIC5ib2FyZHN7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYm9hcmQtY29udGFpbmVye1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5hbGVydC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtDQUErQzs7QUFFbkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsUUFBUTtJQUNSO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7QUFDSjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksTUFBTTtJQUNWO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsTUFBTTtRQUNOLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tYm94LXNoYWRvdzogMCAuNWVtIDFlbSAuNWVtIHJnYmEoMTAsMTAsMTAsLjEpO1xcblxcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5ib2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDRyZW07XFxuICAgIHBhZGRpbmc6IDAgNXJlbTtcXG59XFxuXFxuaDIsXFxuLm51bWJlcnN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uYm9hcmR7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdylcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5ib2FyZC1pbm5lci13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IC42cmVtO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxufVxcblxcbi5jb2x1bW4tZGVzY3JpcHRpb257XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLnJvdy1kZXNjcmlwdGlvbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uZ3JpZC1jZWxse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uZ3JpZC1jZWxsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMCAwO1xcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYWxlcnQtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdylcXG59XFxuXFxuXFxuLmRlbGV0ZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLjVyZW07XFxuICAgIHRvcDogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lcixcXG4uYWxlcnQtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhKHdpZHRoIDwgODAwcHgpe1xcbiAgICBtYWlue1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuICAgIC5ib2FyZHN7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkLWNvbnRhaW5lcntcXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5hbGVydC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc3MjFiY2Y5ZjE0YTMwMmE2YzNkYjI0YWI0NjEyZDEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YmE1NmJjZjQxNmEzNDJlNDYyM2E2YWY4NzUyNTdkMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDRmYjkxY2MyNTllZDg4OGVlMzY2NWI1MGIyYmE3ODUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQzODQ0NmY3YThiYjM5ZmVkNmU4NDMzY2M3Y2RmZTkzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNzA3YTE3ZjQzYTVlMmRiY2ZjNDY4NTI1MWZhYWUxOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmI0NmNkNjgyZmJkZDVlYWI3YmUyNDBmYjg2MTRiODQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE5MmZmNDBiZmU5ZmVkYmUyZDA4YjhmODdkMWE1MzQ5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYjFkMTA0NjVmNDE0ZjUwMjM4NDhkM2NlZDU1NDNiMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjQwNDUzNTUyMWU5ZWE1NmE2MjEyYjgxZTEwMGIxMzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ1ZTNiOWU1ZWY3MmUxZDEzZDEwMjc3MWMzZmMxYTMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlZTJkOWE1Zjg3OTNlZGQxMTQyZTFjMGVlZTMzNmY0Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjkyOWMxN2Y1MDEwNjVjNDcxY2YyY2FiMjhhMjM3OGQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBiNjkxNzM4YmE1NmZhNWVlYjUzMWZhZGI0YmZhMzI4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4Y2YyNGIwMTAwOTE2YmIyNDAxMjRlYjE4ZjY5N2IxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTE4M2Q0YzQyMzQwMWE0Y2ZkZDdmZDMyYjFjMzY2ZDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYyYWNkOTdiOTlhOTE0YTY0NTUwZmFiNzI3OTIzMWNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0MTJiNzc3ZDEzYzEzYjgwY2VkOGMzOTI5MTZmZmNmOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmI3YjE0ZGIzZGRiYTUzZWQzYzZlNWJkMWFlNzEyMjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFiOWVmOGU1YWQyMjBjYThkZWFhZDRmZjI3MGE0ZGY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTNmMjYwYjZkOTQyNzFkMjI0NDJlMjgyOTc5MzJlNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2JmMjZiY2NhNmVjZGFlZTA5MjBmMjdiNTc5NmFlZWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI5ODhiZWExMjg1OTYwOTcwZGMxNTVlNTVmOTczZmJhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5N2QxMWVkOGE3YmQwM2I0ZjFlM2IwMmZkNDBjM2E2ZC5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFxuICAgIGdldFNoaXBJbWFnZXMsXG4gICAgZ2V0RXhwbG9zaW9uSW1hZ2UgXG59IGZyb20gXCIuL3NoaXBzXCJcbmltcG9ydCBzaGlwRmFjdG9yeSBmcm9tIFwiLi9zaGlwXCJcblxuY29uc3QgZ2V0Q29vcmRpbmF0ZXNGcm9tQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSlcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpKVxuXG4gICAgcmV0dXJuIHt4LCB5fVxufVxuXG5jb25zdCBjcmVhdGVBbGVydCA9IChtZXNzYWdlKSA9PiB7XG4gICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0JylcbiAgICBhbGVydC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydC1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cbiBcbmNvbnN0IGNyZWF0ZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXNldCcpXG4gICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlc2V0IEdhbWVcIlxuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0JylcbiAgICBhbGVydC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbilcbn1cblxuY29uc3QgZW5kR2FtZSA9ICh3aW5uZXIpID0+IHtcbiAgICBjcmVhdGVBbGVydCh3aW5uZXIpXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jZWxsJylcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQXR0YWNrKVxuICAgIH0pXG4gICAgY3JlYXRlUmVzZXRCdXR0b24oKVxufVxuXG5jb25zdCB1cGRhdGVHcmlkID0gKHR5cGUgPSAncGxheWVyJywgZ2FtZUJvYXJkKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSB0eXBlID09PSAncGxheWVyJyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxJykgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMicpXG4gICAgY29uc3QgeyBzaGlwcywgbWlzc2VkQXR0YWNrcyB9ID0gZ2FtZUJvYXJkO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwSW1hZ2VzID0gZ2V0U2hpcEltYWdlcyhzaGlwLm5hbWUpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtzaGlwLmNvb3JkaW5hdGVzW2ldWzBdfVwiXVtkYXRhLXk9XCIke3NoaXAuY29vcmRpbmF0ZXNbaV1bMV19XCJdYClcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICBpZihzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2hpcEltYWdlc1tpXX0pYFxuICAgICAgICAgICAgaWYodHlwZSAhPT0gJ3BsYXllcicpe1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiBcblxuICAgIG1pc3NlZEF0dGFja3MuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRpbmF0ZVswXX1cIl1bZGF0YS15PVwiJHtjb29yZGluYXRlWzFdfVwiXWApXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgfSlcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5oaXRzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkaW5hdGVbMV19XCJdYClcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuICAgICAgICAgICAgaWYoc2hpcC5pc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5jb25zdCBkcmF3R3JpZCA9ICh0eXBlID0gJ3BsYXllcicpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IHR5cGUgPT09ICdwbGF5ZXInID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyJylcbiAgICBib2FyZC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZm9yKGxldCBpID0gMCA7IGkgPCAxMDA7IGkrKyl7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpXG5cbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGkgJSAxMClcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIE1hdGguZmxvb3IoIGkgLyAxMCkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQXR0YWNrKGV2ZW50KXtcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgZ2FtZUluc3RhbmNlID0gZXZlbnQudGFyZ2V0LmdhbWVJbnN0YW5jZVxuXG4gICAgY29uc3Qge3gsIHl9ID0gZ2V0Q29vcmRpbmF0ZXNGcm9tQ2VsbChjZWxsKVxuICAgIHRyeXtcbiAgICAgICAgY29uc3QgYXR0YWNrID0gZ2FtZUluc3RhbmNlLmF0dGFjayhbeCx5XSlcbiAgICAgICAgaWYoYXR0YWNrID09PSAnaGl0Jyl7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnWW91IGhpdCBhIHNoaXAhJylcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQXR0YWNrKVxuICAgICAgICB9ZWxzZSBpZihhdHRhY2sgPT09ICdtaXNzJyl7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUF0dGFjaylcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5jaGFuZ2VQbGF5ZXIoKVxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBnYW1lSW5zdGFuY2UuY29tcHV0ZXJBdHRhY2soKVxuICAgICAgICAgICAgaWYoY29tcHV0ZXJBdHRhY2sgPT09ICdtaXNzJyl7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ1lvdSBib3RoIG1pc3NlZCEnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjb21wdXRlckF0dGFjayA9PT0gJ2hpdCcpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdZb3UgbWlzc2VkIGJ1dCB0aGUgY29tcHV0ZXIgaGl0IScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UuY2hhbmdlUGxheWVyKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IGdhbWVJbnN0YW5jZS5nYW1lRW5kKClcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZU92ZXIpXG4gICAgICAgIHVwZGF0ZUdyaWQoJ3BsYXllcicsIGdhbWVJbnN0YW5jZS5wbGF5ZXIxLmdldEJvYXJkKCkpXG4gICAgICAgIHVwZGF0ZUdyaWQoJ2NvbXB1dGVyJywgZ2FtZUluc3RhbmNlLnBsYXllcjIuZ2V0Qm9hcmQoKSlcbiAgICAgICAgaWYoZ2FtZU92ZXIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbiBIZXJlXCIpXG4gICAgICAgICAgICBlbmRHYW1lKGdhbWVPdmVyKVxuICAgICAgICB9XG4gICAgfWNhdGNoKGUpe1xuXG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVFdmVudExpc3RlbmVycyA9ICh0eXBlID0gJ3BsYXllcicsIGdhbWVJbnN0YW5jZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ3BsYXllcicgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjInKVxuICAgIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY2VsbCcpXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZighY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpICYmICFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKXtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQXR0YWNrKVxuICAgICAgICAgICAgY2VsbC5nYW1lSW5zdGFuY2UgPSBnYW1lSW5zdGFuY2VcbiAgICAgICAgfVxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNldFNoaXBJbWFnZSlcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlbW92ZVNoaXBJbWFnZSlcblxuICAgIH0pXG59XG5cbmNvbnN0IHN0b3BQbGFjaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKS5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jZWxsJylcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJydcblxuICAgICAgICBjZWxsLnJlcGxhY2VXaXRoKGNlbGwuY2xvbmVOb2RlKHRydWUpKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNldFNoaXBJbWFnZShldmVudCl7XG4gICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHNoaXBJbWFnZXMsIHNoaXBMZW5ndGggfSA9IGNlbGxcblxuICAgIGNvbnN0IHt4LCB5fSA9IGdldENvb3JkaW5hdGVzRnJvbUNlbGwoY2VsbClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgY2VsbFRvQ2hhbmdlID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyBcbiAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKVxuICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApXG4gICAgICAgIGlmKGNlbGxUb0NoYW5nZSl7XG4gICAgICAgICAgICBpZighY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKXtcbiAgICAgICAgICAgICAgICBjZWxsVG9DaGFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgICAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzaGlwSW1hZ2VzW2ldfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcbn1cbmZ1bmN0aW9uIHJlbW92ZVNoaXBJbWFnZShldmVudCl7XG4gICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IHtvcmllbnRhdGlvbiwgc2hpcExlbmd0aH0gPSBjZWxsXG4gICAgY29uc3Qge3gsIHl9ID0gZ2V0Q29vcmRpbmF0ZXNGcm9tQ2VsbChjZWxsKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBjZWxsVG9DaGFuZ2UgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnIFxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4ICsgaX1cIl1bZGF0YS15PVwiJHt5fVwiXWApXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGl9XCJdYClcbiAgICAgICAgaWYoY2VsbFRvQ2hhbmdlICYmIWNlbGxUb0NoYW5nZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSl7XG4gICAgICAgICAgICBjZWxsVG9DaGFuZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGBcbiAgICAgICAgfVxuICAgIH0gIFxufVxuXG5jb25zdCBwbGFjZVNoaXBzID0gKGdhbWVJbnN0YW5jZSwgc2hpcEluZGV4LCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKS5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jZWxsJylcbiAgICBjb25zdCBzaGlwVHlwZXMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdDcnVpc2VyJywgJ1N1Ym1hcmluZScsICdEZXN0cm95ZXInXVxuICAgIGlmKHNoaXBJbmRleCA8IHNoaXBUeXBlcy5sZW5ndGgpIHtcblxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBUeXBlc1tzaGlwSW5kZXhdXG4gICAgICAgIGNvbnN0IHNoaXBJbWFnZXMgPSBnZXRTaGlwSW1hZ2VzKHNoaXBOYW1lKVxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcEltYWdlcy5sZW5ndGhcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdyJyl7XG4gICAgICAgICAgICAgICAgc3RvcFBsYWNpbmcoKVxuICAgICAgICAgICAgICAgIHBsYWNlU2hpcHMoZ2FtZUluc3RhbmNlLCBzaGlwSW5kZXgrMSwgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuc2hpcEltYWdlcyA9IHNoaXBJbWFnZXNcbiAgICAgICAgICAgIGNlbGwub3JpZW50YXRpb24gPSBvcmllbnRhdGlvblxuICAgICAgICAgICAgY2VsbC5zaGlwTGVuZ3RoID0gc2hpcExlbmd0aFxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzZXRTaGlwSW1hZ2UpXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgcmVtb3ZlU2hpcEltYWdlKVxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7eCx5fSA9IGdldENvb3JkaW5hdGVzRnJvbUNlbGwoY2VsbClcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcE5hbWUsIHNoaXBMZW5ndGgpXG4gICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW5zdGFuY2UucGxheWVyMS5nZXRCb2FyZCgpLnBsYWNlU2hpcChzaGlwLCBbeCx5XSlcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZUluc3RhbmNlLnBsYXllcjEuZ2V0Qm9hcmQoKSlcbiAgICAgICAgICAgICAgICAgICAgc3RvcFBsYWNpbmcoKVxuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBzKGdhbWVJbnN0YW5jZSwgc2hpcEluZGV4KzEsIG9yaWVudGF0aW9uKVxuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWxlcnQoZS5tZXNzYWdlKSAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgICBzdG9wUGxhY2luZygpXG4gICAgICAgIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCdwbGF5ZXInLCBnYW1lSW5zdGFuY2UpXG4gICAgICAgIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCdjb21wdXRlcicsIGdhbWVJbnN0YW5jZSlcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQWxlcnQsXG4gICAgZHJhd0dyaWQsXG4gICAgdXBkYXRlR3JpZCxcbiAgICB1cGRhdGVFdmVudExpc3RlbmVycyxcbiAgICBwbGFjZVNoaXBzXG59IiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBcIlxuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIlxuaW1wb3J0IHsgY3JlYXRlQWxlcnQsIHBsYWNlU2hpcHMgfSBmcm9tIFwiLi9kaXNwbGF5XCJcblxuY29uc3QgZ2FtZUZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZSA9IHtcbiAgICAgICAgY3VycmVudFBsYXllcjogbnVsbCxcbiAgICAgICAgZW5lbXlCb2FyZDogbnVsbCxcbiAgICAgICAgcGxheWVyMTogbnVsbCxcbiAgICAgICAgcGxheWVyMjogbnVsbCxcbiAgICAgICAgY2hhbmdlUGxheWVyKCkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkID0gdGhpcy5jdXJyZW50UGxheWVyLmdldEJvYXJkKClcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxXG4gICAgICAgIH0sXG4gICAgICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQoYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICAgICAgICAgIHNoaXBGYWN0b3J5KCdDYXJyaWVyJywgNSksIFxuICAgICAgICAgICAgICAgIHNoaXBGYWN0b3J5KCdCYXR0bGVzaGlwJywgNCksXG4gICAgICAgICAgICAgICAgc2hpcEZhY3RvcnkoJ0NydWlzZXInLCAzKSxcbiAgICAgICAgICAgICAgICBzaGlwRmFjdG9yeSgnU3VibWFyaW5lJywgMyksXG4gICAgICAgICAgICAgICAgc2hpcEZhY3RvcnkoJ0Rlc3Ryb3llcicsIDIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAnJ1xuICAgICAgICAgICAgICAgIGxldCB2YWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlKCF2YWxpZFBsYWNlbWVudCl7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnXG4gICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUGxhY2VtZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUGxhY2VtZW50ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFjayhjb29yZGluYXRlcyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGxheWVyLmF0dGFjayh0aGlzLmVuZW15Qm9hcmQsIGNvb3JkaW5hdGVzKVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlckF0dGFjayhoaXRzID0gMCl7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15Qm9hcmQubWlzc2VkQXR0YWNrcy5zb21lKChtaXNzZWRBdHRhY2spID0+IG1pc3NlZEF0dGFja1swXSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgbWlzc2VkQXR0YWNrWzFdID09PSBjb29yZGluYXRlc1sxXSkpe1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soKVxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuYXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIGlmKGF0dGFjayA9PT0gJ2hpdCcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKGhpdHMrMSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaGl0cyA9PT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpdHNcbiAgICAgICAgfSxcbiAgICAgICAgc2V0dXBHYW1lKCl7XG4gICAgICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIoKVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyKClcbiAgICAgICAgICAgIHBsYWNlU2hpcHModGhpcywgMClcbiAgICAgICAgICAgIHRoaXMucmFuZG9tU2hpcFBsYWNlbWVudCh0aGlzLnBsYXllcjIuZ2V0Qm9hcmQoKSlcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyMVxuICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkID0gdGhpcy5wbGF5ZXIyLmdldEJvYXJkKClcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KFwiV2VsY29tZSB0byBCYXR0bGVzaGlwIVwiKVxuICAgICAgICB9LFxuICAgICAgICBnYW1lRW5kKCl7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjEuZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnUGxheWVyIHdpbnMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcGxheUdhbWUoKXtcbiAgICAgICAgICAgIHdoaWxlKCF0aGlzLmdhbWVFbmQoKSl7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2FtZVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lRmFjdG9yeSIsImNvbnN0IGNoZWNrSGl0ID0gKGNvb3JkaW5hdGVzLCBzaGlwcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzXG4gICAgbGV0IGhpdFNoaXAgPSBudWxsXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGlmKGNvb3JkaW5hdGVbMF0gPT09IHggJiYgY29vcmRpbmF0ZVsxXSA9PT0geSlcbiAgICAgICAgICAgIGhpdFNoaXAgPSBzaGlwXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gaGl0U2hpcFxufVxuXG5jb25zdCBnZW5lcmF0ZVNoaXBDb29yZGluYXRlcyA9IChzaGlwLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzXG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW11cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHNoaXBDb29yZGluYXRlcy5wdXNoKFt4ICsgaSwgeV0pIDogc2hpcENvb3JkaW5hdGVzLnB1c2goW3gsIHkgKyBpXSlcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1xufVxuXG5jb25zdCBjb29yZGluYXRlc09uQm9hcmQgPSAoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IG9uQm9hcmQgPSBmYWxzZTtcbiAgICBvbkJvYXJkID0gc2hpcENvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LHldID0gY29vcmRpbmF0ZTtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOVxuICAgIH0pXG4gICAgcmV0dXJuIG9uQm9hcmRcbn1cblxuY29uc3QgY29vcmRpbmF0ZXNEb05vdE92ZXJsYXAgPSAoc2hpcHMsIHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGlmKHNoaXAuY29vcmRpbmF0ZXMuc29tZSgoY29vcmQpID0+IGNvb3JkaW5hdGUuZXZlcnkoKHYsIGkpID0+IHYgPT09IGNvb3JkW2ldKSkpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgY2Fubm90IG92ZXJsYXAgd2l0aCBvdGhlciBzaGlwcycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgdmFsaWRhdGVDb29yZGluYXRlcyA9IChzaGlwcywgc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZTtcbiAgICB2YWxpZENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNPbkJvYXJkKHNoaXBDb29yZGluYXRlcylcbiAgICBpZighdmFsaWRDb29yZGluYXRlcyl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgY2Fubm90IGJlIHBsYWNlZCBvZmYgdGhlIGJvYXJkJylcbiAgICB9XG4gICAgY29vcmRpbmF0ZXNEb05vdE92ZXJsYXAoc2hpcHMsIHNoaXBDb29yZGluYXRlcylcblxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG59XG5cblxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0ge1xuICAgICAgICBzaGlwczogW10sXG4gICAgICAgIG1pc3NlZEF0dGFja3M6IFtdLFxuICAgICAgICBhbGxTaGlwc1N1bmsoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IGdlbmVyYXRlU2hpcENvb3JkaW5hdGVzKHNoaXAsIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgdmFsaWRhdGVDb29yZGluYXRlcyh0aGlzLnNoaXBzLCBzaGlwLmNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApXG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgc2hpcEhpdCA9IGNoZWNrSGl0KGNvb3JkaW5hdGVzLCB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYoc2hpcEhpdCl7XG4gICAgICAgICAgICAgICAgc2hpcEhpdC5oaXQoY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZCIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnXG5cbmNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVCb2FyZCgpXG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkXG4gICAgXG4gICAgY29uc3QgYXR0YWNrID0gKGVuZW15Qm9hcmQsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpXG4gICAgfVxuICAgIHJldHVybiB7IGdldEJvYXJkLCBhdHRhY2sgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXIiLCJjb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHM6IFtdLFxuICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaXRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgaGl0KGNvb3JkaW5hdGUpe1xuICAgICAgICAgICAgaWYodGhpcy5oaXRzLmxlbmd0aCA8IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdHMucHVzaChjb29yZGluYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3RvcnkiLCJpbXBvcnQgY2FycmllckltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIwLnBuZydcbmltcG9ydCBjYXJyaWVyMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wMS5wbmcnXG5pbXBvcnQgY2FycmllcjIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDIucG5nJ1xuaW1wb3J0IGNhcnJpZXIzIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTAzLnBuZydcbmltcG9ydCBjYXJyaWVyNCBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wNC5wbmcnXG5pbXBvcnQgY2FycmllcjUgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDUucG5nJ1xuXG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTIxLnBuZydcbmltcG9ydCBiYXR0bGVzaGlwMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wNi5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcDIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMDcucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXAzIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTA4LnBuZydcbmltcG9ydCBiYXR0bGVzaGlwNCBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0wOS5wbmcnXG5cbmltcG9ydCBjcnVpc2VySW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjIucG5nJ1xuaW1wb3J0IGNydWlzZXIxIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXBzLTEwLnBuZydcbmltcG9ydCBjcnVpc2VyMiBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwcy0xMS5wbmcnXG5pbXBvcnQgY3J1aXNlcjMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTIucG5nJ1xuXG5pbXBvcnQgc3VibWFyaW5lSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjMucG5nJ1xuaW1wb3J0IHN1Ym1hcmluZTEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTMucG5nJ1xuaW1wb3J0IHN1Ym1hcmluZTIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTQucG5nJ1xuaW1wb3J0IHN1Ym1hcmluZTMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTUucG5nJ1xuXG5pbXBvcnQgZGVzdHJveWVySW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMjQucG5nJ1xuaW1wb3J0IGRlc3Ryb3llcjEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTgucG5nJ1xuaW1wb3J0IGRlc3Ryb3llcjIgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcHMtMTkucG5nJ1xuXG5pbXBvcnQgZXhwbG9zaW9uIGZyb20gJy4vaW1hZ2VzL2V4cGxvc2lvbi5wbmcnXG5cbmNvbnN0IGNhcnJpZXIgPSB7XG4gICAgbmFtZTogJ0NhcnJpZXInLFxuICAgIGxlbmd0aDogNSxcbiAgICBmdWxsSW1hZ2U6IGNhcnJpZXJJbWFnZSxcbiAgICBpbWFnZXM6IFtjYXJyaWVyMSwgY2FycmllcjIsIGNhcnJpZXIzLCBjYXJyaWVyNCwgY2FycmllcjVdXG59XG5cbmNvbnN0IGJhdHRsZXNoaXAgPSB7XG4gICAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBmdWxsSW1hZ2U6IGJhdHRsZXNoaXBJbWFnZSxcbiAgICBpbWFnZXM6IFtiYXR0bGVzaGlwMSwgYmF0dGxlc2hpcDIsIGJhdHRsZXNoaXAzLCBiYXR0bGVzaGlwNF1cbn1cblxuY29uc3QgY3J1aXNlciA9IHtcbiAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIGZ1bGxJbWFnZTogY3J1aXNlckltYWdlLFxuICAgIGltYWdlczogW2NydWlzZXIxLCBjcnVpc2VyMiwgY3J1aXNlcjNdXG59XG5cbmNvbnN0IHN1Ym1hcmluZSA9IHtcbiAgICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgZnVsbEltYWdlOiBzdWJtYXJpbmVJbWFnZSxcbiAgICBpbWFnZXM6IFtzdWJtYXJpbmUxLCBzdWJtYXJpbmUyLCBzdWJtYXJpbmUzXVxufVxuXG5jb25zdCBkZXN0cm95ZXIgPSB7XG4gICAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGZ1bGxJbWFnZTogZGVzdHJveWVySW1hZ2UsXG4gICAgaW1hZ2VzOiBbZGVzdHJveWVyMSwgZGVzdHJveWVyMl1cbn1cblxuY29uc3Qgc2hpcHMgPSBbXG4gICAgY2FycmllcixcbiAgICBiYXR0bGVzaGlwLFxuICAgIGNydWlzZXIsXG4gICAgc3VibWFyaW5lLFxuICAgIGRlc3Ryb3llclxuXVxuXG5jb25zdCBnZXRTaGlwSW1hZ2VzID0gKHNoaXBOYW1lKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpXG4gICAgcmV0dXJuIHNoaXAuaW1hZ2VzXG59XG5cbmNvbnN0IGdldEV4cGxvc2lvbkltYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiBleHBsb3Npb25cbn1cblxuZXhwb3J0IHtcbiAgICBzaGlwcyxcbiAgICBnZXRTaGlwSW1hZ2VzLFxuICAgIGdldEV4cGxvc2lvbkltYWdlXG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBcbiAgICBkcmF3R3JpZCwgXG4gICAgdXBkYXRlR3JpZCxcbiAgICB1cGRhdGVFdmVudExpc3RlbmVyc1xufSBmcm9tICcuL2xpYi9kaXNwbGF5J1xuaW1wb3J0IGdhbWVGYWN0b3J5IGZyb20gJy4vbGliL2dhbWUnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5kcmF3R3JpZCgpXG5kcmF3R3JpZCgnY29tcHV0ZXInKVxuXG5jb25zdCBnYW1lID0gZ2FtZUZhY3RvcnkoKTtcbmdhbWUuc2V0dXBHYW1lKClcbnVwZGF0ZUdyaWQoJ3BsYXllcicsIGdhbWUucGxheWVyMS5nZXRCb2FyZCgpKVxudXBkYXRlR3JpZCgnY29tcHV0ZXInLCBnYW1lLnBsYXllcjIuZ2V0Qm9hcmQoKSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==