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

.collapse-button:hover{
    background-color: var(--color-primary);
}

.taskBtn{
    background-color: var(--color-primary) !important;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,2BAA2B;IAC3B,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,wBAAwB;IACxB,kJAAkJ;IAClJ,qBAAqB;IACrB,+CAA+C;;;AAGnD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;IACpC,OAAO;IACP,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,4DAA4D;IAC5D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,mCAAmC;IACnC,WAAW;AACf;;AAEA;;IAEI,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,sCAAsC;AAC1C;;;;AAIA,aAAa;AACb;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,SAAS;;AAET;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;IAEI,yCAAyC;IACzC,mBAAmB;IACnB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,+BAA+B;AACnC;;AAEA,YAAY;;AAEZ;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,mBAAmB;IACnB,oCAAoC;IACpC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,iDAAiD;AACrD;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,\n*::before,\n*::after{\n    box-sizing: border-box;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    --color-background: #323232;\n    --color-white: white;\n    --color-muted-grey: #efefef;\n    --color-grey: #323232;\n    --color-green: #00ca80;\n    --color-blue: #218be6;\n    --color-primary: #F7F8FA;\n    --font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --border-radius: 1rem;\n    --box-shadow: 0px 2px 17px 5px rgba(0,0,0,0.12);\n\n\n}\n\nhtml{\n    overflow-y: scroll;\n    height: 100%;\n    font-family: var(--font-family);\n}\n\nbody{\n    background-color: var(--color-primary);\n}\n\nmain{\n    display: flex;\n    height: 90vh;\n    width: 90%;\n    margin: 3rem auto;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n}\n\n#sidebar{\n    background-color: var(--color-white);\n    flex: 1;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 260px;\n    max-width: 360px;\n    border-radius: var(--border-radius) 0 0 var(--border-radius);\n    gap: 4rem;\n}\n\n.navHeader{\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n    margin-top: 2rem;\n}\n\n.navHeader img{\n    height: 3rem;\n}\n\n.project-list{\n    height: 90vh;\n    width: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.2rem;\n    font-weight: 500;\n    padding: 0 3rem;\n}\n\n.project-link{\n    cursor: pointer;\n    padding: .5rem 1rem;\n    border-radius: var(--border-radius);\n    width: 100%;\n}\n\n.active,\n.project-link:hover{\n    background-color: var(--color-primary);\n}\n\n.container{\n    height: 90vh;\n    width: 100%;\n    margin-top: 4rem;\n    padding: 0 3.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\nnav{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.taskBtn{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 4rem;\n    background: transparent;\n    background-color: var(--color-primary);\n}\n\n\n\n/*  DIALOG  */\ndialog{\n    margin: auto;\n    padding: 1rem;\n    width: 40%;\n    border-radius: 2rem;\n    border: none;\n}\n\n::backdrop {\n    backdrop-filter: blur(5px);\n}\n\n#close-dialog-btn{\n    position: absolute;\n    top: .8rem;\n    right: .8rem;\n    background-color: white;\n    color: red;\n}\n\n#close-dialog-btn:hover{\n    background-color: var(--color-muted-grey);\n}\n\n/* FORM */\n\nform,\n.form-group{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    padding: .2rem;\n}\n\n.form-group{\n    gap: .3rem;\n}\n\n.form-group-description{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.form-group input,\n.form-group-description textarea{\n    border: 2px solid var(--color-muted-grey);\n    border-radius: 1rem;\n    padding: .5rem 1rem;\n    transition: all 200ms ease-in-out;\n    outline: none;\n}\n\ninput:focus{\n    border-color: var(--color-blue);\n}\n\n/* BUTTONS */\n\n.btn{\n    background-color: var(--color-blue);\n    color: white;\n    border: none;\n    border-radius: 1rem;\n    padding: .5rem;\n}\n\n.collapse-button{\n    color: var(--color-blue);\n    border: none;\n    border-radius: 2rem;\n    background-color: var(--color-white);\n    padding: .6rem;\n    font-size: 1.5rem;\n}\n\n.collapse-button:hover{\n    background-color: var(--color-primary);\n}\n\n.taskBtn{\n    background-color: var(--color-primary) !important;\n}\n\n/*  TASK CARD   */\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.card{\n    background-color: var(--color-white);\n    padding: 1rem;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n}\n\n.card-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: .5rem;\n}\n\n.card-content-details,\n.card-content-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.card-content-details{\n    display: none;\n}"],"sourceRoot":""}]);
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
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _images_icons8_add_50_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons8-add-50.png */ "./src/images/icons8-add-50.png");


const bluePlus = '\u2295';
const blueMinus = '\u2296'

const loadPage = (title, arr) => {
    console.log(arr);
    let main = document.querySelector('main');

    let content = document.createElement('section');
    content.classList.add('container');
    
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
    console.log(buttonIcon);

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
    let cardContentDetails = document.createElement('div');
    cardContentDetails.classList.add('card-content-details');

    let dateInfo = createCardDetailInfo("Due Date:", item.dueDate);
    let projectInfo = createCardDetailInfo("Project:", item.project);
    let descriptionInfo = createCardDetailInfo("Description:", item.description);

    cardContentDetails.appendChild(dateInfo);
    cardContentDetails.appendChild(projectInfo);
    cardContentDetails.appendChild(descriptionInfo);

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


let nav = () => {
    let nav = document.createElement('aside');
    nav.id = 'sidebar';

    nav.appendChild(createNavHeader());
    nav.appendChild(createNavContent());

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

let createNavContent = () => {
    let navContent = document.createElement('ul');
    navContent.classList.add('project-list');

    let home = document.createElement('li');
    home.classList.add('project-link');
    home.id = 'home';
    home.innerText = "Home";

    navContent.appendChild(home);

    let placeholder = document.createElement('li');
    placeholder.classList.add('project-link');
    placeholder.innerText = "Task Lists";

    navContent.appendChild(placeholder);

    return navContent;
}

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   taskFactory: () => (/* binding */ taskFactory),
/* harmony export */   toggleCompleted: () => (/* binding */ toggleCompleted)
/* harmony export */ });
const taskFactory = (title, description, dueDate, project) => {
    return {
        title, 
        description, 
        dueDate, 
        project, 
        completed: false
    }
}

const getProjects = (arr) => {
    let projects = arr.map(task => task.project);
    return projects.filter((project, index) => projects.indexOf(project) === index);
}

const toggleCompleted = (arr, index) => {
    arr[index].completed = !arr[index].completed;   
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
/* harmony export */   bluePlus: () => (/* binding */ bluePlus)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const bluePlus = '\u2295';
const blueMinus = '\u2296'

const dialog = document.querySelector("dialog");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskForm = document.querySelector("form");

let content = document.querySelector('body');

let main = document.createElement('main');

content.appendChild(main);

let navbar = (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
main.appendChild(navbar);

(0,_display_controller__WEBPACK_IMPORTED_MODULE_1__.loadPage)("Home", tasks, bluePlus);

const newTaskButton = document.getElementById('new-task-button');
const closeButton = document.getElementById('close-dialog-btn');
const collapseButtons = document.querySelectorAll('.collapse-button');

newTaskButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const project = document.getElementById('project').value;
    const description = document.getElementById('description').value;

    const newTask = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.taskFactory)(title, description, date, project);

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskForm.reset();
    dialog.close();
});

collapseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let content = button.parentElement.nextElementSibling;
        if(content.style.display === "flex"){
            content.style.display = "none";
            button.innerHTML = bluePlus;
        } else{
            content.style.display = "flex";
            button.textContent = blueMinus;
        }
    });
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHNEQUFXOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9pY29uczgtYWRkLTUwLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9pY29uczgtY2xpcGJvYXJkLTY0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuOnJvb3R7XG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzIzMjMyO1xuICAgIC0tY29sb3Itd2hpdGU6IHdoaXRlO1xuICAgIC0tY29sb3ItbXV0ZWQtZ3JleTogI2VmZWZlZjtcbiAgICAtLWNvbG9yLWdyZXk6ICMzMjMyMzI7XG4gICAgLS1jb2xvci1ncmVlbjogIzAwY2E4MDtcbiAgICAtLWNvbG9yLWJsdWU6ICMyMThiZTY7XG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjdGOEZBO1xuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTdweCA1cHggcmdiYSgwLDAsMCwwLjEyKTtcblxuXG59XG5cbmh0bWx7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG5tYWlue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbiNzaWRlYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBnYXA6IDRyZW07XG59XG5cbi5uYXZIZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm5hdkhlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuXG4ucHJvamVjdC1saXN0e1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuLnByb2plY3QtbGlua3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZSxcbi5wcm9qZWN0LWxpbms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jb250YWluZXJ7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgcGFkZGluZzogMCAzLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbn1cblxubmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrQnRue1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG5cbi8qICBESUFMT0cgICovXG5kaWFsb2d7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuOjpiYWNrZHJvcCB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbiNjbG9zZS1kaWFsb2ctYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC44cmVtO1xuICAgIHJpZ2h0OiAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4jY2xvc2UtZGlhbG9nLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZC1ncmV5KTtcbn1cblxuLyogRk9STSAqL1xuXG5mb3JtLFxuLmZvcm0tZ3JvdXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogLjVyZW07XG4gICAgcGFkZGluZzogLjJyZW07XG59XG5cbi5mb3JtLWdyb3Vwe1xuICAgIGdhcDogLjNyZW07XG59XG5cbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCxcbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9uIHRleHRhcmVhe1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW11dGVkLWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbn1cblxuLyogQlVUVE9OUyAqL1xuXG4uYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuLmNvbGxhcHNlLWJ1dHRvbntcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIHBhZGRpbmc6IC42cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY29sbGFwc2UtYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGFza0J0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4vKiAgVEFTSyBDQVJEICAgKi9cbi50YXNrcy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4uY2FyZC1jb250ZW50LWRldGFpbHMsXG4uY2FyZC1jb250ZW50LWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC1jb250ZW50LWRldGFpbHN7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7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QUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogIzMyMzIzMjtcXG4gICAgLS1jb2xvci13aGl0ZTogd2hpdGU7XFxuICAgIC0tY29sb3ItbXV0ZWQtZ3JleTogI2VmZWZlZjtcXG4gICAgLS1jb2xvci1ncmV5OiAjMzIzMjMyO1xcbiAgICAtLWNvbG9yLWdyZWVuOiAjMDBjYTgwO1xcbiAgICAtLWNvbG9yLWJsdWU6ICMyMThiZTY7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogI0Y3RjhGQTtcXG4gICAgLS1mb250LWZhbWlseTogJ0xhdG8nLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDE3cHggNXB4IHJnYmEoMCwwLDAsMC4xMik7XFxuXFxuXFxufVxcblxcbmh0bWx7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4jc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLm5hdkhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLm5hdkhlYWRlciBpbWd7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnByb2plY3QtbGlzdHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLnByb2plY3QtbGlua3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY3RpdmUsXFxuLnByb2plY3QtbGluazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIHBhZGRpbmc6IDAgMy41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0J0bntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcblxcblxcbi8qICBESUFMT0cgICovXFxuZGlhbG9ne1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4jY2xvc2UtZGlhbG9nLWJ0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC44cmVtO1xcbiAgICByaWdodDogLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jY2xvc2UtZGlhbG9nLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XFxufVxcblxcbi8qIEZPUk0gKi9cXG5cXG5mb3JtLFxcbi5mb3JtLWdyb3Vwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXB7XFxuICAgIGdhcDogLjNyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwLWRlc2NyaXB0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBpbnB1dCxcXG4uZm9ybS1ncm91cC1kZXNjcmlwdGlvbiB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItbXV0ZWQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG5cXG4uYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uY29sbGFwc2UtYnV0dG9ue1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb2xsYXBzZS1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG4udGFza0J0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogIFRBU0sgQ0FSRCAgICovXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbi5jYXJkLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmNhcmQtY29udGVudC1kZXRhaWxzLFxcbi5jYXJkLWNvbnRlbnQtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQtZGV0YWlsc3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjk4NGM3Nzk1MGRmODFjZjVlMDMxODU2MGM3MWI0ZTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxZjdmNTRkYjE4MDBhZjc1NDBmNmQ5ODAzZjdmNTY5LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFkZEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LWFkZC01MC5wbmcnXG5cbmNvbnN0IGJsdWVQbHVzID0gJ1xcdTIyOTUnO1xuY29uc3QgYmx1ZU1pbnVzID0gJ1xcdTIyOTYnXG5cbmNvbnN0IGxvYWRQYWdlID0gKHRpdGxlLCBhcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VOYXYodGl0bGUpKTtcblxuICAgIGxldCB0YXNrcyA9IHBvcHVsYXRlVGFza3MoYXJyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxufVxuXG5jb25zdCBwYWdlTmF2ID0gKGhlYWRlcikgPT4ge1xuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGxldCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG5hdkhlYWRlci5pbm5lclRleHQgPSBoZWFkZXI7XG5cbiAgICBsZXQgYnV0dG9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1dHRvbkljb24uc3JjID0gQWRkSWNvbjtcbiAgICBjb25zb2xlLmxvZyhidXR0b25JY29uKTtcblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQnRuJyk7XG4gICAgYWRkVGFza0J1dHRvbi5pZCA9IFwibmV3LXRhc2stYnV0dG9uXCJcbiAgICBhZGRUYXNrQnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkhlYWRlcik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgcmV0dXJuIG5hdjtcblxufVxuXG5jb25zdCBwb3B1bGF0ZVRhc2tzID0gKGFycikgPT4ge1xuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jb250YWluZXInKTtcblxuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDYXJkKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXNrcztcbn1cblxuY29uc3QgY3JlYXRlVGFza0NhcmQgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBsZXQgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQnKTtcblxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmRIZWFkZXIoaXRlbSkpO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmREZXRhaWxzKGl0ZW0pKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmRIZWFkZXIgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBjYXJkQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRDb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudC1oZWFkZXInKTtcblxuICAgIGxldCBjb21wbGV0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbXBsZXRlZENvbnRhaW5lci50eXBlID0gXCJjaGVja2JveFwiXG4gICAgY29tcGxldGVkQ29udGFpbmVyLmNoZWNrZWQgPSBpdGVtLmNvbXBsZXRlZDtcblxuICAgIGxldCB0aXRsZUluZm8gPSBjcmVhdGVDYXJkRGV0YWlsSW5mbyhcIlwiLCBpdGVtLnRpdGxlKTtcblxuICAgIGxldCBkYXRlSW5mbyA9IGNyZWF0ZUNhcmREZXRhaWxJbmZvKFwiXCIsIGl0ZW0uZHVlRGF0ZSk7XG5cbiAgICBcbiAgICBsZXQgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZS1idXR0b25cIik7XG4gICAgZXhwYW5kQnV0dG9uLmlkID0gXCJleHBhbmQtYnV0dG9uXCI7XG4gICAgZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gYmx1ZVBsdXM7XG5cblxuICAgIGNhcmRDb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZENvbnRhaW5lcik7XG4gICAgY2FyZENvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVJbmZvKTtcbiAgICBjYXJkQ29udGVudEhlYWRlci5hcHBlbmRDaGlsZChkYXRlSW5mbyk7XG4gICAgY2FyZENvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcblxuICAgIHJldHVybiBjYXJkQ29udGVudEhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlQ2FyZERldGFpbHMgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBjYXJkQ29udGVudERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQ29udGVudERldGFpbHMuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50LWRldGFpbHMnKTtcblxuICAgIGxldCBkYXRlSW5mbyA9IGNyZWF0ZUNhcmREZXRhaWxJbmZvKFwiRHVlIERhdGU6XCIsIGl0ZW0uZHVlRGF0ZSk7XG4gICAgbGV0IHByb2plY3RJbmZvID0gY3JlYXRlQ2FyZERldGFpbEluZm8oXCJQcm9qZWN0OlwiLCBpdGVtLnByb2plY3QpO1xuICAgIGxldCBkZXNjcmlwdGlvbkluZm8gPSBjcmVhdGVDYXJkRGV0YWlsSW5mbyhcIkRlc2NyaXB0aW9uOlwiLCBpdGVtLmRlc2NyaXB0aW9uKTtcblxuICAgIGNhcmRDb250ZW50RGV0YWlscy5hcHBlbmRDaGlsZChkYXRlSW5mbyk7XG4gICAgY2FyZENvbnRlbnREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcbiAgICBjYXJkQ29udGVudERldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbmZvKTtcblxuICAgIHJldHVybiBjYXJkQ29udGVudERldGFpbHM7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmREZXRhaWxJbmZvID0gKGxhYmVsLCBjb250ZW50KSA9PiB7XG5cbiAgICBsZXQgZGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbnRlbnQtZGV0YWlsLWluZm9cIik7XG5cbiAgICBpZihsYWJlbCAhPSBcIlwiKXtcbiAgICAgICAgbGV0IGNvbnRhaW5lckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb250YWluZXJMYWJlbC5pbm5lckhUTUw9IGA8c3Ryb25nPiR7bGFiZWx9PC9zdHJvbmc+YDtcbiAgICAgICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxhYmVsKTtcbiAgICB9XG5cblxuICAgIGxldCBjb250YWluZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhaW5lckNvbnRlbnQuaW5uZXJUZXh0ID0gY29udGVudDtcblxuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDb250ZW50KTtcblxuICAgIHJldHVybiBkZXRhaWxDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGxvYWRQYWdlLCBibHVlUGx1cywgYmx1ZU1pbnVzIH0iLCJpbXBvcnQgdG9kb0xvZ28gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LWNsaXBib2FyZC02NC5wbmcnXG5cbmxldCBuYXYgPSAoKSA9PiB7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgbmF2LmlkID0gJ3NpZGViYXInO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkhlYWRlcigpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2Q29udGVudCgpKTtcblxuICAgIHJldHVybiBuYXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXY7XG5cbmxldCBjcmVhdGVOYXZIZWFkZXIgPSAoKSA9PiB7XG4gICAgbGV0IG5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkhlYWRlci5jbGFzc0xpc3QuYWRkKCduYXZIZWFkZXInKTtcblxuICAgIGxldCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5zcmMgPSB0b2RvTG9nbztcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnVG8gRG9cXCdzJ1xuXG4gICAgbmF2SGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIG5hdkhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgcmV0dXJuIG5hdkhlYWRlcjtcbn1cblxubGV0IGNyZWF0ZU5hdkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IG5hdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XG5cbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmsnKTtcbiAgICBob21lLmlkID0gJ2hvbWUnO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmsnKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lclRleHQgPSBcIlRhc2sgTGlzdHNcIjtcblxuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuXG4gICAgcmV0dXJuIG5hdkNvbnRlbnQ7XG59IiwiY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGUsIFxuICAgICAgICBwcm9qZWN0LCBcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoYXJyKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gYXJyLm1hcCh0YXNrID0+IHRhc2sucHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbHRlcigocHJvamVjdCwgaW5kZXgpID0+IHByb2plY3RzLmluZGV4T2YocHJvamVjdCkgPT09IGluZGV4KTtcbn1cblxuY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gKGFyciwgaW5kZXgpID0+IHtcbiAgICBhcnJbaW5kZXhdLmNvbXBsZXRlZCA9ICFhcnJbaW5kZXhdLmNvbXBsZXRlZDsgICBcbn1cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIGdldFByb2plY3RzLCB0b2dnbGVDb21wbGV0ZWQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc3QgYmx1ZVBsdXMgPSAnXFx1MjI5NSc7XG5jb25zdCBibHVlTWludXMgPSAnXFx1MjI5NidcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxubGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbmxldCBuYXZiYXIgPSBuYXYoKTtcbm1haW4uYXBwZW5kQ2hpbGQobmF2YmFyKTtcblxubG9hZFBhZ2UoXCJIb21lXCIsIHRhc2tzLCBibHVlUGx1cyk7XG5cbmNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stYnV0dG9uJyk7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1kaWFsb2ctYnRuJyk7XG5jb25zdCBjb2xsYXBzZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGFwc2UtYnV0dG9uJyk7XG5cbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0KTtcblxuICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblxuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG59KTtcblxuY29sbGFwc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgaWYoY29udGVudC5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIil7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBibHVlUGx1cztcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBibHVlTWludXM7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pXG5cbmV4cG9ydCB7IGJsdWVQbHVzIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=