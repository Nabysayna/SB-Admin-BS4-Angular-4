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

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Demande de depot'\" [icon]=\"'fa-table'\"></app-page-header>\r\n\r\n    <div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n        <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\">\r\n                    <tr style=\"text-align: right\">\r\n                        <th>#</th>\r\n                        <th>Date demande</th>\r\n                        <th>Entreprise</th>\r\n                        <th>Superviseur</th>\r\n                        <th>Téléphone</th>\r\n                        <th>Adresse</th>\r\n                        <th>Montant depot</th>\r\n                        <th>CC en charge</th>\r\n                        <th style=\"text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let p of listedepositsencours; let i=index\" [ngStyle]=\"{'color': 'black', 'background-color': (p.etatdemande==0)?'red':(p.etatdemande==1)?'orange':'green'}\">\r\n                        <th>{{i+1}}</th>\r\n                        <td>{{p.datedemande}}</td>\r\n                        <td>{{p.infosup}}</td>\r\n                        <td>{{p.initiateur}}</td>\r\n                        <td>{{p.telephone}}</td>\r\n                        <td>{{p.adressecomplet}}</td>\r\n                        <td>{{p.montantdemande}}</td>\r\n                        <td>{{p.cc}}</td>\r\n                        <td>\r\n                            <button *ngIf=\"p.etatdemande==0\" type=\"button\" name=\"confirmerAffectationDepotCom-{{i}}\" id=\"confirmerAffectationDepotCom-{{i}}\" class=\"btn btn-primary\" (click)=\"confirmerAffectationDepotCom(p)\">Confirmer départ</button>\r\n                            <button *ngIf=\"p.etatdemande==1\" type=\"button\" name=\"validerRecuDepotCom-{{i}}\" id=\"validerRecuDepotCom-{{i}}\" class=\"btn btn-primary\" (click)=\"validerRecuDepotCom(p)\">Valider reception dépot</button>\r\n                            <strong *ngIf=\"p.etatdemande>1\" >Dépot effectué</strong>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"8\" style=\"text-align: center; margin-top: 1rem\">\r\n                            <u *ngIf=\"listedepositsvalide.length!=0\" style=\"cursor: pointer\" (click)=\"showModalVoirplusdedemande(contentVoirplusdedemande)\" title=\"Voir plus de depot\">Voir dépots validé</u>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #contentVoirplusdedemande let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Détail positionnement ({{listedepositsvalide.length}})</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"panel panel-default\">\r\n                        <table class=\"table table-hover table-responsive\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Date demande</th>\r\n                                <th>Entreprise</th>\r\n                                <th>Superviseur</th>\r\n                                <th>Téléphone</th>\r\n                                <th>Montant depot</th>\r\n                                <th>CC en charge</th>\r\n                            </tr>\r\n                            <tr *ngFor=\"let p of listedepositsvalide; let i=index\" [ngStyle]=\"{'color': 'black', 'background-color': (p.niveau_avancement==-4)?'red':(p.niveau_avancement==-3)?'orange':(p.niveau_avancement==-2)?'blue':(p.niveau_avancement==-1)?'pink':'green'}\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{p.datedemande}}</td>\r\n                                <td>{{p.infosup}}</td>\r\n                                <td>{{p.initiateur}}</td>\r\n                                <td>{{p.telephone}}</td>\r\n                                <td style=\"text-align: right;\">{{tocurrency(p.montantdemande)}}</td>\r\n                                <td style=\"width: 200px\">{{p.cc}}</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n"

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
        this.loading_data = true;
        //////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        this.listedeposits = [];
        this.listedepositsencours = [];
        this.listedepositsvalide = [];
    }
    DemandedepotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading_data = true;
        this.getDemandeDepotForCom();
        this.killsetinterval = setInterval(function () {
            _this.getDemandeDepotEncoursForCom();
            console.log('step init');
        }, 20000);
    };
    DemandedepotComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    DemandedepotComponent.prototype.getDemandeDepotForCom = function () {
        var _this = this;
        console.log('getDemandeDepotForCom');
        this._suivipositionnementService.getDemandeDepotForCom()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                _this.listedeposits = data.message.map(function (type) {
                    return {
                        datedemande: type.datedemande,
                        adressecomplet: JSON.parse(type.initiateur.adresse).address + ", " + JSON.parse(type.initiateur.adresse).souszone + ", " + JSON.parse(type.initiateur.adresse).zone,
                        montantdemande: type.montantdemande,
                        cc: JSON.parse(type.validateur).prenom + " " + JSON.parse(type.validateur).nom,
                        telephone: type.initiateur.telephone,
                        initiateur: type.initiateur.prenom + ' ' + type.initiateur.nom,
                        infosup: type.infosup,
                        etatdemande: type.etatdemande,
                        tokencom: type.tokencom,
                    };
                });
                _this.listedepositsencours = _this.listedeposits.filter(function (opt) { return opt.etatdemande != 3; });
                _this.listedepositsvalide = _this.listedeposits.filter(function (opt) { return opt.etatdemande == 3; });
            }
        }, function (error) { return alert(error); }, function () { return _this.loading_data = false; });
    };
    DemandedepotComponent.prototype.getDemandeDepotEncoursForCom = function () {
        var _this = this;
        console.log('getDemandeDepotEncoursForCom');
        this._suivipositionnementService.getDemandeDepotEncoursForCom()
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
                        cc: JSON.parse(type.validateur).prenom + " " + JSON.parse(type.validateur).nom,
                        etatdemande: type.etatdemande,
                        tokencom: type.tokencom,
                    };
                });
                _this.listedepositsencours = _this.listedeposits.filter(function (opt) { return opt.etatdemande != 3; });
            }
        }, function (error) { return alert(error); }, function () { return _this.loading_data = false; });
    };
    DemandedepotComponent.prototype.validerRecuDepotCom = function (item) {
        var _this = this;
        if (confirm("Confirmer l'affectation")) {
            console.log("je confirme");
            this.loading_data = true;
            clearInterval(this.killsetinterval);
            this._suivipositionnementService.validerRecuDepotCom({ montantdemande: item.montantdemande, tokencom: item.tokencom })
                .subscribe(function (data) {
                _this.listedepositsencours = _this.listedeposits.filter(function (opt) { return opt.etatdemande != 3 && opt.tokencom != item.tokencom; });
                _this.getDemandeDepotForCom();
            }, function (error) { return alert(error); }, function () {
                _this.killsetinterval = setInterval(function () {
                    _this.getDemandeDepotEncoursForCom();
                    console.log('step valide');
                }, 20000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    DemandedepotComponent.prototype.confirmerAffectationDepotCom = function (item) {
        var _this = this;
        if (confirm("Confirmer l'affectation")) {
            console.log("je confirme");
            this.loading_data = true;
            clearInterval(this.killsetinterval);
            this._suivipositionnementService.confirmerAffectationDepotCom({ datedemande: item.datedemande, montantdemande: item.montantdemande, tokencom: item.tokencom })
                .subscribe(function (data) {
                _this.getDemandeDepotEncoursForCom();
            }, function (error) { return alert(error); }, function () {
                _this.killsetinterval = setInterval(function () {
                    _this.getDemandeDepotEncoursForCom();
                    console.log('step confirm affectation');
                }, 20000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    DemandedepotComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    DemandedepotComponent.prototype.showModalVoirplusdedemande = function (content) {
        this.modalService.open(content, { size: "lg" }).result.then(function (result) { }, function (reason) { });
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