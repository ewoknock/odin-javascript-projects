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
    --color-blue: #218be6;
    --color-primary: #F7F8FA;
    --font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --border-radius: 1rem;
    --box-shadow: 0px 2px 17px 5px rgba(0,0,0,0.12);


}

html{
    overflow-y: scroll;
    height: 100%;
    font-family: var(--font-family);
}

body{
    background-color: var(--color-primary);
    padding-bottom: 0.1rem;
}

main{
    display: flex;
    height: fit-content;
    width: 90%;
    margin: 3rem auto;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

#sidebar{
    background-color: var(--color-white);
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 260px;
    max-width: 360px;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    gap: 4rem;
}

.navHeader{
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-top: 2rem;
}

.navHeader img{
    height: 3rem;
}

.project-list{
    height: 90vh;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 3rem;
}

.project-link{
    cursor: pointer;
    padding: .5rem 1rem;
    border-radius: var(--border-radius);
    width: 100%;
}

.active,
.project-link:hover{
    background-color: var(--color-primary);
}

.container{
    height: fit-content;
    width: 100%;
    margin-top: 4rem;
    padding: 0 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.taskBtn{
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 4rem;
    background: transparent;
    background-color: var(--color-primary);
}



/*  DIALOG  */
dialog{
    margin: auto;
    padding: 1rem;
    width: 40%;
    border-radius: 2rem;
    border: none;
}

::backdrop {
    backdrop-filter: blur(5px);
}

#close-dialog-btn{
    position: absolute;
    top: .8rem;
    right: .8rem;
    background-color: white;
    color: red;
}

#close-dialog-btn:hover{
    background-color: var(--color-muted-grey);
}

/* FORM */

form,
.form-group{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: .2rem;
}

.form-group{
    gap: .3rem;
}

