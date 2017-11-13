webpackJsonp([16],{

/***/ "../../../../../src/app/layout/deposit/deposit-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deposit_component__ = __webpack_require__("../../../../../src/app/layout/deposit/deposit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return depositRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__deposit_component__["a" /* DepositComponent */] }
];
var depositRoutingModule = (function () {
    function depositRoutingModule() {
    }
    return depositRoutingModule;
}());
depositRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], depositRoutingModule);

//# sourceMappingURL=deposit-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/deposit/deposit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-deposit\" [@routerTransition]>\r\n     <app-page-header [heading]=\"'Deposit client'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div>\r\n\t\t<!--<button (click)=\"listDeposit()\">afficher</button>-->\r\n\t\t <div *ngIf=\"resul\" class=\"col-lg-12 col-sm-12 col-md-12 col-xs-12\" >\r\n\t\t\t\t\t  \r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t Nous certifions,<br>\r\n\t\t\t\t\t\t\t BBS Invest Sarl au capital de 7 000 000 FCFA, dont le siége social est situé aux HLM GRAND MEDINE Villa 159,immatriculé au registre du commerce sous le numero -SN DKR 2014 -NINEA : 004999978,\r\n\t\t\t\t\t\t\t representé ici par<b style=\"font-size:1.5em\"> {{deposits.commercial}} </b>en sa qualite de conseiller commercial(e), déclarons avoir reçu la somme de <b style=\"font-size:1.5em\">{{deposits.montant}} FCFA</b>, de <b style=\"font-size:1.5em\">{{deposits.entreprise}}</b> representé par <b style=\"font-size:1.5em\">{{deposits.superviseur}}</b>\r\n\t\t\t\t\t\t\t <br><br>\r\n\t\t\t\t\t\t\t Ce montant perçu en guise de caution,permet au point de vente d'utiliser les services proposée par la plateforme SENTOOL mise à la diposition par BBS Invest .\r\n\t\t\t\t\t\t\t <br><br>\r\n\t\t\t\t\t\t\t en foi de quoi, cette présente décharge à été établie pour servir et valoir ce que de droit .\r\n\t\t\t\t\t\t\t <br><br>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t</p>\r\n\t\t\t<input type=\"button\" (click)=\"validerdeposite()\" value=\"valider\" class=\"col-2 btn btn-success form-control\" />\r\n\t\t\t<input type=\"button\" value=\"annuler\" class=\"col-2 btn btn-danger form-control\"  />\t\t\r\n\t\t</div>\r\n\t\t<div *ngIf=\"err\">\r\n\t\t\t<p class=\"alert alert-danger\">pas de deposit en cour</p>\r\n\t\t</div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/deposit/deposit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/deposit/deposit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepositComponent = (function () {
    function DepositComponent(_utilService) {
        this._utilService = _utilService;
        this.err = false;
        this.resul = false;
        this.listDeposit();
    }
    DepositComponent.prototype.listDeposit = function () {
        var _this = this;
        this._utilService.getlistsDeposit()
            .subscribe(function (data) {
            console.log(data);
            if (data == '') {
                _this.err = true;
            }
            else {
                _this.deposits = data;
                _this.resul = true;
            }
        }, function (error) { return alert(error); }, function () { return console.log('souscrireSentool'); });
    };
    return DepositComponent;
}());
DepositComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deposit',
        template: __webpack_require__("../../../../../src/app/layout/deposit/deposit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/deposit/deposit.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__["a" /* ApiPlatformService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _a || Object])
], DepositComponent);

var _a;
//# sourceMappingURL=deposit.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/deposit/deposit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deposit_routing_module__ = __webpack_require__("../../../../../src/app/layout/deposit/deposit-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deposit_component__ = __webpack_require__("../../../../../src/app/layout/deposit/deposit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depositModule", function() { return depositModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var depositModule = (function () {
    function depositModule() {
    }
    return depositModule;
}());
depositModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__deposit_routing_module__["a" /* depositRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__deposit_component__["a" /* DepositComponent */]]
    })
], depositModule);

//# sourceMappingURL=deposit.module.js.map

/***/ })

});
//# sourceMappingURL=16.chunk.js.map