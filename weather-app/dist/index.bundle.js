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
/* harmony import */ var _DataConvertor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataConvertor */ "./src/DataConvertor.js");





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
    cardTemperature.append(`${(0,_DataConvertor__WEBPACK_IMPORTED_MODULE_3__.kelvinToFahrenheit)(cityWeather.main.temp)}°F`)
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


const makeDetailsSummaryCard = (cityWeather) => {
    const currentTime = new Date(Date.now())

    const detailsSummaryHeader = document.querySelector('.details-summary-header')
    detailsSummaryHeader.innerHTML = `<strong>${cityWeather.name}</strong> <span>as of ${currentTime.toLocaleTimeString()}</span>`

    const detailsTemperature = document.querySelector('.content-temperature')
    detailsTemperature.innerText = `${(0,_DataConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(cityWeather.main.temp)}°`
    
    const detailsWeather = document.querySelector('.content-weather')
    detailsWeather.innerText = `${cityWeather.weather[0].main}`

    const detailsHighLow = document.querySelector('.content-high-low')
    detailsHighLow.innerText = `High ${(0,_DataConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(cityWeather.main.temp_max)}° • Low ${(0,_DataConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(cityWeather.main.temp_min)}°`
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
        const temperature = `${(0,_DataConvertor__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(weather.main.temp)}°`

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDVTtBQUNkO0FBQ2xCOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHNEQUFZOztBQUVwQiwrQkFBK0Isd0RBQVc7QUFDMUMsOEJBQThCLHNEQUFhO0FBQzNDLFFBQVEscURBQVU7OztBQUdsQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRGF0YUNvbnZlcnRvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NpdHlDYXJkcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NpdHlEZXRhaWxzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlcntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdHtcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICMzMjMyMzI7XG4gICAgLS1jb2xvci13aGl0ZTogd2hpdGU7XG4gICAgLS1jb2xvci1tdXRlZC1ncmV5OiAjZWZlZmVmO1xuICAgIC0tY29sb3ItZ3JleTogIzMyMzIzMjtcbiAgICAtLWNvbG9yLWdyZWVuOiAjMDBjYTgwO1xuICAgIC0tY29sb3ItYmx1ZTogIzAwNTk4NjtcbiAgICAtLWNvbG9yLW11dGVkLWJsdWU6ICM0YjdlYTA7XG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjdGOEZBO1xuICAgIC0tZm9udC1mYW1pbHk6ICdMYXRvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTdweCA1cHggcmdiYSgwLDAsMCwwLjEyKTtcblxufVxuXG5odG1se1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxubWFpbnsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkLWJsdWUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubmF2LXNlYXJjaC1iYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5hdi1zZWFyY2gtYmFyLFxuLm5hdi1zZWFyY2gtYmFyOjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubmF2LXRlbXAtc2VsZWN0b3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjNyZW07XG59XG5cbi5uYXYtdGVtcC1zZWxlY3RvciBzcGFue1xuICAgIHBhZGRpbmctYm90dG9tOiAuNHJlbTtcbn1cblxuLm5hdi1hY3Rpb25zIGJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG5cbi5uYXYtYWN0aW9ucyBkaXZ7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAuMXJlbTtcbn1cblxuLm5hdi1hY3Rpb25zIGJ1dHRvbjpob3Zlcixcbi5hY3RpdmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuM3JlbTtcbn1cblxuLyogIENJVFkgQ0FSRCAgICAqL1xuLmNhcmQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogNXJlbSA1cmVtIDhyZW0gNXJlbTtcbiAgICB3aWR0aDogOTAlO1xuXG59XG5cbi5jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jYXJkLWhlYWRlcntcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBkaXZ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cblxuLyogIENJVFkgV0VBVEhFUiBDQVJEICAgKi9cblxuLmRldGFpbHN7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5kZXRhaWxzLXN1bW1hcnksXG4uaG91cmx5LXN1bW1hcnl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IC41cmVtO1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5kZXRhaWxzLXN1bW1hcnktaGVhZGVyLFxuLmhvdXJseS1zdW1tYXJ5LWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmRldGFpbHMtc3VtbWFyeS1oZWFkZXIgc3BhbntcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kZXRhaWxzLXN1bW1hcnktY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBnYXA6IC4xcmVtO1xufVxuXG4uY29udGVudC10ZW1wZXJhdHVyZXtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi8qICBIb3VybHkgRm9yZWNhc3QgQ2FyZCAgICAqL1xudGR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsa0pBQWtKO0lBQ2xKLHFCQUFxQjtJQUNyQiwrQ0FBK0M7O0FBRW5EOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCwyREFBMkQ7SUFDM0QsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUdBLHlCQUF5Qjs7QUFFekI7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290e1xcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICMzMjMyMzI7XFxuICAgIC0tY29sb3Itd2hpdGU6IHdoaXRlO1xcbiAgICAtLWNvbG9yLW11dGVkLWdyZXk6ICNlZmVmZWY7XFxuICAgIC0tY29sb3ItZ3JleTogIzMyMzIzMjtcXG4gICAgLS1jb2xvci1ncmVlbjogIzAwY2E4MDtcXG4gICAgLS1jb2xvci1ibHVlOiAjMDA1OTg2O1xcbiAgICAtLWNvbG9yLW11dGVkLWJsdWU6ICM0YjdlYTA7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogI0Y3RjhGQTtcXG4gICAgLS1mb250LWZhbWlseTogJ0xhdG8nLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDE3cHggNXB4IHJnYmEoMCwwLDAsMC4xMik7XFxuXFxufVxcblxcbmh0bWx7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxubWFpbnsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZC1ibHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5hdi1zZWFyY2gtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZC1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLm5hdi1zZWFyY2gtYmFyLFxcbi5uYXYtc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ubmF2LXRlbXAtc2VsZWN0b3J7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjNyZW07XFxufVxcblxcbi5uYXYtdGVtcC1zZWxlY3RvciBzcGFue1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjRyZW07XFxufVxcblxcbi5uYXYtYWN0aW9ucyBidXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLm5hdi1hY3Rpb25zIGRpdntcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IC4xcmVtO1xcbn1cXG5cXG4ubmF2LWFjdGlvbnMgYnV0dG9uOmhvdmVyLFxcbi5hY3RpdmV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IC4zcmVtO1xcbn1cXG5cXG4vKiAgQ0lUWSBDQVJEICAgICovXFxuLmNhcmQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luOiA1cmVtIDVyZW0gOHJlbSA1cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcblxcbn1cXG5cXG4uY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuXFxuLyogIENJVFkgV0VBVEhFUiBDQVJEICAgKi9cXG5cXG4uZGV0YWlsc3tcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmRldGFpbHMtc3VtbWFyeSxcXG4uaG91cmx5LXN1bW1hcnl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdhcDogLjVyZW07XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5kZXRhaWxzLXN1bW1hcnktaGVhZGVyLFxcbi5ob3VybHktc3VtbWFyeS1oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmRldGFpbHMtc3VtbWFyeS1oZWFkZXIgc3BhbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlscy1zdW1tYXJ5LWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGdhcDogLjFyZW07XFxufVxcblxcbi5jb250ZW50LXRlbXBlcmF0dXJle1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qICBIb3VybHkgRm9yZWNhc3QgQ2FyZCAgICAqL1xcbnRke1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBrZWx2aW5Ub0ZhaHJlbmhlaXQgPSAodCkgPT4gTWF0aC5yb3VuZCgodCAtIDI3My4xNSkgKiAxLjggKyAzMilcblxuY29uc3Qga2VsdmluVG9DZWxzaXVzID0gKHQpID0+IE1hdGgucm91bmQodCAtIDI3My4xNSlcblxuY29uc3QgZm9ybWF0VGltZXN0YW1wID0gKHRpbWUpID0+IHtcbiAgICBsZXQgaG91cnMgPSB0aW1lLmdldEhvdXJzKClcbiAgICBsZXQgbWludXRlcyA9IHRpbWUuZ2V0TWludXRlcygpXG4gICAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSdcbiAgICBob3VycyAlPSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjtcbiAgICBcbiAgICBjb25zdCBzdHJUaW1lID0gYCR7aG91cnN9ICR7YW1wbX1gXG4gICAgcmV0dXJuIHN0clRpbWVcblxufVxuXG5leHBvcnQge1xuICAgIGtlbHZpblRvRmFocmVuaGVpdCxcbiAgICBrZWx2aW5Ub0NlbHNpdXMsXG4gICAgZm9ybWF0VGltZXN0YW1wLFxufSIsImltcG9ydCB7IGNsZWFyQ29udGVudCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBtYWtlRGV0YWlsc1BhZ2UgZnJvbSBcIi4vY2l0eURldGFpbHNQYWdlXCI7XG5pbXBvcnQgeyBnZXRDaXR5V2VhdGhlciwgZ2V0Q2l0eUZvcmVjYXN0IH0gZnJvbSBcIi4vd2VhdGhlckFQSVwiO1xuaW1wb3J0IHsga2VsdmluVG9GYWhyZW5oZWl0IH0gZnJvbSBcIi4vRGF0YUNvbnZlcnRvclwiO1xuXG5jb25zdCBtYWtlQ2FyZCA9IGFzeW5jKGNhcmRDb250YWluZXIsIGNpdHkpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWxhdGl0dWRlJywgY2l0eS5sYXQpXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9uZ2l0dWRlJywgY2l0eS5sb24pXG5cbiAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGNhcmRIZWFkZXIuYXBwZW5kKGAke2NpdHkubmFtZX0ke2NpdHkuc3RhdGUgPyBgLCAkeyAgY2l0eS5zdGF0ZX1gIDogJyd9JHtjaXR5LmNvdW50cnkgPyBgLCAkeyAgY2l0eS5jb3VudHJ5fWAgOiAnJ31gKVxuICAgIFxuICAgIGNhcmQuYXBwZW5kKGNhcmRIZWFkZXIpXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmQoY2FyZClcblxuICAgIGNvbnN0IHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IGNhcmQuZGF0YXNldFxuICAgIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgZ2V0Q2l0eVdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSlcblxuICAgIGNvbnN0IGNhcmRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkV2VhdGhlci5jbGFzc0xpc3QuYWRkKCdjYXJkLXdlYXRoZXInKVxuICAgIGNhcmRXZWF0aGVyLmFwcGVuZChjaXR5V2VhdGhlci53ZWF0aGVyWzBdLm1haW4pXG4gICAgY2FyZC5hcHBlbmQoY2FyZFdlYXRoZXIpXG5cbiAgICBjb25zdCBjYXJkVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRlbXBlcmF0dXJlJylcbiAgICBjYXJkVGVtcGVyYXR1cmUuYXBwZW5kKGAke2tlbHZpblRvRmFocmVuaGVpdChjaXR5V2VhdGhlci5tYWluLnRlbXApfcKwRmApXG4gICAgY2FyZC5hcHBlbmQoY2FyZFRlbXBlcmF0dXJlKVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNpdHlGb3JlY2FzdCA9IGF3YWl0IGdldENpdHlGb3JlY2FzdChsYXRpdHVkZSwgbG9uZ2l0dWRlKVxuICAgICAgICBjbGVhckNvbnRlbnQoKVxuICAgICAgICBtYWtlRGV0YWlsc1BhZ2UoY2l0eVdlYXRoZXIsIGNpdHlGb3JlY2FzdC5saXN0LnNsaWNlKDAsNSkpXG4gICAgfSlcblxuXG59XG5cbmNvbnN0IG1ha2VDaXR5Q2FyZHMgPSAoY2l0eUxpc3QpID0+IHtcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJylcblxuICAgIGNpdHlMaXN0LmZvckVhY2goKGNpdHkpID0+IG1ha2VDYXJkKGNhcmRDb250YWluZXIsIGNpdHkpKVxuXG4gICAgcmV0dXJuIGNhcmRDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNpdHlDYXJkcyIsImltcG9ydCB7IGtlbHZpblRvQ2Vsc2l1cywga2VsdmluVG9GYWhyZW5oZWl0LCBmb3JtYXRUaW1lc3RhbXAgfSBmcm9tIFwiLi9EYXRhQ29udmVydG9yXCJcblxuY29uc3QgbWFrZURldGFpbHNTdW1tYXJ5Q2FyZCA9IChjaXR5V2VhdGhlcikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSlcblxuICAgIGNvbnN0IGRldGFpbHNTdW1tYXJ5SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtc3VtbWFyeS1oZWFkZXInKVxuICAgIGRldGFpbHNTdW1tYXJ5SGVhZGVyLmlubmVySFRNTCA9IGA8c3Ryb25nPiR7Y2l0eVdlYXRoZXIubmFtZX08L3N0cm9uZz4gPHNwYW4+YXMgb2YgJHtjdXJyZW50VGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NwYW4+YFxuXG4gICAgY29uc3QgZGV0YWlsc1RlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGVtcGVyYXR1cmUnKVxuICAgIGRldGFpbHNUZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHtrZWx2aW5Ub0ZhaHJlbmhlaXQoY2l0eVdlYXRoZXIubWFpbi50ZW1wKX3CsGBcbiAgICBcbiAgICBjb25zdCBkZXRhaWxzV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdlYXRoZXInKVxuICAgIGRldGFpbHNXZWF0aGVyLmlubmVyVGV4dCA9IGAke2NpdHlXZWF0aGVyLndlYXRoZXJbMF0ubWFpbn1gXG5cbiAgICBjb25zdCBkZXRhaWxzSGlnaExvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhpZ2gtbG93JylcbiAgICBkZXRhaWxzSGlnaExvdy5pbm5lclRleHQgPSBgSGlnaCAke2tlbHZpblRvRmFocmVuaGVpdChjaXR5V2VhdGhlci5tYWluLnRlbXBfbWF4KX3CsCDigKIgTG93ICR7a2VsdmluVG9GYWhyZW5oZWl0KGNpdHlXZWF0aGVyLm1haW4udGVtcF9taW4pfcKwYFxufVxuXG5jb25zdCBjcmVhdGVUYWJsZUNlbGwgPSAoY2VsbENsYXNzLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNlbGxDbGFzcylcbiAgICBjZWxsLmFwcGVuZCh2YWx1ZSlcbiAgICByZXR1cm4gY2VsbFxufVxuXG5jb25zdCBtYWtlSG91cmx5Rm9yZWNhc3RDYXJkID0gKGNpdHlGb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1zdW1tYXJ5LWNvbnRlbnQnKVxuXG4gICAgY2l0eUZvcmVjYXN0LmZvckVhY2goKHdlYXRoZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGltZSA9IGZvcm1hdFRpbWVzdGFtcChuZXcgRGF0ZSh3ZWF0aGVyLmR0ICogMTAwMCkpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb2RlID0gd2VhdGhlci53ZWF0aGVyWzBdLm1haW5cbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBgJHtrZWx2aW5Ub0ZhaHJlbmhlaXQod2VhdGhlci5tYWluLnRlbXApfcKwYFxuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuXG4gICAgICAgIGNvbnN0IHRpbWVDZWxsID0gY3JlYXRlVGFibGVDZWxsKCdob3VybHktdGltZScsIHRpbWUpXG4gICAgICAgIGNvbnN0IHRlbXBDZWxsID0gY3JlYXRlVGFibGVDZWxsKCdob3VybHktdGVtcCcsIHRlbXBlcmF0dXJlKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCgnaG91cmx5LXdlYXRoZXInLCB3ZWF0aGVyQ29kZSlcblxuICAgICAgICBmb3JlY2FzdFJvdy5hcHBlbmQodGltZUNlbGwpXG4gICAgICAgIGZvcmVjYXN0Um93LmFwcGVuZCh0ZW1wQ2VsbClcbiAgICAgICAgZm9yZWNhc3RSb3cuYXBwZW5kKHdlYXRoZXJDZWxsKVxuXG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZChmb3JlY2FzdFJvdylcbiAgICB9KVxufVxuXG5jb25zdCBtYWtlRGV0YWlsc1BhZ2UgPSAoY2l0eVdlYXRoZXIsIGNpdHlGb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzLXRlbXBsYXRlJylcbiAgICBjb25zdCBkZXRhaWxzVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZGV0YWlsc1RlbXBsYXRlKTtcblxuICAgIG1ha2VEZXRhaWxzU3VtbWFyeUNhcmQoY2l0eVdlYXRoZXIpXG4gICAgbWFrZUhvdXJseUZvcmVjYXN0Q2FyZChjaXR5Rm9yZWNhc3QpO1xuICAgIGNvbnNvbGUubG9nKGNpdHlXZWF0aGVyKTtcbiAgICBjb25zb2xlLmxvZyhjaXR5Rm9yZWNhc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlRGV0YWlsc1BhZ2UiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuY29uc3QgYWRkQ29udGVudCA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZChjb250ZW50KVxufVxuXG5leHBvcnR7XG4gICAgY2xlYXJDb250ZW50LFxuICAgIGFkZENvbnRlbnRcbn0iLCJjb25zdCBBUElfS0VZID0gJzgwOTViZjQyYjY3MDZlNDJmMWIyZmRlNTQwZTg5MzdkJ1xuXG5jb25zdCBnZXRDaXR5TGlzdCA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JylcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eUlucHV0LnZhbHVlfSZsaW1pdD01JmFwcGlkPSR7QVBJX0tFWX1gLCB7IG1vZGU6ICdjb3JzJ30pXG4gICAgY29uc3QgY2l0eUxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY2l0eUlucHV0LnZhbHVlID0gJyc7XG4gICAgcmV0dXJuIGNpdHlMaXN0O1xufVxuXG5jb25zdCBnZXRDaXR5V2VhdGhlciA9IGFzeW5jIChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHtBUElfS0VZfWAsIHsgbW9kZTogJ2NvcnMnfSlcbiAgICBjb25zdCBjaXR5V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBjaXR5V2VhdGhlcjtcbn1cblxuY29uc3QgZ2V0Q2l0eUZvcmVjYXN0ID0gYXN5bmMgKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHtBUElfS0VZfWAsIHsgbW9kZTogJ2NvcnMnfSlcbiAgICBjb25zdCBjaXR5Rm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gY2l0eUZvcmVjYXN0XG59XG5cbmV4cG9ydHtcbiAgICBnZXRDaXR5TGlzdCxcbiAgICBnZXRDaXR5V2VhdGhlcixcbiAgICBnZXRDaXR5Rm9yZWNhc3Rcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldENpdHlMaXN0IH0gZnJvbSAnLi93ZWF0aGVyQVBJJztcbmltcG9ydCB7IGNsZWFyQ29udGVudCwgYWRkQ29udGVudCB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgbWFrZUNpdHlDYXJkcyBmcm9tICcuL2NpdHlDYXJkcydcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuXG5jb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10ZW1wLWZhaHJlbmhlaXQnKVxuZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFzeW5jKGUpID0+IHtcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgIGlmKCFzZWFyY2hCYXIudmFsdWUpIHJldHVybjtcblxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcblxuICAgICAgICBjb25zdCBjaXR5SW5mbyA9IGF3YWl0IGdldENpdHlMaXN0KClcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IG1ha2VDaXR5Q2FyZHMoY2l0eUluZm8pXG4gICAgICAgIGFkZENvbnRlbnQoY29udGVudClcblxuXG4gICAgfVxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=