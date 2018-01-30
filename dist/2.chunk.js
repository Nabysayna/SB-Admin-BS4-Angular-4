webpackJsonp([2],{

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
    };
    FormuserbbsComponent.prototype.enregisternouvcom = function () {
        var _this = this;
        this._utilService.ajoutCommercial(this.commercial)
            .subscribe(function (data) {
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

/***/ "../../../../../src/app/layout/suivionepoint/data-filter-list-suivipoint.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterListesuivipointPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterListesuivipointPipe = (function () {
    function DataFilterListesuivipointPipe() {
    }
    DataFilterListesuivipointPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.tel.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.cautiondebase.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.caution.toLocaleString().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterListesuivipointPipe;
}());
DataFilterListesuivipointPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterListesuivipoint"
    })
], DataFilterListesuivipointPipe);

//# sourceMappingURL=data-filter-list-suivipoint.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/suivionepoint/suivionepoint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\" >\r\n    <button  type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"pointcc=null;\" [routerLink]=\"['/superviseur']\">Retour à l'accueil</button>  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"menuHeadClick(3)\">Performances des points</button>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listepointsbycc  | dataFilterListesuivipoint: filterQuerypointsbycc\" #mfCliTraiterPoint=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBypointsbycc\" [(mfSortOrder)]=\"sortOrderpointsbycc\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"tel\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"cautiondebase\">Dernier dépot</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"caution\">Caution</mfDefaultSorter></th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuerypointsbycc\"/></th>\r\n                        <th>{{categorie}} : {{listepointsbycc.length}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"8\">\r\n                            <div style=\"color: black; text-align: center;\">\r\n                                <button type=\"button\" (click)=\"getCategorie('Tous')\" class=\"btn btn-dark btn-sm\"> Tous </button>&nbsp;&nbsp;\r\n                                <button type=\"button\" (click)=\"getCategorie('Pas de depot')\" class=\"btn btn-info btn-sm\" style=\"background-color: blue;\"> Pas de depot </button>&nbsp;&nbsp;\r\n                                <button type=\"button\" (click)=\"getCategorie('Faible')\" class=\"btn btn-info btn-sm\" style=\"background-color: red;\"> Faible </button>&nbsp;&nbsp;\r\n                                <button type=\"button\" (click)=\"getCategorie('Passable')\" class=\"btn btn-info btn-sm\" style=\"background-color: orange;\"> Passable </button>&nbsp;&nbsp;\r\n                                <button type=\"button\" (click)=\"getCategorie('Bien')\" class=\"btn btn-info btn-sm\" style=\"background-color: green;\"> Bien </button>\r\n                                <br/>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let p of mfCliTraiterPoint.data; let i = index\" [ngStyle]=\"{'color': 'black', 'background-color': p.cautiondebase==0?'blue':((100*p.caution)/p.cautiondebase)<25?'red':((100*p.caution)/p.cautiondebase)>=25 && ((100*p.caution)/p.cautiondebase)<=50?'orange':'green'}\">\r\n                        <td>{{p.date_ajout}}</td>\r\n                        <td>{{p.nom_point}}</td>\r\n                        <td>{{p.gerant}}</td>\r\n                        <td>{{p.tel}}</td>\r\n                        <td>{{p.adresse}}</td>\r\n                        <td>{{p.cautiondebase}}</td>\r\n                        <td>{{p.caution}}</td>\r\n                        <td><button type=\"button\" *ngIf=\"p.categorie!='pas'\" class=\"btn btn-info btn-sm\" (click)=\"suivrepoint(p)\">SUIVRE</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"6\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <button  type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"pointcc=null;\" [routerLink]=\"['/superviseur']\">Retour à l'accueil</button> <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"pointcc=null; menuHeadClick(1)\">Retour à la liste des points</button>\r\n    <hr>\r\n    <div class=\"row\" *ngIf=\"datapointrecup\">\r\n        <div class=\"card\" style=\"width: 100%\">\r\n            <h3 class=\"card-header card-success\">\r\n                Info Entreprise\r\n            </h3>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 31%; margin-left: 1%; margin-right: 1%\">\r\n            <div class=\"card-header card-primary\">\r\n                Entreprise\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\">Nom de l'entreprise: {{pointcc.info_point.nometps}}</li>\r\n                <li class=\"list-group-item\">Nom boutique:  {{pointcc.info_point.nomshop}}</li>\r\n                <li class=\"list-group-item\">Adresse:  {{pointcc.adressecomplet.address}}\r\n                    <br>{{pointcc.adressecomplet.souszone}}\r\n                    <br>{{pointcc.adressecomplet.region}}, {{pointcc.adressecomplet.zone}}.\r\n                </li>\r\n                <li class=\"list-group-item\">Date creation: {{pointcc.date_ajout}}</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 30%; margin-right: 1%\">\r\n            <div class=\"card-header card-primary\">\r\n                Proprietaire\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\">Nom : {{pointcc.gerant}}, {{pointcc.tel}}</li>\r\n                <li class=\"list-group-item\">Email: {{pointcc.email}}</li>\r\n                <li class=\"list-group-item\">Derniere connexion: {{datapointrecup.infopoint.last_connection_sup}}</li>\r\n                <li class=\"list-group-item\">Commercial: {{datapointrecup.infocom.prenom}} {{datapointrecup.infocom.nom}}</li>\r\n                <li class=\"list-group-item\">Chargé commercial: {{datapointrecup.infocc.prenom}} {{datapointrecup.infocc.nom}}</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 35%\">\r\n            <div class=\"card-header card-primary\">\r\n                Déposit\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\">\r\n                    <canvas baseChart #baseChart2=\"base-chart\"\r\n                            [datasets]=\"barChartData\"\r\n                            [labels]=\"barChartLabels\"\r\n                            [options]=\"barChartOptions\"\r\n                            [legend]=\"barChartLegend\"\r\n                            [chartType]=\"barChartType\" ></canvas>\r\n                </li>\r\n                <li class=\"list-group-item\">Total Dépot: {{tocurrency(pointcc.cautiondebase)}} FCFA, <span (click)=\"showModalVoirTousLesDepots(contentVoirTousLesDepots)\" style=\"margin-left: 1rem; cursor: pointer; color: blue; text-decoration: underline dotted blue; text-align: center\">tous les depots</span></li>\r\n                <li class=\"list-group-item\">Etat actuel Caution:  {{tocurrency(pointcc.caution)}} FCFA</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"datapointrecup\" style=\"margin-top: 2rem\">\r\n        <div class=\"card\" style=\"width: 100%\">\r\n            <h5 class=\"card-header card-success\">\r\n                <span style=\"margin-right: 2rem\">Recherche </span>\r\n                <input type=\"date\" [(ngModel)]=\"suivionepointSelectionintervalledateinit\" style=\"margin-right: 0.5rem\"/> à <input type=\"date\" [(ngModel)]=\"suivionepointSelectionintervalledatefinal\"  style=\"margin-left: 0.5rem; margin-right: 1rem\" />\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"suivionepointIntervalle()\" [disabled]=\"suivionepointSelectionintervalledateinit>suivionepointSelectionintervalledatefinal || suivionepointSelectionintervalledateinit==undefined || suivionepointSelectionintervalledatefinal==undefined \" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n            </h5>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 30%;\">\r\n            <a style=\"cursor: pointer\" [ngClass]=\"{'list-group-item': true, 'list-group-item-action': true, 'active': id_gerant_selectionne==-1}\" (click)=\"suivionepointSelectionGerant(-1)\">\r\n                All ({{touslesgerants.length}} Gérants)\r\n            </a>\r\n            <li *ngFor=\"let item of touslesgerants; let i = index \" [ngClass]=\"{'list-group-item': true, 'list-group-item-action': true, 'active': id_gerant_selectionne==item.id_gerant}\">\r\n                <a style=\"cursor: pointer\" (click)=\"suivionepointSelectionGerant(item.id_gerant)\">\r\n                    Gérant: {{item.nom_gerant}}, {{item.telephone}}\r\n                    <br>Last connection: {{item.last_connection}}.\r\n                </a>\r\n            </li>\r\n        </div>\r\n        <div class=\"card\" style=\"margin-left:1%; width: 69%;\">\r\n            <div style=\"width: 100%\" style=\"margin-top: 1rem\">\r\n                <h4 class=\"card-header card-success\">\r\n                    Montant des Transactions par jour\r\n                </h4>\r\n                <div *ngIf=\"touslesjours.length!=0 && lineChartData.length!=0 && lineChartLabels.length!=0\">\r\n                    <canvas baseChart height=\"100\" #baseChart1=\"base-chart\"\r\n                            [datasets]=\"lineChartData\"\r\n                            [labels]=\"lineChartLabels\"\r\n                            [options]=\"lineChartOptions\"\r\n                            [legend]=\"lineChartLegend\"\r\n                            [chartType]=\"lineChartType\" ></canvas>\r\n                </div>\r\n            </div>\r\n            <div style=\"width: 100%;\" style=\"margin-top: 1rem\">\r\n                <h4 class=\"card-header card-success\">\r\n                    Détail des transaction des gérant\r\n                </h4>\r\n                <div>\r\n                    <table width=\"100%\" class=\"table table-responsive table-bordered table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>Service</th>\r\n                            <th>Total Entrée</th>\r\n                            <th>Total Sortie</th>\r\n                            <th>Total commissions</th>\r\n                            <th>Option</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let bilan of bilantouslescommissionsbyGerant; let i = index\">\r\n                            <td>{{bilan.service}}</td>\r\n                            <td>{{tocurrency(bilan.cashin)}}</td>\r\n                            <td>{{tocurrency(bilan.cashout)}}</td>\r\n                            <td>{{tocurrency(bilan.commission)}}</td>\r\n                            <td><span style=\"cursor: pointer; color: blue; text-decoration: underline dotted blue; text-align: center\" (click)=\"showModalVoirDetailtouslescommissionsbyGerant(contentVoirDetailTransact, i)\">Voir détail</span></td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <button  type=\"button\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/superviseur']\">Retour à l'accueil</button> <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"menuHeadClick(1)\">Retour à la liste des points</button>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('journee')\">La journée</label>&nbsp;\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('semaine')\">La semaine</label>&nbsp;\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('mois')\">Le mois</label>\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('annee')\">L'année</label>\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('tout')\">Tout</label>\r\n                        <h6><i class=\"fa fa-pie-chart\"></i>Performances des points par lot {{ typeperformancePPV }}.</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas height=\"150px\" baseChart\r\n                            [labels]=\"doughnutChartLabelsPPV\"\r\n                            [datasets]=\"datasetsPPV\"\r\n                            [colors]=\"colorsEmptyObject\"\r\n                            [chartType]=\"'doughnut'\"\r\n                            (chartClick)=\"chartClickedPPV($event)\"\r\n                    ></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\" *ngIf=\"performancesadminpdv\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Détail performance par {{typedateperformancesadminpdv}}/{{lotperformancesadminpdv}}.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-responsive table-sm\" [mfData]=\"performancesadminpdv | dataFilterSuivipdvperformanceparsup: filterQueryPPV\" #mfppv=\"mfDataTable\"\r\n                           [mfRowsOnPage]=\"rowsOnPagePPV\" [(mfSortBy)]=\"sortByPPV\" [(mfSortOrder)]=\"sortOrderPPV\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th><mfDefaultSorter by=\"name_adminpdv\">Superviseur</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"nbreoperation\">No Opéra</mfDefaultSorter></th>\r\n                            <th>Option</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th colspan=\"4\"><label class=\"label-control\">Recherche: <input class=\"form-control\" [(ngModel)]=\"filterQueryPPV\"/></label></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let admin of mfppv.data; let i = index\">\r\n                            <td>{{ i + 1  }}</td>\r\n                            <td>{{admin.name_adminpdv}}</td>\r\n                            <td>{{admin.telephone}}</td>\r\n                            <td>{{admin.nbreoperation}}</td>\r\n                            <td><button class=\"btn btn-sm btn-warning\" (click)=\"detailperformancesadminclasserbydateandlot(admin,contentSuiviPointsperformanceByLot)\">Détail</button></td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"5\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #contentVoirTousLesDepots let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Nombre de dépot: <strong>{{affichelesdepots.jours.length}}</strong></h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Date dépot</th>\r\n                    <th style=\"text-align: right\">Montant dépot</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of affichelesdepots.jours; let i = index \" style=\"text-align: center\">\r\n                    <th>{{i+1}}</th>\r\n                    <th>{{item}}</th>\r\n                    <th style=\"text-align: right\">{{tocurrency(affichelesdepots.montant[i])}}</th>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentVoirDetailTransact let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Detail transaction: <strong>{{touslescommissionsbyGerantbyservice.length}}</strong></h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Date opération</th>\r\n                    <th>Service</th>\r\n                    <th>Produit</th>\r\n                    <th>Montant</th>\r\n                    <th>Commission</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of touslescommissionsbyGerantbyservice; let i = index \" style=\"text-align: center\">\r\n                    <th>{{i+1}}</th>\r\n                    <th>{{item.dateop}}</th>\r\n                    <th>{{item.service}}</th>\r\n                    <th>{{item.produit}}</th>\r\n                    <th style=\"text-align: right\">{{tocurrency(item.montant)}}</th>\r\n                    <th style=\"text-align: right\">{{tocurrency(item.commission)}}</th>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentSuiviPointsperformanceByLot let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" *ngIf=\"performancesadminpdvbyadmin\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Détail par caissier</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"panel panel-default\">\r\n                        <table class=\"table table-responsive table-sm\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Date opération</th>\r\n                                <th>Caissier</th>\r\n                                <th>Telephone</th>\r\n                                <th>Operateur</th>\r\n                                <th>Traitement</th>\r\n                                <th>Montant</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let caissier of performancesadminpdvbyadmin; let i = index \">\r\n                                <td>{{i + 1}}</td>\r\n                                <th>{{caissier.dateoperation}}</th>\r\n                                <th>{{caissier.name_caissier}}</th>\r\n                                <th>{{caissier.telephone}}</th>\r\n                                <td>{{caissier.operateur}}</td>\r\n                                <td>{{caissier.traitement}}</td>\r\n                                <td>{{caissier.montanttotal}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/suivionepoint/suivionepoint.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/suivionepoint/suivionepoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuivionepointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuivionepointComponent = (function () {
    function SuivionepointComponent(_apiPlatformService, modalService) {
        this._apiPlatformService = _apiPlatformService;
        this.modalService = modalService;
        this.loading_data = true;
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false };
        /************************************************************************************
         *********************************   PARTIE SUIVI LIST POINT   ****************************
         ***********************************************************************************/
        this.sortOrderpointsbycc = "desc";
        this.sortBypointsbycc = "date_ajout";
        this.rowsOnPage = 12;
        this.categorie = 'Tous';
        this.listepointsbycc = [];
        this.gardeListepointsbycc = [];
        this.montanttotaldepot = 0;
        this.touslesdepots = [];
        this.affichelesdepots = { jours: [], montant: [] };
        this.touslesgerants = [];
        //************************DEPOT DIAGRAM*************************
        this.barChartOptions = { scaleShowVerticalLines: false, responsive: true };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [];
        this.touslescommissions = [];
        this.touslesjours = [];
        this.touslescommissionsbyGerant = [];
        this.bilantouslescommissionsbyGerant = [];
        this.touslescommissionsbyGerantbyservice = [];
        this.id_gerant_selectionne = -1;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartOptions = { responsive: true };
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        /**********************************************************************************
         ****************************     PARTIE Performances POINTS   ****************************
         ***********************************************************************************/
        this.doughnutChartLabelsPPV = ['Faible', 'Passable', 'Assez-bien', 'Bien'];
        this.doughnutChartDataPPV = [0, 0, 0, 0];
        this.colorsEmptyObject = [{}];
        this.typeperformancePPV = " dans la journée";
        this.checkPerformancePPV = { journee: true, semaine: false, mois: false, annee: false, tout: false };
        this.rowsOnPagePPV = 12;
        this.sortByPPV = "recette";
        this.sortOrderPPV = "desc";
    }
    SuivionepointComponent.prototype.ngOnInit = function () {
        this.getListPointsbysuperviseur();
    };
    SuivionepointComponent.prototype.ngOnDestroy = function () { };
    SuivionepointComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    SuivionepointComponent.prototype.showModalVoirTousLesDepots = function (content) {
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) { });
    };
    SuivionepointComponent.prototype.menuHeadClick = function (option) {
        this.loading_data = true;
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.getListPointsbysuperviseur();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.lineChartData = [];
            this.lineChartLabels = [];
            this.getOnePointSuivicc();
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.datasetsPPV = [{
                    data: this.doughnutChartDataPPV,
                    backgroundColor: ["red", "yellow", "orange", "green"]
                }];
            this.estcheckPerformancePPV('journee');
        }
    };
    SuivionepointComponent.prototype.getListPointsbysuperviseur = function () {
        var _this = this;
        this._apiPlatformService.getListPointsbysuperviseur()
            .subscribe(function (data) {
            _this.loading_data = false;
            if (data.errorCode) {
                _this.listepointsbycc = data.message.map(function (type) {
                    return {
                        date_ajout: type.dateCreation.date.split('.')[0],
                        date_last_depot: type.date_last_modif.date.split('.')[0],
                        nom_point: JSON.parse(type.infosup).nometps,
                        info_point: JSON.parse(type.infosup),
                        gerant: type.name_adminpdv,
                        email: type.login,
                        last_depot: type.last_depot,
                        tel: type.telephone,
                        adressecomplet: JSON.parse(type.adresse),
                        adresse: JSON.parse(type.adresse).zone + ", " + JSON.parse(type.adresse).souszone + ", " + JSON.parse(type.adresse).address,
                        idcommercial: type.idcommercial,
                        caution: type.caution,
                        cautiondebase: type.cautiondebase,
                        id_point: type.id_point,
                        categorie: (type.cautiondebase == 0) ? 'pas' : ((100 * type.caution) / type.cautiondebase) < 25 ? 'faible' : ((100 * type.caution) / type.cautiondebase) >= 25 && ((100 * type.caution) / type.cautiondebase) <= 50 ? 'passable' : 'bien',
                    };
                });
                _this.gardeListepointsbycc = _this.listepointsbycc;
            }
            console.log(_this.listepointsbycc);
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    SuivionepointComponent.prototype.getCategorie = function (categorie) {
        console.log(categorie);
        if (categorie == 'Tous') {
            this.categorie = 'Tous';
            this.listepointsbycc = this.gardeListepointsbycc;
        }
        if (categorie == 'Pas de depot') {
            this.categorie = 'Pas de depot';
            this.listepointsbycc = this.gardeListepointsbycc.filter(function (type) { return type.categorie == 'pas'; });
        }
        if (categorie == 'Faible') {
            this.categorie = 'Faible';
            this.listepointsbycc = this.gardeListepointsbycc.filter(function (type) { return type.categorie == 'faible'; });
        }
        if (categorie == 'Passable') {
            this.categorie = 'Passable';
            this.listepointsbycc = this.gardeListepointsbycc.filter(function (type) { return type.categorie == 'passable'; });
        }
        if (categorie == 'Bien') {
            this.categorie = 'Bien';
            this.listepointsbycc = this.gardeListepointsbycc.filter(function (type) { return type.categorie == 'bien'; });
        }
    };
    SuivionepointComponent.prototype.getOnePointSuivicc = function () {
        var _this = this;
        this._apiPlatformService.getOnePointSuivicc(this.pointcc)
            .subscribe(function (data) {
            _this.id_gerant_selectionne = -1;
            if (data.errorCode) {
                _this.datapointrecup = data.message;
                _this.suivionepointSelectionintervalledateinit = data.dateinitial;
                _this.suivionepointSelectionintervalledatefinal = data.dateifinale;
                _this.datapointrecup.infopoint.depots.forEach(function (type) { _this.montanttotaldepot += Number(JSON.parse(type.infosup).montant); });
                _this.suivionepointSelectionDepot();
                _this.touslesgerants = _this.datapointrecup.infopoint.gerants.map(function (type) { return { id_gerant: type.id_gerant, nom_gerant: type.nom_gerant, telephone: type.telephone, last_connection: type.last_connection.date.split('.')[0], }; });
                _this.touslescommissions = _this.datapointrecup.infopoint.commissions.map(function (type) {
                    return {
                        id_gerant: type.idUser,
                        dateop: type.dateoperation.date.split('.')[0],
                        dateop_jour: type.dateoperation.date.split('.')[0].split(' ')[0],
                        montant: type.montant,
                        commission: type.commissionpdv,
                        service: type.nomservice,
                        produit: type.libelleoperation,
                    };
                });
            }
        }, function (error) { return alert(error); }, function () {
            _this.suivionepointSelectionGerant(-1);
        });
    };
    SuivionepointComponent.prototype.suivrepoint = function (pdv) {
        this.pointcc = pdv;
        this.menuHeadClick(2);
    };
    SuivionepointComponent.prototype.suivionepointSelectionDepot = function () {
        var _this = this;
        this.touslesdepots = this.datapointrecup.infopoint.depots.map(function (type) {
            return {
                date_depot: type.daterenflu.date.split('.')[0],
                date_depot_jour: type.daterenflu.date.split('.')[0].split(' ')[0],
                montant_depot: JSON.parse(type.infosup).montant,
            };
        });
        console.log(this.touslesdepots);
        var depotjours = this.touslesdepots.map(function (type) { return type.date_depot_jour; });
        depotjours.sort();
        console.log(depotjours);
        var tabjours = [];
        var jour = depotjours[0];
        tabjours.push(jour);
        depotjours.forEach(function (type) {
            if (type != jour) {
                tabjours.push(type);
                jour = type;
            }
        });
        var tabjoursmontant = [];
        tabjours.forEach(function (date) {
            var montant = 0;
            _this.touslesdepots.forEach(function (type) { if (type.date_depot_jour == date) {
                montant += Number(type.montant_depot);
            } });
            tabjoursmontant.push(montant);
        });
        this.affichelesdepots.jours = tabjours;
        this.affichelesdepots.montant = tabjoursmontant;
        this.barChartLabels = tabjours;
        if (this.chart2 !== undefined) {
            this.chart2.chart.config.data.labels = this.barChartLabels;
        }
        this.barChartData = [{ data: tabjoursmontant, label: 'Dépots' }];
    };
    SuivionepointComponent.prototype.suivionepointIntervalle = function () {
        var _this = this;
        this.touslescommissions = [];
        this.loading_data = true;
        this._apiPlatformService.getDetailOnePointSuivicc({ id_point: this.pointcc.id_point, intervalle: this.suivionepointSelectionintervalledateinit + " " + this.suivionepointSelectionintervalledatefinal })
            .subscribe(function (data) {
            _this.id_gerant_selectionne = -1;
            if (data.errorCode) {
                _this.touslescommissions = data.message.map(function (type) {
                    return {
                        id_gerant: type.idUser,
                        dateop: type.dateoperation.date.split('.')[0],
                        dateop_jour: type.dateoperation.date.split('.')[0].split(' ')[0],
                        montant: type.montant,
                        commission: type.commissionpdv,
                        service: type.nomservice,
                        produit: type.libelleoperation,
                    };
                });
            }
        }, function (error) { return alert(error); }, function () {
            _this.suivionepointSelectionGerant(-1);
            _this.loading_data = false;
        });
    };
    SuivionepointComponent.prototype.suivionepointSelectionGerant = function (indice) {
        var _this = this;
        this.loading_data = false;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.touslesjours = [];
        this.id_gerant_selectionne = indice;
        if (this.id_gerant_selectionne == -1) {
            this.touslescommissionsbyGerant = this.touslescommissions;
        }
        else {
            this.touslescommissionsbyGerant = this.touslescommissions.filter(function (opt) { return opt.id_gerant == _this.id_gerant_selectionne; });
        }
        this.suivionepointgraphe();
        this.suivionepointdetail();
    };
    SuivionepointComponent.prototype.suivionepointgraphe = function () {
        var _this = this;
        this.touslesjours = this.touslescommissions.map(function (type) { return type.dateop_jour; });
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
        var nbrebyjourom = [];
        var nbrebyjourtnt = [];
        var nbrebyjourpost = [];
        var nbrebyjourwizall = [];
        tabjours.forEach(function (type) {
            var nbrebyjouromSom = 0;
            var nbrebyjourtntSom = 0;
            var nbrebyjourpostSom = 0;
            var nbrebyjourwizallSom = 0;
            _this.touslescommissionsbyGerant.forEach(function (opt) { if (opt.dateop_jour == type && opt.service == 'orangemoney') {
                nbrebyjouromSom += Number(opt.montant);
            } });
            nbrebyjourom.push(nbrebyjouromSom);
            _this.touslescommissionsbyGerant.forEach(function (opt) { if (opt.dateop_jour == type && opt.service == 'TNT') {
                nbrebyjourtntSom += Number(opt.montant);
            } });
            nbrebyjourtnt.push(nbrebyjourtntSom);
            _this.touslescommissionsbyGerant.forEach(function (opt) { if (opt.dateop_jour == type && opt.service == 'POSTCASH') {
                nbrebyjourpostSom += Number(opt.montant);
            } });
            nbrebyjourpost.push(nbrebyjourpostSom);
            _this.touslescommissionsbyGerant.forEach(function (opt) { if (opt.dateop_jour == type && opt.service == 'WIZALL') {
                nbrebyjourwizallSom += Number(opt.montant);
            } });
            nbrebyjourwizall.push(nbrebyjourwizallSom);
        });
        this.lineChartData = [
            { data: nbrebyjourom, label: 'OM' },
            { data: nbrebyjourtnt, label: 'TNT' },
            { data: nbrebyjourpost, label: 'POSTECASH' },
            { data: nbrebyjourwizall, label: 'WIZALL' },
        ];
    };
    SuivionepointComponent.prototype.suivionepointdetail = function () {
        var _this = this;
        this.bilantouslescommissionsbyGerant = [
            { service: 'tnt', cashin: 0, cashout: 0, commission: 0, liste: [] },
            { service: 'postcash', cashin: 0, cashout: 0, commission: 0, liste: [] },
            { service: 'wizall', cashin: 0, cashout: 0, commission: 0, liste: [] },
            { service: 'orangemoney', cashin: 0, cashout: 0, commission: 0, liste: [] },
            { service: 'Total', cashin: 0, cashout: 0, commission: 0, liste: [] },
        ];
        this.touslescommissionsbyGerant.forEach(function (type) {
            _this.bilantouslescommissionsbyGerant[4].liste.push(type);
            _this.bilantouslescommissionsbyGerant[4].commission += type.commission;
            if (type.service == 'TNT') {
                _this.bilantouslescommissionsbyGerant[0].liste.push(type);
                _this.bilantouslescommissionsbyGerant[0].cashin += Number(type.montant);
                _this.bilantouslescommissionsbyGerant[0].commission += type.commission;
                _this.bilantouslescommissionsbyGerant[4].cashin += Number(type.montant);
            }
            if (type.service == 'POSTCASH') {
                _this.bilantouslescommissionsbyGerant[1].liste.push(type);
                _this.bilantouslescommissionsbyGerant[1].cashin += Number(type.montant);
                _this.bilantouslescommissionsbyGerant[1].commission += type.commission;
                _this.bilantouslescommissionsbyGerant[4].cashin += Number(type.montant);
            }
            if (type.service == 'WIZALL') {
                _this.bilantouslescommissionsbyGerant[2].liste.push(type);
                _this.bilantouslescommissionsbyGerant[2].cashin += Number(type.montant);
                _this.bilantouslescommissionsbyGerant[2].commission += type.commission;
                _this.bilantouslescommissionsbyGerant[4].cashin += Number(type.montant);
            }
            if (type.service == 'orangemoney') {
                if (type.produit == 'depot') {
                    _this.bilantouslescommissionsbyGerant[3].cashin += Number(type.montant);
                    _this.bilantouslescommissionsbyGerant[4].cashin += Number(type.montant);
                }
                else {
                    _this.bilantouslescommissionsbyGerant[3].cashout += Number(type.montant);
                    _this.bilantouslescommissionsbyGerant[4].cashout += Number(type.montant);
                }
                _this.bilantouslescommissionsbyGerant[3].liste.push(type);
                _this.bilantouslescommissionsbyGerant[3].commission += type.commission;
            }
        });
        console.log(this.bilantouslescommissionsbyGerant);
    };
    SuivionepointComponent.prototype.showModalVoirDetailtouslescommissionsbyGerant = function (content, indice) {
        this.touslescommissionsbyGerantbyservice = this.bilantouslescommissionsbyGerant[indice].liste;
        this.modalService.open(content, { size: "lg" }).result.then(function (result) {
        }, function (reason) { });
    };
    SuivionepointComponent.prototype.chartClickedPPV = function (e) {
        if (e.active[0]) {
            this.loading_data = true;
            this.estdetailPerformancePPV(e.active[0]._model.label);
        }
    };
    SuivionepointComponent.prototype.showModalPPV = function (content) {
        this.modalService.open(content, { size: "lg" }).result.then(function (result) { }, function (reason) { });
    };
    SuivionepointComponent.prototype.performancessupperviseurclasserbydate = function (type) {
        var _this = this;
        this.performancesadminpdv = undefined;
        this._apiPlatformService.getperformancessupperviseurclasserbydate(type)
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.datasetsPPV = [{
                        data: data.message.nbrepoints,
                        backgroundColor: ["red", "yellow", "orange", "green"]
                    }];
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
        });
    };
    SuivionepointComponent.prototype.estcheckPerformancePPV = function (type) {
        this.loading_data = true;
        if (type == 'journee') {
            this.checkPerformancePPV.journee = true;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans la journée";
        }
        else if (type == 'semaine') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = true;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans la semaine";
        }
        else if (type == 'mois') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = true;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans le mois";
        }
        else if (type == 'annee') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = true;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans l'année";
        }
        else if (type == 'tout') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = true;
            this.typeperformancePPV = "dans l'ensemble";
        }
        this.typedateperformancesadminpdv = type;
        this.performancessupperviseurclasserbydate(type);
    };
    SuivionepointComponent.prototype.estdetailPerformancePPV = function (lot) {
        var _this = this;
        var type = "";
        if (this.checkPerformancePPV.journee) {
            type = "journee";
        }
        if (this.checkPerformancePPV.semaine) {
            type = "semaine";
        }
        if (this.checkPerformancePPV.mois) {
            type = "mois";
        }
        if (this.checkPerformancePPV.annee) {
            type = "annee";
        }
        if (this.checkPerformancePPV.tout) {
            type = "tout";
        }
        //console.log(type+' '+lot);
        this.typedateperformancesadminpdv = type;
        this.lotperformancesadminpdv = lot;
        this._apiPlatformService.getperformancessupperviseurclasserbydatebylot({ lot: lot, typedate: type })
            .subscribe(function (data) {
            //console.log(data)
            if (data.errorCode) {
                _this.performancesadminpdv = data.message;
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
        });
    };
    SuivionepointComponent.prototype.detailperformancesadminclasserbydateandlot = function (adminpdv, content) {
        var _this = this;
        this.performancesadminpdvbyadmin = undefined;
        this._apiPlatformService.getperformancessupperviseurclasserbydatebySup({ idadminpdv: adminpdv.dependsOn, typedate: this.typedateperformancesadminpdv })
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.performancesadminpdvbyadmin = data.message.map(function (op) {
                    return {
                        dateoperation: op.dateoperation.date.split('.')[0],
                        name_caissier: op.name_caissier,
                        montanttotal: op.montanttotal,
                        operateur: op.operateur,
                        telephone: op.telephone,
                        traitement: op.traitement,
                    };
                });
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () {
            console.log('getperformancessupperviseurclasserbydatebySup');
        });
        this.showModalPPV(content);
    };
    return SuivionepointComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart2"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], SuivionepointComponent.prototype, "chart2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart1"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _b || Object)
], SuivionepointComponent.prototype, "chart1", void 0);
SuivionepointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-suivionepoint',
        template: __webpack_require__("../../../../../src/app/layout/suivionepoint/suivionepoint.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/suivionepoint/suivionepoint.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__["a" /* ApiPlatformService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object])
], SuivionepointComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=suivionepoint.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/data-filter-list-com.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterListeComPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterListeComPipe = (function () {
    function DataFilterListeComPipe() {
    }
    DataFilterListeComPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1 || row.email.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterListeComPipe;
}());
DataFilterListeComPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterListeCom"
    })
], DataFilterListeComPipe);

