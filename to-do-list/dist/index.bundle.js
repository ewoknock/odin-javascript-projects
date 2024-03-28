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
const blueMinus = '\u2296'

const loadPage = (title, arr) => {
    let main = document.querySelector('main');
    
    let content = document.querySelector('section');

    if(main.contains(content)){
        content.innerHTML = "";
    }
    else{
        content = document.createElement('section');
        content.classList.add('container');
    }

    
    content.appendChild(pageNav(title));

    let tasks = populateTasks(arr);

    content.appendChild(tasks);

    main.appendChild(content);

}

const pageNav = (header) => {
    let nav = document.createElement('nav');

    let navHeader = document.createElement('h2');
    navHeader.innerText = header;

    let buttonIcon = new Image();
    buttonIcon.src = _images_icons8_add_50_png__WEBPACK_IMPORTED_MODULE_0__["default"];

    let addTaskButton = document.createElement('button');
    addTaskButton.classList.add('taskBtn');
    addTaskButton.id = "new-task-button"
    addTaskButton.appendChild(buttonIcon);

    nav.appendChild(navHeader);
    nav.appendChild(addTaskButton);

    return nav;

}

const populateTasks = (arr) => {
    let tasks = document.createElement('section');
    tasks.classList.add('tasks-container');

    arr.forEach((item) => {
        tasks.appendChild(createTaskCard(item));
    });

    return tasks;
}

const createTaskCard = (item) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    cardContent.appendChild(createCardHeader(item));
    cardContent.appendChild(createCardDetails(item));

    card.appendChild(cardContent);

    return card;
}

const createCardHeader = (item) => {
    let cardContentHeader = document.createElement('div');
    cardContentHeader.classList.add('card-content-header');

    let completedContainer = document.createElement('input');
    completedContainer.setAttribute('data-index', item.id);
    completedContainer.classList.add('complete-checkbox');
    completedContainer.type = "checkbox"
    completedContainer.checked = item.completed;

    let titleInfo = createCardDetailInfo("", item.title);

    let dateInfo = createCardDetailInfo("", item.dueDate);

    
    let expandButton = document.createElement('button');
    expandButton.classList.add("collapse-button");
    expandButton.id = "expand-button";
    expandButton.textContent = bluePlus;


    cardContentHeader.appendChild(completedContainer);
    cardContentHeader.appendChild(titleInfo);
    cardContentHeader.appendChild(dateInfo);
    cardContentHeader.appendChild(expandButton);

    return cardContentHeader;
}

const createCardDetails = (item) => {
    console.log(item);
    let cardContentDetails = document.createElement('div');
    cardContentDetails.classList.add('card-content-details');

    let dateInfo = createCardDetailInfo("Due Date:", item.dueDate);
    let projectInfo = createCardDetailInfo("Project:", item.project);
    let descriptionInfo = createCardDetailInfo("Description:", item.description);

    let editIcon = new Image();
    editIcon.src = _images_icons8_edit_32_png__WEBPACK_IMPORTED_MODULE_1__["default"];

    let editButton = document.createElement('button');
    editButton.classList.add("edit-button");
    editButton.id = "edit-button";
    editButton.appendChild(editIcon); 
    editButton.setAttribute("data-index", item.id);

    cardContentDetails.appendChild(dateInfo);
    cardContentDetails.appendChild(projectInfo);
    cardContentDetails.appendChild(descriptionInfo);
    cardContentDetails.appendChild(editButton);

    return cardContentDetails;
}

const createCardDetailInfo = (label, content) => {

    let detailContainer = document.createElement('div');
    detailContainer.classList.add("card-content-detail-info");

    if(label != ""){
        let containerLabel = document.createElement('p');
        containerLabel.innerHTML= `<strong>${label}</strong>`;
        detailContainer.appendChild(containerLabel);
    }


    let containerContent = document.createElement('p');
    containerContent.innerText = content;

    detailContainer.appendChild(containerContent);

    return detailContainer;
}

const populateDialog = (item) => {
    let form = document.querySelector("#edit-task-form");

    let hidden = document.createElement('input');
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

}



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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



