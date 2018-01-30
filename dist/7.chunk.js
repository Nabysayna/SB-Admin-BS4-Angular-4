webpackJsonp([7],{

/***/ "../../../../../src/app/layout/liste-contacts/data-filter.pipe.ts":
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
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.libellepoint.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_proprietaire.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.email_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterContact"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/liste-contacts/mescontacts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mescontacts_component__ = __webpack_require__("../../../../../src/app/layout/liste-contacts/mescontacts.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesContactsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__mescontacts_component__["a" /* MesContactsComponent */] }
];
var MesContactsRoutingModule = (function () {
    function MesContactsRoutingModule() {
    }
    return MesContactsRoutingModule;
}());
MesContactsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], MesContactsRoutingModule);

//# sourceMappingURL=mescontacts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/liste-contacts/mescontacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Mes contacts'\" [icon]=\"'fa-table'\"></app-page-header>\r\n\r\n    <div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n        <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"points | dataFilterContact: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_proprietaire\">Propriétaire</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"email_gerant\">email</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"5\">Recherche: <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/></th>\r\n                        <th>Total : {{points.length}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"8\">\r\n                            <div style=\"color: black; text-align: center;\">\r\n                                <span style=\"background-color: blue;\"> Pas encore </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: orange;\"> Sentool </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: yellow;\"> Wafacash </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: green;\"> Sentool et Wafacash </span>\r\n                                <br/>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \" [ngStyle]=\"{'color': 'black', 'background-color': (item.infosup.service_sentool==1 && item.infosup.service_wafacash==1)?'green':(item.infosup.service_sentool==0 && item.infosup.service_wafacash==1)?'yellow':(item.infosup.service_sentool==1 && item.infosup.service_wafacash==0)?'green':'blue'}\">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname_proprietaire}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.email_gerant}}</td>\r\n                        <td>{{item.adresse}}, {{item.sous_zone}}, {{item.zone}}, {{item.region}}</td>\r\n                        <td><button *ngIf=\"item.infosup.service_sentool ==0 && item.infosup.service_wafacash==0\"  type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showModalModifPoint(contentModifPoint, item)\">Modifier</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #contentModifPoint let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <app-modif-pdv [infoprospect]=\"point\"></app-modif-pdv>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); getPointByCommercial();\">Fermer</button>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/liste-contacts/mescontacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/liste-contacts/mescontacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MesContactsComponent = (function () {
    function MesContactsComponent(modalService, _utilService) {
        this.modalService = modalService;
        this._utilService = _utilService;
        this.loading_data = true;
        this.rowsOnPage = 10;
        this.sortBy = "date_ajout";
        this.sortOrder = "desc";
        this.sortByWordLength = function (a) { return a.adresse.length; };
        this.points = [];
    }
    MesContactsComponent.prototype.ngOnInit = function () {
        this.loading_data = true;
        this.getPointByCommercial();
    };
    MesContactsComponent.prototype.getPointByCommercial = function () {
        var _this = this;
        this._utilService.getPointByCommercial()
            .subscribe(function (data) {
            console.log('------------------------');
            _this.points = data.message.map(function (type) {
                var adresse = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    infosup: JSON.parse(type.infosup),
                    libellepoint: type.nom_point,
                    fullname_gerant: type.prenom_gerant + ' ' + type.nom_gerant,
                    fullname_proprietaire: type.prenom_proprietaire + ' ' + type.nom_proprietaire,
                    region: adresse.regionpoint ? adresse.regionpoint : 'Dakar',
                    zone: adresse.zonepoint, sous_zone: adresse.souszonepoint,
                    adresse: adresse.adressepoint,
                    activites: JSON.parse(type.activites),
                    services: JSON.parse(type.services),
                    fichiers: JSON.parse(type.fichiers),
                    note: type.avis,
                    prenom_gerant: type.prenom_gerant,
                    nom_gerant: type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    email_gerant: type.email_gerant ? type.email_gerant : '-',
                    prenom_proprietaire: type.prenom_proprietaire,
                    nom_proprietaire: type.prenom_proprietaire,
                    telephone_proprietaire: type.telephone_gerant,
                    id_gerant_point: type.id_gerant_point,
                    id_proprietaire_point: type.id_proprietaire_point,
                    id_commercial: type.id_commercial,
                    date_ajout: type.date_ajout,
                };
            });
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
            console.log('');
        });
    };
    MesContactsComponent.prototype.toInt = function (num) { return +num; };
    MesContactsComponent.prototype.showModalModifPoint = function (content, point) {
        this.point = point;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
        }, function (reason) { });
    };
    return MesContactsComponent;
}());
MesContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mescontacts',
        template: __webpack_require__("../../../../../src/app/layout/liste-contacts/mescontacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/liste-contacts/mescontacts.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_4__services_assignation_suivi_service__["a" /* AssignationSuiviService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */]) === "function" && _b || Object])
], MesContactsComponent);

