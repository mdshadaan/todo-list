/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\nbody{\n    box-sizing: border-box;\n    font-family: 'Raleway', sans-serif;\n    display: flex;\n    justify-content: center;\n}\nul,li,h4,p {\n    padding: 0;\n    margin: 0;\n}\n\nul {\n    list-style-type: none;\n    \n}\nli {\n    background-color: aliceblue;\n    padding: 0.8rem;\n    margin-bottom: 0.5rem;\n    font-size: larger;\n}\nlabel{\n    font-size: larger;\n    font-weight: 600;\n    letter-spacing: 2px;\n    margin-right: 5px;\n}\na{\n    text-decoration: none;\n    outline: none;\n    color: black;\n    padding: 0.5rem;;\n}\n\nselect{\n    font-size: large;\n    padding: 0.5rem;\n}\n\ninput{\n    padding: 0.5rem;\n    font-family: inherit;\n    font-size: medium;\n    margin: 10px;\n}\n.button{\n    border-style:ridge;\n    border-radius: 5px;\n    padding: 0.5rem;\n    font-size: large;\n    font-family: inherit;\n    cursor: pointer;\n}\n\n.delete-button{\n    background-color: rgb(207, 40, 40);\n    color: white;\n    margin-left: auto;\n}\n.content{\n    display: flex;\n    gap:10px;\n    height: 70vh;\n}\n\n.project {\n    padding: 1rem;\n    border: 1px solid black;\n}\n.todo-list {\n    padding: 1rem;\n    border: 1px solid black;\n}\n\n.project-list-item{\n    display: flex;\n    align-items: center;\n}\n\n.project-delete-btn{\n    margin-left: auto;\n    background-color: #e87777\n}\n\n.project-items-count{\n    padding: 0.5rem;\n    font-size: small;\n    text-align: center;\n    min-width: 10px;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.add-project input{\n    margin-right: 5px;\n}\n\n.active{\n    background-color: #abd0f0;\n}\n\n.high-priority{\n    background-color: rgb(226, 90, 90);\n    color: white;\n    padding: .5rem;\n    border-radius: 5px;\n}\n\n.medium-priority{\n    background-color: rgb(246 228 69);\n    padding: .5rem;\n    border-radius: 5px;\n}\n\n.low-priority{\n    background-color: #8BC34A;\n    color: white;\n    padding: .5rem;\n    border-radius: 5px;\n}\n\n.title{\n    font-size: larger;\n}\n\n.description{\n    font-size: large;\n}\n\n.strike-through{\n    text-decoration: line-through;\n}\n\n.item{\n    display: flex;\n    align-items: center;\n    gap:5px;\n    background-color: aliceblue;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/ToDoListOperations.js":
/*!***********************************!*\
  !*** ./src/ToDoListOperations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearInputField: () => (/* binding */ clearInputField),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createToDoListItem: () => (/* binding */ createToDoListItem),\n/* harmony export */   fetchToDoItemsByProjectName: () => (/* binding */ fetchToDoItemsByProjectName),\n/* harmony export */   handleProject: () => (/* binding */ handleProject)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _domManipulationUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulationUtility */ \"./src/domManipulationUtility.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\nfunction createToDoListItem(form){\n    const formData = new FormData(form);\n    const toDoItem = {};\n    toDoItem['id'] = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    formData.forEach((value,key)=> toDoItem[key]= value);\n    toDoItem['project'] = ___WEBPACK_IMPORTED_MODULE_0__.currentProject;\n    ___WEBPACK_IMPORTED_MODULE_0__.todoListItems.push(toDoItem);\n    //empties out the form input fields after we add a task\n    form.reset();\n}\n\n\nfunction createProject(projectName){\n    ___WEBPACK_IMPORTED_MODULE_0__.projects.push({name:projectName, todoItemCount:0});\n}\n\n//event handler for individual project\n// Fetches all todos for a particular project , clears the DOM and updates it with todos for that project.\nfunction handleProject(projectListItem){\n    projectListItem.addEventListener('click',(e) => {\n        ___WEBPACK_IMPORTED_MODULE_0__.currentProject = projectListItem.firstChild.getAttribute('id');\n        if(document.querySelector('.active')){\n            document.querySelector('.active').classList.remove('active');\n        }\n        projectListItem.classList.add('active');\n        const todoItems = fetchToDoItemsByProjectName(___WEBPACK_IMPORTED_MODULE_0__.currentProject);\n        const items = document.querySelector('.items');\n        //check items count\n        if(items){\n            (0,_domManipulationUtility__WEBPACK_IMPORTED_MODULE_1__.deleteElement)(items);\n        }\n        (0,_domManipulationUtility__WEBPACK_IMPORTED_MODULE_1__.updateToDoListItems)(todoItems);\n    })\n}\n\nfunction fetchToDoItemsByProjectName(project){\n    return ___WEBPACK_IMPORTED_MODULE_0__.todoListItems.filter(todoItem => todoItem.project === project);\n}\n\nfunction clearInputField(input){\n    input.value = '';\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ToDoListOperations.js?");

