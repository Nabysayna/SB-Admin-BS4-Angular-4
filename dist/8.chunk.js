webpackJsonp([8],{

/***/ "../../../../../src/app/layout/marketingcom/filterdata-modifadressepoint.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterModifAdressePointPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterModifAdressePointPipe = (function () {
    function DataFilterModifAdressePointPipe() {
    }
    DataFilterModifAdressePointPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse_point.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterModifAdressePointPipe;
}());
DataFilterModifAdressePointPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterModifAdressePoint"
    })
], DataFilterModifAdressePointPipe);

//# sourceMappingURL=filterdata-modifadressepoint.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/marketingcom/filterdata-reclamationsnonresolu.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterfilterQueryReclamationsnonresoluPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterfilterQueryReclamationsnonresoluPipe = (function () {
    function DataFilterfilterQueryReclamationsnonresoluPipe() {
    }
    DataFilterfilterQueryReclamationsnonresoluPipe.prototype.transform = function (array, query) {
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
    return DataFilterfilterQueryReclamationsnonresoluPipe;
}());
DataFilterfilterQueryReclamationsnonresoluPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterfilterQueryReclamationsnonresolu"
    })
], DataFilterfilterQueryReclamationsnonresoluPipe);

//# sourceMappingURL=filterdata-reclamationsnonresolu.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/marketingcom/marketingcom-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketingcom_component__ = __webpack_require__("../../../../../src/app/layout/marketingcom/marketingcom.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingcomRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__marketingcom_component__["a" /* MarketingcomComponent */] }
];
var MarketingcomRoutingModule = (function () {
    function MarketingcomRoutingModule() {
    }
    return MarketingcomRoutingModule;
}());
MarketingcomRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], MarketingcomRoutingModule);