//# sourceMappingURL=data-filter-list-com.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/data-filter-list-portefeuille.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterListeCliPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterListeCliPipe = (function () {
    function DataFilterListeCliPipe() {
    }
    DataFilterListeCliPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.tel.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.commercial.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterListeCliPipe;
}());
DataFilterListeCliPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterListePostefeuille"
    })
], DataFilterListeCliPipe);

//# sourceMappingURL=data-filter-list-portefeuille.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/data-filter-point-sentool-cc.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPointSentoolByCCPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterPointSentoolByCCPipe = (function () {
    function DataFilterPointSentoolByCCPipe() {
    }
    DataFilterPointSentoolByCCPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_boutique.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_commercial.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterPointSentoolByCCPipe;
}());
DataFilterPointSentoolByCCPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterSentoolByCC"
    })
], DataFilterPointSentoolByCCPipe);

//# sourceMappingURL=data-filter-point-sentool-cc.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/data-filter-suiviassigncom.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterSuiviAssignComPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterSuiviAssignComPipe = (function () {
    function DataFilterSuiviAssignComPipe() {
    }
    DataFilterSuiviAssignComPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.libellepoint.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterSuiviAssignComPipe;
}());
DataFilterSuiviAssignComPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterSuiviAssignCom"
    })
], DataFilterSuiviAssignComPipe);

