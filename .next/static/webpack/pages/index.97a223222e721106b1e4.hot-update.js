webpackHotUpdate_N_E("pages/index",{

/***/ "./public/components/ContactsList.js":
/*!*******************************************!*\
  !*** ./public/components/ContactsList.js ***!
  \*******************************************/
/*! exports provided: ContactsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactsList\", function() { return ContactsList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/ghost-2306/Labo/contact_book/public/components/ContactsList.js\",\n    _s = $RefreshSig$();\n\n\nfunction ContactsList() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLoaded = _useState[0],\n      setIsLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      contactList = _useState2[0],\n      setContactList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch(\"http://localhost:3003/contacts\", {\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      method: 'GET'\n    }).then(function (rep) {\n      return rep.json();\n    }).then(function (result) {\n      setIsLoaded(true);\n      setContactList(result);\n    }, function (error) {\n      setIsLoaded(true);\n      setError(error);\n    });\n  }, []);\n  console.log(contactList);\n\n  if (error) {\n    console.log(error);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Something went wrong...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 16\n    }, this);\n  } else if (isLoaded === false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 16\n    }, this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"contacts\",\n      children: contactList.map(function (contact, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"data-id\": index,\n          className: \"card_contact\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card_top\",\n            children: contact.pseudo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card_basic\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Firstname : \", contact.firstname]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Lastname : \", contact.lastname]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card_infoSup\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Birth date : \", contact.infoSup.birthdate]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Email : \", contact.infoSup.email]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Telephone : \", contact.infoSup.telephone]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Twitter : @\", contact.infoSup.twitter]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Instagram : @\", contact.infoSup.instagram]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_s(ContactsList, \"IHDobeCea8g2lk8oyMzAV1X9vCs=\");\n\n_c = ContactsList;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactsList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvQ29udGFjdHNMaXN0LmpzPzc1NTEiXSwibmFtZXMiOlsiQ29udGFjdHNMaXN0IiwidXNlU3RhdGUiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiY29udGFjdExpc3QiLCJzZXRDb250YWN0TGlzdCIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwicmVwIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjb250YWN0IiwiaW5kZXgiLCJwc2V1ZG8iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImluZm9TdXAiLCJiaXJ0aGRhdGUiLCJlbWFpbCIsInRlbGVwaG9uZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFcEJDLFFBRm9CO0FBQUEsTUFFVkMsV0FGVTs7QUFBQSxtQkFHV0Ysc0RBQVEsQ0FBQyxFQUFELENBSG5CO0FBQUEsTUFHcEJHLFdBSG9CO0FBQUEsTUFHUEMsY0FITzs7QUFBQSxtQkFJREosc0RBQVEsQ0FBQyxJQUFELENBSlA7QUFBQSxNQUlwQkssS0FKb0I7QUFBQSxNQUliQyxRQUphOztBQU0zQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssQ0FBQyxnQ0FBRCxFQUFtQztBQUNwQ0MsYUFBTyxFQUFFO0FBQ0wsa0JBQVUsa0JBREw7QUFFTCx3QkFBZ0I7QUFGWCxPQUQyQjtBQUtwQ0MsWUFBTSxFQUFFO0FBTDRCLEtBQW5DLENBQUwsQ0FPQ0MsSUFQRCxDQU9NLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBUFQsRUFRQ0YsSUFSRCxDQVNJLFVBQUNHLE1BQUQsRUFBWTtBQUNSWixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxvQkFBYyxDQUFDVSxNQUFELENBQWQ7QUFDSCxLQVpMLEVBYUksVUFBQ1QsS0FBRCxFQUFXO0FBQ1BILGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FJLGNBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0gsS0FoQkw7QUFrQkgsR0FuQlEsRUFtQk4sRUFuQk0sQ0FBVDtBQXFCQVUsU0FBTyxDQUFDQyxHQUFSLENBQVliLFdBQVo7O0FBQ0EsTUFBSUUsS0FBSixFQUFXO0FBQ1BVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0Esd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNILEdBSEQsTUFJSyxJQUFJSixRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDekIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNILEdBRkksTUFHQTtBQUNELHdCQUNJO0FBQUssUUFBRSxFQUFDLFVBQVI7QUFBQSxnQkFDS0UsV0FBVyxDQUFDYyxHQUFaLENBQWdCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNqQyw0QkFDQTtBQUFLLHFCQUFTQSxLQUFkO0FBQXFCLG1CQUFTLEVBQUMsY0FBL0I7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLHNCQUEyQkQsT0FBTyxDQUFDRTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDSTtBQUFBLHlDQUFnQkYsT0FBTyxDQUFDRyxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLHdDQUFlSCxPQUFPLENBQUNJLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFNSTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNJO0FBQUEsMENBQWlCSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEscUNBQVlOLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkUsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBQSx5Q0FBZ0JQLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkcsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBSUk7QUFBQSx3Q0FBZVIsT0FBTyxDQUFDSyxPQUFSLENBQWdCSSxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFLSTtBQUFBLDBDQUFpQlQsT0FBTyxDQUFDSyxPQUFSLENBQWdCSyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQWdCSCxPQWpCQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXNCSDtBQUNKOztHQTNEZTdCLFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9Db250YWN0c0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFjdHNMaXN0KCkge1xuXG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NvbnRhY3RMaXN0LCBzZXRDb250YWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAzL2NvbnRhY3RzXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVwID0+IHJlcC5qc29uKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldENvbnRhY3RMaXN0KHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9LCBbXSlcblxuICAgIGNvbnNvbGUubG9nKGNvbnRhY3RMaXN0KVxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIDxkaXY+U29tZXRoaW5nIHdlbnQgd3JvbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdHNcIj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2NvbnRhY3RMaXN0Lm1hcCgoY29udGFjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWlkPXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZF9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfdG9wXCI+e2NvbnRhY3QucHNldWRvfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2Jhc2ljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3RuYW1lIDoge2NvbnRhY3QuZmlyc3RuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0bmFtZSA6IHtjb250YWN0Lmxhc3RuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2luZm9TdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CaXJ0aCBkYXRlIDoge2NvbnRhY3QuaW5mb1N1cC5iaXJ0aGRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIDoge2NvbnRhY3QuaW5mb1N1cC5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVsZXBob25lIDoge2NvbnRhY3QuaW5mb1N1cC50ZWxlcGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR3aXR0ZXIgOiBAe2NvbnRhY3QuaW5mb1N1cC50d2l0dGVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnN0YWdyYW0gOiBAe2NvbnRhY3QuaW5mb1N1cC5pbnN0YWdyYW19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/ContactsList.js\n");

/***/ })

})