.form-group-description{
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.form-group input,
.form-group-description textarea{
    border: 2px solid var(--color-muted-grey);
    border-radius: 1rem;
    padding: .5rem 1rem;
    transition: all 200ms ease-in-out;
    outline: none;
}

input:focus{
    border-color: var(--color-blue);
}

/* BUTTONS */

.btn{
    background-color: var(--color-blue);
    color: white;
    border: none;
    border-radius: 1rem;
    padding: .5rem;
}

.collapse-button{
    color: var(--color-blue);
    border: none;
    border-radius: 2rem;
    background-color: var(--color-white);
    padding: .6rem;
    font-size: 1.5rem;
}

.collapse-button:hover,
.edit-button:hover{
    background-color: var(--color-primary);
}

.taskBtn{
    background-color: var(--color-primary) !important;
}

.edit-button{
    background-color: var(--color-white);
    border: none;
    border-radius: 2rem;
    padding: .5rem;
}

.edit-button img{
    width: 20px;
}

/*  TASK CARD   */
.tasks-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.card{
    background-color: var(--color-white);
    padding: 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.card-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
}

.card-content-details,
.card-content-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-content-details{
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,2BAA2B;IAC3B,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,wBAAwB;IACxB,kJAAkJ;IAClJ,qBAAqB;IACrB,+CAA+C;;;AAGnD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,sCAAsC;IACtC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,iBAAiB;IACjB,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;IACpC,OAAO;IACP,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,4DAA4D;IAC5D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,mCAAmC;IACnC,WAAW;AACf;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,sCAAsC;AAC1C;;;;AAIA,aAAa;AACb;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,SAAS;;AAET;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;IAEI,yCAAyC;IACzC,mBAAmB;IACnB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,+BAA+B;AACnC;;AAEA,YAAY;;AAEZ;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,mBAAmB;IACnB,oCAAoC;IACpC,cAAc;IACd,iBAAiB;AACrB;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,\n*::before,\n*::after{\n    box-sizing: border-box;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    --color-background: #323232;\n    --color-white: white;\n    --color-muted-grey: #efefef;\n    --color-grey: #323232;\n    --color-green: #00ca80;\n    --color-blue: #218be6;\n    --color-primary: #F7F8FA;\n    --font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --border-radius: 1rem;\n    --box-shadow: 0px 2px 17px 5px rgba(0,0,0,0.12);\n\n\n}\n\nhtml{\n    overflow-y: scroll;\n    height: 100%;\n    font-family: var(--font-family);\n}\n\nbody{\n    background-color: var(--color-primary);\n    padding-bottom: 0.1rem;\n}\n\nmain{\n    display: flex;\n    height: fit-content;\n    width: 90%;\n    margin: 3rem auto;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n}\n\n#sidebar{\n    background-color: var(--color-white);\n    flex: 1;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 260px;\n    max-width: 360px;\n    border-radius: var(--border-radius) 0 0 var(--border-radius);\n    gap: 4rem;\n}\n\n.navHeader{\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n    margin-top: 2rem;\n}\n\n.navHeader img{\n    height: 3rem;\n}\n\n.project-list{\n    height: 90vh;\n    width: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.2rem;\n    font-weight: 500;\n    padding: 0 3rem;\n}\n\n.project-link{\n    cursor: pointer;\n    padding: .5rem 1rem;\n    border-radius: var(--border-radius);\n    width: 100%;\n}\n\n.active,\n.project-link:hover{\n    background-color: var(--color-primary);\n}\n\n.container{\n    height: fit-content;\n    width: 100%;\n    margin-top: 4rem;\n    padding: 0 3.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\nnav{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.taskBtn{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 4rem;\n    background: transparent;\n    background-color: var(--color-primary);\n}\n\n\n\n/*  DIALOG  */\ndialog{\n    margin: auto;\n    padding: 1rem;\n    width: 40%;\n    border-radius: 2rem;\n    border: none;\n}\n\n::backdrop {\n    backdrop-filter: blur(5px);\n}\n\n#close-dialog-btn{\n    position: absolute;\n    top: .8rem;\n    right: .8rem;\n    background-color: white;\n    color: red;\n}\n\n#close-dialog-btn:hover{\n    background-color: var(--color-muted-grey);\n}\n\n/* FORM */\n\nform,\n.form-group{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    padding: .2rem;\n}\n\n.form-group{\n    gap: .3rem;\n}\n\n.form-group-description{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.form-group input,\n.form-group-description textarea{\n    border: 2px solid var(--color-muted-grey);\n    border-radius: 1rem;\n    padding: .5rem 1rem;\n    transition: all 200ms ease-in-out;\n    outline: none;\n}\n\ninput:focus{\n    border-color: var(--color-blue);\n}\n\n/* BUTTONS */\n\n.btn{\n    background-color: var(--color-blue);\n    color: white;\n    border: none;\n    border-radius: 1rem;\n    padding: .5rem;\n}\n\n.collapse-button{\n    color: var(--color-blue);\n    border: none;\n    border-radius: 2rem;\n    background-color: var(--color-white);\n    padding: .6rem;\n    font-size: 1.5rem;\n}\n\n.collapse-button:hover,\n.edit-button:hover{\n    background-color: var(--color-primary);\n}\n\n.taskBtn{\n    background-color: var(--color-primary) !important;\n}\n\n.edit-button{\n    background-color: var(--color-white);\n    border: none;\n    border-radius: 2rem;\n    padding: .5rem;\n}\n\n.edit-button img{\n    width: 20px;\n}\n\n/*  TASK CARD   */\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.card{\n    background-color: var(--color-white);\n    padding: 1rem;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n}\n\n.card-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: .5rem;\n}\n\n.card-content-details,\n.card-content-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.card-content-details{\n    display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/images/icons8-add-50.png":
/*!**************************************!*\
  !*** ./src/images/icons8-add-50.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f984c77950df81cf5e0318560c71b4e6.png");

/***/ }),

/***/ "./src/images/icons8-clipboard-64.png":
/*!********************************************!*\
  !*** ./src/images/icons8-clipboard-64.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "31f7f54db1800af7540f6d9803f7f569.png");

/***/ }),

/***/ "./src/images/icons8-edit-32.png":
/*!***************************************!*\
  !*** ./src/images/icons8-edit-32.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "641a4949a034919a71902e650637a086.png");

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

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blueMinus: () => (/* binding */ blueMinus),
/* harmony export */   bluePlus: () => (/* binding */ bluePlus),
/* harmony export */   loadPage: () => (/* binding */ loadPage),
/* harmony export */   populateDialog: () => (/* binding */ populateDialog)
/* harmony export */ });
/* harmony import */ var _images_icons8_add_50_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons8-add-50.png */ "./src/images/icons8-add-50.png");
/* harmony import */ var _images_icons8_edit_32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons8-edit-32.png */ "./src/images/icons8-edit-32.png");



const bluePlus = '\u2295';
const blueMinus = '\u2296';

const pageNav = (header) => {
  const nav = document.createElement('nav');

  const navHeader = document.createElement('h2');
  navHeader.innerText = header;

  const buttonIcon = new Image();
  buttonIcon.src = _images_icons8_add_50_png__WEBPACK_IMPORTED_MODULE_0__["default"];

  const newTaskDialog = document.getElementById('new-dialog');

  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('taskBtn');
  addTaskButton.id = 'new-task-button';
  addTaskButton.appendChild(buttonIcon);
  addTaskButton.addEventListener('click', () => {
    newTaskDialog.showModal();
  });

  nav.appendChild(navHeader);
  nav.appendChild(addTaskButton);

  return nav;
};