//# sourceMappingURL=data-filter-suiviassigncom.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/data-filter-suivipdvetatdepositparsup.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterSuivipdvetatdepositparsupPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterSuivipdvetatdepositparsupPipe = (function () {
    function DataFilterSuivipdvetatdepositparsupPipe() {
    }
    DataFilterSuivipdvetatdepositparsupPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.name_adminpdv.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.date_last_modif.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1 || row.cautiondebase.toLocaleString().indexOf(query.toLowerCase()) > -1 || row.caution.toLocaleString().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterSuivipdvetatdepositparsupPipe;
}());
DataFilterSuivipdvetatdepositparsupPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterSuivipdvetatdepositparsup"
    })
], DataFilterSuivipdvetatdepositparsupPipe);

//# sourceMappingURL=data-filter-suivipdvetatdepositparsup.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/superviseur/data-filter-suivipdvperformanceparsup.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterSuivipdvperformanceparsupPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterSuivipdvperformanceparsupPipe = (function () {
    function DataFilterSuivipdvperformanceparsupPipe() {
    }
    DataFilterSuivipdvperformanceparsupPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.name_adminpdv.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1 || row.nbreoperation.toLocaleString().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterSuivipdvperformanceparsupPipe;
}());
DataFilterSuivipdvperformanceparsupPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterSuivipdvperformanceparsup"
    })
], DataFilterSuivipdvperformanceparsupPipe);

