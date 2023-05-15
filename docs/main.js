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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 8068);
/* harmony import */ var _flight_table_flight_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight-table/flight-table.component */ 5977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);





const routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent },
    { path: 'search-results', component: _flight_table_flight_table_component__WEBPACK_IMPORTED_MODULE_1__.FlightTableComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flights.service */ 806);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);





class AppComponent {
    constructor(router, service2) {
        this.router = router;
        this.service2 = service2;
        this.title = 'Flight-booking';
        this.routingVariable = 'main-page';
    }
    AfterViewInit() {
        this.service2.flightGenerator(this.service2.simDays);
        console.log(this.service2.flights);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_flights_service__WEBPACK_IMPORTED_MODULE_0__.FlightsService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "site-main"], [1, "header"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header", 1)(2, "router-outlet")(3, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.site-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  margin: 0;\n}"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 8068);
/* harmony import */ var _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-popup/login-popup.component */ 2287);
/* harmony import */ var _components_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bookingform/bookingform.component */ 9150);
/* harmony import */ var _flight_table_flight_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flight-table/flight-table.component */ 5977);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking.service */ 7877);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duration.pipe */ 6364);
/* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flights.service */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4650);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_booking_service__WEBPACK_IMPORTED_MODULE_8__.BookingService, _flights_service__WEBPACK_IMPORTED_MODULE_10__.FlightsService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__.HomepageComponent,
        _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_5__.LoginPopupComponent,
        _components_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_6__.BookingformComponent,
        _flight_table_flight_table_component__WEBPACK_IMPORTED_MODULE_7__.FlightTableComponent,
        _duration_pipe__WEBPACK_IMPORTED_MODULE_9__.DurationPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 7877:
/*!************************************!*\
  !*** ./src/app/booking.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingService": () => (/* binding */ BookingService)
/* harmony export */ });
/* harmony import */ var src_assets_airports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/airports */ 4193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);


class BookingService {
    constructor() {
        this.airportsList = src_assets_airports__WEBPACK_IMPORTED_MODULE_0__.airports.map((airport, index) => airport.city);
        // flightsList: Flight[] = flights;
        this.flightsList = [];
        this.bookingQuery = {
            origin: '',
            destination: '',
            adults: '',
            children: '',
            newborn: '',
            takeoffDateStart: '',
            takeoffDateEnd: '',
        };
    }
}
BookingService.ɵfac = function BookingService_Factory(t) { return new (t || BookingService)(); };
BookingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookingService, factory: BookingService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_booking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/booking.service */ 7877);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_flights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/flights.service */ 806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);







function BookingformComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const el_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", el_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", el_r3, " ");
} }
function BookingformComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const el_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", el_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](el_r4);
} }
function BookingformComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Choose origin and destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BookingformComponent {
    constructor(fb, service, router, service2) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.service2 = service2;
        this.dzisiaj = new Date().getDay();
        this.airportList = [];
        this.bookinginput = this.fb.group({
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                updateOn: 'blur',
            }),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                updateOn: 'blur',
            }),
            adults: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('1', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                updateOn: 'blur',
            }),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('0', {
                validators: [],
                updateOn: 'blur',
            }),
            newborn: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('0', {
                validators: [],
                updateOn: 'blur',
            }),
            takeoffDateStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [],
                updateOn: 'blur',
            }),
            takeoffDateEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [],
                updateOn: 'blur',
            }),
        });
    }
    flightSearch() {
        console.log(this.bookinginput.value);
        this.service2.flightGenerator(this.service2.simDays);
        console.log(this.service2.flights);
        if (this.bookinginput.valid) {
            this.service.bookingQuery = this.bookinginput.value;
            this.router.navigate(['/search-results']);
        }
    }
    ngOnInit() {
        this.airportList = this.service.airportsList;
    }
    ngAfterViewInit() { }
}
BookingformComponent.ɵfac = function BookingformComponent_Factory(t) { return new (t || BookingformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_booking_service__WEBPACK_IMPORTED_MODULE_0__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_flights_service__WEBPACK_IMPORTED_MODULE_1__.FlightsService)); };
BookingformComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BookingformComponent, selectors: [["app-bookingform"]], decls: 36, vars: 6, consts: [[1, "booking-frame"], ["action", "", 1, "border", "shadow", "container", 3, "formGroup"], ["type", "text", "formControlName", "origin"], ["value", "", "disabled", ""], [4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "destination"], [2, "display", "inline-block"], [2, "display", "inline"], ["type", "number", "name", "", "id", "", "formControlName", "adults"], ["type", "number", "formControlName", "children"], ["type", "number", "formControlName", "newborn"], ["type", "date", "name", "", "id", "", "formControlName", "takeoffDateStart", 3, "placeholder"], ["type", "date", "name", "", "id", "", "formControlName", "takeoffDateEnd", 3, "placeholder"], ["type", "submit", 3, "click"], [4, "ngIf"], [3, "value"]], template: function BookingformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Origin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 2)(4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Choose origin town");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BookingformComponent_ng_container_6_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Destination: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 5)(11, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Choose destination town");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BookingformComponent_ng_container_13_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Passengers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Adults: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8)(20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Children (3 - 12 years): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 9)(23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Newborn (0 - 3 years): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 10)(26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " From: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 11)(29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " To: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 12)(32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookingformComponent_Template_button_click_33_listener() { return ctx.flightSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, BookingformComponent_div_35_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.bookinginput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.airportList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.airportList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.dzisiaj);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.dzisiaj);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bookinginput.controls["origin"].invalid && ctx.bookinginput.dirty);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: [".border[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  border-radius: 5px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 300px;\n  padding: 10px 10px;\n}\n\nselect[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 2px -2px 3px 3px rgba(0, 0, 126, 0.514);\n}"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-popup/login-popup.component */ 2287);




