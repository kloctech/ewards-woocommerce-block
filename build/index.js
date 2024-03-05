/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CouponsHandler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CouponsHandler(data) {
  const [cartValue, setCartValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [primaryColor, setPrimaryColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [secondayColor, setSecondaryColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [font, setFont] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [storeUrl, setStoreUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.location.origin);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPrimaryColor(data.attributes.primaryColor);
    setSecondaryColor(data.attributes.secondayColor);
    setFont(data.attributes.font);
    const fetchCartValue = () => {
      const cartValueElement = document.querySelector(".wc-block-components-totals-item__value");
      if (cartValueElement) {
        setCartValue(cartValueElement.textContent);
      }
    };
    const timerId = setTimeout(fetchCartValue, 1000);
    return () => clearTimeout(timerId);
  }, []);
  const containerStyle = {
    width: "100%",
    height: "95vh",
    border: "none"
  };
  // &font=${data.attributes.font}&primaryColor=${data.attributes.primaryColor}&secondayColor=${data.attributes.secondayColor}
  // debugger
  const src = `https://7712-106-51-177-195.ngrok-free.app/?cart=${encodeURIComponent(cartValue)}&font=${font}&primaryColor=${primaryColor}&secondayColor=${secondayColor}&storeUrl=${storeUrl}`;
  console.log(src);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: src,
    style: containerStyle,
    title: "External Content"
  });
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index */ "./src/components/index.js");





const attributes = {
  currentUser: {
    type: 'int',
    default: 1
  },
  primaryColor: {
    type: "string",
    default: "#000000"
  },
  secondayColor: {
    type: "string",
    default: "#ffffff"
  },
  font: {
    type: "string",
    default: "monospace"
  }
};
const save = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-block-user-card-wrapper",
    "data-mt-attributes": JSON.stringify(props.attributes)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-block-user-card"
  }));
};
const edit = props => {
  function setPrimaryColor(e) {
    props.setAttributes({
      primaryColor: e
    });
  }
  function setSecondaryColor(e) {
    props.setAttributes({
      secondayColor: e
    });
  }
  function setFont(e) {
    props.setAttributes({
      font: e
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-block-user-card-wrapper",
    "data-mt-attributes": JSON.stringify(props.attributes)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-block-user-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Ewards"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Enter theme color and font family"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Primary Color",
    value: props.attributes.primaryColor,
    onChange: value => setPrimaryColor(value),
    placeholder: "Primary Color"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Secondary Color",
    value: props.attributes.secondayColor,
    onChange: value => setSecondaryColor(value),
    placeholder: "Secondary Color"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Font",
    value: props.attributes.font,
    onChange: value => setFont(value),
    placeholder: "Font"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardDivider, null))));
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('gutenreact/test-block', {
  title: "Test-BLOCK",
  category: "common",
  attributes,
  edit,
  save
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map