//# sourceMappingURL=data-filter-suivipdvperformanceparsup.pipe.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suivionepoint_suivionepoint_component__ = __webpack_require__("../../../../../src/app/layout/suivionepoint/suivionepoint.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperviseurRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__superviseur_component__["a" /* SuperviseurComponent */] },
    { path: 'suivionepoint', component: __WEBPACK_IMPORTED_MODULE_3__suivionepoint_suivionepoint_component__["a" /* SuivionepointComponent */] }
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

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<audio id=\"audio\" *ngIf=\"audio\"  src=\"assets/son.mp3\"  autoplay=\"autoplay\"></audio>\r\n<div class=\"row\" style=\"padding-top: 1rem ; margin-bottom: 3rem\" >\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Assignation</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Suivi assignation</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead7, 'btn-success': menuHead.menuHead7}\" (click)=\"menuHeadClick(7)\" style=\"margin-bottom: 1rem;\">A déployé</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\" style=\"margin-bottom: 1rem;\">New Réclamations</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': true}\" style=\"margin-bottom: 1rem;\" [routerLink]=\"['/superviseur', 'suivionepoint']\">Suivi Sentool</button>\r\n        <!--<button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead5, 'btn-success': menuHead.menuHead5}\" (click)=\"menuHeadClick(5)\" style=\"margin-bottom: 1rem;\">Suivi Sentool</button>-->\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead6, 'btn-success': menuHead.menuHead6}\" (click)=\"menuHeadClick(6)\" style=\"margin-bottom: 1rem;\">Mes commerciaux</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead8, 'btn-success': menuHead.menuHead8}\" (click)=\"menuHeadClick(8)\" style=\"margin-bottom: 1rem;\">Portefeuille</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead9, 'btn-success': menuHead.menuHead9}\" (click)=\"menuHeadClick(9)\" style=\"margin-bottom: 1rem;\">Deposit</button>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\">\r\n    <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-sm-2\">\r\n            <label>Région</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreRegion\"  (change)=\"selectRegion()\">\r\n                <option>--Choix région--</option>\r\n                <option  *ngFor=\"let region of regions\">{{region}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label>Zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreZone\" (change)=\"selectZone()\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zones\">{{zone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Sous zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreSousZone\" (change)=\"selectSouszone()\">\r\n                <option>&#45;&#45;Choix sous zone&#45;&#45;</option>\r\n                <option  *ngFor=\"let souszone of sousZonesOfCurrentZone()\">{{souszone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Commercial</label>\r\n            <select name=\"singleSelectcommercial\"  id=\"singleSelectcommercial\" class=\"form-control input-sm\" [(ngModel)]=\"choixcommercial\">\r\n                <option [attr.value]=\"'-1'\">--Choix commercial--</option>\r\n                <option  *ngFor=\"let commercial of commercials\" [attr.value]=\"commercial.id\">{{commercial.prenom}} {{commercial.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label >Objectif</label>\r\n            <input type=\"number\" class=\"form-control input-sm\"  [(ngModel)]=\"objetifcommercial\" name=\"objetifcommercial\" />\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"isEnregistrerAssignation\" class=\"row col-sm-12 text-center center-block\">\r\n        <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n            <strong>Success!</strong> Assignation avec success.\r\n        </ngb-alert>\r\n    </div>\r\n    <div class=\"row col-sm-12 text-center center-block\" style=\"padding-bottom: 1rem\">\r\n        <button type=\"button\"\r\n                class=\"btn btn-warning  input-sm\"\r\n                (click)=\"assignercommercial()\"\r\n                style=\"margin-left: auto; margin-right: auto;\"\r\n                [disabled]=\"\r\n                    filtreZone == '--Choix zone--' ||\r\n                    filtreRegion == '--Choix région--' ||\r\n                    filtreSousZone == '--Choix sous zone--' ||\r\n                    choixcommercial == '--Choix commercial--' ||\r\n                    objetifcommercial <= 0 ||\r\n                    selectedOptions.length <= 0\r\n                \">Assigner</button>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"optionassignations\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"note\">Note</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"commentaire\">Commentaire</mfDefaultSorter></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>\r\n                            <input type=\"checkbox\" name=\"items\" value=\"{{item.value}}\"\r\n                                   [(ngModel)]=\"item.checked\" (change)=\"updateCheckedOptions()\"\r\n                            />\r\n                        </td>\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                        <td><textarea  class=\"form-control\" type=\"text\" name=\"commentaire-{{i}}\" placeholder=\"Notification\" [(ngModel)]=\"item.commentaire\">{{item.commentaire}}</textarea></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"datasuivi | dataFilterSuiviAssignCom: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"note\">Note commercial</mfDefaultSorter></th>\r\n                        <th>Consultation</th>\r\n                        <th>Qualification</th>\r\n                        <th colspan=\"2\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"5\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQuery\"/></th>\r\n                        <th>Total : {{datasuivi.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showModalDetail(contentSuivisuperviseurDetait,item)\">Détail Prospect</button></td>\r\n                        <td>\r\n                            <select class=\"form-control input-sm\" [(ngModel)]=\"item.qualification\" (change)=\"choixqualification(item)\">\r\n                                <option>--Choisir une action--</option>\r\n                                <option>Valider</option>\r\n                                <option>A relancer</option>\r\n                                <option>Abandonner</option>\r\n                            </select>\r\n                        </td>\r\n                        <td *ngIf=\"item.ischoixvalide\">\r\n                            <select style=\"width:8rem;\" class=\"form-control input-sm\" [(ngModel)]=\"item.choixsouscrit\"  (change)=\"choixsouscription(item)\">\r\n                                <option>SenT-Wafa</option>\r\n                                <option>SenTool</option>\r\n                                <option>Wafa</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"validersuivisuperviseur(item)\"\r\n                                [disabled]=\"item.qualification == '--Choisir une action--'\">valider suivi</button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\" [mfData]=\"listereclamationsnonresolu\" #mfreclamationsnonresolu=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageReclamationsnonresolu\" [(mfSortBy)]=\"sortByReclamationsnonresolu\" [(mfSortOrder)]=\"sortOrderReclamationsnonresolu\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_reclamation\">Date réclamation</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"name_caissier\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nomservice\">Type service</mfDefaultSorter></th>\r\n                        <th colspan=\"2\" style=\"text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"5\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryReclamationsnonresolu\"/></th>\r\n                        <th>Total : {{listereclamationsnonresolu.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfreclamationsnonresolu.data; let i = index \">\r\n                        <td>{{item.date_reclamation}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.name_caissier}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.nomservice}}</td>\r\n                        <td style=\"margin: 0 auto; text-align: center\">\r\n                            <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" ngbPopover=\"{{item.message}}\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Sujet: {{item.sujet}}\">Voir réclamation</button>\r\n                        </td>\r\n                        <td><button class=\"btn btn-success btn-sm\" (click)=\"validresolutionreclamation(item)\">Résoudre</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead4\" >\r\n    <app-suivionepoint></app-suivionepoint>\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listepointsbycc  | dataFilterListePostefeuille: filterQueryCli\" #mfCliTraiterPoint=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortByCli\" [(mfSortOrder)]=\"sortOrderCli\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"tel\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"commercial\">Commercial</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryCli\"/></th>\r\n                        <th>Total : {{listepointsbycc.length}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"8\">\r\n                            <div style=\"color: black; text-align: center;\">\r\n                                <span style=\"background-color: blue;\"> Pas encore </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: orange;\"> Sentool </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: yellow;\"> Wafacash </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: green;\"> Sentool et Wafacash </span>\r\n                                <br/>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let p of mfCliTraiterPoint.data; let i = index\" >\r\n                        <td>{{p.date_ajout}}</td>\r\n                        <td>{{p.nom_point}}</td>\r\n                        <td>{{p.gerant}}</td>\r\n                        <td>{{p.tel}}</td>\r\n                        <td>{{p.adresse}}</td>\r\n                        <td>{{p.commercial}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr class=\"text-center center-block\">\r\n                            <td colspan=\"6\" class=\"text-center center-block\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead5\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('journee')\">La journée</label>&nbsp;\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('semaine')\">La semaine</label>&nbsp;\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('mois')\">Le mois</label>\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('annee')\">L'année</label>\r\n                        <label class=\"btn btn-danger btn-sm\" (click)=\"estcheckPerformancePPV('tout')\">Tout</label>\r\n                        <h6><i class=\"fa fa-pie-chart\"></i>Performances des points par lot {{ typeperformancePPV }}.</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas height=\"150px\" baseChart\r\n                            [labels]=\"doughnutChartLabelsPPV\"\r\n                            [datasets]=\"datasetsPPV\"\r\n                            [colors]=\"colorsEmptyObject\"\r\n                            [chartType]=\"'doughnut'\"\r\n                            (chartClick)=\"chartClickedPPV($event)\"\r\n                    ></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\" *ngIf=\"performancesadminpdv\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Détail performance par {{typedateperformancesadminpdv}}/{{lotperformancesadminpdv}}.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-responsive table-sm\" [mfData]=\"performancesadminpdv | dataFilterSuivipdvperformanceparsup: filterQueryPPV\" #mfppv=\"mfDataTable\"\r\n                           [mfRowsOnPage]=\"rowsOnPagePPV\" [(mfSortBy)]=\"sortByPPV\" [(mfSortOrder)]=\"sortOrderPPV\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th><mfDefaultSorter by=\"name_adminpdv\">Superviseur</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"nbreoperation\">No Opéra</mfDefaultSorter></th>\r\n                            <th>Option</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th colspan=\"4\"><label class=\"label-control\">Recherche: <input class=\"form-control\" [(ngModel)]=\"filterQueryPPV\"/></label></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let admin of mfppv.data; let i = index\">\r\n                            <td>{{ i + 1  }}</td>\r\n                            <td>{{admin.name_adminpdv}}</td>\r\n                            <td>{{admin.telephone}}</td>\r\n                            <td>{{admin.nbreoperation}}</td>\r\n                            <td><button class=\"btn btn-sm btn-warning\" (click)=\"detailperformancesadminclasserbydateandlot(admin,contentSuiviPointsperformanceByLot)\">Détail</button></td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"5\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"margin-top: 2rem\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5><i class=\"fa fa-pie-chart\"></i>Etat déposit des points par lot.</h5>\r\n                        <div>\r\n                            <span style=\"background-color: red; color: black; text-align: center\"> déposit &lsaquo; 25% </span>&nbsp;\r\n                            <span style=\"background-color: orange; color: black; text-align: center\"> 25% déposit 50% </span>&nbsp;\r\n                            <span style=\"background-color: green; color: black; text-align: center\"> déposit &rsaquo; 50% </span>\r\n                            <br/>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas height=\"150px\" baseChart\r\n                            [labels]=\"doughnutChartLabelsAP\"\r\n                            [datasets]=\"datasetsAP\"\r\n                            [colors]=\"colorsEmptyObject\"\r\n                            [chartType]=\"'doughnut'\"\r\n                            (chartClick)=\"chartClickedAP($event)\"\r\n                    ></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\" *ngIf=\"etatdepositlot\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Détail état déposit par Lot/{{lotetatdeposit}}.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-responsive table-sm\" [mfData]=\"etatdepositlot | dataFilterSuivipdvetatdepositparsup: filterQueryAP\" #mfppv=\"mfDataTable\"\r\n                           [mfRowsOnPage]=\"rowsOnPageAP\" [(mfSortBy)]=\"sortByAP\" [(mfSortOrder)]=\"sortOrderAP\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th><mfDefaultSorter by=\"name_adminpdv\">Superviseur</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"cautiondebase\">Dépot initial</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"date_last_modif\">Date dépot</mfDefaultSorter></th>\r\n                            <th><mfDefaultSorter by=\"caution\">Dépot actuel</mfDefaultSorter></th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th colspan=\"4\"><label class=\"label-control\">Recherche: <input class=\"form-control\" [(ngModel)]=\"filterQueryAP\"/></label></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let admin of mfppv.data; let i = index\">\r\n                            <td>{{ i + 1  }}</td>\r\n                            <td>{{admin.name_adminpdv}}</td>\r\n                            <td style=\"text-align: center\">{{admin.telephone}}</td>\r\n                            <td style=\"text-align: right;\">{{tocurrency(admin.cautiondebase)}}</td>\r\n                            <td style=\"text-align: center;\">{{admin.date_last_modif}}</td>\r\n                            <td style=\"text-align: right;\">{{tocurrency(admin.caution)}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"5\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead6\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\" [mfData]=\"commercials | dataFilterListeCom: filterQueryCom\" #mfCom=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortByCom\" [(mfSortOrder)]=\"sortOrderCom\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"fullname\">Commercial</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"email\">Email</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"2\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryCom\"/></th>\r\n                        <th>Total : {{commercials.length}}</th>\r\n                        <th style=\"text-align: right\"><button type=\"button\"  (click)=\"showModalCommercial(contentAjoutCommercial,false)\" class=\"btn btn-warning\"> ajouter commercial </button></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfCom.data; let i = index \">\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.email}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"3\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead7\">\r\n\t<table class=\"table table-striped table-codensed table-responsive table-sm\">\r\n                    <tr>\r\n\t\t\t\t\t\t<th>#</th>\r\n                        <th>Nom Point</th>\r\n                        <th>Proprietaire</th>\r\n                        <th>Téléphone</th>\r\n                        <th>Adresse</th>\r\n                        <th>commercial</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n\t               <tr *ngFor=\"let p of prospects; let i=index\">\r\n\t\t\t\t\t   <th>{{i+1}}</th>\r\n\t                   <td>{{p.nom_point}}</td>\r\n                       <td>{{p.p_prenom}} {{p.p_nom}}</td>\r\n\t                   <td>{{p.telephone}}</td>\r\n\t                   <td>{{p.adresse_point.adressepoint}}, {{p.adresse_point.souszonepoint}}, {{p.adresse_point.zonepoint}}, {{p.adresse_point.regionpoint}}</td>\r\n\t                   <td>{{p.commercial}}</td>\r\n\t                   <td><input type=\"button\" (click)=\"rep1= false; modalAjout(contentnewclient,p)\" value=\"action\" class=\"btn btn-primary\" /></td>\r\n\t               </tr>\r\n\t</table>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead8\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"clients | dataFilterListePostefeuille: filterQueryCli\" #mfCli=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortByCli\" [(mfSortOrder)]=\"sortOrderCli\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"tel\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"commercial\">Commercial</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryCli\"/></th>\r\n                        <th>Total : {{clients.length}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"8\">\r\n                            <div style=\"color: black; text-align: center;\">\r\n                                <span style=\"background-color: blue;\"> Pas encore </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: orange;\"> Sentool </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: yellow;\"> Wafacash </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: green;\"> Sentool et Wafacash </span>\r\n                                <br/>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let p of mfCli.data; let i = index \"  [ngStyle]=\"{'color': 'black', 'background-color': (p.infosup.service_sentool==0 && p.infosup.service_wafacash==0)?'blue':(p.infosup.service_sentool==1 && p.infosup.service_wafacash==0)?'orange':(p.infosup.service_sentool==0 && p.infosup.service_wafacash==1)?'yellow':'green'}\">\r\n                        <td>{{p.date_ajout}}</td>\r\n                        <td>{{p.nom_point}}</td>\r\n                        <td>{{p.gerant}}</td>\r\n                        <td>{{p.tel}}</td>\r\n                        <td>{{p.adresse}}</td>\r\n                        <td>{{p.commercial}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"6\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead9\" >\r\n    <div class=\"row\" style=\"display: block; margin: 0 auto; text-align: center\" *ngIf=\"mescredits.length!=0\">\r\n        <span style=\"margin-left: 1rem; margin-right: 1rem; font-size:larger\">\r\n            <strong>Etat actuel caisse :</strong> {{ tocurrency(mescredits['0'].montant_total) }}FCFA.\r\n        </span>\r\n        <span style=\"margin-left: 1rem; margin-right: 1rem; font-size:larger\">\r\n            <strong>Dernier creditation :</strong> {{tocurrency(mescredits['0'].montant_acrredite)}}FCFA, <strong>le </strong> {{mescredits['0'].dateacrredit}}.\r\n        </span>\r\n        <span style=\"margin-left: 1rem; margin-right: 1rem; font-size:larger\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showModalVoirDetailCredit(contentVoirDetailCredit)\" title=\"Voir détail\">Voir détail</button>\r\n        </span>\r\n    </div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"errovalidation\" role=\"alert\" style=\"margin-bottom: 1rem; margin-top: 1rem\">\r\n        Caisse insuffisant pour ce positionnement\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top: 2rem\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\">\r\n                    <tr style=\"text-align: right\">\r\n                        <th>#</th>\r\n                        <th>Date demande</th>\r\n                        <th>Entreprise</th>\r\n                        <th>Superviseur</th>\r\n                        <th>Téléphone</th>\r\n                        <th>Adresse</th>\r\n                        <th>Montant depot</th>\r\n                        <th>Commercial envoyé</th>\r\n                        <th style=\"text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let p of listedepositsencours; let i=index\" [ngStyle]=\"{'color': 'black', 'background-color': (p.niveau_avancement==-4)?'red':(p.niveau_avancement==-3)?'orange':(p.niveau_avancement==-2)?'blue':(p.niveau_avancement==-1)?'pink':'green'}\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{p.datedemande}}</td>\r\n                        <td>{{p.infosup}}</td>\r\n                        <td>{{p.initiateur}}</td>\r\n                        <td>{{p.telephone}}</td>\r\n                        <td>{{p.adressecomplet}}</td>\r\n                        <td style=\"text-align: right;\">{{tocurrency(p.montantdemande)}}</td>\r\n                        <td style=\"width: 200px\">\r\n                            <span *ngIf=\"p.niveau_avancement==-4\">\r\n                                <select name=\"sselectcommercial-{{i}}\" id=\"sselectcommercial-{{i}}\" class=\"form-control input-sm\" [(ngModel)]=\"p.id_accepteur\" (change)=\"choicerecouvreur(p)\">\r\n                                    <option [attr.value]=\"-1\">--Choix un recouvreur--</option>\r\n                                    <option  *ngFor=\"let recouvreur of recouvreurs\" [attr.value]=\"recouvreur.id\">{{recouvreur.fullname}}</option>\r\n                                </select>\r\n                            </span>\r\n                            <span *ngIf=\"p.niveau_avancement!=-4\">\r\n                                {{p.accepteur}}\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"p.niveau_avancement==-4\">\r\n                    <button type=\"button\" name=\"valideraffectation-{{i}}\" id=\"valideraffectation-{{i}}\" class=\"btn btn-primary\" [disabled]=\"p.id_accepteur<1\" (click)=\"affecterComForDepot(p)\">envoyer</button>\r\n                </span>\r\n                            <span *ngIf=\"p.niveau_avancement==-3\">\r\n                    Attente confirmation\r\n                </span>\r\n                            <span *ngIf=\"p.niveau_avancement==-2\">\r\n                    En cours de recuperation\r\n                </span>\r\n                            <span *ngIf=\"p.niveau_avancement==-1\">\r\n                    <button type=\"button\" name=\"validerrecudepot-{{i}}\" id=\"validerrecudepot-{{i}}\" class=\"btn btn-primary\" (click)=\"errovalidation=false; validerComForDepotCC(p)\">valider depot</button>\r\n                </span>\r\n                            <span *ngIf=\"p.niveau_avancement==0\">\r\n                                Depot Effectué\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"8\" style=\"text-align: center; margin-top: 1rem\">\r\n                            <u *ngIf=\"listedepositsvalide.length!=0\" style=\"cursor: pointer\" (click)=\"showModalVoirplusdedemande(contentVoirplusdedemande)\" title=\"Voir plus de depot\">Voir dépots validé</u>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #contentnewclient let-c=\"close\" >\r\n\t<div class=\"modal-header\">\r\n\t\t<h3>Souscrire à SenTool</h3>\r\n\t</div>\r\n    <div class=\"modal-body\">\r\n      <form #for=\"ngForm\" name=\"form\" method=\"post\">\r\n          <div class=\"row\">\r\n              <div class=\"form-group col-sm-6\">\r\n                  <label for=\"entrepriseSouscritSentool\">Nom de l'entreprise</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"entrepriseSouscritSentool\" name=\"entrepriseSouscritSentool\" [(ngModel)]=\"clsentool.nometps\" placeholder=\"entrer le nom de l'entreprise\" required>\r\n              </div>\r\n              <div class=\"form-group col-sm-6\">\r\n                  <label for=\"boutiqueSouscritSentool\">Nom de la boutique en ligne</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"boutiqueSouscritSentool\" name=\"boutiqueSouscritSentool\" [(ngModel)]=\"clsentool.nomshop\" placeholder=\"entrer le nom de la boutique en ligne\"  required>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"form-group col-sm-6\">\r\n                  <label for=\"prenomSouscritSentool\">Prénom du client</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"prenomSouscritSentool\" name=\"prenomSouscritSentool\" [(ngModel)]=\"clsentool.prenom\" placeholder=\"entrer le prénom du client\"  required>\r\n              </div>\r\n              <div class=\"form-group col-sm-6\">\r\n                  <label for=\"nomSouscritSentool\">Nom du client</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"nomSouscritSentool\" name=\"nomSouscritSentool\" [(ngModel)]=\"clsentool.nom\" placeholder=\"entrer le nom du client\"  required>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"form-group col-sm-6\">\r\n                  <label for=\"emailSouscritSentool\">Email du client</label>\r\n                  <input type=\"email\" class=\"form-control\" id=\"emailSouscritSentool\" name=\"emailSouscritSentool\" [(ngModel)]=\"clsentool.email\" placeholder=\"entrer le login du compte\"  required>\r\n              </div>\r\n              <div class=\"form-group col-sm-6\">\r\n                  <label for=\"telSouscritSentool\">Téléphone du client</label>\r\n                  <input type=\"number\" class=\"form-control\" id=\"telSouscritSentool\" name=\"telSouscritSentool\" [(ngModel)]=\"clsentool.telephone\" placeholder=\"entrer le téléphone pour les accès\"  required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"!(regions.length==0)\">\r\n              <label for=\"regionSouscritSentool\" class=\"col-sm-3 col-form-label\">Région</label>\r\n              <div class=\"col-sm-9\">\r\n                  <select class=\"form-control input-sm\" id=\"regionSouscritSentool\" name=\"regionSouscritSentool\" [(ngModel)]=\"clsentool.adresse.region\" (change)=\"selectRegionSouscritSentool()\">\r\n                      <option selected>--Choix région--</option>\r\n                      <option *ngFor=\"let region of regions\">{{region.nom}}</option>\r\n                  </select>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"iszones && clsentool.adresse.region!='--Choix région--'\">\r\n              <label for=\"zneSouscritSentool\" class=\"col-sm-3 col-form-label\">Zones</label>\r\n              <div class=\"col-sm-9\">\r\n                  <select class=\"form-control input-sm\" id=\"zneSouscritSentool\" name=\"zneSouscritSentool\" [(ngModel)]=\"clsentool.adresse.zone\" (change)=\"selectZoneSouscritSentool()\">\r\n                      <option>--Choix zone--</option>\r\n                      <option  *ngFor=\"let zone of zones\">{{zone.nom}}</option>\r\n                  </select>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"issouszones && clsentool.adresse.zone!='--Choix zone--'\">\r\n              <label for=\"szoneSouscritSentool\" class=\"col-sm-3 col-form-label\">Sous zones</label>\r\n              <div class=\"col-sm-9\">\r\n                  <select class=\"form-control input-sm\" id=\"szoneSouscritSentool\" name=\"szoneSouscritSentool\" [(ngModel)]=\"clsentool.adresse.souszone\">\r\n                      <option>--Choix sous zone--</option>\r\n                      <option  *ngFor=\"let souszone of souszones\">{{souszone.nom}}</option>\r\n                  </select>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"issouszones && clsentool.adresse.souszone!='--Choix sous zone--'\">\r\n              <label for=\"adresseSouscritSentool\" class=\"col-sm-3 col-form-label\">Adresse exacte</label>\r\n              <div class=\"col-sm-9\">\r\n                  <textarea class=\"form-control\" id=\"adresseSouscritSentool\" name=\"adresseSouscritSentool\" [(ngModel)]=\"clsentool.adresse.address\" placeholder=\"Adresse exacte\" rows=\"3\"  required></textarea>\r\n              </div>\r\n          </div>\r\n          <div *ngIf=\"reponsesouscripdejaexit\" class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n              <strong>Warning:</strong> <br/> Ce email existe déjà, veuillez choisir un autre!\r\n          </div>\r\n          <div style=\"text-align: center; margin: 0 auto; margin-top: 2rem\">\r\n              <input *ngIf=\"!rep1\" type=\"button\" [disabled]=\"!for.valid || !iszones || clsentool.adresse.region=='--Choix région--' || clsentool.adresse.zone=='--Choix zone--' || clsentool.adresse.souszone=='--Choix sous zone--'\" (click)=\"validernewclientsentool()\"  value=\"valider\" class=\"btn btn-success\" />\r\n          </div>\r\n       </form>\r\n\t</div>\r\n</ng-template>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Extraction</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"currentPointDocs\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                        <th>Libelle document</th>\r\n                        <th>Lien</th>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \" class=\"small\">\r\n                        <td>{{getLibellePiece(item)}}</td>\r\n                        <td><a href=\"http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/uploads/{{getNomFichier(item)}}\">Afficher</a></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentSuivisuperviseurDetait let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Suivi de </h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"reponsesPointAuProspect\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                        <th>Service</th>\r\n                        <th>Réponse du Point</th>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \" class=\"small\">\r\n                        <td>{{getLibellePiece(item)}}</td>\r\n                        <td>{{getNomFichier(item)}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentAjoutCommercial let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <div class=\"row\" *ngIf=\"commercialNew\">\r\n            <h2 style=\"text-align: center; margin: 0 auto\"> {{ commercialNew.type}} </h2>\r\n        </div>\r\n        <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n            <div class=\"col-sm-12\">\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Prénom</label>\r\n                        <input type=\"text\" [(ngModel)]=\"commercialNew.prenom\"  name=\"prenomcom\" id=\"prenomcom\" class=\"form-control\"  placeholder=\"prénom commercial\" required>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Nom</label>\r\n                        <input type=\"text\" [(ngModel)]=\"commercialNew.nom\" name=\"nomcom\" id=\"nomcom\" class=\"form-control\" placeholder=\"nom commercial\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Téléphone</label>\r\n                        <input type=\"number\" [(ngModel)]=\"commercialNew.telephone\" name=\"telephonecom\" id=\"telephonecom\" class=\"form-control\" placeholder=\"téléphone commercial\" required>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Email</label>\r\n                        <input type=\"email\" [(ngModel)]=\"commercialNew.email\" name=\"emailcom\" id=\"emailcom\" class=\"form-control\" placeholder=\"email commercial\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Mot de passe</label>\r\n                        <input type=\"password\" [(ngModel)]=\"commercialNew.pwd\" name=\"pwdcom\" id=\"pwdcom\" class=\"form-control\" placeholder=\"Mot de passe\" required>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Confirm mot de passe</label>\r\n                        <input type=\"password\" [(ngModel)]=\"confirmpwdcom\" name=\"confirpwdcom\" id=\"confirpwdcom\" class=\"form-control\" placeholder=\"Confirm mot de passe\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"text-align: center; margin: 0 auto;\">\r\n            <div class=\"row\" style=\"text-align: center; margin: 0 auto;\">\r\n                <div *ngIf=\"userexist\" style=\"text-align: center; margin: 0 auto\">\r\n                    <strong>Warning:</strong> <br/> Ce email existe déjà, veuillez choisir un autre!\r\n                </div>\r\n            </div>\r\n            <button  style=\"text-align: center; margin: 0 auto\" type=\"button\" class=\"btn btn-success\" (click)=\"enregisternouvcom()\" [disabled]=\"!commercialNew.prenom || !commercialNew.telephone || !commercialNew.email || !commercialNew.pwd || commercialNew.pwd!=confirmpwdcom\"> Enregistrer </button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentSuiviPointsperformanceByLot let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" *ngIf=\"performancesadminpdvbyadmin\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Détail par caissier</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"panel panel-default\">\r\n                        <table class=\"table table-responsive table-sm\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Date opération</th>\r\n                                <th>Caissier</th>\r\n                                <th>Telephone</th>\r\n                                <th>Operateur</th>\r\n                                <th>Traitement</th>\r\n                                <th>Montant</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let caissier of performancesadminpdvbyadmin; let i = index \">\r\n                                <td>{{i + 1}}</td>\r\n                                <th>{{caissier.dateoperation}}</th>\r\n                                <th>{{caissier.name_caissier}}</th>\r\n                                <th>{{caissier.telephone}}</th>\r\n                                <td>{{caissier.operateur}}</td>\r\n                                <td>{{caissier.traitement}}</td>\r\n                                <td>{{caissier.montanttotal}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentVoirplusdedemande let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Détail positionnement ({{listedepositsvalide.length}})</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"panel panel-default\">\r\n                        <table class=\"table table-hover table-responsive\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Date demande</th>\r\n                                <th>Entreprise</th>\r\n                                <th>Superviseur</th>\r\n                                <th>Téléphone</th>\r\n                                <th>Montant depot</th>\r\n                                <th>Commercial retiré</th>\r\n                            </tr>\r\n                            <tr *ngFor=\"let p of listedepositsvalide; let i=index\" [ngStyle]=\"{'color': 'black', 'background-color': (p.niveau_avancement==-4)?'red':(p.niveau_avancement==-3)?'orange':(p.niveau_avancement==-2)?'blue':(p.niveau_avancement==-1)?'pink':'green'}\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{p.datedemande}}</td>\r\n                                <td>{{p.infosup}}</td>\r\n                                <td>{{p.initiateur}}</td>\r\n                                <td>{{p.telephone}}</td>\r\n                                <td style=\"text-align: right;\">{{tocurrency(p.montantdemande)}}</td>\r\n                                <td style=\"width: 200px\">{{p.accepteur}}</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentVoirDetailCredit let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Détail Caisse</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\"  *ngIf=\"mescredits.length\">\r\n            <table class=\"table table-striped table-responsive\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Date derniere creditation</th>\r\n                        <th>Montant credité</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of mescredits; let i = index \" style=\"text-align: center\">\r\n                        <th>{{i+1}}</th>\r\n                        <th>{{item.dateacrredit}}</th>\r\n                        <th style=\"text-align: right\">{{tocurrency(item.montant_acrredite)}}</th>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__ = __webpack_require__("../../../../../src/app/services/suivipositionnement.service.ts");
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
    function SuperviseurComponent(router, _apiplatform, modalService, _utilService, _assignationsuiviService, _suivipositionnementService) {
        this.router = router;
        this._apiplatform = _apiplatform;
        this.modalService = modalService;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this._suivipositionnementService = _suivipositionnementService;
        this.loading_data = true;
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
        this.id_client_sentool = -1;
        this.adresse = '';
        this.entreprise = '';
        this.boutique = '';
        this.zne = '';
        this.readyforassination = true;
        this.isclickforassination = false;
        this.rowsOnPage = 12;
        this.sortBy = "note";
        this.sortOrder = "desc";
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.commercials = [];
        this.prospects = [];
        this.data = [];
        this.optionassignations = [];
        this.datasuivi = [];
        this.datasuiviarelancer = [];
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
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false, menuHead4: false, menuHead5: false, menuHead6: false, menuHead7: false, menuHead8: false, menuHead9: false };
        this.sortByCom = "fullname";
        this.sortOrderCom = "asc";
        this.userexist = false;
        this.isEnregistrerCommercial = false;
        /************************************************************************************
         ********************   PARTIE DEPLOIEMENT POINTS SUIVI   ****************************
         ***********************************************************************************/
        this.reponsesouscripdejaexit = false;
        this.clsentool = {
            nom: '', prenom: '', telephone: '',
            email: '', nometps: '', nomshop: '',
            type: 'superviseur', idcommercial: 0, id_client_sentool: -1,
            adresse: {
                region: '--Choix région--',
                zone: '--Choix zone--',
                souszone: '--Choix sous zone--',
                address: '',
            },
        };
        /************************************************************************************
         ********************   PARTIE PORTEFUILLE   ****************************
         ***********************************************************************************/
        this.sortOrderCli = "desc";
        this.clients = [];
        /**********************************************************************************
        ****************************     PARTIE SUIVI POINTS   ****************************
        ***********************************************************************************/
        this.doughnutChartLabelsPPV = ['Faible', 'Passable', 'Assez-bien', 'Bien'];
        this.doughnutChartDataPPV = [0, 0, 0, 0];
        this.colorsEmptyObject = [{}];
        this.typeperformancePPV = " dans la journée";
        this.checkPerformancePPV = { journee: true, semaine: false, mois: false, annee: false, tout: false };
        this.rowsOnPagePPV = 12;
        this.sortByPPV = "recette";
        this.sortOrderPPV = "desc";
        this.doughnutChartLabelsAP = ['Pas deposit', 'Faible', 'Passable', 'Bien'];
        this.doughnutChartDataAP = [150, 100, 50, 25];
        this.rowsOnPageAP = 12;
        this.sortByAP = "depositactuel";
        this.sortOrderAP = "desc";
        /***************************************************************************************
         *********************************   PARTIE POINT SENTOOL   ****************************
         **************************************************************************************/
        this.rowsOnPageSentoolByCC = 10;
        this.sortBySentoolByCC = "date_ajout";
        this.sortOrderSentoolByCC = "desc";
        this.listepointsdepoyebycc = [];
        /***************************************************************************************
         *********************************   PARTIE RECLAMATIONS NON RESOLUES   ****************************
         **************************************************************************************/
        this.rowsOnPageReclamationsnonresolu = 10;
        this.sortByReclamationsnonresolu = "date_reclamation";
        this.sortOrderReclamationsnonresolu = "asc";
        this.listereclamationsnonresolu = [];
        /************************************************************************************
         *********************************   PARTIE DEPOSIT   ****************************
         ***********************************************************************************/
        this.listedeposits = [];
        this.recouvreurs = [];
        this.listedepositsvalide = [];
        this.listedepositsencours = [];
        this.mescredits = [];
        this.errovalidation = false;
        /************************************************************************************
         *********************************   PARTIE SUIVI ONE POINT   ****************************
         ***********************************************************************************/
        this.listepointsbycc = [];
        this.reponse1 = false;
    }
    SuperviseurComponent.prototype.ngOnInit = function () {
        this.loading_data = true;
        this.getAssignationsBySuperviseur();
    };
    SuperviseurComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    SuperviseurComponent.prototype.menuHeadClick = function (option) {
        var _this = this;
        this.loading_data = true;
        clearInterval(this.killsetinterval);
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.menuHead.menuHead9 = false;
            this.getAssignationsBySuperviseur();
            this.filtreRegion = "--Choix région--";
            this.filtreZone = "--Choix zone--";
            this.filtreSousZone = "--Choix sous zone--";
            this.choixcommercial = "--Choix commercial--";
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
            this.menuHead.menuHead9 = false;
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(function (data) {
                _this.datasuivi = data.map(function (type) {
                    var client = JSON.parse(type.client);
                    if (!type.qualification) {
                        return {
                            id: type.id,
                            libellepoint: type.p_nom_point,
                            fullname: type.p_prenom + " " + type.p_nom,
                            telephone: type.p_telephone,
                            adresse: JSON.parse(type.p_adresse_point).adressepoint + ", " + JSON.parse(type.p_adresse_point).souszonepoint + ", " + JSON.parse(type.p_adresse_point).zonepoint,
                            note: type.note,
                            id_assigner: type.id_assigner,
                            id_commercial: type.id_commercial,
                            dates_suivi: type.dates_suivi,
                            reponse: type.reponse,
                            qualification: "--Choisir une action--",
                            ischoixvalide: false,
                            choixsouscrit: "SenTool",
                            client: client
                        };
                    }
                });
                _this.datasuivi = _this.datasuivi.filter(function (opt) { return opt; });
            }, function (error) { return alert(error); }, function () {
                _this.loading_data = false;
                console.log('listsuiviforsuperviseur');
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
            this.menuHead.menuHead9 = false;
            this.getReclamationsNonResolu();
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
            this.menuHead.menuHead9 = false;
            //this.getListPointsbysuperviseur();
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
            this.menuHead.menuHead9 = false;
            this.datasetsPPV = [{
                    data: this.doughnutChartDataPPV,
                    backgroundColor: ["red", "yellow", "orange", "green"]
                }];
            this.datasetsAP = [{
                    data: this.doughnutChartDataAP,
                    backgroundColor: ["blue", "red", "orange", "green"]
                }];
            this.estcheckPerformancePPV('journee');
            this.etatDepositAP();
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
            this.menuHead.menuHead9 = false;
            this.getCommerciaux();
            console.log('');
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
            this.menuHead.menuHead9 = false;
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
            this.menuHead.menuHead9 = false;
            this.getClient();
        }
        if (option == 9) {
            this.errovalidation = false;
            this.getDemandeDepotForCC();
            console.log('step - 2');
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.menuHead.menuHead9 = true;
            this.killsetinterval = setInterval(function () {
                _this.getDemandeDepotEncoursForCC();
                console.log('step - init demande depot');
            }, 20000);
        }
    };
    SuperviseurComponent.prototype.toInt = function (num) { return +num; };
    SuperviseurComponent.prototype.closedModal = function () {
        this.modalRef.close('Close click');
    };
    SuperviseurComponent.prototype.SelectRegion = function () {
        var _this = this;
        this.clientsentool.adresse.zone = '--Choix zone--';
        this.clientsentool.adresse.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.clientsentool.adresse.region)
            .subscribe(function (data) { return _this.zones = data; }, function (error) { return alert(error); }, function () { return console.log(''); });
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
        this.id_client_sentool = -1;
    };
    SuperviseurComponent.prototype.getgerant = function (p) {
        return p.nom_point;
    };
    SuperviseurComponent.prototype.getLibellePiece = function (item) {
        return item.split("#")[0];
    };
    /************************************************************************************
     *********************************   PARTIE ASSIGNATION   ****************************
     ***********************************************************************************/
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
                    fullname: type.p_prenom + " " + type.p_nom,
                    telephone: type.p_telephone,
                    adresse: JSON.parse(type.p_adresse_point).adressepoint ? JSON.parse(type.p_adresse_point).adressepoint : '-',
                    note: JSON.parse(type.client).note,
                    region: JSON.parse(type.p_adresse_point).regionpoint ? JSON.parse(type.p_adresse_point).regionpoint : 'Dakar',
                    zone: JSON.parse(type.p_adresse_point).zonepoint,
                    sous_zone: JSON.parse(type.p_adresse_point).souszonepoint,
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
            _this.loading_data = false;
            _this.getRecouvreurs();
        });
    };
    SuperviseurComponent.prototype.assignercommercial = function () {
        var _this = this;
        this.isclickforassination = true;
        if (this.filtreZone == "--Choix zone--" ||
            this.filtreRegion == "--Choix région--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixcommercial == "--Choix commercial--" ||
            this.objetifcommercial == 0) {
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
            this._assignationsuiviService.assignationcommercial(assignations)
                .subscribe(function (data) {
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
    SuperviseurComponent.prototype.selectRegion = function () {
        this.filtreSousZone = "--Choix sous zone--";
        this.optionassignations = [];
        this.zones = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].region == this.filtreRegion) {
                if (!this.zones.includes(this.data[i].zone))
                    this.zones.push(this.data[i].zone);
            }
        }
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
        //console.log(this.selectedOptions);
    };
    /************************************************************************************
     *********************************   PARTIE SUIVI ASSIGNATION  et RELANCE ****************************
     ***********************************************************************************/
    SuperviseurComponent.prototype.choixqualification = function (item) {
        if (item.qualification == "Valider")
            item.ischoixvalide = true;
        else
            item.ischoixvalide = false;
    };
    SuperviseurComponent.prototype.choixsouscription = function (item) {
        console.log('choixsouscription');
    };
    SuperviseurComponent.prototype.validersuivisuperviseur = function (suivi) {
        var suivisuperviseur = {
            id: suivi.id,
            dates_suivi: JSON.parse(suivi.dates_suivi),
            reponse: suivi.reponse,
            qualification: suivi.qualification,
            id_assigner: suivi.id_assigner,
            choixsouscrit: suivi.choixsouscrit,
            client: suivi.client,
            id_commercial: suivi.id_commercial,
        };
        this.datasuivi = this.datasuivi.filter(function (opt) { return opt != suivi; });
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(function (data) {
            console.log('');
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
            client: suivi.client,
            choixsouscrit: suivi.choixsouscrit,
            id_commercial: suivi.id_commercial,
        };
        this.datasuiviarelancer = this.datasuiviarelancer.filter(function (opt) { return opt != suivi; });
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () {
            console.log('ajoutsuivifromsuperviseur');
        });
    };
    SuperviseurComponent.prototype.getNomFichier = function (item) {
        return item.split("#")[1];
    };
    SuperviseurComponent.prototype.showModal = function (content, i) {
        this.currentPointDocs = JSON.parse(this.datasuivi[i].client.fichiers);
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) { });
    };
    SuperviseurComponent.prototype.showModalDetail = function (content, item) {
        this.reponsesPointAuProspect = JSON.parse(item.reponse);
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) { });
    };
    SuperviseurComponent.prototype.showModalCommercial = function (content, commercial) {
        this.commercialNew = commercial ? commercial : { access: 'com', type: 'Nouveau commercial', prenom: '', nom: '', login: '', pwd: '', telephone: 77 };
        this.showModalTop(content);
    };
    SuperviseurComponent.prototype.getCommerciaux = function () {
        var _this = this;
        this._utilService.getCommerciauxBySuperviseur()
            .subscribe(function (data) {
            _this.commercials = data;
            if (data.errorCode)
                _this.commercials = data.message;
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    SuperviseurComponent.prototype.enregisternouvcom = function () {
        var _this = this;
        this._utilService.ajoutCommercial(this.commercialNew)
            .subscribe(function (data) {
            if (data.errorCode) {
                if (data.message == 'exist') {
                    _this.userexist = true;
                }
                else {
                    _this.closedModal();
                    _this.getCommerciaux();
                }
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    SuperviseurComponent.prototype.showModalTop = function (content) { this.modalRef = this.modalService.open(content, { size: "lg" }); };
    SuperviseurComponent.prototype.getProspect = function () {
        var _this = this;
        this._utilService.getProspectValide()
            .subscribe(function (data) {
            _this.prospects = data;
            _this.prospects = data.map(function (type) {
                return {
                    id: type.id,
                    nom_point: type.nom_point,
                    commercial: JSON.parse(type.commercial).prenom + " " + JSON.parse(type.commercial).nom,
                    p_prenom: type.p_prenom,
                    p_nom: type.p_nom,
                    email: type.email,
                    id_commercial: type.id_commercial,
                    telephone: type.telephone,
                    adresse_point: JSON.parse(type.adresse_point),
                };
            });
            _this.loading_data = false;
            _this.getRegionSouscritSentool();
        }, function (error) { return alert(error); }, function () { return console.log('getProspectValide'); });
    };
    SuperviseurComponent.prototype.modalAjout = function (content, p) {
        var _this = this;
        this.reponsesouscripdejaexit = false;
        this.iszones = false;
        this.issouszones = false;
        this.clsentool.nom = p.p_nom;
        this.clsentool.prenom = p.p_prenom;
        this.clsentool.telephone = p.telephone;
        this.clsentool.email = p.email;
        this.clsentool.nometps = p.nom_point;
        this.clsentool.nomshop = p.nom_point;
        this.clsentool.idcommercial = p.id_commercial;
        this.clsentool.id_client_sentool = p.id;
        this.clsentool.adresse.region = p.adresse_point.regionpoint ? p.adresse_point.regionpoint : '--Choix région--';
        this.clsentool.adresse.zone = p.adresse_point.zonepoint;
        this.clsentool.adresse.souszone = p.adresse_point.souszonepoint;
        this.clsentool.adresse.address = p.adresse_point.adressepoint;
        this._utilService.getZoneByRegion(this.clsentool.adresse.region)
            .subscribe(function (data) {
            _this.zones = data;
            if (_this.zones.length != 0)
                _this.iszones = true;
        }, function (error) { return alert(error); }, function () {
        });
        this.selectZoneSouscritSentool();
        this.showModalTop(content);
    };
    SuperviseurComponent.prototype.validernewclientsentool = function () {
        var _this = this;
        this._apiplatform.souscrireSentool(this.clsentool)
            .subscribe(function (data) {
            if (data.errorCode) {
                if (data.message == 'dejainscrit') {
                    _this.reponsesouscripdejaexit = true;
                }
                else {
                    _this.closedModal();
                    _this.getProspect();
                }
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () { return console.log('souscrireSentool'); });
    };
    SuperviseurComponent.prototype.getRegionSouscritSentool = function () {
        var _this = this;
        this._utilService.getRegion()
            .subscribe(function (data) {
            _this.regions = data;
        }, function (error) { return alert(error); }, function () { return console.log('getRegion'); });
    };
    SuperviseurComponent.prototype.selectRegionSouscritSentool = function () {
        var _this = this;
        this.iszones = false;
        this.clsentool.adresse.zone = '--Choix zone--';
        this.clsentool.adresse.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.clsentool.adresse.region)
            .subscribe(function (data) {
            _this.zones = data;
            _this.iszones = true;
        }, function (error) { return alert(error); }, function () { return console.log('getZoneByRegion'); });
    };
    SuperviseurComponent.prototype.selectZoneSouscritSentool = function () {
        var _this = this;
        this.issouszones = false;
        this._utilService.getSouszoneByZoneByRegion({ region: this.clsentool.adresse.region, zone: this.clsentool.adresse.zone })
            .subscribe(function (data) {
            _this.souszones = data;
            _this.issouszones = true;
        }, function (error) { return alert(error); }, function () { return console.log('getSouszoneByZoneByRegion'); });
    };
    SuperviseurComponent.prototype.getClient = function () {
        var _this = this;
        this._utilService.getClients()
            .subscribe(function (data) {
            _this.clients = data.message.map(function (type) {
                var client = JSON.parse(type.adresse);
                return {
                    adresse: client.adressepoint + ", " + client.regionpoint,
                    gerant: type.gerant,
                    date_ajout: type.date_ajout,
                    tel: type.tel,
                    id_client_sentool: type.id_client_sentool,
                    nom_point: type.nom_point,
                    commercial: type.commercial,
                    infosup: JSON.parse(type.infosup),
                };
            });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    SuperviseurComponent.prototype.chartClickedPPV = function (e) {
        if (e.active[0]) {
            this.estdetailPerformancePPV(e.active[0]._model.label);
        }
    };
    SuperviseurComponent.prototype.showModalPPV = function (content) {
        this.modalService.open(content, { size: "lg" }).result.then(function (result) { }, function (reason) { });
    };
    SuperviseurComponent.prototype.performancessupperviseurclasserbydate = function (type) {
        var _this = this;
        this.performancesadminpdv = undefined;
        this._apiplatform.getperformancessupperviseurclasserbydate(type)
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.datasetsPPV = [{
                        data: data.message.nbrepoints,
                        backgroundColor: ["red", "yellow", "orange", "green"]
                    }];
            }
        }, function (error) { return alert(error); }, function () {
            console.log('------------------------------------');
        });
    };
    SuperviseurComponent.prototype.estcheckPerformancePPV = function (type) {
        if (type == 'journee') {
            this.checkPerformancePPV.journee = true;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans la journée";
        }
        else if (type == 'semaine') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = true;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans la semaine";
        }
        else if (type == 'mois') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = true;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans le mois";
        }
        else if (type == 'annee') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = true;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans l'année";
        }
        else if (type == 'tout') {
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = true;
            this.typeperformancePPV = "dans l'ensemble";
        }
        this.typedateperformancesadminpdv = type;
        this.performancessupperviseurclasserbydate(type);
    };
    SuperviseurComponent.prototype.estdetailPerformancePPV = function (lot) {
        var _this = this;
        var type = "";
        if (this.checkPerformancePPV.journee) {
            type = "journee";
        }
        if (this.checkPerformancePPV.semaine) {
            type = "semaine";
        }
        if (this.checkPerformancePPV.mois) {
            type = "mois";
        }
        if (this.checkPerformancePPV.annee) {
            type = "annee";
        }
        if (this.checkPerformancePPV.tout) {
            type = "tout";
        }
        //console.log(type+' '+lot);
        this.typedateperformancesadminpdv = type;
        this.lotperformancesadminpdv = lot;
        this._apiplatform.getperformancessupperviseurclasserbydatebylot({ lot: lot, typedate: type })
            .subscribe(function (data) {
            //console.log(data)
            if (data.errorCode) {
                _this.performancesadminpdv = data.message;
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () {
            console.log('getperformancessupperviseurclasserbydatebylot');
        });
    };
    SuperviseurComponent.prototype.detailperformancesadminclasserbydateandlot = function (adminpdv, content) {
        var _this = this;
        this.performancesadminpdvbyadmin = undefined;
        this._apiplatform.getperformancessupperviseurclasserbydatebySup({ idadminpdv: adminpdv.dependsOn, typedate: this.typedateperformancesadminpdv })
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.performancesadminpdvbyadmin = data.message.map(function (op) {
                    return {
                        dateoperation: op.dateoperation.date.split('.')[0],
                        name_caissier: op.name_caissier,
                        montanttotal: op.montanttotal,
                        operateur: op.operateur,
                        telephone: op.telephone,
                        traitement: op.traitement,
                    };
                });
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () {
            console.log('getperformancessupperviseurclasserbydatebySup');
        });
        this.showModalPPV(content);
    };
    SuperviseurComponent.prototype.etatDepositAP = function () {
        var _this = this;
        this._apiplatform.getEtatdepositbylotbysup()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.datasetsAP = [{
                        data: data.message.nbrepoints,
                        backgroundColor: ["blue", "red", "orange", "green"]
                    }];
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
            console.log('getEtatdepositbylotbysup');
        });
    };
    SuperviseurComponent.prototype.detailEtatDepositAP = function (lot) {
        var _this = this;
        this.etatdepositlot = undefined;
        this._apiplatform.getDetailEtatdepositbylotbysup({ lot: lot })
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.etatdepositlot = data.message.map(function (opt) {
                    return {
                        caution: opt.caution,
                        cautiondebase: opt.cautiondebase,
                        telephone: opt.telephone,
                        date_last_modif: opt.date_last_modif.date.split(' ')[0],
                        name_adminpdv: opt.name_adminpdv,
                    };
                });
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
            console.log('getDetailEtatdepositbylotbysup');
        });
    };
    SuperviseurComponent.prototype.chartClickedAP = function (e) {
        if (e.active[0]) {
            this.lotetatdeposit = e.active[0]._model.label;
            this.detailEtatDepositAP(this.lotetatdeposit);
        }
    };
    SuperviseurComponent.prototype.getPointsdeployeByCC = function () {
        var _this = this;
        this._utilService.getPointsdeployeByCC()
            .subscribe(function (data) {
            _this.listepointsdepoyebycc = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adressecomplet);
                return {
                    date_ajout: type.date_ajout,
                    nom_point: type.nomentreprise,
                    nom_boutique: type.nomboutique,
                    fullname: type.prenom + " " + type.nom,
                    telephone: type.telephone,
                    adresse: adresse_point.adresse ? adresse_point.adresse + ',' : '' + " " + adresse_point.souszone + ", " + adresse_point.zone,
                    fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                };
            });
            _this.loading_data = false;
            console.log('');
        }, function (error) { return alert(error); }, function () { return console.log('getPointsdeploye'); });
    };
    SuperviseurComponent.prototype.getReclamationsNonResolu = function () {
        var _this = this;
        this._apiplatform.getReclamationsNonResoluBySuperviseur()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                console.log(data.message);
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
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () { return console.log('getPointsdeploye'); });
    };
    SuperviseurComponent.prototype.validresolutionreclamation = function (reclamation) {
        this._apiplatform.validReclamationsNonResolu(reclamation)
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () { return console.log('validReclamationsNonResolu'); });
        this.listereclamationsnonresolu = this.listereclamationsnonresolu.filter(function (opt) { return opt.id_reclamation != reclamation.id_reclamation; });
    };
    SuperviseurComponent.prototype.getRecouvreurs = function () {
        var _this = this;
        this._utilService.getRecouvreurs()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.recouvreurs = data.message;
            }
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    SuperviseurComponent.prototype.showModalVoirplusdedemande = function (content) {
        this.modalService.open(content, { size: "lg" }).result.then(function (result) { }, function (reason) { });
    };
    SuperviseurComponent.prototype.showModalVoirDetailCredit = function (content) {
        this.modalService.open(content).result.then(function (result) { }, function (reason) { });
    };
    SuperviseurComponent.prototype.getDemandeDepotForCC = function () {
        var _this = this;
        console.log('getDemandeDepotForCC');
        this._suivipositionnementService.getDemandeDepotForCC()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                console.log(data.message);
                _this.listedeposits = data.message.map(function (type) {
                    return {
                        id_accepteur: -1,
                        niveau_avancement: (type.etatdemande == 0 && type.accepteur == 'attente') ? -4 : (type.etatdemande == 0 && type.accepteur != 'attente') ? -3 : type.etatdemande == 1 ? -2 : type.etatdemande == 2 ? -1 : 0,
                        datedemande: type.datedemande,
                        adressecomplet: JSON.parse(type.initiateur.adresse).address + ", " + JSON.parse(type.initiateur.adresse).souszone + ", " + JSON.parse(type.initiateur.adresse).zone,
                        montantdemande: type.montantdemande,
                        telephone: type.initiateur.telephone,
                        point: type.initiateur,
                        initiateur: type.initiateur.prenom + ' ' + type.initiateur.nom,
                        accepteur: type.accepteur == 'attente' ? type.accepteur : JSON.parse(type.accepteur).prenom + " " + JSON.parse(type.accepteur).nom,
                        infosup: type.infosup,
                        etatdemande: type.etatdemande,
                        tokencc: type.tokencc,
                    };
                });
                _this.listedepositsencours = _this.listedeposits.filter(function (opt) { return opt.etatdemande != 3; });
                _this.listedepositsvalide = _this.listedeposits.filter(function (opt) { return opt.etatdemande == 3; });
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () {
            _this.listcreditsuperviseur();
        });
    };
    SuperviseurComponent.prototype.getDemandeDepotEncoursForCC = function () {
        var _this = this;
        console.log('getDemandeDepotEncoursForCC');
        this._suivipositionnementService.getDemandeDepotEncoursForCC()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                console.log(data.message);
                _this.listedeposits = data.message.map(function (type) {
                    return {
                        id_accepteur: -1,
                        niveau_avancement: (type.etatdemande == 0 && type.accepteur == 'attente') ? -4 : (type.etatdemande == 0 && type.accepteur != 'attente') ? -3 : type.etatdemande == 1 ? -2 : type.etatdemande == 2 ? -1 : 0,
                        datedemande: type.datedemande,
                        adressecomplet: JSON.parse(type.initiateur.adresse).address + ", " + JSON.parse(type.initiateur.adresse).souszone + ", " + JSON.parse(type.initiateur.adresse).zone,
                        montantdemande: type.montantdemande,
                        telephone: type.initiateur.telephone,
                        point: type.initiateur,
                        initiateur: type.initiateur.prenom + ' ' + type.initiateur.nom,
                        accepteur: type.accepteur == 'attente' ? type.accepteur : JSON.parse(type.accepteur).prenom + " " + JSON.parse(type.accepteur).nom,
                        infosup: type.infosup,
                        etatdemande: type.etatdemande,
                        tokencc: type.tokencc,
                    };
                });
                _this.listedepositsencours = _this.listedeposits.filter(function (opt) { return opt.etatdemande != 3; });
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
        });
    };
    SuperviseurComponent.prototype.choicerecouvreur = function (item) {
        clearInterval(this.killsetinterval);
    };
    SuperviseurComponent.prototype.affecterComForDepot = function (item) {
        var _this = this;
        if (confirm("Confirmer l'affectation")) {
            console.log("je confirme");
            this.loading_data = true;
            clearInterval(this.killsetinterval);
            var dataaffecte = {
                accepteur: this.recouvreurs.find(function (opt) { return opt.id == item.id_accepteur; }),
                datedemande: item.datedemande,
                montantdemande: item.montantdemande,
                tokencc: item.tokencc,
            };
            this._suivipositionnementService.affecterComForDepotForCC(dataaffecte)
                .subscribe(function (data) {
                _this.getDemandeDepotEncoursForCC();
            }, function (error) { return alert(error); }, function () {
                _this.killsetinterval = setInterval(function () {
                    _this.getDemandeDepotEncoursForCC();
                    console.log('step affecterComForDepot');
                }, 20000);
            });
        }
        else {
            console.log("Je ne confirme pas");
            console.log(this.recouvreurs.find(function (opt) { return opt.id == item.id_accepteur; }));
        }
    };
    SuperviseurComponent.prototype.validerComForDepotCC = function (item) {
        var _this = this;
        console.log('validerComForDepotCC');
        if (confirm("Confirmer la validation du dépot")) {
            console.log("je confirme");
            this.loading_data = true;
            clearInterval(this.killsetinterval);
            this._suivipositionnementService.validerComForDepotCC({ montantdemande: item.montantdemande, tokencc: item.tokencc, point: item.point, agentcom: item.accepteur })
                .subscribe(function (data) {
                if (data.errorCode) {
                    if (data.messageError == 'ok') {
                        _this.listedepositsencours = _this.listedeposits.filter(function (opt) { return opt.etatdemande != 3 && opt.tokencc != item.tokencc; });
                        _this.getDemandeDepotForCC();
                    }
                    else {
                        _this.errovalidation = true;
                    }
                }
            }, function (error) { return alert(error); }, function () {
                _this.killsetinterval = setInterval(function () {
                    _this.getDemandeDepotEncoursForCC();
                    console.log('step validerComForDepotCC');
                }, 20000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    SuperviseurComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    SuperviseurComponent.prototype.listcreditsuperviseur = function () {
        var _this = this;
        this._suivipositionnementService.listcreditsuperviseur()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.mescredits = data.message;
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () { return console.log('listcreditsuperviseur'); });
    };
    SuperviseurComponent.prototype.getListPointsbysuperviseur = function () {
        var _this = this;
        this._apiplatform.getListPointsbysuperviseur()
            .subscribe(function (data) {
            console.log(data);
            if (data.errorCode) {
                _this.listepointsbycc = data.message.map(function (type) {
                    return {
                        date_ajout: type.date_last_modif.date.split('.')[0],
                        nom_point: JSON.parse(type.infosup).nometps,
                        gerant: type.name_adminpdv,
                        tel: type.telephone,
                        adresse: JSON.parse(type.adresse).address,
                        commercial: 'ds',
                        id_point: type.id_point,
                    };
                });
                _this.loading_data = false;
            }
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    return SuperviseurComponent;
}());
SuperviseurComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-superviseur',
        template: __webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/superviseur/superviseur.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */], __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */], __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__["a" /* SuivipositionnementService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__["a" /* SuivipositionnementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__["a" /* SuivipositionnementService */]) === "function" && _f || Object])
], SuperviseurComponent);