const _c0 = ["loginPop"];
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.defaultUserPic = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File-Download-Free.png';
        this.userPic = '';
    }
    loginClick(element) {
        element.classList.toggle('login-visibility-on');
    }
    logoHome() {
        this.router.navigate(['/main-page']);
    }
    ngOnInit() {
        this.userPic = this.defaultUserPic;
    }
    ngAfterViewInit() {
        this.userPic = this.defaultUserPic;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
    } }, decls: 10, vars: 1, consts: [[1, "header"], [1, "logo"], ["src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.favpng.com%2F10%2F2%2F2%2Fairplane-aircraft-logo-png-favpng-BQ04HkM6K63NpDP8XMLJdc8xq.jpg&f=1&nofb=1&ipt=9a3de64676d3cf52d252f51d52247a79e5f8ec6e358cbee9a4c10ed7cd6704a1&ipo=images", "alt", "", 3, "click"], [1, "menu-button", "header-border", 3, "click"], [1, "header-border", "right"], ["alt", "user", 3, "src"], [1, "login-visibility-off"], ["loginPop", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_2_listener() { return ctx.logoHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.loginClick(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-login-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.userPic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_0__.LoginPopupComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.header-border[_ngcontent-%COMP%] {\n  border: 2px solid rgb(228, 228, 235);\n  border-radius: 5px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  background-color: rgb(78, 78, 243);\n  margin: 0;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 90px;\n  text-align: center;\n  font-size: 1rem;\n  padding: 2rem 0;\n  background-color: rgb(0, 0, 153);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 2px -2px 2px 2px rgb(96, 119, 148), 0 0 4px 4px rgb(228, 233, 236);\n  color: white;\n}\n\n.menu-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 2rem 0;\n  background-color: rgba(146, 146, 240, 0.356);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 3px -3px 3px 3px rgb(92, 123, 163), 0 0 6px 6px rgb(228, 233, 236);\n  overflow: visible;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  background-color: white;\n  height: 90px;\n}\n\n.login-visibility-off[_ngcontent-%COMP%] {\n  height: 0;\n  position: absolute;\n  right: -100px;\n  top: 10px;\n  opacity: 0;\n  overflow: hidden;\n  transition: all 1.5s ease;\n}\n\n.login-visibility-on[_ngcontent-%COMP%] {\n  height: 200px;\n  position: absolute;\n  overflow: hidden;\n  right: 10%;\n  top: 10px;\n  opacity: 1;\n  transition: all 1s ease;\n}\n\n.right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 2px -2px 2px 2px rgb(96, 119, 148), 0 0 4px 4px rgb(228, 233, 236);\n  color: black;\n}\n\n.right[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  height: 60x;\n  width: 60px;\n  text-align: center;\n  font-size: 1.2rem;\n  position: absolute;\n  right: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 2px -2px 2px 2px rgb(96, 119, 148), 0 0 4px 4px rgb(228, 233, 236);\n  color: black;\n}\n\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80%;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 95px;\n  width: 95px;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 2px -2px 2px 2px rgb(96, 119, 148), 0 0 4px 4px rgb(228, 233, 236);\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  object-fit: scale-down;\n  height: 100%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  overflow: hidden;\n  object-fit: scale-down;\n  height: 100%;\n  cursor: pointer;\n}"] });


/***/ }),

