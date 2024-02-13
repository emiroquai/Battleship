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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Workbench&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  font-family: 'Workbench', sans-serif;\n  color: lime;\n}\n\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  background-color: rgb(60, 60, 56);\n}\n\nheader {\n  height: 50px;\n  font-size: large;\n  text-align: center;\n}\n\nmain {\n  display: grid;\n  justify-content: center;\n  margin: 10px;\n}\n\n.msg, h4 {\n  text-align: center;\n}\n\n.boards {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 50px\n}\n\n.boardDiv {\n  display: grid;\n}\n\n.boardWrapper {\n  display: grid;\n  grid: repeat(10, 1fr) / repeat(10, 1fr);\n  width: clamp(150px, 50vw, 300px);\n  aspect-ratio: 1;\n  border: 1px dotted lime;\n}\n\n.cell {\n  border: 1px dotted lime;\n  cursor: pointer;\n}\n\n\n.ship {\n  border: 2px solid yellow;\n  background-color: rgba(255, 255, 0, 0.2);\n  \n}\n\n.hit {\n  border: 3px dotted red;\n  background-color: rgba(255, 0, 0, 0.2);\n}\n\n.miss {\n  border: 3px dotted grey;\n  background-color: rgba(128, 128, 128, 0.2);\n}\n\n.cell:hover {\nbackground-color: rgba(255, 0, 0, 0.4);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Scripts/GameController.js":
/*!***************************************!*\
  !*** ./src/Scripts/GameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Scripts/Player.js\");\n/* harmony import */ var _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenController.js */ \"./src/Scripts/ScreenController.js\");\n\n\n\nconst GameController = (() => {\n  let human;\n  let computer;\n\n  const game = () => {\n    //Setup game\n    human = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Human');\n    computer = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Computer');\n        \n    human.board.setupShips();\n    computer.board.setupComputerShips();\n    console.log(computer.board.board)\n    \n    human.boardElement = document.querySelector('#board1');\n    computer.boardElement = document.querySelector('#board2');\n    \n    _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderBoard(human);\n    _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderBoard(computer);\n\n    return {human, computer}\n  };\n\n  const updateMessage = (player, oponent, coordinates) => {\n    if (oponent.board.board[coordinates[0]][coordinates[1]] === 'X') {\n      _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMessage(`${player.name} missed`);\n    } else if (oponent.board.board[coordinates[0]][coordinates[1]] === 'O') {\n      _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMessage(`${player.name} hit!`);\n    }\n  }\n\n  const checkWin = (player, opponent) => {\n    if (opponent.board.allSunk()) {  \n      setTimeout(() => {\n        _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMessage(`${player.name} wins!`)\n      }, \"1000\")\n      return \n    }\n  }\n\n  const humanTurn = (coordinates) => {\n    if (!human.board.allSunk() && !computer.board.allSunk()) {\n      human.attack(computer, coordinates);\n      _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderBoard(computer);\n      updateMessage(human, computer, coordinates)\n      checkWin(human, computer);\n    }\n  }\n\n  const computerTurn = () => {\n    if (!human.board.allSunk() && !computer.board.allSunk()) {\n      setTimeout(() => {\n        computer.randomAttack(human);\n        const randomCoordinates = computer.randomCoord;\n        updateMessage(computer, human, randomCoordinates);\n        _ScreenController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderBoard(human);\n      }, \"1000\")\n      checkWin(computer, human);\n    }\n  }\n\n  const play = (coordinates) => {\n      humanTurn(coordinates);\n      computerTurn();\n  }\n  \n\n  return {\n    game,\n    play\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\n\n//# sourceURL=webpack://battleship/./src/Scripts/GameController.js?");

/***/ }),

