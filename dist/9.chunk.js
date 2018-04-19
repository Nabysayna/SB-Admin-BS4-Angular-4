webpackJsonp([9],{

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

/***/ "../../../../../src/app/layout/manageradmin/filterdata-pointManager.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPointManagerPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterPointManagerPipe = (function () {
    function DataFilterPointManagerPipe() {
    }
    DataFilterPointManagerPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.region_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.zone_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.souszone_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterPointManagerPipe;
}());
DataFilterPointManagerPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterPointManager"
    })
], DataFilterPointManagerPipe);

//# sourceMappingURL=filterdata-pointManager.pipe.js.map

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

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n  \t<div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\"  style=\"margin-bottom: 1rem;\">Dashboard</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\"  style=\"margin-bottom: 1rem;\">Points crm</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead4, 'btn-success': menuHead.menuHead4}\" (click)=\"menuHeadClick(4)\"  style=\"margin-bottom: 1rem;\">Points sentool</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\"  style=\"margin-bottom: 1rem;\">Affectation</button>\r\n\t</div>\r\n    <hr>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\" >\r\n    <div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\" *ngIf=\"dashboardNbres\">\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbrenewpts}}</h4>\r\n                    <p class=\"card-text\">Points.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbreptsvalider}}</h4>\r\n                    <p class=\"card-text\">Points validés.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbreptssouscsenntool}}</h4>\r\n                    <p class=\"card-text\">Points souscrits à Sentool.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\" style=\"margin-bottom: 1rem;\">\r\n            <div class=\"card text-white bg-info\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{dashboardNbres.nbrecoms}}</h4>\r\n                    <p class=\"card-text\">Commerciaux.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Etat Points.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas height=\"150\" baseChart [data]=\"doughnutChartDataPP\" [colors]=\"colorsEmptyObject\" [labels]=\"doughnutChartLabelsPP\" [chartType]=\"'doughnut'\" ></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listpointscrm | dataFilterPointManager: filterQuerypointscrm\" #mfPointcrm=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPagepointscrm\" [(mfSortBy)]=\"sortBypointscrm\" [(mfSortOrder)]=\"sortOrderpointscrm\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"region_point\">Région</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"zone_point\">Zone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"souszone_point\">Sous zone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"profil\">Profil</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"anciennete\">Ancienneté</mfDefaultSorter></th>\r\n                        <th style=\"margin: 0 auto; text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuerypointscrm\"/></th>\r\n                        <th>Total : {{listpointscrm.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfPointcrm.data; let i = index\" [ngStyle]=\"{'color': 'black', 'background-color': (item.infosup.service_sentool==1 && item.infosup.service_wafacash==1)?'green':(item.infosup.service_sentool==1 && item.infosup.service_wafacash==0)?'orange':(item.infosup.service_sentool==0 && item.infosup.service_wafacash==1)?'yellow':'blue'}\">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.region_point}}</td>\r\n                        <td>{{item.zone_point}}</td>\r\n                        <td>{{item.souszone_point}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td>{{item.profil}}</td>\r\n                        <td>{{item.anciennete}}</td>\r\n                        <td><button class=\"btn btn-secondary btn-sm\" (click)=\"validsuppression(item)\">Supprimer</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"commerciaux | dataFilterCommercial: filterQueryCommercial\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageCom\" [(mfSortBy)]=\"sortByCom\" [(mfSortOrder)]=\"sortOrderCom\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"fullname\">Commercial</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"email\">Email</mfDefaultSorter></th>\r\n                        <th> Superviseur affecté </th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryCommercial\"/></th>\r\n                        <th>Total : {{commerciaux.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.email}}</td>\r\n                        <td *ngIf=\"item.id_superviseur && superviseurs && superviseurs.length!=0\">\r\n                            <select name=\"sselectcommercial-{{i}}\"  id=\"sselectcommercial-{{i}}\" class=\"form-control input-sm\" [(ngModel)]=\"item.id_superviseur\">\r\n                                <option  *ngFor=\"let superviseur of superviseurs\" [attr.value]=\"superviseur.id\">{{superviseur.prenom}} {{superviseur.nom}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"reaffectercommercial(item)\"> reaffecter </button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead4\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listpointssentool | dataFilterPointManager: filterQuerypointscrm\" #mfPointcrm=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPagepointscrm\" [(mfSortBy)]=\"sortBypointscrm\" [(mfSortOrder)]=\"sortOrderpointscrm\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"region_point\">Région</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"zone_point\">Zone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"souszone_point\">Sous zone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"anciennete\">Ancienneté</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"cautiondebase\">Caution</mfDefaultSorter></th>\r\n                        <th style=\"margin: 0 auto; text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuerypointscrm\"/></th>\r\n                        <th>Total : {{listpointssentool.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfPointcrm.data; let i = index\" >\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.region_point}}</td>\r\n                        <td>{{item.zone_point}}</td>\r\n                        <td>{{item.souszone_point}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td>{{item.anciennete}}</td>\r\n                        <td>{{item.cautiondebase}}</td>\r\n                        <td *ngIf=\"item.cautiondebase!=0\">It works</td>\r\n                        <td *ngIf=\"item.cautiondebase==0\"><button class=\"btn btn-secondary btn-sm\" (click)=\"validsuppressionsentool(item)\">Supprimer</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__ = __webpack_require__("../../../../../src/app/services/newclient.service.ts");
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
    function ManageradminComponent(router, _utilService, _newclientService) {
        this.router = router;
        this._utilService = _utilService;
        this._newclientService = _newclientService;
        this.staticAlertClosed = false;
        this.rowsOnPage = 5;
        this.sortBy = "note";
        this.sortOrder = "desc";
        this.rowsOnPageCom = 10;
        this.sortByCom = "fullname";
        this.sortOrderCom = "asc";
        this.commerciaux = [];
        this.superviseurs = [];
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false, menuHead4: false };
        this.loading_data = true;
        /************************************************************************************
         **********************************   PARTIE SUIVI COM   ****************************
         ***********************************************************************************/
        this.doughnutChartLabelsPP = ['Aucun', 'SenTool', 'Wafa', 'BBS'];
        this.doughnutChartDataPP = [1, 3, 2, 4];
        this.colorsEmptyObject = [{ backgroundColor: ["blue", "orange", "yellow", "green"] }];
        /************************************************************************************
         **********************************   PARTIE POINT  CRM  ****************************
         ***********************************************************************************/
        this.rowsOnPagepointscrm = 10;
        this.sortBypointscrm = "date_ajout";
        this.sortOrderpointscrm = "desc";
        this.listpointscrm = [];
        /************************************************************************************
         **********************************   PARTIE SENTOOL POINT   ****************************
         ***********************************************************************************/
        this.listpointssentool = [];
    }
    ManageradminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading_data = true;
        this.getDashboardNbres();
        this.killsetinterval = setInterval(function () {
            _this.getDashboardNbres();
        }, 60000);
    };
    ManageradminComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    ManageradminComponent.prototype.menuHeadClick = function (option) {
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.getDashboardNbres();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.getPointscrm();
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.getComSuperviseurs();
        }
        if (option == 4) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.getPointssentool();
        }
    };
    ManageradminComponent.prototype.toInt = function (num) { return +num; };
    ManageradminComponent.prototype.getDashboardNbres = function () {
        var _this = this;
        this._utilService.getDashboardNbres()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.dashboardNbres = data.message;
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () {
            _this.getAdmincomsuiviPP();
        });
    };
    /************************************************************************************
     **********************************   PARTIE AFFECTATION COMMERCIAL   ****************************
     ***********************************************************************************/
    ManageradminComponent.prototype.getComSuperviseurs = function () {
        var _this = this;
        this._utilService.getComSuperviseurs()
            .subscribe(function (data) {
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
            _this.superviseurs = data.superviseurs;
        }, function (error) { return alert(error); }, function () { return console.log('getRegionsSuperviseurs'); });
    };
    ManageradminComponent.prototype.choixsuperviseurforcommercial = function (id_superviseur) {
        //console.log(id_superviseur);
    };
    ManageradminComponent.prototype.reaffectercommercial = function (item) {
        this._utilService.affectationCommercial(item)
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () { return console.log('affectationCommercial'); });
    };
    ManageradminComponent.prototype.getAdmincomsuiviPP = function () {
        var _this = this;
        this._utilService.getAdmincomsuiviPP()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.doughnutChartDataPP = [
                    data.message.filter(function (opt) { return opt.service_sentool == 0 && opt.service_wafacash == 0; }).length,
                    data.message.filter(function (opt) { return opt.service_sentool == 1 && opt.service_wafacash == 0; }).length,
                    data.message.filter(function (opt) { return opt.service_sentool == 0 && opt.service_wafacash == 1; }).length,
                    data.message.filter(function (opt) { return opt.service_sentool == 1 && opt.service_wafacash == 1; }).length
                ];
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
        });
    };
    ManageradminComponent.prototype.getPointscrm = function () {
        var _this = this;
        this.loading_data = true;
        this._utilService.getPointscrm()
            .subscribe(function (data) {
            _this.listpointscrm = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                var infsup = JSON.parse(type.infosup);
                return {
                    id: type.id,
                    id_proprietaire: type.id_proprietaire_point,
                    id_gerant: type.id_gerant_point,
                    date_ajout: type.date_ajout,
                    anciennete: type.date_ajout < '2017-10-12' ? 'Du TNT' : 'Nouveau',
                    nom_point: type.nom_point.trim() ? type.nom_point.trim() : '__',
                    profil: (infsup.service_sentool == 1 && infsup.service_wafacash == 1) ? 'Sent & Wafa' : (infsup.service_sentool == 1 && infsup.service_wafacash == 0) ? 'Sent' : (infsup.service_sentool == 0 && infsup.service_wafacash == 1) ? 'Wafa' : 'Non défini',
                    infosup: infsup,
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    region_point: adresse_point.regionpoint ? adresse_point.regionpoint.trim() : '__',
                    zone_point: adresse_point.zonepoint ? adresse_point.zonepoint.trim() : '__',
                    souszone_point: adresse_point.souszonepoint ? adresse_point.souszonepoint.trim() : '__',
                    adresse_point: adresse_point.adressepoint ? adresse_point.adressepoint.trim() : '__',
                };
            });
        }, function (error) { return alert(error); }, function () { return _this.loading_data = false; });
    };
    ManageradminComponent.prototype.validsuppression = function (point) {
        var _this = this;
        if (confirm('confirmer suppression du point crm: ' + point.nom_point)) {
            console.log('ok');
            this.loading_data = true;
            this._newclientService.validsuppression(point)
                .subscribe(function (data) { return _this.getPointscrm(); }, function (error) { return alert(error); }, function () { return _this.loading_data = false; });
        }
        else {
            console.log('ko');
        }
    };
    ManageradminComponent.prototype.getPointssentool = function () {
        var _this = this;
        this.loading_data = true;
        this._utilService.getPointssentool()
            .subscribe(function (data) {
            _this.listpointssentool = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse);
                var infsup = JSON.parse(type.infosup);
                return {
                    id: type.idUser,
                    idcaution: type.idCaution,
                    dateajoutcaution: type.dateAjout,
                    date_ajout: type.dateCreation.date.split('.')[0],
                    anciennete: type.dateCreation.date.split('.')[0] < '2017-10-12' ? 'Du TNT' : 'Nouveau',
                    nom_point: infsup.nometps,
                    fullname_gerant: type.prenom + " " + type.nom,
                    telephone_gerant: type.telephone,
                    caution: type.caution,
                    cautiondebase: type.cautiondebase,
                    region_point: adresse_point.region ? adresse_point.region : "",
                    zone_point: adresse_point.zone ? adresse_point.zone : "",
                    souszone_point: adresse_point.souszone ? adresse_point.souszone : "",
                    adresse_point: adresse_point.address ? adresse_point.address : "",
                };
            });
        }, function (error) { return alert(error); }, function () { return _this.loading_data = false; });
    };
    ManageradminComponent.prototype.validsuppressionsentool = function (point) {
        var _this = this;
        if (confirm('confirmer suppression du point sentool: ' + point.nom_point)) {
            console.log('ok');
            this.loading_data = true;
            this._newclientService.validsuppressionsentool(point)
                .subscribe(function (data) { return _this.getPointssentool(); }, function (error) { return alert(error); }, function () { return console.log('validsuppressionsentool'); });
        }
        else {
            this.loading_data = false;
        }
    };
    return ManageradminComponent;
}());
ManageradminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admincommercial',
        template: __webpack_require__("../../../../../src/app/layout/manageradmin/manageradmin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/manageradmin/manageradmin.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__["a" /* NewclientService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__["a" /* NewclientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__["a" /* NewclientService */]) === "function" && _c || Object])
], ManageradminComponent);

var _a, _b, _c;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filterdata_pointManager_pipe__ = __webpack_require__("../../../../../src/app/layout/manageradmin/filterdata-pointManager.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_11__filterdata_pointManager_pipe__["a" /* DataFilterPointManagerPipe */],
        ]
    })
], ManageradminModule);

//# sourceMappingURL=manageradmin.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map