webpackJsonp([13],{

/***/ "../../../../../src/app/layout/adminecommerce/adminecommerce-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminecommerce_component__ = __webpack_require__("../../../../../src/app/layout/adminecommerce/adminecommerce.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminecommerceRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__adminecommerce_component__["a" /* AdminecommerceComponent */] }
];
var AdminecommerceRoutingModule = (function () {
    function AdminecommerceRoutingModule() {
    }
    return AdminecommerceRoutingModule;
}());
AdminecommerceRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AdminecommerceRoutingModule);

//# sourceMappingURL=adminecommerce-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminecommerce/adminecommerce.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 0.5rem\">\r\n  \t<div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n\t\t<button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Articles à recuperer</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Commandes à livrer</button>\r\n\t</div>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\">\r\n    <div class=\" row\" style=\"margin-bottom: 1rem; margin-left: 3rem; margin-right: 3rem; background-color: orange; padding: 1rem\">\r\n        <div class=\"col-sm-5\">\r\n            <label class=\"label-control\" for=\"datejourArticleARecuperer\">Date par jour:</label>\r\n            <div class=\"row\">\r\n                <input type=\"date\" id=\"datejourArticleARecuperer\" name=\"datejourArticleARecuperer\" [(ngModel)]=\"selectionjourArticleARecuperer\" style=\"margin-right: 1rem\"/>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiquejourArticleARecuperer()\" [disabled]=\"selectionjourArticleARecuperer==undefined\" >Chercher</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n            <label class=\"label-control\">Date par intervalle:</label>\r\n            <div class=\"row\">\r\n                <input type=\"date\" name=\"intervalledateinitArticleARecuperer\" [(ngModel)]=\"selectionintervalledateinitArticleARecuperer\"  style=\"margin-right: 0.5rem\"/> à <input type=\"date\" name=\"intervalleddatefinalArticleARecuperer\" [(ngModel)]=\"selectionintervalleddatefinalArticleARecuperer\"  style=\"margin-left: 0.5rem; margin-right: 1rem\" />\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiqueintervalleArticleARecuperer()\" [disabled]=\"selectionintervalledateinitArticleARecuperer>selectionintervalleddatefinalArticleARecuperer || selectionintervalledateinitArticleARecuperer==undefined || selectionintervalleddatefinalArticleARecuperer==undefined\">Chercher</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-bottom: 1rem; background-color: yellow; padding: 1rem\">\r\n        <div class=\"col-sm-2\">\r\n            <label>Région</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreRegionArticleARecuperer\" (change)=\"selectRegionArticleARecuperer()\">\r\n                <option>--Choix région--</option>\r\n                <option  *ngFor=\"let region of regions\">{{region}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label>Zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreZoneArticleARecuperer\" (change)=\"selectZoneArticleARecuperer()\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zones\">{{zone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Sous zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreSousZoneArticleARecuperer\"  (change)=\"selectSouszoneArticleARecuperer()\">\r\n                <option>--Choix sous zone--</option>\r\n                <option  *ngFor=\"let souszone of souszones\">{{souszone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Livreur</label>\r\n            <select name=\"singleSelectlivreurArticleARecuperer\"  id=\"singleSelectlivreurArticleARecuperer\" class=\"form-control input-sm\" [(ngModel)]=\"choixlivreurArticleARecuperer\">\r\n                <option [attr.value]=\"'-1'\">--Choix livreur--</option>\r\n                <option  *ngFor=\"let livreur of livreurs\" [attr.value]=\"livreur.id\">{{livreur.fullname}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\" style=\"margin-top:2rem; margin-left: auto; margin-right: auto;\"\r\n                    (click)=\"assignerlivreurArticleARecuperer()\"\r\n                    [disabled]=\"choixlivreurArticleARecuperer == '--Choix livreur--' || selectedOptionsArticleARecuperer.length<=0\"\r\n            >Assigner</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin: 0 auto; text-align: center\">\r\n        <ngb-alert [type]=\"'success'\" *ngIf=\"staticAlertClosedArticle\" (close)=\"staticAlertClosedArticle=false\">\r\n            <strong>Success!</strong> Assignation avec success.\r\n        </ngb-alert>\r\n    </div>\r\n    <div class=\"row\">\r\n        <table class=\"table table-hover\" [mfData]=\"optionassignationsArticleARecuperer\" #mfArticleARecuperer=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageArticleARecuperer\" [(mfSortBy)]=\"sortByArticleARecuperer\" [(mfSortOrder)]=\"sortOrderArticleARecuperer\">\r\n            <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th><mfDefaultSorter by=\"datecommande\">Date commande</mfDefaultSorter></th>\r\n                <th><mfDefaultSorter by=\"designation\">Article</mfDefaultSorter></th>\r\n                <th><mfDefaultSorter by=\"qte\">Qté</mfDefaultSorter></th>\r\n                <th><mfDefaultSorter by=\"adressecomplet\">Adresse</mfDefaultSorter></th>\r\n            </tr>\r\n            <tr>\r\n                <td *ngIf=\"optionassignationsArticleARecuperer.length>1\">\r\n                    <input *ngIf=\"cheickallArticleARecuperer==false\" title=\"tout coché\" type=\"checkbox\" name=\"cochertout\" [(ngModel)]=\"cheickallArticleARecuperer\" (change)=\"onchangeCheickallArticleARecuperer()\"/>\r\n                    <input *ngIf=\"cheickallArticleARecuperer==true\" title=\"tout décoché\" type=\"checkbox\" name=\"decochertout\" [(ngModel)]=\"cheickallArticleARecuperer\" (change)=\"onchangeCheickallArticleARecuperer()\"/>\r\n                </td>\r\n                <th colspan=\"3\"><input class=\"form-control\" placeholder=\"Recherche\" /></th>\r\n                <th>Total : {{optionassignationsArticleARecuperer.length}}</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of mfArticleARecuperer.data; let i = index \">\r\n                <td><input type=\"checkbox\" name=\"items\" value=\"{{item.value}}\" [(ngModel)]=\"item.checked\" (change)=\"onchangeCheickoneArticleARecuperer()\" /></td>\r\n                <td>{{item.datecommande}}</td>\r\n                <td>{{item.designation}}: {{item.description}}</td>\r\n                <td>{{item.qte}}</td>\r\n                <td>{{item.adressecomplet}}</td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr class=\"text-center center-block\">\r\n                <td colspan=\"8\" class=\"text-center center-block\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n            </tfoot>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\" row\" style=\"margin-bottom: 1rem; margin-left: 3rem; margin-right: 3rem\">\r\n        <div class=\"col-sm-5\">\r\n            <label class=\"label-control\" for=\"datejourArticleALivrer\">Date par jour:</label>\r\n            <div class=\"row\">\r\n                <input type=\"date\" id=\"datejourArticleALivrer\" name=\"datejourArticleALivrer\" [(ngModel)]=\"selectionjourArticleALivrer\" style=\"margin-right: 1rem\"/>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiquejourArticleALivrer()\" [disabled]=\"selectionjourArticleALivrer==undefined\" >Chercher</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n            <label class=\"label-control\">Date par intervalle:</label>\r\n            <div class=\"row\">\r\n                <input type=\"date\" name=\"intervalledateinitArticleALivrer\" [(ngModel)]=\"selectionintervalledateinitArticleALivrer\"  style=\"margin-right: 0.5rem\"/> à <input type=\"date\" name=\"intervalleddatefinalArticleALivrer\" [(ngModel)]=\"selectionintervalleddatefinalArticleALivrer\"  style=\"margin-left: 0.5rem; margin-right: 1rem\" />\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiqueintervalleArticleALivrer()\" [disabled]=\"selectionintervalledateinitArticleALivrer>selectionintervalleddatefinalArticleALivrer || selectionintervalledateinitArticleALivrer==undefined || selectionintervalleddatefinalArticleALivrer==undefined\">Chercher</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-sm-2\">\r\n            <label>Région</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreRegionArticleALivrer\" (change)=\"selectRegionArticleALivrer()\">\r\n                <option>--Choix région--</option>\r\n                <option  *ngFor=\"let region of regions\">{{region}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label>Zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreZoneArticleALivrer\" (change)=\"selectZoneArticleALivrer()\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zones\">{{zone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Sous zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreSousZoneArticleALivrer\"  (change)=\"selectSouszoneArticleALivrer()\">\r\n                <option>--Choix sous zone--</option>\r\n                <option  *ngFor=\"let souszone of souszones\">{{souszone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Livreur</label>\r\n            <select name=\"singleSelectlivreurArticleALivrer\"  id=\"singleSelectlivreurArticleALivrer\" class=\"form-control input-sm\" [(ngModel)]=\"choixlivreurArticleALivrer\">\r\n                <option [attr.value]=\"'-1'\">--Choix livreur--</option>\r\n                <option  *ngFor=\"let livreur of livreurs\" [attr.value]=\"livreur.id\">{{livreur.fullname}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <button type=\"button\" class=\"btn btn-warning btn-sm\" style=\"margin-top:2rem; margin-left: auto; margin-right: auto;\"\r\n                    (click)=\"assignerlivreurArticleALivrer()\"\r\n                    [disabled]=\"choixlivreurArticleALivrer == '--Choix livreur--' || selectedOptionsArticleALivrer.length<=0\"\r\n            >Assigner</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin: 0 auto; text-align: center\">\r\n        <ngb-alert [type]=\"'success'\" *ngIf=\"staticAlertClosedArticle\" (close)=\"staticAlertClosedArticle=false\">\r\n            <strong>Success!</strong> Assignation avec success.\r\n        </ngb-alert>\r\n    </div>\r\n    <div class=\"row\">\r\n        <table class=\"table table-hover\" [mfData]=\"optionassignationsArticleALivrer\" #mfArticleALivrer=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageArticleALivrer\" [(mfSortBy)]=\"sortByArticleALivrer\" [(mfSortOrder)]=\"sortOrderArticleALivrer\">\r\n            <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th><mfDefaultSorter by=\"datecommande\">Date ajout</mfDefaultSorter></th>\r\n                <th><mfDefaultSorter by=\"attributcommande\">Commande</mfDefaultSorter></th>\r\n                <th><mfDefaultSorter by=\"adressecomplet\">Adresse</mfDefaultSorter></th>\r\n                <th>Option</th>\r\n            </tr>\r\n            <tr>\r\n                <td *ngIf=\"optionassignationsArticleALivrer.length>1\">\r\n                    <input *ngIf=\"cheickallArticleALivrer==false\" title=\"tout coché\" type=\"checkbox\" name=\"cochertout\" [(ngModel)]=\"cheickallArticleALivrer\" (change)=\"onchangeCheickallArticleALivrer()\"/>\r\n                    <input *ngIf=\"cheickallArticleALivrer==true\" title=\"tout décoché\" type=\"checkbox\" name=\"decochertout\" [(ngModel)]=\"cheickallArticleALivrer\" (change)=\"onchangeCheickallArticleALivrer()\"/>\r\n                </td>\r\n                <th colspan=\"3\"><input class=\"form-control\" placeholder=\"Recherche\" /></th>\r\n                <th>Total : {{optionassignationsArticleALivrer.length}}</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of mfArticleALivrer.data; let i = index \">\r\n                <td><input type=\"checkbox\" name=\"items\" value=\"{{item.value}}\" [(ngModel)]=\"item.checked\"  (change)=\"onchangeCheickoneArticleALivrer()\" /></td>\r\n                <td>{{item.datecommande}}</td>\r\n                <td>{{item.attributcommande}}</td>\r\n                <td>{{item.adressecomplet}}</td>\r\n                <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"open(contentCommandeAlivrer, item)\">voir detail</button></td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr class=\"text-center center-block\">\r\n                <td colspan=\"8\" class=\"text-center center-block\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n            </tfoot>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<ng-template #contentCommandeAlivrer let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h2 style=\"text-align: center; margin: 0 auto\"> Detail commande</h2>\r\n        <div class=\"row\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Article</th>\r\n                        <th>Description</th>\r\n                        <th>Qté</th>\r\n                        <th>Montant</th>\r\n                        <th>Adresse</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of onecommandeAlivrer.articlescommande; let i = index \">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{item.designation}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td>{{item.qte}}</td>\r\n                        <td>{{item.montant}}</td>\r\n                        <td>{{item.adressecomplet}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/adminecommerce/adminecommerce.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/adminecommerce/adminecommerce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apicommande_service__ = __webpack_require__("../../../../../src/app/services/apicommande.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminecommerceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminecommerceComponent = (function () {
    function AdminecommerceComponent(modalService, router, _apiCommandeService) {
        this.modalService = modalService;
        this.router = router;
        this._apiCommandeService = _apiCommandeService;
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.livreurs = [];
        this.staticAlertClosedArticle = false;
        this.menuHead = { menuHead1: true, menuHead2: false };
        this.loading_data = true;
        /************************************************************************************
         ************************   PARTIE ARTICLE A RECUPERER   ****************************
         ***********************************************************************************/
        this.cheickallArticleARecuperer = false;
        this.articlesARecuperer = [];
        this.optionassignationsArticleARecuperer = [];
        this.filtreRegionArticleARecuperer = "--Choix région--";
        this.filtreZoneArticleARecuperer = "--Choix zone--";
        this.filtreSousZoneArticleARecuperer = "--Choix sous zone--";
        this.choixlivreurArticleARecuperer = "--Choix livreur--";
        this.rowsOnPageArticleARecuperer = 10;
        this.sortByArticleARecuperer = "datecommande";
        this.sortOrderArticleARecuperer = "asc";
        /************************************************************************************
         ***************************   PARTIE ARTICLE A LIVRER   ****************************
         ***********************************************************************************/
        this.cheickallArticleALivrer = false;
        this.articlesALivrer = [];
        this.optionassignationsArticleALivrer = [];
        this.filtreRegionArticleALivrer = "--Choix région--";
        this.filtreZoneArticleALivrer = "--Choix zone--";
        this.filtreSousZoneArticleALivrer = "--Choix sous zone--";
        this.choixlivreurArticleALivrer = "--Choix livreur--";
        this.rowsOnPageArticleALivrer = 10;
        this.sortByArticleALivrer = "datecommande";
        this.sortOrderArticleALivrer = "asc";
    }
    AdminecommerceComponent.prototype.ngOnInit = function () {
        this.loading_data = true;
        console.log("-------------------------------");
        this.histInitArticleARecuperer();
    };
    AdminecommerceComponent.prototype.ngOnDestroy = function () { };
    AdminecommerceComponent.prototype.menuHeadClick = function (option) {
        this.loading_data = true;
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            console.log("menuHead1--------");
            this.histInitArticleARecuperer();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            console.log("menuHead2--------");
            this.histInitArticleALivrer();
        }
    };
    AdminecommerceComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    AdminecommerceComponent.prototype.showModal = function (content) {
        this.modalRef = this.modalService.open(content, { size: "lg" });
    };
    AdminecommerceComponent.prototype.closedModal = function () {
        this.modalRef.close('Close click');
    };
    AdminecommerceComponent.prototype.historiquejourArticleARecuperer = function () {
        var _this = this;
        this.initARecuperer();
        this.selectionintervalledateinitArticleARecuperer = undefined;
        this.selectionintervalleddatefinalArticleARecuperer = undefined;
        this._apiCommandeService.getListCommandeARecupererByDate({ origine: 'actuel', type: 'jour', infotype: this.selectionjourArticleARecuperer })
            .subscribe(function (data) {
            console.log("-------------------------------");
            data.message.forEach(function (opt) {
                JSON.parse(opt.orderedArticles).forEach(function (type) {
                    if (!_this.regions.includes(type.region))
                        _this.regions.push(type.region);
                    _this.articlesARecuperer.push({
                        id: type.idarticle ? type.idarticle : type.id,
                        idcommande: opt.id,
                        article: type,
                        datecommande: opt.dateCommande.date.split('.')[0],
                        designation: type.designation,
                        description: type.description,
                        adressecomplet: type.address + ", " + type.souszone + ", " + type.zone + ", " + type.region,
                        address: type.address,
                        region: type.region,
                        zone: type.zone,
                        souszone: type.souszone,
                        qte: type.qte,
                        supplied: Number(type.supplied),
                        value: type.idarticle ? type.idarticle : type.id,
                        checked: false
                    });
                });
            });
            _this.optionassignationsArticleARecuperer = _this.articlesARecuperer.filter(function (opt) { return opt.supplied == 0; });
        }, function (error) { return alert(error); }, function () {
            _this.finaleARecuperer();
        });
    };
    AdminecommerceComponent.prototype.historiqueintervalleArticleARecuperer = function () {
        var _this = this;
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initARecuperer();
        this.selectionjourArticleARecuperer = undefined;
        this._apiCommandeService.getListCommandeARecupererByDate({ origine: 'actuel', type: 'intervalle', infotype: this.selectionintervalledateinitArticleARecuperer + " " + this.selectionintervalleddatefinalArticleARecuperer })
            .subscribe(function (data) {
            console.log("-------------------------------");
            data.message.forEach(function (opt) {
                JSON.parse(opt.orderedArticles).forEach(function (type) {
                    if (!_this.regions.includes(type.region))
                        _this.regions.push(type.region);
                    _this.articlesARecuperer.push({
                        id: type.idarticle ? type.idarticle : type.id,
                        idcommande: opt.id,
                        datecommande: opt.dateCommande.date.split('.')[0],
                        article: type,
                        designation: type.designation,
                        description: type.description,
                        adressecomplet: type.address + ", " + type.souszone + ", " + type.zone + ", " + type.region,
                        address: type.address,
                        region: type.region,
                        zone: type.zone,
                        souszone: type.souszone,
                        qte: type.qte,
                        supplied: Number(type.supplied),
                        value: type.idarticle ? type.idarticle : type.id,
                        checked: false
                    });
                });
            });
            _this.optionassignationsArticleARecuperer = _this.articlesARecuperer.filter(function (opt) { return opt.supplied == 0; });
        }, function (error) { return alert(error); }, function () {
            _this.finaleARecuperer();
        });
    };
    AdminecommerceComponent.prototype.histInitArticleARecuperer = function () {
        var _this = this;
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initARecuperer();
        this.selectionintervalledateinitArticleARecuperer = undefined;
        this.selectionintervalleddatefinalArticleARecuperer = undefined;
        var datenow = ((new Date()).toJSON()).split("T", 2)[0];
        this.selectionjourArticleARecuperer = datenow;
        this._apiCommandeService.getListCommandeARecupererByDate({ origine: 'init', type: 'jour', infotype: this.selectionjourArticleARecuperer })
            .subscribe(function (data) {
            _this.livreurs = data.message.livreurs;
            data.message.commandes.forEach(function (opt) {
                JSON.parse(opt.orderedArticles).forEach(function (type) {
                    if (!_this.regions.includes(type.region))
                        _this.regions.push(type.region);
                    _this.articlesARecuperer.push({
                        id: type.idarticle ? type.idarticle : type.id,
                        idcommande: opt.id,
                        datecommande: opt.dateCommande.date.split('.')[0],
                        article: type,
                        designation: type.designation,
                        description: type.description,
                        adressecomplet: type.address + ", " + type.souszone + ", " + type.zone + ", " + type.region,
                        address: type.address,
                        region: type.region,
                        zone: type.zone,
                        souszone: type.souszone,
                        qte: type.qte,
                        supplied: Number(type.supplied),
                        value: type.idarticle ? type.idarticle : type.id,
                        checked: false
                    });
                });
            });
            _this.optionassignationsArticleARecuperer = _this.articlesARecuperer.filter(function (opt) { return opt.supplied == 0; });
        }, function (error) { return alert(error); }, function () {
            _this.finaleARecuperer();
        });
    };
    AdminecommerceComponent.prototype.choixsuperviseurforcommercial = function () {
        var _this = this;
        console.log(this.livreurs.find(function (livreur) { return livreur.id == _this.choixlivreurArticleARecuperer; }));
    };
    AdminecommerceComponent.prototype.selectRegionArticleARecuperer = function () {
        var _this = this;
        this.zones = [];
        this.souszones = [];
        this.initCheickallArticleARecuperer();
        this.filtreZoneArticleARecuperer = "--Choix zone--";
        this.filtreSousZoneArticleARecuperer = "--Choix sous zone--";
        if (this.filtreRegionArticleARecuperer.toLocaleLowerCase() == '--Choix région--'.toLocaleLowerCase()) {
            this.optionassignationsArticleARecuperer = this.articlesARecuperer;
        }
        else {
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(function (opt) {
                return opt.region.toLocaleLowerCase() == _this.filtreRegionArticleARecuperer.toLocaleLowerCase();
            });
            this.articlesARecuperer.filter(function (opt) { return opt.region.toLocaleLowerCase() == _this.filtreRegionArticleARecuperer.toLocaleLowerCase(); }).forEach(function (opt) {
                if (!_this.zones.includes(opt.zone))
                    _this.zones.push(opt.zone);
            });
        }
    };
    AdminecommerceComponent.prototype.selectZoneArticleARecuperer = function () {
        var _this = this;
        this.souszones = [];
        this.initCheickallArticleARecuperer();
        this.filtreSousZoneArticleARecuperer = "--Choix sous zone--";
        if (this.filtreZoneArticleARecuperer.toLocaleLowerCase() == '--Choix zone--'.toLocaleLowerCase()) {
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(function (opt) { return opt.region.toLocaleLowerCase() == _this.filtreRegionArticleARecuperer.toLocaleLowerCase(); });
        }
        else {
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(function (opt) { return opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleARecuperer.toLocaleLowerCase(); });
            this.articlesARecuperer.filter(function (opt) { return (opt.region.toLocaleLowerCase() == _this.filtreRegionArticleARecuperer.toLocaleLowerCase()) && (opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleARecuperer.toLocaleLowerCase()); }).forEach(function (opt) {
                if (!_this.souszones.includes(opt.souszone))
                    _this.souszones.push(opt.souszone);
            });
        }
    };
    AdminecommerceComponent.prototype.selectSouszoneArticleARecuperer = function () {
        var _this = this;
        this.initCheickallArticleARecuperer();
        if (this.filtreSousZoneArticleARecuperer.toLocaleLowerCase() == '--Choix sous zone--'.toLocaleLowerCase()) {
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(function (opt) {
                return (opt.region.toLocaleLowerCase() == _this.filtreRegionArticleARecuperer.toLocaleLowerCase()) &&
                    (opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleARecuperer.toLocaleLowerCase());
            });
        }
        else {
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(function (opt) {
                return (opt.region.toLocaleLowerCase() == _this.filtreRegionArticleARecuperer.toLocaleLowerCase()) &&
                    (opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleARecuperer.toLocaleLowerCase()) &&
                    (opt.souszone.toLocaleLowerCase() == _this.filtreSousZoneArticleARecuperer.toLocaleLowerCase());
            });
        }
    };
    Object.defineProperty(AdminecommerceComponent.prototype, "selectedOptionsArticleARecuperer", {
        get: function () {
            return this.optionassignationsArticleARecuperer
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    AdminecommerceComponent.prototype.assignerlivreurArticleARecuperer = function () {
        var _this = this;
        if (confirm("Confirmer l'assignation")) {
            console.log("je confirme");
            this.loading_data = true;
            var datenow_1 = ((new Date()).toJSON()).split("T", 2)[0];
            var coursier_1 = this.livreurs.find(function (livreur) { return livreur.id == _this.choixlivreurArticleARecuperer; });
            var optionassignations = this.optionassignationsArticleARecuperer.filter(function (opt) { return opt.checked; }).map(function (opt) {
                return ({
                    idcoursier: Number(coursier_1.id),
                    idcommande: opt.idcommande,
                    localisation: { address: opt.address, region: opt.region, zone: opt.zone, souszone: opt.souszone },
                    infosup: { dateassignation: datenow_1, coursier: coursier_1, article: opt.article },
                });
            });
            this._apiCommandeService.validerListCommandeAssigner({ origine: 'recuperer', assignation: optionassignations })
                .subscribe(function (data) {
                _this.historiqueintervalleArticleARecuperer();
            }, function (error) { return alert(error); }, function () {
                _this.staticAlertClosedArticle = true;
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    AdminecommerceComponent.prototype.onchangeCheickallArticleARecuperer = function () {
        for (var i = 0; i < this.optionassignationsArticleARecuperer.length; i++) {
            this.optionassignationsArticleARecuperer[i].checked = this.cheickallArticleARecuperer;
        }
    };
    AdminecommerceComponent.prototype.onchangeCheickoneArticleARecuperer = function () {
        if (this.optionassignationsArticleARecuperer.find(function (article) { return article.checked == false; })) {
            this.cheickallArticleARecuperer = false;
        }
        else {
            this.cheickallArticleARecuperer = true;
        }
    };
    AdminecommerceComponent.prototype.initCheickallArticleARecuperer = function () {
        this.cheickallArticleARecuperer = false;
        for (var i = 0; i < this.optionassignationsArticleARecuperer.length; i++) {
            this.optionassignationsArticleARecuperer[i].checked = this.cheickallArticleARecuperer;
        }
    };
    AdminecommerceComponent.prototype.initARecuperer = function () {
        this.loading_data = true;
        this.cheickallArticleARecuperer = false;
        this.choixlivreurArticleARecuperer = "--Choix livreur--";
        this.staticAlertClosedArticle = false;
        this.articlesARecuperer = [];
        this.optionassignationsArticleARecuperer = [];
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.souszones = [];
    };
    AdminecommerceComponent.prototype.finaleARecuperer = function () {
        this.filtreRegionArticleARecuperer = "--Choix région--";
        this.filtreZoneArticleARecuperer = "";
        this.filtreSousZoneArticleARecuperer = "-";
        this.choixlivreurArticleARecuperer = "--Choix livreur--";
        this.loading_data = false;
    };
    AdminecommerceComponent.prototype.historiquejourArticleALivrer = function () {
        var _this = this;
        this.initALivrer();
        this.selectionintervalledateinitArticleALivrer = undefined;
        this.selectionintervalleddatefinalArticleALivrer = undefined;
        this._apiCommandeService.getListCommandeALivrerByDate({ origine: 'actuel', type: 'jour', infotype: this.selectionjourArticleALivrer })
            .subscribe(function (data) {
            console.log("-------------------------------");
            data.message.forEach(function (opt) {
                var pointrecup = JSON.parse(opt.pointderecuperation);
                if (!_this.regions.includes(pointrecup.region))
                    _this.regions.push(pointrecup.region);
                _this.articlesALivrer.push({
                    id: opt.id,
                    datecommande: opt.dateCommande.date.split('.')[0],
                    attributcommande: "CD_" + opt.id + "." + opt.commanditaire + "." + JSON.parse(opt.orderedArticles).length,
                    articlescommande: JSON.parse(opt.orderedArticles).map(function (type) {
                        return {
                            id: type.idarticle ? type.idarticle : type.id,
                            designation: type.designation,
                            description: type.description,
                            montant: type.montant,
                            imagelink: type.imagelink,
                            adressecomplet: type.address + ", " + type.souszone + ", " + type.zone + ", " + type.region,
                            address: type.address,
                            region: type.region,
                            zone: type.zone,
                            souszone: type.souszone,
                            qte: type.qte,
                            etat: type.supplied,
                        };
                    }),
                    idcommanditaire: opt.commanditaire,
                    adressecomplet: pointrecup.address + ", " + pointrecup.souszone + ", " + pointrecup.zone + ", " + pointrecup.region,
                    address: pointrecup.address,
                    region: pointrecup.region,
                    zone: pointrecup.zone,
                    souszone: pointrecup.souszone,
                    value: opt.id,
                    checked: false
                });
            });
            _this.optionassignationsArticleALivrer = _this.articlesALivrer;
        }, function (error) { return alert(error); }, function () {
            _this.finaleALivrer();
        });
    };
    AdminecommerceComponent.prototype.historiqueintervalleArticleALivrer = function () {
        var _this = this;
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initALivrer();
        this.selectionjourArticleALivrer = undefined;
        this._apiCommandeService.getListCommandeALivrerByDate({ origine: 'actuel', type: 'intervalle', infotype: this.selectionintervalledateinitArticleALivrer + " " + this.selectionintervalleddatefinalArticleALivrer })
            .subscribe(function (data) {
            console.log("-------------------------------");
            data.message.forEach(function (opt) {
                var pointrecup = JSON.parse(opt.pointderecuperation);
                if (!_this.regions.includes(pointrecup.region))
                    _this.regions.push(pointrecup.region);
                _this.articlesALivrer.push({
                    id: opt.id,
                    datecommande: opt.dateCommande.date.split('.')[0],
                    attributcommande: "CD_" + opt.id + "." + opt.commanditaire + "." + JSON.parse(opt.orderedArticles).length,
                    articlescommande: JSON.parse(opt.orderedArticles).map(function (type) {
                        return {
                            id: type.idarticle ? type.idarticle : type.id,
                            designation: type.designation,
                            description: type.description,
                            montant: type.montant,
                            imagelink: type.imagelink,
                            adressecomplet: type.address + ", " + type.souszone + ", " + type.zone + ", " + type.region,
                            address: type.address,
                            region: type.region,
                            zone: type.zone,
                            souszone: type.souszone,
                            qte: type.qte,
                            etat: type.supplied,
                        };
                    }),
                    idcommanditaire: opt.commanditaire,
                    adressecomplet: pointrecup.address + ", " + pointrecup.souszone + ", " + pointrecup.zone + ", " + pointrecup.region,
                    address: pointrecup.address,
                    region: pointrecup.region,
                    zone: pointrecup.zone,
                    souszone: pointrecup.souszone,
                    value: opt.id,
                    checked: false
                });
            });
            _this.optionassignationsArticleALivrer = _this.articlesALivrer;
        }, function (error) { return alert(error); }, function () {
            _this.finaleALivrer();
        });
    };
    AdminecommerceComponent.prototype.histInitArticleALivrer = function () {
        var _this = this;
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initALivrer();
        this.selectionintervalledateinitArticleALivrer = undefined;
        this.selectionintervalleddatefinalArticleALivrer = undefined;
        var datenow = ((new Date()).toJSON()).split("T", 2)[0];
        this.selectionjourArticleALivrer = datenow;
        this._apiCommandeService.getListCommandeALivrerByDate({ origine: 'init', type: 'jour', infotype: this.selectionjourArticleALivrer })
            .subscribe(function (data) {
            _this.livreurs = data.message.livreurs;
            data.message.commandes.forEach(function (opt) {
                var pointrecup = JSON.parse(opt.pointderecuperation);
                if (!_this.regions.includes(pointrecup.region))
                    _this.regions.push(pointrecup.region);
                _this.articlesALivrer.push({
                    id: opt.id,
                    datecommande: opt.dateCommande.date.split('.')[0],
                    attributcommande: "CD_" + opt.id + "." + opt.commanditaire + "." + JSON.parse(opt.orderedArticles).length,
                    articlescommande: JSON.parse(opt.orderedArticles).map(function (type) {
                        return {
                            id: type.idarticle ? type.idarticle : type.id,
                            designation: type.designation,
                            description: type.description,
                            montant: type.montant,
                            imagelink: type.imagelink,
                            adressecomplet: type.address + ", " + type.souszone + ", " + type.zone + ", " + type.region,
                            address: type.address,
                            region: type.region,
                            zone: type.zone,
                            souszone: type.souszone,
                            qte: type.qte,
                            etat: type.supplied,
                        };
                    }),
                    idcommanditaire: opt.commanditaire,
                    adressecomplet: pointrecup.address + ", " + pointrecup.souszone + ", " + pointrecup.zone + ", " + pointrecup.region,
                    address: pointrecup.address,
                    region: pointrecup.region,
                    zone: pointrecup.zone,
                    souszone: pointrecup.souszone,
                    value: opt.id,
                    checked: false
                });
            });
            _this.optionassignationsArticleALivrer = _this.articlesALivrer;
        }, function (error) { return alert(error); }, function () {
            _this.finaleALivrer();
        });
    };
    AdminecommerceComponent.prototype.selectRegionArticleALivrer = function () {
        var _this = this;
        this.zones = [];
        this.souszones = [];
        this.initCheickallArticleALivrer();
        this.filtreZoneArticleALivrer = "--Choix zone--";
        this.filtreSousZoneArticleALivrer = "--Choix sous zone--";
        if (this.filtreRegionArticleALivrer.toLocaleLowerCase() == '--Choix région--'.toLocaleLowerCase()) {
            this.optionassignationsArticleALivrer = this.articlesALivrer;
        }
        else {
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(function (opt) {
                return opt.region.toLocaleLowerCase() == _this.filtreRegionArticleALivrer.toLocaleLowerCase();
            });
            this.articlesALivrer.filter(function (opt) { return opt.region.toLocaleLowerCase() == _this.filtreRegionArticleALivrer.toLocaleLowerCase(); }).forEach(function (opt) {
                if (!_this.zones.includes(opt.zone))
                    _this.zones.push(opt.zone);
            });
        }
    };
    AdminecommerceComponent.prototype.selectZoneArticleALivrer = function () {
        var _this = this;
        this.souszones = [];
        this.initCheickallArticleALivrer();
        this.filtreSousZoneArticleALivrer = "--Choix sous zone--";
        if (this.filtreZoneArticleALivrer.toLocaleLowerCase() == '--Choix zone--'.toLocaleLowerCase()) {
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(function (opt) { return opt.region.toLocaleLowerCase() == _this.filtreRegionArticleALivrer.toLocaleLowerCase(); });
        }
        else {
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(function (opt) { return opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleALivrer.toLocaleLowerCase(); });
            this.articlesALivrer.filter(function (opt) { return (opt.region.toLocaleLowerCase() == _this.filtreRegionArticleALivrer.toLocaleLowerCase()) && (opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleALivrer.toLocaleLowerCase()); }).forEach(function (opt) {
                if (!_this.souszones.includes(opt.souszone))
                    _this.souszones.push(opt.souszone);
            });
        }
    };
    AdminecommerceComponent.prototype.selectSouszoneArticleALivrer = function () {
        var _this = this;
        this.initCheickallArticleALivrer();
        if (this.filtreSousZoneArticleALivrer.toLocaleLowerCase() == '--Choix sous zone--'.toLocaleLowerCase()) {
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(function (opt) {
                return (opt.region.toLocaleLowerCase() == _this.filtreRegionArticleALivrer.toLocaleLowerCase()) &&
                    (opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleALivrer.toLocaleLowerCase());
            });
        }
        else {
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(function (opt) {
                return (opt.region.toLocaleLowerCase() == _this.filtreRegionArticleALivrer.toLocaleLowerCase()) &&
                    (opt.zone.toLocaleLowerCase() == _this.filtreZoneArticleALivrer.toLocaleLowerCase()) &&
                    (opt.souszone.toLocaleLowerCase() == _this.filtreSousZoneArticleALivrer.toLocaleLowerCase());
            });
        }
    };
    Object.defineProperty(AdminecommerceComponent.prototype, "selectedOptionsArticleALivrer", {
        get: function () {
            return this.optionassignationsArticleALivrer
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    AdminecommerceComponent.prototype.assignerlivreurArticleALivrer = function () {
        var _this = this;
        if (confirm("Confirmer l'assignation")) {
            console.log("je confirme");
            this.loading_data = true;
            var datenow_2 = ((new Date()).toJSON()).split("T", 2)[0];
            var coursier_2 = this.livreurs.find(function (livreur) { return livreur.id == _this.choixlivreurArticleALivrer; });
            var optionassignations = this.optionassignationsArticleALivrer.filter(function (opt) { return opt.checked; }).map(function (opt) {
                return ({
                    idcoursier: Number(coursier_2.id),
                    idcommande: opt.id,
                    localisation: { address: opt.address, region: opt.region, zone: opt.zone, souszone: opt.souszone },
                    infosup: { dateassignation: datenow_2, coursier: coursier_2, articlescommande: opt.articlescommande },
                });
            });
            this._apiCommandeService.validerListCommandeAssigner({ origine: 'livrer', assignation: optionassignations })
                .subscribe(function (data) {
                _this.historiqueintervalleArticleALivrer();
            }, function (error) { return alert(error); }, function () {
                _this.staticAlertClosedArticle = true;
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    AdminecommerceComponent.prototype.onchangeCheickallArticleALivrer = function () {
        for (var i = 0; i < this.optionassignationsArticleALivrer.length; i++) {
            this.optionassignationsArticleALivrer[i].checked = this.cheickallArticleALivrer;
        }
    };
    AdminecommerceComponent.prototype.onchangeCheickoneArticleALivrer = function () {
        if (this.optionassignationsArticleALivrer.find(function (article) { return article.checked == false; })) {
            this.cheickallArticleALivrer = false;
        }
        else {
            this.cheickallArticleALivrer = true;
        }
    };
    AdminecommerceComponent.prototype.initCheickallArticleALivrer = function () {
        this.cheickallArticleALivrer = false;
        for (var i = 0; i < this.optionassignationsArticleALivrer.length; i++) {
            this.optionassignationsArticleALivrer[i].checked = this.cheickallArticleALivrer;
        }
    };
    AdminecommerceComponent.prototype.initALivrer = function () {
        this.loading_data = true;
        this.cheickallArticleALivrer = false;
        this.choixlivreurArticleALivrer = "--Choix livreur--";
        this.staticAlertClosedArticle = false;
        this.articlesALivrer = [];
        this.optionassignationsArticleALivrer = [];
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.souszones = [];
    };
    AdminecommerceComponent.prototype.finaleALivrer = function () {
        this.filtreRegionArticleALivrer = "--Choix région--";
        this.filtreZoneArticleALivrer = "";
        this.filtreSousZoneArticleALivrer = "-";
        this.choixlivreurArticleALivrer = "--Choix livreur--";
        this.loading_data = false;
    };
    AdminecommerceComponent.prototype.open = function (content, onecommandeAlivrer) {
        var _this = this;
        this.onecommandeAlivrer = onecommandeAlivrer;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AdminecommerceComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return AdminecommerceComponent;
}());
AdminecommerceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminecommerce',
        template: __webpack_require__("../../../../../src/app/layout/adminecommerce/adminecommerce.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/adminecommerce/adminecommerce.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_apicommande_service__["a" /* ApiCommandeService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_apicommande_service__["a" /* ApiCommandeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_apicommande_service__["a" /* ApiCommandeService */]) === "function" && _c || Object])
], AdminecommerceComponent);

var _a, _b, _c;
//# sourceMappingURL=adminecommerce.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminecommerce/adminecommerce.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adminecommerce_component__ = __webpack_require__("../../../../../src/app/layout/adminecommerce/adminecommerce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adminecommerce_routing_module__ = __webpack_require__("../../../../../src/app/layout/adminecommerce/adminecommerce-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminecommerceModule", function() { return AdminecommerceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdminecommerceModule = (function () {
    function AdminecommerceModule() {
    }
    return AdminecommerceModule;
}());
AdminecommerceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__adminecommerce_routing_module__["a" /* AdminecommerceRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
            }),
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__adminecommerce_component__["a" /* AdminecommerceComponent */],
        ]
    })
], AdminecommerceModule);

//# sourceMappingURL=adminecommerce.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/apicommande.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCommandeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by PC on 21/08/2017.
 */


var ApiCommandeService = (function () {
    function ApiCommandeService(_http) {
        this._http = _http;
        //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
        //private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
        //private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
        this.link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }
    ApiCommandeService.prototype.getListCommandeALivrerByDate = function (data) {
        var url = this.link + "/apicommande/getlistcommandealivrerbydate";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ApiCommandeService.prototype.getListCommandeARecupererByDate = function (data) {
        var url = this.link + "/apicommande/getlistcommandearecupererbydate";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ApiCommandeService.prototype.validerListCommandeAssigner = function (data) {
        var url = this.link + "/apicommande/validerlistcommandeassigner";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return ApiCommandeService;
}());
ApiCommandeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiCommandeService);

var _a;
//# sourceMappingURL=apicommande.service.js.map

/***/ })

});
//# sourceMappingURL=13.chunk.js.map