/***/ "./src/Scripts/Gameboard.js":
/*!**********************************!*\
  !*** ./src/Scripts/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Scripts/Ship.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Scripts/Player.js\");\n\n\n\nconst Gameboard = () => {\n  const createBoard = () => {\n    const board = [];\n    for (let i = 0; i < 10; i++) {\n      board[i] = [];\n      for (let j = 0; j < 10; j++) {\n        board[i][j] = '';\n      }\n    }\n    return board;\n  }\n\n  const board = createBoard()\n\n  const resetBoard = () => {\n    for (let i = 0; i < 10; i++) {\n      board[i] = [];\n      for (let j = 0; j < 10; j++) {\n        board[i][j] = '';\n      }\n    }\n  }\n\n  const placeShip = (ship, coordinates, direction) => {\n    for (let i = 0; i < ship.length; i++) {\n      if (direction === 'right') {\n        board[coordinates[0]][coordinates[1] + i] = ship\n      } else if (direction === 'down') {\n        board[coordinates[0] + i][coordinates[1]] = ship\n      }\n    }\n  }\n\n  const receiveAttack = (coordinates) => {\n    if (board[coordinates[0]][coordinates[1]] instanceof Object) {\n      board[coordinates[0]][coordinates[1]].hit();\n      board[coordinates[0]][coordinates[1]] = 'O';\n    } else {\n      board[coordinates[0]][coordinates[1]] = 'X';\n    }\n  }\n\n  const allSunk = () => {\n    let allSunk = true\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (typeof board[i][j] === 'object' && board[i][j].isSunk() === false) {\n        allSunk = false;\n        }\n      }\n    }\n    return allSunk\n  }\n\n  //Populate each gameboard with predetermined coordinates\n  const setupShips = () => {\n    const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n    const submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    const cruiser = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n    const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n    \n    resetBoard();\n    placeShip(destroyer, [1,2], 'right');\n    placeShip(submarine, [3,1], 'down');\n    placeShip(cruiser, [5,4], 'right');\n    placeShip(battleship, [7,6], 'right');\n    placeShip(carrier, [0,8], 'down');\n  }\n\n  const shuffleCoordinates = (coordinates) => {\n    coordinates[0] = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.randomNumber)();\n    coordinates[1] = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.randomNumber)();\n  };\n\n  function genRandomShipCoord(length, direction) { \n    let coordinates = [];\n    shuffleCoordinates(coordinates);\n    if (direction === 'right') {\n      if (coordinates[1] + length > 9) {\n        return genRandomShipCoord(length, direction)\n      }\n      for (let i = 0; i < length; i++) {\n        if (board[coordinates[0]][coordinates[1] + i] instanceof Object) {\n          return genRandomShipCoord(length, direction)\n        }\n      }\n    } else if (direction === 'down') {\n      if (coordinates[0] + length > 9) {\n        return genRandomShipCoord(length, direction);\n      }\n      for (let i = 0; i < length; i++) {\n        if (board[coordinates[0] + i][coordinates[1]] instanceof Object) {\n          return genRandomShipCoord(length, direction);\n        }\n      }\n    }\n    return coordinates;\n  } \n\n  const randomDirection = () => {\n    const directions = ['right', 'down'];\n    const randomIndex = Math.floor(Math.random() * 2);\n\n    return directions[randomIndex];\n  }\n\n  const createShips = () => {\n    const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n    const submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    const cruiser = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n    const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n\n    return [destroyer, submarine, cruiser, battleship, carrier];\n  }\n\n  const setupComputerShips = () => {\n    const ships = createShips();\n    resetBoard();\n    ships.forEach((ship) => {\n      const direction = randomDirection();\n      const coordinates = genRandomShipCoord(ship.length, direction);\n      placeShip(ship, coordinates, direction);\n    })\n  }\n\n  return {\n    board,\n    resetBoard,\n    placeShip,\n    receiveAttack,\n    allSunk,\n    setupShips,\n    setupComputerShips\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/Scripts/Gameboard.js?");

/***/ }),

/***/ "./src/Scripts/Player.js":
/*!*******************************!*\
  !*** ./src/Scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   randomNumber: () => (/* binding */ randomNumber)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Scripts/Gameboard.js\");\n\n\nfunction randomNumber() { return Math.floor(Math.random() * 10)};\n\nconst Player = (name) => {\n  return {\n    name: name,\n    turn: false,\n    board: (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    getTurn() {return this.turn},\n    setTurn() {this.turn = !this.turn},\n    attack(player, coordinates) {\n      player.board.receiveAttack(coordinates);\n      this.setTurn();\n      player.setTurn();\n    },\n    randomAttack(player) {\n      function randomCoord() {\n        let randomCoord = [];\n        function genRandomCoord() { \n          randomCoord = [randomNumber(), randomNumber()];\n          if (player.board.board[randomCoord[0]][randomCoord[1]] === 'X' \n          || player.board.board[randomCoord[0]][randomCoord[1]] === 'O') {\n            return genRandomCoord();\n          }\n        }\n        genRandomCoord();\n        return randomCoord\n      }\n      const coordinates = randomCoord();\n      this.randomCoord = coordinates;\n      this.attack(player, coordinates);\n    },\n    randomCoord: null,\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n  \n  \n\n\n\n//# sourceURL=webpack://battleship/./src/Scripts/Player.js?");

/***/ }),

/***/ "./src/Scripts/ScreenController.js":
/*!*****************************************!*\
  !*** ./src/Scripts/ScreenController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameController */ \"./src/Scripts/GameController.js\");\n\n\nconst ScreenController = (() => {\n\n  //Renders and displays boards and ships\n  const renderBoard = (player) => {\n    player.boardElement.innerHTML = '';\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let cell = document.createElement('div');\n        cell.className =  \"cell\";\n        if(player.board.board[i][j] === 'O'){\n          cell.classList.add(\"hit\")\n        } else if(player.board.board[i][j] === 'X'){\n          cell.classList.add(\"miss\")\n        }\n        // Render player's ships\n        if (player.name === 'Human' && player.board.board[i][j] instanceof Object) {\n        cell.classList.add(\"ship\")\n        }\n        // Event listener for computer board\n        if (player.name === 'Computer') {\n          cell.addEventListener('click', function() {        \n            _GameController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].play([i,j]);    \n            })\n          }\n        player.boardElement.appendChild(cell);\n      }\n    }\n  }\n\n  const displayMessage = (message) => {\n    const msg = document.querySelector('.msg');\n    msg.innerHTML = message;\n  }\n\n  return {\n    renderBoard,\n    displayMessage\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);\n\n//# sourceURL=webpack://battleship/./src/Scripts/ScreenController.js?");

/***/ }),

/***/ "./src/Scripts/Ship.js":
/*!*****************************!*\
  !*** ./src/Scripts/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(length) {\n    const ship = {\n        id: Math.floor(Math.random() * 100),\n        length: length,\n        hits: 0,\n        sunk: false,\n        hit() {\n            this.hits += 1\n        },\n        isSunk() {\n            if (this.hits === this.length) {\n                this.sunk = true\n            }\n            return this.sunk\n        }   \n    }\n\n    return ship;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/Scripts/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scripts_GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scripts/GameController */ \"./src/Scripts/GameController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n_Scripts_GameController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].game();\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;