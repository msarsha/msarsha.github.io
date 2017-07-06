webpackJsonp([1],{

/***/ "../../../../../../index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sh_context_menu_module__ = __webpack_require__("../../../../../../src/sh-context-menu.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_sh_context_menu_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_sh_context_item__ = __webpack_require__("../../../../../../src/sh-context-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_sh_context_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_sh_context_item__);
/* unused harmony reexport IShContextMenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_sh_context_options__ = __webpack_require__("../../../../../../src/sh-context-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_sh_context_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_sh_context_options__);
/* unused harmony reexport IShContextOptions */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../src/html.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HtmlDirective = (function () {
    function HtmlDirective(elmRef) {
        this.elmRef = elmRef;
    }
    HtmlDirective.prototype.ngAfterContentInit = function () {
        this.elmRef.nativeElement.insertAdjacentHTML('afterbegin', this.content);
    };
    return HtmlDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('sh-html'),
    __metadata("design:type", Object)
], HtmlDirective.prototype, "content", void 0);
HtmlDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '[sh-html]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object])
], HtmlDirective);

var _a;
//# sourceMappingURL=html.directive.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-default-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextDefaultOptions; });
var ShContextDefaultOptions = {
    rtl: false,
    theme: 'light'
};
//# sourceMappingURL=sh-context-default-options.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-item.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=sh-context-item.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sh_context_service__ = __webpack_require__("../../../../../../src/sh-context-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShContextMenuComponent = (function () {
    function ShContextMenuComponent(ctxService) {
        this.ctxService = ctxService;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* EventEmitter */]();
    }
    ShContextMenuComponent.prototype.ngOnInit = function () {
        this.options = this.ctxService.getOptions();
    };
    ShContextMenuComponent.prototype.ngAfterContentInit = function () {
        if (this.options.rtl)
            this.setRtlLocation();
    };
    ShContextMenuComponent.prototype.close = function () {
        this.onClose.emit();
    };
    ShContextMenuComponent.prototype.onClick = function (item) {
        if (this.isItemDisabled(item))
            return;
        if (item.onClick) {
            item.onClick({
                menuItem: item,
                dataContext: this.dataContext
            });
            this.close();
        }
    };
    ShContextMenuComponent.prototype.isItemDisabled = function (item) {
        if (!item.disabled)
            return false;
        return item.disabled(this.dataContext);
    };
    ShContextMenuComponent.prototype.isItemVisible = function (item) {
        if (!item.visible)
            return true;
        return item.visible(this.dataContext);
    };
    ShContextMenuComponent.prototype.setRtlLocation = function () {
        var elmRect = this.childRef.nativeElement.getClientRects()[0];
        this.position.left = this.position.left - elmRect.width;
    };
    return ShContextMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ShContextMenuComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], ShContextMenuComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ShContextMenuComponent.prototype, "dataContext", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Output */])(),
    __metadata("design:type", Object)
], ShContextMenuComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* ViewChild */])('childRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], ShContextMenuComponent.prototype, "childRef", void 0);
ShContextMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Component */])({
        selector: 'sh-context-menu',
        template: "\n    <div #childRef class=\"sh-context--container\"\n      [class.dark]=\"options.theme == 'dark'\"\n      [style.left]=\"position.left + 'px'\"\n      [style.top]=\"position.top + 'px'\"\n      [style.direction]=\"(options.rtl ? 'rtl' : 'ltr' )\">\n      <ul>\n          <li *ngFor=\"let item of items\"\n            [ngClass]=\"{'sh-menu-item': !item.divider, 'sh-context-divider': item.divider, 'sh-menu-disabled': isItemDisabled(item), 'sh-menu-hidden': !isItemVisible(item)}\"\n            (click)=\"onClick(item)\">\n              <div *ngIf=\"!item.divider && !item.subMenu\" [sh-html]=\"item.label\">\n              </div> \n              <div *ngIf=\"item.subMenu\"\n                [sh-context-sub-menu]=\"item.subMenuItems\"\n                [sh-data-context]=\"dataContext\"\n                (closeSubMenu)=\"close()\"\n                [sh-html]=\"item.label\">\n               <div [ngClass]=\"{'right-arrow': !options.rtl, 'left-arrow': options.rtl}\"></div>\n              </div>\n          </li>\n      </ul>\n    </div>\n",
        styles: ["\n  .sh-context--container{\n    font-family: sans-serif;\n    position: fixed;\n    background: #ececec;\n    min-width: 150px;\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    z-index: 100;\n    color: black;\n  }\n  .dark{\n      background:#383737 !important;\n      color:white !important;\n    }\n  .sh-context--container ul{\n    list-style: none;\n    padding: 5px 0;\n    margin: 0;\n  }\n\n  .sh-context--container ul li{\n      padding: 5px 10px 5px 15px;\n      transition: all 0.15s;\n  }\n\n  .sh-context--container ul li.sh-context-divider{\n      height: 1px;\n      margin: 1px 1px 8px 1px;\n      overflow: hidden;\n      border-bottom: 1px solid #d0d0d0;\n      line-height: 10px;\n    }\n\n  .sh-context--container ul li.sh-menu-item:hover{\n      cursor: pointer;\n      background: #4b8bec;\n      color: white;\n  }\n \n   .sh-context--container.dark ul li.sh-menu-item:hover{\n      cursor: pointer;\n      background: #4b8bec;\n      color: white;\n  }\n  .sh-context--container ul li.sh-menu-disabled{\n      color: #d0d0d0;\n   }\n\n   .sh-context--container ul li.sh-menu-item.sh-menu-hidden{\n      display: none;\n   }\n\n  .sh-context--container ul li.sh-menu-disabled:hover{\n      cursor: not-allowed;\n      color: #d0d0d0;\n      background: #ececec;\n  }\n\n  .right-arrow{\n    float: right;\n    margin-left: 10px;\n    margin-top: 3px;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-left: 8px solid black;\n  }\n\n  .left-arrow{\n    float: left;\n    margin-right: 10px;\n    margin-top: 3px;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-right: 8px solid black;\n  }\n"]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__sh_context_service__["b" /* ShContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__sh_context_service__["b" /* ShContextService */]) === "function" && _b || Object])
], ShContextMenuComponent);

