webpackJsonp([5],{

/***/ "../../../../../src/app/layout/managerstock/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.libellepoint.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterSuiviClient"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managerstock_component__ = __webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerstockRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__managerstock_component__["a" /* ManagerstockComponent */] }
];
var ManagerstockRoutingModule = (function () {
    function ManagerstockRoutingModule() {
    }
    return ManagerstockRoutingModule;
}());
ManagerstockRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ManagerstockRoutingModule);

//# sourceMappingURL=managerstock-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <ul class=\"nav nav-tabs  justify-content-center\" style=\"text-align: center; margin: 0 auto\">\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[0]}\" (click)=\"menustockClick(0)\">Nouvel arrivage</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[1]}\" (click)=\"menustockClick(1)\">En vedette</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[2]}\" (click)=\"menustockClick(2)\">Femme</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[3]}\" (click)=\"menustockClick(3)\">Promo</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[4]}\" (click)=\"menustockClick(4)\">Homme</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[5]}\" (click)=\"menustockClick(5)\">Electronique</a></li>\r\n    </ul>\r\n\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[0]\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !arrivals[0], 'btn-success': arrivals[0]}\" (click)=\"menu1stockClick(0,0)\" style=\"margin-bottom: 1rem\">NOUVEAUTES</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !arrivals[1], 'btn-success': arrivals[1]}\" (click)=\"menu1stockClick(0,1)\" style=\"margin-bottom: 1rem\">EN VEDETTE</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !arrivals[2], 'btn-success': arrivals[2]}\" (click)=\"menu1stockClick(0,2)\" style=\"margin-bottom: 1rem\">MEILLEURES VENTES</button>\r\n    </div>\r\n\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[1]\" >\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !featured[0], 'btn-success': featured[0]}\" (click)=\"menu1stockClick(1,0)\" style=\"margin-bottom: 1rem\">EN VEDETTE</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !featured[1], 'btn-success': featured[1]}\" (click)=\"menu1stockClick(1,1)\" style=\"margin-bottom: 1rem\">DERNIER CRI</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !featured[2], 'btn-success': featured[2]}\" (click)=\"menu1stockClick(1,2)\" style=\"margin-bottom: 1rem\">MEILLEURES VENTES</button>\r\n    </div>\r\n\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[2]\" >\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !femme[0], 'btn-success': femme[0]}\" (click)=\"menu1stockClick(2,0)\" style=\"margin-bottom: 1rem\">HABITS</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !femme[1], 'btn-success': femme[1]}\" (click)=\"menu1stockClick(2,1)\" style=\"margin-bottom: 1rem\">TOPS</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !femme[2], 'btn-success': femme[2]}\" (click)=\"menu1stockClick(2,2)\" style=\"margin-bottom: 1rem\">SACS A MAIN</button>\r\n    </div>\r\n\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[3]\" >\r\n    </div>\r\n\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[4]\" >\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !homme[0], 'btn-success': homme[0]}\" (click)=\"menu1stockClick(4,0)\" style=\"margin-bottom: 1rem\">VETEMENTS</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !homme[1], 'btn-success': homme[1]}\" (click)=\"menu1stockClick(4,1)\" style=\"margin-bottom: 1rem\">CHAUSSURES</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !homme[2], 'btn-success': homme[2]}\" (click)=\"menu1stockClick(4,2)\" style=\"margin-bottom: 1rem\">ACCESSOIRES</button>\r\n    </div>\r\n\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[5]\" >\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !elctronique[0], 'btn-success': elctronique[0]}\" (click)=\"menu1stockClick(5,0)\" style=\"margin-bottom: 1rem\">NOUVEAUTES</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !elctronique[1], 'btn-success': elctronique[1]}\" (click)=\"menu1stockClick(5,1)\" style=\"margin-bottom: 1rem\">EN VEDETTE</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !elctronique[2], 'btn-success': elctronique[2]}\" (click)=\"menu1stockClick(5,2)\" style=\"margin-bottom: 1rem\">DERNIER CRI VENTES</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !elctronique[3], 'btn-success': elctronique[3]}\" (click)=\"menu1stockClick(5,3)\" style=\"margin-bottom: 1rem\">MEILLEURES VENTES</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerstockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagerstockComponent = (function () {
    function ManagerstockComponent() {
        this.data = [];
        this.listarticlesvuweb = [
            { id: 1, designation: 'web 1', nomImg: 'bb.jpg' },
            { id: 2, designation: 'web 2', nomImg: 'mc.jpg' },
            { id: 3, designation: 'web 3', nomImg: 'bbb.jpg' },
            { id: 4, designation: 'web 4', nomImg: 'fs.jpg' },
            { id: 5, designation: 'web 5', nomImg: 'bbb.jpg' },
        ];
        this.listarticlesfrompv = [
            { id: 1, designation: 'as', description: 'test 1', nomImg: 'bfa.jpg' },
            { id: 2, designation: 'az', description: 'test 1', nomImg: 'hs.jpg' },
            { id: 3, designation: 'ae', description: 'test 1', nomImg: 'nf.jpg' },
            { id: 4, designation: 'ar', description: 'test 1', nomImg: 'n.jpg' },
            { id: 5, designation: 'at', description: 'test 1', nomImg: 'bea.jpg' },
            { id: 6, designation: 'ay', description: 'test 1', nomImg: 'bha.jpg' },
        ];
        this.menustock = [true, false, false, false, false];
        this.arrivals = [true, false, false];
        this.featured = [true, false, false];
        this.femme = [true, false, false];
        this.homme = [true, false, false];
        this.elctronique = [true, false, false, false];
    }
    ManagerstockComponent.prototype.ngOnInit = function () {
        this.listearticlesselectionner = {
            vuweb: this.listarticlesvuweb, frompv: this.listarticlesfrompv
        };
    };
    ManagerstockComponent.prototype.menustockClick = function (option) {
        this.menustock = this.menustock.map(function (x) { return false; });
        this.menustock[option] = true;
    };
    ManagerstockComponent.prototype.menu1stockClick = function (menu1, menu2) {
        if (menu1 == 0) {
            this.arrivals = this.arrivals.map(function (x) { return false; });
            this.arrivals[menu2] = true;
        }
        if (menu1 == 1) {
            this.featured = this.featured.map(function (x) { return false; });
            this.featured[menu2] = true;
        }
        if (menu1 == 2) {
            this.femme = this.femme.map(function (x) { return false; });
            this.femme[menu2] = true;
        }
        if (menu1 == 4) {
            this.homme = this.homme.map(function (x) { return false; });
            this.homme[menu2] = true;
        }
        if (menu1 == 5) {
            this.elctronique = this.elctronique.map(function (x) { return false; });
            this.elctronique[menu2] = true;
        }
    };
    return ManagerstockComponent;
}());
ManagerstockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-managerstock',
        template: __webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__["a" /* AssignationSuiviService */]],
    }),
    __metadata("design:paramtypes", [])
], ManagerstockComponent);

