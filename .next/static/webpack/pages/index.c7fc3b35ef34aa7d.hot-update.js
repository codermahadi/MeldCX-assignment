"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx":
/*!*******************************************************************!*\
  !*** ./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar top = [\n    0,\n    100,\n    50,\n    30,\n    40,\n    50,\n    60,\n    70,\n    80,\n    90,\n    100\n];\nvar left = [\n    0,\n    100,\n    20,\n    30,\n    40,\n    50,\n    60,\n    70,\n    80,\n    90,\n    100\n];\nvar NotifyDeviceOnlineComponent = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        'user'\n    ]), 3), cookies = ref[0], setCookie = ref[1], removeCookie = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), devices = ref1[0], setDevices = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getDataAfterFiveSecond();\n    }, [\n        devices.length\n    ]);\n    var logout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    removeCookie('user');\n                    _ctx.next = 3;\n                    return router.push('/login');\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var getDataAfterFiveSecond = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return setInterval(function() {\n                        axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://35.201.2.209:8000/devices').then(function(r) {\n                            return setDevices(r.data.devices);\n                        }).catch(function(e) {\n                            return console.log(e);\n                        });\n                    }, 5000);\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        devices.length\n    ]);\n    var randomNumber = Math.random();\n    var ConnectDevice = function(param) {\n        var item = param.item, l = param.l;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: 'ConnectDevice device_1',\n            style: {\n                top: \"\".concat(top[item.id], \"%\"),\n                left: \"\".concat(top[item.id], \"%\"),\n                transform: 'translate(-50%, -0%)'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"ConnectDeviceInner\",\n                children: item.id\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 36,\n                columnNumber: 21\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'NotifyDeviceOnlineWrap',\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"NotifyDeviceOnlineInner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"round\"\n                    }, void 0, false, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this),\n                    devices.length > 0 && devices.map(function(item, i) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ConnectDevice, {\n                            item: item,\n                            l: devices.length\n                        }, i, false, {\n                            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"CountOfDevices\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: devices.length\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Devices \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, _this),\n                                    \" Online\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"notifyBottom\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"notifyBottomInner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"notifyBtn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn notify\",\n                                children: \"Notify\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn logout\",\n                                onClick: function() {\n                                    return logout();\n                                },\n                                children: \"Log out\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, _this));\n};\n_s(NotifyDeviceOnlineComponent, \"nhWSDhupDGf7K/4XxVoO6kKEQxA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NotifyDeviceOnlineComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotifyDeviceOnlineComponent);\nvar _c;\n$RefreshReg$(_c, \"NotifyDeviceOnlineComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL05vdGlmeURpc3BsYXkvTm90aWZ5RGV2aWNlT25saW5lLkNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBRXRCO0FBQ0Y7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLEdBQUssQ0FBQ08sR0FBRyxHQUFHLENBQUM7QUFBQSxLQUFDO0FBQUUsT0FBRztBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUUsTUFBRTtBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUUsTUFBRTtBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUUsT0FBRztBQUFBLENBQUM7QUFDekQsR0FBSyxDQUFDQyxJQUFJLEdBQUcsQ0FBQztBQUFBLEtBQUM7QUFBRSxPQUFHO0FBQUUsTUFBRTtBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUUsTUFBRTtBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUUsTUFBRTtBQUFFLE1BQUU7QUFBRSxPQUFHO0FBQUEsQ0FBQztBQUMxRCxHQUFLLENBQUNDLDJCQUEyQixHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFFdkMsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCLEdBQUssQ0FBc0NELEdBQW9CLGtCQUFwQkEsd0RBQVUsQ0FBQyxDQUFDO1FBQUEsQ0FBTTtJQUFBLENBQUMsT0FBdkRPLE9BQU8sR0FBNkJQLEdBQW9CLEtBQS9DUSxTQUFTLEdBQWtCUixHQUFvQixLQUFwQ1MsWUFBWSxHQUFJVCxHQUFvQjtJQUMvRCxHQUFLLENBQXlCRCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWxDVyxPQUFPLEdBQWdCWCxJQUFZLEtBQTFCWSxVQUFVLEdBQUlaLElBQVk7SUFDMUNELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYmMsc0JBQXNCO0lBQzFCLENBQUMsRUFBRSxDQUFD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OztLQUhuREssMkJBQTJCO0FBdURqQywrREFBZUEsMkJBQTJCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ob3RpZnlEaXNwbGF5L05vdGlmeURldmljZU9ubGluZS5Db21wb25lbnQudHN4Pzk5NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdG9wID0gWzAsIDEwMCwgNTAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwLCAxMDBdXHJcbmNvbnN0IGxlZnQgPSBbMCwgMTAwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MCwgOTAsIDEwMF1cclxuY29uc3QgTm90aWZ5RGV2aWNlT25saW5lQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoWyd1c2VyJ10pO1xyXG4gICAgY29uc3QgW2RldmljZXMsIHNldERldmljZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhQWZ0ZXJGaXZlU2Vjb25kKClcclxuICAgIH0sIFtkZXZpY2VzLmxlbmd0aF0pXHJcbiAgICBjb25zdCBsb2dvdXQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBnZXREYXRhQWZ0ZXJGaXZlU2Vjb25kID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vMzUuMjAxLjIuMjA5OjgwMDAvZGV2aWNlcycpLnRoZW4ociA9PiBzZXREZXZpY2VzKHIuZGF0YS5kZXZpY2VzKSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfSwgNTAwMClcclxuICAgIH0sIFtkZXZpY2VzLmxlbmd0aF0pXHJcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgIGNvbnN0IENvbm5lY3REZXZpY2UgPSAoe2l0ZW0sIGx9OiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0Nvbm5lY3REZXZpY2UgZGV2aWNlXzEnfVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvcDogYCR7dG9wW2l0ZW0uaWRdfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHt0b3BbaXRlbS5pZF19JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtMCUpJ1xyXG4gICAgICAgICAgICAgICAgIH19PjxkaXYgY2xhc3NOYW1lPVwiQ29ubmVjdERldmljZUlubmVyXCI+e2l0ZW0uaWR9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J05vdGlmeURldmljZU9ubGluZVdyYXAnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOb3RpZnlEZXZpY2VPbmxpbmVJbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2RldmljZXMubGVuZ3RoID4gMCAmJiBkZXZpY2VzLm1hcCgoaXRlbSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29ubmVjdERldmljZSBpdGVtPXtpdGVtfSBsPXtkZXZpY2VzLmxlbmd0aH0ga2V5PXtpfS8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb3VudE9mRGV2aWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57ZGV2aWNlcy5sZW5ndGh9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+RGV2aWNlcyA8YnIvPiBPbmxpbmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmeUJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZnlCb3R0b21Jbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZ5QnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG5vdGlmeVwiPk5vdGlmeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsb2dvdXRcIiBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0+TG9nIG91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmeURldmljZU9ubGluZUNvbXBvbmVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsImF4aW9zIiwidG9wIiwibGVmdCIsIk5vdGlmeURldmljZU9ubGluZUNvbXBvbmVudCIsInJvdXRlciIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJkZXZpY2VzIiwic2V0RGV2aWNlcyIsImdldERhdGFBZnRlckZpdmVTZWNvbmQiLCJsZW5ndGgiLCJsb2dvdXQiLCJwdXNoIiwic2V0SW50ZXJ2YWwiLCJnZXQiLCJ0aGVuIiwiciIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsInJhbmRvbSIsIkNvbm5lY3REZXZpY2UiLCJsIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaWQiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJpIiwiaDIiLCJoNCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\n");

/***/ })

});