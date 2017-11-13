webpackJsonp([7],{

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminadministratif_component__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminadministratifRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__adminadministratif_component__["a" /* AdminadministratifComponent */] }
];
var AdminadministratifRoutingModule = (function () {
    function AdminadministratifRoutingModule() {
    }
    return AdminadministratifRoutingModule;
}());
AdminadministratifRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AdminadministratifRoutingModule);

//# sourceMappingURL=adminadministratif-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header\"><u>Administrateur administration</u></h3>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Anciens points</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Nouveaux points</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\" style=\"margin-bottom: 1rem;\">Points souscrits</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead5, 'btn-success': menuHead.menuHead5}\" (click)=\"menuHeadClick(5)\" style=\"margin-bottom: 1rem;\">Réclamations</button>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listencienpoints | dataFilterNewPointAdminAdmin: filterQueryNewPoint\" #mfNewPoint=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageNewPoint\" [(mfSortBy)]=\"sortByNewPoint\" [(mfSortOrder)]=\"sortOrderNewPoint\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\" style=\"margin: 0 auto; text-align: center\">Adresse</mfDefaultSorter></th>\r\n                        <th colspan=\"3\" style=\"margin: 0 auto; text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryNewPoint\"/></th>\r\n                        <th>Total : {{listencienpoints.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfNewPoint.data; let i = index \">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td><button style=\"background-color: orange\" class=\"btn btn-sm\" (click)=\"validresouscritsentool(item,'ancien')\" *ngIf=\"item.infosup.service_sentool==0\"><i class=\"fa fa-check\"></i> Sentool</button></td>\r\n                        <td><button style=\"background-color: yellow\" class=\"btn btn-sm\" (click)=\"validresouscritwafacash(item,'ancien')\" *ngIf=\"item.infosup.service_wafacash==0\"><i class=\"fa fa-check\"></i> Wafacash</button></td>\r\n                        <td><button style=\"background-color: green\" class=\"btn btn-sm\" (click)=\"validresouscritsentoolandwafacash(item,'ancien')\" *ngIf=\"item.infosup.service_sentool==0 && item.infosup.service_wafacash==0\"><i class=\"fa fa-check\"></i> Sen & Wafa</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listenewpoints | dataFilterNewPointAdminAdmin: filterQueryNewPoint\" #mfNewPoint=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageNewPoint\" [(mfSortBy)]=\"sortByNewPoint\" [(mfSortOrder)]=\"sortOrderNewPoint\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th colspan=\"2\" style=\"margin: 0 auto; text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryNewPoint\"/></th>\r\n                        <th>Total : {{listenewpoints.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfNewPoint.data; let i = index\">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td><button style=\"background-color: orange\" class=\"btn btn-sm\" (click)=\"validresouscritsentool(item,'nouveau')\" *ngIf=\"item.infosup.service_sentool==0\"><i class=\"fa fa-check\"></i> Sentool</button></td>\r\n                        <td><button style=\"background-color: yellow\" class=\"btn btn-sm\" (click)=\"validresouscritwafacash(item,'nouveau')\" *ngIf=\"item.infosup.service_wafacash==0\"><i class=\"fa fa-check\"></i> Wafacash</button></td>\r\n                        <td><button style=\"background-color: green\" class=\"btn btn-sm\" (click)=\"validresouscritsentoolandwafacash(item,'nouveau')\" *ngIf=\"item.infosup.service_sentool==0 && item.infosup.service_wafacash==0\"><i class=\"fa fa-check\"></i> Sen & Wafa</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listepointsouscritbbs | dataFilterNewPointAdminAdmin: filterQueryPointSouscription\" #mfPointSouscription=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPagePointSouscription\" [(mfSortBy)]=\"sortByPointSouscription\" [(mfSortOrder)]=\"sortOrderPointSouscription\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"souscription\">Souscription</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryPointSouscription\"/></th>\r\n                        <th>Total : {{listepointsouscritbbs.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfPointSouscription.data; let i = index\" [ngStyle]=\"{'color': 'white', 'background-color': (item.infosup.service_sentool==1 && item.infosup.service_wafacash==0)?'orange':(item.infosup.service_sentool==0 && item.infosup.service_wafacash==1)?'yellow':'green'}\">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td>{{item.souscription}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead5\" >\r\n    <h2>Liste des réclamations</h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listereclamationsnonresolu | dataFilterfilterQueryReclamationsnonresoluAdminAdmin: filterQueryReclamationsnonresolu\" #mfreclamationsnonresolu=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageReclamationsnonresolu\" [(mfSortBy)]=\"sortByReclamationsnonresolu\" [(mfSortOrder)]=\"sortOrderReclamationsnonresolu\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_reclamation\">Date réclamation</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"name_caissier\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nomservice\">Type service</mfDefaultSorter></th>\r\n                        <th colspan=\"2\" style=\"text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"5\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryReclamationsnonresolu\"/></th>\r\n                        <th>Total : {{listereclamationsnonresolu.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfreclamationsnonresolu.data; let i = index \">\r\n                        <td>{{item.date_reclamation}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.name_caissier}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.nomservice}}</td>\r\n                        <td style=\"margin: 0 auto; text-align: center\">\r\n                            <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" ngbPopover=\"{{item.message}}\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Sujet: {{item.sujet}}\">Voir réclamation</button>\r\n                        </td>\r\n                        <td><button class=\"btn btn-success btn-sm\" (click)=\"validresolutionreclamation(item)\">Résoudre</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__ = __webpack_require__("../../../../../src/app/services/newclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminadministratifComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminadministratifComponent = (function () {
    function AdminadministratifComponent(router, _utilService, _apiPlatformService, _newclientService) {
        this.router = router;
        this._utilService = _utilService;
        this._apiPlatformService = _apiPlatformService;
        this._newclientService = _newclientService;
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false, menuHead4: false, menuHead5: false };
        /************************************************************************************
         ********************   PARTIE ENCIEN   ****************************
         ***********************************************************************************/
        this.listencienpoints = [];
        /************************************************************************************
         **********************************   PARTIE NEW POINT   ****************************
         ***********************************************************************************/
        this.rowsOnPageNewPoint = 10;
        this.sortByNewPoint = "date_ajout";
        this.sortOrderNewPoint = "desc";
        this.listenewpoints = [];
        /************************************************************************************
         **********************   PARTIE POINT SOUSCRIT BBS ****************************
         ***********************************************************************************/
        this.rowsOnPagePointSouscription = 10;
        this.sortByPointSouscription = "date_ajout";
        this.sortOrderPointSouscription = "desc";
        this.listepointsouscritbbs = [];
        /************************************************************************************
         ***************************   PARTIE ETAT RECLAMATION   ****************************
         ***********************************************************************************/
        this.rowsOnPageReclamationsnonresolu = 10;
        this.sortByReclamationsnonresolu = "date_reclamation";
        this.sortOrderReclamationsnonresolu = "asc";
        this.listereclamationsnonresolu = [];
    }
    AdminadministratifComponent.prototype.ngOnInit = function () {
        this.getEncienpoints();
    };
    AdminadministratifComponent.prototype.menuHeadClick = function (option) {
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getEncienpoints();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getNouveauxpoints();
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead5 = false;
            this.getPointssouscritBBS();
        }
        if (option == 5) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.getReclamationsNonResolu();
        }
    };
    AdminadministratifComponent.prototype.getEncienpoints = function () {
        var _this = this;
        this._utilService.getEncienpoints()
            .subscribe(function (data) {
            _this.listencienpoints = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    infosup: JSON.parse(type.infosup),
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint
                };
            });
            console.log(_this.listencienpoints);
        }, function (error) { return alert(error); }, function () { return console.log('getEncienpoints'); });
    };
    AdminadministratifComponent.prototype.validresouscritsentool = function (point, type) {
        var _this = this;
        console.log(point);
        this._newclientService.validerSouscritSentool(point)
            .subscribe(function (data) {
            console.log(data);
            if (type == 'ancien') {
                _this.getEncienpoints();
            }
            if (type == 'nouveau') {
                _this.getNouveauxpoints();
            }
        }, function (error) { return alert(error); }, function () { return console.log('validerSouscritSentool'); });
    };
    AdminadministratifComponent.prototype.validresouscritwafacash = function (point, type) {
        var _this = this;
        console.log(point);
        this._newclientService.validerSouscritWafacash(point)
            .subscribe(function (data) {
            console.log(data);
            if (type == 'ancien') {
                _this.getEncienpoints();
            }
            if (type == 'nouveau') {
                _this.getNouveauxpoints();
            }
        }, function (error) { return alert(error); }, function () { return console.log('validerSouscritWafacash'); });
    };
    AdminadministratifComponent.prototype.validresouscritsentoolandwafacash = function (point, type) {
        var _this = this;
        console.log(point);
        this._newclientService.validerSouscritSentoolAndWafacash(point)
            .subscribe(function (data) {
            console.log(data);
            if (type == 'ancien') {
                _this.getEncienpoints();
            }
            if (type == 'nouveau') {
                _this.getNouveauxpoints();
            }
        }, function (error) { return alert(error); }, function () { return console.log('validerSouscritWafacash'); });
    };
    AdminadministratifComponent.prototype.getNouveauxpoints = function () {
        var _this = this;
        this._utilService.getNouveauxpoints()
            .subscribe(function (data) {
            _this.listenewpoints = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    infosup: JSON.parse(type.infosup),
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint,
                };
            });
            console.log(_this.listenewpoints);
        }, function (error) { return alert(error); }, function () { return console.log('getNouveauxpoints'); });
    };
    AdminadministratifComponent.prototype.getPointssouscritBBS = function () {
        var _this = this;
        this._utilService.getPointssouscritBBS()
            .subscribe(function (data) {
            _this.listepointsouscritbbs = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    infosup: JSON.parse(type.infosup),
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint,
                    souscription: (JSON.parse(type.infosup).service_sentool == 1 && JSON.parse(type.infosup).service_wafacash == 0) ? 'SenTool' : (JSON.parse(type.infosup).service_sentool == 0 && JSON.parse(type.infosup).service_wafacash == 1) ? 'WafaCash' : 'SenTool & WafaCash',
                };
            });
            console.log(_this.listepointsouscritbbs);
        }, function (error) { return alert(error); }, function () { return console.log('getPointsdeploye'); });
    };
    AdminadministratifComponent.prototype.getReclamationsNonResolu = function () {
        var _this = this;
        this._apiPlatformService.getReclamationsNonResolu()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                _this.listereclamationsnonresolu = data.message.map(function (type) {
                    return {
                        id_reclamation: type.id,
                        date_reclamation: type.dateajout.date.split('.')[0],
                        nom_point: JSON.parse(type.infosup).nometps,
                        name_caissier: type.name_caissier,
                        telephone: type.telephone.split('221')[1],
                        nomservice: type.nomservice,
                        sujet: type.sujet,
                        message: type.message,
                    };
                });
                console.log(_this.listereclamationsnonresolu);
            }
        }, function (error) { return alert(error); }, function () { return console.log('getPointsdeploye'); });
    };
    AdminadministratifComponent.prototype.validresolutionreclamation = function (reclamation) {
        console.log(reclamation);
        this._apiPlatformService.validReclamationsNonResolu(reclamation)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return alert(error); }, function () { return console.log('validReclamationsNonResolu'); });
        this.listereclamationsnonresolu = this.listereclamationsnonresolu.filter(function (opt) { return opt.id_reclamation != reclamation.id_reclamation; });
    };
    return AdminadministratifComponent;
}());
AdminadministratifComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminadministratif',
        template: __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__["a" /* NewclientService */], __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__["a" /* NewclientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_newclient_service__["a" /* NewclientService */]) === "function" && _d || Object])
], AdminadministratifComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=adminadministratif.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adminadministratif_component__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adminadministratif_routing_module__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filterdata_commercialAdminAdmin_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-commercialAdminAdmin.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filterdata_newpointAdminAdmin_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-newpointAdminAdmin.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filterdata_reclamationsnonresoluAdminAdmin_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-reclamationsnonresoluAdminAdmin.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminadministratifModule", function() { return AdminadministratifModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminadministratifModule = (function () {
    function AdminadministratifModule() {
    }
    return AdminadministratifModule;
}());
AdminadministratifModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__adminadministratif_routing_module__["a" /* AdminadministratifRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__adminadministratif_component__["a" /* AdminadministratifComponent */],
            __WEBPACK_IMPORTED_MODULE_8__filterdata_commercialAdminAdmin_pipe__["a" /* DataFilterCommercialAdminAdminPipe */],
            __WEBPACK_IMPORTED_MODULE_9__filterdata_newpointAdminAdmin_pipe__["a" /* DataFilterNewPointAdminAdminPipe */],
            __WEBPACK_IMPORTED_MODULE_10__filterdata_reclamationsnonresoluAdminAdmin_pipe__["a" /* DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe */]
        ]
    })
], AdminadministratifModule);

