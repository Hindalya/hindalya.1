"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/db";
exports.ids = ["pages/api/db"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/pages/api/db.js":
/*!*****************************!*\
  !*** ./src/pages/api/db.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ db)\n/* harmony export */ });\nfunction db() {\n    const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n    const dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n    dotenv.config();\n    mongoose.connect(\"mongodb+srv://amul-admin:m001-mongodb-basics@sandbox.irldqbr.mongodb.net/DataBase\").then(()=>{\n        console.log(\"database connection stablished successfully...\");\n    }).catch((err)=>{\n        console.log(\"no connection \" + err);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxLQUFLO0lBQ3pCLE1BQU1DLFdBQVdDLG1CQUFPQSxDQUFDLDBCQUFVO0lBQ25DLE1BQU1DLFNBQVNELG1CQUFPQSxDQUFDLHNCQUFRO0lBQy9CQyxPQUFPQyxNQUFNO0lBQ2JILFNBQVNJLE9BQU8sQ0FBQyxxRkFDaEJDLElBQUksQ0FBQyxJQUFJO1FBQ05DLFFBQVFDLEdBQUcsQ0FBQztJQUNoQixHQUFHQyxLQUFLLENBQUMsQ0FBQ0MsTUFBTTtRQUNaSCxRQUFRQyxHQUFHLENBQUMsbUJBQW1CRTtJQUNuQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaW5kYWx5YS8uL3NyYy9wYWdlcy9hcGkvZGIuanM/NTM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYigpIHtcclxuICAgIGNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG4gICAgY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKTtcclxuICAgIGRvdGVudi5jb25maWcoKTtcclxuICAgIG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiK3NydjovL2FtdWwtYWRtaW46bTAwMS1tb25nb2RiLWJhc2ljc0BzYW5kYm94LmlybGRxYnIubW9uZ29kYi5uZXQvRGF0YUJhc2VcIilcclxuICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhYmFzZSBjb25uZWN0aW9uIHN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5Li4uXCIpO1xyXG4gICAgfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGNvbm5lY3Rpb24gXCIgKyBlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJkYiIsIm1vbmdvb3NlIiwicmVxdWlyZSIsImRvdGVudiIsImNvbmZpZyIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/db.js"));
module.exports = __webpack_exports__;

})();