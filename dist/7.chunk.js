webpackJsonp([7],{

/***/ "../../../../../src/app/layout/manageradmin/filterdata-commercial.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterCommercialPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterCommercialPipe = (function () {
    function DataFilterCommercialPipe() {
    }
    DataFilterCommercialPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.email.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterCommercialPipe;
}());
DataFilterCommercialPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterCommercial"
    })
], DataFilterCommercialPipe);

//# sourceMappingURL=filterdata-commercial.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/manageradmin/filterdata-newpoint.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterNewPointPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterNewPointPipe = (function () {
    function DataFilterNewPointPipe() {
    }
    DataFilterNewPointPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_commercial.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterNewPointPipe;
}());
DataFilterNewPointPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterNewPoint"
    })
], DataFilterNewPointPipe);

//# sourceMappingURL=filterdata-newpoint.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/manageradmin/manageradmin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manageradmin_component__ = __webpack_require__("../../../../../src/app/layout/manageradmin/manageradmin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageradminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__manageradmin_component__["a" /* ManageradminComponent */] }
];
var ManageradminRoutingModule = (function () {
    function ManageradminRoutingModule() {
    }
    return ManageradminRoutingModule;
}());
ManageradminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ManageradminRoutingModule);

//# sourceMappingURL=manageradmin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/manageradmin/manageradmin.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header\"><u>Manager</u></h3>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n  \t<div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\"  style=\"margin-bottom: 1rem;\">Dashboard</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\"  style=\"margin-bottom: 1rem;\">Affectation</button>\r\n\t</div>\r\n    <hr>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\" >\r\n    <div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\" *ngIf=\"dashboardNbres\">\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbrenewpts}}</h4>\r\n                    <p class=\"card-text\">Nouveaux points.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbreptsvalider}}</h4>\r\n                    <p class=\"card-text\">Points validés.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbreptssouscsenntool}}</h4>\r\n                    <p class=\"card-text\">Points souscrits à Sentool.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbrecoms}}</h4>\r\n                    <p class=\"card-text\">Commerciaux.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"commerciaux | dataFilterCommercial: filterQueryCommercial\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageCom\" [(mfSortBy)]=\"sortByCom\" [(mfSortOrder)]=\"sortOrderCom\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"fullname\">Commercial</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"email\">Email</mfDefaultSorter></th>\r\n                        <th> Superviseur affecté </th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryCommercial\"/></th>\r\n                        <th>Total : {{commerciaux.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.email}}</td>\r\n                        <td *ngIf=\"item.id_superviseur && superviseurs && superviseurs.length!=0\">\r\n                            <select name=\"sselectcommercial-{{i}}\"  id=\"sselectcommercial-{{i}}\" class=\"form-control input-sm\" [(ngModel)]=\"item.id_superviseur\">\r\n                                <option  *ngFor=\"let superviseur of superviseurs\" [attr.value]=\"superviseur.id\">{{superviseur.prenom}} {{superviseur.nom}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"reaffectercommercial(item)\"> reaffecter </button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/manageradmin/manageradmin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/manageradmin/manageradmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageradminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageradminComponent = (function () {
    function ManageradminComponent(router, _utilService) {
        this.router = router;
        this._utilService = _utilService;
        this.staticAlertClosed = false;
        this.rowsOnPage = 5;
        this.sortBy = "note";
        this.sortOrder = "desc";
        this.rowsOnPageCom = 10;
        this.sortByCom = "fullname";
        this.sortOrderCom = "asc";
        this.commerciaux = [];
        this.superviseurs = [];
        this.menuHead = { menuHead1: true, menuHead3: false };
    }
    ManageradminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDashboardNbres();
        this.killsetinterval = setInterval(function () {
            _this.getDashboardNbres();
        }, 30000);
    };
    ManageradminComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    ManageradminComponent.prototype.menuHeadClick = function (option) {
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead3 = false;
            this.getDashboardNbres();
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead3 = true;
            this.getComSuperviseurs();
        }
    };
    ManageradminComponent.prototype.toInt = function (num) { return +num; };
    ManageradminComponent.prototype.getDashboardNbres = function () {
        var _this = this;
        this._utilService.getDashboardNbres()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.dashboardNbres = data.message;
                console.log(_this.dashboardNbres);
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () { return console.log('getDashboardNbres'); });
    };
    ManageradminComponent.prototype.getComSuperviseurs = function () {
        var _this = this;
        this._utilService.getComSuperviseurs()
            .subscribe(function (data) {
            console.log(data);
            if (data.errorCode) {
                _this.superviseurs = data.message.superviseurs;
                _this.commerciaux = data.message.commerciaux;
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () { return console.log('getComSuperviseurs'); });
    };
    ManageradminComponent.prototype.getRegionsSuperviseurs = function () {
        var _this = this;
        this._utilService.getRegionsSuperviseurs()
            .subscribe(function (data) {
            console.log(data);
            _this.superviseurs = data.superviseurs;
        }, function (error) { return alert(error); }, function () { return console.log('getRegionsSuperviseurs'); });
    };
    ManageradminComponent.prototype.choixsuperviseurforcommercial = function (id_superviseur) {
        console.log(id_superviseur);
    };
    ManageradminComponent.prototype.reaffectercommercial = function (item) {
        console.log(item);
        this._utilService.affectationCommercial(item)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return alert(error); }, function () { return console.log('affectationCommercial'); });
    };
    return ManageradminComponent;
}());
ManageradminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admincommercial',
        template: __webpack_require__("../../../../../src/app/layout/manageradmin/manageradmin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/manageradmin/manageradmin.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]) === "function" && _b || Object])
], ManageradminComponent);

var _a, _b;
//# sourceMappingURL=manageradmin.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/manageradmin/manageradmin.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manageradmin_component__ = __webpack_require__("../../../../../src/app/layout/manageradmin/manageradmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manageradmin_routing_module__ = __webpack_require__("../../../../../src/app/layout/manageradmin/manageradmin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filterdata_commercial_pipe__ = __webpack_require__("../../../../../src/app/layout/manageradmin/filterdata-commercial.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filterdata_newpoint_pipe__ = __webpack_require__("../../../../../src/app/layout/manageradmin/filterdata-newpoint.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageradminModule", function() { return ManageradminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ManageradminModule = (function () {
    function ManageradminModule() {
    }
    return ManageradminModule;
}());
ManageradminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__manageradmin_routing_module__["a" /* ManageradminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__manageradmin_component__["a" /* ManageradminComponent */],
            __WEBPACK_IMPORTED_MODULE_9__filterdata_commercial_pipe__["a" /* DataFilterCommercialPipe */],
            __WEBPACK_IMPORTED_MODULE_10__filterdata_newpoint_pipe__["a" /* DataFilterNewPointPipe */],
        ]
    })
], ManageradminModule);

//# sourceMappingURL=manageradmin.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map