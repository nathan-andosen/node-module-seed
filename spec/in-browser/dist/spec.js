/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./spec/unit/always.spec.ts":
/*!**********************************!*\
  !*** ./spec/unit/always.spec.ts ***!
  \**********************************/
/***/ (() => {

describe('Always have a spec', function () {
    it('should always have a spec test', function () {
        expect(true).toEqual(true);
    });
});


/***/ }),

/***/ "./spec/unit/my-class-one.spec.ts":
/*!****************************************!*\
  !*** ./spec/unit/my-class-one.spec.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var src_1 = __webpack_require__(/*! ../../src */ "./src/index.ts");
describe('Class One:', function () {
    describe('doSomething()', function () {
        it('should do something', function () {
            var classOne = new src_1.ClassOne();
            expect(classOne.doSomething()).toEqual('Something was done...');
        });
    });
});


/***/ }),

/***/ "./spec/unit/my-class-two.spec.ts":
/*!****************************************!*\
  !*** ./spec/unit/my-class-two.spec.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var src_1 = __webpack_require__(/*! ../../src */ "./src/index.ts");
describe('Class One:', function () {
    describe('doSomething()', function () {
        it('should do something', function () {
            var classTwo = new src_1.ClassTwo();
            expect(classTwo.doSomething().length).toBeGreaterThan(0);
        });
    });
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./my-class-one */ "./src/my-class-one.ts"), exports);
__exportStar(__webpack_require__(/*! ./my-class-two */ "./src/my-class-two.ts"), exports);


/***/ }),

/***/ "./src/my-class-one.ts":
/*!*****************************!*\
  !*** ./src/my-class-one.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassOne = void 0;
var ClassOne = (function () {
    function ClassOne() {
    }
    ClassOne.prototype.doSomething = function () {
        return 'Something was done...';
    };
    return ClassOne;
}());
exports.ClassOne = ClassOne;


/***/ }),

/***/ "./src/my-class-two.ts":
/*!*****************************!*\
  !*** ./src/my-class-two.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassTwo = void 0;
var ClassTwo = (function () {
    function ClassTwo() {
    }
    ClassTwo.prototype.doSomething = function () {
        return 'Something was done from class two...';
    };
    return ClassTwo;
}());
exports.ClassTwo = ClassTwo;


/***/ }),

/***/ "./spec/unit sync recursive .spec$":
/*!********************************!*\
  !*** ./spec/unit/ sync .spec$ ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./always.spec": "./spec/unit/always.spec.ts",
	"./my-class-one.spec": "./spec/unit/my-class-one.spec.ts",
	"./my-class-two.spec": "./spec/unit/my-class-two.spec.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./spec/unit sync recursive .spec$";

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./spec/in-browser/index.js ***!
  \**********************************/

// Our webpack.unit.tests.config.js file uses this to require all unit test files
// so they can be tested in a browser for debugging

// require all test files
var testsContext = __webpack_require__("./spec/unit sync recursive .spec$");
testsContext.keys().forEach(testsContext);

/******/ })()
;
//# sourceMappingURL=spec.js.map