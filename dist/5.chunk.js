webpackJsonp([5],{

/***/ "../../../../../src/app/layout/fullusing/cartographie/cartographie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" class=\"btn btn-dark btn-sm\" (click)=\"goBack()\" style=\"margin-bottom: 1rem;\">Précedent</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Points crm</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Points sentool</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\" style=\"margin-bottom: 1rem;\">Points avec dépot</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead4, 'btn-success': menuHead.menuHead4}\" (click)=\"menuHeadClick(4)\" style=\"margin-bottom: 1rem;\">Gérant point sentool</button>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\" style=\"background-color: white\">\r\n    <agm-map [latitude]=\"centercartelat\" [longitude]=\"centercartelng\" [zoom]=\"centercartezoom\" [fullscreenControl]=\"true\" [mapTypeControl]=\"true\">\r\n        <agm-marker [latitude]=\"centercartelat\" [longitude]=\"centercartelng\" [title]=\"title\" [label]=\"title\" >\r\n            <agm-info-window><strong>InfoWindow content</strong></agm-info-window>\r\n        </agm-marker>\r\n    </agm-map>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    Hi\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/cartographie/cartographie.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 75vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/cartographie/cartographie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartographieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartographieComponent = (function () {
    function CartographieComponent(location, _apiPlatformService, modalService) {
        this.location = location;
        this._apiPlatformService = _apiPlatformService;
        this.modalService = modalService;
        this.loading_data = true;
        this.menuHead = { menuHead1: true, menuHead2: false };
        this.title = '12';
        this.test = 100000;
        this.centercartelat = 14.497401;
        this.centercartelng = -14.452361999999994;
        this.centercartezoom = 7;
    }
    CartographieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading_data = false;
        this.getSetInterval = setInterval(function () {
            _this.title = _this.tocurrency(_this.test++);
        }, 1000);
    };
    CartographieComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.getSetInterval);
    };
    CartographieComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    CartographieComponent.prototype.goBack = function () {
        this.location.back();
    };
    CartographieComponent.prototype.menuHeadClick = function (option) {
        this.loading_data = true;
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.loading_data = false;
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.loading_data = false;
        }
    };
    return CartographieComponent;
}());
CartographieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cartographie',
        template: __webpack_require__("../../../../../src/app/layout/fullusing/cartographie/cartographie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/fullusing/cartographie/cartographie.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object])
], CartographieComponent);

var _a, _b, _c;
//# sourceMappingURL=cartographie.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/filterdata-restantrelequat.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterRestantRelequatPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterRestantRelequatPipe = (function () {
    function DataFilterRestantRelequatPipe() {
    }
    DataFilterRestantRelequatPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.etatpositionnement.toLocaleString().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterRestantRelequatPipe;
}());
DataFilterRestantRelequatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterRestantRelequat"
    })
], DataFilterRestantRelequatPipe);

//# sourceMappingURL=filterdata-restantrelequat.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/fullusing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fullusing_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/fullusing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartographie_cartographie_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/cartographie/cartographie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reliquat_reliquat_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/reliquat/reliquat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modif_pdv_incomplet_modif_pdv_incomplet_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/modif-pdv-incomplet/modif-pdv-incomplet.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullusingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__fullusing_component__["a" /* FullusingComponent */] },
    { path: 'cartographie', component: __WEBPACK_IMPORTED_MODULE_3__cartographie_cartographie_component__["a" /* CartographieComponent */] },
    { path: 'reliquat', component: __WEBPACK_IMPORTED_MODULE_4__reliquat_reliquat_component__["a" /* ReliquatComponent */] },
    { path: 'modif-pdv', component: __WEBPACK_IMPORTED_MODULE_5__modif_pdv_incomplet_modif_pdv_incomplet_component__["a" /* ModifPdvIncompletComponent */] },
];
var FullusingRoutingModule = (function () {
    function FullusingRoutingModule() {
    }
    return FullusingRoutingModule;
}());
FullusingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], FullusingRoutingModule);

//# sourceMappingURL=fullusing-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/fullusing.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/fullusing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/fullusing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullusingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullusingComponent = (function () {
    function FullusingComponent() {
        this.loading_data = true;
    }
    FullusingComponent.prototype.ngOnInit = function () {
        //        this.loading_data = true;
    };
    FullusingComponent.prototype.ngOnDestroy = function () {
    };
    return FullusingComponent;
}());
FullusingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fullusing',
        template: __webpack_require__("../../../../../src/app/layout/fullusing/fullusing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/fullusing/fullusing.component.scss")],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], FullusingComponent);

//# sourceMappingURL=fullusing.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/fullusing.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fullusing_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/fullusing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fullusing_routing_module__ = __webpack_require__("../../../../../src/app/layout/fullusing/fullusing-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cartographie_cartographie_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/cartographie/cartographie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reliquat_reliquat_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/reliquat/reliquat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modif_pdv_incomplet_modif_pdv_incomplet_component__ = __webpack_require__("../../../../../src/app/layout/fullusing/modif-pdv-incomplet/modif-pdv-incomplet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filterdata_restantrelequat_pipe__ = __webpack_require__("../../../../../src/app/layout/fullusing/filterdata-restantrelequat.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullusingModule", function() { return FullusingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FullusingModule = (function () {
    function FullusingModule() {
    }
    return FullusingModule;
}());
FullusingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__fullusing_routing_module__["a" /* FullusingRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
            }),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__fullusing_component__["a" /* FullusingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__cartographie_cartographie_component__["a" /* CartographieComponent */],
            __WEBPACK_IMPORTED_MODULE_11__reliquat_reliquat_component__["a" /* ReliquatComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modif_pdv_incomplet_modif_pdv_incomplet_component__["a" /* ModifPdvIncompletComponent */],
            __WEBPACK_IMPORTED_MODULE_13__filterdata_restantrelequat_pipe__["a" /* DataFilterRestantRelequatPipe */],
        ]
    })
], FullusingModule);

