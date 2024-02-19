/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/coupon-handler.js":
/*!******************************************!*\
  !*** ./src/components/coupon-handler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CouponsHandler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ "./src/components/test.js");


// import Requestotp from './requestotp';

function CouponsHandler() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleBeforeUnload = event => {
      const confirmationMessage = 'Are you sure you want to reload?';
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };
    const confirmReload = () => {
      if (window.confirm('Are you sure you want to reload?')) {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.location.reload();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_test__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/components/test.js":
/*!********************************!*\
  !*** ./src/components/test.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_test_test_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/test/test.scss */ "./src/styles/test/test.scss");


const Test = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "container text-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "row g-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-floating"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    class: "form-select",
    id: "floatingSelectGrid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "91"
  }, "91")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "floatingSelectGrid"
  }, "Country"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-floating"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "email",
    class: "form-control",
    id: "floatingInputGrid",
    placeholder: "name@example.com",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "floatingInputGrid"
  }, "Email address"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "btn btn-primary"
  }, "Dark"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group mb-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-floating"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    class: "form-select",
    id: "floatingSelectGrid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true
  }, "Open this select menu"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "1"
  }, "One"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "2"
  }, "Two"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "3"
  }, "Three")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "floatingSelectGrid"
  }, "Works with selects"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    class: "form-control",
    "aria-label": "Text input with checkbox"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    class: "form-check-input mt-0",
    type: "radio",
    value: "",
    "aria-label": "Radio button for following text input"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    class: "form-control",
    "aria-label": "Text input with radio button"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm"
  }, "col-sm"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm"
  }, "col-sm"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm"
  }, "col-sm"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);

/***/ }),

/***/ "./src/styles/test/test.scss":
/*!***********************************!*\
  !*** ./src/styles/test/test.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/front.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_coupon_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/coupon-handler */ "./src/components/coupon-handler.js");




window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.mt-block-user-card-wrapper');
  if (cards) {
    Array.from(cards).forEach(card => {
      const attributes = JSON.parse(card.dataset.mtAttributes);
      react_dom__WEBPACK_IMPORTED_MODULE_1___default().hydrate((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_coupon_handler__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes
      }), card);
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=front.js.map