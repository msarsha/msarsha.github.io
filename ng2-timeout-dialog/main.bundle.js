webpackJsonp(["main"],{

/***/ "../../../../../../ng2-timeout-dialog/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timeout_module__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timeout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout_directive__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.directive.js");
/* unused harmony reexport TimeoutDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_timeout_component__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.component.js");
/* unused harmony reexport TimeoutComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_timeout_service__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.service.js");
/* unused harmony reexport TimeoutService */






/***/ }),

/***/ "../../../../../../ng2-timeout-dialog/dist/src/timeout.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeout_service__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.service.js");


var TimeoutComponent = (function () {
    function TimeoutComponent(timeoutService) {
        var _this = this;
        this.timeoutService = timeoutService;
        this.isVisible = true;
        this.timeoutService.timeoutObservable.subscribe(function (val) { return _this.isVisible = val; });
    }
    TimeoutComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'sh-timeout',
                    template: "\n    <div *ngIf=\"isVisible\">\n      <div class=\"timeout-overlay fullscreen\" (click)=\"isVisible = false\"></div>\n      <div class=\"timeout-container\" #ref>\n        <ng-content>\n        </ng-content>\n      </div>\n      <div *ngIf=\"ref.children.length == 0\" class=\"timeout-default-box timeout-container\">\n        <h2>Application will timeout soon.</h2>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .timeout-default-box {\n      text-align: center;\n      height: 250px;\n      width: 250px;\n      background-color: antiquewhite;\n      border-radius: 5px;\n      padding: 3px;\n    }\n\n    .timeout-default-box h2{\n      margin-top: 50px;\n      overflow-wrap: break-word;\n    }\n    \n    .fullscreen {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n    }\n\n    .timeout-overlay {\n      z-index: 100;\n      background: rgba(0, 0, 0, .2);\n    }\n\n    .timeout-container {\n      position: fixed;\n      z-index: 101;\n      left: 50%;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%);\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    TimeoutComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__timeout_service__["a" /* TimeoutService */], },
    ]; };
    return TimeoutComponent;
}());



/***/ }),

/***/ "../../../../../../ng2-timeout-dialog/dist/src/timeout.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeout_service__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.service.js");


var TimeoutDirective = (function () {
    function TimeoutDirective(timeoutService) {
        this.timeoutService = timeoutService;
        this.timeout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.warningIsActive = false;
    }
    TimeoutDirective.prototype.ngOnDestroy = function () {
        this.clearTimeout();
        this.setWarningState(false);
    };
    TimeoutDirective.prototype.ngOnInit = function () {
        if (!this.warningAfter) {
            this.warningAfter = this.timeoutAfter;
        }
        if (parseInt(this.warningAfter, 10) > parseInt(this.timeoutAfter, 10)) {
            throw new Error('warningAfter value can not be higher then timeoutAfter');
        }
        this.startTimeoutCounting(parseInt(this.warningAfter, 10));
    };
    TimeoutDirective.prototype.resetTimeout = function () {
        this.clearTimeout();
        this.setWarningState(false);
        this.startTimeoutCounting(parseInt(this.warningAfter, 10));
    };
    TimeoutDirective.prototype.clearTimeout = function () {
        window.clearTimeout(this.timeoutId);
    };
    TimeoutDirective.prototype.startTimeoutCounting = function (seconds) {
        this.timeoutId = window.setTimeout(this.handleTimeout(), seconds * 1000);
    };
    TimeoutDirective.prototype.handleTimeout = function () {
        var _this = this;
        return function () {
            _this.clearTimeout();
            if (parseInt(_this.timeoutAfter, 10) === parseInt(_this.warningAfter, 10) || _this.warningIsActive) {
                _this.setWarningState(false);
                _this.timeout.emit();
            }
            else {
                _this.setWarningState(true);
                _this.startTimeoutCounting(parseInt(_this.timeoutAfter, 10) - parseInt(_this.warningAfter, 10));
            }
        };
    };
    TimeoutDirective.prototype.setWarningState = function (val) {
        this.warningIsActive = val;
        this.timeoutService.setState(val);
    };
    TimeoutDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: 'sh-timeout'
                },] },
    ];
    /** @nocollapse */
    TimeoutDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__timeout_service__["a" /* TimeoutService */], },
    ]; };
    TimeoutDirective.propDecorators = {
        'timeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'timeoutAfter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'warningAfter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'resetTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['window:click',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['window:contextmenu',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['window:keydown',] },],
    };
    return TimeoutDirective;
}());



/***/ }),

/***/ "../../../../../../ng2-timeout-dialog/dist/src/timeout.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShTimeoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeout_directive__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeout_component__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timeout_service__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/src/timeout.service.js");





var ShTimeoutModule = (function () {
    function ShTimeoutModule() {
    }
    ShTimeoutModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
                    ],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_2__timeout_directive__["a" /* TimeoutDirective */],
                        __WEBPACK_IMPORTED_MODULE_3__timeout_component__["a" /* TimeoutComponent */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_2__timeout_directive__["a" /* TimeoutDirective */],
                        __WEBPACK_IMPORTED_MODULE_3__timeout_component__["a" /* TimeoutComponent */]
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_4__timeout_service__["a" /* TimeoutService */]
                    ]
                },] },
    ];
    /** @nocollapse */
    ShTimeoutModule.ctorParameters = function () { return []; };
    return ShTimeoutModule;
}());



/***/ }),

/***/ "../../../../../../ng2-timeout-dialog/dist/src/timeout.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);


var TimeoutService = (function () {
    function TimeoutService() {
        this.$timeout = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    Object.defineProperty(TimeoutService.prototype, "timeoutObservable", {
        get: function () {
            return this.$timeout.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TimeoutService.prototype.setState = function (val) {
        this.$timeout.next(val);
    };
    TimeoutService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    TimeoutService.ctorParameters = function () { return []; };
    return TimeoutService;
}());



/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<sh-timeout [timeoutAfter]=\"10\" [warningAfter]=\"2\" (timeout)=\"onTimeout()\">\n\n</sh-timeout>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io//\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.onTimeout = function () {
        alert('timeout callback fired!');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_timeout_dialog__ = __webpack_require__("../../../../../../ng2-timeout-dialog/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_timeout_dialog__["a" /* ShTimeoutModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map