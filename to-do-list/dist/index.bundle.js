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
}

main{
    display: flex;
    height: 90vh;
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
    height: 90vh;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,2BAA2B;IAC3B,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,wBAAwB;IACxB,kJAAkJ;IAClJ,qBAAqB;IACrB,+CAA+C;;;AAGnD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;IACpC,OAAO;IACP,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,4DAA4D;IAC5D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,mCAAmC;IACnC,WAAW;AACf;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,sCAAsC;AAC1C;;;;AAIA,aAAa;AACb;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,SAAS;;AAET;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;IAEI,yCAAyC;IACzC,mBAAmB;IACnB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,+BAA+B;AACnC;;AAEA,YAAY;;AAEZ;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,mBAAmB;IACnB,oCAAoC;IACpC,cAAc;IACd,iBAAiB;AACrB;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,\n*::before,\n*::after{\n    box-sizing: border-box;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    --color-background: #323232;\n    --color-white: white;\n    --color-muted-grey: #efefef;\n    --color-grey: #323232;\n    --color-green: #00ca80;\n    --color-blue: #218be6;\n    --color-primary: #F7F8FA;\n    --font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --border-radius: 1rem;\n    --box-shadow: 0px 2px 17px 5px rgba(0,0,0,0.12);\n\n\n}\n\nhtml{\n    overflow-y: scroll;\n    height: 100%;\n    font-family: var(--font-family);\n}\n\nbody{\n    background-color: var(--color-primary);\n}\n\nmain{\n    display: flex;\n    height: 90vh;\n    width: 90%;\n    margin: 3rem auto;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n}\n\n#sidebar{\n    background-color: var(--color-white);\n    flex: 1;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 260px;\n    max-width: 360px;\n    border-radius: var(--border-radius) 0 0 var(--border-radius);\n    gap: 4rem;\n}\n\n.navHeader{\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n    margin-top: 2rem;\n}\n\n.navHeader img{\n    height: 3rem;\n}\n\n.project-list{\n    height: 90vh;\n    width: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.2rem;\n    font-weight: 500;\n    padding: 0 3rem;\n}\n\n.project-link{\n    cursor: pointer;\n    padding: .5rem 1rem;\n    border-radius: var(--border-radius);\n    width: 100%;\n}\n\n.active,\n.project-link:hover{\n    background-color: var(--color-primary);\n}\n\n.container{\n    height: 90vh;\n    width: 100%;\n    margin-top: 4rem;\n    padding: 0 3.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\nnav{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.taskBtn{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 4rem;\n    background: transparent;\n    background-color: var(--color-primary);\n}\n\n\n\n/*  DIALOG  */\ndialog{\n    margin: auto;\n    padding: 1rem;\n    width: 40%;\n    border-radius: 2rem;\n    border: none;\n}\n\n::backdrop {\n    backdrop-filter: blur(5px);\n}\n\n#close-dialog-btn{\n    position: absolute;\n    top: .8rem;\n    right: .8rem;\n    background-color: white;\n    color: red;\n}\n\n#close-dialog-btn:hover{\n    background-color: var(--color-muted-grey);\n}\n\n/* FORM */\n\nform,\n.form-group{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    padding: .2rem;\n}\n\n.form-group{\n    gap: .3rem;\n}\n\n.form-group-description{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.form-group input,\n.form-group-description textarea{\n    border: 2px solid var(--color-muted-grey);\n    border-radius: 1rem;\n    padding: .5rem 1rem;\n    transition: all 200ms ease-in-out;\n    outline: none;\n}\n\ninput:focus{\n    border-color: var(--color-blue);\n}\n\n/* BUTTONS */\n\n.btn{\n    background-color: var(--color-blue);\n    color: white;\n    border: none;\n    border-radius: 1rem;\n    padding: .5rem;\n}\n\n.collapse-button{\n    color: var(--color-blue);\n    border: none;\n    border-radius: 2rem;\n    background-color: var(--color-white);\n    padding: .6rem;\n    font-size: 1.5rem;\n}\n\n.collapse-button:hover,\n.edit-button:hover{\n    background-color: var(--color-primary);\n}\n\n.taskBtn{\n    background-color: var(--color-primary) !important;\n}\n\n.edit-button{\n    background-color: var(--color-white);\n    border: none;\n    border-radius: 2rem;\n    padding: .5rem;\n}\n\n.edit-button img{\n    width: 20px;\n}\n\n/*  TASK CARD   */\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.card{\n    background-color: var(--color-white);\n    padding: 1rem;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n}\n\n.card-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: .5rem;\n}\n\n.card-content-details,\n.card-content-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.card-content-details{\n    display: none;\n}"],"sourceRoot":""}]);
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

  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('taskBtn');
  addTaskButton.id = 'new-task-button';
  addTaskButton.appendChild(buttonIcon);

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
  
    console.log(projects);
  
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

(0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)('Home', tasks, _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);

const newTaskButton = document.getElementById('new-task-button');
const closeButtons = document.querySelectorAll('#close-dialog-btn');
const projectLinks = document.querySelectorAll('.project-link');


newTaskButton.addEventListener('click', () => {
  newTaskDialog.showModal();
});

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8s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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLc0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVFQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXdCO0FBTU07QUFHYjtBQUNJOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSxnREFBRyxDQUFDLG1EQUFXO0FBQzlCOztBQUVBLDZEQUFRLGdCQUFnQix5REFBUTs7QUFFaEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseURBQVE7QUFDckMsVUFBVTtBQUNWO0FBQ0E7QUFDQSwrQkFBK0IsMERBQVM7QUFDeEM7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQSxRQUFRLG1FQUFjO0FBQ3RCLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsVUFBVSx1REFBZTtBQUN6QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtREFBVzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDZEQUFRLFVBQVUsNERBQW9CLGtCQUFrQix5REFBUTtBQUNsRTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsbURBQVc7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw2REFBUSxVQUFVLDREQUFvQixrQkFBa0IseURBQVE7QUFDbEU7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBUSxpQkFBaUIseURBQVE7QUFDdkM7QUFDQSxNQUFNO0FBQ04sTUFBTSw2REFBUSxVQUFVLDREQUFvQixrQkFBa0IseURBQVE7QUFDdEU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2ljb25zOC1hZGQtNTAucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2ljb25zOC1jbGlwYm9hcmQtNjQucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2ljb25zOC1lZGl0LTMyLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuOnJvb3R7XG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzIzMjMyO1xuICAgIC0tY29sb3Itd2hpdGU6IHdoaXRlO1xuICAgIC0tY29sb3ItbXV0ZWQtZ3JleTogI2VmZWZlZjtcbiAgICAtLWNvbG9yLWdyZXk6ICMzMjMyMzI7XG4gICAgLS1jb2xvci1ncmVlbjogIzAwY2E4MDtcbiAgICAtLWNvbG9yLWJsdWU6ICMyMThiZTY7XG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjdGOEZBO1xuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTdweCA1cHggcmdiYSgwLDAsMCwwLjEyKTtcblxuXG59XG5cbmh0bWx7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG5tYWlue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbiNzaWRlYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBnYXA6IDRyZW07XG59XG5cbi5uYXZIZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm5hdkhlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuXG4ucHJvamVjdC1saXN0e1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuLnByb2plY3QtbGlua3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZSxcbi5wcm9qZWN0LWxpbms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jb250YWluZXJ7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgcGFkZGluZzogMCAzLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbn1cblxubmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrQnRue1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG5cbi8qICBESUFMT0cgICovXG5kaWFsb2d7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuOjpiYWNrZHJvcCB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbiNjbG9zZS1kaWFsb2ctYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC44cmVtO1xuICAgIHJpZ2h0OiAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4jY2xvc2UtZGlhbG9nLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZC1ncmV5KTtcbn1cblxuLyogRk9STSAqL1xuXG5mb3JtLFxuLmZvcm0tZ3JvdXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogLjVyZW07XG4gICAgcGFkZGluZzogLjJyZW07XG59XG5cbi5mb3JtLWdyb3Vwe1xuICAgIGdhcDogLjNyZW07XG59XG5cbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCxcbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9uIHRleHRhcmVhe1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW11dGVkLWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbn1cblxuLyogQlVUVE9OUyAqL1xuXG4uYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuLmNvbGxhcHNlLWJ1dHRvbntcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIHBhZGRpbmc6IC42cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY29sbGFwc2UtYnV0dG9uOmhvdmVyLFxuLmVkaXQtYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGFza0J0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xufVxuXG4uZWRpdC1idXR0b24gaW1ne1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4vKiAgVEFTSyBDQVJEICAgKi9cbi50YXNrcy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4uY2FyZC1jb250ZW50LWRldGFpbHMsXG4uY2FyZC1jb250ZW50LWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC1jb250ZW50LWRldGFpbHN7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0pBQWtKO0lBQ2xKLHFCQUFxQjtJQUNyQiwrQ0FBK0M7OztBQUduRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsT0FBTztJQUNQLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDREQUE0RDtJQUM1RCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztBQUMxQzs7OztBQUlBLGFBQWE7QUFDYjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQSxTQUFTOztBQUVUOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzIzMjMyO1xcbiAgICAtLWNvbG9yLXdoaXRlOiB3aGl0ZTtcXG4gICAgLS1jb2xvci1tdXRlZC1ncmV5OiAjZWZlZmVmO1xcbiAgICAtLWNvbG9yLWdyZXk6ICMzMjMyMzI7XFxuICAgIC0tY29sb3ItZ3JlZW46ICMwMGNhODA7XFxuICAgIC0tY29sb3ItYmx1ZTogIzIxOGJlNjtcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjdGOEZBO1xcbiAgICAtLWZvbnQtZmFtaWx5OiAnTGF0bycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTdweCA1cHggcmdiYSgwLDAsMCwwLjEyKTtcXG5cXG5cXG59XFxuXFxuaHRtbHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjYwcHg7XFxuICAgIG1heC13aWR0aDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ubmF2SGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubmF2SGVhZGVyIGltZ3tcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0e1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saW5re1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjdGl2ZSxcXG4ucHJvamVjdC1saW5rOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgcGFkZGluZzogMCAzLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxubmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQnRue1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuXFxuXFxuLyogIERJQUxPRyAgKi9cXG5kaWFsb2d7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbiNjbG9zZS1kaWFsb2ctYnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLjhyZW07XFxuICAgIHJpZ2h0OiAuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNjbG9zZS1kaWFsb2ctYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZC1ncmV5KTtcXG59XFxuXFxuLyogRk9STSAqL1xcblxcbmZvcm0sXFxuLmZvcm0tZ3JvdXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcbn1cXG5cXG4uZm9ybS1ncm91cHtcXG4gICAgZ2FwOiAuM3JlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAtZGVzY3JpcHRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwIGlucHV0LFxcbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9uIHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1tdXRlZC1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLyogQlVUVE9OUyAqL1xcblxcbi5idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5jb2xsYXBzZS1idXR0b257XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IC42cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNvbGxhcHNlLWJ1dHRvbjpob3ZlcixcXG4uZWRpdC1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udGFza0J0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmVkaXQtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5lZGl0LWJ1dHRvbiBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4vKiAgVEFTSyBDQVJEICAgKi9cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG59XFxuXFxuLmNhcmQtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uY2FyZC1jb250ZW50LWRldGFpbHMsXFxuLmNhcmQtY29udGVudC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY29udGVudC1kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOTg0Yzc3OTUwZGY4MWNmNWUwMzE4NTYwYzcxYjRlNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzFmN2Y1NGRiMTgwMGFmNzU0MGY2ZDk4MDNmN2Y1NjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0MWE0OTQ5YTAzNDkxOWE3MTkwMmU2NTA2MzdhMDg2LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFkZEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LWFkZC01MC5wbmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1lZGl0LTMyLnBuZyc7XG5cbmNvbnN0IGJsdWVQbHVzID0gJ1xcdTIyOTUnO1xuY29uc3QgYmx1ZU1pbnVzID0gJ1xcdTIyOTYnO1xuXG5jb25zdCBwYWdlTmF2ID0gKGhlYWRlcikgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICBjb25zdCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuYXZIZWFkZXIuaW5uZXJUZXh0ID0gaGVhZGVyO1xuXG4gIGNvbnN0IGJ1dHRvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYnV0dG9uSWNvbi5zcmMgPSBBZGRJY29uO1xuXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQnRuJyk7XG4gIGFkZFRhc2tCdXR0b24uaWQgPSAnbmV3LXRhc2stYnV0dG9uJztcbiAgYWRkVGFza0J1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JY29uKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQobmF2SGVhZGVyKTtcbiAgbmF2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gIHJldHVybiBuYXY7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkRGV0YWlsSW5mbyA9IChsYWJlbCwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGRldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQtZGV0YWlsLWluZm8nKTtcbiAgXG4gICAgaWYgKGxhYmVsICE9PSAnJykge1xuICAgICAgY29uc3QgY29udGFpbmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb250YWluZXJMYWJlbC5pbm5lckhUTUwgPSBgPHN0cm9uZz4ke2xhYmVsfTwvc3Ryb25nPmA7XG4gICAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyTGFiZWwpO1xuICAgIH1cbiAgXG4gICAgY29uc3QgY29udGFpbmVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWluZXJDb250ZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gIFxuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDb250ZW50KTtcbiAgXG4gICAgcmV0dXJuIGRldGFpbENvbnRhaW5lcjtcbiAgfTtcblxuY29uc3QgY3JlYXRlQ2FyZEhlYWRlciA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGNhcmRDb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRDb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudC1oZWFkZXInKTtcblxuICBjb25zdCBjb21wbGV0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb21wbGV0ZWRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaXRlbS5pZCk7XG4gIGNvbXBsZXRlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1jaGVja2JveCcpO1xuICBjb21wbGV0ZWRDb250YWluZXIudHlwZSA9ICdjaGVja2JveCc7XG4gIGNvbXBsZXRlZENvbnRhaW5lci5jaGVja2VkID0gaXRlbS5jb21wbGV0ZWQ7XG5cbiAgY29uc3QgdGl0bGVJbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oJycsIGl0ZW0udGl0bGUpO1xuXG4gIGNvbnN0IGRhdGVJbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oJycsIGl0ZW0uZHVlRGF0ZSk7XG5cbiAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZS1idXR0b24nKTtcbiAgZXhwYW5kQnV0dG9uLmlkID0gJ2V4cGFuZC1idXR0b24nO1xuICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSBibHVlUGx1cztcblxuICBjYXJkQ29udGVudEhlYWRlci5hcHBlbmRDaGlsZChjb21wbGV0ZWRDb250YWluZXIpO1xuICBjYXJkQ29udGVudEhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUluZm8pO1xuICBjYXJkQ29udGVudEhlYWRlci5hcHBlbmRDaGlsZChkYXRlSW5mbyk7XG4gIGNhcmRDb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cbiAgcmV0dXJuIGNhcmRDb250ZW50SGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZERldGFpbHMgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBjYXJkQ29udGVudERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZENvbnRlbnREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudC1kZXRhaWxzJyk7XG5cbiAgY29uc3QgZGF0ZUluZm8gPSBjcmVhdGVDYXJkRGV0YWlsSW5mbygnRHVlIERhdGU6JywgaXRlbS5kdWVEYXRlKTtcbiAgY29uc3QgcHJvamVjdEluZm8gPSBjcmVhdGVDYXJkRGV0YWlsSW5mbygnUHJvamVjdDonLCBpdGVtLnByb2plY3QpO1xuICBjb25zdCBkZXNjcmlwdGlvbkluZm8gPSBjcmVhdGVDYXJkRGV0YWlsSW5mbygnRGVzY3JpcHRpb246JywgaXRlbS5kZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEljb24uc3JjID0gRWRpdEljb247XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG4gIGVkaXRCdXR0b24uaWQgPSAnZWRpdC1idXR0b24nO1xuICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpdGVtLmlkKTtcblxuICBjYXJkQ29udGVudERldGFpbHMuYXBwZW5kQ2hpbGQoZGF0ZUluZm8pO1xuICBjYXJkQ29udGVudERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuICBjYXJkQ29udGVudERldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbmZvKTtcbiAgY2FyZENvbnRlbnREZXRhaWxzLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gIHJldHVybiBjYXJkQ29udGVudERldGFpbHM7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrQ2FyZCA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudCcpO1xuICBcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJkSGVhZGVyKGl0ZW0pKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJkRGV0YWlscyhpdGVtKSk7XG4gIFxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuICBcbiAgICByZXR1cm4gY2FyZDtcbiAgfTtcbiAgXG5jb25zdCBwb3B1bGF0ZVRhc2tzID0gKGFycikgPT4ge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MtY29udGFpbmVyJyk7XG5cbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQ2FyZChpdGVtKSk7XG4gIH0pO1xuXG4gIHJldHVybiB0YXNrcztcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gKHRpdGxlLCBhcnIpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgXG4gICAgaWYgKG1haW4uY29udGFpbnMoY29udGVudCkpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIH1cbiAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlTmF2KHRpdGxlKSk7XG4gIFxuICAgIGNvbnN0IHRhc2tzID0gcG9wdWxhdGVUYXNrcyhhcnIpO1xuICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgfTtcblxuY29uc3QgcG9wdWxhdGVEaWFsb2cgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1mb3JtJyk7XG5cbiAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaGlkZGVuLnR5cGUgPSAnaGlkZGVuJztcbiAgaGlkZGVuLnZhbHVlID0gaXRlbS5pZDtcblxuICBmb3JtLmFwcGVuZENoaWxkKGhpZGRlbik7XG5cbiAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICB0aXRsZS52YWx1ZSA9IGl0ZW0udGl0bGU7XG4gIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gIGRhdGUudmFsdWUgPSBpdGVtLmR1ZURhdGU7XG4gIGNvbnN0IHByb2plY3QgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gIHByb2plY3QudmFsdWUgPSBpdGVtLnByb2plY3Q7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBpdGVtLmRlc2NyaXB0aW9uO1xufTtcblxuZXhwb3J0IHtcbiAgbG9hZFBhZ2UsIGJsdWVQbHVzLCBibHVlTWludXMsIHBvcHVsYXRlRGlhbG9nLFxufTtcbiIsImltcG9ydCB0b2RvTG9nbyBmcm9tICcuL2ltYWdlcy9pY29uczgtY2xpcGJvYXJkLTY0LnBuZyc7XG5cbmNvbnN0IGNyZWF0ZU5hdkhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbmF2SGVhZGVyJyk7XG4gIFxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IHRvZG9Mb2dvO1xuICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnVG8gRG9cXCdzJztcbiAgXG4gICAgbmF2SGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIG5hdkhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBcbiAgICByZXR1cm4gbmF2SGVhZGVyO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RMaW5rID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gcHJvamVjdDtcbiAgXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU5hdkNvbnRlbnQgPSAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBuYXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpO1xuICBcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIFxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rJyk7XG4gICAgaG9tZS5pZCA9ICdob21lJztcbiAgICBob21lLmlubmVyVGV4dCA9ICdIb21lJztcbiAgXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChob21lKTtcbiAgXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TGluayhwcm9qZWN0KSk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBuYXZDb250ZW50O1xuICB9O1xuICBcbmNvbnN0IG5hdiA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgc2lkZUJhci5pZCA9ICdzaWRlYmFyJztcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkhlYWRlcigpKTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChjcmVhdGVOYXZDb250ZW50KHByb2plY3RzKSk7XG5cbiAgcmV0dXJuIHNpZGVCYXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXY7XG5cblxuXG5cblxuIiwiY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBpZCkgPT4gKHtcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGUsIFxuICAgICAgICBwcm9qZWN0LCBcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9KVxuXG5jb25zdCBzZXRJZCA9IChhcnIsIGluZGV4KSA9PiB7XG4gICAgYXJyW2luZGV4XS5pZCA9IGluZGV4OyAgIFxufVxuXG5jb25zdCBnZXRQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGFyci5tYXAodGFzayA9PiB0YXNrLnByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QsIGluZGV4KSA9PiBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpID09PSBpbmRleCk7XG59XG5cbmNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IChhcnIsIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coYXJyKTtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgYXJyW2luZGV4XS5jb21wbGV0ZWQgPSAhYXJyW2luZGV4XS5jb21wbGV0ZWQ7ICAgXG59XG5cbmNvbnN0IGZpbHRlclRhc2tzQnlQcm9qZWN0ID0gKGFyciwgcHJvamVjdCA9IFwiXCIpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGFyci5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpO1xuICAgIHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIGdldFByb2plY3RzLCB0b2dnbGVDb21wbGV0ZWQsIGZpbHRlclRhc2tzQnlQcm9qZWN0LCBzZXRJZCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBuYXYgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IHtcbiAgbG9hZFBhZ2UsXG4gIGJsdWVQbHVzLFxuICBibHVlTWludXMsXG4gIHBvcHVsYXRlRGlhbG9nLFxufSBmcm9tICcuL2Rpc3BsYXktY29udHJvbGxlcic7XG5pbXBvcnQge1xuICB0YXNrRmFjdG9yeSwgdG9nZ2xlQ29tcGxldGVkLCBnZXRQcm9qZWN0cywgZmlsdGVyVGFza3NCeVByb2plY3QsXG59IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWRpYWxvZycpO1xuY29uc3QgZWRpdFRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kaWFsb2cnKTtcbmNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG5jb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1mb3JtJyk7XG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWZvcm0nKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbmNvbnN0IG5hdmJhciA9IG5hdihnZXRQcm9qZWN0cyh0YXNrcykpO1xubWFpbi5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG5sb2FkUGFnZSgnSG9tZScsIHRhc2tzLCBibHVlUGx1cyk7XG5cbmNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stYnV0dG9uJyk7XG5jb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2xvc2UtZGlhbG9nLWJ0bicpO1xuY29uc3QgcHJvamVjdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGluaycpO1xuXG5cbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5ld1Rhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufSk7XG5cblxuY29uc3Qgc2V0Q29sbGFwc2VCdXR0b25MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29sbGFwc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxhcHNlLWJ1dHRvbicpO1xuICBcbiAgICBjb2xsYXBzZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgaWYgKGRpdi5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBibHVlUGx1cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJsdWVNaW51cztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIFxuICBjb25zdCBzZXRFZGl0QnV0dG9uTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtYnV0dG9uJyk7XG4gIFxuICAgIGVkaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGluZGV4IH0gPSBidXR0b24uZGF0YXNldDtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIHBvcHVsYXRlRGlhbG9nKHRhc2tzW2luZGV4XSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRDb21wbGV0ZUNoZWNrYm94TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXBsZXRlQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZS1jaGVja2JveCcpO1xuXG4gICAgY29tcGxldGVDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGNoZWNrYm94LmRhdGFzZXQ7XG4gICAgICAgICAgdG9nZ2xlQ29tcGxldGVkKHRhc2tzLCBpbmRleCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIFxuICB9XG4gIFxuY29uc3QgdXBkYXRlRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc2V0Q29sbGFwc2VCdXR0b25MaXN0ZW5lcnMoKTtcbiAgICBzZXRFZGl0QnV0dG9uTGlzdGVuZXJzKCk7XG4gICAgc2V0Q29tcGxldGVDaGVja2JveExpc3RlbmVycygpO1xuICB9O1xuXG5uZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCwgdGFza3MubGVuZ3RoKTtcblxuICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB1cGRhdGVFdmVudExpc3RlbmVycygpO1xuXG4gIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG4gIG5ld1Rhc2tEaWFsb2cuY2xvc2UoKTtcbiAgbG9hZFBhZ2UocHJvamVjdCwgZmlsdGVyVGFza3NCeVByb2plY3QodGFza3MsIHByb2plY3QpLCBibHVlUGx1cyk7XG4gIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG59KTtcblxuZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWU7XG4gIGNvbnN0IHByb2plY3QgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZSA9IFwiaGlkZGVuXCJdJykudmFsdWU7XG5cbiAgY29uc3QgdGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCwgaW5kZXgpO1xuXG4gIHRhc2tzW2luZGV4XSA9IHRhc2s7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgZWRpdFRhc2tGb3JtLnJlc2V0KCk7XG4gIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG4gIGxvYWRQYWdlKHByb2plY3QsIGZpbHRlclRhc2tzQnlQcm9qZWN0KHRhc2tzLCBwcm9qZWN0KSwgYmx1ZVBsdXMpO1xuICB1cGRhdGVFdmVudExpc3RlbmVycygpO1xufSk7XG5cbnByb2plY3RMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcigoJ2NsaWNrJyksICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbGluay50ZXh0Q29udGVudDtcbiAgICBpZiAocHJvamVjdCA9PT0gJ0hvbWUnKSB7XG4gICAgICBsb2FkUGFnZShwcm9qZWN0LCB0YXNrcywgYmx1ZVBsdXMpO1xuICAgICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9hZFBhZ2UocHJvamVjdCwgZmlsdGVyVGFza3NCeVByb2plY3QodGFza3MsIHByb2plY3QpLCBibHVlUGx1cyk7XG4gICAgICB1cGRhdGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgfSk7XG59KTtcblxudXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==