var _a, _b, _c, _d, _e, _f;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_filter_list_com_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/data-filter-list-com.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_filter_list_portefeuille_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/data-filter-list-portefeuille.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__data_filter_suiviassigncom_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/data-filter-suiviassigncom.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_filter_suivipdvperformanceparsup_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/data-filter-suivipdvperformanceparsup.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_filter_suivipdvetatdepositparsup_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/data-filter-suivipdvetatdepositparsup.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__data_filter_point_sentool_cc_pipe__ = __webpack_require__("../../../../../src/app/layout/superviseur/data-filter-point-sentool-cc.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__suivionepoint_suivionepoint_component__ = __webpack_require__("../../../../../src/app/layout/suivionepoint/suivionepoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__suivionepoint_data_filter_list_suivipoint_pipe__ = __webpack_require__("../../../../../src/app/layout/suivionepoint/data-filter-list-suivipoint.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_15__data_filter_list_com_pipe__["a" /* DataFilterListeComPipe */],
            __WEBPACK_IMPORTED_MODULE_16__data_filter_list_portefeuille_pipe__["a" /* DataFilterListeCliPipe */],
            __WEBPACK_IMPORTED_MODULE_17__data_filter_suiviassigncom_pipe__["a" /* DataFilterSuiviAssignComPipe */],
            __WEBPACK_IMPORTED_MODULE_18__data_filter_suivipdvperformanceparsup_pipe__["a" /* DataFilterSuivipdvperformanceparsupPipe */],
            __WEBPACK_IMPORTED_MODULE_19__data_filter_suivipdvetatdepositparsup_pipe__["a" /* DataFilterSuivipdvetatdepositparsupPipe */],
            __WEBPACK_IMPORTED_MODULE_20__data_filter_point_sentool_cc_pipe__["a" /* DataFilterPointSentoolByCCPipe */],
            __WEBPACK_IMPORTED_MODULE_22__suivionepoint_data_filter_list_suivipoint_pipe__["a" /* DataFilterListesuivipointPipe */],
            __WEBPACK_IMPORTED_MODULE_21__suivionepoint_suivionepoint_component__["a" /* SuivionepointComponent */]
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

/***/ }),

/***/ "../../../../ng2-charts/ng2-charts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-charts/index.js"));


/***/ })

});
//# sourceMappingURL=2.chunk.js.map