webpackJsonp([5],{

/***/ "../../../../../src/app/layout/formuserbbs/formuserbbs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"commercial\">\r\n    <h2 style=\"text-align: center; margin: 0 auto\"> {{ commercial.type}} </h2>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\">\r\n  <div class=\"col-sm-12\">\r\n    <hr>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n              <label>Prénom</label>\r\n              <input type=\"text\" [(ngModel)]=\"commercial.prenom\"  name=\"prenomcom\" id=\"prenomcom\" class=\"form-control\"  placeholder=\"prénom commercial\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n              <label>Nom</label>\r\n              <input type=\"text\" [(ngModel)]=\"commercial.nom\" name=\"nomcom\" id=\"nomcom\" class=\"form-control\" placeholder=\"nom commercial\" required>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n              <label>Téléphone</label>\r\n              <input type=\"number\" [(ngModel)]=\"commercial.telephone\" name=\"telephonecom\" id=\"telephonecom\" class=\"form-control\" placeholder=\"téléphone commercial\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n              <label>Email</label>\r\n              <input type=\"email\" [(ngModel)]=\"commercial.email\" name=\"emailcom\" id=\"emailcom\" class=\"form-control\" placeholder=\"email commercial\" required>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Mot de passe</label>\r\n            <input type=\"password\" [(ngModel)]=\"commercial.pwd\" name=\"pwdcom\" id=\"pwdcom\" class=\"form-control\" placeholder=\"Mot de passe\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Confirm mot de passe</label>\r\n            <input type=\"password\" [(ngModel)]=\"confirmpwdcom\" name=\"confirpwdcom\" id=\"confirpwdcom\" class=\"form-control\" placeholder=\"Confirm mot de passe\" required>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"text-align: center; margin: 0 auto;\"  *ngIf=\"!isEnregistrerCommercial\">\r\n     <button  style=\"text-align: center; margin: 0 auto\" type=\"button\" class=\"btn btn-warning\" (click)=\"enregisternouvcom()\" [disabled]=\"!commercial.prenom || !commercial.telephone || !commercial.email || !commercial.pwd || commercial.pwd!=confirmpwdcom\"> Enregistrer </button>\r\n</div>\r\n\r\n<div *ngIf=\"isEnregistrerCommercial\" class=\"row\" style=\"text-align: center; margin: 0 auto;\">\r\n    <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n        <strong>Successfull!</strong> Commercial bien ajouté<br/>Veuillez cliquer sur Fermer pour sortir!\r\n    </ngb-alert>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/formuserbbs/formuserbbs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/formuserbbs/formuserbbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormuserbbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormuserbbsComponent = (function () {
    function FormuserbbsComponent(_utilService) {
        this._utilService = _utilService;
        this.staticAlertClosed = false;
        this.isEnregistrerCommercial = false;
    }
    FormuserbbsComponent.prototype.ngOnInit = function () {
        console.log(this.commercial);
    };
    FormuserbbsComponent.prototype.enregisternouvcom = function () {
        var _this = this;
        console.log(this.commercial);
        this._utilService.ajoutCommercial(this.commercial)
            .subscribe(function (data) {
            console.log(data);
            _this.isEnregistrerCommercial = true;
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    return FormuserbbsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FormuserbbsComponent.prototype, "commercial", void 0);
FormuserbbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-formuserbbs',
        template: __webpack_require__("../../../../../src/app/layout/formuserbbs/formuserbbs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/formuserbbs/formuserbbs.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _a || Object])
], FormuserbbsComponent);

var _a;
//# sourceMappingURL=formuserbbs.component.js.map

/***/ }),

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

module.exports = "<h3 class=\"page-header\"><u>Superviseur</u></h3>\r\n<div class=\"row\" style=\"padding-top: 1rem ; margin-bottom: 3rem\" >\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Assignation</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Suivi</button>\r\n        <!--<button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\" style=\"margin-bottom: 1rem;\">Extraction</button>-->\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead4, 'btn-success': menuHead.menuHead4}\" (click)=\"menuHeadClick(4)\" style=\"margin-bottom: 1rem;\">Clients à relancer</button>\r\n        <!--<button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead5, 'btn-success': menuHead.menuHead5}\" (click)=\"menuHeadClick(5)\" style=\"margin-bottom: 1rem;\">Clients valider</button>-->\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead6, 'btn-success': menuHead.menuHead6}\" (click)=\"menuHeadClick(6)\" style=\"margin-bottom: 1rem;\">Mes commerciaux</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead7, 'btn-success': menuHead.menuHead7}\" (click)=\"menuHeadClick(7)\" style=\"margin-bottom: 1rem;\">Deploiement</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-primary': !menuHead.menuHead8, 'btn-success': menuHead.menuHead8}\" (click)=\"menuHeadClick(8)\" style=\"margin-bottom: 1rem;\">Portefeuille</button>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\">\r\n    <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-sm-2\">\r\n            <label>Région</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreRegion\"  (change)=\"selectRegion()\">\r\n                <option>--Choix région--</option>\r\n                <option  *ngFor=\"let region of regions\">{{region}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label>Zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreZone\" (change)=\"selectZone()\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zones\">{{zone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Sous zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreSousZone\" (change)=\"selectSouszone()\">\r\n                <option>&#45;&#45;Choix sous zone&#45;&#45;</option>\r\n                <option  *ngFor=\"let souszone of sousZonesOfCurrentZone()\">{{souszone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Commercial</label>\r\n            <select name=\"singleSelectcommercial\"  id=\"singleSelectcommercial\" class=\"form-control input-sm\" [(ngModel)]=\"choixcommercial\">\r\n                <option [attr.value]=\"'-1'\">--Choix commercial--</option>\r\n                <option  *ngFor=\"let commercial of commercials\" [attr.value]=\"commercial.id\">{{commercial.prenom}} {{commercial.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label >Objectif</label>\r\n            <input type=\"number\" class=\"form-control input-sm\"  [(ngModel)]=\"objetifcommercial\" name=\"objetifcommercial\" />\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"isEnregistrerAssignation\" class=\"row col-sm-12 text-center center-block\">\r\n        <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n            <strong>Success!</strong> Assignation avec success.\r\n        </ngb-alert>\r\n    </div>\r\n    <div class=\"row col-sm-12 text-center center-block\" style=\"padding-bottom: 1rem\">\r\n        <button type=\"button\"\r\n                class=\"btn btn-warning  input-sm\"\r\n                (click)=\"assignercommercial()\"\r\n                style=\"margin-left: auto; margin-right: auto;\"\r\n                [disabled]=\"\r\n                    filtreZone == '--Choix zone--' ||\r\n                    filtreRegion == '--Choix région--' ||\r\n                    filtreSousZone == '--Choix sous zone--' ||\r\n                    choixcommercial == '--Choix commercial--' ||\r\n                    objetifcommercial <= 0 ||\r\n                    selectedOptions.length <= 0\r\n                \">Assigner</button>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"optionassignations\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"note\">Note</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"commentaire\">Commentaire</mfDefaultSorter></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>\r\n                            <input type=\"checkbox\" name=\"items\" value=\"{{item.value}}\"\r\n                                   [(ngModel)]=\"item.checked\" (change)=\"updateCheckedOptions()\"\r\n                            />\r\n                        </td>\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                        <td><textarea  class=\"form-control\" type=\"text\" name=\"commentaire-{{i}}\" placeholder=\"Notification\" [(ngModel)]=\"item.commentaire\">{{item.commentaire}}</textarea></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"datasuivi | dataFilterSuiviClient: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"note\">Note commercial</mfDefaultSorter></th>\r\n                        <th>Consultation</th>\r\n                        <th>Qualification</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/></th>\r\n                        <th>Total : {{datasuivi.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showModalDetail(contentSuivisuperviseurDetait,item)\">Détail Prospect</button></td>\r\n                        <td>\r\n                            <select class=\"form-control input-sm\" [(ngModel)]=\"item.qualification\">\r\n                                <option>--Choisir une action--</option>\r\n                                <option>Valider</option>\r\n                                <option>A relancer</option>\r\n                                <option>Abandonner</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"validersuivisuperviseur(item)\"\r\n                                [disabled]=\"item.qualification == '--Choisir une action--'\">valider suivi</button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"datasuivi | dataFilterSuiviClient: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Service</mfDefaultSorter></th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/></th>\r\n                        <th>Total : {{datasuivi.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td>service</td>\r\n                        <td><button class=\"btn btn-primary btn-sm\" (click)=\"showModal(content,i)\">Extraire document</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead4\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"datasuiviarelancer | dataFilterSuiviClient: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"note\">Note commercial</mfDefaultSorter></th>\r\n                        <th>Consultation</th>\r\n                        <th>Qualification</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/></th>\r\n                        <th>Total : {{datasuiviarelancer.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showModalDetail(contentSuivisuperviseurDetait,item)\">Détail Prospect</button></td>\r\n                        <td>\r\n                            <select class=\"form-control input-sm\" [(ngModel)]=\"item.qualification\">\r\n                                <option>--Choisir une action--</option>\r\n                                <option>Valider</option>\r\n                                <option>A relancer</option>\r\n                                <option>Abandonner</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"validersuiviarelancersuperviseur(item)\"\r\n                                    [disabled]=\"item.qualification == '--Choisir une action--'\">valider suivi</button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead5\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"datasuivivalider | dataFilterSuiviClient: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th>Consultation</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/></th>\r\n                        <th>Total : {{datasuivivalider.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showModalDetail(contentSuivisuperviseurDetait,item)\">Détail Prospect</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead6\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"commercials\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortByCom\" [(mfSortOrder)]=\"sortOrderCom\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"fullname\">Commercial</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"email\">Email</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/></th>\r\n                        <th>Total : {{commercials.length}}</th>\r\n                        <th colspan=\"2\" style=\"text-align: right\"><button type=\"button\"  (click)=\"showModalCommercial(contentAjoutCommercial,false)\" class=\"btn btn-warning\"> ajouter commercial </button></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.email}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead7\">\r\n\t<table class=\"table table-striped table-codensed\">\r\n                    <tr>\r\n\t\t\t\t\t\t<th>#</th>\r\n                        <th>Nom Point</th>\r\n                        <th>Gérant(e)</th>\r\n                        <th>Téléphone</th>\r\n                        <th>Adresse</th>\r\n                        <th>commercial</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n\t               <tr *ngFor=\"let p of prospects let i=index\">\r\n\t\t\t\t\t   <th>{{i+1}}</th>\r\n\t                   <td>{{p.libellepoint}}</td>\r\n\t                   <td>{{p.fullname}}</td>\r\n\t                   <td>{{p.telephone}}</td>\r\n\t                   <td>{{p.adresse}}</td>\r\n\t                   <td>{{p.nomcommercial}}</td>\r\n\t                   <td><input type=\"button\" (click)=\"rep1= false; ajout(contentnewclient,p)\" value=\"action\" class=\"btn btn-primary\" /></td>\r\n\r\n\t               </tr>\r\n\r\n\t</table>\r\n\r\n</div>\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead8\" >\r\n\t<table class=\"table table-striped table-codensed\">\r\n                    <tr>\r\n\t\t\t\t\t\t<th>#</th>\r\n                        <th>Nom Point</th>\r\n                        <th>Gérant(e)</th>\r\n                        <th>Téléphone</th>\r\n                        <th>Adresse</th>\r\n                        <th>Commercial</th>\r\n                    </tr>\r\n\t               <tr *ngFor=\"let p of clients let i=index\">\r\n\t\t\t\t\t   <td>{{i+1}}</td>\r\n\t                   <td>{{p.nom_point}}</td>\r\n\t                   <td>{{p.gerant}}</td>\r\n\t                   <td>{{p.tel}}</td>\r\n\t                   <td>{{p.adresse}}</td>\r\n\t                   <td>{{p.commercial}}</td>\r\n\t               </tr>\r\n\r\n\t</table>\r\n\r\n</div>\r\n<ng-template #contentnewclient let-c=\"close\" >\r\n\t<div class=\"modal-header\">\r\n\t\t<p>nouveau client sentool</p>\r\n\t</div>\r\n <div class=\"modal-body\">\r\n  <form #for=\"ngForm\" name=\"form\" method=\"post\">\r\n\t  <div>\r\n\t\t <div class=\"form-inline\">\r\n\t\t    <input name=\"entreprise\" [(ngModel)]=\"entreprise\" type=\"text\" value=\"\" style=\"margin-right:5px\" placeholder=\"nom de l'entreprise\" class=\"form-control\" required />\r\n\t\t    <input type=\"text\" name=\"boutique\" [(ngModel)]=\"boutique\" placeholder=\"nom de la boutique en ligne\" class=\"form-control\" required />\r\n\t\t </div>\r\n\t  </div><br>\r\n\t  <div>\r\n\t\t  <div class=\"form-group form-inline\">\r\n\t\t\t  <input type=\"text\" name=\"prenom\" [(ngModel)]=\"prenom\" style=\"margin-right:5px\" placeholder=\"prenom client\" class=\"form-control\" required />\r\n\t\t\t  <input type=\"text\" name=\"nom\" [(ngModel)]=\"nom\" placeholder=\"nom client\" class=\"form-control\" />\r\n\t\t  </div><br>\r\n\t\t  <div class=\"form-group form-inline\">\r\n\t\t\t  <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" style=\"margin-right:5px\" placeholder=\"email gerant\" class=\"form-control\" required />\r\n\t\t\t  <input type=\"text\" name=\"tel\" [(ngModel)]=\"tel\" placeholder=\"telephone gerant\" class=\"form-control\" required />\r\n\t\t  </div><br>\r\n\t  </div>\r\n\t   <div class=\"row\" >\r\n                       <div class=\"form-group col-sm-4\">\r\n                          <label for=\"regionSentool\">Région</label>\r\n                          <input type=\"text\" name=\"region\" [(ngModel)]=\"region\" class=\"form-control input-sm\" id=\"regionSentool\" required />\r\n                      </div>\r\n                      <div class=\"form-group col-sm-4\">\r\n                          <label for=\"zoneSentool\">Zones</label>\r\n                          <input type=\"text\" name=\"zne\" [(ngModel)]=\"zne\" class=\"form-control input-sm\" id=\"zoneSentool\" required />\r\n                      </div>\r\n                      <div class=\"form-group col-sm-4\">\r\n                          <label for=\"souszoneSentool\">Sous zones</label>\r\n                          <input type=\"text\" name=\"szone\" [(ngModel)]=\"szone\" class=\"form-control input-sm\" id=\"souszoneSentool\" required />\r\n\r\n                      </div>\r\n         </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-10\">\r\n\t\t\t <label>adresse exacte</label>\r\n\t\t\t <input name=\"adresse\" [(ngModel)]=\"adresse\" type=\"text\" class=\"form-control\" placeholder=\"adresse exacte\" />\r\n        </div>\r\n\t  </div>\r\n\t  <input *ngIf=\"!rep1\" type=\"button\" [disabled]=\"!for.valid\" (click)=\"validernewclientsentool(for)\"  value=\"valider\" class=\"btn btn-success\" />\r\n   </form>\r\n     <h5 *ngIf=\"rep1\" class=\"alert alert-success text-center\" style=\"text-align: center\">Enregistrement Reussi</h5>\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">fermer</button>\r\n\t</div>\r\n\r\n</ng-template>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Extraction</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"currentPointDocs\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                        <th>Libelle document</th>\r\n                        <th>Lien</th>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{getLibellePiece(item)}}</td>\r\n                        <td><a href=\"http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/uploads/{{getNomFichier(item)}}\">Afficher</a></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentSuivisuperviseurDetait let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Suivi de </h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"reponsesPointAuProspect\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                        <th>Service</th>\r\n                        <th>Réponse du Point</th>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{getLibellePiece(item)}}</td>\r\n                        <td>{{getNomFichier(item)}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentAjoutCommercial let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <app-formuserbbs [commercial]=\"commercial\"></app-formuserbbs>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); getCommerciaux()\">Fermer</button>\r\n    </div>\r\n</ng-template>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
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
    function SuperviseurComponent(_apiplatform, modalService, _utilService, _assignationsuiviService) {
        this._apiplatform = _apiplatform;
        this.modalService = modalService;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this.staticAlertClosed = false;
        this.isEnregistrerAssignation = false;
        this.filterQuery = "";
        this.filtreRegion = "--Choix région--";
        this.filtreZone = "--Choix zone--";
        this.filtreSousZone = "--Choix sous zone--";
        this.choixcommercial = "--Choix commercial--";
        this.objetifcommercial = 0;
        this.prenom = '';
        this.nom = '';
        this.email = '';
        this.region = '';
        this.szone = '';
        this.tel = '';
        this.adresse = '';
        this.entreprise = '';
        this.boutique = '';
        this.zne = '';
        this.clsentool = {
            nom: '', prenom: '', telephone: '', email: '',
            nometps: '', nomshop: '',
            adresse: {
                region: '--Choix région--',
                zone: '--Choix zone--',
                souszone: '--Choix sous zone--',
                address: '',
            },
        };
        this.readyforassination = true;
        this.isclickforassination = false;
        this.rowsOnPage = 12;
        this.sortBy = "note";
        this.sortOrder = "desc";
        this.sortByCom = "fullname";
        this.sortOrderCom = "asc";
        this.sortByWordLength = function (a) { return a.adresse.length; };
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.commercials = [];
        this.prospects = [];
        this.clients = [];
        this.data = [];
        this.optionassignations = [];
        this.datasuivi = [];
        this.datasuiviarelancer = [];
        this.datasuivivalider = [];
        this.client = {
            nomboutique: '',
            nompoint: '',
            adressecompletpoint: {
                regionpoint: '--Choix région--',
                zonepoint: '--Choix zone--',
                souszonepoint: '--Choix sous zone--',
                adressepoint: '',
                codepostalpoint: 0,
                geospatialpoint: { latitude: 0, longitude: 0 },
            },
            typeactivite: [],
            avissurpoint: 0,
            nomgerant: '',
            prenomgerant: '',
            telephonegerant: '779013878',
            emailgerant: '',
            nomproprietaire: '',
            prenomproprietaire: '',
            telephoneproprietaire: '',
            emailproprietaire: '',
            adressecompletproprietaire: {
                regionproprietaire: '--Choix région--',
                zoneproprietaire: '--Choix zone--',
                souszoneproprietaire: '--Choix sous zone--',
                adresseproprietaire: '',
                codepostalproprietaire: 0,
                geospatialproprietaire: { latitude: 0, longitude: 0 },
            },
            reponsesProspect: [],
            piecesFournies: []
        };
        this.clientsentool = {
            nom: '', prenom: '', telephone: '', email: '',
            nometps: '', nomshop: '',
            adresse: {
                region: '--Choix région--',
                zone: '--Choix zone--',
                souszone: '--Choix sous zone--',
                address: '',
            },
        };
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false, menuHead4: false, menuHead5: false, menuHead6: false, menuHead7: false, menuHead8: false };
        this.reponse1 = false;
    }
    SuperviseurComponent.prototype.ngOnInit = function () {
        this.getAssignationsBySuperviseur();
    };
    SuperviseurComponent.prototype.getAssignationsBySuperviseur = function () {
        var _this = this;
        this._assignationsuiviService.getAssignationsBySuperviseur()
            .subscribe(function (data) {
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
                    region: type.region ? type.region : 'Dakar', zone: type.zone, sous_zone: type.sous_zone,
                    commentaire: type.commentaire,
                    infosup: JSON.parse(type.infosup),
                    value: type.id, checked: false
                };
            });
            for (var i = 0; i < _this.data.length; i++) {
                if (!_this.regions.includes(_this.data[i].region))
                    _this.regions.push(_this.data[i].region);
            }
        }, function (error) { return alert(error); }, function () {
            console.log('getAssignationsBySuperviseur');
        });
    };
    SuperviseurComponent.prototype.menuHeadClick = function (option) {
        var _this = this;
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getAssignationsBySuperviseur();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(function (data) {
                _this.datasuivi = data.map(function (type) {
                    var client = JSON.parse(type.client);
                    if (!type.qualification) {
                        return {
                            id: type.id,
                            libellepoint: client.nom_point,
                            fullname: client.prenom_gerant + " " + client.nom_gerant,
                            telephone: client.telephone_gerant,
                            adresse: client.adresse_point.adressepoint,
                            note: type.note,
                            id_assigner: type.id_assigner,
                            id_commercial: type.id_commercial,
                            dates_suivi: type.dates_suivi,
                            reponse: type.reponse,
                            qualification: "--Choisir une action--",
                            client: client
                        };
                    }
                });
                _this.datasuivi = _this.datasuivi.filter(function (opt) { return opt; });
            }, function (error) { return alert(error); }, function () {
                console.log(_this.datasuivi);
            });
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
        }
        if (option == 4) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(function (data) {
                _this.datasuiviarelancer = data.map(function (type) {
                    var client = JSON.parse(type.client);
                    if (type.qualification) {
                        return {
                            id: type.id,
                            libellepoint: client.nom_point,
                            fullname: client.prenom_gerant + " " + client.nom_gerant,
                            telephone: client.telephone_gerant,
                            adresse: client.adresse_point.adressepoint,
                            note: type.note,
                            id_assigner: type.id_assigner,
                            id_commercial: type.id_commercial,
                            dates_suivi: type.dates_suivi,
                            reponse: type.reponse,
                            qualification: "--Choisir une action--",
                            client: client
                        };
                    }
                });
                _this.datasuiviarelancer = _this.datasuiviarelancer.filter(function (opt) { return opt; });
            }, function (error) { return alert(error); }, function () {
                console.log(_this.datasuivi);
            });
        }
        if (option == 5) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(function (data) {
                _this.datasuivivalider = _this.datasuivi.filter(function (opt) { return opt; });
            }, function (error) { return alert(error); }, function () {
                console.log(_this.datasuivi);
            });
        }
        if (option == 6) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = true;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getCommerciaux();
            console.log(this.commercials);
        }
        if (option == 7) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = true;
            this.menuHead.menuHead8 = false;
            this.getProspect();
        }
        if (option == 8) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = true;
            this.getClient();
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
    SuperviseurComponent.prototype.getProspect = function () {
        var _this = this;
        this._utilService.getProspectValide()
            .subscribe(function (data) {
            _this.prospects = data;
            console.log(_this.prospects);
            _this.prospects = data.map(function (type) {
                var client = JSON.parse(type.client);
                var commercial = JSON.parse(type.commercial);
                return {
                    id: type.id,
                    libellepoint: client.nom_point,
                    fullname: client.prenom_gerant + " " + client.nom_gerant,
                    telephone: client.telephone_gerant,
                    adresse: client.adresse_point.adressepoint,
                    email: client.email_gerant,
                    note: type.note,
                    id_assigner: type.id_assigner,
                    id_commercial: type.id_commercial,
                    dates_suivi: type.dates_suivi,
                    reponse: type.reponse,
                    qualification: "--Choisir une action--",
                    client: client,
                    zone: client.adresse_point.zonepoint,
                    szone: client.adresse_point.souszonepoint,
                    nomcommercial: commercial.prenom + " " + commercial.prenom
                };
            });
            if (data.errorCode)
                _this.prospects = data;
        }, function (error) { return alert(error); }, function () { return console.log(_this.commercials); });
    };
    SuperviseurComponent.prototype.getClient = function () {
        var _this = this;
        this._utilService.getClients()
            .subscribe(function (data) {
            _this.clients = data;
            console.log(_this.clients);
            _this.clients = data.map(function (type, data) {
                var client = JSON.parse(type.adresse);
                return {
                    adresse: client.adressepoint,
                    gerant: type.gerant + " " + type.gerantnom,
                    tel: type.tel,
                    nom_point: type.nom_point,
                    commercial: type.commercial,
                };
            });
            if (data.errorCode)
                _this.clients = data;
        }, function (error) { return alert(error); }, function () { return console.log(_this.clients); });
    };
    SuperviseurComponent.prototype.ajout = function (content, p) {
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) { });
        this.remplissage(p);
    };
    //select region
    SuperviseurComponent.prototype.SelectRegion = function () {
        var _this = this;
        this.clientsentool.adresse.zone = '--Choix zone--';
        this.clientsentool.adresse.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.clientsentool.adresse.region)
            .subscribe(function (data) { return _this.zones = data; }, function (error) { return alert(error); }, function () { return console.log(_this.zones); });
    };
    SuperviseurComponent.prototype.clear = function () {
        this.prenom = '';
        this.nom = '';
        this.email = '';
        this.region = '';
        this.zne = '';
        this.szone = '';
        this.entreprise = '';
        this.boutique = '';
        this.adresse = '';
        this.tel = '';
    };
    SuperviseurComponent.prototype.remplissage = function (p) {
        var full = p.fullname.split(' ');
        var ng = full.length;
        var prenom = full[0];
        for (var i = 1; i <= ng - 2; i++) {
            prenom += " " + full[i];
        }
        this.prenom = prenom;
        this.nom = full[ng - 1];
        this.email = p.email;
        this.tel = p.telephone;
        this.adresse = p.adresse;
        this.entreprise = p.libellepoint;
        this.zne = p.zone;
        this.szone = p.szone;
    };
    SuperviseurComponent.prototype.validernewclientsentool = function (form) {
        var _this = this;
        var cli = form.value;
        this.clsentool.nom = cli.nom;
        this.clsentool.prenom = cli.prenom;
        this.clsentool.email = cli.email;
        this.clsentool.telephone = cli.tel;
        this.clsentool.nometps = cli.entreprise;
        this.clsentool.nomshop = cli.boutique;
        this.clsentool.adresse.region = cli.region;
        this.clsentool.adresse.zone = cli.zne;
        this.clsentool.adresse.souszone = cli.szone;
        this.clsentool.adresse.address = cli.adresse;
        this._apiplatform.souscrireSentool(this.clsentool)
            .subscribe(function (data) {
            //console.log(data);
            if (data.message && data.message == 'dejainscrit') {
                console.log('deja incrit');
            }
            else {
                _this.rep1 = true;
            }
        }, function (error) { return alert(error); }, function () { return console.log('souscrireSentool'); });
    };
    SuperviseurComponent.prototype.getgerant = function (p) {
        //return p.split("#")[0] ;
        return p.nom_point;
    };
    SuperviseurComponent.prototype.getRegionActivite = function () {
        var _this = this;
        this._utilService.getRegionActivite()
            .subscribe(function (data) {
            console.log(data);
            _this.regionsactivites = data;
        }, function (error) { return alert(error); }, function () { return console.log(_this.regionsactivites); });
    };
    SuperviseurComponent.prototype.selectRegion = function () {
        this.filtreSousZone = "--Choix sous zone--";
        this.optionassignations = [];
        console.log(this.filtreRegion);
        this.zones = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].region == this.filtreRegion) {
                if (!this.zones.includes(this.data[i].zone))
                    this.zones.push(this.data[i].zone);
            }
        }
        console.log(this.zones);
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
            this.filtreRegion == "--Choix région--" ||
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
                _this.regions = [];
                _this.filtreRegion = "--Choix région--";
                _this.objetifcommercial = 0;
                _this.getAssignationsBySuperviseur();
                _this.selectRegion();
            }, function (error) { return alert(error); }, function () {
                console.log('assignationcommercial');
            });
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
    SuperviseurComponent.prototype.showModalCommercial = function (content, commercial) {
        this.commercial = commercial ? commercial : { type: 'Nouveau commercial', prenom: '', nom: '', login: '', pwd: '', telephone: 77 };
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) { });
    };
    SuperviseurComponent.prototype.showModalDetail = function (content, item) {
        this.reponsesPointAuProspect = JSON.parse(item.reponse);
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
            id_assigner: suivi.id_assigner,
            id_commercial: suivi.id_commercial,
        };
        this.datasuivi = this.datasuivi.filter(function (opt) { return opt != suivi; });
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return alert(error); }, function () {
            console.log('ajoutsuivifromsuperviseur');
        });
    };
    SuperviseurComponent.prototype.validersuiviarelancersuperviseur = function (suivi) {
        var suivisuperviseur = {
            id: suivi.id,
            dates_suivi: JSON.parse(suivi.dates_suivi),
            reponse: suivi.reponse,
            qualification: suivi.qualification,
            id_assigner: suivi.id_assigner,
            id_commercial: suivi.id_commercial,
        };
        this.datasuiviarelancer = this.datasuiviarelancer.filter(function (opt) { return opt != suivi; });
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return alert(error); }, function () {
            console.log('ajoutsuivifromsuperviseur');
        });
    };
    return SuperviseurComponent;
}());
SuperviseurComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-superviseur',
        template: __webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */], __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _d || Object])
], SuperviseurComponent);

var _a, _b, _c, _d;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__formuserbbs_formuserbbs_component__ = __webpack_require__("../../../../../src/app/layout/formuserbbs/formuserbbs.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_14__formuserbbs_formuserbbs_component__["a" /* FormuserbbsComponent */],
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
//# sourceMappingURL=5.chunk.js.map