let nav = (projects) => {
    let nav = document.createElement('aside');
    nav.id = 'sidebar';

    nav.appendChild(createNavHeader());
    nav.appendChild(createNavContent(projects));

    return nav;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);

let createNavHeader = () => {
    let navHeader = document.createElement('div');
    navHeader.classList.add('navHeader');

    let logo = new Image();
    logo.src = _images_icons8_clipboard_64_png__WEBPACK_IMPORTED_MODULE_0__["default"];

    let header = document.createElement('h1');
    header.innerText = 'To Do\'s'

    navHeader.appendChild(logo);
    navHeader.appendChild(header);

    return navHeader;
}

let createNavContent = (projects) => {
    let navContent = document.createElement('ul');
    navContent.classList.add('project-list');

    console.log(projects);

    let home = document.createElement('li');
    home.classList.add('project-link');
    home.id = 'home';
    home.innerText = "Home";

    navContent.appendChild(home);

    projects.forEach(project => {
        navContent.appendChild(createProjectLink(project));
    });

   return navContent;
}

let createProjectLink = (project) => {
    let listItem = document.createElement('li');
    listItem.classList.add('project-link');
    listItem.innerText = project;

    return listItem;
}

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
const taskFactory = (title, description, dueDate, project, id) => {
    return {
        title, 
        description, 
        dueDate, 
        project, 
        id,
        completed: false
    }
}

const setId = (arr, index) => {
    arr[index].id = index;   
}

const getProjects = (arr) => {
    let projects = arr.map(task => task.project);
    return projects.filter((project, index) => projects.indexOf(project) === index);
}

const toggleCompleted = (arr, index) => {
    arr[index].completed = !arr[index].completed;   
}

const filterTasksByProject = (arr, project = "") => {
    let tasks = arr.filter(task => task.project === project);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bluePlus: () => (/* reexport safe */ _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const newTaskDialog = document.getElementById("new-dialog");
const editTaskDialog = document.getElementById("edit-dialog");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
/*
tasks.forEach((task, index) => {
    setId(tasks, index);
});
localStorage.setItem('tasks', JSON.stringify(tasks));*/

const newTaskForm = document.querySelector("#new-task-form");
const editTaskForm = document.querySelector("#edit-task-form");


let content = document.querySelector('body');

let main = document.createElement('main');

content.appendChild(main);
console.log(tasks);
let navbar = (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.getProjects)(tasks));
main.appendChild(navbar);

(0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)("Home", tasks, _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);

const newTaskButton = document.getElementById('new-task-button');
const closeButtons = document.querySelectorAll('#close-dialog-btn');
const completeCheckboxes = document.querySelectorAll('.complete-checkbox');
const projectLinks = document.querySelectorAll(".project-link");

console.log(projectLinks);

newTaskButton.addEventListener("click", () => {
    newTaskDialog.showModal();
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        newTaskDialog.close();
        editTaskDialog.close();
    });
});

newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let project = document.getElementById('project').value;
    let description = document.getElementById('description').value;

    let newTask = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.taskFactory)(title, description, date, project, tasks.length);

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateEventListeners();

    newTaskForm.reset();
    newTaskDialog.close();
    (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.filterTasksByProject)(tasks, project), _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
    updateEventListeners();
});

editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = event.target.querySelector('#title').value;
    let date = event.target.querySelector('#date').value;
    let project = event.target.querySelector('#project').value;
    let description = event.target.querySelector('#description').value;
    let index = document.querySelector('input[type = "hidden"]').value;
    
    let task = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.taskFactory)(title, description, date, project, index);

    tasks[index] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateEventListeners();

    editTaskForm.reset();
    editTaskDialog.close();
    (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.filterTasksByProject)(tasks, project), _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
    updateEventListeners();
});

const setCollapseButtonListeners = () => {
    const collapseButtons = document.querySelectorAll('.collapse-button');

    collapseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let content = button.parentElement.nextElementSibling;
            if(content.style.display === "flex"){
                content.style.display = "none";
                button.innerHTML = _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus;
            } else{
                content.style.display = "flex";
                button.textContent = _display_controller__WEBPACK_IMPORTED_MODULE_1__.blueMinus;
            }
        });
    });
}