//# sourceMappingURL=managerstock.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progressionby_progressionby_module__ = __webpack_require__("../../../../../src/app/layout/progressionby/progressionby.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ratingbyoption_ratingbyoption_module__ = __webpack_require__("../../../../../src/app/layout/ratingbyoption/ratingbyoption.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managerstock_component__ = __webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managerstock_routing_module__ = __webpack_require__("../../../../../src/app/layout/managerstock/managerstock-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/managerstock/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__zones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/managerstock/zones-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__souszones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/managerstock/souszones-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stockmanaging_stockmanaging_component__ = __webpack_require__("../../../../../src/app/layout/stockmanaging/stockmanaging.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerstockModule", function() { return ManagerstockModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ManagerstockModule = (function () {
    function ManagerstockModule() {
    }
    return ManagerstockModule;
}());
ManagerstockModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__managerstock_routing_module__["a" /* ManagerstockRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6__progressionby_progressionby_module__["a" /* ProgressionbyModule */],
            __WEBPACK_IMPORTED_MODULE_7__ratingbyoption_ratingbyoption_module__["a" /* RatingbyoptionModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__managerstock_component__["a" /* ManagerstockComponent */],
            __WEBPACK_IMPORTED_MODULE_12__data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_13__zones_filter_pipe__["a" /* ZonesFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_14__souszones_filter_pipe__["a" /* SousZonesFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__stockmanaging_stockmanaging_component__["a" /* StockmanagingComponent */]
        ]
    })
], ManagerstockModule);

//# sourceMappingURL=managerstock.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/souszones-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SousZonesFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SousZonesFilterPipe = (function () {
    function SousZonesFilterPipe() {
    }
    SousZonesFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.sous_zone.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return SousZonesFilterPipe;
}());
SousZonesFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "souszonesFilter"
    })
], SousZonesFilterPipe);