//# sourceMappingURL=marketingcom-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/marketingcom/marketingcom.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header\"><u>Marketing Com</u></h3>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Modification adresse points</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">New Réclamations</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\" style=\"margin-bottom: 1rem;\">FAQ</button>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\" [mfData]=\"listepointsdepoye | dataFilterModifAdressePoint: filterQueryModifAdressePts\" #mfModifAdressePts=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageModifAdressePts\" [(mfSortBy)]=\"sortByModifAdressePts\" [(mfSortOrder)]=\"sortOrderModifAdressePts\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryModifAdressePts\"/></th>\r\n                        <th>Total : {{listepointsdepoye.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfModifAdressePts.data; let i = index \">\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td><button class=\"btn btn-primary btn-sm\" (click)=\"openModifyAdressePoints(item,contentModifyAdressePoints)\">Modifier</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\" [mfData]=\"listereclamationsnonresolu | dataFilterfilterQueryReclamationsnonresolu: filterQueryReclamationsnonresolu\" #mfreclamationsnonresolu=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageReclamationsnonresolu\" [(mfSortBy)]=\"sortByReclamationsnonresolu\" [(mfSortOrder)]=\"sortOrderReclamationsnonresolu\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_reclamation\">Date réclamation</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"name_caissier\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nomservice\">Type service</mfDefaultSorter></th>\r\n                        <th colspan=\"2\" style=\"text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"5\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryReclamationsnonresolu\"/></th>\r\n                        <th>Total : {{listereclamationsnonresolu.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfreclamationsnonresolu.data; let i = index \">\r\n                        <td>{{item.date_reclamation}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.name_caissier}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.nomservice}}</td>\r\n                        <td style=\"margin: 0 auto; text-align: center\">\r\n                            <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" ngbPopover=\"{{item.message}}\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Sujet: {{item.sujet}}\">Voir réclamation</button>\r\n                        </td>\r\n                        <td><button class=\"btn btn-success btn-sm\" (click)=\"validresolutionreclamation(item)\">Résoudre</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    jdskflq\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead4\" >\r\n    jdskflq\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead5\" >\r\n    jsdfkkl\r\n</div>\r\n\r\n<ng-template #contentModifyAdressePoints let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Adresse points \"{{pointsdepoye.nom_point}}\" {{pointsdepoye.telephone_gerant}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n            <label for=\"regionSentoolModif\" class=\"col-sm-3 col-form-label\">Région</label>\r\n            <div class=\"col-sm-9\">\r\n                <select class=\"form-control input-sm\" id=\"regionSentoolModif\" name=\"regionSentoolModif\" [(ngModel)]=\"pointsdepoye.adressecomplet.region\" (change)=\"selectRegion()\">\r\n                    <option selected>--Choix région--</option>\r\n                    <option *ngFor=\"let region of regions\">{{region.nom}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"iszones && pointsdepoye.adressecomplet.region!='--Choix région--'\">\r\n            <label for=\"zoneSentoolModif\" class=\"col-sm-3 col-form-label\">Zones</label>\r\n            <div class=\"col-sm-9\">\r\n                <select class=\"form-control input-sm\" id=\"zoneSentoolModif\" name=\"zoneSentoolModif\" [(ngModel)]=\"pointsdepoye.adressecomplet.zone\" (change)=\"selectZone()\">\r\n                    <option>--Choix zone--</option>\r\n                    <option  *ngFor=\"let zone of zones\">{{zone.nom}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"issouszones && pointsdepoye.adressecomplet.zone!='--Choix zone--'\">\r\n            <label for=\"souzoneSentoolModif\" class=\"col-sm-3 col-form-label\">Sous zones</label>\r\n            <div class=\"col-sm-9\">\r\n                <select class=\"form-control input-sm\" id=\"souzoneSentoolModif\" name=\"souzoneSentoolModif\" [(ngModel)]=\"pointsdepoye.adressecomplet.souszone\">\r\n                    <option>--Choix sous zone--</option>\r\n                    <option  *ngFor=\"let souszone of souszones\">{{souszone.nom}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"issouszones && pointsdepoye.adressecomplet.souszone!='--Choix sous zone--'\">\r\n            <label for=\"adresseSentoolModif\" class=\"col-sm-3 col-form-label\">Adresse exacte</label>\r\n            <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"adresseSentoolModif\" name=\"adresseSentoolModif\" [(ngModel)]=\"pointsdepoye.adressecomplet.address\" placeholder=\"Adresse exacte\" rows=\"3\"></textarea>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"modal-footer text-center\" style=\"text-align: center !important; margin: 0 auto\">\r\n        <button type=\"button\" class=\"btn btn-success btn-sm\"\r\n                (click)=\"validmodifyadressepoints()\"\r\n                [disabled]=\"!pointsdepoye.adressecomplet.address || pointsdepoye.adressecomplet.souszone=='--Choix sous zone--' || pointsdepoye.adressecomplet.zone=='--Choix zone--' || pointsdepoye.adressecomplet.region=='--Choix région--'\"\r\n        >Valider</button>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/marketingcom/marketingcom.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: \"Lato\", sans-serif; }\n\n.sidenav {\n  height: 100%;\n  width: 15rem;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #0F70B7;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px; }\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 16px;\n  color: white;\n  display: block;\n  transition: 0.3s;\n  cursor: pointer; }\n\n.sidenav a:hover {\n  color: #f1f1f1; }\n\n#main {\n  transition: margin-left .5s;\n  padding: 16px;\n  margin-left: 250px; }\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n\n@media (max-width: 575px) {\n  .sidenav {\n    width: 5rem;\n    font-size: 10px; }\n  .sidenav a {\n    padding: 4px 4px 4px 16px;\n    font-size: 10px;\n    color: white;\n    cursor: pointer; }\n  #main {\n    transition: margin-left .5s;\n    margin-left: 6rem; }\n  h2, div {\n    font-size: 15px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/marketingcom/marketingcom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingcomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketingcomComponent = (function () {
    function MarketingcomComponent(modalService, _utilService, _apiPlatformService) {
        this.modalService = modalService;
        this._utilService = _utilService;
        this._apiPlatformService = _apiPlatformService;
        this.rowsOnPageModifAdressePts = 10;
        this.sortByModifAdressePts = "nom_point";
        this.sortOrderModifAdressePts = "asc";
        this.rowsOnPageReclamationsnonresolu = 10;
        this.sortByReclamationsnonresolu = "date_reclamation";
        this.sortOrderReclamationsnonresolu = "asc";
        this.listepointsdepoye = [];
        this.listereclamationsnonresolu = [];
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false, menuHead4: false, menuHead5: false };
    }
    MarketingcomComponent.prototype.ngOnInit = function () {
        this.getPointsdeployeModifyAdresse();
    };
    MarketingcomComponent.prototype.menuHeadClick = function (option) {
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getPointsdeployeModifyAdresse();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getReclamationsNonResolu();
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
        }
        if (option == 4) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
        }
        if (option == 5) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
        }
    };
    MarketingcomComponent.prototype.getPointsdeployeModifyAdresse = function () {
        var _this = this;
        this._apiPlatformService.getPointsdeployeModifyAdresse()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                _this.listepointsdepoye = data.message.map(function (type) {
                    var adresse_point = JSON.parse(type.adresse);
                    return {
                        idUser: type.idUser,
                        nom_point: JSON.parse(type.infosup).nometps,
                        nom_boutique: JSON.parse(type.infosup).nomshop,
                        login: type.login,
                        fullname_gerant: type.prenom + " " + type.nom,
                        telephone_gerant: type.telephone,
                        adressecomplet: adresse_point,
                        adresse_point: adresse_point.address + ", " + adresse_point.souszone + ", " + adresse_point.zone,
                    };
                });
                console.log(_this.listepointsdepoye);
                _this.getRegion();
            }
        }, function (error) { return alert(error); }, function () { return console.log('getPointsdeploye'); });
    };
    MarketingcomComponent.prototype.getReclamationsNonResolu = function () {
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
    MarketingcomComponent.prototype.openModifyAdressePoints = function (pts, content) {
        this.pointsdepoye = pts;
        this.selectRegion();
        this.showModal(content);
    };
    MarketingcomComponent.prototype.showModal = function (content) {
        this.modalRef = this.modalService.open(content);
    };
    MarketingcomComponent.prototype.closedModal = function () {
        this.modalRef.close('Close click');
    };
    MarketingcomComponent.prototype.getRegion = function () {
        var _this = this;
        this._utilService.getRegion()
            .subscribe(function (data) {
            _this.regions = data;
        }, function (error) { return alert(error); }, function () { return console.log('getRegion'); });
    };
    MarketingcomComponent.prototype.selectRegion = function () {
        var _this = this;
        this.iszones = false;
        this.pointsdepoye.adressecomplet.zone = '--Choix zone--';
        this.pointsdepoye.adressecomplet.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.pointsdepoye.adressecomplet.region)
            .subscribe(function (data) {
            _this.zones = data;
            _this.iszones = true;
        }, function (error) { return alert(error); }, function () { return console.log('getZoneByRegion'); });
    };
    MarketingcomComponent.prototype.selectZone = function () {
        var _this = this;
        this.issouszones = false;
        this._utilService.getSouszoneByZoneByRegion({ region: this.pointsdepoye.adressecomplet.region, zone: this.pointsdepoye.adressecomplet.zone })
            .subscribe(function (data) {
            _this.souszones = data;
            _this.issouszones = true;
        }, function (error) { return alert(error); }, function () { return console.log('getSouszoneByZoneByRegion'); });
    };
    MarketingcomComponent.prototype.validmodifyadressepoints = function () {
        var _this = this;
        this._apiPlatformService.validModifyAdressePoint(this.pointsdepoye)
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () { return console.log('validModifyAdressePoint'); });
        this.closedModal();
        this.listepointsdepoye = this.listepointsdepoye.filter(function (opt) { return !(opt.telephone_gerant == _this.pointsdepoye.telephone_gerant && opt.login == _this.pointsdepoye.login); });
        this.pointsdepoye = undefined;
    };
    MarketingcomComponent.prototype.validresolutionreclamation = function (reclamation) {
        this._apiPlatformService.validReclamationsNonResolu(reclamation)
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () { return console.log('validReclamationsNonResolu'); });
        this.listereclamationsnonresolu = this.listereclamationsnonresolu.filter(function (opt) { return opt.id_reclamation != reclamation.id_reclamation; });
    };
    return MarketingcomComponent;
}());
MarketingcomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-marketingcom',
        template: __webpack_require__("../../../../../src/app/layout/marketingcom/marketingcom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/marketingcom/marketingcom.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__["a" /* ApiPlatformService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _c || Object])
], MarketingcomComponent);