const createCardDetailInfo = (label, content) => {
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('card-content-detail-info');
  
    if (label !== '') {
      const containerLabel = document.createElement('p');
      containerLabel.innerHTML = `<strong>${label}</strong>`;
      detailContainer.appendChild(containerLabel);
    }
  
    const containerContent = document.createElement('p');
    containerContent.innerText = content;
  
    detailContainer.appendChild(containerContent);
  
    return detailContainer;
  };

const createCardHeader = (item) => {
  const cardContentHeader = document.createElement('div');
  cardContentHeader.classList.add('card-content-header');

  const completedContainer = document.createElement('input');
  completedContainer.setAttribute('data-index', item.id);
  completedContainer.classList.add('complete-checkbox');
  completedContainer.type = 'checkbox';
  completedContainer.checked = item.completed;

  const titleInfo = createCardDetailInfo('', item.title);

  const dateInfo = createCardDetailInfo('', item.dueDate);

  const expandButton = document.createElement('button');
  expandButton.classList.add('collapse-button');
  expandButton.id = 'expand-button';
  expandButton.textContent = bluePlus;

  cardContentHeader.appendChild(completedContainer);
  cardContentHeader.appendChild(titleInfo);
  cardContentHeader.appendChild(dateInfo);
  cardContentHeader.appendChild(expandButton);

  return cardContentHeader;
};

const createCardDetails = (item) => {
  const cardContentDetails = document.createElement('div');
  cardContentDetails.classList.add('card-content-details');

  const dateInfo = createCardDetailInfo('Due Date:', item.dueDate);
  const projectInfo = createCardDetailInfo('Project:', item.project);
  const descriptionInfo = createCardDetailInfo('Description:', item.description);

  const editIcon = new Image();
  editIcon.src = _images_icons8_edit_32_png__WEBPACK_IMPORTED_MODULE_1__["default"];

  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.id = 'edit-button';
  editButton.appendChild(editIcon);
  editButton.setAttribute('data-index', item.id);

  cardContentDetails.appendChild(dateInfo);
  cardContentDetails.appendChild(projectInfo);
  cardContentDetails.appendChild(descriptionInfo);
  cardContentDetails.appendChild(editButton);

  return cardContentDetails;
};

const createTaskCard = (item) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
  
    cardContent.appendChild(createCardHeader(item));
    cardContent.appendChild(createCardDetails(item));
  
    card.appendChild(cardContent);
  
    return card;
  };
  
const populateTasks = (arr) => {
  const tasks = document.createElement('section');
  tasks.classList.add('tasks-container');

  arr.forEach((item) => {
    tasks.appendChild(createTaskCard(item));
  });

  return tasks;
};

const loadPage = (title, arr) => {
    const main = document.querySelector('main');
  
    let content = document.querySelector('section');
  
    if (main.contains(content)) {
      content.innerHTML = '';
    } else {
      content = document.createElement('section');
      content.classList.add('container');
    }
  
    content.appendChild(pageNav(title));
  
    const tasks = populateTasks(arr);
  
    content.appendChild(tasks);
  
    main.appendChild(content);
  };

const populateDialog = (item) => {
  const form = document.querySelector('#edit-task-form');

  const hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.value = item.id;

  form.appendChild(hidden);

  const title = form.querySelector('#title');
  title.value = item.title;
  const date = form.querySelector('#date');
  date.value = item.dueDate;
  const project = form.querySelector('#project');
  project.value = item.project;
  const description = form.querySelector('#description');
  description.value = item.description;
};




/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_icons8_clipboard_64_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons8-clipboard-64.png */ "./src/images/icons8-clipboard-64.png");


const createNavHeader = () => {
    const navHeader = document.createElement('div');
    navHeader.classList.add('navHeader');
  
    const logo = new Image();
    logo.src = _images_icons8_clipboard_64_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  
    const header = document.createElement('h1');
    header.innerText = 'To Do\'s';
  
    navHeader.appendChild(logo);
    navHeader.appendChild(header);
  
    return navHeader;
  };

  const createProjectLink = (project) => {
    const listItem = document.createElement('li');
    listItem.classList.add('project-link');
    listItem.innerText = project;
  
    return listItem;
  };

  const createNavContent = (projects) => {
    const navContent = document.createElement('ul');
    navContent.classList.add('project-list');
    
    const home = document.createElement('li');
    home.classList.add('project-link');
    home.id = 'home';
    home.innerText = 'Home';
  
    navContent.appendChild(home);
  
    projects.forEach((project) => {
      navContent.appendChild(createProjectLink(project));
    });
  
    return navContent;
  };
  
const nav = (projects) => {
  const sideBar = document.createElement('aside');
  sideBar.id = 'sidebar';

  sideBar.appendChild(createNavHeader());
  sideBar.appendChild(createNavContent(projects));

  return sideBar;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);