/***/ }),

/***/ "./src/domManipulationUtility.js":
/*!***************************************!*\
  !*** ./src/domManipulationUtility.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addToDoItem: () => (/* binding */ addToDoItem),\n/* harmony export */   createAddToDoListForm: () => (/* binding */ createAddToDoListForm),\n/* harmony export */   createProjectList: () => (/* binding */ createProjectList),\n/* harmony export */   deleteElement: () => (/* binding */ deleteElement),\n/* harmony export */   updateToDoListItems: () => (/* binding */ updateToDoListItems)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoListOperations */ \"./src/ToDoListOperations.js\");\n\n\n\nfunction createAddToDoListForm(){\n    const content = document.querySelector('.content');\n    const inputFields = ['Title','Description','Priority'];\n    const toDoListDiv = document.createElement('div');\n    toDoListDiv.classList.add('todo-list');\n    const form = document.createElement('form');\n    form.id = 'todo-list-form';\n    inputFields.forEach(field => {\n        const label = document.createElement('label');\n        label.innerText = field;\n        const id = field.toLowerCase();\n        label.htmlFor = id; \n        const input = document.createElement('input');\n        input.type = 'text';\n        input.id =id; \n        input.name =id; \n        form.appendChild(label);\n        form.appendChild(field === 'Priority' ? createSelectList(field,['High','Medium','Low']) : input);\n    })\n    const submitButton = document.createElement('input');\n    submitButton.type ='submit'; submitButton.value ='Add Task'; submitButton.classList.add('button');\n    form.appendChild(submitButton);\n    toDoListDiv.appendChild(form);\n    content.appendChild(toDoListDiv);\n   }\n\nfunction createSelectList(name , options){\n    const selectElement = document.createElement('select');\n    selectElement.id = name.toLowerCase(); selectElement.name = name;\n    options.forEach(option => {\n        const optionElement = document.createElement('option');\n        optionElement.value = option.toLowerCase();\n        optionElement.innerText = option;\n        selectElement.appendChild(optionElement);\n    })\n\n    return selectElement;\n}\n\nfunction createProjectList(){\n    const content = document.querySelector('.content');\n    const project = document.createElement('div');\n    project.classList.add('project');\n    //creating div for adding projects - input field and a button\n    const addProjectDiv = document.createElement('div');\n    addProjectDiv.classList.add('add-project');\n    const input = document.createElement('input');\n    input.type = 'text'; input.name ='add';\n    const addProjectButton = document.createElement('button');\n    addProjectButton.innerText ='Add Project'; addProjectButton.classList.add('add-project-btn','button');\n    addProjectDiv.appendChild(input); addProjectDiv.appendChild(addProjectButton);\n    //UL list to display projects\n    const projectListDiv = document.createElement('div'); projectListDiv.classList.add('project-list');\n    const list = initialiseProjectListWithDefaultProject();\n    //appending the above created divs to the projects list and then attaching that to the main content div.    \n    projectListDiv.appendChild(list);\n    project.appendChild(addProjectDiv); \n    project.appendChild(projectListDiv);\n    content.appendChild(project); \n}\n\nfunction initialiseProjectListWithDefaultProject(){\n    const list = document.createElement('ul');\n    const listItem = document.createElement('li');  listItem.classList.add('active'); listItem.id = 'Personal';\n    const  anchorTag = document.createElement('a'); anchorTag.href = \"#\"\n    anchorTag.innerHTML = ___WEBPACK_IMPORTED_MODULE_0__.projects[0].name; anchorTag.id = ___WEBPACK_IMPORTED_MODULE_0__.projects[0].name;\n    const itemsCount = document.createElement('span'); \n    (0,_ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__.handleProject)(listItem); //event handler for project added\n    listItem.appendChild(anchorTag);\n    listItem.appendChild(itemsCount);\n    list.appendChild(listItem);\n    return list; \n}\n\n// Appends todo items to the DOM if todos are already present , if not , creates a div and appends it.\nfunction addToDoItem(item,incrementItemsCount = true){\n    const todoList = document.querySelector('.todo-list');\n    let items = document.querySelector('.items');\n    if(items === null){\n         items = document.createElement('div'); items.classList.add('items'); \n    }\n    const todoItem = document.createElement('div');\n    const checkbox = document.createElement('input'); checkbox.type = 'checkbox';\n    const title = document.createElement('h4'); title.innerHTML = item.title + \" : \";\n    title.classList.add('title');\n    const description = document.createElement('p'); description.innerHTML = item.description;\n    description.classList.add('description');\n    const priority = document.createElement('span'); priority.innerHTML = item.Priority ;\n    priority.classList.add(item.Priority === 'high'? 'high-priority': item.Priority === 'medium'? 'medium-priority':'low-priority');\n    const deleteBtn = document.createElement('button'); deleteBtn.innerHTML ='Delete';\n    deleteBtn.classList.add(\"button\", \"delete-button\");\n    deleteToDoItem(item, deleteBtn);\n    todoItem.classList.add('item'); todoItem.id = item.id;\n    todoItem.appendChild(checkbox);\n    todoItem.appendChild(title); todoItem.appendChild(description); todoItem.appendChild(priority);\n    todoItem.appendChild(deleteBtn); \n    handleCheckBox(todoItem);\n    if(incrementItemsCount)\n        updateTodoItemCount(___WEBPACK_IMPORTED_MODULE_0__.currentProject , true);\n    items.appendChild(todoItem);\n    todoList.appendChild(items);\n\n}\n\nfunction updateTodoItemCount(projectName , increment){\n    const projectListItem = document.querySelector('#' +projectName);\n    const itemCount = projectListItem.childNodes[1];\n    let count = null;\n    ___WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {\n        if(project.name === projectName){\n                project.todoItemCount = increment ? project.todoItemCount +1 : project.todoItemCount -1 ;\n            count = project.todoItemCount;\n        }  \n    })\n    if(count === 0){\n        itemCount.classList.remove('project-items-count');\n        itemCount.innerHTML ='';\n        return;\n    }\n    itemCount.classList.add('project-items-count'); itemCount.innerHTML = count;\n}\n\nfunction handleCheckBox(todoListItem){\n    todoListItem.firstChild.addEventListener('click',()=>{\n        if(todoListItem.firstChild.checked){\n            todoListItem.querySelector('.title').classList.add('strike-through');\n            todoListItem.querySelector('.description').classList.add('strike-through');\n            todoListItem.firstChild.setChecked = false;\n        }else{\n            todoListItem.querySelector('.title').classList.remove('strike-through');\n            todoListItem.querySelector('.description').classList.remove('strike-through');\n            todoListItem.firstChild.setChecked = true;\n        }\n    })\n}\n\nfunction deleteToDoItem(item, deleteButton){\n    deleteButton.addEventListener('click',()=> {\n        document.getElementById(item.id).remove();\n        ___WEBPACK_IMPORTED_MODULE_0__.todoListItems = ___WEBPACK_IMPORTED_MODULE_0__.todoListItems.filter(todoListItem => todoListItem.id!=item.id);\n        updateTodoItemCount(___WEBPACK_IMPORTED_MODULE_0__.currentProject,false);\n    });\n}\n\n\nfunction addProject(project){\n    const projectList = document.querySelector('.project-list ul');\n    const listItem = document.createElement('li'); listItem.classList.add('project-list-item'); listItem.id = project.name;\n    const anchorTag = document.createElement('a'); anchorTag.href = \"#\"; anchorTag.id = project.name;\n    anchorTag.innerHTML = project.name;\n    const projectDeleteBtn = document.createElement('button'); projectDeleteBtn.classList.add('button' ,'project-delete-btn'); projectDeleteBtn.innerHTML = 'X';\n    deleteProject(project.name, projectDeleteBtn);\n    const itemsCount = document.createElement('span'); \n    listItem.appendChild(anchorTag);\n    listItem.appendChild(itemsCount);\n    listItem.appendChild(projectDeleteBtn);\n    projectList.appendChild(listItem);    \n}\n\n\nfunction deleteProject(project,btn){\n    btn.addEventListener('click',()=>{\n        deleteElement(document.getElementById(project));\n        //delete project related todoItems and the project itself\n        const projectTodos = (0,_ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__.fetchToDoItemsByProjectName)(project);\n        ___WEBPACK_IMPORTED_MODULE_0__.projects = ___WEBPACK_IMPORTED_MODULE_0__.projects.filter(p => p.name !== project);\n        ___WEBPACK_IMPORTED_MODULE_0__.todoListItems = ___WEBPACK_IMPORTED_MODULE_0__.todoListItems.filter(item => !projectTodos.includes(item));\n    })\n   \n}\n\nfunction updateToDoListItems(todoItems){\n    //while recreating the DOM with todoItems for a project , we don't need to update itemsCount , so second param is false\n    todoItems.forEach(item => addToDoItem(item,false));\n}\n\nfunction deleteElement(element){\n    element.remove();\n}\n\n//# sourceURL=webpack://todo-list/./src/domManipulationUtility.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentProject: () => (/* binding */ currentProject),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   todoListItems: () => (/* binding */ todoListItems)\n/* harmony export */ });\n/* harmony import */ var _domManipulationUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulationUtility */ \"./src/domManipulationUtility.js\");\n/* harmony import */ var _ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoListOperations */ \"./src/ToDoListOperations.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/*\n1) Create form for todo list\n2) Create seperate modules for business logic and DOM manipulation stuff\n3) Generate everything using JS\n4) work on css later , focus on functionality\n\n\n*/\n\n\n\n\nlet currentProject = 'Personal';\nlet projects = [{name:'Personal', todoItemCount:0}]\nlet todoListItems = [];\n\n(0,_domManipulationUtility__WEBPACK_IMPORTED_MODULE_0__.createProjectList)();\n(0,_domManipulationUtility__WEBPACK_IMPORTED_MODULE_0__.createAddToDoListForm)();\n\nconst form = document.getElementById('todo-list-form');\nconst addProjectButton = document.querySelector('.add-project-btn');\nform.onsubmit = (e)=> {\n    e.preventDefault();\n    (0,_ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__.createToDoListItem)(form);\n    (0,_domManipulationUtility__WEBPACK_IMPORTED_MODULE_0__.addToDoItem)(todoListItems[todoListItems.length-1],true);\n}\naddProjectButton.addEventListener('click', e => {\n    const input = document.querySelector('.add-project input');\n    if(input.value){\n        (0,_ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__.createProject)(input.value);\n        (0,_domManipulationUtility__WEBPACK_IMPORTED_MODULE_0__.addProject)(projects[projects.length-1]);\n        (0,_ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__.clearInputField)(input);\n        const projectListItem = document.querySelector('.project-list ul li:last-child');\n        (0,_ToDoListOperations__WEBPACK_IMPORTED_MODULE_1__.handleProject)(projectListItem);\n    }\n});\n\n   \n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;