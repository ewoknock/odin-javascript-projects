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
    flex-direction: column;
    font-weight: 700;
    gap: .1rem;
}

.content-temperature{
    font-size: 3rem;
}

/*  Hourly Forecast Card    */
td{
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,2BAA2B;IAC3B,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,2BAA2B;IAC3B,wBAAwB;IACxB,kJAAkJ;IAClJ,qBAAqB;IACrB,+CAA+C;;AAEnD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mCAAmC;IACnC,yBAAyB;IACzB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,mCAAmC;IACnC,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;;IAEI,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,SAAS;IACT,2DAA2D;IAC3D,6BAA6B;IAC7B,2BAA2B;IAC3B,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;IACzB,mCAAmC;IACnC,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA,yBAAyB;;AAEzB;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mCAAmC;IACnC,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;IACb,UAAU;IACV,UAAU;AACd;;AAEA;;IAEI,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA,6BAA6B;AAC7B;IACI,kBAAkB;AACtB","sourcesContent":["*,\n*::before,\n*::after{\n    box-sizing: border-box;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    --color-background: #323232;\n    --color-white: white;\n    --color-muted-grey: #efefef;\n    --color-grey: #323232;\n    --color-green: #00ca80;\n    --color-blue: #005986;\n    --color-muted-blue: #4b7ea0;\n    --color-primary: #F7F8FA;\n    --font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --border-radius: 1rem;\n    --box-shadow: 0px 2px 17px 5px rgba(0,0,0,0.12);\n\n}\n\nhtml{\n    overflow-y: hidden;\n    height: 100%;\n    font-family: var(--font-family);\n}\n\nbody{\n    background-color: var(--color-primary);\n}\n\nmain{  \n    background-color: var(--color-muted-blue);\n    display: flex;\n    height: 100vh;\n}\n\nnav{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--color-blue);\n    color: var(--color-white);\n    padding: 1rem;\n    font-size: 1.2rem;\n}\n\n.nav-search-bar{\n    background-color: var(--color-muted-blue);\n    border-radius: var(--border-radius);\n    padding: .5rem 2rem;\n    border: none;\n    text-align: left;\n}\n\n.nav-search-bar,\n.nav-search-bar::placeholder{\n    color: var(--color-white);\n    overflow: visible;\n}\n\n.nav-temp-selector{\n    display: flex;\n    align-items: center;\n    gap: .3rem;\n}\n\n.nav-temp-selector span{\n    padding-bottom: .4rem;\n}\n\n.nav-actions button{\n    border: none;\n    color: var(--color-white);\n    font-size: 1rem;\n    background-color: var(--color-blue);\n}\n\n.nav-actions div{\n    font-size: .9rem;\n    font-weight: 500;\n    padding-bottom: .1rem;\n}\n\n.nav-actions button:hover,\n.active{\n    text-decoration: underline;\n    text-underline-offset: .3rem;\n}\n\n/*  CITY CARD    */\n.card-container{\n    display: grid;\n    gap: 2rem;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    justify-content: space-around;\n    margin: 5rem 5rem 8rem 5rem;\n    width: 90%;\n\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--color-white);\n    background-color: var(--color-blue);\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    padding: 2rem;\n}\n\n.card-header{\n    font-size: 2rem;\n    text-align: center;\n}\n\n.card div{\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n\n/*  CITY WEATHER CARD   */\n\n.details{\n    padding: 3rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n}\n\n.details-summary,\n.hourly-summary{\n    display: flex;\n    flex-direction: column;\n    color: var(--color-white);\n    background-color: var(--color-blue);\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    padding: 1rem;\n    gap: .5rem;\n    width: 60%;\n}\n\n.details-summary-header,\n.hourly-summary-header{\n    background-color: var(--color-blue);\n    font-size: 1.5rem;\n}\n\n.details-summary-header span{\n    font-size: 1rem;\n}\n\n.details-summary-content{\n    display: flex;\n    flex-direction: column;\n    font-weight: 700;\n    gap: .1rem;\n}\n\n.content-temperature{\n    font-size: 3rem;\n}\n\n/*  Hourly Forecast Card    */\ntd{\n    text-align: center;\n}"],"sourceRoot":""}]);
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
    let minutes = time.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours %= 12;
    hours = hours ? hours : 12;
    
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _cityDetailsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityDetailsPage */ "./src/cityDetailsPage.js");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _unitsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unitsManager */ "./src/unitsManager.js");





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
    const cityWeather = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_2__.getCityWeather)(latitude, longitude)

    const cardWeather = document.createElement('div')
    cardWeather.classList.add('card-weather')
    cardWeather.append(cityWeather.weather[0].main)
    card.append(cardWeather)

    const cardTemperature = document.createElement('div')
    cardTemperature.classList.add('card-temperature')
    cardTemperature.append(`${_unitsManager__WEBPACK_IMPORTED_MODULE_3__["default"].getTemperature(cityWeather.main.temp)}°F`)
    card.append(cardTemperature)

    card.addEventListener('click', async() => {

        const cityForecast = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_2__.getCityForecast)(latitude, longitude)
        ;(0,_display__WEBPACK_IMPORTED_MODULE_0__.clearContent)()
        ;(0,_cityDetailsPage__WEBPACK_IMPORTED_MODULE_1__["default"])(cityWeather, cityForecast.list.slice(0,5))
    })


}