/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterTasksByProject: () => (/* binding */ filterTasksByProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   setId: () => (/* binding */ setId),
/* harmony export */   taskFactory: () => (/* binding */ taskFactory),
/* harmony export */   toggleCompleted: () => (/* binding */ toggleCompleted)
/* harmony export */ });
const taskFactory = (title, description, dueDate, project, id) => ({
        title, 
        description, 
        dueDate, 
        project, 
        id,
        completed: false
    })

const setId = (arr, index) => {
    arr[index].id = index;   
}

const getProjects = (arr) => {
    const projects = arr.map(task => task.project);
    return projects.filter((project, index) => projects.indexOf(project) === index);
}

const toggleCompleted = (arr, index) => {
    console.log(arr);
    console.log(index);
    arr[index].completed = !arr[index].completed;   
}

const filterTasksByProject = (arr, project = "") => {
    const tasks = arr.filter(task => task.project === project);
    return tasks;
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
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const newTaskDialog = document.getElementById('new-dialog');
const editTaskDialog = document.getElementById('edit-dialog');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const newTaskForm = document.querySelector('#new-task-form');
const editTaskForm = document.querySelector('#edit-task-form');
const content = document.querySelector('body');

const main = document.createElement('main');
content.appendChild(main);
const navbar = (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getProjects)(tasks));
main.appendChild(navbar);


// const newTaskButton = document.getElementById('new-task-button');
const closeButtons = document.querySelectorAll('#close-dialog-btn');
const projectLinks = document.querySelectorAll('.project-link');

/*
newTaskButton.addEventListener('click', () => {
  newTaskDialog.showModal();
}); */

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    newTaskDialog.close();
    editTaskDialog.close();
  });
});


const setCollapseButtonListeners = () => {
    const collapseButtons = document.querySelectorAll('.collapse-button');
  
    collapseButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const div = button.parentElement.nextElementSibling;
        if (div.style.display === 'flex') {
            div.style.display = 'none';
          // eslint-disable-next-line no-param-reassign
          button.innerHTML = _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus;
        } else {
            div.style.display = 'flex';
          // eslint-disable-next-line no-param-reassign
          button.textContent = _display_controller__WEBPACK_IMPORTED_MODULE_1__.blueMinus;
        }
      });
    });
  };
  
  const setEditButtonListeners = () => {
    const editButtons = document.querySelectorAll('.edit-button');
  
    editButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const { index } = button.dataset;
        editTaskDialog.showModal();
        (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.populateDialog)(tasks[index]);
      });
    });
  };

  const setCompleteCheckboxListeners = () => {
    const completeCheckboxes = document.querySelectorAll('.complete-checkbox');

    completeCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
          const { index } = checkbox.dataset;
          (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.toggleCompleted)(tasks, index);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        });
      });
      
  }
  
const updateEventListeners = () => {
    setCollapseButtonListeners();
    setEditButtonListeners();
    setCompleteCheckboxListeners();
  };

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const project = document.getElementById('project').value;
  const description = document.getElementById('description').value;

  const newTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.taskFactory)(title, description, date, project, tasks.length);

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateEventListeners();

  newTaskForm.reset();
  newTaskDialog.close();
  (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.filterTasksByProject)(tasks, project), _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
  updateEventListeners();
});

editTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = event.target.querySelector('#title').value;
  const date = event.target.querySelector('#date').value;
  const project = event.target.querySelector('#project').value;
  const description = event.target.querySelector('#description').value;
  const index = document.querySelector('input[type = "hidden"]').value;

  const task = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.taskFactory)(title, description, date, project, index);

  tasks[index] = task;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateEventListeners();

  editTaskForm.reset();
  editTaskDialog.close();
  (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.filterTasksByProject)(tasks, project), _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
  updateEventListeners();
});