var _a, _b;
//# sourceMappingURL=sh-context-menu.component.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-menu.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sh_context_service__ = __webpack_require__("../../../../../../src/sh-context-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sh_context_overlay_component__ = __webpack_require__("../../../../../../src/sh-context-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sh_context_menu_component__ = __webpack_require__("../../../../../../src/sh-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sh_context_options__ = __webpack_require__("../../../../../../src/sh-context-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sh_context_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sh_context_options__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextMenuDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShContextMenuDirective = (function () {
    function ShContextMenuDirective(viewRef, resolver, ctxService) {
        this.viewRef = viewRef;
        this.resolver = resolver;
        this.ctxService = ctxService;
    }
    ShContextMenuDirective.prototype.onClick = function (event) {
        this.options = this.ctxService.setOptions(this.options);
        this.closeMenu();
        this.ctxComponent = this.createContextComponent();
        this.overlayComponent = this.createOverlayComponent();
        this.registerBindings();
        this.registerEvents();
        this.setLocation(event);
        return false;
    };
    ShContextMenuDirective.prototype.registerEvents = function () {
        var _this = this;
        this.ctxComponent.instance.onClose.subscribe(function () {
            _this.closeMenu();
        });
        this.overlayComponent.instance.onClick.subscribe(function () { _this.closeMenu(); });
    };
    ShContextMenuDirective.prototype.registerBindings = function () {
        this.ctxComponent.instance.items = this.menuItems;
        this.ctxComponent.instance.dataContext = this.dataContext;
    };
    ShContextMenuDirective.prototype.createContextComponent = function () {
        var shContextMenuFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__sh_context_menu_component__["a" /* ShContextMenuComponent */]);
        var shContextComponentRef = this.viewRef.createComponent(shContextMenuFactory);
        return shContextComponentRef;
    };
    ShContextMenuDirective.prototype.createOverlayComponent = function () {
        var shContextOverlayFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__sh_context_overlay_component__["a" /* ShContextOverlayComponent */]);
        var shContextOverlayRef = this.viewRef.createComponent(shContextOverlayFactory);
        return shContextOverlayRef;
    };
    ShContextMenuDirective.prototype.setLocation = function (event) {
        var clientX = event.clientX, clientY = event.clientY;
        var position = {
            top: clientY,
            left: clientX
        };
        this.ctxComponent.instance.position = position;
    };
    ShContextMenuDirective.prototype.closeMenu = function () {
        this.viewRef.clear();
    };
    return ShContextMenuDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Input */])('sh-context'),
    __metadata("design:type", Array)
], ShContextMenuDirective.prototype, "menuItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Input */])('sh-data-context'),
    __metadata("design:type", Object)
], ShContextMenuDirective.prototype, "dataContext", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Input */])('sh-options'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__sh_context_options__["IShContextOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sh_context_options__["IShContextOptions"]) === "function" && _a || Object)
], ShContextMenuDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* HostListener */])('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShContextMenuDirective.prototype, "onClick", null);
ShContextMenuDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Directive */])({
        selector: '[sh-context]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* ComponentFactoryResolver */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__sh_context_service__["b" /* ShContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__sh_context_service__["b" /* ShContextService */]) === "function" && _d || Object])
], ShContextMenuDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=sh-context-menu.directive.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_directive__ = __webpack_require__("../../../../../../src/html.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sh_context_overlay_component__ = __webpack_require__("../../../../../../src/sh-context-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sh_context_menu_directive__ = __webpack_require__("../../../../../../src/sh-context-menu.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sh_context_menu_component__ = __webpack_require__("../../../../../../src/sh-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sh_context_sub_menu_directive__ = __webpack_require__("../../../../../../src/sh-context-sub-menu.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sh_context_service__ = __webpack_require__("../../../../../../src/sh-context-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextMenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ShContextMenuModule = (function () {
    function ShContextMenuModule() {
    }
    return ShContextMenuModule;
}());
ShContextMenuModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__sh_context_menu_directive__["a" /* ShContextMenuDirective */],
            __WEBPACK_IMPORTED_MODULE_5__sh_context_menu_component__["a" /* ShContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sh_context_sub_menu_directive__["a" /* ShContextSubMenuDirective */],
            __WEBPACK_IMPORTED_MODULE_3__sh_context_overlay_component__["a" /* ShContextOverlayComponent */],
            __WEBPACK_IMPORTED_MODULE_2__html_directive__["a" /* HtmlDirective */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__sh_context_menu_directive__["a" /* ShContextMenuDirective */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__sh_context_service__["a" /* ShContextServiceModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__sh_context_menu_component__["a" /* ShContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_3__sh_context_overlay_component__["a" /* ShContextOverlayComponent */]
        ]
    })
], ShContextMenuModule);

//# sourceMappingURL=sh-context-menu.module.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-options.ts":
/***/ (function(module, exports) {

;
//# sourceMappingURL=sh-context-options.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-overlay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextOverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShContextOverlayComponent = (function () {
    function ShContextOverlayComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    return ShContextOverlayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Output */])(),
    __metadata("design:type", Object)
], ShContextOverlayComponent.prototype, "onClick", void 0);
ShContextOverlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Component */])({
        selector: 'sh-context-overlay',
        template: "<div class=\"sh-context-overlay\" (mousedown)=\"onClick.emit()\"></div>",
        styles: ["\n    .sh-context-overlay{\n      position: fixed;\n      top:0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 99;\n      background-color: transparent;\n   }\n  "]
    })
], ShContextOverlayComponent);

