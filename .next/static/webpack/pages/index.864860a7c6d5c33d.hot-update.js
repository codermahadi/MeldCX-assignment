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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar top = [\n    0,\n    100,\n    50,\n    0,\n    50,\n    100,\n    100,\n    0,\n    80,\n    90,\n    100\n];\nvar left = [\n    100,\n    0,\n    100,\n    50,\n    100,\n    50,\n    0,\n    70,\n    80,\n    30,\n    10\n];\nvar NotifyDeviceOnlineComponent = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        'user'\n    ]), 3), cookies = ref[0], setCookie = ref[1], removeCookie = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), devices = ref1[0], setDevices = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getDataAfterFiveSecond();\n    }, [\n        devices.length\n    ]);\n    var logout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    removeCookie('user');\n                    _ctx.next = 3;\n                    return router.push('/login');\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var getDataAfterFiveSecond = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return setInterval(function() {\n                        axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://35.201.2.209:8000/devices').then(function(r) {\n                            return setDevices(r.data.devices);\n                        }).catch(function(e) {\n                            return console.log(e);\n                        });\n                    }, 5000);\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var ConnectDevice = function(param) {\n        var item = param.item;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: 'ConnectDevice device_1',\n            style: {\n                top: \"\".concat(top[item.id], \"%\"),\n                left: \"\".concat(left[item.id], \"%\"),\n                transform: 'translate(-50%, -0%)'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"ConnectDeviceInner\",\n                children: item.id\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'NotifyDeviceOnlineWrap',\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"NotifyDeviceOnlineInner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"round\"\n                    }, void 0, false, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    devices.length > 0 && devices.map(function(item, i) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ConnectDevice, {\n                            item: item\n                        }, i, false, {\n                            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"CountOfDevices\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: devices.length\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Devices \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, _this),\n                                    \" Online\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"notifyBottom\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"notifyBottomInner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"notifyBtn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn notify\",\n                                children: \"Notify\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn logout\",\n                                onClick: function() {\n                                    return logout();\n                                },\n                                children: \"Log out\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, _this));\n};\n_s(NotifyDeviceOnlineComponent, \"nhWSDhupDGf7K/4XxVoO6kKEQxA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NotifyDeviceOnlineComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotifyDeviceOnlineComponent);\nvar _c;\n$RefreshReg$(_c, \"NotifyDeviceOnlineComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL05vdGlmeURpc3BsYXkvTm90aWZ5RGV2aWNlT25saW5lLkNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBRXRCO0FBQ0Y7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3pCLEdBQUssQ0FBQ08sR0FBRyxHQUFHLENBQUM7QUFBQSxLQUFDO0FBQUUsT0FBRztBQUFFLE1BQUU7QUFBRSxLQUFDO0FBQUUsTUFBRTtBQUFFLE9BQUc7QUFBRSxPQUFHO0FBQUUsS0FBQztBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUUsT0FBRztBQUFBLENBQUM7QUFDekQsR0FBSyxDQUFDQyxJQUFJLEdBQUcsQ0FBQztBQUFBLE9BQUc7QUFBRSxLQUFDO0FBQUUsT0FBRztBQUFFLE1BQUU7QUFBRSxPQUFHO0FBQUUsTUFBRTtBQUFFLEtBQUM7QUFBRSxNQUFFO0FBQUUsTUFBRTtBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUEsQ0FBQztBQUMxRCxHQUFLLENBQUNDLDJCQUEyQixHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFFdkMsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCLEdBQUssQ0FBc0NELEdBQW9CLGtCQUFwQkEsd0RBQVUsQ0FBQyxDQUFDO1FBQUEsQ0FBTTtJQUFBLENBQUMsT0FBdkRPLE9BQU8sR0FBNkJQLEdBQW9CLEtBQS9DUSxTQUFTLEdBQWtCUixHQUFvQixLQUFwQ1MsWUFBWSxHQUFJVCxHQUFvQjtJQUMvRCxHQUFLLENBQXlCRCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWxDVyxPQUFPLEdBQWdCWCxJQUFZLEtBQTFCWSxVQUFVLEdBQUlaLElBQVk7SUFDMUNELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYmMsc0JBQXNCO0lBQzFCLENBQUMsRUFBRSxDQUFDRjtRQUFBQSxPQUFPLENBQUNHLE1BQU07SUFBQSxDQUFDO0lBQ25CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHakIsa0RBQVcsd0tBQUMsUUFBUSxXQUFJLENBQUM7Ozs7b0JBQ3BDWSxZQUFZLENBQUMsQ0FBTTs7MkJBQ2JILE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLENBQVE7Ozs7OztJQUM5QixDQUFDLElBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDSCxzQkFBc0IsR0FBR2Ysa0RBQVcsd0tBQUMsUUFBUSxXQUFJLENBQUM7Ozs7OzJCQUM5Q21CLFdBQVcsQ0FBQyxRQUFRLEdBQUksQ0FBQzt3QkFDM0JkLGdEQUFTLENBQUMsQ0FBa0MsbUNBQUVnQixJQUFJLENBQUNDLFFBQVEsQ0FBUkEsQ0FBQzs0QkFBSVIsTUFBTSxDQUFOQSxVQUFVLENBQUNRLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVixPQUFPOzJCQUFHVyxLQUFLLENBQUNDLFFBQVEsQ0FBUkEsQ0FBQzs0QkFBSUMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQzs7b0JBQ2hILENBQUMsRUFBRSxJQUFJOzs7Ozs7SUFDWCxDQUFDLElBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDRyxhQUFhLEdBQUcsUUFBUSxRQUFTLENBQUM7WUFBaEJDLElBQUksU0FBSkEsSUFBSTtRQUN4QixNQUFNLDZFQUNEQyxDQUFHO1lBQUNDLFNBQVMsRUFBRSxDQUF3QjtZQUNuQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ0oxQixHQUFHLEVBQUcsR0FBZSxNQUFDLENBQWRBLEdBQUcsQ0FBQ3VCLElBQUksQ0FBQ0ksRUFBRSxHQUFFLENBQUM7Z0JBQ3RCMUIsSUFBSSxFQUFHLEdBQWdCLE1BQUMsQ0FBZkEsSUFBSSxDQUFDc0IsSUFBSSxDQUFDSSxFQUFFLEdBQUUsQ0FBQztnQkFDeEJDLFNBQVMsRUFBRSxDQUFzQjtZQUNyQyxDQUFDO2tHQUNESixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBb0I7MEJBQUVGLElBQUksQ0FBQ0ksRUFBRTs7Ozs7Ozs7Ozs7SUFHeEQsQ0FBQztJQUNELE1BQU0sNkVBQ0RILENBQUc7UUFBQ0MsU0FBUyxFQUFFLENBQXdCOzt3RkFDbkNELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5Qjs7Z0dBQ25DRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7O29CQUdyQmxCLE9BQU8sQ0FBQ0csTUFBTSxHQUFHLENBQUMsSUFBSUgsT0FBTyxDQUFDc0IsR0FBRyxDQUFDLFFBQVEsQ0FBUE4sSUFBSSxFQUFFTyxDQUFDO3NDQUN2QyxNQUFNLCtEQUFMUixhQUFhOzRCQUFDQyxJQUFJLEVBQUVBLElBQUk7MkJBQU9PLENBQUM7Ozs7OztnR0FFcENOLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFnQjs7d0dBQzFCTSxDQUFFOzBDQUFFeEIsT0FBTyxDQUFDRyxNQUFNOzs7Ozs7d0dBQ2xCc0IsQ0FBRTs7b0NBQUMsQ0FBUTtnSEFBQ0MsQ0FBRTs7Ozs7b0NBQUUsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHL0JULENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFjO3NHQUN4QkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQW1COzBHQUM3QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7O3dHQUNyQlMsQ0FBTTtnQ0FBQ1QsU0FBUyxFQUFDLENBQVk7MENBQUMsQ0FBTTs7Ozs7O3dHQUNwQ1MsQ0FBTTtnQ0FBQ1QsU0FBUyxFQUFDLENBQVk7Z0NBQUNVLE9BQU8sRUFBRSxRQUFRO29DQUFGeEIsTUFBTSxDQUFOQSxNQUFNOzswQ0FBSSxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZGLENBQUM7R0F2REtULDJCQUEyQjs7UUFFZEosa0RBQVM7UUFDbUJELG9EQUFVOzs7S0FIbkRLLDJCQUEyQjtBQXdEakMsK0RBQWVBLDJCQUEyQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTm90aWZ5RGlzcGxheS9Ob3RpZnlEZXZpY2VPbmxpbmUuQ29tcG9uZW50LnRzeD85OTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtyYW5kb219IGZyb20gXCJuYW5vaWRcIjtcclxuXHJcbmNvbnN0IHRvcCA9IFswLCAxMDAsIDUwLCAwLCA1MCwgMTAwLCAxMDAsIDAsIDgwLCA5MCwgMTAwXVxyXG5jb25zdCBsZWZ0ID0gWzEwMCwgMCwgMTAwLCA1MCwgMTAwLCA1MCwgMCwgNzAsIDgwLCAzMCwgMTBdXHJcbmNvbnN0IE5vdGlmeURldmljZU9ubGluZUNvbXBvbmVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZV0gPSB1c2VDb29raWVzKFsndXNlciddKTtcclxuICAgIGNvbnN0IFtkZXZpY2VzLCBzZXREZXZpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YUFmdGVyRml2ZVNlY29uZCgpXHJcbiAgICB9LCBbZGV2aWNlcy5sZW5ndGhdKVxyXG4gICAgY29uc3QgbG9nb3V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGF3YWl0IHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YUFmdGVyRml2ZVNlY29uZCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzM1LjIwMS4yLjIwOTo4MDAwL2RldmljZXMnKS50aGVuKHIgPT4gc2V0RGV2aWNlcyhyLmRhdGEuZGV2aWNlcykpLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH0sIDUwMDApXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBDb25uZWN0RGV2aWNlID0gKHtpdGVtfTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDb25uZWN0RGV2aWNlIGRldmljZV8xJ31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICB0b3A6IGAke3RvcFtpdGVtLmlkXX0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7bGVmdFtpdGVtLmlkXX0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC0wJSknXHJcbiAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbm5lY3REZXZpY2VJbm5lclwiPntpdGVtLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnTm90aWZ5RGV2aWNlT25saW5lV3JhcCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vdGlmeURldmljZU9ubGluZUlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGV2aWNlcy5sZW5ndGggPiAwICYmIGRldmljZXMubWFwKChpdGVtLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25uZWN0RGV2aWNlIGl0ZW09e2l0ZW19IGtleT17aX0vPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ291bnRPZkRldmljZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2RldmljZXMubGVuZ3RofTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PkRldmljZXMgPGJyLz4gT25saW5lPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZnlCb3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZ5Qm90dG9tSW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmeUJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBub3RpZnlcIj5Ob3RpZnk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9nb3V0XCIgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PkxvZyBvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZnlEZXZpY2VPbmxpbmVDb21wb25lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInRvcCIsImxlZnQiLCJOb3RpZnlEZXZpY2VPbmxpbmVDb21wb25lbnQiLCJyb3V0ZXIiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwiZGV2aWNlcyIsInNldERldmljZXMiLCJnZXREYXRhQWZ0ZXJGaXZlU2Vjb25kIiwibGVuZ3RoIiwibG9nb3V0IiwicHVzaCIsInNldEludGVydmFsIiwiZ2V0IiwidGhlbiIsInIiLCJkYXRhIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsIkNvbm5lY3REZXZpY2UiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpZCIsInRyYW5zZm9ybSIsIm1hcCIsImkiLCJoMiIsImg0IiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\n");

/***/ })

});