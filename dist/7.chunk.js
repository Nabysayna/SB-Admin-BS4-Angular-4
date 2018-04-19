webpackJsonp([7],{

/***/ "../../../../../src/app/layout/admincommercial/admincommercial-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admincommercial_component__ = __webpack_require__("../../../../../src/app/layout/admincommercial/admincommercial.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmincommercialRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__admincommercial_component__["a" /* AdmincommercialComponent */] }
];
var AdmincommercialRoutingModule = (function () {
    function AdmincommercialRoutingModule() {
    }
    return AdmincommercialRoutingModule;
}());
AdmincommercialRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AdmincommercialRoutingModule);

//# sourceMappingURL=admincommercial-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/admincommercial/admincommercial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n  \t<div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n\t\t<button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Assignation</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead5, 'btn-success': menuHead.menuHead5}\" (click)=\"menuHeadClick(5)\" style=\"margin-bottom: 1rem;\">Suivi points</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Suivi com</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\" style=\"margin-bottom: 1rem;\">Affectation</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead4, 'btn-success': menuHead.menuHead4}\" (click)=\"menuHeadClick(4)\" style=\"margin-bottom: 1rem;\">Déposit en cours</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead7, 'btn-success': menuHead.menuHead7}\" (click)=\"menuHeadClick(7)\" style=\"margin-bottom: 1rem;\">Points souscris à Sentool</button>\r\n\t</div>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\">\r\n\t<div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-sm-2\">\r\n            <label>Région</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreRegion\" (change)=\"selectRegion()\">\r\n                <option>--Choix région--</option>\r\n                <option  *ngFor=\"let region of regions\">{{region.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label>Zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreZone\" (change)=\"selectZone()\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zones\">{{zone.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Sous zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreSousZone\"  (change)=\"selectSouszone()\">\r\n                <option>--Choix sous zone--</option>\r\n                <option  *ngFor=\"let souszone of souszones\">{{souszone.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Superviseur</label>\r\n            <select name=\"singleSelectsuperviseur\"  id=\"singleSelectsuperviseur\" class=\"form-control input-sm\" [(ngModel)]=\"choixsuperviseur\">\r\n                <option [attr.value]=\"'-1'\">--Choix superviseur--</option>\r\n                <option  *ngFor=\"let superviseur of superviseurs\" [attr.value]=\"superviseur.id\">{{superviseur.prenom}} {{superviseur.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <label >Objectif</label>\r\n            <input type=\"number\" class=\"form-control input-sm\"  [(ngModel)]=\"objetifsuperviseur\" name=\"objetifsuperviseur\" />\r\n        </div>\r\n\t</div>\r\n    <div *ngIf=\"isEnregistrerAssignation\" class=\"row text-center center-block\">\r\n        <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n            <strong>Success!</strong> Assignation avec success.\r\n        </ngb-alert>\r\n    </div>\r\n    <div class=\"row text-center center-block\" style=\"padding-bottom: 1rem\">\r\n    \t<button type=\"button\"\r\n                class=\"btn btn-warning btn-sm\"\r\n                (click)=\"assignersuperviseur()\"\r\n                style=\"margin-left: auto; margin-right: auto;\"\r\n                [disabled]=\"\r\n                    filtreRegion == '--Choix région--' ||\r\n                    filtreZone == '--Choix zone--' ||\r\n                    filtreSousZone == '--Choix sous zone--' ||\r\n                    choixsuperviseur == '--Choix superviseur--' ||\r\n                    objetifsuperviseur <= 0 ||\r\n                    selectedOptions.length <= 0\r\n                \">Assigner</button>\r\n    </div>\r\n    <div class=\"row\">\r\n        <table class=\"table table-hover table-responsive\" [mfData]=\"optionassignations\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                    <th><mfDefaultSorter by=\"fullname\">Client</mfDefaultSorter></th>\r\n                    <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                    <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                    <th><mfDefaultSorter by=\"note\">Note</mfDefaultSorter></th>\r\n                    <th><mfDefaultSorter by=\"commentaire\">Commentaire</mfDefaultSorter></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of mf.data; let i = index \" [ngStyle]=\"{'color': 'white', 'background-color': (item.infosup.service_sentool==0 && item.infosup.service_wafacash==0)?'red':(item.infosup.service_sentool==0 && item.infosup.service_wafacash==1)?'yellow':'orange'}\">\r\n                    <td><input type=\"checkbox\" name=\"items\" value=\"{{item.value}}\" [(ngModel)]=\"item.checked\" /></td>\r\n                    <td>{{item.libellepoint}}</td>\r\n                    <td>{{item.fullname}}</td>\r\n                    <td>{{item.telephone}}</td>\r\n                    <td>{{item.adresse}}</td>\r\n                    <td><app-ratingbyoption [rate]=\"item.note-1\" [ratingstatic]=\"true\"></app-ratingbyoption></td>\r\n                    <td><textarea  class=\"form-control\" type=\"text\" name=\"commentaire-{{i}}\" placeholder=\"Notification\" [(ngModel)]=\"item.commentaire\">{{item.commentaire}}</textarea></td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr class=\"text-center center-block\">\r\n                    <td colspan=\"8\" class=\"text-center center-block\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n\t</div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Performance globale.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas height=\"150\" baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"'doughnut'\" ></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Etat Points.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas height=\"150\" baseChart [data]=\"doughnutChartDataPP\" [colors]=\"colorsEmptyObject\" [labels]=\"doughnutChartLabelsPP\" [chartType]=\"'doughnut'\" ></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"margin-top: 2rem\"  *ngIf=\"data\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Performance CC.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas baseChart [datasets]=\"barChartDataSuperviseur\" [labels]=\"barChartLabelsSuperviseur\" [options]=\"barChartOptions\" [legend]=\"true\" [chartType]=\"'bar'\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-primary\">\r\n                    <div class=\"panel panel-heading\">\r\n                        <h5>Performance Commerciaux.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"true\" [chartType]=\"'bar'\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"commerciaux | dataFilterCommercial: filterQueryCommercial\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageCom\" [(mfSortBy)]=\"sortByCom\" [(mfSortOrder)]=\"sortOrderCom\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"fullname\">Commercial</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"email\">Email</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_depends\">CC affecté</mfDefaultSorter></th>\r\n                        <th colspan=\"2\" style=\"text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"3\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryCommercial\"/></th>\r\n                        <th>Total : {{commerciaux.length}}</th>\r\n                        <th style=\"text-align: right\"><button type=\"button\"  (click)=\"showModalSuperviseur(contentAjoutSuperviseur)\" class=\"btn btn-warning\"> ajouter cc </button></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data; let i = index \">\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.email}}</td>\r\n                        <td>{{item.fullname_depends}}</td>\r\n                        <td>\r\n                            <select name=\"sselectcommercial-{{i}}\"  id=\"sselectcommercial-{{i}}\" class=\"form-control input-sm\" [(ngModel)]=\"item.id_superviseur\">\r\n                                <option  *ngFor=\"let superviseur of superviseurs\" [attr.value]=\"superviseur.id\">{{superviseur.prenom}} {{superviseur.nom}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"reaffectercommercial(item)\"> reaffecter </button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"menuHead.menuHead4\" >\r\n    <div class=\"row\" style=\"margin-top: 2rem\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\">\r\n                    <tr style=\"text-align: right\">\r\n                        <th>#</th>\r\n                        <th>Date demande</th>\r\n                        <th>Entreprise</th>\r\n                        <th>Superviseur</th>\r\n                        <th>Téléphone</th>\r\n                        <th>Adresse</th>\r\n                        <th>Montant depot</th>\r\n                        <th>CC en charge</th>\r\n                        <th>Commercial envoyé</th>\r\n                        <th style=\"text-align: center\">Etat</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let p of listedepositsencours; let i=index\" [ngStyle]=\"{'color': 'black', 'background-color': (p.niveau_avancement==-4)?'red':(p.niveau_avancement==-3)?'orange':(p.niveau_avancement==-2)?'blue':(p.niveau_avancement==-1)?'pink':'green'}\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{p.datedemande}}</td>\r\n                        <td>{{p.infosup}}</td>\r\n                        <td>{{p.initiateur}}</td>\r\n                        <td>{{p.telephone}}</td>\r\n                        <td>{{p.adressecomplet}}</td>\r\n                        <td style=\"text-align: right;\">{{tocurrency(p.montantdemande)}}</td>\r\n                        <td style=\"width: 200px\">{{p.cc}}</td>\r\n                        <td style=\"width: 200px\">{{p.accepteur}}</td>\r\n                        <td>\r\n                            <span *ngIf=\"p.niveau_avancement==-4\">Attente affectation</span>\r\n                            <span *ngIf=\"p.niveau_avancement==-3\">Attente confirmation</span>\r\n                            <span *ngIf=\"p.niveau_avancement==-2\">En cours de recuperation</span>\r\n                            <span *ngIf=\"p.niveau_avancement==-1\">Attente validation depot</span>\r\n                            <span *ngIf=\"p.niveau_avancement==0\">Depot Effectué</span>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead5\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listepointsouscrits | dataFilterNewPoint: filterQueryDeploye\" #mfPointsouscrits=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageNewPoint\" [(mfSortBy)]=\"sortByNewPoint\" [(mfSortOrder)]=\"sortOrderNewPoint\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date création</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_commercial\">Créé par</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"souscription\">Souscription</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryDeploye\"/></th>\r\n                        <th>Total : {{listepointsouscrits.length}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"8\">\r\n                            <div style=\"color: black; text-align: center;\">\r\n                                <span style=\"background-color: red;\"> Pas encore </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: orange;\"> Sentool </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: yellow;\"> Wafacash </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: green;\"> Sentool et Wafacash </span>\r\n                                <br/>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfPointsouscrits.data; let i = index \" [ngStyle]=\"{'color': 'black', 'background-color': (item.infosup.service_sentool==0 && item.infosup.service_wafacash==0 && item.infosup.en_suivi==1)?'red':(item.infosup.service_sentool==1 && item.infosup.service_wafacash==0)?'orange':(item.infosup.service_sentool==0 && item.infosup.service_wafacash==1)?'yellow':'green'}\">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td>{{item.fullname_commercial}}</td>\r\n                        <td>{{item.souscription}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead7\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listepointsdepoye | dataFilterNewPoint: filterQueryDeploye\" #mfPointDeploye=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageNewPoint\" [(mfSortBy)]=\"sortByNewPoint\" [(mfSortOrder)]=\"sortOrderNewPoint\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date déployement</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_boutique\">Nom Boutique</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_commercial\">Commercial déployé</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryDeploye\"/></th>\r\n                        <th>Total : {{listepointsdepoye.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfPointDeploye.data; let i = index \">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.nom_boutique}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td>{{item.fullname_commercial}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #contentAjoutSuperviseur let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h2 style=\"text-align: center; margin: 0 auto\"> New CC </h2>\r\n        <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n            <div class=\"col-sm-12\">\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Prénom</label>\r\n                        <input type=\"text\" [(ngModel)]=\"superviseurNew.prenom\"  name=\"prenomsup\" id=\"prenomsup\" class=\"form-control\"  placeholder=\"prénom superviseur\" required>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Nom</label>\r\n                        <input type=\"text\" [(ngModel)]=\"superviseurNew.nom\" name=\"nomcom\" id=\"nomcom\" class=\"form-control\" placeholder=\"nom superviseur\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Téléphone</label>\r\n                        <input type=\"number\" [(ngModel)]=\"superviseurNew.telephone\" name=\"telephonesup\" id=\"telephonesup\" class=\"form-control\" placeholder=\"téléphone superviseur\" required>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Email</label>\r\n                        <input type=\"email\" [(ngModel)]=\"superviseurNew.email\" name=\"emailsup\" id=\"emailsup\" class=\"form-control\" placeholder=\"email superviseur\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Mot de passe</label>\r\n                        <input type=\"password\" [(ngModel)]=\"superviseurNew.pwd\" name=\"pwdsup\" id=\"pwdsup\" class=\"form-control\" placeholder=\"Mot de passe\" required>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-6\">\r\n                        <label>Confirm mot de passe</label>\r\n                        <input type=\"password\" [(ngModel)]=\"confirmpwdsup\" name=\"confirpwdsup\" id=\"confirpwdsup\" class=\"form-control\" placeholder=\"Confirm mot de passe\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"text-align: center; margin: 0 auto;\">\r\n            <div *ngIf=\"userexist\" style=\"text-align: center; margin: 0 auto\">\r\n                <strong>Warning:</strong> <br/> Ce email existe déjà, veuillez choisir un autre!\r\n            </div>\r\n            <button  style=\"text-align: center; margin: 0 auto\" type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"enregisternouvsup()\" [disabled]=\"!superviseurNew.prenom || !superviseurNew.telephone || !superviseurNew.email || !superviseurNew.pwd || superviseurNew.pwd!=confirmpwdsup\"> Enregistrer </button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/admincommercial/admincommercial.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/admincommercial/admincommercial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_newclient_service__ = __webpack_require__("../../../../../src/app/services/newclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__ = __webpack_require__("../../../../../src/app/services/suivipositionnement.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmincommercialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdmincommercialComponent = (function () {
    function AdmincommercialComponent(modalService, router, _utilService, _assignationsuiviService, _suivipositionnementService, _newclientService) {
        this.modalService = modalService;
        this.router = router;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this._suivipositionnementService = _suivipositionnementService;
        this._newclientService = _newclientService;
        this.staticAlertClosed = false;
        this.isEnregistrerAssignation = false;
        this.readyforassination = true;
        this.isclickforassination = false;
        this.loading_data = true;
        this.menuHead = { menuHead1: true, menuHead2: false, menuHead3: false, menuHead4: false, menuHead5: false, menuHead7: false };
        /************************************************************************************
         ********************   PARTIE ASSIGNATIONS   ****************************
         ***********************************************************************************/
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.superviseurs = [];
        this.optionassignations = [];
        this.filtreRegion = "--Choix région--";
        this.filtreZone = "--Choix zone--";
        this.filtreSousZone = "--Choix sous zone--";
        this.choixsuperviseur = "--Choix superviseur--";
        this.objetifsuperviseur = 0;
        this.rowsOnPage = 5;
        this.sortBy = "note";
        this.sortOrder = "desc";
        this.sortByWordLength = function (a) { return a.adresse.length; };
        /************************************************************************************
         ********************   PARTIE AFFECTATIONS   ****************************
         ***********************************************************************************/
        this.rowsOnPageCom = 10;
        this.sortByCom = "fullname";
        this.sortOrderCom = "asc";
        this.commerciaux = [];
        this.userexist = false;
        /************************************************************************************
         *************************************   SUIVI POINTS   ****************************
         ***********************************************************************************/
        this.listeadminccsuivipoints = [];
        /************************************************************************************
         **********************************   POINTS SOUSCRITS   ****************************
         ***********************************************************************************/
        this.listepointsouscrits = [];
        /************************************************************************************
         ********************   PARTIE NEW POINT ET SOUSCRIT   ****************************
         ***********************************************************************************/
        this.rowsOnPageNewPoint = 10;
        this.sortByNewPoint = "date_ajout";
        this.sortOrderNewPoint = "desc";
        this.listenewpoints = [];
        this.listepointsdepoye = [];
        this.barChartOptions = { scaleShowVerticalLines: false, responsive: true };
        this.barChartData = [];
        this.barChartLabels = [];
        this.barChartDataSuperviseur = [];
        this.barChartLabelsSuperviseur = [];
        this.doughnutChartLabels = ['Objetifs non atteint', 'Objectifs Atteint'];
        this.doughnutChartData = [50, 50];
        this.doughnutChartLabelsPP = ['Aucun', 'SenTool', 'Wafa', 'BBS'];
        this.doughnutChartDataPP = [1, 3, 2, 4];
        this.colorsEmptyObject = [{ backgroundColor: ["blue", "orange", "yellow", "green"] }];
        /************************************************************************************
         *********************************   PARTIE DEPOSIT  EN COURS ****************************
         ***********************************************************************************/
        this.listedepositsencours = [];
    }
    AdmincommercialComponent.prototype.ngOnInit = function () {
        this.loading_data = true;
        this.getRegionsSuperviseurs();
    };
    AdmincommercialComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    AdmincommercialComponent.prototype.menuHeadClick = function (option) {
        this.loading_data = true;
        if (option == 1) {
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;
            this.filtreRegion = "--Choix région--";
            this.filtreZone = "";
            this.filtreSousZone = "-";
            this.choixsuperviseur = "--Choix superviseur--";
            this.objetifsuperviseur = 0;
            this.selectSouszone();
        }
        if (option == 2) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;
            this.getCommerciauxForPerformance();
        }
        if (option == 3) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;
            this.getComSuperviseurs();
        }
        if (option == 4) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;
            this.getAllDemandeDepotEncours();
            /*this.killsetinterval = setInterval(() => {
                this.getAllDemandeDepotEncours();
                console.log('step init');
            }, 20000);*/
        }
        if (option == 5) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.menuHead.menuHead7 = false;
            this.getPointssouscritBBS();
        }
        if (option == 7) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = true;
            this.getPointsdeploye();
        }
    };
    AdmincommercialComponent.prototype.toInt = function (num) { return +num; };
    AdmincommercialComponent.prototype.getRegionsSuperviseurs = function () {
        var _this = this;
        this._utilService.getRegionsSuperviseurs()
            .subscribe(function (data) {
            _this.superviseurs = data.superviseurs;
            _this.regions = data.regions;
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log('getRegionsSuperviseurs'); });
    };
    AdmincommercialComponent.prototype.choixsuperviseurforcommercial = function (id_superviseur) { };
    AdmincommercialComponent.prototype.selectRegion = function () {
        var _this = this;
        this.optionassignations = [];
        this.filtreSousZone = "--Choix sous zone--";
        this._utilService.getZoneByRegion(this.filtreRegion.toString())
            .subscribe(function (data) {
            _this.zones = data;
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    AdmincommercialComponent.prototype.showModal = function (content) {
        this.modalRef = this.modalService.open(content, { size: "lg" });
    };
    AdmincommercialComponent.prototype.closedModal = function () {
        this.modalRef.close('Close click');
    };
    AdmincommercialComponent.prototype.selectZone = function () {
        var _this = this;
        this.isEnregistrerAssignation = false;
        this.optionassignations = [];
        this._utilService.getSouszoneByZoneByRegion({ region: this.filtreRegion.toString(), zone: this.filtreZone.toString() })
            .subscribe(function (data) { return _this.souszones = data; }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    AdmincommercialComponent.prototype.selectSouszone = function () {
        var _this = this;
        this._newclientService.getPointBySouszoneByZone({ zone: this.filtreZone, souszone: this.filtreSousZone })
            .subscribe(function (data) {
            _this.optionassignations = data.map(function (type) {
                return {
                    id: type.id,
                    libellepoint: type.libellepoint,
                    prenom: type.prenom,
                    nom: type.nom,
                    infosup: JSON.parse(type.infosup),
                    fullname: type.fullname,
                    telephone: type.telephone,
                    adresse: type.adresse,
                    note: type.note,
                    commentaire: '',
                    value: type.id,
                    checked: false
                };
            });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    Object.defineProperty(AdmincommercialComponent.prototype, "selectedOptions", {
        get: function () {
            return this.optionassignations
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    AdmincommercialComponent.prototype.assignersuperviseur = function () {
        var _this = this;
        this.isclickforassination = true;
        if (this.filtreZone == "--Choix zone--" ||
            this.filtreRegion == "--Choix région--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixsuperviseur == "--Choix superviseur--" ||
            this.objetifsuperviseur == 0) {
            this.readyforassination = false;
        }
        else {
            var optionassignations_1 = this.optionassignations;
            var assignes = this.selectedOptions.map(function (option) {
                return optionassignations_1.find(function (assigne) { return assigne.id == Number(option); });
            });
            var assignations = {
                region: this.filtreRegion,
                zone: this.filtreZone,
                souszone: this.filtreSousZone,
                superviseur: this.superviseurs.find(function (superviseur) { return superviseur.id == _this.choixsuperviseur; }),
                objectifsuperviseur: this.objetifsuperviseur,
                assignes: assignes,
                infosup: {
                    date_assignationsuperviser: '',
                    objectifsuperviseur: this.objetifsuperviseur,
                    commentaireforsuperviseur: '',
                    date_assignationcommercial: '',
                    objectifcommercial: '',
                    commentaireforcommercial: ''
                }
            };
            this._assignationsuiviService.assignationsuperviseur(assignations)
                .subscribe(function (data) {
                _this.isEnregistrerAssignation = true;
                _this.filtreRegion = "--Choix région--";
                _this.filtreZone = "";
                _this.filtreSousZone = "-";
                _this.choixsuperviseur = "--Choix superviseur--";
                _this.objetifsuperviseur = 0;
                _this.selectSouszone();
            }, function (error) { return alert(error); }, function () { return console.log('assignationsuperviseur'); });
        }
    };
    AdmincommercialComponent.prototype.showModalSuperviseur = function (content) {
        this.userexist = false;
        this.superviseurNew = { access: 'sup', prenom: '', nom: '', login: '', pwd: '', telephone: 77 };
        this.showModal(content);
    };
    AdmincommercialComponent.prototype.getComSuperviseurs = function () {
        var _this = this;
        this._utilService.getComSuperviseurs()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.superviseurs = data.message.superviseurs;
                _this.commerciaux = data.message.commerciaux;
                _this.loading_data = false;
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () { return console.log('getComSuperviseurs'); });
    };
    AdmincommercialComponent.prototype.reaffectercommercial = function (item) {
        var _this = this;
        this._utilService.affectationCommercial(item)
            .subscribe(function (data) {
            _this.getComSuperviseurs();
        }, function (error) { return alert(error); }, function () { return console.log('affectationCommercial'); });
    };
    AdmincommercialComponent.prototype.enregisternouvsup = function () {
        var _this = this;
        this._utilService.ajoutSuperviseur(this.superviseurNew)
            .subscribe(function (data) {
            if (data.errorCode) {
                if (data.message == 'exist') {
                    _this.userexist = true;
                }
                else {
                    _this.closedModal();
                    _this.getComSuperviseurs();
                }
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    AdmincommercialComponent.prototype.getAdminCCSuiviPoints = function () {
        var _this = this;
        this._utilService.getAdminCCSuiviPoints()
            .subscribe(function (data) {
            _this.listeadminccsuivipoints = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    infosup: JSON.parse(type.infosup),
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint,
                };
            });
        }, function (error) { return alert(error); }, function () { return console.log('getAdminCCSuiviPoints'); });
    };
    AdmincommercialComponent.prototype.validresouscritsentool = function (point) {
        var _this = this;
        this._newclientService.validerSouscritSentool(point)
            .subscribe(function (data) {
            _this.listeadminccsuivipoints = _this.listeadminccsuivipoints.filter(function (opt) { return opt.id != point.id; });
        }, function (error) { return alert(error); }, function () { return console.log('validerSouscritSentool'); });
    };
    AdmincommercialComponent.prototype.validresouscritwafacash = function (point) {
        var _this = this;
        this._newclientService.validerSouscritWafacash(point)
            .subscribe(function (data) {
            _this.listeadminccsuivipoints = _this.listeadminccsuivipoints.filter(function (opt) { return opt.id != point.id; });
        }, function (error) { return alert(error); }, function () { return console.log('validerSouscritWafacash'); });
    };
    AdmincommercialComponent.prototype.validresouscritsentoolandwafacash = function (point) {
        var _this = this;
        this._newclientService.validerSouscritSentoolAndWafacash(point)
            .subscribe(function (data) {
            _this.listeadminccsuivipoints = _this.listeadminccsuivipoints.filter(function (opt) { return opt.id != point.id; });
        }, function (error) { return alert(error); }, function () { return console.log('validerSouscritWafacash'); });
    };
    AdmincommercialComponent.prototype.getPointssouscritBBS = function () {
        var _this = this;
        this._utilService.getPointssouscritBBS()
            .subscribe(function (data) {
            _this.listepointsouscrits = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    infosup: JSON.parse(type.infosup),
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint,
                    souscription: (JSON.parse(type.infosup).service_sentool == 1 && JSON.parse(type.infosup).service_wafacash == 0) ? 'SenTool' : (JSON.parse(type.infosup).service_sentool == 0 && JSON.parse(type.infosup).service_wafacash == 1) ? 'WafaCash' : (JSON.parse(type.infosup).service_sentool == 1 && JSON.parse(type.infosup).service_wafacash == 1) ? 'SenTool & WafaCash' : 'Abandonné',
                    fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                };
            });
        }, function (error) { return alert(error); }, function () { return _this.loading_data = false; });
    };
    AdmincommercialComponent.prototype.getNouveauxpoints = function () {
        var _this = this;
        this._utilService.getNouveauxpoints()
            .subscribe(function (data) {
            _this.listenewpoints = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint,
                    fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                };
            });
        }, function (error) { return alert(error); }, function () { return console.log('getNouveauxpoints'); });
    };
    AdmincommercialComponent.prototype.getPointsdeploye = function () {
        var _this = this;
        this._utilService.getPointsdeploye()
            .subscribe(function (data) {
            _this.listepointsdepoye = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adressecomplet);
                return {
                    date_ajout: type.date_ajout,
                    nom_point: type.nomentreprise,
                    nom_boutique: type.nomboutique,
                    fullname_gerant: type.prenom + " " + type.nom,
                    telephone_gerant: type.telephone,
                    adresse_point: adresse_point.adresse ? adresse_point.adresse + ',' : '' + " " + adresse_point.souszone + ", " + adresse_point.zone,
                    fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                };
            });
        }, function (error) { return alert(error); }, function () { return _this.loading_data = false; });
    };
    AdmincommercialComponent.prototype.getCommerciauxForPerformance = function () {
        var _this = this;
        this._assignationsuiviService.getCommerciauxForPerformance()
            .subscribe(function (data) {
            if (data.errorCode) {
                var dataobjectiffixe = data.message.map(function (type) {
                    return type.objectif;
                });
                var dataobjectifatteint = data.message.map(function (type) {
                    return type.atteint;
                });
                _this.barChartData = [
                    { data: dataobjectiffixe, label: 'Objectifs fixés' },
                    { data: dataobjectifatteint, label: 'Objectifs atteints' }
                ];
                _this.barChartLabels = data.message.map(function (type) {
                    return type.fullname_commercial;
                });
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () {
            _this._assignationsuiviService.getSuperviseursForPerformancetest()
                .subscribe(function (data) {
                _this.data = data.message;
                if (data.errorCode) {
                    var supervisorDataAll = _this.data;
                    var dataobjectiffixe = data.message.map(function (type) {
                        return type.objectif;
                    });
                    var dataobjectifatteint = data.message.map(function (type) {
                        return type.atteint;
                    });
                    _this.barChartDataSuperviseur = [
                        { data: dataobjectiffixe, label: 'Objectifs fixés' },
                        { data: dataobjectifatteint, label: 'Objectifs atteints' }
                    ];
                    _this.barChartLabelsSuperviseur = data.message.map(function (type) {
                        return type.prenom + ' ' + type.nom;
                    });
                    var compteuratteint = 0;
                    var compteurtotalobjectif = 0;
                    for (var _i = 0, _a = data.message; _i < _a.length; _i++) {
                        var element = _a[_i];
                        compteurtotalobjectif = compteurtotalobjectif + Number(element.objectif);
                        compteuratteint = compteuratteint + Number(element.atteint);
                    }
                    _this.doughnutChartData = [compteurtotalobjectif - compteuratteint, compteuratteint];
                }
                else {
                    _this.router.navigate(['/login']);
                }
            }, function (error) { return alert(error); }, function () {
                _this.getAdmincomsuiviPP();
            });
        });
    };
    AdmincommercialComponent.prototype.getAdmincomsuiviPP = function () {
        var _this = this;
        this._utilService.getAdmincomsuiviPP()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.doughnutChartDataPP = [
                    data.message.filter(function (opt) { return opt.service_sentool == 0 && opt.service_wafacash == 0; }).length,
                    data.message.filter(function (opt) { return opt.service_sentool == 1 && opt.service_wafacash == 0; }).length,
                    data.message.filter(function (opt) { return opt.service_sentool == 0 && opt.service_wafacash == 1; }).length,
                    data.message.filter(function (opt) { return opt.service_sentool == 1 && opt.service_wafacash == 1; }).length
                ];
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
        });
    };
    AdmincommercialComponent.prototype.getAllDemandeDepotEncours = function () {
        var _this = this;
        console.log('getAllDemandeDepotEncours');
        this._suivipositionnementService.getAllDemandeDepotEncours()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
                _this.listedepositsencours = data.message.map(function (type) {
                    return {
                        id_accepteur: -1,
                        niveau_avancement: (type.etatdemande == 0 && type.accepteur == 'attente') ? -4 : (type.etatdemande == 0 && type.accepteur != 'attente') ? -3 : type.etatdemande == 1 ? -2 : type.etatdemande == 2 ? -1 : 0,
                        datedemande: type.datedemande,
                        adressecomplet: JSON.parse(type.initiateur.adresse).address + ", " + JSON.parse(type.initiateur.adresse).souszone + ", " + JSON.parse(type.initiateur.adresse).zone,
                        montantdemande: type.montantdemande,
                        telephone: type.initiateur.telephone,
                        point: type.initiateur,
                        initiateur: type.initiateur.prenom + ' ' + type.initiateur.nom,
                        cc: JSON.parse(type.validateur).prenom + " " + JSON.parse(type.validateur).nom,
                        accepteur: type.accepteur == 'attente' ? type.accepteur : JSON.parse(type.accepteur).prenom + " " + JSON.parse(type.accepteur).nom,
                        infosup: type.infosup,
                        etatdemande: type.etatdemande,
                        tokencc: type.tokencc,
                    };
                });
            }
        }, function (error) { return alert(error); }, function () {
            _this.loading_data = false;
        });
    };
    AdmincommercialComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    return AdmincommercialComponent;
}());
AdmincommercialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admincommercial',
        template: __webpack_require__("../../../../../src/app/layout/admincommercial/admincommercial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/admincommercial/admincommercial.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__["a" /* AssignationSuiviService */], __WEBPACK_IMPORTED_MODULE_4__services_newclient_service__["a" /* NewclientService */], __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__["a" /* SuivipositionnementService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__["a" /* SuivipositionnementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_suivipositionnement_service__["a" /* SuivipositionnementService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_newclient_service__["a" /* NewclientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_newclient_service__["a" /* NewclientService */]) === "function" && _f || Object])
], AdmincommercialComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=admincommercial.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/admincommercial/admincommercial.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progressionby_progressionby_module__ = __webpack_require__("../../../../../src/app/layout/progressionby/progressionby.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ratingbyoption_ratingbyoption_module__ = __webpack_require__("../../../../../src/app/layout/ratingbyoption/ratingbyoption.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admincommercial_component__ = __webpack_require__("../../../../../src/app/layout/admincommercial/admincommercial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admincommercial_routing_module__ = __webpack_require__("../../../../../src/app/layout/admincommercial/admincommercial-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipe_data_admin_filter_pipe__ = __webpack_require__("../../../../../src/app/pipe/data-admin-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipe_zones_admin_filter_pipe__ = __webpack_require__("../../../../../src/app/pipe/zones-admin-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipe_souszones_admin_filter_pipe__ = __webpack_require__("../../../../../src/app/pipe/souszones-admin-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_progressbar__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_rating__ = __webpack_require__("../../../../ngx-bootstrap/rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filterdata_commercial_pipe__ = __webpack_require__("../../../../../src/app/layout/admincommercial/filterdata-commercial.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filterdata_newpoint_pipe__ = __webpack_require__("../../../../../src/app/layout/admincommercial/filterdata-newpoint.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincommercialModule", function() { return AdmincommercialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AdmincommercialModule = (function () {
    function AdmincommercialModule() {
    }
    return AdmincommercialModule;
}());
AdmincommercialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__admincommercial_routing_module__["a" /* AdmincommercialRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_7__progressionby_progressionby_module__["a" /* ProgressionbyModule */],
            __WEBPACK_IMPORTED_MODULE_8__ratingbyoption_ratingbyoption_module__["a" /* RatingbyoptionModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
            }),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__admincommercial_component__["a" /* AdmincommercialComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipe_data_admin_filter_pipe__["a" /* DataAdminFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipe_zones_admin_filter_pipe__["a" /* ZonesAdminFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_14__pipe_souszones_admin_filter_pipe__["a" /* SousZonesAdminFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_17__filterdata_commercial_pipe__["a" /* DataFilterCommercialPipe */],
            __WEBPACK_IMPORTED_MODULE_18__filterdata_newpoint_pipe__["a" /* DataFilterNewPointPipe */],
        ]
    })
], AdmincommercialModule);