const setEditButtonListeners = () => {
    const editButtons = document.querySelectorAll('.edit-button');

    editButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let index = button.dataset.index;
            editTaskDialog.showModal();
            (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.populateDialog)(tasks[index]);
        });
    });
}

const updateEventListeners = () => {
    setCollapseButtonListeners();
    setEditButtonListeners();
}

completeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        let index = checkbox.dataset.index;
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.toggleCompleted)(tasks, index);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    })
});



projectLinks.forEach((link) => {
    link.addEventListener(("click"), () => {
        let project  = link.textContent;
        if(project == "Home"){
            (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, tasks, _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
            updateEventListeners();
        }
        else{
            (0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)(project, (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.filterTasksByProject)(tasks, project), _display_controller__WEBPACK_IMPORTED_MODULE_1__.bluePlus);
            updateEventListeners();
        }
    });
});


updateEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8s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Q0FBbUMseURBQVE7QUFDM0MsY0FBYztBQUNkO0FBQ0EscUNBQXFDLDBEQUFTO0FBQzlDO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBYztBQUMxQixTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBUSxpQkFBaUIseURBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBUSxVQUFVLCtEQUFvQixrQkFBa0IseURBQVE7QUFDNUU7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ2tCOztBQUVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9pY29uczgtYWRkLTUwLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9pY29uczgtY2xpcGJvYXJkLTY0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9pY29uczgtZWRpdC0zMi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVye1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbjpyb290e1xuICAgIC0tY29sb3ItYmFja2dyb3VuZDogIzMyMzIzMjtcbiAgICAtLWNvbG9yLXdoaXRlOiB3aGl0ZTtcbiAgICAtLWNvbG9yLW11dGVkLWdyZXk6ICNlZmVmZWY7XG4gICAgLS1jb2xvci1ncmV5OiAjMzIzMjMyO1xuICAgIC0tY29sb3ItZ3JlZW46ICMwMGNhODA7XG4gICAgLS1jb2xvci1ibHVlOiAjMjE4YmU2O1xuICAgIC0tY29sb3ItcHJpbWFyeTogI0Y3RjhGQTtcbiAgICAtLWZvbnQtZmFtaWx5OiAnTGF0bycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDE3cHggNXB4IHJnYmEoMCwwLDAsMC4xMik7XG5cblxufVxuXG5odG1se1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxubWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4jc2lkZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgZ2FwOiA0cmVtO1xufVxuXG4ubmF2SGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5uYXZIZWFkZXIgaW1ne1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuLnByb2plY3QtbGlzdHtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG59XG5cbi5wcm9qZWN0LWxpbmt7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3RpdmUsXG4ucHJvamVjdC1saW5rOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uY29udGFpbmVye1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIHBhZGRpbmc6IDAgMy41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG59XG5cbm5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFza0J0bntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cblxuXG4vKiAgRElBTE9HICAqL1xuZGlhbG9ne1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbjo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4jY2xvc2UtZGlhbG9nLWJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuOHJlbTtcbiAgICByaWdodDogLjhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuI2Nsb3NlLWRpYWxvZy1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XG59XG5cbi8qIEZPUk0gKi9cblxuZm9ybSxcbi5mb3JtLWdyb3Vwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtO1xuICAgIHBhZGRpbmc6IC4ycmVtO1xufVxuXG4uZm9ybS1ncm91cHtcbiAgICBnYXA6IC4zcmVtO1xufVxuXG4uZm9ybS1ncm91cC1kZXNjcmlwdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsXG4uZm9ybS1ncm91cC1kZXNjcmlwdGlvbiB0ZXh0YXJlYXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1tdXRlZC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG5cbi8qIEJVVFRPTlMgKi9cblxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG59XG5cbi5jb2xsYXBzZS1idXR0b257XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAuNnJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbGxhcHNlLWJ1dHRvbjpob3Zlcixcbi5lZGl0LWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnRhc2tCdG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuLmVkaXQtYnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLyogIFRBU0sgQ0FSRCAgICovXG4udGFza3MtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4uY2FyZC1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLmNhcmQtY29udGVudC1kZXRhaWxzLFxuLmNhcmQtY29udGVudC1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtY29udGVudC1kZXRhaWxze1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGtKQUFrSjtJQUNsSixxQkFBcUI7SUFDckIsK0NBQStDOzs7QUFHbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLE9BQU87SUFDUCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw0REFBNEQ7SUFDNUQsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsV0FBVztBQUNmOztBQUVBOztJQUVJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQ0FBc0M7QUFDMUM7Ozs7QUFJQSxhQUFhO0FBQ2I7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUEsU0FBUzs7QUFFVDs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUkseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogIzMyMzIzMjtcXG4gICAgLS1jb2xvci13aGl0ZTogd2hpdGU7XFxuICAgIC0tY29sb3ItbXV0ZWQtZ3JleTogI2VmZWZlZjtcXG4gICAgLS1jb2xvci1ncmV5OiAjMzIzMjMyO1xcbiAgICAtLWNvbG9yLWdyZWVuOiAjMDBjYTgwO1xcbiAgICAtLWNvbG9yLWJsdWU6ICMyMThiZTY7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogI0Y3RjhGQTtcXG4gICAgLS1mb250LWZhbWlseTogJ0xhdG8nLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDE3cHggNXB4IHJnYmEoMCwwLDAsMC4xMik7XFxuXFxuXFxufVxcblxcbmh0bWx7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm5hdkhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLm5hdkhlYWRlciBpbWd7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnByb2plY3QtbGlzdHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLnByb2plY3QtbGlua3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY3RpdmUsXFxuLnByb2plY3QtbGluazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIHBhZGRpbmc6IDAgMy41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0J0bntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcblxcblxcbi8qICBESUFMT0cgICovXFxuZGlhbG9ne1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4jY2xvc2UtZGlhbG9nLWJ0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC44cmVtO1xcbiAgICByaWdodDogLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jY2xvc2UtZGlhbG9nLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XFxufVxcblxcbi8qIEZPUk0gKi9cXG5cXG5mb3JtLFxcbi5mb3JtLWdyb3Vwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXB7XFxuICAgIGdhcDogLjNyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBpbnB1dCxcXG4uZm9ybS1ncm91cC1kZXNjcmlwdGlvbiB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG5cXG4uYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uY29sbGFwc2UtYnV0dG9ue1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb2xsYXBzZS1idXR0b246aG92ZXIsXFxuLmVkaXQtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2tCdG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5lZGl0LWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uZWRpdC1idXR0b24gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLyogIFRBU0sgQ0FSRCAgICovXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbi5jYXJkLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmNhcmQtY29udGVudC1kZXRhaWxzLFxcbi5jYXJkLWNvbnRlbnQtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQtZGV0YWlsc3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjk4NGM3Nzk1MGRmODFjZjVlMDMxODU2MGM3MWI0ZTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxZjdmNTRkYjE4MDBhZjc1NDBmNmQ5ODAzZjdmNTY5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NDFhNDk0OWEwMzQ5MTlhNzE5MDJlNjUwNjM3YTA4Ni5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBZGRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1hZGQtNTAucG5nJ1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1lZGl0LTMyLnBuZydcblxuY29uc3QgYmx1ZVBsdXMgPSAnXFx1MjI5NSc7XG5jb25zdCBibHVlTWludXMgPSAnXFx1MjI5NidcblxuY29uc3QgbG9hZFBhZ2UgPSAodGl0bGUsIGFycikgPT4ge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIFxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG4gICAgaWYobWFpbi5jb250YWlucyhjb250ZW50KSl7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICB9XG5cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VOYXYodGl0bGUpKTtcblxuICAgIGxldCB0YXNrcyA9IHBvcHVsYXRlVGFza3MoYXJyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxufVxuXG5jb25zdCBwYWdlTmF2ID0gKGhlYWRlcikgPT4ge1xuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGxldCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG5hdkhlYWRlci5pbm5lclRleHQgPSBoZWFkZXI7XG5cbiAgICBsZXQgYnV0dG9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1dHRvbkljb24uc3JjID0gQWRkSWNvbjtcblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQnRuJyk7XG4gICAgYWRkVGFza0J1dHRvbi5pZCA9IFwibmV3LXRhc2stYnV0dG9uXCJcbiAgICBhZGRUYXNrQnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkhlYWRlcik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgcmV0dXJuIG5hdjtcblxufVxuXG5jb25zdCBwb3B1bGF0ZVRhc2tzID0gKGFycikgPT4ge1xuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jb250YWluZXInKTtcblxuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDYXJkKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXNrcztcbn1cblxuY29uc3QgY3JlYXRlVGFza0NhcmQgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBsZXQgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQnKTtcblxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmRIZWFkZXIoaXRlbSkpO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmREZXRhaWxzKGl0ZW0pKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmRIZWFkZXIgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBjYXJkQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRDb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudC1oZWFkZXInKTtcblxuICAgIGxldCBjb21wbGV0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbXBsZXRlZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpdGVtLmlkKTtcbiAgICBjb21wbGV0ZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtY2hlY2tib3gnKTtcbiAgICBjb21wbGV0ZWRDb250YWluZXIudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGNvbXBsZXRlZENvbnRhaW5lci5jaGVja2VkID0gaXRlbS5jb21wbGV0ZWQ7XG5cbiAgICBsZXQgdGl0bGVJbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oXCJcIiwgaXRlbS50aXRsZSk7XG5cbiAgICBsZXQgZGF0ZUluZm8gPSBjcmVhdGVDYXJkRGV0YWlsSW5mbyhcIlwiLCBpdGVtLmR1ZURhdGUpO1xuXG4gICAgXG4gICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2UtYnV0dG9uXCIpO1xuICAgIGV4cGFuZEJ1dHRvbi5pZCA9IFwiZXhwYW5kLWJ1dHRvblwiO1xuICAgIGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9IGJsdWVQbHVzO1xuXG5cbiAgICBjYXJkQ29udGVudEhlYWRlci5hcHBlbmRDaGlsZChjb21wbGV0ZWRDb250YWluZXIpO1xuICAgIGNhcmRDb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlSW5mbyk7XG4gICAgY2FyZENvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0ZUluZm8pO1xuICAgIGNhcmRDb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cbiAgICByZXR1cm4gY2FyZENvbnRlbnRIZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmREZXRhaWxzID0gKGl0ZW0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBsZXQgY2FyZENvbnRlbnREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZENvbnRlbnREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudC1kZXRhaWxzJyk7XG5cbiAgICBsZXQgZGF0ZUluZm8gPSBjcmVhdGVDYXJkRGV0YWlsSW5mbyhcIkR1ZSBEYXRlOlwiLCBpdGVtLmR1ZURhdGUpO1xuICAgIGxldCBwcm9qZWN0SW5mbyA9IGNyZWF0ZUNhcmREZXRhaWxJbmZvKFwiUHJvamVjdDpcIiwgaXRlbS5wcm9qZWN0KTtcbiAgICBsZXQgZGVzY3JpcHRpb25JbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oXCJEZXNjcmlwdGlvbjpcIiwgaXRlbS5kZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0SWNvbi5zcmMgPSBFZGl0SWNvbjtcblxuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5pZCA9IFwiZWRpdC1idXR0b25cIjtcbiAgICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKGVkaXRJY29uKTsgXG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGl0ZW0uaWQpO1xuXG4gICAgY2FyZENvbnRlbnREZXRhaWxzLmFwcGVuZENoaWxkKGRhdGVJbmZvKTtcbiAgICBjYXJkQ29udGVudERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuICAgIGNhcmRDb250ZW50RGV0YWlscy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkluZm8pO1xuICAgIGNhcmRDb250ZW50RGV0YWlscy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIHJldHVybiBjYXJkQ29udGVudERldGFpbHM7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmREZXRhaWxJbmZvID0gKGxhYmVsLCBjb250ZW50KSA9PiB7XG5cbiAgICBsZXQgZGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbnRlbnQtZGV0YWlsLWluZm9cIik7XG5cbiAgICBpZihsYWJlbCAhPSBcIlwiKXtcbiAgICAgICAgbGV0IGNvbnRhaW5lckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb250YWluZXJMYWJlbC5pbm5lckhUTUw9IGA8c3Ryb25nPiR7bGFiZWx9PC9zdHJvbmc+YDtcbiAgICAgICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxhYmVsKTtcbiAgICB9XG5cblxuICAgIGxldCBjb250YWluZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhaW5lckNvbnRlbnQuaW5uZXJUZXh0ID0gY29udGVudDtcblxuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDb250ZW50KTtcblxuICAgIHJldHVybiBkZXRhaWxDb250YWluZXI7XG59XG5cbmNvbnN0IHBvcHVsYXRlRGlhbG9nID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWZvcm1cIik7XG5cbiAgICBsZXQgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWRkZW4udHlwZSA9ICdoaWRkZW4nO1xuICAgIGhpZGRlbi52YWx1ZSA9IGl0ZW0uaWQ7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGhpZGRlbik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgdGl0bGUudmFsdWUgPSBpdGVtLnRpdGxlO1xuICAgIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gICAgZGF0ZS52YWx1ZSA9IGl0ZW0uZHVlRGF0ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIHByb2plY3QudmFsdWUgPSBpdGVtLnByb2plY3Q7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvbjtcblxufVxuXG5leHBvcnQgeyBsb2FkUGFnZSwgYmx1ZVBsdXMsIGJsdWVNaW51cywgcG9wdWxhdGVEaWFsb2cgfSIsImltcG9ydCB0b2RvTG9nbyBmcm9tICcuL2ltYWdlcy9pY29uczgtY2xpcGJvYXJkLTY0LnBuZydcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSAnLi90YXNrcyc7XG5cbmxldCBuYXYgPSAocHJvamVjdHMpID0+IHtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgICBuYXYuaWQgPSAnc2lkZWJhcic7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2SGVhZGVyKCkpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVOYXZDb250ZW50KHByb2plY3RzKSk7XG5cbiAgICByZXR1cm4gbmF2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2O1xuXG5sZXQgY3JlYXRlTmF2SGVhZGVyID0gKCkgPT4ge1xuICAgIGxldCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbmF2SGVhZGVyJyk7XG5cbiAgICBsZXQgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ28uc3JjID0gdG9kb0xvZ287XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1RvIERvXFwncydcblxuICAgIG5hdkhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXZIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIHJldHVybiBuYXZIZWFkZXI7XG59XG5cbmxldCBjcmVhdGVOYXZDb250ZW50ID0gKHByb2plY3RzKSA9PiB7XG4gICAgbGV0IG5hdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmsnKTtcbiAgICBob21lLmlkID0gJ2hvbWUnO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TGluayhwcm9qZWN0KSk7XG4gICAgfSk7XG5cbiAgIHJldHVybiBuYXZDb250ZW50O1xufVxuXG5sZXQgY3JlYXRlUHJvamVjdExpbmsgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gcHJvamVjdDtcblxuICAgIHJldHVybiBsaXN0SXRlbTtcbn0iLCJjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGUsIFxuICAgICAgICBwcm9qZWN0LCBcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9XG59XG5cbmNvbnN0IHNldElkID0gKGFyciwgaW5kZXgpID0+IHtcbiAgICBhcnJbaW5kZXhdLmlkID0gaW5kZXg7ICAgXG59XG5cbmNvbnN0IGdldFByb2plY3RzID0gKGFycikgPT4ge1xuICAgIGxldCBwcm9qZWN0cyA9IGFyci5tYXAodGFzayA9PiB0YXNrLnByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QsIGluZGV4KSA9PiBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpID09PSBpbmRleCk7XG59XG5cbmNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IChhcnIsIGluZGV4KSA9PiB7XG4gICAgYXJyW2luZGV4XS5jb21wbGV0ZWQgPSAhYXJyW2luZGV4XS5jb21wbGV0ZWQ7ICAgXG59XG5cbmNvbnN0IGZpbHRlclRhc2tzQnlQcm9qZWN0ID0gKGFyciwgcHJvamVjdCA9IFwiXCIpID0+IHtcbiAgICBsZXQgdGFza3MgPSBhcnIuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0KTtcbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5LCBnZXRQcm9qZWN0cywgdG9nZ2xlQ29tcGxldGVkLCBmaWx0ZXJUYXNrc0J5UHJvamVjdCwgc2V0SWQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCB7IGxvYWRQYWdlLCBibHVlUGx1cywgYmx1ZU1pbnVzLCBwb3B1bGF0ZURpYWxvZyB9IGZyb20gJy4vZGlzcGxheS1jb250cm9sbGVyJztcbmltcG9ydCB7IHRhc2tGYWN0b3J5LCB0b2dnbGVDb21wbGV0ZWQsIGdldFByb2plY3RzLCBmaWx0ZXJUYXNrc0J5UHJvamVjdCwgc2V0SWQgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuXG5cbmNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1kaWFsb2dcIik7XG5jb25zdCBlZGl0VGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1kaWFsb2dcIik7XG5jb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuLypcbnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgc2V0SWQodGFza3MsIGluZGV4KTtcbn0pO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTsqL1xuXG5jb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWZvcm1cIik7XG5cblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuY29uc29sZS5sb2codGFza3MpO1xubGV0IG5hdmJhciA9IG5hdihnZXRQcm9qZWN0cyh0YXNrcykpO1xubWFpbi5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG5sb2FkUGFnZShcIkhvbWVcIiwgdGFza3MsIGJsdWVQbHVzKTtcblxuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1idXR0b24nKTtcbmNvbnN0IGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjbG9zZS1kaWFsb2ctYnRuJyk7XG5jb25zdCBjb21wbGV0ZUNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGUtY2hlY2tib3gnKTtcbmNvbnN0IHByb2plY3RMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1saW5rXCIpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0TGlua3MpO1xuXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG5jbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcbn0pO1xuXG5uZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByb2plY3QsIHRhc2tzLmxlbmd0aCk7XG5cbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG4gICAgbmV3VGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIGxvYWRQYWdlKHByb2plY3QsIGZpbHRlclRhc2tzQnlQcm9qZWN0KHRhc2tzLCBwcm9qZWN0KSwgYmx1ZVBsdXMpO1xuICAgIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG59KTtcblxuZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCB0aXRsZSA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGxldCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGUgPSBcImhpZGRlblwiXScpLnZhbHVlO1xuICAgIFxuICAgIGxldCB0YXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0LCBpbmRleCk7XG5cbiAgICB0YXNrc1tpbmRleF0gPSB0YXNrO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xuICAgIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG4gICAgbG9hZFBhZ2UocHJvamVjdCwgZmlsdGVyVGFza3NCeVByb2plY3QodGFza3MsIHByb2plY3QpLCBibHVlUGx1cyk7XG4gICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcbn0pO1xuXG5jb25zdCBzZXRDb2xsYXBzZUJ1dHRvbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsYXBzZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGFwc2UtYnV0dG9uJyk7XG5cbiAgICBjb2xsYXBzZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBidXR0b24ucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZihjb250ZW50LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKXtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYmx1ZVBsdXM7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYmx1ZU1pbnVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3Qgc2V0RWRpdEJ1dHRvbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ1dHRvbicpO1xuXG4gICAgZWRpdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYnV0dG9uLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBlZGl0VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlRGlhbG9nKHRhc2tzW2luZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCB1cGRhdGVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzZXRDb2xsYXBzZUJ1dHRvbkxpc3RlbmVycygpO1xuICAgIHNldEVkaXRCdXR0b25MaXN0ZW5lcnMoKTtcbn1cblxuY29tcGxldGVDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gY2hlY2tib3guZGF0YXNldC5pbmRleDtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkKHRhc2tzLCBpbmRleCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgfSlcbn0pO1xuXG5cblxucHJvamVjdExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3QgID0gbGluay50ZXh0Q29udGVudDtcbiAgICAgICAgaWYocHJvamVjdCA9PSBcIkhvbWVcIil7XG4gICAgICAgICAgICBsb2FkUGFnZShwcm9qZWN0LCB0YXNrcywgYmx1ZVBsdXMpO1xuICAgICAgICAgICAgdXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbG9hZFBhZ2UocHJvamVjdCwgZmlsdGVyVGFza3NCeVByb2plY3QodGFza3MsIHByb2plY3QpLCBibHVlUGx1cyk7XG4gICAgICAgICAgICB1cGRhdGVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmV4cG9ydCB7IGJsdWVQbHVzIH1cblxudXBkYXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==