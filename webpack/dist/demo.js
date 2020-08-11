var modulesData = {
  "./src/add.js":(function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  const sum = (a, b) => {
    return a + b
  }
  __webpack_exports__["default"] = (sum);
  }),
  "./src/index.js":(function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ "./src/add.js");
  var _minus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minus.js */ "./src/minus.js");
  const sum = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 2)
  const division = Object(_minus_js__WEBPACK_IMPORTED_MODULE_1__["minus"])(2, 1)
  console.log(sum)
  console.log(division)
  /***/ })
};

(function (modules) {
  function __webpack_require__(moduleId) {...}
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})(modulesData)
