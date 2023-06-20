/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksass_demo"] = self["webpackChunksass_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function getComponent() {\n\n    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ \"./node_modules/lodash/lodash.js\", 23))\n      .then(({ default: _ }) => {\n        const element = document.createElement('div');\n  \n        element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n  \n        return element;\n      })\n      .catch((error) => 'An error occurred while loading the component');\n   }\n  \n  getComponent().then((component) => {\n    document.body.appendChild(component);\n  });\n\n\n//# sourceURL=webpack://sass-demo/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);