//# sourceMappingURL=sh-context-overlay.component.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sh_context_default_options__ = __webpack_require__("../../../../../../src/sh-context-default-options.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShContextService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextServiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ShContextService = (function () {
    function ShContextService() {
    }
    ShContextService.prototype.setOptions = function (opts) {
        this.options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__sh_context_default_options__["a" /* ShContextDefaultOptions */], opts);
        return this.options;
    };
    ShContextService.prototype.getOptions = function () {
        return this.options;
    };
    return ShContextService;
}());
ShContextService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ShContextService);

var ShContextServiceModule = (function () {
    function ShContextServiceModule() {
    }
    return ShContextServiceModule;
}());
ShContextServiceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [ShContextService]
    })
], ShContextServiceModule);

//# sourceMappingURL=sh-context-service.js.map

/***/ }),

/***/ "../../../../../../src/sh-context-sub-menu.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sh_context_menu_component__ = __webpack_require__("../../../../../../src/sh-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sh_context_service__ = __webpack_require__("../../../../../../src/sh-context-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextSubMenuDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShContextSubMenuDirective = (function () {
    function ShContextSubMenuDirective(viewRef, elmRef, resolver, ctxService) {
        this.viewRef = viewRef;
        this.elmRef = elmRef;
        this.resolver = resolver;
        this.ctxService = ctxService;
        this.closeSubMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    ShContextSubMenuDirective.prototype.ngOnInit = function () {
        this.options = this.ctxService.getOptions();
    };
    ShContextSubMenuDirective.prototype.onMouseOver = function (event) {
        this.closeCurrent();
        this.ctxComponent = this.createContextComponent();
        this.registerBindings();
        this.registerEvents();
        this.setLocation();
        return false;
    };
    ShContextSubMenuDirective.prototype.registerEvents = function () {
        var _this = this;
        this.ctxComponent.instance.onClose.subscribe(function () {
            _this.closeSubMenu.emit();
        });
    };
    ShContextSubMenuDirective.prototype.registerBindings = function () {
        this.ctxComponent.instance.items = this.menuItems;
        this.ctxComponent.instance.dataContext = this.dataContext;
    };
    ShContextSubMenuDirective.prototype.createContextComponent = function () {
        var shContextMenuFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__sh_context_menu_component__["a" /* ShContextMenuComponent */]);
        var shContextComponentRef = this.viewRef.createComponent(shContextMenuFactory);
        return shContextComponentRef;
    };
    ShContextSubMenuDirective.prototype.setLocation = function () {
        var _a = this.elmRef.nativeElement.getClientRects()[0], top = _a.top, left = _a.left, width = _a.width;
        var position = {
            top: top,
            left: this.options.rtl ? left : left + width
        };
        this.ctxComponent.instance.position = position;
    };
    ShContextSubMenuDirective.prototype.closeMenu = function () {
        this.closeSubMenu.emit();
    };
    ShContextSubMenuDirective.prototype.closeCurrent = function () {
        this.viewRef.clear();
    };
    return ShContextSubMenuDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('sh-context-sub-menu'),
    __metadata("design:type", Array)
], ShContextSubMenuDirective.prototype, "menuItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('sh-data-context'),
    __metadata("design:type", Object)
], ShContextSubMenuDirective.prototype, "dataContext", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Output */])(),
    __metadata("design:type", Object)
], ShContextSubMenuDirective.prototype, "closeSubMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* HostListener */])('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShContextSubMenuDirective.prototype, "onMouseOver", null);
ShContextSubMenuDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '[sh-context-sub-menu]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ViewContainerRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ComponentFactoryResolver */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__sh_context_service__["b" /* ShContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sh_context_service__["b" /* ShContextService */]) === "function" && _d || Object])
], ShContextSubMenuDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=sh-context-sub-menu.directive.js.map

