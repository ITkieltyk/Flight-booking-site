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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.site-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 15%;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  margin: 0;\n}"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 8068);
/* harmony import */ var _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-popup/login-popup.component */ 2287);
/* harmony import */ var _components_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bookingform/bookingform.component */ 9150);
/* harmony import */ var _flight_table_flight_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flight-table/flight-table.component */ 5977);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking.service */ 7877);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duration.pipe */ 6364);
/* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flights.service */ 806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _landingtimer_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landingtimer.pipe */ 4249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4650);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_booking_service__WEBPACK_IMPORTED_MODULE_8__.BookingService, _flights_service__WEBPACK_IMPORTED_MODULE_10__.FlightsService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__.HomepageComponent,
        _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_5__.LoginPopupComponent,
        _components_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_6__.BookingformComponent,
        _flight_table_flight_table_component__WEBPACK_IMPORTED_MODULE_7__.FlightTableComponent,
        _duration_pipe__WEBPACK_IMPORTED_MODULE_9__.DurationPipe,
        _landingtimer_pipe__WEBPACK_IMPORTED_MODULE_11__.LandingtimerPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule] }); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 529);



class BookingService {
    constructor(http) {
        this.http = http;
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
    getForecast(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42a491361bd2e4afc756141d720279eb`;
        return this.http.get(url);
    }
}
BookingService.ɵfac = function BookingService_Factory(t) { return new (t || BookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
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







function BookingformComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const el_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", el_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", el_r4, " ");
} }
function BookingformComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const el_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", el_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](el_r5);
} }
function BookingformComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Choose origin and destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BookingformComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Destination cannot be the same as origin! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Choose other destination airport! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BookingformComponent {
    constructor(fb, service, router, service2) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.service2 = service2;
        this.dzisiaj = new Date().toISOString().split('T')[0];
        this.airportList = [];
        this.bookinginput = this.fb.group({
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                updateOn: 'change',
            }),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                updateOn: 'change',
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
            takeoffDateStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.dzisiaj, {
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
        // console.log(this.service2.flights);
        if (this.bookinginput.valid) {
            this.service.bookingQuery = this.bookinginput.value;
            this.router.navigate(['/search-results'], {
                queryParams: {
                    origin: this.bookinginput.value.origin,
                    destination: this.bookinginput.value.destination,
                    adults: this.bookinginput.value.adults,
                    children: this.bookinginput.value.children,
                    newborn: this.bookinginput.value.newborn,
                    takeoffDateStart: this.bookinginput.value.takeoffDateStart,
                    takeoffDateEnd: this.bookinginput.value.takeoffDateEnd,
                },
            });
        }
    }
    ngOnInit() {
        this.airportList = this.service.airportsList;
    }
    ngAfterViewInit() { }
}
BookingformComponent.ɵfac = function BookingformComponent_Factory(t) { return new (t || BookingformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_booking_service__WEBPACK_IMPORTED_MODULE_0__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_flights_service__WEBPACK_IMPORTED_MODULE_1__.FlightsService)); };
BookingformComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BookingformComponent, selectors: [["app-bookingform"]], decls: 37, vars: 7, consts: [[1, "booking-frame"], ["action", "", 1, "border", "shadow", "container", 3, "formGroup"], ["for", "origin"], ["name", "origin", "type", "text", "formControlName", "origin"], ["value", "", "disabled", ""], [4, "ngFor", "ngForOf"], ["for", "destination"], ["type", "text", "formControlName", "destination"], ["for", ""], [2, "display", "block"], ["type", "number", "name", "", "id", "", "formControlName", "adults"], ["type", "number", "formControlName", "children"], ["type", "number", "formControlName", "newborn"], ["type", "date", "name", "", "id", "", "formControlName", "takeoffDateStart", 3, "min"], ["type", "date", "name", "", "id", "", "formControlName", "takeoffDateEnd", 3, "min"], ["type", "submit", 1, "menu-button", 2, "height", "2rem", "padding", "0", 3, "click"], [4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], [3, "value"], [2, "text-align", "center"]], template: function BookingformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Origin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 3)(5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Choose origin town");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BookingformComponent_ng_container_7_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Destination: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 7)(11, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Choose destination town");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BookingformComponent_ng_container_13_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 8)(15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Passengers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Adults: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Children (3 - 12 years): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Newborn (0 - 3 years): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " From: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " To: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookingformComponent_Template_button_click_33_listener() { return ctx.flightSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Search flights! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, BookingformComponent_div_35_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, BookingformComponent_div_36_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.bookinginput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.airportList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.airportList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx.dzisiaj);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx.bookinginput.value.takeoffDateStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bookinginput.controls["origin"].invalid && ctx.bookinginput.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bookinginput.value.origin === ctx.bookinginput.value.destination && ctx.bookinginput.controls["destination"].dirty);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: [".border[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  border-radius: 5px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 300px;\n  padding: 10px 10px;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.711);\n  width: 100%;\n}\n\nselect[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  margin: 5px;\n  height: 1.5em;\n  width: 11rem;\n  background-color: unset;\n  border: 1px solid black;\n  box-shadow: 0px 0px 1px 1px grey;\n  border-radius: 0.3rem;\n}\n\nselect[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:hover {\n  margin: 5px;\n  height: 1.5em;\n  width: 11rem;\n  background-color: unset;\n  border: 1px solid grey;\n  box-shadow: 0px 0px 1px 1px black;\n  border-radius: 0.3rem;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  width: 2rem;\n  text-align: end;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 2px -2px 3px 3px rgba(0, 0, 126, 0.514);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n}"] });


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
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.header-border[_ngcontent-%COMP%] {\n  border: 2px solid rgb(228, 228, 235);\n  border-radius: 5px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(78, 78, 243);\n  margin: 0;\n  height: 100%;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 90px;\n  text-align: center;\n  font-size: 1rem;\n  padding: 2rem 0;\n  background-color: rgb(0, 0, 153);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 2px -2px 2px 2px rgb(96, 119, 148), 0 0 4px 4px rgb(228, 233, 236);\n  color: white;\n}\n\n.menu-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 2rem 0;\n  background-color: rgba(146, 146, 240, 0.356);\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 3px -3px 3px 3px rgb(92, 123, 163), 0 0 6px 6px rgb(228, 233, 236);\n  overflow: visible;\n}"] });


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
    } }, dependencies: [_bookingform_bookingform_component__WEBPACK_IMPORTED_MODULE_0__.BookingformComponent], styles: [".main[_ngcontent-%COMP%] {\n  height: 75vh;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.floating-booking[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3%;\n  left: 0;\n  right: 5%;\n  margin: 0 auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  opacity: 0.5;\n  overflow: hidden;\n  z-index: -1;\n  position: relative;\n  background-color: white;\n  object-fit: cover;\n}\n\n@media screen and (max-width: 800px) {\n  .main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    opacity: 0.7;\n    overflow: hidden;\n    width: 100%;\n    object-fit: cover;\n    margin: auto;\n    position: static;\n    height: 75vh;\n  }\n  .main[_ngcontent-%COMP%] {\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n  .floating-booking[_ngcontent-%COMP%] {\n    width: 80%;\n    left: 0;\n    right: 0;\n    top: 5%;\n    margin: auto auto;\n  }\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../booking.service */ 7877);
/* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flights.service */ 806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duration.pipe */ 6364);
/* harmony import */ var _landingtimer_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landingtimer.pipe */ 4249);






function FlightTableComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " There are no valid flights available. Choose other airports or dates. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function FlightTableComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14)(6, "div", 18)(7, "p")(8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Operated by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 20)(14, "div", 21)(15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div")(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21)(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "landingtimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const flug_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 12, flug_r2.date, "shortDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 15, flug_r2.flightPrice, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](flug_r2.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", flug_r2.company.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", flug_r2.origin.city, ", ", flug_r2.origin.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 18, flug_r2.date, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](flug_r2.flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 21, flug_r2.durationM));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", flug_r2.destination.city, ", ", flug_r2.destination.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](32, 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](33, 26, flug_r2.date, flug_r2.durationM), "shortTime"), " ");
} }
class FlightTableComponent {
    constructor(service, service2) {
        this.service = service;
        this.service2 = service2;
        this.forecastTemp = 0;
        this.forecastIcon = './../../assets/loading.gif';
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
    ngAfterViewInit() {
        this.service.getForecast(this.query.destination.valueOf()).subscribe({
            next: (res) => {
                this.forecastTemp = Math.round((res.main.temp - 273) * 10) / 10;
                // console.log(res);
                this.forecastIcon = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
            },
        });
    }
}
FlightTableComponent.ɵfac = function FlightTableComponent_Factory(t) { return new (t || FlightTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_booking_service__WEBPACK_IMPORTED_MODULE_0__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_flights_service__WEBPACK_IMPORTED_MODULE_1__.FlightsService)); };
FlightTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FlightTableComponent, selectors: [["app-flight-table"]], decls: 29, vars: 11, consts: [[1, "container"], [1, "query-container"], [1, "query-data"], [1, "grid-col-1", "sm-grid-col-1-2"], [1, "grid-col-2", "sm-grid-col-1"], [1, "grid-col-3", "sm-grid-col-2"], [1, "grid-col-1", "sm-grid-col-1"], [1, "grid-col-2", "sm-grid-col-2"], [1, "grid-col-3", "sm-grid-col-1-2"], [1, "query-weather"], ["alt", "ForecastImage", 2, "height", "3rem", 3, "src"], [1, "results"], ["class", "result", 4, "ngIf"], ["class", "result-container", 4, "ngFor", "ngForOf"], [1, "result"], [2, "margin", "5px auto"], [1, "result-container"], [1, "result-head"], [1, "vertical-center", "result-left"], ["alt", "", 2, "height", "40px", 3, "src"], [1, "result-flightdata"], [1, "vertical-center"], ["src", "./../../assets/plane-icon.jpg", "alt", "", 2, "height", "30px"]], template: function FlightTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Search parameters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, FlightTableComponent_div_27_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, FlightTableComponent_div_28_Template, 34, 29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Origin: ", ctx.query.origin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Destination: ", ctx.query.destination, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("From: ", ctx.query.takeoffDateStart, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("To: ", ctx.query.takeoffDateEnd, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Adults: ", ctx.query.adults, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Children: ", ctx.query.children, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Newborn: ", ctx.query.newborn, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.forecastIcon, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Temp: ", ctx.forecastTemp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filteredFlights.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredFlights);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _duration_pipe__WEBPACK_IMPORTED_MODULE_2__.DurationPipe, _landingtimer_pipe__WEBPACK_IMPORTED_MODULE_3__.LandingtimerPipe], styles: ["[_ngcontent-%COMP%]:root, *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.result[_ngcontent-%COMP%] {\n  border: 2px blue solid;\n  margin: 10px auto;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  column-gap: 10px;\n  flex-wrap: nowrap;\n}\n\n.result-head[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.results[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 10px;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\n.result-left[_ngcontent-%COMP%] {\n  width: 19%;\n}\n\n.result-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.result-flightdata[_ngcontent-%COMP%] {\n  text-align: center;\n  column-gap: 1%;\n  display: flex;\n  justify-content: space-between;\n  width: 79%;\n}\n\n.query-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 0 auto;\n  margin-top: 15px;\n  display: flex;\n  gap: 1%;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.query-data[_ngcontent-%COMP%] {\n  width: 88%;\n  border: 2px blue solid;\n  border-radius: 5px;\n  padding: 5px;\n  padding-bottom: 15px;\n  display: grid;\n  gap: 3%;\n  grid-template-columns: 1tr 1tr 1tr;\n  word-wrap: normal;\n}\n\n.query-weather[_ngcontent-%COMP%] {\n  width: 12%;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n.grid-col-1[_ngcontent-%COMP%] {\n  grid-column: 1;\n}\n\n.grid-col-2[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n\n.grid-col-3[_ngcontent-%COMP%] {\n  grid-column: 3;\n}\n\n.vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n@media screen and (max-width: 768px) {\n  .grid-col-1[_ngcontent-%COMP%] {\n    grid-column: unset;\n  }\n  .grid-col-2[_ngcontent-%COMP%] {\n    grid-column: unset;\n  }\n  .grid-col-3[_ngcontent-%COMP%] {\n    grid-column: unset;\n  }\n  .sm-grid-col-1[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .sm-grid-col-1-2[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n  }\n  .sm-grid-col-2[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n  .query-weather[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .query-data[_ngcontent-%COMP%] {\n    width: max-content;\n  }\n}"] });


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
                logo: './../../assets/Lufthansa.png',
            },
            {
                name: 'LOT',
                flightNamePrefix: 'LT',
                logo: './../../assets/PLL LOT.png',
            },
            {
                name: 'Tap Portugal',
                flightNamePrefix: 'TP',
                logo: './../../assets/Tap portugal.png',
            },
            {
                name: 'Emirates',
                flightNamePrefix: 'EM',
                logo: './../../assets/Emirates.png',
            },
            {
                name: 'Ryan Air',
                flightNamePrefix: 'RA',
                logo: './../../assets/RyanAir.jpeg',
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
                    const price = 50 + (duration / 30) * 25 + Math.round((Math.random() - 0.5) * 10);
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
                        flightPrice: price,
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

/***/ 4249:
/*!**************************************!*\
  !*** ./src/app/landingtimer.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingtimerPipe": () => (/* binding */ LandingtimerPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class LandingtimerPipe {
    transform(value, duration) {
        value.setMinutes(value.getMinutes() + duration);
        return value;
    }
}
LandingtimerPipe.ɵfac = function LandingtimerPipe_Factory(t) { return new (t || LandingtimerPipe)(); };
LandingtimerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "landingtimer", type: LandingtimerPipe, pure: true });


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