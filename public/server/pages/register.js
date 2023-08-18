"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 5698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_authentication_contex_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5116);



const PersonalDetailsForm = ()=>{
    const { handleInputChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_features_authentication_contex_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .V);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "email",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "first_name",
                            className: "text-placeholder text-[13px] font-md leading-5 md:border-black",
                            children: "First name"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "invert"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                required: true,
                                type: "text",
                                name: "first_name",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent outline-none w-full text-black",
                                placeholder: "Enter your first name"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "username pt-[42px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "last_name",
                            className: "text-placeholder text-[13px] font-md leading-5",
                            children: "Last name"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "invert"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                required: true,
                                type: "text",
                                name: "last_name",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent w-full outline-none text-black",
                                placeholder: "Enter your last name"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "social-link mt-[49px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "github",
                            className: "text-placeholder text-[13px] font-md leading-5",
                            children: "Github"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "invert"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                required: true,
                                type: "text",
                                name: "github",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent w-full outline-none text-black",
                                placeholder: "Link to social profile"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "invert"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "social-link mt-[49px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "twitter",
                            className: "text-placeholder text-[13px] font-md leading-5",
                            children: "Twitter Username"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "invert"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "twitter",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent outline-none w-[100%] text-black",
                                placeholder: "Link to social profile"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "social-link mt-[49px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "linkedin",
                            className: "text-placeholder text-[13px] font-md leading-5",
                            children: "Linkedin Profile Link"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "invert"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "linkedin",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent outline-none w-[100%] text-black",
                                placeholder: "Link to social profile"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalDetailsForm);


/***/ }),

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_RegisterForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/icons/Message.jsx
var Message = __webpack_require__(9601);
;// CONCATENATED MODULE: ./components/icons/User.jsx


