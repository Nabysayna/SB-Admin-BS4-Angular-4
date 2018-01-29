webpackJsonp([17],{

/***/ "../../../../../src/app/layout/demandedepot/demandedepot-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demandedepot_component__ = __webpack_require__("../../../../../src/app/layout/demandedepot/demandedepot.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandedepotRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__demandedepot_component__["a" /* DemandedepotComponent */] }
];
var DemandedepotRoutingModule = (function () {
    function DemandedepotRoutingModule() {
    }
    return DemandedepotRoutingModule;
}());
DemandedepotRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], DemandedepotRoutingModule);

//# sourceMappingURL=demandedepot-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/demandedepot/demandedepot.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Demande de depot'\" [icon]=\"'fa-table'\"></app-page-header>\r\n\r\n    <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\">\r\n                    <tr style=\"text-align: right\">\r\n                        <th>#</th>\r\n                        <th>Date demande</th>\r\n                        <th>Entreprise</th>\r\n                        <th>Superviseur</th>\r\n                        <th>Téléphone</th>\r\n                        <th>Adresse</th>\r\n                        <th>Montant depot</th>\r\n                        <th style=\"text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let p of listedeposits; let i=index\" [ngStyle]=\"{'color': 'black', 'background-color': (p.etatdemande==0)?'red':(p.etatdemande==1)?'orange':'green'}\">\r\n                        <th>{{i+1}}</th>\r\n                        <td>{{p.datedemande}}</td>\r\n                        <td>{{p.infosup}}</td>\r\n                        <td>{{p.initiateur}}</td>\r\n                        <td>{{p.telephone}}</td>\r\n                        <td>{{p.adressecomplet}}</td>\r\n                        <td>{{p.montantdemande}}</td>\r\n                        <td>\r\n                            <button *ngIf=\"p.etatdemande==0\" type=\"button\" name=\"confirmerAffectationDepotCom-{{i}}\" id=\"confirmerAffectationDepotCom-{{i}}\" class=\"btn btn-primary\" (click)=\"confirmerAffectationDepotCom(p)\">Confirmer départ</button>\r\n                            <button *ngIf=\"p.etatdemande==1\" type=\"button\" name=\"validerRecuDepotCom-{{i}}\" id=\"validerRecuDepotCom-{{i}}\" class=\"btn btn-primary\" (click)=\"validerRecuDepotCom(p)\">Valider reception dépot</button>\r\n                            <strong *ngIf=\"p.etatdemande>1\" >Dépot effectué</strong>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/demandedepot/demandedepot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/demandedepot/demandedepot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__ = __webpack_require__("../../../../../src/app/services/suivipositionnement.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandedepotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DemandedepotComponent = (function () {
    function DemandedepotComponent(router, http, modalService, _utilService, _assignationsuiviService, _suivipositionnementService) {
        this.router = router;
        this.http = http;
        this.modalService = modalService;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this._suivipositionnementService = _suivipositionnementService;
        //////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        this.listedeposits = [];
    }
    DemandedepotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDemandeDepotForCom();
        this.killsetinterval = setInterval(function () {
            _this.getDemandeDepotForCom();
            console.log('step');
        }, 10000);
    };
    DemandedepotComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    DemandedepotComponent.prototype.getDemandeDepotForCom = function () {
        var _this = this;
        console.log('test');
        this._suivipositionnementService.getDemandeDepotForCom()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                _this.listedeposits = data.message.map(function (type) {
                    return {
                        datedemande: type.datedemande,
                        adressecomplet: JSON.parse(type.initiateur.adresse).address + ", " + JSON.parse(type.initiateur.adresse).souszone + ", " + JSON.parse(type.initiateur.adresse).zone,
                        montantdemande: type.montantdemande,
                        telephone: type.initiateur.telephone,
                        initiateur: type.initiateur.prenom + ' ' + type.initiateur.nom,
                        infosup: type.infosup,
                        etatdemande: type.etatdemande,
                        tokencom: type.tokencom,
                    };
                });
            }
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    DemandedepotComponent.prototype.validerRecuDepotCom = function (item) {
        var _this = this;
        clearInterval(this.killsetinterval);
        this._suivipositionnementService.validerRecuDepotCom({ montantdemande: item.montantdemande, tokencom: item.tokencom })
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () {
            _this.getDemandeDepotForCom();
            _this.killsetinterval = setInterval(function () {
                _this.getDemandeDepotForCom();
                console.log('step');
            }, 10000);
        });
    };
    DemandedepotComponent.prototype.confirmerAffectationDepotCom = function (item) {
        var _this = this;
        clearInterval(this.killsetinterval);
        this._suivipositionnementService.confirmerAffectationDepotCom({ datedemande: item.datedemande, montantdemande: item.montantdemande, tokencom: item.tokencom })
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () {
            _this.getDemandeDepotForCom();
            _this.killsetinterval = setInterval(function () {
                _this.getDemandeDepotForCom();
                console.log('step');
            }, 10000);
        });
    };
    DemandedepotComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    return DemandedepotComponent;
}());
DemandedepotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'demandedepot-tables',
        template: __webpack_require__("../../../../../src/app/layout/demandedepot/demandedepot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/demandedepot/demandedepot.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__["a" /* AssignationSuiviService */], __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */]) === "function" && _f || Object])
], DemandedepotComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=demandedepot.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/demandedepot/demandedepot.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demandedepot_routing_module__ = __webpack_require__("../../../../../src/app/layout/demandedepot/demandedepot-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demandedepot_component__ = __webpack_require__("../../../../../src/app/layout/demandedepot/demandedepot.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandedepotsModule", function() { return DemandedepotsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DemandedepotsModule = (function () {
    function DemandedepotsModule() {
    }
    return DemandedepotsModule;
}());
DemandedepotsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__demandedepot_routing_module__["a" /* DemandedepotRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
            }),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__demandedepot_component__["a" /* DemandedepotComponent */],
        ]
    })
], DemandedepotsModule);

//# sourceMappingURL=demandedepot.module.js.map

/***/ })

});
//# sourceMappingURL=17.chunk.js.map