"use strict";
exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 1192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ loginEndpoint),
/* harmony export */   "t": () => (/* binding */ registerEndpoint)
/* harmony export */ });
const BASE_URL = "https://projectpal.up.railway.app";
const registerEndpoint = `${BASE_URL}/register`;
const loginEndpoint = `${BASE_URL}/login`;



/***/ }),

/***/ 5116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultAuthContext = {
    userDetails: {
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        bio: "",
        title: "",
        github: "",
        twitter: "",
        linkedIn: "",
        password: ""
    },
    validPassword: {
        lowerCasePattern: true,
        upperCasePattern: true,
        digitPattern: true,
        tenCharPattern: true,
        confirmAllPattern: true
    },
    loginDetails: {
        username: "",
        password: ""
    },
    handleInputChange: (e)=>{},
    handleValidPassword: ()=>{},
    handleLoginInputChange: (e)=>{}
};
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultAuthContext);
const AuthProvider = ({ children  })=>{
    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        bio: "",
        title: "",
        github: "",
        twitter: "",
        linkedIn: "",
        password: ""
    });
    const [loginDetails, setLoginDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        username: "",
        password: ""
    });
    const [validPassword, setValidPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        lowerCasePattern: true,
        upperCasePattern: true,
        digitPattern: true,
        tenCharPattern: true,
        confirmAllPattern: true
    });
    const handleInputChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };
    const handleValidPassword = ()=>{
        const lowerCasePattern = /(?=.*[a-z])/;
        const upperCasePattern = /(?=.*[A-Z])/;
        const digitPattern = /(?=.*\d)/;
        const tenCharPattern = /.{10,}$/;
        const confirmAllPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
        setValidPassword({
            ...validPassword,
            lowerCasePattern: lowerCasePattern.test(userDetails.password),
            upperCasePattern: upperCasePattern.test(userDetails.password),
            digitPattern: digitPattern.test(userDetails.password),
            tenCharPattern: tenCharPattern.test(userDetails.password),
            confirmAllPattern: confirmAllPattern.test(userDetails.password)
        });
    };
    const handleLoginInputChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            userDetails,
            validPassword,
            loginDetails,
            handleInputChange,
            handleValidPassword,
            handleLoginInputChange
        },
        children: children
    });
};



/***/ }),

/***/ 6027:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ RequestContext),
/* harmony export */   "z": () => (/* binding */ RequestProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _APIConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1192);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const defaultRequestContextValue = {
    isLoading: false,
    setIsLoading: ()=>{},
    httpRegister: (registerDetails)=>{},
    httpLogin: (loginDetails)=>{}
};
const RequestContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultRequestContextValue);
const RequestProvider = ({ children  })=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // Register user
    const httpRegister = async (registerDetails)=>{
        setIsLoading(true);
        try {
            const request = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_APIConfig__WEBPACK_IMPORTED_MODULE_3__/* .registerEndpoint */ .t, {
                email: registerDetails.email,
                username: registerDetails.username,
                first_name: registerDetails.first_name,
                last_name: registerDetails.last_name,
                bio: registerDetails.bio,
                title: registerDetails.title,
                github: registerDetails.github,
                twitter: registerDetails.twitter,
                linkedIn: registerDetails.linkedIn,
                password: registerDetails.password
            });
            console.log(request);
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Registration Successful", {
                hideProgressBar: true,
                autoClose: 2000,
                type: "success"
            });
            push("/home");
        } catch (error) {
            console.log(error);
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(`${error}`, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error"
            });
        }
        setIsLoading(false);
    };
    const httpLogin = async (loginDetails)=>{
        setIsLoading(true);
        try {
            const request = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_APIConfig__WEBPACK_IMPORTED_MODULE_3__/* .loginEndpoint */ .g, {
                username: loginDetails.username,
                password: loginDetails.password
            });
            console.log(request);
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Login Successful", {
                hideProgressBar: true,
                autoClose: 2000,
                type: "success"
            });
            push("/home");
        } catch (error) {
            console.log(error);
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(`${error}`, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error"
            });
        }
        setIsLoading(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RequestContext.Provider, {
        value: {
            isLoading,
            setIsLoading,
            httpRegister,
            httpLogin
        },
        children: children
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;