//# sourceMappingURL=admincommercial.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/admincommercial/filterdata-commercial.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterCommercialPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterCommercialPipe = (function () {
    function DataFilterCommercialPipe() {
    }
    DataFilterCommercialPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.email.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterCommercialPipe;
}());
DataFilterCommercialPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterCommercial"
    })
], DataFilterCommercialPipe);

//# sourceMappingURL=filterdata-commercial.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/admincommercial/filterdata-newpoint.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterNewPointPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterNewPointPipe = (function () {
    function DataFilterNewPointPipe() {
    }
    DataFilterNewPointPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_commercial.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterNewPointPipe;
}());
DataFilterNewPointPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterNewPoint"
    })
], DataFilterNewPointPipe);

//# sourceMappingURL=filterdata-newpoint.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/data-admin-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataAdminFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataAdminFilterPipe = (function () {
    function DataAdminFilterPipe() {
    }
    DataAdminFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.libellepoint.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.prenom.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.nom.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.tel.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataAdminFilterPipe;
}());
DataAdminFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataAdminFilter"
    })
], DataAdminFilterPipe);

//# sourceMappingURL=data-admin-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/souszones-admin-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SousZonesAdminFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SousZonesAdminFilterPipe = (function () {
    function SousZonesAdminFilterPipe() {
    }
    SousZonesAdminFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.sous_zone.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return SousZonesAdminFilterPipe;
}());
SousZonesAdminFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "souszonesAdminFilter"
    })
], SousZonesAdminFilterPipe);