var _a, _b, _c;
//# sourceMappingURL=marketingcom.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/marketingcom/marketingcom.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marketingcom_component__ = __webpack_require__("../../../../../src/app/layout/marketingcom/marketingcom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__marketingcom_routing_module__ = __webpack_require__("../../../../../src/app/layout/marketingcom/marketingcom-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filterdata_modifadressepoint_pipe__ = __webpack_require__("../../../../../src/app/layout/marketingcom/filterdata-modifadressepoint.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filterdata_reclamationsnonresolu_pipe__ = __webpack_require__("../../../../../src/app/layout/marketingcom/filterdata-reclamationsnonresolu.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingcomModule", function() { return MarketingcomModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MarketingcomModule = (function () {
    function MarketingcomModule() {
    }
    return MarketingcomModule;
}());
MarketingcomModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__marketingcom_routing_module__["a" /* MarketingcomRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__marketingcom_component__["a" /* MarketingcomComponent */],
            __WEBPACK_IMPORTED_MODULE_8__filterdata_modifadressepoint_pipe__["a" /* DataFilterModifAdressePointPipe */],
            __WEBPACK_IMPORTED_MODULE_9__filterdata_reclamationsnonresolu_pipe__["a" /* DataFilterfilterQueryReclamationsnonresoluPipe */],
        ]
    })
], MarketingcomModule);

//# sourceMappingURL=marketingcom.module.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map