const User = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.37886 7.70726C9.50388 7.70726 10.4779 7.3275 11.274 6.57823C12.0699 5.82909 12.4735 4.91247 12.4735 3.85351C12.4735 2.79492 12.07 1.87817 11.2739 1.12878C10.4778 0.37976 9.50375 0 8.37886 0C7.25372 0 6.2798 0.37976 5.48383 1.1289C4.68787 1.87805 4.28424 2.79479 4.28424 3.85351C4.28424 4.91247 4.68787 5.82921 5.48383 6.57836C6.28006 7.32738 7.2541 7.70726 8.37886 7.70726ZM6.18836 1.79187C6.79912 1.21704 7.51558 0.93762 8.37886 0.93762C9.24201 0.93762 9.9586 1.21704 10.5695 1.79187C11.1802 2.36682 11.4773 3.04125 11.4773 3.85351C11.4773 4.66601 11.1802 5.34032 10.5695 5.91527C9.9586 6.49022 9.24201 6.76964 8.37886 6.76964C7.51584 6.76964 6.79938 6.4901 6.18836 5.91527C5.57748 5.34044 5.28046 4.66601 5.28046 3.85351C5.28046 3.04125 5.57748 2.36682 6.18836 1.79187Z",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.5433 12.3032C15.5204 11.9914 15.474 11.6513 15.4056 11.2922C15.3366 10.9304 15.2478 10.5883 15.1414 10.2757C15.0314 9.9526 14.8821 9.63351 14.6973 9.32773C14.5057 9.01034 14.2806 8.73398 14.0279 8.50656C13.7637 8.26865 13.4403 8.07736 13.0662 7.93784C12.6935 7.79904 12.2804 7.72873 11.8385 7.72873C11.6649 7.72873 11.4971 7.79575 11.173 7.99435C10.9735 8.11679 10.7402 8.25839 10.4797 8.41501C10.257 8.54855 9.95536 8.67367 9.58273 8.78695C9.21918 8.89767 8.85006 8.95382 8.4856 8.95382C8.12141 8.95382 7.75228 8.89767 7.38847 8.78695C7.01624 8.6738 6.71442 8.54867 6.49212 8.41513C6.23415 8.25998 6.00069 8.11838 5.79823 7.99423C5.47437 7.79562 5.30653 7.72861 5.133 7.72861C4.69098 7.72861 4.27802 7.79904 3.90539 7.93796C3.53159 8.07724 3.20799 8.26852 2.94353 8.50668C2.69088 8.73422 2.46572 9.01047 2.27428 9.32773C2.08972 9.63351 1.94031 9.95248 1.83032 10.2758C1.7241 10.5885 1.63525 10.9304 1.56625 11.2922C1.49777 11.6508 1.45147 11.9911 1.42851 12.3035C1.40594 12.6091 1.39453 12.9271 1.39453 13.2484C1.39453 14.0836 1.67663 14.7597 2.23291 15.2584C2.78232 15.7504 3.50916 16 4.39332 16H12.5789C13.4628 16 14.1897 15.7504 14.7392 15.2584C15.2956 14.7601 15.5777 14.0837 15.5777 13.2483C15.5776 12.9259 15.566 12.6079 15.5433 12.3032ZM14.0523 14.5791C13.6893 14.9043 13.2073 15.0623 12.5788 15.0623H4.39332C3.76466 15.0623 3.2827 14.9043 2.9198 14.5792C2.56377 14.2602 2.39075 13.8248 2.39075 13.2484C2.39075 12.9486 2.40126 12.6525 2.42227 12.3684C2.44276 12.0896 2.48466 11.7833 2.54678 11.4578C2.60813 11.1364 2.68621 10.8348 2.77908 10.5617C2.86818 10.2999 2.98971 10.0406 3.14042 9.79086C3.28426 9.55282 3.44975 9.3486 3.63237 9.18405C3.80318 9.03012 4.01849 8.90414 4.27218 8.80966C4.50681 8.72226 4.77048 8.67441 5.05673 8.6672C5.09162 8.68466 5.15375 8.71799 5.25439 8.77975C5.45919 8.90536 5.69524 9.04867 5.9562 9.20553C6.25036 9.38205 6.62934 9.54147 7.08212 9.67904C7.54502 9.81991 8.01713 9.89144 8.48573 9.89144C8.95434 9.89144 9.42657 9.81991 9.88921 9.67917C10.3424 9.54135 10.7212 9.38205 11.0158 9.20529C11.2828 9.04464 11.5123 8.90548 11.7171 8.77975C11.8177 8.71811 11.8798 8.68466 11.9147 8.6672C12.2011 8.67441 12.4648 8.72226 12.6995 8.80966C12.9531 8.90414 13.1684 9.03024 13.3392 9.18405C13.5218 9.34848 13.6873 9.5527 13.8312 9.79098C13.982 10.0406 14.1037 10.3 14.1926 10.5616C14.2856 10.835 14.3639 11.1366 14.4251 11.4577C14.4871 11.7838 14.5291 12.0902 14.5496 12.3685V12.3687C14.5707 12.6518 14.5814 12.9477 14.5815 13.2484C14.5814 13.8249 14.4083 14.2602 14.0523 14.5791Z",
                    fill: "white"
                })
            ]
        })
    });
};
/* harmony default export */ const icons_User = (User);

// EXTERNAL MODULE: ./components/icons/Lock.jsx
var Lock = __webpack_require__(6213);
// EXTERNAL MODULE: ./components/icons/RevealEye.jsx
var RevealEye = __webpack_require__(4502);
// EXTERNAL MODULE: ./components/icons/ShowEye.jsx
var ShowEye = __webpack_require__(5044);
// EXTERNAL MODULE: ./features/authentication/contex/AuthContext.tsx
var AuthContext = __webpack_require__(5116);
;// CONCATENATED MODULE: ./components/RegisterForm.tsx