const makeCityCards = (cityList) => {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    cityList.forEach((city) => makeCard(cardContainer, city))

    return cardContainer
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



const makeDetailsSummaryCard = (cityWeather) => {
    const currentTime = new Date(Date.now())

    const detailsSummaryHeader = document.querySelector('.details-summary-header')
    detailsSummaryHeader.innerHTML = `<strong>${cityWeather.name}</strong> <span>as of ${currentTime.toLocaleTimeString()}</span>`

    const detailsTemperature = document.querySelector('.content-temperature')
    detailsTemperature.innerText = `${_unitsManager__WEBPACK_IMPORTED_MODULE_1__["default"].getTemperature(cityWeather.main.temp)}°`
    
    const detailsWeather = document.querySelector('.content-weather')
    detailsWeather.innerText = `${cityWeather.weather[0].main}`

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
        const weatherCode = weather.weather[0].main
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

const makeDetailsPage = (cityWeather, cityForecast) => {
    const container = document.querySelector('main');
    const template = document.querySelector('#details-template')
    const detailsTemplate = document.importNode(template.content, true);
    container.append(detailsTemplate);

    makeDetailsSummaryCard(cityWeather)
    makeHourlyForecastCard(cityForecast);
    console.log(cityWeather);
    console.log(cityForecast);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeDetailsPage);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addContent: () => (/* binding */ addContent),
/* harmony export */   clearContent: () => (/* binding */ clearContent)
/* harmony export */ });
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

    const getUnits = () => units;

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
/* harmony export */   getCityForecast: () => (/* binding */ getCityForecast),
/* harmony export */   getCityList: () => (/* binding */ getCityList),
/* harmony export */   getCityWeather: () => (/* binding */ getCityWeather)
/* harmony export */ });
const API_KEY = '8095bf42b6706e42f1b2fde540e8937d'

