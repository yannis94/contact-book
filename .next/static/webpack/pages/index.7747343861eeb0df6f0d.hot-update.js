webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/components/Form */ \"./public/components/Form.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/ghost-2306/Labo/contact_book/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLoaded = _useState[0],\n      setIsLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      contactList = _useState2[0],\n      setContactList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      formDisplay = _useState4[0],\n      setFormDisplay = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      formInfo = _useState5[0],\n      setFormInfo = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetch(\"http://localhost:3003/contacts\", {\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      method: 'GET'\n    }).then(function (rep) {\n      return rep.json();\n    }).then(function (result) {\n      setIsLoaded(true);\n      setContactList(result);\n    }, function (error) {\n      setIsLoaded(true);\n      setError(error);\n    });\n  }, []);\n\n  function handleClick(e) {\n    console.log(e.target);\n    setFormDisplay(true);\n    setFormInfo(contactList[1]);\n  }\n\n  console.log(contactList);\n\n  if (error) {\n    console.log(error);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Something went wrong...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 16\n    }, this);\n  } else if (isLoaded === false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 16\n    }, this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"app\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"contacts\",\n        children: contactList.map(function (contact, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"data-id\": index,\n            className: \"card_contact\",\n            onClick: handleClick,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card_top\",\n              children: contact.pseudo\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card_basic\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Firstname : \", contact.firstname]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Lastname : \", contact.lastname]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card_infoSup\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Birth date : \", contact.infoSup.birthdate]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Email : \", contact.infoSup.email]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Telephone : \", contact.infoSup.telephone]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Twitter : @\", contact.infoSup.twitter]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Instagram : @\", contact.infoSup.instagram]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              children: \"Modify\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_components_Form__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n        display: formDisplay,\n        contact: formInfo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_s(HomePage, \"3jWOyzjmsV/1iVoEyKDefzNeKvI=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImNvbnRhY3RMaXN0Iiwic2V0Q29udGFjdExpc3QiLCJlcnJvciIsInNldEVycm9yIiwiZm9ybURpc3BsYXkiLCJzZXRGb3JtRGlzcGxheSIsImZvcm1JbmZvIiwic2V0Rm9ybUluZm8iLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwicmVwIiwianNvbiIsInJlc3VsdCIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJtYXAiLCJjb250YWN0IiwiaW5kZXgiLCJwc2V1ZG8iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImluZm9TdXAiLCJiaXJ0aGRhdGUiLCJlbWFpbCIsInRlbGVwaG9uZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWdCQyxzREFBUSxDQUFDLEtBQUQsQ0FGeEI7QUFBQSxNQUVUQyxRQUZTO0FBQUEsTUFFQ0MsV0FGRDs7QUFBQSxtQkFHc0JGLHNEQUFRLENBQUMsRUFBRCxDQUg5QjtBQUFBLE1BR1RHLFdBSFM7QUFBQSxNQUdJQyxjQUhKOztBQUFBLG1CQUlVSixzREFBUSxDQUFDLElBQUQsQ0FKbEI7QUFBQSxNQUlUSyxLQUpTO0FBQUEsTUFJRkMsUUFKRTs7QUFBQSxtQkFNc0JOLHNEQUFRLENBQUMsS0FBRCxDQU45QjtBQUFBLE1BTVRPLFdBTlM7QUFBQSxNQU1JQyxjQU5KOztBQUFBLG1CQU9nQlIsc0RBQVEsQ0FBQyxFQUFELENBUHhCO0FBQUEsTUFPVFMsUUFQUztBQUFBLE1BT0NDLFdBUEQ7O0FBU2hCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxD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LFNBbEJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBc0JJLHFFQUFDLDREQUFEO0FBQU0sZUFBTyxFQUFFNUIsV0FBZjtBQUE0QixlQUFPLEVBQUVFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUEwQkg7QUFDSjs7R0F4RVFWLFE7O0tBQUFBLFE7QUEwRU1BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4uL3B1YmxpYy9jb21wb25lbnRzL0Zvcm1cIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY29udGFjdExpc3QsIHNldENvbnRhY3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgW2Zvcm1EaXNwbGF5LCBzZXRGb3JtRGlzcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Zvcm1JbmZvLCBzZXRGb3JtSW5mb10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAzL2NvbnRhY3RzXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVwID0+IHJlcC5qc29uKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldENvbnRhY3RMaXN0KHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9LCBbXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIHNldEZvcm1EaXNwbGF5KHRydWUpXG4gICAgICAgIHNldEZvcm1JbmZvKGNvbnRhY3RMaXN0WzFdKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGNvbnRhY3RMaXN0KVxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIDxkaXY+U29tZXRoaW5nIHdlbnQgd3JvbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhY3RzXCI+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7Y29udGFjdExpc3QubWFwKChjb250YWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRfY29udGFjdFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfdG9wXCI+e2NvbnRhY3QucHNldWRvfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9iYXNpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdG5hbWUgOiB7Y29udGFjdC5maXJzdG5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0bmFtZSA6IHtjb250YWN0Lmxhc3RuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfaW5mb1N1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CaXJ0aCBkYXRlIDoge2NvbnRhY3QuaW5mb1N1cC5iaXJ0aGRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCA6IHtjb250YWN0LmluZm9TdXAuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWxlcGhvbmUgOiB7Y29udGFjdC5pbmZvU3VwLnRlbGVwaG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR3aXR0ZXIgOiBAe2NvbnRhY3QuaW5mb1N1cC50d2l0dGVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zdGFncmFtIDogQHtjb250YWN0LmluZm9TdXAuaW5zdGFncmFtfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPk1vZGlmeTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGb3JtIGRpc3BsYXk9e2Zvcm1EaXNwbGF5fSBjb250YWN0PXtmb3JtSW5mb30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})