/***/ 8068:
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
HomepageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 3, vars: 0, consts: [[1, "main"], ["src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsusanpolk.com%2Fwp-content%2Fuploads%2F2020%2F06%2FAirplane-in-Flight.jpg&f=1&nofb=1&ipt=9de8d74080516a618eac83b2d8a2a021925c4a7e749702f5b16faa26ace109c0&ipo=images", "alt", "zdj\u0119cie samolotu"], [1, "floating-booking"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1)(2, "app-bookingform", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_0__.BookingformComponent], styles: [".main[_ngcontent-%COMP%] {\n  height: calc(100% - 180px);\n  display: flex;\n  column-gap: 5px;\n  flex-wrap: wrap;\n}\n\n.floating-booking[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: calc(100vh - 200px);\n  opacity: 0.7;\n  overflow: hidden;\n  width: 50%;\n  z-index: -1;\n}\n\n@media screen and (max-width: 768px) {\n  .main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    opacity: 0.7;\n    overflow: hidden;\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    margin: auto;\n  }\n  .main[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}"] });


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

/***/ 6364:
/*!**********************************!*\
  !*** ./src/app/duration.pipe.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DurationPipe": () => (/* binding */ DurationPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class DurationPipe {
    transform(value, ...args) {
        const hours = Math.floor(value / 60);
        const minutes = Math.floor(value % 60);
        return `${hours} h ${minutes} min`;
    }
}
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "duration", type: DurationPipe, pure: true });


/***/ }),

/***/ 5977:
/*!********************************************************!*\
  !*** ./src/app/flight-table/flight-table.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightTableComponent": () => (/* binding */ FlightTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../booking.service */ 7877);
/* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flights.service */ 806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duration.pipe */ 6364);





function FlightTableComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " There are no valid flights available. Choose other airports or dates. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function FlightTableComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const flug_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("From: ", flug_r2.origin.city, ", ", flug_r2.origin.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("To: ", flug_r2.destination.city, ", ", flug_r2.destination.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 6, flug_r2.date, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Flight time: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, flug_r2.durationM), "");
} }
class FlightTableComponent {
    constructor(service, service2) {
        this.service = service;
        this.service2 = service2;
        this.query = {
            origin: '',
            destination: '',
            adults: '',
            children: '',
            newborn: '',
            takeoffDateStart: '',
            takeoffDateEnd: '',
        };
        this.queryDateStart = new Date();
        this.queryDateEnd = new Date();
        this.filteredFlights = this.service2.flights;
    }
    ngOnInit() {
        this.query = this.service.bookingQuery;
        this.queryDateStart = new Date(this.query.takeoffDateStart.valueOf());
        this.queryDateEnd = new Date(this.query.takeoffDateEnd.valueOf());
        this.filteredFlights = this.service2.flights.filter((el) => el.destination.city === this.query.destination &&
            el.origin.city === this.query.origin &&
            el.date >= this.queryDateStart &&
            el.date <= this.queryDateEnd);
        this.filteredFlights = this.filteredFlights.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
}
FlightTableComponent.ɵfac = function FlightTableComponent_Factory(t) { return new (t || FlightTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_booking_service__WEBPACK_IMPORTED_MODULE_0__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_flights_service__WEBPACK_IMPORTED_MODULE_1__.FlightsService)); };
FlightTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FlightTableComponent, selectors: [["app-flight-table"]], decls: 22, vars: 9, consts: [[1, "container"], [1, "query-data"], [1, "results"], ["class", "result", 4, "ngIf"], ["class", "result", 4, "ngFor", "ngForOf"], [1, "result"], [2, "margin", "5px auto"]], template: function FlightTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "aside")(2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Search parameters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FlightTableComponent_div_20_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, FlightTableComponent_div_21_Template, 13, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Origin: ", ctx.query.origin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Destination: ", ctx.query.destination, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("From: ", ctx.query.takeoffDateStart, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("To: ", ctx.query.takeoffDateEnd, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Adults: ", ctx.query.adults, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Children: ", ctx.query.children, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Newborn: ", ctx.query.newborn, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredFlights.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredFlights);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _duration_pipe__WEBPACK_IMPORTED_MODULE_2__.DurationPipe], styles: [".result[_ngcontent-%COMP%] {\n  border: 2px blue solid;\n  margin: 10px auto;\n  padding: 0 5px;\n  border-radius: 5px;\n  display: flex;\n  column-gap: 10px;\n  justify-content: space-between;\n}\n\n.results[_ngcontent-%COMP%] {\n  width: calc(100vw - 24%);\n  padding: 0 10px;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\naside[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 10px;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.query-data[_ngcontent-%COMP%] {\n  border: 2px blue solid;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.query-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}"] });


/***/ }),

/***/ 806:
/*!************************************!*\
  !*** ./src/app/flights.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsService": () => (/* binding */ FlightsService)
/* harmony export */ });
/* harmony import */ var _assets_airports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/airports */ 4193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);