const getCityList = async() => {
    const cityInput = document.querySelector('#city')
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${API_KEY}`, { mode: 'cors'})
    const cityList = await response.json();
    cityInput.value = '';
    return cityList;
}

const getCityWeather = async (latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
    const cityWeather = await response.json();

    return cityWeather;
}

const getCityForecast = async (latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
    const cityForecast = await response.json();

    return cityForecast
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const searchBar = document.querySelector('#city');

const fahrenheit = document.querySelector('.nav-temp-fahrenheit')
fahrenheit.classList.add('active')

searchBar.addEventListener('keydown', async(e) => {
    if(e.key === 'Enter'){
        if(!searchBar.value) return;

        (0,_display__WEBPACK_IMPORTED_MODULE_1__.clearContent)();

        const cityInfo = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getCityList)()
        const content = await (0,_cityCards__WEBPACK_IMPORTED_MODULE_2__["default"])(cityInfo)
        ;(0,_display__WEBPACK_IMPORTED_MODULE_1__.addContent)(content)


    }
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ1U7QUFDZDtBQUNsQjs7QUFFckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBWTs7QUFFcEIsK0JBQStCLHdEQUFXO0FBQzFDLDhCQUE4QixzREFBYTtBQUMzQyxRQUFRLHFEQUFVOzs7QUFHbEI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RhdGFDb252ZXJ0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaXR5Q2FyZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaXR5RGV0YWlsc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdW5pdHNNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvd2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuOnJvb3R7XG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzIzMjMyO1xuICAgIC0tY29sb3Itd2hpdGU6IHdoaXRlO1xuICAgIC0tY29sb3ItbXV0ZWQtZ3JleTogI2VmZWZlZjtcbiAgICAtLWNvbG9yLWdyZXk6ICMzMjMyMzI7XG4gICAgLS1jb2xvci1ncmVlbjogIzAwY2E4MDtcbiAgICAtLWNvbG9yLWJsdWU6ICMwMDU5ODY7XG4gICAgLS1jb2xvci1tdXRlZC1ibHVlOiAjNGI3ZWEwO1xuICAgIC0tY29sb3ItcHJpbWFyeTogI0Y3RjhGQTtcbiAgICAtLWZvbnQtZmFtaWx5OiAnTGF0bycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDE3cHggNXB4IHJnYmEoMCwwLDAsMC4xMik7XG5cbn1cblxuaHRtbHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbm1haW57ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZC1ibHVlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbm5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm5hdi1zZWFyY2gtYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uYXYtc2VhcmNoLWJhcixcbi5uYXYtc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLm5hdi10ZW1wLXNlbGVjdG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC4zcmVtO1xufVxuXG4ubmF2LXRlbXAtc2VsZWN0b3Igc3BhbntcbiAgICBwYWRkaW5nLWJvdHRvbTogLjRyZW07XG59XG5cbi5uYXYtYWN0aW9ucyBidXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xufVxuXG4ubmF2LWFjdGlvbnMgZGl2e1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjFyZW07XG59XG5cbi5uYXYtYWN0aW9ucyBidXR0b246aG92ZXIsXG4uYWN0aXZle1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogLjNyZW07XG59XG5cbi8qICBDSVRZIENBUkQgICAgKi9cbi5jYXJkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDVyZW0gNXJlbSA4cmVtIDVyZW07XG4gICAgd2lkdGg6IDkwJTtcblxufVxuXG4uY2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uY2FyZC1oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQgZGl2e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbi8qICBDSVRZIFdFQVRIRVIgQ0FSRCAgICovXG5cbi5kZXRhaWxze1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uZGV0YWlscy1zdW1tYXJ5LFxuLmhvdXJseS1zdW1tYXJ5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZ2FwOiAuNXJlbTtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uZGV0YWlscy1zdW1tYXJ5LWhlYWRlcixcbi5ob3VybHktc3VtbWFyeS1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5kZXRhaWxzLXN1bW1hcnktaGVhZGVyIHNwYW57XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZGV0YWlscy1zdW1tYXJ5LWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZ2FwOiAuMXJlbTtcbn1cblxuLmNvbnRlbnQtdGVtcGVyYXR1cmV7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4vKiAgSG91cmx5IEZvcmVjYXN0IENhcmQgICAgKi9cbnRke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGtKQUFrSjtJQUNsSixxQkFBcUI7SUFDckIsK0NBQStDOztBQUVuRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsMkRBQTJEO0lBQzNELDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQSx5QkFBeUI7O0FBRXpCO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzIzMjMyO1xcbiAgICAtLWNvbG9yLXdoaXRlOiB3aGl0ZTtcXG4gICAgLS1jb2xvci1tdXRlZC1ncmV5OiAjZWZlZmVmO1xcbiAgICAtLWNvbG9yLWdyZXk6ICMzMjMyMzI7XFxuICAgIC0tY29sb3ItZ3JlZW46ICMwMGNhODA7XFxuICAgIC0tY29sb3ItYmx1ZTogIzAwNTk4NjtcXG4gICAgLS1jb2xvci1tdXRlZC1ibHVlOiAjNGI3ZWEwO1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNGN0Y4RkE7XFxuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC0tYm94LXNoYWRvdzogMHB4IDJweCAxN3B4IDVweCByZ2JhKDAsMCwwLDAuMTIpO1xcblxcbn1cXG5cXG5odG1se1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbm1haW57ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYtc2VhcmNoLWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5uYXYtc2VhcmNoLWJhcixcXG4ubmF2LXNlYXJjaC1iYXI6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLm5hdi10ZW1wLXNlbGVjdG9ye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4zcmVtO1xcbn1cXG5cXG4ubmF2LXRlbXAtc2VsZWN0b3Igc3BhbntcXG4gICAgcGFkZGluZy1ib3R0b206IC40cmVtO1xcbn1cXG5cXG4ubmF2LWFjdGlvbnMgYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5uYXYtYWN0aW9ucyBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAuMXJlbTtcXG59XFxuXFxuLm5hdi1hY3Rpb25zIGJ1dHRvbjpob3ZlcixcXG4uYWN0aXZle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuM3JlbTtcXG59XFxuXFxuLyogIENJVFkgQ0FSRCAgICAqL1xcbi5jYXJkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbjogNXJlbSA1cmVtIDhyZW0gNXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG5cXG59XFxuXFxuLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmNhcmQtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgZGl2e1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcbi8qICBDSVRZIFdFQVRIRVIgQ0FSRCAgICovXFxuXFxuLmRldGFpbHN7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5kZXRhaWxzLXN1bW1hcnksXFxuLmhvdXJseS1zdW1tYXJ5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZGV0YWlscy1zdW1tYXJ5LWhlYWRlcixcXG4uaG91cmx5LXN1bW1hcnktaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kZXRhaWxzLXN1bW1hcnktaGVhZGVyIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMtc3VtbWFyeS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBnYXA6IC4xcmVtO1xcbn1cXG5cXG4uY29udGVudC10ZW1wZXJhdHVyZXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4vKiAgSG91cmx5IEZvcmVjYXN0IENhcmQgICAgKi9cXG50ZHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qga2VsdmluVG9GYWhyZW5oZWl0ID0gKHQpID0+IE1hdGgucm91bmQoKHQgLSAyNzMuMTUpICogMS44ICsgMzIpXG5cbmNvbnN0IGtlbHZpblRvQ2Vsc2l1cyA9ICh0KSA9PiBNYXRoLnJvdW5kKHQgLSAyNzMuMTUpXG5cbmNvbnN0IGZvcm1hdFRpbWVzdGFtcCA9ICh0aW1lKSA9PiB7XG4gICAgbGV0IGhvdXJzID0gdGltZS5nZXRIb3VycygpXG4gICAgbGV0IG1pbnV0ZXMgPSB0aW1lLmdldE1pbnV0ZXMoKVxuICAgIGNvbnN0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nXG4gICAgaG91cnMgJT0gMTI7XG4gICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7XG4gICAgXG4gICAgY29uc3Qgc3RyVGltZSA9IGAke2hvdXJzfSAke2FtcG19YFxuICAgIHJldHVybiBzdHJUaW1lXG5cbn1cblxuZXhwb3J0IHtcbiAgICBrZWx2aW5Ub0ZhaHJlbmhlaXQsXG4gICAga2VsdmluVG9DZWxzaXVzLFxuICAgIGZvcm1hdFRpbWVzdGFtcCxcbn0iLCJpbXBvcnQgeyBjbGVhckNvbnRlbnQgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgbWFrZURldGFpbHNQYWdlIGZyb20gXCIuL2NpdHlEZXRhaWxzUGFnZVwiO1xuaW1wb3J0IHsgZ2V0Q2l0eVdlYXRoZXIsIGdldENpdHlGb3JlY2FzdCB9IGZyb20gXCIuL3dlYXRoZXJBUElcIjtcbmltcG9ydCB1bml0c01hbmFnZXIgZnJvbSAnLi91bml0c01hbmFnZXInXG5cbmNvbnN0IG1ha2VDYXJkID0gYXN5bmMoY2FyZENvbnRhaW5lciwgY2l0eSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGF0aXR1ZGUnLCBjaXR5LmxhdClcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1sb25naXR1ZGUnLCBjaXR5LmxvbilcblxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgY2FyZEhlYWRlci5hcHBlbmQoYCR7Y2l0eS5uYW1lfSR7Y2l0eS5zdGF0ZSA/IGAsICR7ICBjaXR5LnN0YXRlfWAgOiAnJ30ke2NpdHkuY291bnRyeSA/IGAsICR7ICBjaXR5LmNvdW50cnl9YCA6ICcnfWApXG4gICAgXG4gICAgY2FyZC5hcHBlbmQoY2FyZEhlYWRlcilcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZChjYXJkKVxuXG4gICAgY29uc3Qge2xhdGl0dWRlLCBsb25naXR1ZGV9ID0gY2FyZC5kYXRhc2V0XG4gICAgY29uc3QgY2l0eVdlYXRoZXIgPSBhd2FpdCBnZXRDaXR5V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKVxuXG4gICAgY29uc3QgY2FyZFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd2VhdGhlcicpXG4gICAgY2FyZFdlYXRoZXIuYXBwZW5kKGNpdHlXZWF0aGVyLndlYXRoZXJbMF0ubWFpbilcbiAgICBjYXJkLmFwcGVuZChjYXJkV2VhdGhlcilcblxuICAgIGNvbnN0IGNhcmRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZFRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGVtcGVyYXR1cmUnKVxuICAgIGNhcmRUZW1wZXJhdHVyZS5hcHBlbmQoYCR7dW5pdHNNYW5hZ2VyLmdldFRlbXBlcmF0dXJlKGNpdHlXZWF0aGVyLm1haW4udGVtcCl9wrBGYClcbiAgICBjYXJkLmFwcGVuZChjYXJkVGVtcGVyYXR1cmUpXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY2l0eUZvcmVjYXN0ID0gYXdhaXQgZ2V0Q2l0eUZvcmVjYXN0KGxhdGl0dWRlLCBsb25naXR1ZGUpXG4gICAgICAgIGNsZWFyQ29udGVudCgpXG4gICAgICAgIG1ha2VEZXRhaWxzUGFnZShjaXR5V2VhdGhlciwgY2l0eUZvcmVjYXN0Lmxpc3Quc2xpY2UoMCw1KSlcbiAgICB9KVxuXG5cbn1cblxuY29uc3QgbWFrZUNpdHlDYXJkcyA9IChjaXR5TGlzdCkgPT4ge1xuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKVxuXG4gICAgY2l0eUxpc3QuZm9yRWFjaCgoY2l0eSkgPT4gbWFrZUNhcmQoY2FyZENvbnRhaW5lciwgY2l0eSkpXG5cbiAgICByZXR1cm4gY2FyZENvbnRhaW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2l0eUNhcmRzIiwiaW1wb3J0IHsgZm9ybWF0VGltZXN0YW1wIH0gZnJvbSBcIi4vRGF0YUNvbnZlcnRvclwiXG5pbXBvcnQgdW5pdHNNYW5hZ2VyIGZyb20gXCIuL3VuaXRzTWFuYWdlclwiXG5cbmNvbnN0IG1ha2VEZXRhaWxzU3VtbWFyeUNhcmQgPSAoY2l0eVdlYXRoZXIpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKERhdGUubm93KCkpXG5cbiAgICBjb25zdCBkZXRhaWxzU3VtbWFyeUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXN1bW1hcnktaGVhZGVyJylcbiAgICBkZXRhaWxzU3VtbWFyeUhlYWRlci5pbm5lckhUTUwgPSBgPHN0cm9uZz4ke2NpdHlXZWF0aGVyLm5hbWV9PC9zdHJvbmc+IDxzcGFuPmFzIG9mICR7Y3VycmVudFRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9zcGFuPmBcblxuICAgIGNvbnN0IGRldGFpbHNUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRlbXBlcmF0dXJlJylcbiAgICBkZXRhaWxzVGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7dW5pdHNNYW5hZ2VyLmdldFRlbXBlcmF0dXJlKGNpdHlXZWF0aGVyLm1haW4udGVtcCl9wrBgXG4gICAgXG4gICAgY29uc3QgZGV0YWlsc1dlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC13ZWF0aGVyJylcbiAgICBkZXRhaWxzV2VhdGhlci5pbm5lclRleHQgPSBgJHtjaXR5V2VhdGhlci53ZWF0aGVyWzBdLm1haW59YFxuXG4gICAgY29uc3QgZGV0YWlsc0hpZ2hMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oaWdoLWxvdycpXG4gICAgZGV0YWlsc0hpZ2hMb3cuaW5uZXJUZXh0ID0gYEhpZ2ggJHt1bml0c01hbmFnZXIuZ2V0VGVtcGVyYXR1cmUoY2l0eVdlYXRoZXIubWFpbi50ZW1wX21heCl9wrAg4oCiIExvdyAke3VuaXRzTWFuYWdlci5nZXRUZW1wZXJhdHVyZShjaXR5V2VhdGhlci5tYWluLnRlbXBfbWluKX3CsGBcbn1cblxuY29uc3QgY3JlYXRlVGFibGVDZWxsID0gKGNlbGxDbGFzcywgdmFsdWUpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChjZWxsQ2xhc3MpXG4gICAgY2VsbC5hcHBlbmQodmFsdWUpXG4gICAgcmV0dXJuIGNlbGxcbn1cblxuY29uc3QgbWFrZUhvdXJseUZvcmVjYXN0Q2FyZCA9IChjaXR5Rm9yZWNhc3QpID0+IHtcbiAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktc3VtbWFyeS1jb250ZW50JylcblxuICAgIGNpdHlGb3JlY2FzdC5mb3JFYWNoKCh3ZWF0aGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBmb3JtYXRUaW1lc3RhbXAobmV3IERhdGUod2VhdGhlci5kdCAqIDEwMDApKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29kZSA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluXG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gYCR7dW5pdHNNYW5hZ2VyLmdldFRlbXBlcmF0dXJlKHdlYXRoZXIubWFpbi50ZW1wKX3CsGBcblxuICAgICAgICBjb25zdCBmb3JlY2FzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcblxuICAgICAgICBjb25zdCB0aW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCgnaG91cmx5LXRpbWUnLCB0aW1lKVxuICAgICAgICBjb25zdCB0ZW1wQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCgnaG91cmx5LXRlbXAnLCB0ZW1wZXJhdHVyZSlcbiAgICAgICAgY29uc3Qgd2VhdGhlckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoJ2hvdXJseS13ZWF0aGVyJywgd2VhdGhlckNvZGUpXG5cbiAgICAgICAgZm9yZWNhc3RSb3cuYXBwZW5kKHRpbWVDZWxsKVxuICAgICAgICBmb3JlY2FzdFJvdy5hcHBlbmQodGVtcENlbGwpXG4gICAgICAgIGZvcmVjYXN0Um93LmFwcGVuZCh3ZWF0aGVyQ2VsbClcblxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmQoZm9yZWNhc3RSb3cpXG4gICAgfSlcbn1cblxuY29uc3QgbWFrZURldGFpbHNQYWdlID0gKGNpdHlXZWF0aGVyLCBjaXR5Rm9yZWNhc3QpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscy10ZW1wbGF0ZScpXG4gICAgY29uc3QgZGV0YWlsc1RlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGRldGFpbHNUZW1wbGF0ZSk7XG5cbiAgICBtYWtlRGV0YWlsc1N1bW1hcnlDYXJkKGNpdHlXZWF0aGVyKVxuICAgIG1ha2VIb3VybHlGb3JlY2FzdENhcmQoY2l0eUZvcmVjYXN0KTtcbiAgICBjb25zb2xlLmxvZyhjaXR5V2VhdGhlcik7XG4gICAgY29uc29sZS5sb2coY2l0eUZvcmVjYXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZURldGFpbHNQYWdlIiwiY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNvbnN0IGFkZENvbnRlbnQgPSAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmQoY29udGVudClcbn1cblxuZXhwb3J0e1xuICAgIGNsZWFyQ29udGVudCxcbiAgICBhZGRDb250ZW50XG59IiwiaW1wb3J0IHsga2VsdmluVG9DZWxzaXVzLCBrZWx2aW5Ub0ZhaHJlbmhlaXQgfSBmcm9tIFwiLi9EYXRhQ29udmVydG9yXCI7XG5cbmNvbnN0IHVuaXRzTWFuYWdlciA9ICgoKSA9PiB7XG4gICAgbGV0IHVuaXRzID0gJ0ZhaHJlbmhlaXQnXG5cbiAgICBjb25zdCBnZXRVbml0cyA9ICgpID0+IHVuaXRzO1xuXG4gICAgY29uc3Qgc2V0VW5pdHMgPSAodW5pdCkgPT4ge1xuICAgICAgICB1bml0cyA9IHVuaXQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGVtcGVyYXR1cmUgPSAodGVtcCkgPT4gKHVuaXRzID09PSAnRmFocmVuaGVpdCcgPyBrZWx2aW5Ub0ZhaHJlbmhlaXQodGVtcCkgOiBrZWx2aW5Ub0NlbHNpdXModGVtcCkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRVbml0cywgc2V0VW5pdHMsIGdldFRlbXBlcmF0dXJlXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCB1bml0c01hbmFnZXI7IiwiY29uc3QgQVBJX0tFWSA9ICc4MDk1YmY0MmI2NzA2ZTQyZjFiMmZkZTU0MGU4OTM3ZCdcblxuY29uc3QgZ2V0Q2l0eUxpc3QgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlJbnB1dC52YWx1ZX0mbGltaXQ9NSZhcHBpZD0ke0FQSV9LRVl9YCwgeyBtb2RlOiAnY29ycyd9KVxuICAgIGNvbnN0IGNpdHlMaXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNpdHlJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHJldHVybiBjaXR5TGlzdDtcbn1cblxuY29uc3QgZ2V0Q2l0eVdlYXRoZXIgPSBhc3luYyAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7QVBJX0tFWX1gLCB7IG1vZGU6ICdjb3JzJ30pXG4gICAgY29uc3QgY2l0eVdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gY2l0eVdlYXRoZXI7XG59XG5cbmNvbnN0IGdldENpdHlGb3JlY2FzdCA9IGFzeW5jIChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7QVBJX0tFWX1gLCB7IG1vZGU6ICdjb3JzJ30pXG4gICAgY29uc3QgY2l0eUZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGNpdHlGb3JlY2FzdFxufVxuXG5leHBvcnR7XG4gICAgZ2V0Q2l0eUxpc3QsXG4gICAgZ2V0Q2l0eVdlYXRoZXIsXG4gICAgZ2V0Q2l0eUZvcmVjYXN0XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnZXRDaXR5TGlzdCB9IGZyb20gJy4vd2VhdGhlckFQSSc7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQsIGFkZENvbnRlbnQgfSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IG1ha2VDaXR5Q2FyZHMgZnJvbSAnLi9jaXR5Q2FyZHMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcblxuY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGVtcC1mYWhyZW5oZWl0JylcbmZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhc3luYyhlKSA9PiB7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICBpZighc2VhcmNoQmFyLnZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG5cbiAgICAgICAgY29uc3QgY2l0eUluZm8gPSBhd2FpdCBnZXRDaXR5TGlzdCgpXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYWtlQ2l0eUNhcmRzKGNpdHlJbmZvKVxuICAgICAgICBhZGRDb250ZW50KGNvbnRlbnQpXG5cblxuICAgIH1cbn0pXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9