/***/ }),

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box{\r\n   height: 180px;\r\n   width: 180px;\r\n   background-color: #e3e4c2;\r\n   line-height: 140px;\r\n   text-align: center;\r\n   box-shadow: 6px 6px 15px 2px rgba(0,0,0,.3);\r\n   display: inline-block;\r\n   margin: 20px;\r\n}\r\n\r\n.box.box-right{\r\n  float: right;\r\n  width: 240px;\r\n}\r\n\r\ni.menu-icon{\r\n  margin-right: 3px;\r\n  display: inline-block;\r\n  color: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" [sh-context]=\"items\" [sh-data-context]=\"dataCtxOne\">\r\n  <h2>{{title}}</h2>\r\n</div>\r\n<div class=\"box box-right\" [sh-context]=\"itemsRtl\" [sh-data-context]=\"dataCtxTwo\" [sh-options]=\"options\">\r\n  <h2>{{titleRtl}}</h2>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { IShContextMenuItem } from '../../../context-menu/src/sh-context-item';
// import { IShContextOptions } from '../../../context-menu/src/sh-context-options';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Right Click Me';
        this.titleRtl = 'Right Click Me (RTL)';
        this.dataCtxOne = {
            One: 'One'
        };
        this.dataCtxTwo = {
            Two: 'Two'
        };
        this.items = [
            {
                label: '<i class="fa fa-floppy-o menu-icon"></i> Save Me On Your HD',
                onClick: this.clickEvent
            },
            {
                label: 'Edit',
                onClick: this.clickEvent
            },
            {
                label: '<i class="fa fa-home"></i> <b>Sub</b> Menu',
                subMenu: true,
                subMenuItems: [
                    {
                        label: 'Save',
                        onClick: this.clickEvent
                    },
                    {
                        label: 'Edit',
                        onClick: this.clickEvent
                    },
                    {
                        label: 'Another Sub Menu',
                        subMenu: true,
                        subMenuItems: [
                            {
                                label: 'Save',
                                onClick: this.clickEvent
                            },
                            {
                                label: 'Edit',
                                onClick: this.clickEvent
                            }
                        ]
                    }
                ]
            },
            {
                divider: true
            },
            {
                label: 'Remove',
                disabled: function (ctx) {
                    return ctx.Two === 'Two';
                },
                onClick: this.clickEvent
            },
            {
                label: 'Hidden',
                onClick: this.clickEvent,
                visible: function (ctx) {
                    return ctx.One === 'One';
                }
            }
        ];
        this.itemsRtl = [
            {
                label: 'שמור',
                onClick: this.clickEvent
            },
            {
                label: 'ערוך',
                onClick: this.clickEvent
            },
            {
                label: 'תפריט נוסף',
                subMenu: true,
                subMenuItems: [
                    {
                        label: 'שמור',
                        onClick: this.clickEvent
                    },
                    {
                        label: 'ערוך',
                        onClick: this.clickEvent
                    },
                    {
                        label: 'עוד תפריט נוסף',
                        subMenu: true,
                        subMenuItems: [
                            {
                                label: 'שמור',
                                onClick: this.clickEvent
                            },
                            {
                                label: 'ערוך',
                                onClick: this.clickEvent
                            }
                        ]
                    }
                ]
            }
        ];
        this.options = {
            rtl: true,
            theme: 'dark'
        };
    }
    AppComponent.prototype.clickEvent = function ($event) {
        console.log('clicked ', $event);
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_right_click_menu__ = __webpack_require__("../../../../../../index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_right_click_menu__["a" /* ShContextMenuModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map