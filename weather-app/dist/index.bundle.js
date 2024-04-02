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
    cardTemperature.append(`${_unitsManager__WEBPACK_IMPORTED_MODULE_3__["default"].getTemperature(cityWeather.main.temp)}°${_unitsManager__WEBPACK_IMPORTED_MODULE_3__["default"].getUnits()}`)
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

    const getUnits = () => units.charAt(0)

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
/* harmony import */ var _unitsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unitsManager */ "./src/unitsManager.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const searchBar = document.querySelector('#city');

const fahrenheit = document.querySelector('.nav-temp-fahrenheit')
fahrenheit.classList.add('active')

const celsius = document.querySelector('.nav-temp-celsius')

fahrenheit.addEventListener('click', () => {
    _unitsManager__WEBPACK_IMPORTED_MODULE_3__["default"].setUnits('Fahrenheit')
    fahrenheit.classList.add('active')
    celsius.classList.remove('active')
})

celsius.addEventListener('click', () => {
    _unitsManager__WEBPACK_IMPORTED_MODULE_3__["default"].setUnits('Celsius')
    celsius.classList.add('active')
    fahrenheit.classList.remove('active')
})

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDVTtBQUNkO0FBQ0U7QUFDcEI7O0FBRXJCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBWTs7QUFFcEIsK0JBQStCLHdEQUFXO0FBQzFDLDhCQUE4QixzREFBYTtBQUMzQyxRQUFRLHFEQUFVO0FBQ2xCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9EYXRhQ29udmVydG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2l0eUNhcmRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2l0eURldGFpbHNQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VuaXRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVye1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbjpyb290e1xuICAgIC0tY29sb3ItYmFja2dyb3VuZDogIzMyMzIzMjtcbiAgICAtLWNvbG9yLXdoaXRlOiB3aGl0ZTtcbiAgICAtLWNvbG9yLW11dGVkLWdyZXk6ICNlZmVmZWY7XG4gICAgLS1jb2xvci1ncmV5OiAjMzIzMjMyO1xuICAgIC0tY29sb3ItZ3JlZW46ICMwMGNhODA7XG4gICAgLS1jb2xvci1ibHVlOiAjMDA1OTg2O1xuICAgIC0tY29sb3ItbXV0ZWQtYmx1ZTogIzRiN2VhMDtcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNGN0Y4RkE7XG4gICAgLS1mb250LWZhbWlseTogJ0xhdG8nLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIC0tYm94LXNoYWRvdzogMHB4IDJweCAxN3B4IDVweCByZ2JhKDAsMCwwLDAuMTIpO1xuXG59XG5cbmh0bWx7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG5tYWlueyAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWQtYmx1ZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5uYXYtc2VhcmNoLWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZC1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmF2LXNlYXJjaC1iYXIsXG4ubmF2LXNlYXJjaC1iYXI6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5uYXYtdGVtcC1zZWxlY3RvcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuM3JlbTtcbn1cblxuLm5hdi10ZW1wLXNlbGVjdG9yIHNwYW57XG4gICAgcGFkZGluZy1ib3R0b206IC40cmVtO1xufVxuXG4ubmF2LWFjdGlvbnMgYnV0dG9ue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbn1cblxuLm5hdi1hY3Rpb25zIGRpdntcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1ib3R0b206IC4xcmVtO1xufVxuXG4ubmF2LWFjdGlvbnMgYnV0dG9uOmhvdmVyLFxuLmFjdGl2ZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IC4zcmVtO1xufVxuXG4vKiAgQ0lUWSBDQVJEICAgICovXG4uY2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiA1cmVtIDVyZW0gOHJlbSA1cmVtO1xuICAgIHdpZHRoOiA5MCU7XG5cbn1cblxuLmNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNhcmQtaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGRpdntcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4vKiAgQ0lUWSBXRUFUSEVSIENBUkQgICAqL1xuXG4uZGV0YWlsc3tcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbn1cblxuLmRldGFpbHMtc3VtbWFyeSxcbi5ob3VybHktc3VtbWFyeXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGdhcDogLjVyZW07XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuLmRldGFpbHMtc3VtbWFyeS1oZWFkZXIsXG4uaG91cmx5LXN1bW1hcnktaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZGV0YWlscy1zdW1tYXJ5LWhlYWRlciBzcGFue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmRldGFpbHMtc3VtbWFyeS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGdhcDogLjFyZW07XG59XG5cbi5jb250ZW50LXRlbXBlcmF0dXJle1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLyogIEhvdXJseSBGb3JlY2FzdCBDYXJkICAgICovXG50ZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixrSkFBa0o7SUFDbEoscUJBQXFCO0lBQ3JCLCtDQUErQzs7QUFFbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULDJEQUEyRDtJQUMzRCw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0EseUJBQXlCOztBQUV6QjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogIzMyMzIzMjtcXG4gICAgLS1jb2xvci13aGl0ZTogd2hpdGU7XFxuICAgIC0tY29sb3ItbXV0ZWQtZ3JleTogI2VmZWZlZjtcXG4gICAgLS1jb2xvci1ncmV5OiAjMzIzMjMyO1xcbiAgICAtLWNvbG9yLWdyZWVuOiAjMDBjYTgwO1xcbiAgICAtLWNvbG9yLWJsdWU6ICMwMDU5ODY7XFxuICAgIC0tY29sb3ItbXV0ZWQtYmx1ZTogIzRiN2VhMDtcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRjdGOEZBO1xcbiAgICAtLWZvbnQtZmFtaWx5OiAnTGF0bycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTdweCA1cHggcmdiYSgwLDAsMCwwLjEyKTtcXG5cXG59XFxuXFxuaHRtbHtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG5tYWlueyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkLWJsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LXNlYXJjaC1iYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubmF2LXNlYXJjaC1iYXIsXFxuLm5hdi1zZWFyY2gtYmFyOjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5uYXYtdGVtcC1zZWxlY3RvcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuM3JlbTtcXG59XFxuXFxuLm5hdi10ZW1wLXNlbGVjdG9yIHNwYW57XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNHJlbTtcXG59XFxuXFxuLm5hdi1hY3Rpb25zIGJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4ubmF2LWFjdGlvbnMgZGl2e1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjFyZW07XFxufVxcblxcbi5uYXYtYWN0aW9ucyBidXR0b246aG92ZXIsXFxuLmFjdGl2ZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogLjNyZW07XFxufVxcblxcbi8qICBDSVRZIENBUkQgICAgKi9cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW46IDVyZW0gNXJlbSA4cmVtIDVyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxufVxcblxcbi5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5jYXJkLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIGRpdntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5cXG4vKiAgQ0lUWSBXRUFUSEVSIENBUkQgICAqL1xcblxcbi5kZXRhaWxze1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGV0YWlscy1zdW1tYXJ5LFxcbi5ob3VybHktc3VtbWFyeXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmRldGFpbHMtc3VtbWFyeS1oZWFkZXIsXFxuLmhvdXJseS1zdW1tYXJ5LWhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGV0YWlscy1zdW1tYXJ5LWhlYWRlciBzcGFue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kZXRhaWxzLXN1bW1hcnktY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZ2FwOiAuMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQtdGVtcGVyYXR1cmV7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLyogIEhvdXJseSBGb3JlY2FzdCBDYXJkICAgICovXFxudGR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGtlbHZpblRvRmFocmVuaGVpdCA9ICh0KSA9PiBNYXRoLnJvdW5kKCh0IC0gMjczLjE1KSAqIDEuOCArIDMyKVxuXG5jb25zdCBrZWx2aW5Ub0NlbHNpdXMgPSAodCkgPT4gTWF0aC5yb3VuZCh0IC0gMjczLjE1KVxuXG5jb25zdCBmb3JtYXRUaW1lc3RhbXAgPSAodGltZSkgPT4ge1xuICAgIGxldCBob3VycyA9IHRpbWUuZ2V0SG91cnMoKVxuICAgIGxldCBtaW51dGVzID0gdGltZS5nZXRNaW51dGVzKClcbiAgICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJ1xuICAgIGhvdXJzICU9IDEyO1xuICAgIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyO1xuICAgIFxuICAgIGNvbnN0IHN0clRpbWUgPSBgJHtob3Vyc30gJHthbXBtfWBcbiAgICByZXR1cm4gc3RyVGltZVxuXG59XG5cbmV4cG9ydCB7XG4gICAga2VsdmluVG9GYWhyZW5oZWl0LFxuICAgIGtlbHZpblRvQ2Vsc2l1cyxcbiAgICBmb3JtYXRUaW1lc3RhbXAsXG59IiwiaW1wb3J0IHsgY2xlYXJDb250ZW50IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IG1ha2VEZXRhaWxzUGFnZSBmcm9tIFwiLi9jaXR5RGV0YWlsc1BhZ2VcIjtcbmltcG9ydCB7IGdldENpdHlXZWF0aGVyLCBnZXRDaXR5Rm9yZWNhc3QgfSBmcm9tIFwiLi93ZWF0aGVyQVBJXCI7XG5pbXBvcnQgdW5pdHNNYW5hZ2VyIGZyb20gJy4vdW5pdHNNYW5hZ2VyJ1xuXG5jb25zdCBtYWtlQ2FyZCA9IGFzeW5jKGNhcmRDb250YWluZXIsIGNpdHkpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWxhdGl0dWRlJywgY2l0eS5sYXQpXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9uZ2l0dWRlJywgY2l0eS5sb24pXG5cbiAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGNhcmRIZWFkZXIuYXBwZW5kKGAke2NpdHkubmFtZX0ke2NpdHkuc3RhdGUgPyBgLCAkeyAgY2l0eS5zdGF0ZX1gIDogJyd9JHtjaXR5LmNvdW50cnkgPyBgLCAkeyAgY2l0eS5jb3VudHJ5fWAgOiAnJ31gKVxuICAgIFxuICAgIGNhcmQuYXBwZW5kKGNhcmRIZWFkZXIpXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmQoY2FyZClcblxuICAgIGNvbnN0IHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IGNhcmQuZGF0YXNldFxuICAgIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgZ2V0Q2l0eVdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSlcblxuICAgIGNvbnN0IGNhcmRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkV2VhdGhlci5jbGFzc0xpc3QuYWRkKCdjYXJkLXdlYXRoZXInKVxuICAgIGNhcmRXZWF0aGVyLmFwcGVuZChjaXR5V2VhdGhlci53ZWF0aGVyWzBdLm1haW4pXG4gICAgY2FyZC5hcHBlbmQoY2FyZFdlYXRoZXIpXG5cbiAgICBjb25zdCBjYXJkVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRlbXBlcmF0dXJlJylcbiAgICBjYXJkVGVtcGVyYXR1cmUuYXBwZW5kKGAke3VuaXRzTWFuYWdlci5nZXRUZW1wZXJhdHVyZShjaXR5V2VhdGhlci5tYWluLnRlbXApfcKwJHt1bml0c01hbmFnZXIuZ2V0VW5pdHMoKX1gKVxuICAgIGNhcmQuYXBwZW5kKGNhcmRUZW1wZXJhdHVyZSlcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYygpID0+IHtcblxuICAgICAgICBjb25zdCBjaXR5Rm9yZWNhc3QgPSBhd2FpdCBnZXRDaXR5Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSlcbiAgICAgICAgY2xlYXJDb250ZW50KClcbiAgICAgICAgbWFrZURldGFpbHNQYWdlKGNpdHlXZWF0aGVyLCBjaXR5Rm9yZWNhc3QubGlzdC5zbGljZSgwLDUpKVxuICAgIH0pXG5cblxufVxuXG5jb25zdCBtYWtlQ2l0eUNhcmRzID0gKGNpdHlMaXN0KSA9PiB7XG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpXG5cbiAgICBjaXR5TGlzdC5mb3JFYWNoKChjaXR5KSA9PiBtYWtlQ2FyZChjYXJkQ29udGFpbmVyLCBjaXR5KSlcblxuICAgIHJldHVybiBjYXJkQ29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDaXR5Q2FyZHMiLCJpbXBvcnQgeyBmb3JtYXRUaW1lc3RhbXAgfSBmcm9tIFwiLi9EYXRhQ29udmVydG9yXCJcbmltcG9ydCB1bml0c01hbmFnZXIgZnJvbSBcIi4vdW5pdHNNYW5hZ2VyXCJcblxuY29uc3QgbWFrZURldGFpbHNTdW1tYXJ5Q2FyZCA9IChjaXR5V2VhdGhlcikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSlcblxuICAgIGNvbnN0IGRldGFpbHNTdW1tYXJ5SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtc3VtbWFyeS1oZWFkZXInKVxuICAgIGRldGFpbHNTdW1tYXJ5SGVhZGVyLmlubmVySFRNTCA9IGA8c3Ryb25nPiR7Y2l0eVdlYXRoZXIubmFtZX08L3N0cm9uZz4gPHNwYW4+YXMgb2YgJHtjdXJyZW50VGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3NwYW4+YFxuXG4gICAgY29uc3QgZGV0YWlsc1RlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGVtcGVyYXR1cmUnKVxuICAgIGRldGFpbHNUZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHt1bml0c01hbmFnZXIuZ2V0VGVtcGVyYXR1cmUoY2l0eVdlYXRoZXIubWFpbi50ZW1wKX3CsGBcbiAgICBcbiAgICBjb25zdCBkZXRhaWxzV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdlYXRoZXInKVxuICAgIGRldGFpbHNXZWF0aGVyLmlubmVyVGV4dCA9IGAke2NpdHlXZWF0aGVyLndlYXRoZXJbMF0ubWFpbn1gXG5cbiAgICBjb25zdCBkZXRhaWxzSGlnaExvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhpZ2gtbG93JylcbiAgICBkZXRhaWxzSGlnaExvdy5pbm5lclRleHQgPSBgSGlnaCAke3VuaXRzTWFuYWdlci5nZXRUZW1wZXJhdHVyZShjaXR5V2VhdGhlci5tYWluLnRlbXBfbWF4KX3CsCDigKIgTG93ICR7dW5pdHNNYW5hZ2VyLmdldFRlbXBlcmF0dXJlKGNpdHlXZWF0aGVyLm1haW4udGVtcF9taW4pfcKwYFxufVxuXG5jb25zdCBjcmVhdGVUYWJsZUNlbGwgPSAoY2VsbENsYXNzLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNlbGxDbGFzcylcbiAgICBjZWxsLmFwcGVuZCh2YWx1ZSlcbiAgICByZXR1cm4gY2VsbFxufVxuXG5jb25zdCBtYWtlSG91cmx5Rm9yZWNhc3RDYXJkID0gKGNpdHlGb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1zdW1tYXJ5LWNvbnRlbnQnKVxuXG4gICAgY2l0eUZvcmVjYXN0LmZvckVhY2goKHdlYXRoZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGltZSA9IGZvcm1hdFRpbWVzdGFtcChuZXcgRGF0ZSh3ZWF0aGVyLmR0ICogMTAwMCkpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb2RlID0gd2VhdGhlci53ZWF0aGVyWzBdLm1haW5cbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBgJHt1bml0c01hbmFnZXIuZ2V0VGVtcGVyYXR1cmUod2VhdGhlci5tYWluLnRlbXApfcKwYFxuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuXG4gICAgICAgIGNvbnN0IHRpbWVDZWxsID0gY3JlYXRlVGFibGVDZWxsKCdob3VybHktdGltZScsIHRpbWUpXG4gICAgICAgIGNvbnN0IHRlbXBDZWxsID0gY3JlYXRlVGFibGVDZWxsKCdob3VybHktdGVtcCcsIHRlbXBlcmF0dXJlKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCgnaG91cmx5LXdlYXRoZXInLCB3ZWF0aGVyQ29kZSlcblxuICAgICAgICBmb3JlY2FzdFJvdy5hcHBlbmQodGltZUNlbGwpXG4gICAgICAgIGZvcmVjYXN0Um93LmFwcGVuZCh0ZW1wQ2VsbClcbiAgICAgICAgZm9yZWNhc3RSb3cuYXBwZW5kKHdlYXRoZXJDZWxsKVxuXG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZChmb3JlY2FzdFJvdylcbiAgICB9KVxufVxuXG5jb25zdCBtYWtlRGV0YWlsc1BhZ2UgPSAoY2l0eVdlYXRoZXIsIGNpdHlGb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzLXRlbXBsYXRlJylcbiAgICBjb25zdCBkZXRhaWxzVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZGV0YWlsc1RlbXBsYXRlKTtcblxuICAgIG1ha2VEZXRhaWxzU3VtbWFyeUNhcmQoY2l0eVdlYXRoZXIpXG4gICAgbWFrZUhvdXJseUZvcmVjYXN0Q2FyZChjaXR5Rm9yZWNhc3QpO1xuICAgIGNvbnNvbGUubG9nKGNpdHlXZWF0aGVyKTtcbiAgICBjb25zb2xlLmxvZyhjaXR5Rm9yZWNhc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlRGV0YWlsc1BhZ2UiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuY29uc3QgYWRkQ29udGVudCA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZChjb250ZW50KVxufVxuXG5leHBvcnR7XG4gICAgY2xlYXJDb250ZW50LFxuICAgIGFkZENvbnRlbnRcbn0iLCJpbXBvcnQgeyBrZWx2aW5Ub0NlbHNpdXMsIGtlbHZpblRvRmFocmVuaGVpdCB9IGZyb20gXCIuL0RhdGFDb252ZXJ0b3JcIjtcblxuY29uc3QgdW5pdHNNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBsZXQgdW5pdHMgPSAnRmFocmVuaGVpdCdcblxuICAgIGNvbnN0IGdldFVuaXRzID0gKCkgPT4gdW5pdHMuY2hhckF0KDApXG5cbiAgICBjb25zdCBzZXRVbml0cyA9ICh1bml0KSA9PiB7XG4gICAgICAgIHVuaXRzID0gdW5pdDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUZW1wZXJhdHVyZSA9ICh0ZW1wKSA9PiAodW5pdHMgPT09ICdGYWhyZW5oZWl0JyA/IGtlbHZpblRvRmFocmVuaGVpdCh0ZW1wKSA6IGtlbHZpblRvQ2Vsc2l1cyh0ZW1wKSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFVuaXRzLCBzZXRVbml0cywgZ2V0VGVtcGVyYXR1cmVcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRzTWFuYWdlcjsiLCJjb25zdCBBUElfS0VZID0gJzgwOTViZjQyYjY3MDZlNDJmMWIyZmRlNTQwZTg5MzdkJ1xuXG5jb25zdCBnZXRDaXR5TGlzdCA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JylcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eUlucHV0LnZhbHVlfSZsaW1pdD01JmFwcGlkPSR7QVBJX0tFWX1gLCB7IG1vZGU6ICdjb3JzJ30pXG4gICAgY29uc3QgY2l0eUxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY2l0eUlucHV0LnZhbHVlID0gJyc7XG4gICAgcmV0dXJuIGNpdHlMaXN0O1xufVxuXG5jb25zdCBnZXRDaXR5V2VhdGhlciA9IGFzeW5jIChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHtBUElfS0VZfWAsIHsgbW9kZTogJ2NvcnMnfSlcbiAgICBjb25zdCBjaXR5V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBjaXR5V2VhdGhlcjtcbn1cblxuY29uc3QgZ2V0Q2l0eUZvcmVjYXN0ID0gYXN5bmMgKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHtBUElfS0VZfWAsIHsgbW9kZTogJ2NvcnMnfSlcbiAgICBjb25zdCBjaXR5Rm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gY2l0eUZvcmVjYXN0XG59XG5cbmV4cG9ydHtcbiAgICBnZXRDaXR5TGlzdCxcbiAgICBnZXRDaXR5V2VhdGhlcixcbiAgICBnZXRDaXR5Rm9yZWNhc3Rcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldENpdHlMaXN0IH0gZnJvbSAnLi93ZWF0aGVyQVBJJztcbmltcG9ydCB7IGNsZWFyQ29udGVudCwgYWRkQ29udGVudCB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgbWFrZUNpdHlDYXJkcyBmcm9tICcuL2NpdHlDYXJkcydcbmltcG9ydCB1bml0c01hbmFnZXIgZnJvbSAnLi91bml0c01hbmFnZXInXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcblxuY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGVtcC1mYWhyZW5oZWl0JylcbmZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGVtcC1jZWxzaXVzJylcblxuZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1bml0c01hbmFnZXIuc2V0VW5pdHMoJ0ZhaHJlbmhlaXQnKVxuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG59KVxuXG5jZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXRzTWFuYWdlci5zZXRVbml0cygnQ2Vsc2l1cycpXG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn0pXG5cbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXN5bmMoZSkgPT4ge1xuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgaWYoIXNlYXJjaEJhci52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuXG4gICAgICAgIGNvbnN0IGNpdHlJbmZvID0gYXdhaXQgZ2V0Q2l0eUxpc3QoKVxuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFrZUNpdHlDYXJkcyhjaXR5SW5mbylcbiAgICAgICAgYWRkQ29udGVudChjb250ZW50KVxuICAgIH1cbn0pXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9