//# sourceMappingURL=souszones-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/zones-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonesFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ZonesFilterPipe = (function () {
    function ZonesFilterPipe() {
    }
    ZonesFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.zone.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return ZonesFilterPipe;
}());
ZonesFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "zonesFilter"
    })
], ZonesFilterPipe);

//# sourceMappingURL=zones-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/stockmanaging/stockmanaging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fuid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <em style=\"text-align: center; margin: 0 auto\">Articles affichés sur le site</em>\r\n            <pagination-template #p=\"paginationApi\" [id]=\"'second'\" (pageChange)=\"p20 = $event\">\r\n                <div class=\"custom-pagination\">\r\n                    <div class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" style=\"text-align: center\">\r\n                        <a *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\"> <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i> </a>\r\n                    </div>\r\n\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlesvuweb  | paginate: { itemsPerPage: 2, currentPage: p20 , id: 'second'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                            <input type=\"checkbox\" name=\"items\" value=\"{{article.value}}\"\r\n                                   [(ngModel)]=\"article.checked\" (change)=\"updateCheckedOptionsvuweb()\"\r\n                            />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" style=\"text-align: center\">\r\n                        <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\"> <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i> </a>\r\n                    </div>\r\n                </div>\r\n            </pagination-template>\r\n            <div style=\"text-align: center; margin-top: 1rem; \" >\r\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"open(contentApercu, article)\"> Apercu avant validation</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-9\">\r\n            <em>Tous les articles</em>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4 card\" *ngFor=\"let article of listarticlesfrompv  | paginate: { itemsPerPage: 3, currentPage: p10 , id: 'first'}\">\r\n                    <img class=\"card-img-top\" src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\"  alt=\"Card image cap\" width=\"200\" height=\"200\">\r\n                    <div class=\"card-block\" style=\"text-align: center ;\">\r\n                        <h4 class=\"card-title\">{{article.designation}}</h4>\r\n                        <p class=\"card-text\">{{article.description}}</p>\r\n                        <span *ngIf=\"!article.checked\"><button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"article.checked = true; updateCheckedOptionsfrompv()\">\r\n                            <i class=\"fa fa-square-o\" aria-hidden=\"true\"></i> Cocher\r\n                        </button></span>\r\n                        <span *ngIf=\"article.checked\"><button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"article.checked = false; updateCheckedOptionsfrompv()\">\r\n                            <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Décocher\r\n                        </button></span>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"open(content, article)\"> Modifier</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row text-center center-block\" style=\"margin-top: 3rem; margin-bottom: 5rem; margin-right: auto; margin-left: auto; text-align: center\">\r\n                <pagination-controls previousLabel=\"Précedent\" nextLabel=\"Suivant\" (pageChange)=\"p10 = $event\" id=\"first\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-header\" *ngIf=\"article\">\r\n        <h4 class=\"modal-title\">Modification de l'article</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"card\" >\r\n            <img class=\"card-img-top\" src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\"  alt=\"Card image cap\" width=\"200\" height=\"200\">\r\n            <div class=\"card-block\" style=\"text-align: center ;\">\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"file\" class=\"form-control-file\" id=\"imagearticle\" accept=\".jpg, .jpeg, .png\" title=\"Changer l'image\" ngFileSelect>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"designationarticle\" class=\"col-sm-2 col-form-label\">Désignation</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"designationarticle\" placeholder=\"Désignation\" [(ngModel)]=\"article.designation\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"descriptionarcticle\" class=\"col-sm-2 col-form-label\">Description</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <textarea class=\"form-control\" id=\"descriptionarcticle\" rows=\"3\" [(ngModel)]=\"article.description\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"validmodifarticle(); c('Close click')\">Valider modification</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ng-template>\r\n\r\n<ng-template #contentApercu let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Apercu</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <em style=\"text-align: center; margin: 0 auto\">Articles à retirer</em>\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlesretirer | paginate: { itemsPerPage: 2, currentPage: p3 , id: 'third'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <em style=\"text-align: center; margin: 0 auto\">Articles à rajouter</em>\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlesrajouter | paginate: { itemsPerPage: 2, currentPage: p4 , id: 'four'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <em style=\"text-align: center; margin: 0 auto\">Articles pour comparer</em>\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlescomparer  | paginate: { itemsPerPage: 2, currentPage: p5 , id: 'five'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <pagination-controls directionLinks=\"false\" (pageChange)=\"p3 = $event\" id=\"third\"></pagination-controls>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <pagination-controls directionLinks=\"false\" (pageChange)=\"p4 = $event\" id=\"four\"></pagination-controls>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <pagination-controls directionLinks=\"false\" (pageChange)=\"p5 = $event\" id=\"five\"></pagination-controls>\r\n                </div>\r\n            </div>\r\n            <hr/>\r\n            <div class=\"row\" style=\"margin: 0 auto; text-align: center; width: 10%; margin-top: 1rem; margin-bottom: 1rem\">\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"validarcticleafficher(); c('Close click')\">Valider</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/stockmanaging/stockmanaging.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/stockmanaging/stockmanaging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockmanagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockmanagingComponent = (function () {
    function StockmanagingComponent(modalService) {
        this.modalService = modalService;
        this.listarticlesvuweb = [];
        this.listarticlesfrompv = [];
        this.listarticlesretirer = [];
        this.listarticlesrajouter = [];
        this.listarticlescomparer = [];
    }
    StockmanagingComponent.prototype.ngOnInit = function () {
        this.listarticlesvuweb = this.listeacrticles.vuweb.map(function (type) {
            return { id: type.id, designation: type.designation, nomImg: type.nomImg, value: type.id, checked: false };
        });
        this.listarticlesfrompv = this.listeacrticles.frompv.map(function (type) {
            return { id: type.id, designation: type.designation, description: type.description,
                nomImg: type.nomImg, value: type.id, checked: false
            };
        });
        this.listarticlescomparer = this.listarticlesfrompv;
    };
    Object.defineProperty(StockmanagingComponent.prototype, "selectedOptionsvuweb", {
        get: function () {
            return this.listarticlesvuweb.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    StockmanagingComponent.prototype.updateCheckedOptionsvuweb = function () {
        this.listarticlesretirer = this.listarticlesvuweb.filter(function (opt) { return opt.checked; });
    };
    Object.defineProperty(StockmanagingComponent.prototype, "selectedOptionsfrompv", {
        get: function () {
            return this.listarticlesfrompv.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    StockmanagingComponent.prototype.updateCheckedOptionsfrompv = function () {
        this.listarticlesrajouter = this.listarticlesfrompv.filter(function (opt) { return opt.checked; });
        this.listarticlescomparer = this.listarticlesfrompv.filter(function (opt) { return !opt.checked; });
    };
    StockmanagingComponent.prototype.open = function (content, article) {
        var _this = this;
        this.article = article;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StockmanagingComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    StockmanagingComponent.prototype.validmodifarticle = function () {
        console.log('validmodifarticle');
    };
    StockmanagingComponent.prototype.validarcticleafficher = function () {
        console.log('validarcticleafficher');
    };
    return StockmanagingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StockmanagingComponent.prototype, "listeacrticles", void 0);
StockmanagingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stockmanaging',
        template: __webpack_require__("../../../../../src/app/layout/stockmanaging/stockmanaging.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/stockmanaging/stockmanaging.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], StockmanagingComponent);

var _a;
//# sourceMappingURL=stockmanaging.component.js.map

/***/ }),

/***/ "../../../../ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: config.itemsPerPage || 0,
            currentPage: config.currentPage || 1,
            totalItems: config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    return PaginatePipe;
}());
PaginatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'paginate',
                pure: false
            },] },
];
/** @nocollapse */
PaginatePipe.ctorParameters = function () { return [
    { type: PaginationService, },
]; };

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */ var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < p.getCurrent()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    return PaginationControlsComponent;
}());
PaginationControlsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'pagination-controls',
                template: DEFAULT_TEMPLATE,
                styles: [DEFAULT_STYLES],
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
PaginationControlsComponent.ctorParameters = function () { return []; };
PaginationControlsComponent.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    return PaginationControlsDirective;
}());
PaginationControlsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            },] },
];
/** @nocollapse */
PaginationControlsDirective.ctorParameters = function () { return [
    { type: PaginationService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
PaginationControlsDirective.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    return NgxPaginationModule;
}());
NgxPaginationModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            },] },
];
/** @nocollapse */
NgxPaginationModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=5.chunk.js.map