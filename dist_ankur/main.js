(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./pages/content-pages/content-pages.module": [
		"./src/app/pages/content-pages/content-pages.module.ts",
		"pages-content-pages-content-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/auth/auth.component */ "./src/app/dashboard/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import {ResetComponent} from './dashboard/reset/reset.component';
//import { ForgotComponent } from './dashboard/forgot/forgot.component';
var appRoutes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    { path: 'auth', component: _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"] },
    //{path: 'reset/:id', component: ResetComponent},
    //{path: 'forgot/:id', component: ForgotComponent},
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CONTENT_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n    <span *ngIf=\"showLoader\" class=\"loading\"></span>\r\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/auth/auth.component */ "./src/app/dashboard/auth/auth.component.ts");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//import { ResetComponent } from './dashboard/reset/reset.component';
//import { ForgotComponent } from './dashboard/forgot/forgot.component';

function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_16__["FullLayoutComponent"],
                _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_15__["ContentLayoutComponent"],
                _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__["AuthComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_11__["DragulaModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_13__["CookieModule"].forRoot(),
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_20__["ToasterService"],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__["LoaderService"],
                _app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_22__["ExcelService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/auth/auth.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/auth/auth.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card gradient-indigo-purple text-center width-400\">\r\n                    <div class=\"card-img overlap\">\r\n                       <!-- <img alt=\"element 06\" class=\"mb-1\" src=\"assets/img/portrait/avatars/avatar-08.png\" width=\"190\">-->\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"background-image: linear-gradient(45deg, #303f9f, #7b1fa2);padding-top: 15px;\">\r\n                        <div class=\"card-block\">\r\n                            <h2 class=\"white\">Login</h2>\r\n                            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                                <div class=\"form-group\" [ngClass]=\"{'has-error': loginForm.get('email').errors}\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                                            placeholder=\"Email\" required email>\r\n                                        <span class=\"form-text text-muted danger\"\r\n                                            *ngIf=\"loginForm.get('email').errors && (loginForm.get('email').touched || loginForm.get('email').dirty)\">\r\n                                            <span *ngIf=\"loginForm.get('email').errors.required\">Email is required</span>\r\n                                            <span *ngIf=\"loginForm.get('email').errors.email\">Invalid Email ID</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\" [ngClass]=\"{'has-error': loginForm.get('password').errors}\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                                            placeholder=\"Password\" required>\r\n                                        <span class=\"form-text text-muted danger\"\r\n                                            *ngIf=\"loginForm.get('password').errors && (loginForm.get('password').touched || loginForm.get('password').dirty)\">\r\n                                            <span *ngIf=\"loginForm.get('password').errors.required\">Password is\r\n                                                required</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <span *ngIf=\"showErrorMsg\" style=\"color: red\">{{showErrorMsg}}</span>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <button type=\"submit\" [disabled]=\"!loginForm.valid\"\r\n                                            class=\"btn btn-pink btn-block btn-raised\">Submit</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Login Page Ends-->"

/***/ }),

/***/ "./src/app/dashboard/auth/auth.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/auth/auth.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2F1dGgvRDpcXGNoZW1pc3Qvc3JjXFxhcHBcXGRhc2hib2FyZFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/auth/auth.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/auth/auth.component.ts ***!
  \**************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = /** @class */ (function () {
    function AuthComponent(appservice, route, cookieservice, loaderservice) {
        this.appservice = appservice;
        this.route = route;
        this.cookieservice = cookieservice;
        this.loaderservice = loaderservice;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        if (this.cookieservice.get("loginuserMerck")) {
            this.route.navigate(['/dashboard']);
        }
    };
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.valid) {
            this.loaderservice.display(true);
            this.appservice.userLogin(this.loginForm.value.email, this.loginForm.value.password)
                .subscribe(function (data) {
                if (data.status == "1") {
                    _this.showErrorMsg = "";
                    _this.loginData = data.data;
                    _this.cookieservice.put("loginuserMerck", JSON.stringify(_this.loginData));
                    sessionStorage.setItem("excelurl", data.excelbaseurl);
                    _this.loginForm.reset();
                    _this.route.navigate(['/dashboard']);
                }
                else {
                    _this.showErrorMsg = data.message;
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/dashboard/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/dashboard/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie__WEBPACK_IMPORTED_MODULE_4__["CookieService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! ./content-layout.component.html */ "./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [dir]=\"options.direction\">\r\n    <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <app-navbar></app-navbar>\r\n    <div class=\"main-panel\">\r\n        <div class=\"main-content\">\r\n            <div class=\"content-wrapper\">\r\n                <div class=\"container-fluid\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n    <app-notification-sidebar></app-notification-sidebar>\r\n    <app-customizer (directionEvent)=\"getOptions($event)\"></app-customizer>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {
            direction: 'ltr'
        };
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        //sidebar toggle event listner
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
        //customizer events
        //this.elementRef.nativeElement.querySelector('#cz-compact-menu')
        //  .addEventListener('click', this.onClick.bind(this));
        //this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
        //  .addEventListener('click', this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () { fireRefreshEventOnWindow(); }, 300);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color .selected {\n      border: 3px solid #314fe5; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  [dir=rtl] :host ::ng-deep .customizer {\n  left: -400px;\n  right: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 0px; }\n  [dir=rtl] :host ::ng-deep .customizer.open {\n    left: 0;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-close {\n    left: 10px;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvRDpcXGNoZW1pc3Qvc3JjXFxhcHBcXHNoYXJlZFxcY3VzdG9taXplclxcY3VzdG9taXplci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvY3VzdG9taXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQVk7RUFDVCxjQUFhO0VBQ2hCLFdBQVU7RUFDUCx1QkFBc0I7RUFDekIsY0FBYTtFQUNWLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFVBQVM7RUFDVCxjQUFhO0VBQ2IsMkRBQTBEO0VBQzFELG9DQUEyQjtVQUEzQiw0QkFBMkI7RUFDM0IsMkNBQTBDO0VBQzFDLHVDQUFzQyxFQXdFekM7RUFyRkQ7SUFnQkUsU0FBUSxFQUNSO0VBakJGO0lBb0JFLG1CQUFrQjtJQUNmLGFBQVksRUFDZjtFQXRCRjtJQXlCRSxpQkFBZ0I7SUFDaEIsOEJBQTRCO0lBQzVCLGVBQWM7SUFDWCw0Q0FBMkMsRUFDOUM7RUE3QkY7SUErQkssWUFBVyxFQUNkO0VBaENGO0lBa0NFLG1CQUFrQjtJQUNmLFlBQVc7SUFDWCxVQUFTO0lBQ1QsYUFBWTtJQUNaLFlBQVc7SUFDWCxZQUFXLEVBQ2Q7RUF4Q0Y7SUEwQ0UsbUJBQWtCO0lBQ2YsU0FBUTtJQUNSLFlBQVc7SUFDWCxhQUFZO0lBQ1osWUFBVztJQUNYLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsZ0JBQWUsRUFDbEI7RUFsREY7SUFxREcsaUJBQWUsRUFDZjtFQXRESDtJQTBESyxlQUFjLEVBWWpCO0VBdEVGO01BNkRJLGdCQUFlLEVBQ2Y7RUE5REo7TUFnRUksdUJBQXNCLEVBQ3RCO0VBakVKO01Bb0VHLDBCQUF5QixFQUN6QjtFQXJFSDtJQTBFRyxnQkFBZSxFQUNmO0VBM0VIO0lBNkVHLCtCQUE4QjtJQUM5QiwwQkFBeUIsRUFJekI7RUFsRkg7TUFnRkksMEJBQXlCLEVBQ3pCO0VDckJKO0VENkJFLGFBQVk7RUFDWixZQUFVO0VBQ1YsNENBQTJDO0VBQzNDLGlCQUFnQixFQWlCaEI7RUM1Q0E7SUQ4QkMsUUFBTztJQUNQLFlBQVUsRUFDVjtFQzdCRDtJRGdDQyxXQUFVO0lBQ1YsWUFBVyxFQUVYO0VDaENEO0lEa0NDLGFBQVk7SUFDWixXQUFVLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3VzdG9taXplci9jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWl6ZXJ7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG4gICAgcmlnaHQ6IC00MDBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHR6LWluZGV4OiAxMDUxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcblx0Ji5vcGVue1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9taXplci1jb250ZW50e1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHRhLmN1c3RvbWl6ZXItdG9nZ2xle1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGRjtcclxuXHRcdGNvbG9yOnRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuICAgIFx0Ym94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHR9XHJcblx0YS5jdXN0b21pemVyLWNsb3NlIHtcclxuICAgIFx0Y29sb3I6ICMwMDA7XHJcblx0fVxyXG5cdC5jdXN0b21pemVyLWNsb3Nle1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgICByaWdodDogMTBweDtcclxuXHQgICAgdG9wOiAxMHB4O1xyXG5cdCAgICBwYWRkaW5nOiA3cHg7XHJcblx0ICAgIHdpZHRoOiBhdXRvO1xyXG5cdCAgICB6LWluZGV4OiAxMDtcclxuXHR9XHJcblx0LmN1c3RvbWl6ZXItdG9nZ2xle1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgICB0b3A6IDM1JTtcclxuXHQgICAgd2lkdGg6IDU0cHg7XHJcblx0ICAgIGhlaWdodDogNTBweDtcclxuXHQgICAgbGVmdDogLTU0cHg7XHJcblx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0ICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcblx0LmNvbG9yLW9wdGlvbnN7XHJcblx0XHRhe1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTpwcmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY3otYmctY29sb3Ige1xyXG4gICAgXHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHNwYW57XHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYud2hpdGV7XHJcblx0XHRcdFx0Y29sb3I6ICNkZGQgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LnNlbGVjdGVke1xyXG5cdFx0XHRib3JkZXI6IDNweCBzb2xpZCAjMzE0ZmU1O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmN6LWJnLWltYWdle1xyXG5cdFx0Jjpob3ZlcntcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0fVxyXG5cdFx0aW1nLnJvdW5kZWR7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcclxuXHRcdFx0Ji5zZWxlY3RlZHtcclxuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcHtcclxuXHQuY3VzdG9taXplcntcdFxyXG5cdFx0bGVmdDogLTQwMHB4O1xyXG5cdFx0cmlnaHQ6YXV0bztcdFxyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHRcdGJvcmRlci1sZWZ0OiAwcHg7XHJcblxyXG5cdFx0Ji5vcGVue1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRyaWdodDphdXRvO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdC5jdXN0b21pemVyLWNsb3Nle1x0XHRcclxuXHRcdFx0bGVmdDogMTBweDtcclxuXHRcdFx0cmlnaHQ6IGF1dG87XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0LmN1c3RvbWl6ZXItdG9nZ2xle1x0XHRcclxuXHRcdFx0cmlnaHQ6IC01NHB4O1xyXG5cdFx0XHRsZWZ0OiBhdXRvO1x0ICAgXHJcblx0XHR9XHJcblxyXG5cdH1cdFxyXG59IiwiLmN1c3RvbWl6ZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuY3VzdG9taXplci5vcGVuIHtcbiAgICByaWdodDogMDsgfVxuICAuY3VzdG9taXplciAuY3VzdG9taXplci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jdXN0b21pemVyIGEuY3VzdG9taXplci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgY29sb3I6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gIC5jdXN0b21pemVyIGEuY3VzdG9taXplci1jbG9zZSB7XG4gICAgY29sb3I6ICMwMDA7IH1cbiAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwOyB9XG4gIC5jdXN0b21pemVyIC5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiAtNTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jdXN0b21pemVyIC5jb2xvci1vcHRpb25zIGEge1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7IH1cbiAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuLndoaXRlIHtcbiAgICAgIGNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7IH1cbiAgICAuY3VzdG9taXplciAuY3otYmctY29sb3IgLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMTRmZTU7IH1cbiAgLmN1c3RvbWl6ZXIgLmN6LWJnLWltYWdlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmN1c3RvbWl6ZXIgLmN6LWJnLWltYWdlIGltZy5yb3VuZGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1pbWFnZSBpbWcucm91bmRlZC5zZWxlY3RlZCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCOyB9XG5cbltkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIge1xuICBsZWZ0OiAtNDAwcHg7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogMHB4OyB9XG4gIFtkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIub3BlbiB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyIC5jdXN0b21pemVyLWNsb3NlIHtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgICByaWdodDogLTU0cHg7XG4gICAgbGVmdDogYXV0bzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent() {
        this.options = {
            direction: 'ltr'
        };
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/customizer.js');
    };
    CustomizerComponent.prototype.ngAfterViewChecked = function () {
        // setTimeout(() => {
        //   var wrapperDiv = document.getElementsByClassName("wrapper")[0];
        //   var dir = wrapperDiv.getAttribute("dir");      
        //   this.options.direction = dir;      
        // }, 3000);
    };
    CustomizerComponent.prototype.sendOptions = function () {
        this.directionEvent.emit(this.options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomizerComponent.prototype, "directionEvent", void 0);
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        })
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer>\r\n    <div class=\"row  gradient-blackberry\" *ngIf=\"!checkfooter\">\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                Know Us\r\n            </div>\r\n            <a class=\"success p-0\" (click)=\"goTocms(7)\"><p class=\"text-center\" >About Us</p></a>\r\n            <a class=\"success p-0\" (click)=\"goTocms(3)\"><p class=\"text-center\">Contact Us</p></a>\r\n            <a class=\"success p-0\" (click)=\"goTocms(5)\"><p class=\"text-center\">Ayurveda Articles</p></a>\r\n            <a class=\"success p-0\" (click)=\"goTocms(6)\"><p class=\"text-center\">Diabetes Care Plan</p></a>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                Our Policies\r\n            </div>\r\n            <a class=\"success p-0\" (click)=\"goTocms(1)\"><p class=\"text-center\">Privacy Policy</p></a>\r\n            <a class=\"success p-0\" (click)=\"goTocms(2)\"><p class=\"text-center\">Terms and Conditions</p></a>\r\n            <a class=\"success p-0\" (click)=\"goTocms(8)\"><p class=\"text-center\">Editorial Policy</p></a>\r\n            <a class=\"success p-0\" (click)=\"goTocms(4)\"><p class=\"text-center\">Return Policy</p></a>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                ContactInfo\r\n            </div> \r\n            <p class=\"text-center\">Order Medicines</p>\r\n            <p class=\"text-center\">Book Lab Tests</p>\r\n            \r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                Connect\r\n            </div>\r\n            <p class=\"text-center\">\r\n                Social Links\r\n            </p>\r\n            <p class=\"text-center\">\r\n                <a class=\"success p-0\" (click)=\"goTocms(2)\"><i class=\"ft-facebook\"></i></a>\r\n                <a class=\"success p-0\" (click)=\"goTocms(2)\"><i class=\"ft-twitter\"></i></a>\r\n                <a class=\"success p-0\" (click)=\"goTocms(2)\"><i class=\"ft-instagram\"></i></a>\r\n                <a class=\"success p-0\" (click)=\"goTocms(2)\"><i class=\"ft-mail\"></i></a>\r\n            </p>\r\n         </div> \r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->\r\n\r\n\r\n\r\n<!--Footer Starts-->\r\n<footer *ngIf=\"checkfooter\" class=\"doNotPrint\">\r\n    <div class=\"container-fluid\">\r\n        <p class=\"copyright text-center\">\r\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"#\">EPS</a>, All rights reserved.          \r\n        </p>\r\n        \r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media print {\n  .doNotPrint {\n    display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9EOlxcY2hlbWlzdC9zcmNcXGFwcFxcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQVkseUJBQXVCLEVBQUcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50e1xyXG4gICAgLmRvTm90UHJpbnR7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(cookieservice, router) {
        this.cookieservice = cookieservice;
        this.router = router;
        //Variables
        this.checkfooter = true;
        this.currentDate = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck") && !this.cookieservice.get("loginsuperuserMerck")) {
            this.checkfooter = false;
        }
    };
    FooterComponent.prototype.goTocms = function (id) {
        this.router.navigate(['/getcmspage', id]);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_cookie__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\r\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\r\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ft-more-vertical\"></i>\r\n                </a>\r\n            </span>\r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\r\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \r\n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">fullscreen</p>\r\n                        </a>\r\n                    </li>\r\n                    <!--<li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\r\n                            <i class=\"ft-flag font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Language</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang text-left\">                           \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\r\n                                <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\r\n                                <span>English</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\r\n                                <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\r\n                                <span>Spanish</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\r\n                                <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\r\n                                <span>Portuguese</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\r\n                                <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\r\n                                <span>German</span>\r\n                            </a>                            \r\n                        </div>\r\n                    </li>-->\r\n                    \r\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \r\n                           <!-- <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\r\n                                <i class=\"ft-edit mr-2\"></i>\r\n                                <span>My Profile</span>\r\n                            </a>-->\r\n                           <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\r\n                                <i class=\"ft-power mr-2\"></i>\r\n                                <span (click)=\"logout()\">Logout</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <!--<li class=\"nav-item d-none d-lg-block\">\r\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\">\r\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Notifications Sidebar</p>\r\n                        </a>\r\n                    </li>-->\r\n                   \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.translate = translate;
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        this.placement = 'bottom-right';
        this.isCollapsed = true;
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }
    NavbarComponent.prototype.ngAfterViewChecked = function () {
        // setTimeout(() => {
        //     var wrapperDiv = document.getElementsByClassName("wrapper")[0];
        //     var dir = wrapperDiv.getAttribute("dir");           
        //     if (dir === 'rtl') {
        //         this.placement = 'bottom-left';
        //     }
        //     else if (dir === 'ltr') {
        //         this.placement = 'bottom-right';
        //     }
        // }, 3000);
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize';
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.appservice.logout()
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.cookieservice.removeAll();
                _this.toasterservice.Success(data.message);
                _this.router.navigate(['/auth']);
            }
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _shared_services_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\r\n<!-- START Notification Sidebar -->\r\n<aside id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\r\n  <a class=\"notification-sidebar-close\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <div class=\"side-nav notification-sidebar-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mt-1\">\r\n        <ngb-tabset>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"activity\" class=\"col-12 timeline-left\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT ACTIVITY</h6>\r\n                <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\r\n                  <ul class=\"timeline\">\r\n                    <li class=\"timeline-line\"></li>\r\n                    <li class=\"timeline-item text-left text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-purple bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-shopping-cart\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new equipments for zonal office.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-info bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA will be on 15th August 2015.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-success bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-warning bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-cyan bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-amber bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-grey bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"chatapp\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\r\n                <div class=\"collection border-none\">\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-1.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Love you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-2.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can we </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Great! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-15.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Do it </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-19.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Got that </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-14.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Like you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-13.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-22.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Okay you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can do </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-20.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Leave it </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"settings\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\r\n                <ul class=\"list-unstyled\">\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications1\">\r\n                            <label class=\"custom-control-label\" for=\"notifications1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"recent-activity1\">\r\n                            <label class=\"custom-control-label\" for=\"recent-activity1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications2\">\r\n                            <label class=\"custom-control-label\" for=\"notifications2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"recent-activity2\">\r\n                            <label class=\"custom-control-label\" for=\"recent-activity2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show your emails</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-emails\">\r\n                            <label class=\"custom-control-label\" for=\"show-emails\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show Task statistics</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-stats\">\r\n                            <label class=\"custom-control-label\" for=\"show-stats\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n<!-- END Notification Sidebar -->\r\n"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar.open {\n    left: 0;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n    left: 10px;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0Q6XFxjaGVtaXN0L3NyY1xcYXBwXFxzaGFyZWRcXG5vdGlmaWNhdGlvbi1zaWRlYmFyXFxub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL25vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBWTtFQUNULGNBQWE7RUFDaEIsV0FBVTtFQUNQLHVCQUFzQjtFQUN6QixjQUFhO0VBQ1YsZ0JBQWU7RUFDZixPQUFNO0VBQ04sVUFBUztFQUNULGNBQWE7RUFDYiwyREFBMEQ7RUFDMUQsb0NBQTJCO1VBQTNCLDRCQUEyQjtFQUMzQiwyQ0FBMEM7RUFDMUMsdUNBQXNDLEVBd0R6QztFQXJFRDtJQWdCRSxTQUFRLEVBQ1I7RUFqQkY7SUFvQkUsbUJBQWtCO0lBQ2YsYUFBWTtJQUNaLGNBQWEsRUFjaEI7RUFwQ0Y7TUE0Qk0sYUFBVyxFQUNSO0VBN0JUO01BK0JNLGFBQVcsRUFDUjtFQWhDVDtJQXVDRSxpQkFBZ0I7SUFDaEIsOEJBQTRCO0lBQzVCLGVBQWM7SUFDWCw0Q0FBMkMsRUFDOUM7RUEzQ0Y7SUE2Q0ssWUFBVyxFQUNkO0VBOUNGO0lBZ0RFLG1CQUFrQjtJQUNmLFlBQVc7SUFDWCxVQUFTO0lBQ1QsYUFBWTtJQUNaLFlBQVc7SUFDWCxZQUFXLEVBQ2Q7RUF0REY7SUF3REUsbUJBQWtCO0lBQ2YsU0FBUTtJQUNSLFlBQVc7SUFDWCxhQUFZO0lBQ1osWUFBVztJQUNYLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsZ0JBQWUsRUFDbEI7RUNoQkY7RUR5QkUsYUFBWTtFQUNaLFlBQVcsRUFhWDtFQ3BDQTtJRHlCQyxRQUFPO0lBQ1AsWUFBVyxFQUNYO0VDeEJEO0lEMEJDLFdBQVU7SUFDVixZQUFXLEVBQ1g7RUN6QkQ7SUQyQkMsYUFBWTtJQUNaLFdBQVUsRUFDViIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZmljYXRpb24tc2lkZWJhcntcclxuXHR3aWR0aDogNDAwcHg7XHJcbiAgICByaWdodDogLTQwMHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cdHotaW5kZXg6IDEwNTE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHQmLm9wZW57XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcblxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50e1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRoZWlnaHQ6IDEwMCU7XHJcbiAgICBcdHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgXHQjdGltZWxpbmV7XHJcbiAgICBcdFx0Ji50aW1lbGluZS1sZWZ0e1xyXG4gICAgXHRcdFx0LnRpbWVsaW5lLWl0ZW17XHJcbiAgICBcdFx0XHRcdCY6YmVmb3Jle1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6bm9uZTtcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHQmOmFmdGVye1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6bm9uZTtcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdH1cclxuICAgIFx0fVxyXG5cdH1cclxuXHJcblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xyXG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHRhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcclxuICAgIFx0Y29sb3I6ICMwMDA7XHJcblx0fVxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZXtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDEwcHg7XHJcblx0ICAgIHRvcDogMTBweDtcclxuXHQgICAgcGFkZGluZzogN3B4O1xyXG5cdCAgICB3aWR0aDogYXV0bztcclxuXHQgICAgei1pbmRleDogMTA7XHJcblx0fVxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHRvcDogMzUlO1xyXG5cdCAgICB3aWR0aDogNTRweDtcclxuXHQgICAgaGVpZ2h0OiA1MHB4O1xyXG5cdCAgICBsZWZ0OiAtNTRweDtcclxuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBsaW5lLWhlaWdodDogNTBweDtcclxuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHRcclxuXHJcblx0XHJcblxyXG59XHJcblxyXG5bZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcHtcclxuXHQjbm90aWZpY2F0aW9uLXNpZGViYXJ7XHRcclxuXHRcdGxlZnQ6IC00MDBweDtcdFxyXG5cdFx0cmlnaHQ6IGF1dG87XHQgICBcclxuXHRcdCYub3BlbntcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cmlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0XHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XHJcblx0XHRcdGxlZnQ6IDEwcHg7XHJcblx0XHRcdHJpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdFx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZXtcdFxyXG5cdFx0XHRyaWdodDogLTU0cHg7XHJcblx0XHRcdGxlZnQ6IGF1dG87XHJcblx0XHR9XHRcclxuXHR9XHJcbn0iLCIjbm90aWZpY2F0aW9uLXNpZGViYXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gICAgcmlnaHQ6IDA7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3RpbWVsaW5lLnRpbWVsaW5lLWxlZnQgLnRpbWVsaW5lLWl0ZW06YmVmb3JlIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCAjdGltZWxpbmUudGltZWxpbmUtbGVmdCAudGltZWxpbmUtaXRlbTphZnRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIGEubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgYS5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgY29sb3I6ICMwMDA7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgei1pbmRleDogMTA7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1JTtcbiAgICB3aWR0aDogNTRweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGVmdDogLTU0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5bZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIge1xuICBsZWZ0OiAtNDAwcHg7XG4gIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhci5vcGVuIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGUge1xuICAgIHJpZ2h0OiAtNTRweDtcbiAgICBsZWZ0OiBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent() {
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
        // notification-sidebar JS File
        $.getScript('./assets/js/notification-sidebar.js');
    };
    NotificationSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! ./notification-sidebar.component.html */ "./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        })
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: './pages/content-pages/content-pages.module#ContentPagesModule'
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
];


/***/ }),

/***/ "./src/app/shared/services/excel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/shared/services/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/services/service.ts ***!
  \********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        //baseurl = "http://localhost:8085/";
        this.baseurl = "http://ec2-13-233-172-180.ap-south-1.compute.amazonaws.com:8086/";
    }
    AppService.prototype.users = function (addedby) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "alldata", { addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.emptyvendorbill = function (addedby) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "emptyvendorbill", { addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.billno = function (addedby) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "billno", { addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteproduct = function (addedby, productid, billid) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "deleteproduct", { addedby: addedby, productid: productid, billid: billid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.wholesaler = function (addedby, pagevalue) {
        console.log(pagevalue);
        return this.http.post(this.baseurl + "wholesaler", { addedby: addedby, pagevalue: pagevalue }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.allvendorbill = function (addedby, vendorid) {
        return this.http.post(this.baseurl + "allvendorbill", { addedby: addedby, vendorid: vendorid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.getbills = function (vendorid) {
        return this.http.post(this.baseurl + "getbills", { vendorid: vendorid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.Detail = function (userid) {
        return this.http.post(this.baseurl + "detail", { userid: userid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.Nosale = function () {
        return this.http.get(this.baseurl + "nosale");
    };
    AppService.prototype.Fastsale = function () {
        return this.http.get(this.baseurl + "fastsale");
    };
    AppService.prototype.Slowsale = function () {
        return this.http.get(this.baseurl + "slowsale");
    };
    AppService.prototype.logout = function () {
        return this.http.get(this.baseurl + "userout");
    };
    AppService.prototype.country = function () {
        return this.http.get(this.baseurl + "country");
    };
    AppService.prototype.product = function (addedby, pagevalue, totalrecord) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "product", { addedby: addedby, pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.orderproduct = function () {
        return this.http.get(this.baseurl + "orderproduct");
    };
    AppService.prototype.contact = function () {
        return this.http.get(this.baseurl + "contact");
    };
    AppService.prototype.blogdata = function () {
        return this.http.get(this.baseurl + "blog");
    };
    AppService.prototype.hsn = function () {
        return this.http.get(this.baseurl + "hsn");
    };
    AppService.prototype.category = function (pagevalue, totalrecord) {
        return this.http.post(this.baseurl + "category", { pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.subcategory = function (pagevalue, totalrecord) {
        return this.http.post(this.baseurl + "subcategory", { pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.getgst = function (hsn) {
        return this.http.post(this.baseurl + "getgst", { hsn: hsn }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.testimonialdata = function () {
        return this.http.get(this.baseurl + "testimonial");
    };
    AppService.prototype.socialdata = function () {
        return this.http.get(this.baseurl + "social");
    };
    AppService.prototype.faqdata = function () {
        return this.http.get(this.baseurl + "faq");
    };
    AppService.prototype.metadata = function () {
        return this.http.get(this.baseurl + "meta");
    };
    AppService.prototype.offerdata = function () {
        return this.http.get(this.baseurl + "offer");
    };
    AppService.prototype.services = function () {
        return this.http.get(this.baseurl + "services");
    };
    AppService.prototype.carrier = function () {
        return this.http.get(this.baseurl + "carrier");
    };
    AppService.prototype.addtocartdata = function () {
        return this.http.get(this.baseurl + "addtocart");
    };
    AppService.prototype.reviewdata = function () {
        return this.http.get(this.baseurl + "review");
    };
    AppService.prototype.soldproductdata = function (addedby, pagevalue) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "soldproduct", { addedby: addedby, pagevalue: pagevalue }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.nonpaidvendorbill = function (addedby, vendorid) {
        //console.log(vendorid);return;
        return this.http.post(this.baseurl + "nonpaidvendorbill", { addedby: addedby, vendorid: vendorid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.comingproductdata = function () {
        return this.http.get(this.baseurl + "comingproduct");
    };
    AppService.prototype.stockproductdata = function (addedby, pagevalue, total) {
        return this.http.post(this.baseurl + "stockproductdata", { pagevalue: pagevalue, totalrecord: total, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.expireproductdata = function (pagevalue, total, addedby) {
        return this.http.post(this.baseurl + "expireproduct", { pagevalue: pagevalue, totalrecord: total, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.availableproductdata = function (addedby, pagevalue, totalrecord) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "availableproduct", { addedby: addedby, pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.getreport = function (startdate, enddate, pagevalue, totalrecord) {
        return this.http.post(this.baseurl + "getreport", { startdate: startdate, enddate: enddate, pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.getcustomerreport = function (pagevalue, totalrecord, added_by) {
        return this.http.post(this.baseurl + "getcustomerreport", { pagevalue: pagevalue, totalrecord: totalrecord, added_by: added_by }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.getpurchasereport = function (addedby, id, pagevalue, totalrecord) {
        return this.http.post(this.baseurl + "getpurchasereport", { addedby: addedby, id: id, pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.expirethismonth = function () {
        return this.http.get(this.baseurl + "expirethismonth");
    };
    AppService.prototype.monthsold = function () {
        return this.http.get(this.baseurl + "monthsold");
    };
    AppService.prototype.yearsold = function () {
        return this.http.get(this.baseurl + "yearsold");
    };
    AppService.prototype.billingdata = function (addedby, billid) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "billingdata", { addedby: addedby, billid: billid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.viewbillingdata = function (addedby, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "viewbillingdata", { addedby: addedby, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.cmsdata = function () {
        return this.http.get(this.baseurl + "cmsdata");
    };
    AppService.prototype.cms = function () {
        return this.http.get(this.baseurl + "cms");
    };
    AppService.prototype.wholesailer = function () {
        return this.http.get(this.baseurl + "wholesailer");
    };
    AppService.prototype.adduser = function (id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "register", { fname: id.fname, city: id.city, country: id.country, lname: id.lname, hospital: id.hospital, email: id.email, mobile: id.mobile }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.edituser = function (formdata, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "edituser", { fname: formdata.fname, city: formdata.city, country: formdata.country, lname: formdata.lname, hospital: formdata.hospital, email: formdata.email, mobile: formdata.mobile }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.resetpassword = function (formdata, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "setpassword", { password: formdata.password, cpassword: formdata.cpassword, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.forgotpassword = function (formdata, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "setpassword", { password: formdata.password, cpassword: formdata.cpassword, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.userDetail = function (id) {
        return this.http.post(this.baseurl + "alldatabyuser", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.wholeDetail = function (id) {
        return this.http.post(this.baseurl + "wholeDetail", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addproduct = function (id, file, loguser, expire_date) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("cat_id", id.cat_id);
        uploaddata.append("subcat_id", id.subcat_id);
        uploaddata.append("name", id.name);
        uploaddata.append("chemical_name", id.chemical_name);
        uploaddata.append("mrp", id.mrp);
        //uploaddata.append("selling_price", id.selling_price);
        //uploaddata.append("available_price", id.available_price);
        uploaddata.append("gst", id.gst);
        uploaddata.append("hsn_code", id.hsn_code);
        uploaddata.append("barcode", id.barcode);
        uploaddata.append("company_name", id.company_name);
        uploaddata.append("quantity", id.quantity);
        uploaddata.append("loose", id.loose);
        uploaddata.append("rack_no", id.rack_no);
        uploaddata.append("batch_no", id.batch_no);
        uploaddata.append("is_prescription", id.is_prescription);
        uploaddata.append("expire_date", expire_date);
        //uploaddata.append("available_date", id.available_date);
        uploaddata.append("perquantity", id.perquantity);
        uploaddata.append("addedby", loguser);
        //uploaddata.append("pagevalue",pagevalue);
        return this.http.post(this.baseurl + "createproduct", uploaddata);
    };
    AppService.prototype.editproduct = function (formdata, id, file, loguser, expiredate) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("cat_id", formdata.cat_id);
        uploaddata.append("subcat_id", formdata.subcat_id);
        uploaddata.append("name", formdata.name);
        uploaddata.append("chemical_name", formdata.chemical_name);
        uploaddata.append("mrp", formdata.mrp);
        //uploaddata.append("selling_price", formdata.selling_price);
        uploaddata.append("hsn_code", formdata.hsn_code);
        uploaddata.append("gst", formdata.gst);
        //uploaddata.append("available_price", formdata.available_price);
        uploaddata.append("company_name", formdata.company_name);
        uploaddata.append("quantity", formdata.quantity);
        uploaddata.append("loose", formdata.loose);
        uploaddata.append("rack_no", formdata.rack_no);
        uploaddata.append("is_prescription", formdata.is_prescription);
        uploaddata.append("batch_no", formdata.batch_no);
        uploaddata.append("expire_date", expiredate);
        //uploaddata.append("available_date", formdata.available_date);
        uploaddata.append("perquantity", formdata.perquantity);
        uploaddata.append("id", id);
        uploaddata.append("addedby", loguser);
        uploaddata.append("barcode", formdata.barcode);
        return this.http.post(this.baseurl + "updateproduct", uploaddata);
    };
    AppService.prototype.ProductDetail = function (id) {
        return this.http.post(this.baseurl + "productid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.stocksearch = function (formdata, addedby) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "stocksearch", { value: formdata.search, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.salesearch = function (formdata, addedby) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "salesearch", { value: formdata.search, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.productlist = function (addedby, searchproduct) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "productlist", { addedby: addedby, searchproduct: searchproduct }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.productsearch = function (formdata, addedby, pagevalue, totalrecord) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "productsearch", { value: formdata.search, addedby: addedby, pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.productsearchss = function (formdata, addedby, salestype, billid) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "productsearchss", { value: formdata, addedby: addedby, salestype: salestype, billid: billid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addvendorproduct = function (addedby, productsearch) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "addvendorproduct", { addedby: addedby, productsearch: productsearch }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addvendorproducts = function (addedby, productsearch, billid) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "addvendorproductlist", { addedby: addedby, productsearch: productsearch, billid: billid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.getbillproduct = function (addedby, billid) {
        return this.http.post(this.baseurl + "getbillproduct", { addedby: addedby, billid: billid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.createvendorproduct = function (addedby, productid, purchaseprice, mrp, quantity, expiredate, batchno) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "createvendorproduct", { addedby: addedby, productid: productid, purchaseprice: purchaseprice, mrp: mrp, quantity: quantity, expiredate: expiredate, batchno: batchno }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.updatebillproduct = function (addedby, productid, billid, mrp, quantity, expiredate, batchno, purchaseprice) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "updatebillproduct", { addedby: addedby, productid: productid, billid: billid, mrp: mrp, quantity: quantity, expiredate: expiredate, batchno: batchno, purchaseprice: purchaseprice }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.WholesalerDetail = function (id, addedby) {
        return this.http.post(this.baseurl + "wholesalerid", { id: id, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.getexcel = function (id, addedby) {
        return this.http.post(this.baseurl + "getexcel", { id: id, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addwholesaler = function (id, addedby) {
        return this.http.post(this.baseurl + "createwholesaler", { name: id.name, email: id.email, mobile: id.mobile, address: id.address, addedby: addedby, gstno: id.gstno }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.billingproductlist = function (id, loguser, salestype, billno) {
        return this.http.post(this.baseurl + "billingproductlist", { name: id.name, email: id.email, mobile: id.mobile, address: id.address, addedby: loguser, salestype: salestype, billno: billno }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editwholesaler = function (formdata, id, addedby) {
        return this.http.post(this.baseurl + "updatewholesaler", { name: formdata.name, email: formdata.email, mobile: formdata.mobile, address: formdata.address, addedby: addedby, gstno: formdata.gstno, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.wholesalersearch = function (formdata, addedby) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "wholesalersearch", { value: formdata.search, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.faqsearch = function (formdata) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "faqsearch", { value: formdata.search }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addcontact = function (id) {
        console.log(id);
        return this.http.post(this.baseurl + "createcontact", { name: id.name, email: id.email, mobile: id.mobile, fax: id.fax, address: id.address, license_no: id.license_no, expire_date: id.expire_date }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editcontact = function (formdata, id) {
        //console.log(id.name_ar);return;
        return this.http.post(this.baseurl + "updatecontact", { name: formdata.name, email: formdata.email, mobile: formdata.mobile, fax: formdata.fax, address: formdata.address, license_no: formdata.license_no, expire_date: formdata.expire_date, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.ContactDetail = function (id) {
        return this.http.post(this.baseurl + "contactid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletecontact = function (id) {
        return this.http.post(this.baseurl + "deletecontact", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addBlogdata = function (id, file) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("title", id.title);
        uploaddata.append("description", id.description);
        return this.http.post(this.baseurl + "createblog", uploaddata);
    };
    AppService.prototype.editblogdata = function (formdata, id, file) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("title", formdata.title);
        uploaddata.append("description", formdata.description);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updateblog", uploaddata);
    };
    AppService.prototype.BlogDataid = function (id) {
        return this.http.post(this.baseurl + "blogid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteblog = function (id) {
        return this.http.post(this.baseurl + "deleteblog", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addcategory = function (id) {
        console.log(id);
        return this.http.post(this.baseurl + "createcategory", { name: id.name }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editcategory = function (formdata, id) {
        //console.log(id.name_ar);return;
        return this.http.post(this.baseurl + "updatecategory", { name: formdata.name, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.CategoryDetail = function (id) {
        return this.http.post(this.baseurl + "categoryid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletecategory = function (id) {
        return this.http.post(this.baseurl + "deletecategory", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addsubcategory = function (id) {
        console.log(id);
        return this.http.post(this.baseurl + "createsubcategory", { name: id.name, cat_id: id.cat_id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editsubcategory = function (formdata, id) {
        //console.log(id.name_ar);return;
        return this.http.post(this.baseurl + "updatesubcategory", { name: formdata.name, cat_id: formdata.cat_id, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.SubCategoryDetail = function (id) {
        return this.http.post(this.baseurl + "subcategoryid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.SubCategorycatDetail = function (id) {
        return this.http.post(this.baseurl + "subcategorycatid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletesubcategory = function (id) {
        return this.http.post(this.baseurl + "deletesubcategory", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addTestimonialdata = function (id, file) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", id.name);
        uploaddata.append("description", id.description);
        return this.http.post(this.baseurl + "createtestimonial", uploaddata);
    };
    AppService.prototype.edittestimonialdata = function (formdata, id, file) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", formdata.name);
        uploaddata.append("description", formdata.description);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updatetestimonial", uploaddata);
    };
    AppService.prototype.TestimonialDataid = function (id) {
        return this.http.post(this.baseurl + "testimonialid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletetestimonial = function (id) {
        return this.http.post(this.baseurl + "deletetestimonial", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addSocialdata = function (id, file) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", id.name);
        uploaddata.append("link", id.link);
        return this.http.post(this.baseurl + "createsocial", uploaddata);
    };
    AppService.prototype.editsocialdata = function (formdata, id, file) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", formdata.name);
        uploaddata.append("link", formdata.link);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updatesocial", uploaddata);
    };
    AppService.prototype.SocialDataid = function (id) {
        return this.http.post(this.baseurl + "socialid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletesocial = function (id) {
        return this.http.post(this.baseurl + "deletesocial", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addFaqdata = function (id, file) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", id.name);
        uploaddata.append("description", id.description);
        return this.http.post(this.baseurl + "createfaq", uploaddata);
    };
    AppService.prototype.editfaqdata = function (formdata, id, file) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", formdata.name);
        uploaddata.append("description", formdata.description);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updatefaq", uploaddata);
    };
    AppService.prototype.FaqDataid = function (id) {
        return this.http.post(this.baseurl + "faqid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletefaq = function (id) {
        return this.http.post(this.baseurl + "deletefaq", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addMetadata = function (id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "createmetadata", { name: id.name, title: id.title, description: id.description }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editmetadata = function (formdata, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "updatemetadata", { name: formdata.name, title: formdata.title, description: formdata.description, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.MetaDataid = function (id) {
        return this.http.post(this.baseurl + "metaid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletemeta = function (id) {
        return this.http.post(this.baseurl + "deletemeta", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addOfferdata = function (id, file) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", id.name);
        uploaddata.append("description", id.description);
        return this.http.post(this.baseurl + "createoffer", uploaddata);
    };
    AppService.prototype.editofferdata = function (formdata, id, file) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", formdata.name);
        uploaddata.append("description", formdata.description);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updateoffer", uploaddata);
    };
    AppService.prototype.OfferDataid = function (id) {
        return this.http.post(this.baseurl + "offerid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteoffer = function (id) {
        return this.http.post(this.baseurl + "deleteoffer", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addservices = function (id) {
        console.log(id);
        return this.http.post(this.baseurl + "createservices", { name: id.name }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editservices = function (formdata, id) {
        //console.log(id.name_ar);return;
        return this.http.post(this.baseurl + "updateservices", { name: formdata.name, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.ServicesDetail = function (id) {
        return this.http.post(this.baseurl + "servicesid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteservices = function (id) {
        return this.http.post(this.baseurl + "deleteservices", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addcarrier = function (id) {
        console.log(id);
        return this.http.post(this.baseurl + "createcarrier", { name: id.name, last_date: id.last_date }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editcarrier = function (formdata, id) {
        //console.log(id.name_ar);return;
        return this.http.post(this.baseurl + "updatecarrier", { name: formdata.name, id: id, last_date: formdata.last_date }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.CarrierDetail = function (id) {
        return this.http.post(this.baseurl + "carrierid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletecarrier = function (id) {
        return this.http.post(this.baseurl + "deletecarrier", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteaddtocart = function (id) {
        return this.http.post(this.baseurl + "deleteaddtocart", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletereview = function (id) {
        return this.http.post(this.baseurl + "deletereview", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletesoldproduct = function (id) {
        return this.http.post(this.baseurl + "deletesoldproduct", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletecomingproduct = function (id) {
        return this.http.post(this.baseurl + "deletecomingproduct", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteexpireproduct = function (id) {
        return this.http.post(this.baseurl + "deleteexpireproduct", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteavailableproduct = function (id) {
        return this.http.post(this.baseurl + "deleteavailableproduct", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletebilling = function (id, addedby, billid) {
        return this.http.post(this.baseurl + "deletebilling", { id: id, addedby: addedby, billid: billid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.autoorder = function (id, added_by) {
        return this.http.post(this.baseurl + "autoorder", { id: id, added_by: added_by }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addbilling = function (id, billid) {
        return this.http.post(this.baseurl + "addbilling", { id: id, billid: billid }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.discrequantity = function (id, product_id) {
        return this.http.post(this.baseurl + "discrequantity", { id: id, product_id: product_id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.increquantity = function (id, product_id, quantity, salestype, addedby, userid, loose) {
        return this.http.post(this.baseurl + "increquantity", { id: id, product_id: product_id, quantity: quantity, salestype: salestype, addedby: addedby, userid: userid, loose: loose }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.discrequantityorder = function (id, product_id) {
        return this.http.post(this.baseurl + "discrequantityorder", { id: id, product_id: product_id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.increquantityorder = function (id, product_id) {
        return this.http.post(this.baseurl + "increquantityorder", { id: id, product_id: product_id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.genratebill = function (id) {
        return this.http.post(this.baseurl + "genratebill", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addcms = function (id) {
        console.log(id);
        return this.http.post(this.baseurl + "createcms", { name: id.name, description: id.description, cms_id: id.cms_id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editcms = function (formdata, id) {
        //console.log(id.name_ar);return;
        return this.http.post(this.baseurl + "updatecms", { name: formdata.name, id: id, description: formdata.description, cms_id: formdata.cms_id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.cmsnamedata = function (id) {
        return this.http.post(this.baseurl + "cmsnamedata", { cms_id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.Cmsid = function (id) {
        return this.http.post(this.baseurl + "Cmsid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.vendorbill = function (addedby, pagevalue, totalrecord) {
        //console.log(pageno);return;
        return this.http.post(this.baseurl + "vendorbill", { addedby: addedby, pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.Vendorbillsearch = function (formdata, addedby) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "vendorbillsearch", { value: formdata.search, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.vendorbillDetail = function (id, addedby) {
        return this.http.post(this.baseurl + "vendorbillid", { id: id, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addvendorbill = function (id, amount, addedby) {
        return this.http.post(this.baseurl + "createvendorbill", { vendor_id: id.vendor_id, bill_no: id.bill_no, amount: amount, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editvendorbill = function (formdata, id, addedby, billdate) {
        return this.http.post(this.baseurl + "updatevendorbill", { vendor_id: formdata.vendor_id, bill_no: formdata.bill_no, bill_date: billdate, amount: formdata.amount, addedby: addedby, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.vendorpayment = function (addedby, pagevalue) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "vendorpayment", { addedby: addedby, pagevalue: pagevalue }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.vendorpaymentsearch = function (formdata, addedby) {
        //console.log(formdata.search);
        return this.http.post(this.baseurl + "vendorpaymentsearch", { value: formdata.search, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.vendorpaymentDetail = function (id, addedby) {
        return this.http.post(this.baseurl + "vendorpaymentid", { id: id, addedby: addedby }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addvendorpayment = function (id, addedby, paidamount, pendingamount, vendor_id) {
        console.log(id);
        return this.http.post(this.baseurl + "createvendorpayment", { bill_id: id.bill_id, mode: id.mode, addedby: addedby, paidamount: paidamount, pendingamount: pendingamount, vendor_id: vendor_id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.editvendorpayment = function (formdata, id, addedby, payment_date) {
        return this.http.post(this.baseurl + "updatevendorpayment", { vendor_id: formdata.vendor_id, bill_id: formdata.bill_id, payment_date: payment_date, amount: formdata.amount, mode: formdata.mode, addedby: addedby, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.userLogin = function (email, password) {
        return this.http.post(this.baseurl + "login", { email: email, password: password }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/shared/services/toaster.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/toaster.service.ts ***!
  \****************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterService = /** @class */ (function () {
    function ToasterService() {
        this.setting();
    }
    ToasterService.prototype.Success = function (message) {
        toastr.success(message);
    };
    ToasterService.prototype.Error = function (message) {
        toastr.error(message);
    };
    ToasterService.prototype.setting = function () {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "4000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_10__["ToggleFullscreenDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_10__["ToggleFullscreenDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, Subuser, Front */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subuser", function() { return Subuser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Front", function() { return Front; });
//Sidebar menu Routes and data
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //{ path: '/appuser', title: 'App User', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //{ path: '/invoice', title: 'Invoice', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Products', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/product', title: 'All Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/autoorder', title: 'Auto Order', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/comingproduct', title: 'Out Of Stock', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/soldproduct', title: 'Sold Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/expireproduct', title: 'Expired Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Billing', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            //{ path: '/billing', title: 'Billing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'chemist/invoice', title: 'Invoicing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/viewinvoice', title: 'View Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/todaysold', title: 'Sales Report', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/customersales', title: 'Customer Sales Report', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/addtocart', title: 'Add To Cart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/wholesaler', title: 'Vendor List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/vendorbill', title: 'Vendor Bill', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/payment', title: 'Vendor Payment', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Medecine Type', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/category', title: 'Type', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
];
var Subuser = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Medcine Detail', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/product', title: 'Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/comingproduct', title: 'Coming Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/soldproduct', title: 'Sold Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/expireproduct', title: 'Expire Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/availableproduct', title: 'Available Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/expirethismonth', title: 'Expire this month', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/offer', title: 'Offer', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Medcine Selling', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/billing', title: 'Billing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/todaysold', title: 'Today Sell', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/addtocart', title: 'Add To Cart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
];
var Front = [
    { path: '/home', title: 'Home', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/hfaq', title: 'Faq', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/htestimonial', title: 'Testimonial', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/hblog', title: 'Blog', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/hproduct', title: 'Product', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"center doNotPrint\" >\r\n    <div class=\"sidebar-header\">\r\n        <div class=\"logo clearfix\">\r\n            <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\r\n                <div class=\"logo-img\">\r\n                    <img src=\"assets/img/logo.png\" />\r\n                </div>\r\n                <span class=\"text align-middle\">EPS</span>\r\n            </a>\r\n            <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\r\n                <i class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\r\n            </a>\r\n            <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\r\n                <i class=\"ft-x\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Sidebar Header Ends -->\r\n\r\n    <!-- Sidebar Content starts -->\r\n    <div class=\"sidebar-content\">\r\n        <div class=\"nav-container\">\r\n            <ul class=\"navigation\">\r\n                <!-- First level menu -->\r\n                <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class]\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\r\n                    [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                    <ng-template #externalLinkBlock>\r\n                        <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                            <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                            <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                        </a>\r\n                    </ng-template>\r\n                    <!-- Second level menu -->\r\n                    <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\r\n                        <li *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"[menuSubItem.class]\">\r\n                            <a (click)=\"getRoute(menuSubItem.path,menuSubItem.isExternalLink)\"  *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                            <ng-template #externalSubLinkBlock>\r\n                                <a [href]=\"[menuSubItem.path]\">\r\n                                    <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                                    <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                                </a>\r\n                            </ng-template>\r\n                            <!-- Third level menu -->\r\n                            <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\r\n                                <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                    [ngClass]=\"[menuSubsubItem.class]\">\r\n                                    <a [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                    <ng-template #externalSubSubLinkBlock>\r\n                                        <a [href]=\"[menuSubsubItem.path]\">\r\n                                            <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                            <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                            <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                        </a>\r\n                                    </ng-template>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Content Ends -->"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, appservice, route, translate, cookieservice, elementRef) {
        this.router = router;
        this.appservice = appservice;
        this.route = route;
        this.translate = translate;
        this.cookieservice = cookieservice;
        this.elementRef = elementRef;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/app-sidebar.js');
        this.printurl = window.location.href;
        if (this.printurl.includes("viewinvoice")) {
            console.log('true');
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent('resize', true, false);
            window.dispatchEvent(evt);
            console.log(evt);
        }
        this.cokser = JSON.parse(this.cookieservice.get("loginuserMerck"));
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.usertype = JSON.parse(this.cookieservice.get("loginuserMerck")).usertype;
        console.log(this.usertype);
        if (this.usertype == 2) {
            this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["Subuser"].filter(function (menuItem) { return menuItem; });
        }
        else if (this.usertype == 1) {
            this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) { return menuItem; });
        }
        else {
            this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["Front"].filter(function (menuItem) { return menuItem; });
        }
    };
    //NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    };
    SidebarComponent.prototype.getRoute = function (route, icon) {
        var _this = this;
        console.log(route, icon);
        if (route == 'chemist/invoice') {
            this.appservice.billno(this.loguser)
                .subscribe(function (data) {
                if (data.status == '1') {
                    _this.inurl = route + '/' + data.data;
                    window.open(_this.inurl, '_blank');
                }
            });
            //this.inurl='chemist/invoice';
            //window.open(route,'_blank');
        }
        else {
            this.router.navigate([route]);
        }
    };
    SidebarComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () { fireRefreshEventOnWindow(); }, 300);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: ['@media print{.doNotPrint{display:none !important;} }'],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\chemist\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map