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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar top = [\n    0,\n    100,\n    50,\n    0,\n    50,\n    100,\n    100,\n    0,\n    80,\n    90,\n    100\n];\nvar left = [\n    0,\n    100,\n    0,\n    50,\n    100,\n    50,\n    0,\n    70,\n    80,\n    30,\n    10\n];\nvar NotifyDeviceOnlineComponent = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        'user'\n    ]), 3), cookies = ref[0], setCookie = ref[1], removeCookie = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), devices = ref1[0], setDevices = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getDataAfterFiveSecond();\n    }, [\n        devices.length\n    ]);\n    var logout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    removeCookie('user');\n                    _ctx.next = 3;\n                    return router.push('/login');\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var getDataAfterFiveSecond = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _media_mahadi_code40_mahadi_nextJs_meldcx_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return setInterval(function() {\n                        axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://35.201.2.209:8000/devices').then(function(r) {\n                            return setDevices(r.data.devices);\n                        }).catch(function(e) {\n                            return console.log(e);\n                        });\n                    }, 5000);\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        devices.length\n    ]);\n    var randomNumber = Math.random();\n    var ConnectDevice = function(param) {\n        var item = param.item, l = param.l, top1 = param.top, left1 = param.left;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: 'ConnectDevice device_1',\n            style: {\n                top: \"\".concat(top1, \"%\"),\n                left: \"\".concat(left1, \"%\"),\n                transform: 'translate(-50%, -0%)'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"ConnectDeviceInner\",\n                children: item.id\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'NotifyDeviceOnlineWrap',\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"NotifyDeviceOnlineInner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"round\"\n                    }, void 0, false, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    devices.length > 0 && devices.map(function(item, i) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ConnectDevice, {\n                            item: item,\n                            top: devices.length + 0,\n                            left: Math.floor(Math.random() * 100),\n                            l: devices.length\n                        }, i, false, {\n                            fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"CountOfDevices\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: devices.length\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Devices \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, _this),\n                                    \" Online\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"notifyBottom\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"notifyBottomInner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"notifyBtn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn notify\",\n                                children: \"Notify\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn logout\",\n                                onClick: function() {\n                                    return logout();\n                                },\n                                children: \"Log out\"\n                            }, void 0, false, {\n                                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mahadi/code40/mahadi/nextJs/meldcx/Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, _this));\n};\n_s(NotifyDeviceOnlineComponent, \"nhWSDhupDGf7K/4XxVoO6kKEQxA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NotifyDeviceOnlineComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotifyDeviceOnlineComponent);\nvar _c;\n$RefreshReg$(_c, \"NotifyDeviceOnlineComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL05vdGlmeURpc3BsYXkvTm90aWZ5RGV2aWNlT25saW5lLkNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBRXRCO0FBQ0Y7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLEdBQUssQ0FBQ08sR0FBRyxHQUFHLENBQUM7QUFBQSxLQUFDO0FBQUUsT0FBRztBQUFFLE1BQUU7QUFBRSxLQUFDO0FBQUUsTUFBRTtBQUFFLE9BQUc7QUFBRSxPQUFHO0FBQUUsS0FBQztBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUUsT0FBRztBQUFBLENBQUM7QUFDekQsR0FBSyxDQUFDQyxJQUFJLEdBQUcsQ0FBQztBQUFBLEtBQUM7QUFBRSxPQUFHO0FBQUUsS0FBQztBQUFFLE1BQUU7QUFBRSxPQUFHO0FBQUUsTUFBRTtBQUFFLEtBQUM7QUFBRSxNQUFFO0FBQUUsTUFBRTtBQUFFLE1BQUU7QUFBRSxNQUFFO0FBQUEsQ0FBQztBQUN4RCxHQUFLLENBQUNDLDJCQUEyQixHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFFdkMsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCLEdBQUssQ0FBc0NELEdBQW9CLGtCQUFwQkEsd0RBQVUsQ0FBQyxDQUFDO1FBQUEsQ0FBTTtJQUFBLENBQUMsT0FBdkRPLE9BQU8sR0FBNkJQLEdBQW9CLEtBQS9DUSxTQUFTLEdBQWtCUixHQUFvQixLQUFwQ1MsWUFBWSxHQUFJVCxHQUFvQjtJQUMvRCxHQUFLLENBQXlCRCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWxDVyxPQUFPLEdBQWdCWCxJQUFZLEtBQTFCWSxVQUFVLEdBQUlaLElBQVk7SUFDMUNELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYmMsc0JBQXNCO0lBQzFCLENBQUMsRUFBRSxDQUFD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QUFGN0IsTUFBTSxDQUFOQSxNQUFNOzswQ0FBSSxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZGLENBQUM7R0F6REtULDJCQUEyQjs7UUFFZEosa0RBQVM7UUFDbUJELG9EQUFVOzs7S0FIbkRLLDJCQUEyQjtBQTBEakMsK0RBQWVBLDJCQUEyQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTm90aWZ5RGlzcGxheS9Ob3RpZnlEZXZpY2VPbmxpbmUuQ29tcG9uZW50LnRzeD85OTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHRvcCA9IFswLCAxMDAsIDUwLCAwLCA1MCwgMTAwLCAxMDAsIDAsIDgwLCA5MCwgMTAwXVxyXG5jb25zdCBsZWZ0ID0gWzAsIDEwMCwgMCwgNTAsIDEwMCwgNTAsIDAsIDcwLCA4MCwgMzAsIDEwXVxyXG5jb25zdCBOb3RpZnlEZXZpY2VPbmxpbmVDb21wb25lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbY29va2llcywgc2V0Q29va2llLCByZW1vdmVDb29raWVdID0gdXNlQ29va2llcyhbJ3VzZXInXSk7XHJcbiAgICBjb25zdCBbZGV2aWNlcywgc2V0RGV2aWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGFBZnRlckZpdmVTZWNvbmQoKVxyXG4gICAgfSwgW2RldmljZXMubGVuZ3RoXSlcclxuICAgIGNvbnN0IGxvZ291dCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICByZW1vdmVDb29raWUoJ3VzZXInKTtcclxuICAgICAgICBhd2FpdCByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGdldERhdGFBZnRlckZpdmVTZWNvbmQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8zNS4yMDEuMi4yMDk6ODAwMC9kZXZpY2VzJykudGhlbihyID0+IHNldERldmljZXMoci5kYXRhLmRldmljZXMpKS5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9LCA1MDAwKVxyXG4gICAgfSwgW2RldmljZXMubGVuZ3RoXSlcclxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgY29uc3QgQ29ubmVjdERldmljZSA9ICh7aXRlbSwgbCwgdG9wLCBsZWZ0fTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDb25uZWN0RGV2aWNlIGRldmljZV8xJ31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICB0b3A6IGAke3RvcH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7bGVmdH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC0wJSknXHJcbiAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbm5lY3REZXZpY2VJbm5lclwiPntpdGVtLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnTm90aWZ5RGV2aWNlT25saW5lV3JhcCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vdGlmeURldmljZU9ubGluZUlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGV2aWNlcy5sZW5ndGggPiAwICYmIGRldmljZXMubWFwKChpdGVtLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25uZWN0RGV2aWNlIGl0ZW09e2l0ZW19IHRvcD17ZGV2aWNlcy5sZW5ndGggKyAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCl9IGw9e2RldmljZXMubGVuZ3RofSBrZXk9e2l9Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvdW50T2ZEZXZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntkZXZpY2VzLmxlbmd0aH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5EZXZpY2VzIDxici8+IE9ubGluZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZ5Qm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmeUJvdHRvbUlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZnlCdG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbm90aWZ5XCI+Tm90aWZ5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ291dFwiIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5Mb2cgb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZ5RGV2aWNlT25saW5lQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwiYXhpb3MiLCJ0b3AiLCJsZWZ0IiwiTm90aWZ5RGV2aWNlT25saW5lQ29tcG9uZW50Iiwicm91dGVyIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsImRldmljZXMiLCJzZXREZXZpY2VzIiwiZ2V0RGF0YUFmdGVyRml2ZVNlY29uZCIsImxlbmd0aCIsImxvZ291dCIsInB1c2giLCJzZXRJbnRlcnZhbCIsImdldCIsInRoZW4iLCJyIiwiZGF0YSIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwicmFuZG9tIiwiQ29ubmVjdERldmljZSIsImwiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJpZCIsIm1hcCIsImkiLCJmbG9vciIsImgyIiwiaDQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/NotifyDisplay/NotifyDeviceOnline.Component.tsx\n");

/***/ })

});