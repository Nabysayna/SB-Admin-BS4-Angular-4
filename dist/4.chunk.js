webpackJsonp([4],{

/***/ "../../../../../src/app/layout/superviseur/data-filter.pipe.ts":
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

/***/ "../../../../../src/app/layout/superviseur/souszones-filter.pipe.ts":
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

/***/ "../../../../../src/app/layout/superviseur/superviseur-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superviseur_component__ = __webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperviseurRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__superviseur_component__["a" /* SuperviseurComponent */] }
];
var SuperviseurRoutingModule = (function () {
    function SuperviseurRoutingModule() {
    }
    return SuperviseurRoutingModule;
}());
SuperviseurRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], SuperviseurRoutingModule);

//# sourceMappingURL=superviseur-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/superviseur.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header\"><u>Superviseur</u></h3>\r\n<div class=\"row\" style=\"padding-top: 1rem ; margin-bottom: 3rem\" >\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\">Assignation</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\">Suivi</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\">Extraction</button>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\">\r\n    <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-sm-3\">\r\n            <label>Zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreZone\"  (change)=\"selectZone()\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zones\">{{zone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Sous zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreSousZone\" (change)=\"selectSouszone()\">\r\n                <option>--Choix sous zone--</option>\r\n                <option  *ngFor=\"let souszone of sousZonesOfCurrentZone()\">{{souszone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <label>Commercial</label>\r\n            <select name=\"singleSelectcommercial\"  id=\"singleSelectcommercial\" class=\"form-control input-sm\" [(ngModel)]=\"choixcommercial\">\r\n                <option [attr.value]=\"'-1'\">--Choix commercial--</option>\r\n                <option  *ngFor=\"let commercial of commercials\" [attr.value]=\"commercial.id\">{{commercial.prenom}} {{commercial.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label >Objectif</label>\r\n            <input type=\"number\" class=\"form-control input-sm\"  [(ngModel)]=\"objetifcommercial\" name=\"objetifcommercial\" />\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"isEnregistrerAssignation\" class=\"row col-sm-12 text-center center-block\">\r\n        <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n            <strong>Success!</strong> Assignation avec success.\r\n        </ngb-alert>\r\n    </div>\r\n    <div class=\"row col-sm-12 text-center center-block\" style=\"padding-bottom: 1rem\">\r\n        <button type=\"button\"\r\n                class=\"btn btn-warning  input-sm\"\r\n                (click)=\"assignercommercial()\"\r\n                style=\"margin-left: auto; margin-right: auto;\"\r\n                [disabled]=\"\r\n                    filtreZone == '--Choix zone--' ||\r\n                    filtreSousZone == '--Choix sous zone--' ||\r\n                    choixcommercial == '--Choix commercial--' ||\r\n                    objetifcommercial <= 0 ||\r\n                    selectedOptions.length <= 0\r\n                \">Assigner</button>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"optionassignations\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"note\">Note</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"commentaire\">Commentaire</mfDefaultSorter></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>\r\n                            <input type=\"checkbox\" name=\"items\" value=\"{{item.value}}\"\r\n                                   [(ngModel)]=\"item.checked\" (change)=\"updateCheckedOptions()\"\r\n                            />\r\n                        </td>\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                        <td><textarea  class=\"form-control\" placeholder=\"Notification\" [(ngModel)]=\"item.commentaire\">{{item.commentaire}}</textarea></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"datasuivi | dataFilterSuiviClient: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"note\">Note commercial</mfDefaultSorter></th>\r\n                        <th>Consultation</th>\r\n                        <th>Qualification</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\">\r\n                            Recherche:\r\n                            <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/>\r\n\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showModalDetail(contentSuivisuperviseurDetait,i)\">Détail Prospect</button></td>\r\n                        <td>\r\n                            <select class=\"form-control input-sm\" [(ngModel)]=\"item.qualification\">\r\n                                <option>--Choisir une action--</option>\r\n                                <option>Valider</option>\r\n                                <option>A relancer</option>\r\n                                <option>Abandonner</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"validersuivisuperviseur(item)\"\r\n                                [disabled]=\"item.qualification == '--Choisir une action--' || !item.reponse\">valider suivi</button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"datasuivi | dataFilterSuiviClient: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Service</mfDefaultSorter></th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\">\r\n                            Recherche:\r\n                            <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/>\r\n\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td>service</td>\r\n                        <td><button class=\"btn btn-primary btn-sm\" (click)=\"showModal(content,i)\">Extraire document</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Extraction</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"currentPointDocs\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                        <th>Libelle document</th>\r\n                        <th>Lien</th>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{getLibellePiece(item)}}</td>\r\n                        <td><a href=\"http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/uploads/{{getNomFichier(item)}}\">Afficher</a></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentSuivisuperviseurDetait let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Suivi de </h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"reponsesPointAuProspect\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                        <th>Service</th>\r\n                        <th>Réponse du Point</th>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{getLibellePiece(item)}}</td>\r\n                        <td>{{getNomFichier(item)}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/superviseur.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/superviseur.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperviseurComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuperviseurComponent = (function () {
    function SuperviseurComponent(modalService, _utilService, _assignationsuiviService) {
        this.modalService = modalService;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this.staticAlertClosed = false;
        this.isEnregistrerAssignation = false;
        this.filterQuery = "";
        this.filtreZone = "--Choix zone--";
        this.filtreSousZone = "--Choix sous zone--";
        this.choixcommercial = "--Choix commercial--";
        this.objetifcommercial = 0;
        this.readyforassination = true;
        this.isclickforassination = false;
        this.rowsOnPage = 5;
        this.sortBy = "note";
        this.sortOrder = "desc";
        this.sortByWordLength = function (a) { return a.adresse.length; };
        this.zones = [];
        this.souszones = [];
        this.commercials = [];
        this.data = [];
        this.optionassignations = [];
        this.datasuivi = [];
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false };
    }
    SuperviseurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._assignationsuiviService.getAssignationsBySuperviseur()
            .subscribe(function (data) {
            console.log(data);
            _this.data = data.map(function (type) {
                return {
                    id: type.id,
                    libellepoint: JSON.parse(type.client).libellepoint,
                    prenom: JSON.parse(type.client).prenom,
                    nom: JSON.parse(type.client).nom,
                    fullname: JSON.parse(type.client).fullname,
                    telephone: JSON.parse(type.client).telephone,
                    adresse: JSON.parse(type.client).adresse,
                    note: JSON.parse(type.client).note,
                    zone: type.zone, sous_zone: type.sous_zone,
                    commentaire: '',
                    infosup: JSON.parse(type.infosup),
                    value: type.id, checked: false
                };
            });
            for (var i = 0; i < _this.data.length; i++) {
                if (!_this.zones.includes(_this.data[i].zone))
                    _this.zones.push(_this.data[i].zone);
            }
            console.log(_this.zones);
        }, function (error) { return alert(error); }, function () {
            console.log(_this.data);
            _this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(function (data) {
                console.log(data);
                _this.datasuivi = data.map(function (type) {
                    var client = JSON.parse(type.client);
                    console.log(client);
                    return {
                        id: type.id,
                        libellepoint: client.nom_point,
                        fullname: client.prenom_gerant + " " + client.nom_gerant,
                        telephone: client.telephone_gerant,
                        adresse: client.adresse_point.adressepoint,
                        note: type.note,
                        dates_suivi: type.dates_suivi,
                        reponse: "",
                        qualification: "--Choisir une action--",
                        client: client,
                    };
                });
            }, function (error) { return alert(error); }, function () { return console.log(_this.datasuivi); });
        });
    };
    SuperviseurComponent.prototype.menuHeadClick = function (option) {
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
        }
    };
    SuperviseurComponent.prototype.toInt = function (num) { return +num; };
    SuperviseurComponent.prototype.getCommerciaux = function () {
        var _this = this;
        this._utilService.getCommerciauxBySuperviseur()
            .subscribe(function (data) {
            _this.commercials = data;
            if (data.errorCode)
                _this.commercials = data.message;
        }, function (error) { return alert(error); }, function () { return console.log(_this.commercials); });
    };
    SuperviseurComponent.prototype.sousZonesOfCurrentZone = function () {
        var souszones = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].zone == this.filtreZone) {
                if (!souszones.includes(this.data[i].sous_zone))
                    souszones.push(this.data[i].sous_zone);
            }
        }
        return souszones;
    };
    SuperviseurComponent.prototype.selectZone = function () {
        this.optionassignations = [];
    };
    SuperviseurComponent.prototype.selectSouszone = function () {
        var _this = this;
        this.getCommerciaux();
        this.optionassignations = this.data
            .filter(function (data) { return (data.zone == _this.filtreZone && data.sous_zone == _this.filtreSousZone); });
    };
    Object.defineProperty(SuperviseurComponent.prototype, "selectedOptions", {
        get: function () {
            return this.optionassignations
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    SuperviseurComponent.prototype.updateCheckedOptions = function () {
        console.log(this.selectedOptions);
    };
    SuperviseurComponent.prototype.assignercommercial = function () {
        var _this = this;
        this.isclickforassination = true;
        if (this.filtreZone == "--Choix zone--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixcommercial == "--Choix commercial--" ||
            this.objetifcommercial == 0) {
            console.log(this.filtreZone + '-' + this.filtreSousZone + '-' + this.choixcommercial + '-' + this.objetifcommercial);
            this.readyforassination = false;
        }
        else {
            var optionassignations_1 = this.optionassignations;
            var assignes = this.selectedOptions.map(function (option) {
                return optionassignations_1.find(function (assigne) { return assigne.id == Number(option); });
            });
            var assignations = {
                commercial: this.commercials.find(function (commercial) { return commercial.id == _this.choixcommercial; }),
                assignes: assignes,
                infosup: {
                    date_assignationsuperviser: '',
                    objectifsuperviseur: '',
                    commentaireforsuperviseur: '',
                    date_assignationcommercial: '',
                    objectifcommercial: this.objetifcommercial,
                    commentaireforcommercial: ''
                }
            };
            console.log(assignations);
            this._assignationsuiviService.assignationcommercial(assignations)
                .subscribe(function (data) {
                console.log(data);
                _this.isEnregistrerAssignation = true;
                _this.filtreZone = "--Choix zone--";
                _this.selectZone();
            }, function (error) { return alert(error); }, function () { return console.log('assignationcommercial'); });
        }
    };
    SuperviseurComponent.prototype.getLibellePiece = function (item) {
        return item.split("#")[0];
    };
    SuperviseurComponent.prototype.getNomFichier = function (item) {
        return item.split("#")[1];
    };
    SuperviseurComponent.prototype.showModal = function (content, i) {
        this.currentPointDocs = JSON.parse(this.datasuivi[i].client.fichiers);
        console.log(this.currentPointDocs);
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) { });
    };
    SuperviseurComponent.prototype.showModalDetail = function (content, i) {
        this.reponsesPointAuProspect = JSON.parse(this.datasuivi[i].client.services);
        console.log(this.reponsesPointAuProspect);
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) { });
    };
    SuperviseurComponent.prototype.validersuivisuperviseur = function (suivi) {
        var suivisuperviseur = {
            id: suivi.id,
            dates_suivi: JSON.parse(suivi.dates_suivi),
            reponse: suivi.reponse,
            qualification: suivi.qualification,
        };
        //console.log(suivisuperviseur);
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(function (data) { return console.log(data); }, function (error) { return alert(error); }, function () { return console.log('ajoutsuivifromsuperviseur'); });
    };
    return SuperviseurComponent;
}());
SuperviseurComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-superviseur',
        template: __webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _c || Object])
], SuperviseurComponent);