//# sourceMappingURL=fullusing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/modif-pdv-incomplet/modif-pdv-incomplet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" class=\"btn btn-dark btn-sm\" (click)=\"goBack()\" style=\"margin-bottom: 1rem;\">Retour</button>\r\n    </div>\r\n    <hr>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\" *ngIf=\"alldatapoint && regionszonesactivites\">\r\n  <div class=\"col-sm-12\"  *ngIf=\"adresse_point\">\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-sm-12\">\r\n              <label for=\"nom_point\">Nom du point</label>\r\n              <input type=\"text\" name=\"nom_point\" id=\"nom_point\" [(ngModel)]=\"alldatapoint.nom_point\" class=\"form-control\"  placeholder=\"nom point\">\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-sm-4\">\r\n              <label>Region point</label>\r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.regionpoint\" (change)=\"selectRegionPoint()\">\r\n                  <option>--Choix région--</option>\r\n                  <option  *ngFor=\"let region of regionszonesactivites.regions\">{{region.nom}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n              <label>Zone point</label>\r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.zonepoint\" (change)=\"selectZonePoint()\">\r\n                  <option>--Choix zone--</option>\r\n                  <option  *ngFor=\"let zone of zonespoints\">{{zone.nom}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n              <label>Sous zone point</label>\r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.souszonepoint\">\r\n                  <option>--Choix sous zone--</option>\r\n                  <option  *ngFor=\"let souszone of souszonespoints\">{{souszone.nom}}</option>\r\n              </select>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-sm-6\">\r\n              <label>Code postale</label>\r\n              <input type=\"number\" [(ngModel)]=\"adresse_point.codepostalpoint\"   name=\"codepostalpoint\" id=\"codepostalpoint\" class=\"form-control\"  placeholder=\"code postal point\">\r\n          </div>\r\n          <fieldset class=\"form-group  col-sm-6\">\r\n              <label>Adresse du point</label>\r\n              <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"adresse_point.adressepoint\"   name=\"adressepoint\" id=\"adressepoint\" class=\"form-control\"  placeholder=\"adresse exacte\" required></textarea>\r\n          </fieldset>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Prénom gerant</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.prenom_gerant\"   name=\"prenomgerant\" id=\"prenomgerant\" class=\"form-control\"  placeholder={{infoprospect.prenom}} required>\r\n          </div>\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Nom gerant</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.nom_gerant\"   name=\"nomgerant\" id=\"nomgerant\" class=\"form-control\" placeholder={{infoprospect.nom}} required>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Téléphone gerant</label>\r\n            <input type=\"number\" [(ngModel)]=\"alldatapoint.telephone_gerant\"   name=\"telephonegerant\" id=\"telephonegerant\" class=\"form-control\" placeholder={{infoprospect.tel}} required>\r\n          </div>\r\n          <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n            <label>Email gerant</label>\r\n            <input type=\"email\" [(ngModel)]=\"alldatapoint.email_gerant\"   name=\"emailgerant\" id=\"emailgerant\" class=\"form-control\" placeholder={{infoprospect.email}} required>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Prénom proprietaire</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.prenom_proprietaire\"   name=\"prenomproprietaire\" id=\"prenomproprietaire\" class=\"form-control\"  placeholder=\"prénom proprietaire\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Nom proprietaire</label>\r\n            <input type=\"text\" [(ngModel)]=\"alldatapoint.nom_proprietaire\"   name=\"nomproprietaire\" id=\"nomproprietaire\" class=\"form-control\" placeholder=\"nom proprietaire\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Téléphone proprietaire</label>\r\n            <input type=\"number\" [(ngModel)]=\"alldatapoint.telephone_proprietaire\"   name=\"telephoneproprietaire\" id=\"telephoneproprietaire\" class=\"form-control\" placeholder=\"téléphone proprietaire\" required>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Email proprietaire</label>\r\n            <input type=\"email\" [(ngModel)]=\"alldatapoint.email_proprietaire\"   name=\"emailproprietaire\" id=\"emailproprietaire\" class=\"form-control\" placeholder=\"email proprietaire\" required>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\" *ngIf=\"alldatapoint && regionszonesactivites\">\r\n  <h3 type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"isinfocomplement = !isinfocomplement\"><span><i class=\"fa fa-plus\" *ngIf=\"!isinfocomplement\"></i><i class=\"fa fa-window-minimize\" *ngIf=\"isinfocomplement\"></i> Info complementaire</span></h3>\r\n  <div *ngIf=\"isinfocomplement\">\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-xs-12 \">\r\n        <h4>Types d'activités du point</h4>\r\n          <div class=\"row\">\r\n              <div  *ngFor=\"let option of optionsActivite\"  class=\"col-sm-6 col-xs-12\">\r\n                  <input type=\"checkbox\" name=\"optionsActivite\" value=\"{{option.value}}\"\r\n                         [(ngModel)]=\"option.checked\" (change)=\"updateCheckedoptionsActivite()\"\r\n                  />\r\n                  {{option.name}}\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row center-block\" style=\"padding-top: 2rem; padding-bottom: 1rem\" *ngIf=\"!isEnregistrerProspect && alldatapoint\">\r\n  <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"enregistrerModif()\"\r\n            [disabled]=\"\r\n                !alldatapoint.nom_point ||\r\n                !alldatapoint.email_gerant ||\r\n                !alldatapoint.email_proprietaire ||\r\n                !alldatapoint.telephone_gerant ||\r\n                !alldatapoint.telephone_proprietaire ||\r\n                adresse_point.regionpoint=='--Choix région--' || adresse_point.zonepoint=='--Choix zone--' || adresse_point.souszonepoint=='--Choix sous zone--' || !adresse_point.adressepoint\r\n            \">Valider les nouvelles données</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isEnregistrerProspect\" class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n        <strong>Successfull!</strong> <br/>Veuillez cliquer sur Fermer pour sortir!\r\n    </ngb-alert>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/modif-pdv-incomplet/modif-pdv-incomplet.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/modif-pdv-incomplet/modif-pdv-incomplet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifPdvIncompletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModifPdvIncompletComponent = (function () {
    function ModifPdvIncompletComponent(location, _utilService, _assignationsuiviService, http, router) {
        this.location = location;
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
    ModifPdvIncompletComponent.prototype.ngOnInit = function () {
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
    ModifPdvIncompletComponent.prototype.ngOnDestroy = function () {
    };
    ModifPdvIncompletComponent.prototype.goBack = function () {
        this.location.back();
    };
    ModifPdvIncompletComponent.prototype.getAllServices = function () {
        var _this = this;
        this._utilService.getServices()
            .subscribe(function (data) { return _this.allServices = data; }, function (error) { return alert(error); }, function () {
            _this.isSelect = !_this.isSelect;
            for (var i = 0; i < _this.allServices.length; i++) {
                _this.reponsesProspect.push("");
            }
        });
    };
    ModifPdvIncompletComponent.prototype.selectRegionPoint = function () {
        var _this = this;
        this.adresse_point.zonepoint = '--Choix zone--';
        this.adresse_point.souszonepoint = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.adresse_point.regionpoint)
            .subscribe(function (data) { return _this.zonespoints = data; }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    ModifPdvIncompletComponent.prototype.selectZonePoint = function () {
        var _this = this;
        this._utilService.getSouszoneByZone(this.adresse_point.zonepoint)
            .subscribe(function (data) { return _this.souszonespoints = data; }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    ModifPdvIncompletComponent.prototype.coordonneesgeospatiales = function () {
        if (navigator.geolocation) {
            var geospatialpoint_1 = { latitude: 0, longitude: 0 };
            navigator.geolocation.getCurrentPosition(function (position) {
                geospatialpoint_1.longitude = position.coords.longitude;
                geospatialpoint_1.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint', JSON.stringify(geospatialpoint_1));
            });
        }
    };
    ModifPdvIncompletComponent.prototype.avoter = function (index) {
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
    Object.defineProperty(ModifPdvIncompletComponent.prototype, "selectedoptionsActivite", {
        get: function () {
            return this.optionsActivite
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    ModifPdvIncompletComponent.prototype.updateCheckedoptionsActivite = function () {
        var activites = this.regionszonesactivites.activites;
        this.alldatapoint.activites = this.selectedoptionsActivite.map(function (option) {
            return activites[Number(option) - 1].activite;
        });
    };
    ModifPdvIncompletComponent.prototype.enregistrerModif = function () {
        var _this = this;
        this.adresse_point.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
        this.alldatapoint.adresse_point = this.adresse_point;
        this.alldatapoint.activites = typeof this.alldatapoint.activites === 'string' ? JSON.parse(this.alldatapoint.activites) : this.alldatapoint.activites;
        this._utilService.modifPoint(this.alldatapoint)
            .subscribe(function (data) {
            _this.isEnregistrerProspect = true;
        }, function (error) { return alert(error); }, function () { return console.log('modifPoint'); });
    };
    ModifPdvIncompletComponent.prototype.fileChange = function (event) {
        var _this = this;
        this.uploadfinished = false;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            this.http.post("" + this.apiEndPoint, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error); })
                .subscribe(function (data) {
                var newData = data;
                _this.uploadFile = newData;
                _this.newImage = _this.uploadFile.generatedName;
            }, function (error) { return console.log(error); }, function () {
                _this.uploadfinished = true;
            });
        }
    };
    return ModifPdvIncompletComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModifPdvIncompletComponent.prototype, "infoprospect", void 0);
ModifPdvIncompletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modif-pdv-incomplet',
        template: __webpack_require__("../../../../../src/app/layout/fullusing/modif-pdv-incomplet/modif-pdv-incomplet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/fullusing/modif-pdv-incomplet/modif-pdv-incomplet.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_assignation_suivi_service__["a" /* AssignationSuiviService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_util_service__["a" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object])
], ModifPdvIncompletComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=modif-pdv-incomplet.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/reliquat/reliquat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" class=\"btn btn-dark btn-sm\" (click)=\"goBack()\" style=\"margin-bottom: 1rem;\">Retour</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Etat Reliquat</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Bilan positionnement</button>\r\n\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listesSuiviRelequat | dataFilterRestantRelequat: filterQuerySuiviRelequat\" #mfBilanSuiviRelequat=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageSuiviRelequat\" [(mfSortBy)]=\"sortBySuiviRelequat\" [(mfSortOrder)]=\"sortOrderSuiviRelequat\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"point\">Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"etatpositionnement\">Positionnement</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"etatpayement\">Réglement</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"etatrestant\">Restant</mfDefaultSorter></th>\r\n                        <th>Détail</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuerySuiviRelequat\"/></th>\r\n                        <th colspan=\"2\">Total : {{listesSuiviRelequat.length}}</th>\r\n                    </tr>\r\n                    <tr><br></tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfBilanSuiviRelequat.data; let i = index\"  [ngStyle]=\"{'color': 'black'}\">\r\n                        <td>{{item.point}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td style=\"text-align: right\">{{tocurrency(item.etatpositionnement)}}</td>\r\n                        <td style=\"text-align: right\">{{tocurrency(item.etatpayement)}}</td>\r\n                        <td style=\"text-align: right\">{{tocurrency(item.etatrestant)}}</td>\r\n                        <td style=\"text-align: left\"><i (click)=\"showModalSuiviRelequatDetailPoint(contentRecouvrementDetailPoint, item)\" class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\" row\" style=\"margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem\">\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"label-control\" for=\"datejourPositionnement\">Date par jour:</label>\r\n                    <div class=\"row\">\r\n                        <input type=\"date\" id=\"datejourPositionnement\" name=\"datejour\" [(ngModel)]=\"selectionjourPositionnement\" style=\"margin-right: 1rem\"/>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiquejourPositionnement()\" [disabled]=\"selectionjourPositionnement==undefined\" >Chercher</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"label-control\">Date par intervalle:</label>\r\n                    <div class=\"row\">\r\n                        <input type=\"date\" name=\"intervalledateinitPositionnement\" [(ngModel)]=\"selectionintervalledateinitPositionnement\"  style=\"margin-right: 0.5rem\"/> à <input type=\"date\" name=\"intervalleddatefinalPositionnement\" [(ngModel)]=\"selectionintervalleddatefinalPositionnement\"  style=\"margin-left: 0.5rem; margin-right: 1rem\" />\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiqueintervallePositionnement()\" [disabled]=\"selectionintervalledateinitPositionnement>selectionintervalleddatefinalPositionnement || selectionintervalledateinitPositionnement==undefined || selectionintervalleddatefinalPositionnement==undefined \" >Chercher</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\">\r\n                <div class=\"col-sm-1\" style=\"margin-bottom: 1rem;\">\r\n                    <button (click)=\"showModalDepotCompteBBS(contentDepotBBS)\" class=\"btn bg-info btn-sm\">Ajout Depot BBS</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\" *ngIf=\"listedepotCompteBBS.length!=0\">\r\n                <div class=\"col-sm-2\" style=\"margin-bottom: 0.5rem;\" *ngFor=\"let item of listedepotCompteBBS; let i = index \">\r\n                    <div [ngClass]=\"{'card': true, 'text-white': true, 'bg-danger': ((item.caution==0) || ((item.cautionconsomme/item.caution)<0.10)), 'bg-warning': (((item.cautionconsomme/item.caution)>=0.10) && ((item.cautionconsomme/item.caution)<0.35)), 'bg-info': (((item.cautionconsomme/item.caution)>=0.50) && ((item.cautionconsomme/item.caution)<0.75)), 'bg-success': (item.cautionconsomme/item.caution)>=0.75 }\">\r\n                        <div class=\"card-body\">\r\n                            <h6 class=\"card-title\">({{ ((item.cautionconsomme/item.caution) * 100) | number : '1.2'}}%) {{tocurrency(item.cautionconsomme)}}</h6>\r\n                            <p class=\"card-text\">{{item.nomservice}}  <i (click)=\"showModaldepotCompteBBSDetail(contentdepotCompteBBS,item)\" class=\"fa fa-search-plus pull-right\" style=\"margin-right: 1rem; cursor: pointer\" aria-hidden=\"true\"></i></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n            <div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"card-header\" style=\"text-align: center\">\r\n                        <div *ngIf=\"touslesjours.length!=0 && lineChartData.length!=0 && lineChartLabels.length!=0\">\r\n                            <canvas baseChart height=\"100\" #baseChart1=\"base-chart\"\r\n                                    [datasets]=\"lineChartData\"\r\n                                    [labels]=\"lineChartLabels\"\r\n                                    [options]=\"lineChartOptions\"\r\n                                    [legend]=\"lineChartLegend\"\r\n                                    [chartType]=\"lineChartType\" ></canvas>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\" style=\"margin-bottom: 1px;\">\r\n                    <h4 class=\"card-title\" style=\"text-align: center\">Performance CC</h4>\r\n                    <table class=\"table table-hover table-sm\">\r\n                        <thead>\r\n                        <tr style=\"text-align: center\">\r\n                            <th width=\"5%\">#</th>\r\n                            <th width=\"25%\">CC</th>\r\n                            <th width=\"19%\">Promises</th>\r\n                            <th width=\"17%\">Positionnés</th>\r\n                            <th width=\"17%\">Payés</th>\r\n                            <th width=\"17%\">Versés</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr [ngStyle]=\"{'color': 'black', 'background-color': 'blue'}\">\r\n                            <td width=\"5%\">*</td>\r\n                            <td width=\"25%\" (click)=\"clickPositionnement(detailRecouvrement.promesses.list)\" style=\"cursor: pointer\">ALL</td>\r\n                            <td width=\"19%\"  class=\"bg-danger\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.promesses)\">\r\n                                    ({{tocurrency(detailRecouvrement.promesses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.promesses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-info\"  style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.positionnes)\">\r\n                                    ({{tocurrency(detailRecouvrement.positionnes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.positionnes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-warning\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.payes)\">\r\n                                    ({{tocurrency(detailRecouvrement.payes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.payes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-success\"  style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.verses)\">\r\n                                    ({{tocurrency(detailRecouvrement.verses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.verses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of listeBilanPositionnementCC; let i = index; let first = first; let last = last\" [ngStyle]=\"{'color': 'black', 'background-color': first?'green':last?'red':'orange'}\">\r\n                            <td width=\"5%\">{{i+1}}</td>\r\n                            <td width=\"25%\" (click)=\"clickPositionnement(item.list)\" style=\"cursor: pointer\">{{item.cc}}</td>\r\n                            <td width=\"19%\" class=\"bg-danger\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.promesses)\">\r\n                                    ({{tocurrency(item.detail.promesses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.promesses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-info\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.positionnes)\">\r\n                                    ({{tocurrency(item.detail.positionnes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.positionnes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-warning\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.payes)\">\r\n                                    ({{tocurrency(item.detail.payes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.payes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-success\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.verses)\">\r\n                                    ({{tocurrency(item.detail.verses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.verses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #contentDepotBBS let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Crediter compte BBS</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"typeservice\">Type service</label>\r\n                        <select class=\"form-control input-sm\" id=\"typeservice\" name=\"typeservice\" [(ngModel)]=\"typeservice\" >\r\n                            <option *ngFor=\"let item of getListeServiceBBS\">{{item.nomservice}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label for=\"montanttypeservice\">Monatnt versé</label>\r\n                    <input type=\"number\" min=\"0\" class=\"form-control\" id=\"montanttypeservice\" name=\"montanttypeservice\" [(ngModel)]=\"montanttypeservice\" placeholder=\"somme verser\"  required>\r\n                </div>\r\n                <div class=\"col-sm-3\"><br><br>{{tocurrency(montanttypeservice)}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!typeservice || montanttypeservice<1 || montanttypeservice==undefined\" (click)=\"valideDepotCompteBBS()\">Valider</button><button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Annuler</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentdepotCompteBBS let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" >\r\n        <div class=\"modal-header\">\r\n            <!--<h4 class=\"modal-title pull-left\">Historique depotCompteBBS pour {{bilandepotCompteBBS.type | uppercase}}</h4>-->\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-hover table-sm\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Date depot</th>\r\n                    <th>Montant</th>\r\n                </tr>\r\n                </thead>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentRecouvrementAllDetail let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" *ngIf=\"bilanPositionnementAllDetail\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Historique recouvrements pour {{bilanPositionnementAllDetail.type | uppercase}}</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-hover table-sm\">\r\n                <thead>\r\n                <tr>\r\n                    <th>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='promesses'\">Date demande</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='positionnes'\">Date positionnement</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='payes'\">Date payement</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='verses'\">Date versement</span>\r\n                    </th>\r\n                    <th>Point</th>\r\n                    <th>Téléphone</th>\r\n                    <th>Demandé</th>\r\n                    <th>Positionné</th>\r\n                    <th>Payé</th>\r\n                    <th>Versé</th>\r\n                    <th>Agent</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of bilanPositionnementAllDetail.list; let i = index\" [ngStyle]=\"{'color': 'black', 'background-color': (item.recouvre_by=='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'red':(item.recouvre_by!='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'orange':(item.etatpositionnement==0 || item.etatpayement==0 || item.etatversement==0)?'yellow':'green'}\">\r\n                    <td>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='promesses'\">{{item.datedemande}}</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='positionnes'\">{{item.positionne_at}}</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='payes'\">{{item.validpaye_at}}</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='verses'\">{{item.validverse_at}}</span>\r\n                    </td>\r\n                    <td>{{item.point}}</td>\r\n                    <td>{{item.telephone}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.montant)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpositionnement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpayement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatversement)}}</td>\r\n                    <td style=\"text-align: right\">{{item.recouvre_by}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentRecouvrementDetailPoint let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" *ngIf=\"bilanPositionnementDetailPoint.type.length!=0\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Historique recouvrements pour {{bilanPositionnementDetailPoint.type | uppercase}}</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-hover table-sm\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Date demande</th>\r\n                    <th>Demandé</th>\r\n                    <th>CC</th>\r\n                    <th>Agent</th>\r\n                    <th>Positionné</th>\r\n                    <th>Payé</th>\r\n                    <th>Versé</th>\r\n                    <th>Reliquat</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of bilanPositionnementDetailPoint.list; let i = index\" [ngStyle]=\"{'color': 'black', 'background-color': (item.recouvre_by=='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'red':(item.recouvre_by!='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'orange':(item.etatpositionnement==0 || item.etatpayement==0 || item.etatversement==0)?'yellow':'green'}\">\r\n                    <td>{{item.datedemande}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.montant)}}</td>\r\n                    <td style=\"text-align: right\">{{item.cc}}</td>\r\n                    <td style=\"text-align: right\">{{item.recouvre_by}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpositionnement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpayement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatversement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatrestant)}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/reliquat/reliquat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 75vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/fullusing/reliquat/reliquat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_newclient_service__ = __webpack_require__("../../../../../src/app/services/newclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__ = __webpack_require__("../../../../../src/app/services/suivipositionnement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReliquatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReliquatComponent = (function () {
    function ReliquatComponent(location, _suivipositionnementService, modalService, router, _utilService, _apiPlatformService, _newclientService) {
        this.location = location;
        this._suivipositionnementService = _suivipositionnementService;
        this.modalService = modalService;
        this.router = router;
        this._utilService = _utilService;
        this._apiPlatformService = _apiPlatformService;
        this._newclientService = _newclientService;
        this.title = '12';
        this.test = 100000;
        this.loading_data = true;
        this.menuHead = { menuHead1: true, menuHead2: false };
        this.listebilanPositionnement = [];
        this.listeBilanPositionnementCC = [];
        this.detailRecouvrement = {
            promesses: { type: "promesses", nbre: 0, montant: 0, list: [] },
            positionnes: { type: "positionnes", nbre: 0, montant: 0, list: [] },
            payes: { type: "payes", nbre: 0, montant: 0, list: [] },
            verses: { type: "verses", nbre: 0, montant: 0, list: [] },
        };
        this.type = 'jour';
        this.getListeServiceBBS = [];
        this.listedepotCompteBBS = [];
        this.listestatusdeposition = [];
        this.touslesjours = [];
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartOptions = { responsive: true };
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        /***************************************************************************************
         ********************   PARTIE Restant reliquat   ****************************
         **************************************************************************************/
        this.rowsOnPageSuiviRelequat = 25;
        this.sortBySuiviRelequat = "point";
        this.sortOrderSuiviRelequat = "asc";
        this.listesSuiviRelequat = [];
        this.bilanPositionnementDetailPoint = { type: "", list: [] };
    }
    ReliquatComponent.prototype.ngOnInit = function () {
        this.getListSuiviRelequat();
    };
    ReliquatComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    ReliquatComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    ReliquatComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReliquatComponent.prototype.menuHeadClick = function (option) {
        this.loading_data = true;
        clearInterval(this.killsetinterval);
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.getListSuiviRelequat();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.histPositionnementInit();
        }
    };
    ReliquatComponent.prototype.showModalBilanBilanPositionnementAllDetail = function (content, item) {
        this.bilanPositionnementAllDetail = item;
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    ReliquatComponent.prototype.closedModal = function () {
        this.modalRef.close('Close click');
    };
    ReliquatComponent.prototype.suivionepointgraphe = function (datedebut, datefin) {
        var _this = this;
        this.lineChartLabels = [];
        if (this.type == 'jour') {
            this.touslesjours = this.listebilanPositionnement.map(function (type) { return type.datedemande_heure; });
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map(function (type) { return type.positionne_at_heure; }));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map(function (type) { return type.validpaye_at; }));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map(function (type) { return type.validverse_at; }));
        }
        else {
            this.touslesjours = this.listebilanPositionnement.map(function (type) { return type.datedemande_jour; });
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map(function (type) { return type.positionne_at_jour; }));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map(function (type) { return type.validpaye_at_jour; }));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map(function (type) { return type.validverse_at_jour; }));
        }
        this.touslesjours = this.touslesjours.filter(function (opt) { return (opt >= datedebut) && (opt <= datefin); });
        this.touslesjours.sort();
        var tabjours = [];
        var jour = this.touslesjours[0];
        tabjours.push(jour);
        this.lineChartLabels.push(jour);
        this.touslesjours.forEach(function (type) {
            if (type != jour) {
                tabjours.push(type);
                _this.lineChartLabels.push(type);
                jour = type;
            }
        });
        if (this.chart1 !== undefined) {
            this.chart1.chart.config.data.labels = this.lineChartLabels;
        }
        var nbrebyjourpromesses = [];
        var nbrebyjourpositionnes = [];
        var nbrebyjourpayes = [];
        var nbrebyjourverses = [];
        if (this.type == 'jour') {
            tabjours.forEach(function (type) {
                var nbrebyjourpromessesSom = 0;
                var nbrebyjourpositionnesSom = 0;
                var nbrebyjourpayesSom = 0;
                var nbrebyjourversesSom = 0;
                _this.detailRecouvrement.promesses.list.forEach(function (opt) { if (opt.datedemande_heure == type) {
                    nbrebyjourpromessesSom += Number(opt.montant);
                } });
                nbrebyjourpromesses.push(nbrebyjourpromessesSom);
                _this.detailRecouvrement.positionnes.list.forEach(function (opt) { if (opt.positionne_at_heure == type) {
                    nbrebyjourpositionnesSom += Number(opt.etatpositionnement);
                } });
                nbrebyjourpositionnes.push(nbrebyjourpositionnesSom);
                _this.detailRecouvrement.payes.list.forEach(function (opt) { if (opt.validpaye_at_heure == type) {
                    nbrebyjourpayesSom += Number(opt.etatpayement);
                } });
                nbrebyjourpayes.push(nbrebyjourpayesSom);
                _this.detailRecouvrement.verses.list.forEach(function (opt) { if (opt.validverse_at_heure == type) {
                    nbrebyjourversesSom += Number(opt.etatversement);
                } });
                nbrebyjourverses.push(nbrebyjourversesSom);
            });
        }
        else {
            tabjours.forEach(function (type) {
                var nbrebyjourpromessesSom = 0;
                var nbrebyjourpositionnesSom = 0;
                var nbrebyjourpayesSom = 0;
                var nbrebyjourversesSom = 0;
                _this.detailRecouvrement.promesses.list.forEach(function (opt) { if (opt.datedemande_jour == type) {
                    nbrebyjourpromessesSom += Number(opt.montant);
                } });
                nbrebyjourpromesses.push(nbrebyjourpromessesSom);
                _this.detailRecouvrement.positionnes.list.forEach(function (opt) { if (opt.positionne_at_jour == type) {
                    nbrebyjourpositionnesSom += Number(opt.etatpositionnement);
                } });
                nbrebyjourpositionnes.push(nbrebyjourpositionnesSom);
                _this.detailRecouvrement.payes.list.forEach(function (opt) { if (opt.validpaye_at_jour == type) {
                    nbrebyjourpayesSom += Number(opt.etatpayement);
                } });
                nbrebyjourpayes.push(nbrebyjourpayesSom);
                _this.detailRecouvrement.verses.list.forEach(function (opt) { if (opt.validverse_at_jour == type) {
                    nbrebyjourversesSom += Number(opt.etatversement);
                } });
                nbrebyjourverses.push(nbrebyjourversesSom);
            });
        }
        this.lineChartData = [
            { data: nbrebyjourpromesses, label: 'PROMESSES' },
            { data: nbrebyjourpositionnes, label: 'POSITIONNES' },
            { data: nbrebyjourpayes, label: 'PAYES' },
            { data: nbrebyjourverses, label: 'VERSES' }
        ];
    };
    ReliquatComponent.prototype.historiquejourPositionnement = function () {
        var _this = this;
        this.type = 'jour';
        this.loading_data = true;
        this.selectionintervalledateinitPositionnement = undefined;
        this.selectionintervalleddatefinalPositionnement = undefined;
        this.infotypeDepotCompteBBS = this.selectionjourPositionnement;
        this.datedebut = this.selectionjourPositionnement;
        this.datefin = this.selectionjourPositionnement + " 23:59";
        this._apiPlatformService.getListBilanPositionnementByDate({ type: 'jour', infotype: this.selectionjourPositionnement })
            .subscribe(function (data) {
            _this.initialisation(data.message, _this.selectionjourPositionnement, _this.selectionjourPositionnement + " 23:59");
        }, function (error) { return alert(error); }, function () {
            _this.getDepotCompteBBS();
            _this.loading_data = false;
        });
    };
    ReliquatComponent.prototype.historiqueintervallePositionnement = function () {
        var _this = this;
        this.loading_data = true;
        this.selectionjourPositionnement = undefined;
        this.type = 'intervalle';
        this.datedebut = this.selectionintervalledateinitPositionnement;
        this.datefin = this.selectionintervalleddatefinalPositionnement + " 23:59";
        this.infotypeDepotCompteBBS = this.selectionintervalledateinitPositionnement + " " + this.selectionintervalleddatefinalPositionnement;
        this._apiPlatformService.getListBilanPositionnementByDate({ type: 'intervalle', infotype: this.selectionintervalledateinitPositionnement + " " + this.selectionintervalleddatefinalPositionnement })
            .subscribe(function (data) {
            _this.initialisation(data.message, _this.selectionintervalledateinitPositionnement, _this.selectionintervalleddatefinalPositionnement + " 23:59");
        }, function (error) { return alert(error); }, function () {
            _this.getDepotCompteBBS();
            _this.loading_data = false;
        });
    };
    ReliquatComponent.prototype.histPositionnementInit = function () {
        var _this = this;
        this.type = 'jour';
        this.loading_data = true;
        this.selectionintervalledateinitPositionnement = undefined;
        this.selectionintervalleddatefinalPositionnement = undefined;
        var datenow = ((new Date()).toJSON()).split("T", 2)[0];
        this.selectionjourPositionnement = datenow;
        this.infotypeDepotCompteBBS = datenow;
        this.datedebut = this.selectionjourPositionnement;
        this.datefin = this.selectionjourPositionnement + " 23:59";
        this._apiPlatformService.getListBilanPositionnementByDate({ type: 'jour', infotype: this.selectionjourPositionnement })
            .subscribe(function (data) {
            _this.getListeServiceBBS = data.datasbbs;
            _this.listedepotCompteBBS = data.datasbbs;
            _this.initialisation(data.message, _this.selectionjourPositionnement, _this.selectionjourPositionnement + " 23:59");
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
        });
    };
    ReliquatComponent.prototype.initialisation = function (datas, datedebut, datefin) {
        var detailRecouvrements = {
            promesses: { type: "promesses", nbre: 0, montant: 0, list: [] },
            positionnes: { type: "positionnes", nbre: 0, montant: 0, list: [] },
            payes: { type: "payes", nbre: 0, montant: 0, list: [] },
            verses: { type: "verses", nbre: 0, montant: 0, list: [] },
        };
        var listeBilanCC = [];
        var bilanPositionnementCC = [];
        detailRecouvrements.promesses.nbre = datas.filter(function (opt) { return (opt.datedemande >= datedebut) && (opt.datedemande <= datefin); }).length;
        var listestatus = datas.map(function (type) {
            detailRecouvrements.promesses.montant += ((type.datedemande >= datedebut) && (type.datedemande <= datefin)) ? Number(type.montant) : 0;
            if ((type.positionne_at >= datedebut) && (type.positionne_at <= datefin)) {
                detailRecouvrements.positionnes.nbre++;
            }
            detailRecouvrements.positionnes.montant += ((type.positionne_at >= datedebut) && (type.positionne_at <= datefin)) ? Number(type.etatpositionnement) : 0;
            if ((type.validpaye_at >= datedebut) && (type.validpaye_at <= datefin)) {
                detailRecouvrements.payes.nbre++;
            }
            detailRecouvrements.payes.montant += ((type.validpaye_at >= datedebut) && (type.validpaye_at <= datefin)) ? Number(type.etatpayement) : 0;
            if (((type.validverse_at >= datedebut) && (type.validverse_at <= datefin))) {
                detailRecouvrements.verses.nbre++;
            }
            detailRecouvrements.verses.montant += ((type.validverse_at >= datedebut) && (type.validverse_at <= datefin)) ? Number(type.etatversement) : 0;
            var pointObjet = JSON.parse(type.point);
            var adressecomplet = (typeof pointObjet.adresse === 'object') ? pointObjet.adresse : JSON.parse(pointObjet.adresse);
            var cc = type.cc ? JSON.parse(type.cc).prenom + " " + JSON.parse(type.cc).nom : "alioune";
            if (!listeBilanCC.includes(cc)) {
                listeBilanCC.push(cc);
            }
            return {
                id: type.id,
                datedemande: type.datedemande,
                datedemande_jour: type.datedemande.split(' ')[0],
                datedemande_heure: type.datedemande.split(':')[0],
                positionne_at_jour: type.positionne_at ? type.positionne_at.split(' ')[0] : null,
                positionne_at_heure: type.positionne_at ? type.positionne_at.split(':')[0] : null,
                validpaye_at_jour: type.validpaye_at ? type.validpaye_at.split(' ')[0] : null,
                validpaye_at_heure: type.validpaye_at ? type.validpaye_at.split(':')[0] : null,
                validverse_at_jour: type.validverse_at ? type.validverse_at.split(' ')[0] : null,
                validverse_at_heure: type.validverse_at ? type.validverse_at.split(':')[0] : null,
                montant: Number(type.montant),
                point: pointObjet.prenom + " " + pointObjet.nom,
                telephone: pointObjet.telephone,
                adresse: adressecomplet.address + ", " + adressecomplet.souszone + ", " + adressecomplet.zone,
                cc: cc,
                recouvre_by: type.recouvre_by ? ((type.recouvre_by != 'pas besoin') ? type.recouvre_by : type.modepayement) : "attente",
                etatpositionnement: type.etatpositionnement ? type.etatpositionnement : 0,
                positionne_at: type.positionne_at ? type.positionne_at : "attente",
                etatpayement: type.etatpayement ? type.etatpayement : 0,
                validpaye_at: type.validpaye_at ? type.validpaye_at : "attente",
                etatversement: type.etatversement ? type.etatversement : 0,
                validverse_at: type.validverse_at ? type.validverse_at : "attente",
                modepayement: type.modepayement ? "par " + type.modepayement : "",
                modedemande: type.modedemande ? type.modedemande : "non defini",
                modeversement: type.modeversement ? "par " + type.modeversement : "",
                dateeffectif: type.dateeffectif ? type.dateeffectif : "attente"
            };
        });
        this.listebilanPositionnement = listestatus;
        detailRecouvrements.promesses.list = listestatus.filter(function (opt) { return (opt.datedemande >= datedebut) && (opt.datedemande <= datefin); });
        detailRecouvrements.positionnes.list = listestatus.filter(function (opt) { return (opt.positionne_at >= datedebut) && (opt.positionne_at <= datefin); });
        detailRecouvrements.payes.list = listestatus.filter(function (opt) { return (opt.validpaye_at >= datedebut) && (opt.validpaye_at <= datefin); });
        detailRecouvrements.verses.list = listestatus.filter(function (opt) { return (opt.validverse_at >= datedebut) && (opt.validverse_at <= datefin); });
        listeBilanCC.forEach(function (type) {
            var liste = listestatus.filter(function (opt) { return opt.cc == type; });
            var promesses = 0;
            var positionnes = 0;
            var payes = 0;
            var verses = 0;
            var detailRecouvrementsCC = {
                promesses: { type: "promesses", nbre: 0, montant: 0, list: [] },
                positionnes: { type: "positionnes", nbre: 0, montant: 0, list: [] },
                payes: { type: "payes", nbre: 0, montant: 0, list: [] },
                verses: { type: "verses", nbre: 0, montant: 0, list: [] },
            };
            detailRecouvrementsCC.promesses.nbre = liste.filter(function (opt) { return (opt.datedemande >= datedebut) && (opt.datedemande <= datefin); }).length;
            liste.forEach(function (optcc) {
                detailRecouvrementsCC.promesses.montant += ((optcc.datedemande >= datedebut) && (optcc.datedemande <= datefin)) ? Number(optcc.montant) : 0;
                if ((optcc.positionne_at >= datedebut) && (optcc.positionne_at <= datefin)) {
                    detailRecouvrementsCC.positionnes.nbre++;
                }
                detailRecouvrementsCC.positionnes.montant += ((optcc.positionne_at >= datedebut) && (optcc.positionne_at <= datefin)) ? Number(optcc.etatpositionnement) : 0;
                if ((optcc.validpaye_at >= datedebut) && (optcc.validpaye_at <= datefin)) {
                    detailRecouvrementsCC.payes.nbre++;
                }
                detailRecouvrementsCC.payes.montant += ((optcc.validpaye_at >= datedebut) && (optcc.validpaye_at <= datefin)) ? Number(optcc.etatpayement) : 0;
                if ((optcc.validverse_at >= datedebut) && (optcc.validverse_at <= datefin)) {
                    detailRecouvrementsCC.verses.nbre++;
                }
                detailRecouvrementsCC.verses.montant += ((optcc.validverse_at >= datedebut) && (optcc.validverse_at <= datefin)) ? Number(optcc.etatversement) : 0;
            });
            detailRecouvrementsCC.promesses.list = liste.filter(function (opt) { return (opt.datedemande >= datedebut) && (opt.datedemande <= datefin); });
            detailRecouvrementsCC.positionnes.list = liste.filter(function (opt) { return (opt.positionne_at >= datedebut) && (opt.positionne_at <= datefin); });
            detailRecouvrementsCC.payes.list = liste.filter(function (opt) { return (opt.validpaye_at >= datedebut) && (opt.validpaye_at <= datefin); });
            detailRecouvrementsCC.verses.list = liste.filter(function (opt) { return (opt.validverse_at >= datedebut) && (opt.validverse_at <= datefin); });
            bilanPositionnementCC.push({
                cc: type,
                type: type,
                detail: detailRecouvrementsCC,
                list: liste,
            });
        });
        this.listeBilanPositionnementCC = bilanPositionnementCC;
        this.detailRecouvrement = detailRecouvrements;
        this.suivionepointgraphe(datedebut, datefin);
    };
    ReliquatComponent.prototype.clickPositionnement = function (datasGraphe) {
        this.listebilanPositionnement = datasGraphe;
        this.suivionepointgraphe(this.datedebut, this.datefin);
    };
    ReliquatComponent.prototype.showModalDepotCompteBBS = function (content) {
        this.typeservice = undefined;
        this.montanttypeservice = undefined;
        this.modalRef = this.modalService.open(content);
    };
    ReliquatComponent.prototype.showModaldepotCompteBBSDetail = function (content, item) {
        console.log(item);
        //this.modalRef = this.modalService.open(content);
    };
    ReliquatComponent.prototype.getDepotCompteBBS = function () {
        var _this = this;
        this._suivipositionnementService.getDepotCompteBBS({ type: this.type, infotype: this.infotypeDepotCompteBBS })
            .subscribe(function (data) {
            _this.listedepotCompteBBS = data.message;
        }, function (error) { return alert(error); }, function () {
            console.log("finish");
        });
    };
    ReliquatComponent.prototype.valideDepotCompteBBS = function () {
        var _this = this;
        if (confirm("Confirmer le versement " + this.typeservice + " de " + this.tocurrency(this.montanttypeservice) + " FCFA")) {
            console.log("je confirme");
            this.loading_data = true;
            this._suivipositionnementService.valideDepotCompteBBS({ type: this.typeservice, montant: this.montanttypeservice })
                .subscribe(function (data) {
                if (data.errorCode) {
                    _this.closedModal();
                }
            }, function (error) { return alert(error); }, function () {
                _this.getDepotCompteBBS();
                _this.loading_data = false;
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    ReliquatComponent.prototype.getListSuiviRelequat = function () {
        var _this = this;
        this.filterQuerySuiviRelequat = undefined;
        this._apiPlatformService.getListSuiviRelequat()
            .subscribe(function (data) {
            var listestatus = data.message.map(function (type) {
                var pointObjet = JSON.parse(type.point);
                var cc = type.cc ? JSON.parse(type.cc).prenom + " " + JSON.parse(type.cc).nom : "alioune";
                var adressecomplet = (typeof pointObjet.adresse === 'object') ? pointObjet.adresse : JSON.parse(pointObjet.adresse);
                return {
                    pointbrut: type.point,
                    point: pointObjet.prenom + " " + pointObjet.nom,
                    telephone: pointObjet.telephone,
                    adresse: adressecomplet.address + ", " + adressecomplet.souszone + ", " + adressecomplet.zone,
                    cc: cc,
                    etatpositionnement: type.etatpositionnement ? type.etatpositionnement : 0,
                    etatpayement: type.etatpayement ? type.etatpayement : 0,
                    etatrestant: (type.etatpositionnement && type.etatpayement) ? (type.etatpositionnement - type.etatpayement) : type.etatpositionnement ? type.etatpositionnement : 0,
                };
            });
            _this.listesSuiviRelequat = listestatus.filter(function (opt) { return opt.etatrestant != 0; });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { });
    };
    ReliquatComponent.prototype.showModalSuiviRelequatDetailPoint = function (content, item) {
        var _this = this;
        this.bilanPositionnementDetailPoint = { type: "", list: [] };
        this._apiPlatformService.getListSuiviRelequatDetailPoint({ point: item.pointbrut })
            .subscribe(function (data) {
            _this.bilanPositionnementDetailPoint.type = item.point;
            var listestatus = data.message.map(function (type) {
                var cc = type.cc ? JSON.parse(type.cc).prenom + " " + JSON.parse(type.cc).nom : "alioune";
                return {
                    datedemande: type.datedemande,
                    montant: Number(type.montant),
                    modedemande: type.modedemande ? type.modedemande : "non defini",
                    cc: cc,
                    recouvre_by: (type.recouvre_by != "pas besoin") ? type.recouvre_by : type.modepayement,
                    etatpositionnement: type.etatpositionnement ? type.etatpositionnement : 0,
                    positionne_at: type.positionne_at ? type.positionne_at : "attente",
                    etatpayement: type.etatpayement ? type.etatpayement : 0,
                    validpaye_at: type.validpaye_at ? type.validpaye_at : "attente",
                    etatversement: type.etatversement ? type.etatversement : 0,
                    validverse_at: type.validverse_at ? type.validverse_at : "attente",
                    etatrestant: (type.etatpositionnement && type.etatpayement) ? (type.etatpositionnement - type.etatpayement) : type.etatpositionnement ? type.etatpositionnement : 0,
                    etatrestantpoint: (type.etatpositionnement && type.etatpayement) ? (type.etatpositionnement - type.etatpayement) : type.etatpositionnement ? type.etatpositionnement : 0,
                    etatrestantagent: (type.etatpayement && type.etatversement) ? (type.etatpayement - type.etatversement) : type.etatpayement ? type.etatpayement : 0,
                };
            });
            _this.bilanPositionnementDetailPoint.list = listestatus;
            _this.modalRef = _this.modalService.open(content, { size: 'lg' });
        }, function (error) { return alert(error); }, function () { });
    };
    return ReliquatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart1"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], ReliquatComponent.prototype, "chart1", void 0);
ReliquatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reliquat',
        template: __webpack_require__("../../../../../src/app/layout/fullusing/reliquat/reliquat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/fullusing/reliquat/reliquat.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_5__services_newclient_service__["a" /* NewclientService */], __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */], __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_newclient_service__["a" /* NewclientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_newclient_service__["a" /* NewclientService */]) === "function" && _h || Object])
], ReliquatComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=reliquat.component.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map