var _a, _b;
//# sourceMappingURL=mescontacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/liste-contacts/mescontacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_rating__ = __webpack_require__("../../../../ngx-bootstrap/rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mescontacts_routing_module__ = __webpack_require__("../../../../../src/app/layout/liste-contacts/mescontacts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/liste-contacts/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mescontacts_component__ = __webpack_require__("../../../../../src/app/layout/liste-contacts/mescontacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modif_pdv_modif_pdv_component__ = __webpack_require__("../../../../../src/app/layout/modif-pdv/modif-pdv.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesContactsModule", function() { return MesContactsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MesContactsModule = (function () {
    function MesContactsModule() {
    }
    return MesContactsModule;
}());
MesContactsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__mescontacts_routing_module__["a" /* MesContactsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
            }),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__mescontacts_component__["a" /* MesContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_11__modif_pdv_modif_pdv_component__["a" /* ModifPdvComponent */],
        ]
    })
], MesContactsModule);

//# sourceMappingURL=mescontacts.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/modif-pdv/modif-pdv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-bottom: 2rem\">\r\n  <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <h1>Modification Pdv</h1>\r\n    <hr>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\" *ngIf=\"alldatapoint && regionszonesactivites\">\r\n  <div class=\"col-sm-12\"  *ngIf=\"adresse_point\">\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-sm-12\">\r\n              <label for=\"nom_point\">Nom du point</label>\r\n              <input type=\"text\" name=\"nom_point\" id=\"nom_point\" [(ngModel)]=\"alldatapoint.nom_point\" class=\"form-control\"  placeholder=\"nom point\">\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-sm-4\">\r\n              <label>Region point</label>\r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.regionpoint\" (change)=\"selectRegionPoint()\">\r\n                  <option>--Choix région--</option>\r\n                  <option  *ngFor=\"let region of regionszonesactivites.regions\">{{region.nom}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n              <label>Zone point</label>\r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.zonepoint\" (change)=\"selectZonePoint()\">\r\n                  <option>--Choix zone--</option>\r\n                  <option  *ngFor=\"let zone of zonespoints\">{{zone.nom}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n              <label>Sous zone point</label>\r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.souszonepoint\">\r\n                  <option>--Choix sous zone--</option>\r\n                  <option  *ngFor=\"let souszone of souszonespoints\">{{souszone.nom}}</option>\r\n              </select>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-sm-6\">\r\n              <label>Code postale</label>\r\n              <input type=\"number\" [(ngModel)]=\"adresse_point.codepostalpoint\"   name=\"codepostalpoint\" id=\"codepostalpoint\" class=\"form-control\"  placeholder=\"code postal point\">\r\n          </div>\r\n          <fieldset class=\"form-group  col-sm-6\">\r\n              <label>Adresse du point</label>\r\n              <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"adresse_point.adressepoint\"   name=\"adressepoint\" id=\"adressepoint\" class=\"form-control\"  placeholder=\"adresse exacte\" required></textarea>\r\n          </fieldset>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Prénom gerant</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.prenom_gerant\"   name=\"prenomgerant\" id=\"prenomgerant\" class=\"form-control\"  placeholder={{infoprospect.prenom}} required>\r\n          </div>\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Nom gerant</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.nom_gerant\"   name=\"nomgerant\" id=\"nomgerant\" class=\"form-control\" placeholder={{infoprospect.nom}} required>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Téléphone gerant</label>\r\n            <input type=\"number\" [(ngModel)]=\"alldatapoint.telephone_gerant\"   name=\"telephonegerant\" id=\"telephonegerant\" class=\"form-control\" placeholder={{infoprospect.tel}} required>\r\n          </div>\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Email gerant</label>\r\n            <input type=\"email\" [(ngModel)]=\"alldatapoint.email_gerant\"   name=\"emailgerant\" id=\"emailgerant\" class=\"form-control\" placeholder={{infoprospect.email}} required>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Prénom proprietaire</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.prenom_proprietaire\"   name=\"prenomproprietaire\" id=\"prenomproprietaire\" class=\"form-control\"  placeholder=\"prénom proprietaire\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Nom proprietaire</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.nom_proprietaire\"   name=\"nomproprietaire\" id=\"nomproprietaire\" class=\"form-control\" placeholder=\"nom proprietaire\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Téléphone proprietaire</label>\r\n            <input type=\"number\" [(ngModel)]=\"alldatapoint.telephone_proprietaire\"   name=\"telephoneproprietaire\" id=\"telephoneproprietaire\" class=\"form-control\" placeholder=\"téléphone proprietaire\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Email proprietaire</label>\r\n            <input type=\"email\" [(ngModel)]=\"alldatapoint.email_proprietaire\"   name=\"emailproprietaire\" id=\"emailproprietaire\" class=\"form-control\" placeholder=\"email proprietaire\" required>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\" *ngIf=\"alldatapoint && regionszonesactivites\">\r\n  <h3 type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"isinfocomplement = !isinfocomplement\"><span><i class=\"fa fa-plus\" *ngIf=\"!isinfocomplement\"></i><i class=\"fa fa-window-minimize\" *ngIf=\"isinfocomplement\"></i> Info complementaire</span></h3>\r\n  <div *ngIf=\"isinfocomplement\">\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-xs-12 \">\r\n        <h4>Types d'activités du point</h4>\r\n          <div class=\"row\">\r\n              <div  *ngFor=\"let option of optionsActivite\"  class=\"col-sm-6 col-xs-12\">\r\n                  <input type=\"checkbox\" name=\"optionsActivite\" value=\"{{option.value}}\"\r\n                         [(ngModel)]=\"option.checked\" (change)=\"updateCheckedoptionsActivite()\"\r\n                  />\r\n                  {{option.name}}\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row center-block\" style=\"padding-top: 2rem; padding-bottom: 1rem\" *ngIf=\"!isEnregistrerProspect && alldatapoint\">\r\n  <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"enregistrerModif()\"\r\n            [disabled]=\"\r\n                !alldatapoint.nom_point ||\r\n                !alldatapoint.email_gerant ||\r\n                !alldatapoint.email_proprietaire ||\r\n                !alldatapoint.telephone_gerant ||\r\n                !alldatapoint.telephone_proprietaire ||\r\n                adresse_point.regionpoint=='--Choix région--' || adresse_point.zonepoint=='--Choix zone--' || adresse_point.souszonepoint=='--Choix sous zone--' || !adresse_point.adressepoint\r\n            \">Valider les nouvelles données</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isEnregistrerProspect\" class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n        <strong>Successfull!</strong> <br/>Veuillez cliquer sur Fermer pour sortir!\r\n    </ngb-alert>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/modif-pdv/modif-pdv.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/modif-pdv/modif-pdv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifPdvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModifPdvComponent = (function () {
    function ModifPdvComponent(_utilService, _assignationsuiviService, http, router) {
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this.http = http;
        this.router = router;
        this.staticAlertClosed = false;
        this.isEnregistrerProspect = false;
        this.uploadfinished = true;
        this.reponsesProspect = [];
        this.compteur = 0;
        this.adresse_point = { regionpoint: '', zonepoint: '', souszonepoint: '', adressepoint: '', codepostalpoint: 0, geospatialpoint: '' };
        this.isSelect = true;
        this.isinfocomplement = false;
        this.rating = [
            { indice: 0, checked: false },
            { indice: 1, checked: false },
            { indice: 2, checked: false },
            { indice: 3, checked: false },
            { indice: 4, checked: false },
        ];
        this.optionsActivite = [];
        this.apiEndPoint = 'http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/index.php';
        this.possibleAnswers = [
            {
                "reponse": "A Déjà Souscri"
            },
            {
                "reponse": "Souscrire Maintenant"
            },
            {
                "reponse": "Intéressé"
            },
            {
                "reponse": "Pas Pour le Moment"
            },
            {
                "reponse": "Impossible"
            },
        ];
    }
    ModifPdvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._utilService.getRegionZoneActivite()
            .subscribe(function (data) {
            _this.regionszonesactivites = data;
            var geospatialpoint = { latitude: 0, longitude: 0 };
            navigator.geolocation.getCurrentPosition(function (position) {
                geospatialpoint.longitude = position.coords.longitude;
                geospatialpoint.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint', JSON.stringify(geospatialpoint));
            });
        }, function (error) { return alert(error); }, function () {
            _this._utilService.getAllDataPoint(_this.infoprospect.id)
                .subscribe(function (data) {
                _this.alldatapoint = data;
                _this.avoter(_this.alldatapoint.avis - 1);
                _this.adresse_point = JSON.parse(_this.alldatapoint.adresse_point);
                _this.adresse_point.regionpoint = JSON.parse(_this.alldatapoint.adresse_point).regionpoint ? JSON.parse(_this.alldatapoint.adresse_point).regionpoint : 'Dakar';
                _this.adresse_point.zonepoint = JSON.parse(_this.alldatapoint.adresse_point).zonepoint;
                _this.adresse_point.souszonepoint = JSON.parse(_this.alldatapoint.adresse_point).souszonepoint;
                _this.adresse_point.codepostalpoint = JSON.parse(_this.alldatapoint.adresse_point).codepostalpoint;
                _this.adresse_point.geospatialpoint = JSON.parse(_this.alldatapoint.adresse_point).geospatialpoint;
                var letactivites = JSON.parse(_this.alldatapoint.activites);
                _this.optionsActivite = _this.regionszonesactivites.activites.map(function (type) {
                    if (letactivites.includes(type.activite)) {
                        return { name: type.activite, value: type.id, checked: true };
                    }
                    else {
                        return { name: type.activite, value: type.id, checked: false };
                    }
                });
            }, function (error) { return alert(error); }, function () {
                _this.selectRegionPoint();
                _this.selectZonePoint();
                _this.adresse_point.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
            });
        });
    };
    ModifPdvComponent.prototype.getAllServices = function () {
        var _this = this;
        this._utilService.getServices()
            .subscribe(function (data) { return _this.allServices = data; }, function (error) { return alert(error); }, function () {
            _this.isSelect = !_this.isSelect;
            for (var i = 0; i < _this.allServices.length; i++) {
                _this.reponsesProspect.push("");
            }
        });
    };
    ModifPdvComponent.prototype.selectRegionPoint = function () {
        var _this = this;
        this.adresse_point.zonepoint = '--Choix zone--';
        this.adresse_point.souszonepoint = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.adresse_point.regionpoint)
            .subscribe(function (data) { return _this.zonespoints = data; }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    ModifPdvComponent.prototype.selectZonePoint = function () {
        var _this = this;
        this._utilService.getSouszoneByZone(this.adresse_point.zonepoint)
            .subscribe(function (data) { return _this.souszonespoints = data; }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    ModifPdvComponent.prototype.coordonneesgeospatiales = function () {
        if (navigator.geolocation) {
            var geospatialpoint_1 = { latitude: 0, longitude: 0 };
            navigator.geolocation.getCurrentPosition(function (position) {
                geospatialpoint_1.longitude = position.coords.longitude;
                geospatialpoint_1.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint', JSON.stringify(geospatialpoint_1));
            });
        }
    };
    ModifPdvComponent.prototype.avoter = function (index) {
        if ((index + 1 == this.rating.length) && (this.rating[index].checked == true)) {
            this.rating[index].checked = false;
        }
        else {
            for (var i = 0; i < this.rating.length; i++) {
                if (i < index) {
                    this.rating[i].checked = true;
                }
                else if (i == index) {
                    if ((this.rating[i].checked == true) && (this.rating[i + 1].checked == false)) {
                        this.rating[i].checked = false;
                    }
                    else {
                        this.rating[i].checked = true;
                    }
                }
                else {
                    this.rating[i].checked = false;
                }
            }
        }
        var arrayRating = this.rating.filter(function (opt) { return opt.checked; });
    };
    Object.defineProperty(ModifPdvComponent.prototype, "selectedoptionsActivite", {
        get: function () {
            return this.optionsActivite
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    ModifPdvComponent.prototype.updateCheckedoptionsActivite = function () {
        var activites = this.regionszonesactivites.activites;
        this.alldatapoint.activites = this.selectedoptionsActivite.map(function (option) {
            return activites[Number(option) - 1].activite;
        });
    };
    ModifPdvComponent.prototype.enregistrerModif = function () {
        var _this = this;
        this.adresse_point.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
        this.alldatapoint.adresse_point = this.adresse_point;
        this.alldatapoint.activites = typeof this.alldatapoint.activites === 'string' ? JSON.parse(this.alldatapoint.activites) : this.alldatapoint.activites;
        this._utilService.modifPoint(this.alldatapoint)
            .subscribe(function (data) {
            _this.isEnregistrerProspect = true;
        }, function (error) { return alert(error); }, function () { return console.log('modifPoint'); });
    };
    ModifPdvComponent.prototype.fileChange = function (event) {
        var _this = this;
        this.uploadfinished = false;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            this.http.post("" + this.apiEndPoint, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error); })
                .subscribe(function (data) {
                var newData = data;
                _this.uploadFile = newData;
                _this.newImage = _this.uploadFile.generatedName;
            }, function (error) { return console.log(error); }, function () {
                _this.uploadfinished = true;
            });
        }
    };
    return ModifPdvComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModifPdvComponent.prototype, "infoprospect", void 0);
ModifPdvComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modif-pdv',
        template: __webpack_require__("../../../../../src/app/layout/modif-pdv/modif-pdv.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/modif-pdv/modif-pdv.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ModifPdvComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=modif-pdv.component.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map