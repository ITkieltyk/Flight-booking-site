"use strict";
(self["webpackChunkFlight_booking"] = self["webpackChunkFlight_booking"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 7697);




class AppComponent {
    constructor() {
        this.title = 'Flight-booking';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "site-main"], [1, "header"], [1, "main"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header", 1)(2, "app-homepage", 2)(3, "app-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__.HomepageComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.site-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 7697);
/* harmony import */ var _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-popup/login-popup.component */ 2287);
/* harmony import */ var _components_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bookingform/bookingform.component */ 9150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4650);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__.HomepageComponent,
        _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_5__.LoginPopupComponent,
        _components_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_6__.BookingformComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] }); })();


/***/ }),

/***/ 9150:
/*!*****************************************************************!*\
  !*** ./src/app/components/bookingform/bookingform.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingformComponent": () => (/* binding */ BookingformComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4006);


class BookingformComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookingformComponent.ɵfac = function BookingformComponent_Factory(t) { return new (t || BookingformComponent)(); };
BookingformComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingformComponent, selectors: [["app-bookingform"]], decls: 3, vars: 0, consts: [[1, "booking-frame"], ["action", "", 1, "border", "shadow", "container"]], template: function BookingformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tu b\u0119dzie formularz szukania lotu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".border[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  border-radius: 5px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 2px -2px 3px 3px rgba(0, 0, 126, 0.514);\n}"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dane kontaktowe, prawa autorskie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.header-border[_ngcontent-%COMP%] {\n  border: 2px solid rgb(228, 228, 235);\n  border-radius: 5px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  background-color: rgb(78, 78, 243);\n  margin: 0;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 90px;\n  text-align: center;\n  font-size: 1rem;\n  padding: 2rem 0;\n  background-color: rgb(0, 0, 153);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 2px -2px 2px 2px rgb(96, 119, 148), 0 0 4px 4px rgb(228, 233, 236);\n  color: white;\n}\n\n.menu-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 2rem 0;\n  background-color: rgba(146, 146, 240, 0.356);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 3px -3px 3px 3px rgb(92, 123, 163), 0 0 6px 6px rgb(228, 233, 236);\n  overflow: visible;\n}"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-popup/login-popup.component */ 2287);



const _c0 = ["loginPop"];
class HeaderComponent {
    constructor() { }
    loginClick(element) {
        element.classList.toggle('login-visibility-on');
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "header"], [1, "logo"], [1, "menu-button", "header-border", 3, "click"], [1, "login-visibility-off"], ["loginPop", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "tu b\u0119dzie logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.loginClick(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-login-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_0__.LoginPopupComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.header-border[_ngcontent-%COMP%] {\n  border: 2px solid rgb(228, 228, 235);\n  border-radius: 5px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  background-color: rgb(78, 78, 243);\n  margin: 0;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 90px;\n  text-align: center;\n  font-size: 1rem;\n  padding: 2rem 0;\n  background-color: rgb(0, 0, 153);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 2px -2px 2px 2px rgb(96, 119, 148), 0 0 4px 4px rgb(228, 233, 236);\n  color: white;\n}\n\n.menu-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 2rem 0;\n  background-color: rgba(146, 146, 240, 0.356);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 3px -3px 3px 3px rgb(92, 123, 163), 0 0 6px 6px rgb(228, 233, 236);\n  overflow: visible;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  background-color: white;\n  height: 90px;\n}\n\n.login-visibility-off[_ngcontent-%COMP%] {\n  height: 0;\n  position: absolute;\n  right: -100px;\n  top: 10px;\n  opacity: 0;\n  transition: all 1.5s ease;\n}\n\n.login-visibility-on[_ngcontent-%COMP%] {\n  height: 200px;\n  position: absolute;\n  right: 10%;\n  top: 10px;\n  opacity: 1;\n  transition: all 1s ease;\n}"] });


/***/ }),

/***/ 7697:
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bookingform/bookingform.component */ 9150);


class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 3, vars: 0, consts: [[1, "main"], ["src", "./../../../assets/main-background.jpg", "alt", "", 2, "height", "calc(100vh - 200px)"], [1, "floating-booking"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1)(2, "app-bookingform", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_0__.BookingformComponent], styles: [".main[_ngcontent-%COMP%] {\n  height: calc(100% - 180px);\n  display: flex;\n  column-gap: 5px;\n}\n\n.floating-booking[_ngcontent-%COMP%] {\n  margin: 10px;\n}"] });


/***/ }),

/***/ 2287:
/*!*****************************************************************!*\
  !*** ./src/app/components/login-popup/login-popup.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPopupComponent": () => (/* binding */ LoginPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4006);


class LoginPopupComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginPopupComponent.ɵfac = function LoginPopupComponent_Factory(t) { return new (t || LoginPopupComponent)(); };
LoginPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPopupComponent, selectors: [["app-login-popup"]], decls: 12, vars: 0, consts: [[1, "login-container"], ["action", ""], ["type", "text"], ["type", "password", "name", "", "id", ""]], template: function LoginPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2)(4, "br")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3)(8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".login-container[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 15px;\n  text-align: center;\n  border: 1px solid blue;\n  border-radius: 5px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  background-color: lightblue;\n}"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);