projectLinks.forEach((link) => {
  link.addEventListener(('click'), () => {
    const project = link.textContent;
    if (project === 'Home') {
      (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, tasks, _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
      updateEventListeners();
    } else {
      (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.filterTasksByProject)(tasks, project), _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
      updateEventListeners();
    }
  });
});

updateEventListeners();
(0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)('Home', tasks, _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUss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REFBZTtBQUN6QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtREFBVzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDZEQUFRLFVBQVUsNERBQW9CLGtCQUFrQix5REFBUTtBQUNsRTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsbURBQVc7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw2REFBUSxVQUFVLDREQUFvQixrQkFBa0IseURBQVE7QUFDbEU7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBUSxpQkFBaUIseURBQVE7QUFDdkM7QUFDQSxNQUFNO0FBQ04sTUFBTSw2REFBUSxVQUFVLDREQUFvQixrQkFBa0IseURBQVE7QUFDdEU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsNkRBQVEsZ0JBQWdCLHlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2ljb25zOC1hZGQtNTAucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2ljb25zOC1jbGlwYm9hcmQtNjQucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2ljb25zOC1lZGl0LTMyLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuOnJvb3R7XG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzIzMjMyO1xuICAgIC0tY29sb3Itd2hpdGU6IHdoaXRlO1xuICAgIC0tY29sb3ItbXV0ZWQtZ3JleTogI2VmZWZlZjtcbiAgICAtLWNvbG9yLWdyZXk6ICMzMjMyMzI7XG4gICAgLS1jb2xvci1ncmVlbjogIzAwY2E4MDtcbiAgICAtLWNvbG9yLWJsdWU6ICMyMThiZTY7XG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjdGOEZBO1xuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTdweCA1cHggcmdiYSgwLDAsMCwwLjEyKTtcblxuXG59XG5cbmh0bWx7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG59XG5cbm1haW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbiNzaWRlYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBnYXA6IDRyZW07XG59XG5cbi5uYXZIZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm5hdkhlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuXG4ucHJvamVjdC1saXN0e1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuLnByb2plY3QtbGlua3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZSxcbi5wcm9qZWN0LWxpbms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jb250YWluZXJ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIHBhZGRpbmc6IDAgMy41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG59XG5cbm5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFza0J0bntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cblxuXG4vKiAgRElBTE9HICAqL1xuZGlhbG9ne1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbjo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4jY2xvc2UtZGlhbG9nLWJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuOHJlbTtcbiAgICByaWdodDogLjhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuI2Nsb3NlLWRpYWxvZy1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XG59XG5cbi8qIEZPUk0gKi9cblxuZm9ybSxcbi5mb3JtLWdyb3Vwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtO1xuICAgIHBhZGRpbmc6IC4ycmVtO1xufVxuXG4uZm9ybS1ncm91cHtcbiAgICBnYXA6IC4zcmVtO1xufVxuXG4uZm9ybS1ncm91cC1kZXNjcmlwdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsXG4uZm9ybS1ncm91cC1kZXNjcmlwdGlvbiB0ZXh0YXJlYXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1tdXRlZC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG5cbi8qIEJVVFRPTlMgKi9cblxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG59XG5cbi5jb2xsYXBzZS1idXR0b257XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAuNnJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbGxhcHNlLWJ1dHRvbjpob3Zlcixcbi5lZGl0LWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnRhc2tCdG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuLmVkaXQtYnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLyogIFRBU0sgQ0FSRCAgICovXG4udGFza3MtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4uY2FyZC1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLmNhcmQtY29udGVudC1kZXRhaWxzLFxuLmNhcmQtY29udGVudC1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtY29udGVudC1kZXRhaWxze1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGtKQUFrSjtJQUNsSixxQkFBcUI7SUFDckIsK0NBQStDOzs7QUFHbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxPQUFPO0lBQ1AsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNERBQTREO0lBQzVELFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0NBQXNDO0FBQzFDOzs7O0FBSUEsYUFBYTtBQUNiO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBLFNBQVM7O0FBRVQ7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBOztJQUVJLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290e1xcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICMzMjMyMzI7XFxuICAgIC0tY29sb3Itd2hpdGU6IHdoaXRlO1xcbiAgICAtLWNvbG9yLW11dGVkLWdyZXk6ICNlZmVmZWY7XFxuICAgIC0tY29sb3ItZ3JleTogIzMyMzIzMjtcXG4gICAgLS1jb2xvci1ncmVlbjogIzAwY2E4MDtcXG4gICAgLS1jb2xvci1ibHVlOiAjMjE4YmU2O1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNGN0Y4RkE7XFxuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC0tYm94LXNoYWRvdzogMHB4IDJweCAxN3B4IDVweCByZ2JhKDAsMCwwLDAuMTIpO1xcblxcblxcbn1cXG5cXG5odG1se1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjYwcHg7XFxuICAgIG1heC13aWR0aDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ubmF2SGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubmF2SGVhZGVyIGltZ3tcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0e1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saW5re1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjdGl2ZSxcXG4ucHJvamVjdC1saW5rOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIHBhZGRpbmc6IDAgMy41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0J0bntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcblxcblxcbi8qICBESUFMT0cgICovXFxuZGlhbG9ne1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4jY2xvc2UtZGlhbG9nLWJ0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC44cmVtO1xcbiAgICByaWdodDogLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jY2xvc2UtZGlhbG9nLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XFxufVxcblxcbi8qIEZPUk0gKi9cXG5cXG5mb3JtLFxcbi5mb3JtLWdyb3Vwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXB7XFxuICAgIGdhcDogLjNyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBpbnB1dCxcXG4uZm9ybS1ncm91cC1kZXNjcmlwdGlvbiB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG5cXG4uYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uY29sbGFwc2UtYnV0dG9ue1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb2xsYXBzZS1idXR0b246aG92ZXIsXFxuLmVkaXQtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2tCdG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5lZGl0LWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uZWRpdC1idXR0b24gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLyogIFRBU0sgQ0FSRCAgICovXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbi5jYXJkLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmNhcmQtY29udGVudC1kZXRhaWxzLFxcbi5jYXJkLWNvbnRlbnQtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQtZGV0YWlsc3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjk4NGM3Nzk1MGRmODFjZjVlMDMxODU2MGM3MWI0ZTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxZjdmNTRkYjE4MDBhZjc1NDBmNmQ5ODAzZjdmNTY5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NDFhNDk0OWEwMzQ5MTlhNzE5MDJlNjUwNjM3YTA4Ni5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBZGRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1hZGQtNTAucG5nJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2ltYWdlcy9pY29uczgtZWRpdC0zMi5wbmcnO1xuXG5jb25zdCBibHVlUGx1cyA9ICdcXHUyMjk1JztcbmNvbnN0IGJsdWVNaW51cyA9ICdcXHUyMjk2JztcblxuY29uc3QgcGFnZU5hdiA9IChoZWFkZXIpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbmF2SGVhZGVyLmlubmVyVGV4dCA9IGhlYWRlcjtcblxuICBjb25zdCBidXR0b25JY29uID0gbmV3IEltYWdlKCk7XG4gIGJ1dHRvbkljb24uc3JjID0gQWRkSWNvbjtcblxuICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1kaWFsb2cnKTtcblxuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFza0J0bicpO1xuICBhZGRUYXNrQnV0dG9uLmlkID0gJ25ldy10YXNrLWJ1dHRvbic7XG4gIGFkZFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSWNvbik7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdkhlYWRlcik7XG4gIG5hdi5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICByZXR1cm4gbmF2O1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZERldGFpbEluZm8gPSAobGFiZWwsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBkZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50LWRldGFpbC1pbmZvJyk7XG4gIFxuICAgIGlmIChsYWJlbCAhPT0gJycpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29udGFpbmVyTGFiZWwuaW5uZXJIVE1MID0gYDxzdHJvbmc+JHtsYWJlbH08L3N0cm9uZz5gO1xuICAgICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxhYmVsKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGNvbnRhaW5lckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFpbmVyQ29udGVudC5pbm5lclRleHQgPSBjb250ZW50O1xuICBcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ29udGVudCk7XG4gIFxuICAgIHJldHVybiBkZXRhaWxDb250YWluZXI7XG4gIH07XG5cbmNvbnN0IGNyZWF0ZUNhcmRIZWFkZXIgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBjYXJkQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQ29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQtaGVhZGVyJyk7XG5cbiAgY29uc3QgY29tcGxldGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29tcGxldGVkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGl0ZW0uaWQpO1xuICBjb21wbGV0ZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtY2hlY2tib3gnKTtcbiAgY29tcGxldGVkQ29udGFpbmVyLnR5cGUgPSAnY2hlY2tib3gnO1xuICBjb21wbGV0ZWRDb250YWluZXIuY2hlY2tlZCA9IGl0ZW0uY29tcGxldGVkO1xuXG4gIGNvbnN0IHRpdGxlSW5mbyA9IGNyZWF0ZUNhcmREZXRhaWxJbmZvKCcnLCBpdGVtLnRpdGxlKTtcblxuICBjb25zdCBkYXRlSW5mbyA9IGNyZWF0ZUNhcmREZXRhaWxJbmZvKCcnLCBpdGVtLmR1ZURhdGUpO1xuXG4gIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UtYnV0dG9uJyk7XG4gIGV4cGFuZEJ1dHRvbi5pZCA9ICdleHBhbmQtYnV0dG9uJztcbiAgZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gYmx1ZVBsdXM7XG5cbiAgY2FyZENvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkQ29udGFpbmVyKTtcbiAgY2FyZENvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVJbmZvKTtcbiAgY2FyZENvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0ZUluZm8pO1xuICBjYXJkQ29udGVudEhlYWRlci5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXG4gIHJldHVybiBjYXJkQ29udGVudEhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmREZXRhaWxzID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgY2FyZENvbnRlbnREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRDb250ZW50RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQtZGV0YWlscycpO1xuXG4gIGNvbnN0IGRhdGVJbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oJ0R1ZSBEYXRlOicsIGl0ZW0uZHVlRGF0ZSk7XG4gIGNvbnN0IHByb2plY3RJbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oJ1Byb2plY3Q6JywgaXRlbS5wcm9qZWN0KTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oJ0Rlc2NyaXB0aW9uOicsIGl0ZW0uZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLnNyYyA9IEVkaXRJY29uO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuICBlZGl0QnV0dG9uLmlkID0gJ2VkaXQtYnV0dG9uJztcbiAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaXRlbS5pZCk7XG5cbiAgY2FyZENvbnRlbnREZXRhaWxzLmFwcGVuZENoaWxkKGRhdGVJbmZvKTtcbiAgY2FyZENvbnRlbnREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcbiAgY2FyZENvbnRlbnREZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5mbyk7XG4gIGNhcmRDb250ZW50RGV0YWlscy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICByZXR1cm4gY2FyZENvbnRlbnREZXRhaWxzO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0NhcmQgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgXG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQnKTtcbiAgXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZEhlYWRlcihpdGVtKSk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZERldGFpbHMoaXRlbSkpO1xuICBcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH07XG4gIFxuY29uc3QgcG9wdWxhdGVUYXNrcyA9IChhcnIpID0+IHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWNvbnRhaW5lcicpO1xuXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0NhcmQoaXRlbSkpO1xuICB9KTtcblxuICByZXR1cm4gdGFza3M7XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9ICh0aXRsZSwgYXJyKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gIFxuICAgIGlmIChtYWluLmNvbnRhaW5zKGNvbnRlbnQpKSB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICB9XG4gIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZU5hdih0aXRsZSkpO1xuICBcbiAgICBjb25zdCB0YXNrcyA9IHBvcHVsYXRlVGFza3MoYXJyKTtcbiAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIH07XG5cbmNvbnN0IHBvcHVsYXRlRGlhbG9nID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZm9ybScpO1xuXG4gIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGhpZGRlbi50eXBlID0gJ2hpZGRlbic7XG4gIGhpZGRlbi52YWx1ZSA9IGl0ZW0uaWQ7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChoaWRkZW4pO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgdGl0bGUudmFsdWUgPSBpdGVtLnRpdGxlO1xuICBjb25zdCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuICBkYXRlLnZhbHVlID0gaXRlbS5kdWVEYXRlO1xuICBjb25zdCBwcm9qZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBwcm9qZWN0LnZhbHVlID0gaXRlbS5wcm9qZWN0O1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvbjtcbn07XG5cbmV4cG9ydCB7XG4gIGxvYWRQYWdlLCBibHVlUGx1cywgYmx1ZU1pbnVzLCBwb3B1bGF0ZURpYWxvZyxcbn07XG4iLCJpbXBvcnQgdG9kb0xvZ28gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LWNsaXBib2FyZC02NC5wbmcnO1xuXG5jb25zdCBjcmVhdGVOYXZIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25hdkhlYWRlcicpO1xuICBcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5zcmMgPSB0b2RvTG9nbztcbiAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1RvIERvXFwncyc7XG4gIFxuICAgIG5hdkhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXZIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgXG4gICAgcmV0dXJuIG5hdkhlYWRlcjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0TGluayA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluaycpO1xuICAgIGxpc3RJdGVtLmlubmVyVGV4dCA9IHByb2plY3Q7XG4gIFxuICAgIHJldHVybiBsaXN0SXRlbTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOYXZDb250ZW50ID0gKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgbmF2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICBcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGluaycpO1xuICAgIGhvbWUuaWQgPSAnaG9tZSc7XG4gICAgaG9tZS5pbm5lclRleHQgPSAnSG9tZSc7XG4gIFxuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIFxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdExpbmsocHJvamVjdCkpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gbmF2Q29udGVudDtcbiAgfTtcbiAgXG5jb25zdCBuYXYgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gIHNpZGVCYXIuaWQgPSAnc2lkZWJhcic7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZChjcmVhdGVOYXZIZWFkZXIoKSk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2Q29udGVudChwcm9qZWN0cykpO1xuXG4gIHJldHVybiBzaWRlQmFyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2O1xuXG5cblxuXG5cbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgaWQpID0+ICh7XG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgZGVzY3JpcHRpb24sIFxuICAgICAgICBkdWVEYXRlLCBcbiAgICAgICAgcHJvamVjdCwgXG4gICAgICAgIGlkLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSlcblxuY29uc3Qgc2V0SWQgPSAoYXJyLCBpbmRleCkgPT4ge1xuICAgIGFycltpbmRleF0uaWQgPSBpbmRleDsgICBcbn1cblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoYXJyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBhcnIubWFwKHRhc2sgPT4gdGFzay5wcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSA9PT0gaW5kZXgpO1xufVxuXG5jb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoYXJyLCBpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIGFycltpbmRleF0uY29tcGxldGVkID0gIWFycltpbmRleF0uY29tcGxldGVkOyAgIFxufVxuXG5jb25zdCBmaWx0ZXJUYXNrc0J5UHJvamVjdCA9IChhcnIsIHByb2plY3QgPSBcIlwiKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBhcnIuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0KTtcbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5LCBnZXRQcm9qZWN0cywgdG9nZ2xlQ29tcGxldGVkLCBmaWx0ZXJUYXNrc0J5UHJvamVjdCwgc2V0SWQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCB7XG4gIGxvYWRQYWdlLFxuICBibHVlUGx1cyxcbiAgYmx1ZU1pbnVzLFxuICBwb3B1bGF0ZURpYWxvZyxcbn0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2xsZXInO1xuaW1wb3J0IHtcbiAgdGFza0ZhY3RvcnksIHRvZ2dsZUNvbXBsZXRlZCwgZ2V0UHJvamVjdHMsIGZpbHRlclRhc2tzQnlQcm9qZWN0LFxufSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1kaWFsb2cnKTtcbmNvbnN0IGVkaXRUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGlhbG9nJyk7XG5jb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbmNvbnN0IG5hdmJhciA9IG5hdihnZXRQcm9qZWN0cyh0YXNrcykpO1xubWFpbi5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG5cbi8vIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stYnV0dG9uJyk7XG5jb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2xvc2UtZGlhbG9nLWJ0bicpO1xuY29uc3QgcHJvamVjdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGluaycpO1xuXG4vKlxubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbmV3VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbn0pOyAqL1xuXG5jbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUYXNrRGlhbG9nLmNsb3NlKCk7XG4gICAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59KTtcblxuXG5jb25zdCBzZXRDb2xsYXBzZUJ1dHRvbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsYXBzZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGFwc2UtYnV0dG9uJyk7XG4gIFxuICAgIGNvbGxhcHNlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gYnV0dG9uLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBpZiAoZGl2LnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGJsdWVQbHVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYmx1ZU1pbnVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgXG4gIGNvbnN0IHNldEVkaXRCdXR0b25MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgXG4gICAgZWRpdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGJ1dHRvbi5kYXRhc2V0O1xuICAgICAgICBlZGl0VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgcG9wdWxhdGVEaWFsb2codGFza3NbaW5kZXhdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldENvbXBsZXRlQ2hlY2tib3hMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlLWNoZWNrYm94Jyk7XG5cbiAgICBjb21wbGV0ZUNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gY2hlY2tib3guZGF0YXNldDtcbiAgICAgICAgICB0b2dnbGVDb21wbGV0ZWQodGFza3MsIGluZGV4KTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgXG4gIH1cbiAgXG5jb25zdCB1cGRhdGVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzZXRDb2xsYXBzZUJ1dHRvbkxpc3RlbmVycygpO1xuICAgIHNldEVkaXRCdXR0b25MaXN0ZW5lcnMoKTtcbiAgICBzZXRDb21wbGV0ZUNoZWNrYm94TGlzdGVuZXJzKCk7XG4gIH07XG5cbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcblxuICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0LCB0YXNrcy5sZW5ndGgpO1xuXG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcbiAgbmV3VGFza0RpYWxvZy5jbG9zZSgpO1xuICBsb2FkUGFnZShwcm9qZWN0LCBmaWx0ZXJUYXNrc0J5UHJvamVjdCh0YXNrcywgcHJvamVjdCksIGJsdWVQbHVzKTtcbiAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcbn0pO1xuXG5lZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGl0bGUgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlID0gXCJoaWRkZW5cIl0nKS52YWx1ZTtcblxuICBjb25zdCB0YXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0LCBpbmRleCk7XG5cbiAgdGFza3NbaW5kZXhdID0gdGFzaztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICBlZGl0VGFza0Zvcm0ucmVzZXQoKTtcbiAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgbG9hZFBhZ2UocHJvamVjdCwgZmlsdGVyVGFza3NCeVByb2plY3QodGFza3MsIHByb2plY3QpLCBibHVlUGx1cyk7XG4gIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG59KTtcblxucHJvamVjdExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCgnY2xpY2snKSwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBsaW5rLnRleHRDb250ZW50O1xuICAgIGlmIChwcm9qZWN0ID09PSAnSG9tZScpIHtcbiAgICAgIGxvYWRQYWdlKHByb2plY3QsIHRhc2tzLCBibHVlUGx1cyk7XG4gICAgICB1cGRhdGVFdmVudExpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkUGFnZShwcm9qZWN0LCBmaWx0ZXJUYXNrc0J5UHJvamVjdCh0YXNrcywgcHJvamVjdCksIGJsdWVQbHVzKTtcbiAgICAgIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG51cGRhdGVFdmVudExpc3RlbmVycygpO1xubG9hZFBhZ2UoJ0hvbWUnLCB0YXNrcywgYmx1ZVBsdXMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9