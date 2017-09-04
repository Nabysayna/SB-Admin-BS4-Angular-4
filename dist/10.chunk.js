webpackJsonp([10],{

/***/ "../../../../../src/app/layout/manager/manager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_component__ = __webpack_require__("../../../../../src/app/layout/manager/manager.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__manager_component__["a" /* ManagerComponent */] }
];
var ManagerRoutingModule = (function () {
    function ManagerRoutingModule() {
    }
    return ManagerRoutingModule;
}());
ManagerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ManagerRoutingModule);

//# sourceMappingURL=manager-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/manager/manager.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header\">Manager</h3>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\" >\r\n    <div class=\"page-header col-xs-12 col-sm-12\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Performances globales\r\n            </div>\r\n            <div class=\"card-block\">\r\n\t\t\t\t  <div style=\"display: block\">\r\n\t\t\t\t  <canvas height=\"100\" baseChart\r\n\t\t\t\t              [data]=\"doughnutChartData\"\r\n\t\t\t\t              [labels]=\"doughnutChartLabels\"\r\n\t\t\t\t              [chartType]=\"doughnutChartType\"\r\n\t\t\t\t              (chartHover)=\"chartHovered($event)\"\r\n\t\t\t\t              (chartClick)=\"chartClicked($event)\">       \t\r\n\t\t\t\t  </canvas>\r\n\t\t\t\t</div>\r\n            </div>\r\n        </div>\r\n    </div>    \r\n</div>\r\n<div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n\t\t        <table class=\"table table-hover\" [mfData]=\"datamanager\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBymanager\" [(mfSortOrder)]=\"sortOrder\">\r\n\t                <thead>\r\n\t                    <tr>\r\n\t                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n\t                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n\t                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n\t                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n\t                        <th><mfDefaultSorter by=\"note\">Note</mfDefaultSorter></th>\r\n\t                        <th><mfDefaultSorter by=\"commentaire\">Commentaire</mfDefaultSorter></th>\r\n\t                    </tr>\r\n\t                </thead>\r\n\t                <tbody>\r\n\t                    <tr>\r\n\t                        <td>OKA</td>\r\n\t                        <td>Assane KA</td>\r\n\t                        <td>775054827</td>\r\n\t                        <td>Keur Mbaye Fall</td>\r\n\t                        <td>8</td>\r\n\t                        <td>efficace</td>\r\n\t                    </tr>\r\n\t                </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n\t</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/manager/manager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/manager/manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerComponent = (function () {
    function ManagerComponent() {
        this.datamanager = [
            {
                "administratif": "Naby NDIAYE",
                "tel": "11",
                "dateassignation": "2016-01-09 14:48:34",
                "adresse": "Paglieta",
                "service": "Dakar centre",
                "objectif": 10,
                "realisation": 6,
            },
            {
                "administratif": "Khady Ndiaye",
                "tel": "134",
                "dateassignation": "2015-11-02 07:59:34-08:00",
                "adresse": "Andenne",
                "service": "Dakar centre",
                "objectif": 7,
                "realisation": 5,
            },
            {
                "administratif": "Abda Barry",
                "tel": "145",
                "dateassignation": "2017-02-25 15:42:17-08:00",
                "adresse": "HomprŽ",
                "service": "Dakar centre",
                "objectif": 9,
                "realisation": 2,
            }
        ];
        this.doughnutChartLabels = ['Objectifs non atteints', 'Objectifs atteints'];
        this.doughnutChartData = [350, 650];
        this.doughnutChartType = 'doughnut';
    }
    ManagerComponent.prototype.ngOnInit = function () { };
    // events
    ManagerComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ManagerComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return ManagerComponent;
}());
ManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manager',
        template: __webpack_require__("../../../../../src/app/layout/manager/manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/manager/manager.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ManagerComponent);

//# sourceMappingURL=manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/manager/manager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manager_component__ = __webpack_require__("../../../../../src/app/layout/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manager_routing_module__ = __webpack_require__("../../../../../src/app/layout/manager/manager-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ManagerFilterPipe }   from '../../pipe/managerFilter.pipe';
var ManagerModule = (function () {
    function ManagerModule() {
    }
    return ManagerModule;
}());
ManagerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__manager_routing_module__["a" /* ManagerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__manager_component__["a" /* ManagerComponent */],
        ]
    })
], ManagerModule);

//# sourceMappingURL=manager.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map