class FlightsService {
    constructor() {
        this.today = new Date();
        this.simDays = 60;
        this.planes = ['Embraer', 'Boeing 737', 'Boeing 747'];
        this.companies = [
            {
                name: 'Lufthansa',
                flightNamePrefix: 'LH',
            },
            {
                name: 'LOT',
                flightNamePrefix: 'LT',
            },
            {
                name: 'Tap Portugal',
                flightNamePrefix: 'TP',
            },
            {
                name: 'Emirates',
                flightNamePrefix: 'EM',
            },
            {
                name: 'Ryan Air',
                flightNamePrefix: 'RA',
            },
        ];
        this.flights = [];
    }
    flightGenerator(duration) {
        for (let y = 0; y < duration; y++) {
            for (let i = 0; i < _assets_airports__WEBPACK_IMPORTED_MODULE_0__.airports.length; i++) {
                for (let x = 0; x < 5; x++) {
                    let startAirport;
                    let landAirport;
                    startAirport = _assets_airports__WEBPACK_IMPORTED_MODULE_0__.airports[Math.floor(Math.random() * _assets_airports__WEBPACK_IMPORTED_MODULE_0__.airports.length)];
                    do {
                        landAirport = _assets_airports__WEBPACK_IMPORTED_MODULE_0__.airports[Math.floor(Math.random() * _assets_airports__WEBPACK_IMPORTED_MODULE_0__.airports.length)];
                    } while (startAirport === landAirport);
                    let flightDate = new Date();
                    flightDate.setDate(this.today.getDate() + y);
                    flightDate.setHours(Math.floor(Math.random() * 24));
                    const duration = startAirport.coords - landAirport.coords > 0
                        ? (startAirport.coords - landAirport.coords) * 30 + 30
                        : (landAirport.coords - startAirport.coords) * 30 + 30;
                    const company = this.companies[Math.floor(this.companies.length * Math.random())];
                    const element = {
                        origin: startAirport,
                        destination: landAirport,
                        date: flightDate,
                        durationM: duration,
                        plane: duration > 300
                            ? this.planes[2]
                            : duration > 90
                                ? this.planes[1]
                                : this.planes[0],
                        flightNumber: company.flightNamePrefix +
                            Math.floor(Math.random() * 9999).toString(),
                        company: company,
                    };
                    this.flights.push(element);
                }
            }
        }
    }
}
FlightsService.ɵfac = function FlightsService_Factory(t) { return new (t || FlightsService)(); };
FlightsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FlightsService, factory: FlightsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4193:
/*!********************************!*\
  !*** ./src/assets/airports.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "airports": () => (/* binding */ airports)
/* harmony export */ });
const airports = [
    {
        city: 'Warsaw',
        country: 'Poland',
        continent: 'Europe',
        coords: 0,
    },
    {
        city: 'Cracow',
        country: 'Poland',
        continent: 'Europe',
        coords: 1,
    },
    {
        city: 'Berlin',
        country: 'Germany',
        continent: 'Europe',
        coords: 2,
    },
    {
        city: 'Frankfurt',
        country: 'Germany',
        continent: 'Europe',
        coords: 3,
    },
    {
        city: 'Lisbon',
        country: 'Portugal',
        continent: 'Europe',
        coords: 8,
    },
    {
        city: 'Porto',
        country: 'Portugal',
        continent: 'Europe',
        coords: 7,
    },
    {
        city: 'Chicago',
        country: 'USA',
        continent: 'North America',
        coords: 15,
    },
    {
        city: 'New York',
        country: 'USA',
        continent: 'North America',
        coords: 16,
    },
    {
        city: 'Honk Kong',
        country: 'China',
        continent: 'Asia',
        coords: -15,
    },
    {
        city: 'Pekin',
        country: 'China',
        continent: 'Asia',
        coords: -14,
    },
    {
        city: 'Sao Paulo',
        country: 'Brasil',
        continent: 'South America',
        coords: 16,
    },
];



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