function RegisterForm() {
    const { userDetails , validPassword , handleInputChange , handleValidPassword  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const [passwordConfirmed, setPasswordConfirmed] = (0,external_react_.useState)(true);
    const [revealPassword, setRevealPassword] = (0,external_react_.useState)(false);
    const [revealConfirmPassword, setRevealConfirmPassword] = (0,external_react_.useState)(false);
    const handleConfirmPassword = (e)=>{
        e.target.value == userDetails.password ? setPasswordConfirmed(true) : setPasswordConfirmed(false);
    };
    (0,external_react_.useEffect)(()=>{
        handleValidPassword();
    }, [
        userDetails.password
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "register-form",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "email",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "email",
                            className: "text-placeholder text-[13px] font-md leading-5 md:border-black",
                            children: "Email"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "invert",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Message/* default */.Z, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                type: "email",
                                name: "email",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent outline-none w-full text-black",
                                placeholder: "Enter your email address"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "username pt-[42px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "username",
                            className: "text-placeholder text-[13px] font-md leading-5",
                            children: "Username"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "invert",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_User, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                type: "text",
                                name: "username",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent w-full outline-none text-black",
                                placeholder: "Enter your User name"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "password mt-[49px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "password",
                            className: "text-placeholder text-[13px] font-md leading-5",
                            children: "Password"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "invert",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Lock/* default */.Z, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: revealPassword ? "text" : "password",
                                name: "password",
                                onChange: handleInputChange,
                                className: "email-input bg-transparent w-full outline-none text-black",
                                placeholder: "Enter your Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "invert",
                                onClick: ()=>setRevealPassword(!revealPassword),
                                children: revealPassword ? /*#__PURE__*/ jsx_runtime_.jsx(ShowEye/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(RevealEye/* default */.Z, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "text-red-500 text-[10px] font-medium",
                        children: [
                            !validPassword.tenCharPattern && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "A minimum of 10 chararcters"
                            }),
                            !validPassword.lowerCasePattern && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "At least 1 lowercase letter "
                            }),
                            !validPassword.digitPattern && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "At least 1 number "
                            }),
                            !validPassword.upperCasePattern && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "At least 1 uppercase letter "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "password mt-[49px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "label pb-[11px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "confirm-password",
                            className: "text-placeholder text-[13px] font-md leading-5",
                            children: "Confirm Password"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 ${passwordConfirmed ? "border-black" : "border-red-500"} `,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "invert",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Lock/* default */.Z, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                type: revealConfirmPassword ? "text" : "password",
                                name: "confirm-password",
                                onChange: handleConfirmPassword,
                                className: "email-input bg-transparent outline-none w-[100%] text-black",
                                placeholder: "Confirm your Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "invert",
                                onClick: ()=>setRevealConfirmPassword(!revealConfirmPassword),
                                children: revealConfirmPassword ? /*#__PURE__*/ jsx_runtime_.jsx(ShowEye/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(RevealEye/* default */.Z, {})
                            })
                        ]
                    }),
                    passwordConfirmed ? null : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-red-500 text-[10px] font-medium",
                        children: "*Password does not match"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_RegisterForm = (RegisterForm);


/***/ }),

/***/ 990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(475);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layouts_AuthLayouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4393);
/* harmony import */ var _components_RegisterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1601);
/* harmony import */ var _components_PersonalDetailsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5698);
/* harmony import */ var _components_reusables_ActionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2172);
/* harmony import */ var _features_authentication_contex_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5116);
/* harmony import */ var _features_controllers_RequestContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6027);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_controllers_RequestContext__WEBPACK_IMPORTED_MODULE_9__]);
_features_controllers_RequestContext__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// import { httpRegister } from '../features/controllers/requests';

const Register = ()=>{
    // const [registerDetails, setRegisterDetails] = useState<registerDetails>();
    const [toggleForm, setToggleForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { userDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_features_authentication_contex_AuthContext__WEBPACK_IMPORTED_MODULE_8__/* .AuthContext */ .V);
    const { isLoading , httpRegister  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_features_controllers_RequestContext__WEBPACK_IMPORTED_MODULE_9__/* .RequestContext */ .f);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_AuthLayouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "login-container bg-background-color md:bg-white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "login-caption p-[30px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "Sign-in-header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: " invert font-md text-[30px] leading-[45px]",
                                children: "Sign up"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "sign-in-caption mt-[22px] text-black",
                                children: toggleForm ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-[20px] font-semibold",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mr-2",
                                            onClick: ()=>setToggleForm(false),
                                            children: "←"
                                        }),
                                        " Personal Details"
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "If you already have an account registered ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "You can ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-secondary",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/login",
                                                children: "Login here !"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "login-form mt-[5px] p-[30px]",
                    children: [
                        !toggleForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RegisterForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PersonalDetailsForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "submit-btn mt-[60px]",
                            children: !toggleForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reusables_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                buttonText: "Continue",
                                onClick: (e)=>{
                                    if (userDetails.email && userDetails.username && userDetails.password) {
                                        e.preventDefault();
                                        setToggleForm(true);
                                    }
                                }
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reusables_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                buttonText: `${isLoading ? "Loading..." : "Register"} `,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    httpRegister(userDetails);
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664,755,398], () => (__webpack_exec__(990)));
module.exports = __webpack_exports__;

})();