//# sourceMappingURL=souszones-admin-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/zones-admin-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonesAdminFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ZonesAdminFilterPipe = (function () {
    function ZonesAdminFilterPipe() {
    }
    ZonesAdminFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.zone.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return ZonesAdminFilterPipe;
}());
ZonesAdminFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "zonesAdminFilter"
    })
], ZonesAdminFilterPipe);

//# sourceMappingURL=zones-admin-filter.pipe.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/bar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });



// todo: number pipe
// todo: use query from progress?
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content> ",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progressbar_component__["a" /* ProgressbarComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'setBarWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.width.%',] },],
    };
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/bar.component.js");
/* unused harmony reexport BarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.component.js");
/* unused harmony reexport ProgressbarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_module__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__progressbar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_config__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.config.js");
/* unused harmony reexport ProgressbarConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/progressbar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_config__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarComponent; });



var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.prototype.addBar = function (bar) {
        bar.animate = this.animate;
        bar.striped = this.striped;
        this.bars.push(bar);
    };
    ProgressbarComponent.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar> </ng-template> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n      display: block;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progressbar_config__["a" /* ProgressbarConfig */], },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'striped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.max',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/progressbar.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarConfig; });

var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
    return ProgressbarConfig;
}());

//# sourceMappingURL=progressbar.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/progressbar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/bar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_config__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarModule; });





var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [__WEBPACK_IMPORTED_MODULE_4__progressbar_config__["a" /* ProgressbarConfig */]] };
    };
    ProgressbarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_3__progressbar_component__["a" /* ProgressbarComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_3__progressbar_component__["a" /* ProgressbarComponent */]]
                },] },
    ];
    /** @nocollapse */
    ProgressbarModule.ctorParameters = function () { return []; };
    return ProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map