var _a, _b, _c;
//# sourceMappingURL=superviseur.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/superviseur.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progressionby_progressionby_module__ = __webpack_require__("../../../../../src/app/layout/progressionby/progressionby.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ratingbyoption_ratingbyoption_module__ = __webpack_require__("../../../../../src/app/layout/ratingbyoption/ratingbyoption.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__superviseur_component__ = __webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__superviseur_routing_module__ = __webpack_require__("../../../../../src/app/layout/superviseur/superviseur-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__zones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/zones-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__souszones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/souszones-filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperviseurModule", function() { return SuperviseurModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SuperviseurModule = (function () {
    function SuperviseurModule() {
    }
    return SuperviseurModule;
}());
SuperviseurModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__superviseur_routing_module__["a" /* SuperviseurRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5__progressionby_progressionby_module__["a" /* ProgressionbyModule */],
            __WEBPACK_IMPORTED_MODULE_6__ratingbyoption_ratingbyoption_module__["a" /* RatingbyoptionModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__superviseur_component__["a" /* SuperviseurComponent */],
            __WEBPACK_IMPORTED_MODULE_11__data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_12__zones_filter_pipe__["a" /* ZonesFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_13__souszones_filter_pipe__["a" /* SousZonesFilterPipe */],
        ]
    })
], SuperviseurModule);

//# sourceMappingURL=superviseur.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/zones-filter.pipe.ts":
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

/***/ })

});
//# sourceMappingURL=4.chunk.js.map