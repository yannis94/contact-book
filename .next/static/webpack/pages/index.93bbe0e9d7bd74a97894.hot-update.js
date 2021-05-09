webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/components/Form */ \"./public/components/Form.js\");\n/* harmony import */ var _public_components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Card */ \"./public/components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/ghost-2306/Labo/contact-book/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _this = this;\n\n  //path search pseudo //! localhost:3003/contacts?pseudo=${variable}\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isLoaded = _useState[0],\n      setIsLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      contactList = _useState2[0],\n      setContactList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"http://localhost:3003/contacts\"),\n      url = _useState4[0],\n      setUrl = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchContact(url);\n  }, []);\n\n  function fetchContact(arg) {\n    fetch(arg, {\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      method: 'GET'\n    }).then(function (rep) {\n      return rep.json();\n    }).then(function (result) {\n      setContactList(result);\n      setIsLoaded(true);\n    }, function (error) {\n      setError(error);\n      setIsLoaded(true);\n    });\n  }\n\n  function handleClick(e) {\n    setFormVisiblity(true);\n    var element = e.target; //adding a new contact\n\n    if (element.id === \"btn_add_contact\") {\n      console.log(\"hello friend\");\n    } //modify existing contact\n    else {\n        //cas click imprécis\n        while (element.className !== \"card_contact\") {\n          element = element.parentElement;\n        } //send props to Form\n        //setContactPseudo(element.querySelector(\".contact_pseudo\").textContent);\n\n\n        setContactPseudo(element.dataset.id); //console.log(contactPseudo)\n\n        setFormObj(contactList[contactPseudo]); //! utiliser plus tard\n      }\n\n    console.log(e);\n  }\n\n  function searchBarChange(e) {\n    console.log(e.target.value);\n\n    if (e.target.value !== \"\") {\n      setUrl(\"http://localhost:3003/contacts?pseudo=\".concat(e.target.value));\n    } else {\n      setUrl(\"http://localhost:3003/contacts\");\n    }\n  }\n\n  if (error) {\n    console.log(error);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Something went wrong...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 16\n    }, this);\n  } else if (isLoaded === false) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 16\n    }, this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"app\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"app_header\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"My contact book\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          id: \"btn_add_contact\",\n          onClick: handleClick,\n          children: \"New contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"searchbar-section\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          placeholder: \"Search contact ...\",\n          onChange: searchBarChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"contacts\",\n        onClick: handleClick,\n        children: contactList.map(function (contact, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            id: index,\n            pseudo: contact.pseudo,\n            firstname: contact.firstname,\n            lastname: contact.lastname,\n            birthdate: contact.birthdate,\n            email: contact.email,\n            telephone: contact.telephone,\n            twitter: contact.twitter,\n            instagram: contact.instagram\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_s(HomePage, \"HBi8dEwewqneDY/B6PeW5YGbafg=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImNvbnRhY3RMaXN0Iiwic2V0Q29udGFjdExpc3QiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0IiwiZmV0Y2hDb250YWN0IiwiYXJnIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwidGhlbiIsInJlcCIsImpzb24iLCJyZXN1bHQiLCJoYW5kbGVDbGljayIsImUiLCJzZXRGb3JtVmlzaWJsaXR5IiwiZWxlbWVudCIsInRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsInBhcmVudEVsZW1lbnQiLCJzZXRDb250YWN0UHNldWRvIiwiZGF0YXNldCIsInNldEZvcm1PYmoiLCJjb250YWN0UHNldWRvIiwic2VhcmNoQmFyQ2hhbmdlIiwidmFsdWUiLCJtYXAiLCJjb250YWN0IiwiaW5kZXgiLCJwc2V1ZG8iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImJpcnRoZGF0ZSIsImVtYWlsIiwidGVsZXBob25lIiwidHdpdHRlciIsImluc3RhZ3JhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFFaEI7QUFGZ0Isa0JBSWdCQyxzREFBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxNQUlUQyxRQUpTO0FBQUEsTUFJQ0MsV0FKRDs7QUFBQSxtQkFLc0JGLHNEQUFRLENBQUMsRUFBRCxDQUw5QjtBQUFBLE1BS1RHLFdBTFM7QUFBQSxNQUtJQyxjQUxKOztBQUFBLG1CQU1VSixzREFBUSxDQUFDLElBQUQsQ0FObEI7QUFBQSxNQU1USyxLQU5TO0FBQUEsTUFNRkMsUUFORTs7QUFBQSxtQkFRTU4sc0RBQVEsQ0FBQyxnQ0FBRCxDQVJkO0FBQUEsTUFR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OUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQVFJO0FBQUssVUFBRSxFQUFDLFVBQVI7QUFBbUIsZUFBTyxFQUFFZCxXQUE1QjtBQUFBLGtCQUNLaEIsV0FBVyxDQUFDZ0MsR0FBWixDQUFnQixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDakMsOEJBQ0EscUVBQUMsNERBQUQ7QUFDSSxjQUFFLEVBQUVBLEtBRFI7QUFFSSxrQkFBTSxFQUFFRCxPQUFPLENBQUNFLE1BRnBCO0FBR0kscUJBQVMsRUFBRUYsT0FBTyxDQUFDRyxTQUh2QjtBQUlJLG9CQUFRLEVBQUVILE9BQU8sQ0FBQ0ksUUFKdEI7QUFLSSxxQkFBUyxFQUFFSixPQUFPLENBQUNLLFNBTHZCO0FBTUksaUJBQUssRUFBRUwsT0FBTyxDQUFDTSxLQU5uQjtBQU9JLHFCQUFTLEVBQUVOLE9BQU8sQ0FBQ08sU0FQdkI7QUFRSSxtQkFBTyxFQUFFUCxPQUFPLENBQUNRLE9BUnJCO0FBU0kscUJBQVMsRUFBRVIsT0FBTyxDQUFDUztBQVR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBO0FBYUgsU0FkQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQTRCSDtBQUNKOztHQTdHUTlDLFE7O0tBQUFBLFE7QUErR01BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4uL3B1YmxpYy9jb21wb25lbnRzL0Zvcm1cIlxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9wdWJsaWMvY29tcG9uZW50cy9DYXJkXCJcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgICAvL3BhdGggc2VhcmNoIHBzZXVkbyAvLyEgbG9jYWxob3N0OjMwMDMvY29udGFjdHM/cHNldWRvPSR7dmFyaWFibGV9XG5cbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY29udGFjdExpc3QsIHNldENvbnRhY3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAzL2NvbnRhY3RzXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hDb250YWN0KHVybClcbiAgICB9LCBbXSlcblxuICAgIGZ1bmN0aW9uIGZldGNoQ29udGFjdChhcmcpIHtcbiAgICAgICAgZmV0Y2goYXJnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcCA9PiByZXAuanNvbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDb250YWN0TGlzdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBzZXRGb3JtVmlzaWJsaXR5KHRydWUpO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICBcbiAgICAgICAgLy9hZGRpbmcgYSBuZXcgY29udGFjdFxuICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gXCJidG5fYWRkX2NvbnRhY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyBmcmllbmRcIilcbiAgICAgICAgfVxuICAgICAgICAvL21vZGlmeSBleGlzdGluZyBjb250YWN0XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAvL2NhcyBjbGljayBpbXByw6ljaXNcbiAgICAgICAgICAgIHdoaWxlIChlbGVtZW50LmNsYXNzTmFtZSAhPT0gXCJjYXJkX2NvbnRhY3RcIikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc2VuZCBwcm9wcyB0byBGb3JtXG4gICAgICAgICAgICAvL3NldENvbnRhY3RQc2V1ZG8oZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RfcHNldWRvXCIpLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIHNldENvbnRhY3RQc2V1ZG8oZWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29udGFjdFBzZXVkbylcbiAgICAgICAgICAgIHNldEZvcm1PYmooY29udGFjdExpc3RbY29udGFjdFBzZXVkb10pIC8vISB1dGlsaXNlciBwbHVzIHRhcmRcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWFyY2hCYXJDaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBzZXRVcmwoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9jb250YWN0cz9wc2V1ZG89JHtlLnRhcmdldC52YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFVybChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9jb250YWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIDxkaXY+U29tZXRoaW5nIHdlbnQgd3JvbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBfaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5NeSBjb250YWN0IGJvb2s8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuX2FkZF9jb250YWN0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9Pk5ldyBjb250YWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaGJhci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNvbnRhY3QgLi4uXCIgb25DaGFuZ2U9e3NlYXJjaEJhckNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdHNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7Y29udGFjdExpc3QubWFwKChjb250YWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzZXVkbz17Y29udGFjdC5wc2V1ZG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lPXtjb250YWN0LmZpcnN0bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZT17Y29udGFjdC5sYXN0bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXJ0aGRhdGU9e2NvbnRhY3QuYmlydGhkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPXtjb250YWN0LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVwaG9uZT17Y29udGFjdC50ZWxlcGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdpdHRlcj17Y29udGFjdC50d2l0dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhZ3JhbT17Y29udGFjdC5pbnN0YWdyYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})