//# sourceMappingURL=adminadministratif.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-commercialAdminAdmin.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterCommercialAdminAdminPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterCommercialAdminAdminPipe = (function () {
    function DataFilterCommercialAdminAdminPipe() {
    }
    DataFilterCommercialAdminAdminPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.email.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterCommercialAdminAdminPipe;
}());
DataFilterCommercialAdminAdminPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterCommercialAdminAdmin"
    })
], DataFilterCommercialAdminAdminPipe);

//# sourceMappingURL=filterdata-commercialAdminAdmin.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-newpointAdminAdmin.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterNewPointAdminAdminPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterNewPointAdminAdminPipe = (function () {
    function DataFilterNewPointAdminAdminPipe() {
    }
    DataFilterNewPointAdminAdminPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterNewPointAdminAdminPipe;
}());
DataFilterNewPointAdminAdminPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterNewPointAdminAdmin"
    })
], DataFilterNewPointAdminAdminPipe);

//# sourceMappingURL=filterdata-newpointAdminAdmin.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-reclamationsnonresoluAdminAdmin.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe = (function () {
    function DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe() {
    }
    DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_reclamation.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nomservice.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.name_caissier.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe;
}());
DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterfilterQueryReclamationsnonresoluAdminAdmin"
    })
], DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe);

//# sourceMappingURL=filterdata-reclamationsnonresoluAdminAdmin.pipe.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map