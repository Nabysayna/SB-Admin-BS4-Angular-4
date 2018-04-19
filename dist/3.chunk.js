webpackJsonp([3],{

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminadministratif_component__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminadministratifRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__adminadministratif_component__["a" /* AdminadministratifComponent */] }
];
var AdminadministratifRoutingModule = (function () {
    function AdminadministratifRoutingModule() {
    }
    return AdminadministratifRoutingModule;
}());
AdminadministratifRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AdminadministratifRoutingModule);

//# sourceMappingURL=adminadministratif-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 1rem;padding-top: 1rem\">\r\n    <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead2, 'btn-success': menuHead.menuHead2}\" (click)=\"menuHeadClick(2)\" style=\"margin-bottom: 1rem;\">Status points</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead3, 'btn-success': menuHead.menuHead3}\" (click)=\"menuHeadClick(3)\" style=\"margin-bottom: 1rem;\">Points souscrits</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead6, 'btn-success': menuHead.menuHead6}\" (click)=\"menuHeadClick(6)\" style=\"margin-bottom: 1rem;\">Etat Déposit</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead7, 'btn-success': menuHead.menuHead7}\" (click)=\"menuHeadClick(7)\" style=\"margin-bottom: 1rem;\">Historique deposit</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead9, 'btn-success': menuHead.menuHead9}\" (click)=\"menuHeadClick(9)\" style=\"margin-bottom: 1rem;\">Etat positionnement</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !menuHead.menuHead1, 'btn-success': menuHead.menuHead1}\" (click)=\"menuHeadClick(1)\" style=\"margin-bottom: 1rem;\">Bilan positionnement</button>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead1\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\" row\" style=\"margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem\">\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"label-control\" for=\"datejourPositionnement\">Date par jour:</label>\r\n                    <div class=\"row\">\r\n                        <input type=\"date\" id=\"datejourPositionnement\" name=\"datejour\" [(ngModel)]=\"selectionjourPositionnement\" style=\"margin-right: 1rem\"/>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiquejourPositionnement()\" [disabled]=\"selectionjourPositionnement==undefined\" >Chercher</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"label-control\">Date par intervalle:</label>\r\n                    <div class=\"row\">\r\n                        <input type=\"date\" name=\"intervalledateinitPositionnement\" [(ngModel)]=\"selectionintervalledateinitPositionnement\"  style=\"margin-right: 0.5rem\"/> à <input type=\"date\" name=\"intervalleddatefinalPositionnement\" [(ngModel)]=\"selectionintervalleddatefinalPositionnement\"  style=\"margin-left: 0.5rem; margin-right: 1rem\" />\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiqueintervallePositionnement()\" [disabled]=\"selectionintervalledateinitPositionnement>selectionintervalleddatefinalPositionnement || selectionintervalledateinitPositionnement==undefined || selectionintervalleddatefinalPositionnement==undefined \" >Chercher</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\">\r\n                <div class=\"col-sm-1\" style=\"margin-bottom: 1rem;\">\r\n                    <button (click)=\"showModalDepotCompteBBS(contentDepotBBS)\" class=\"btn bg-info btn-sm\">Ajout Depot BBS</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\" *ngIf=\"listedepotCompteBBS.length!=0\">\r\n                <div class=\"col-sm-2\" style=\"margin-bottom: 0.5rem;\" *ngFor=\"let item of listedepotCompteBBS; let i = index \">\r\n                    <div [ngClass]=\"{'card': true, 'text-white': true, 'bg-danger': ((item.caution==0) || ((item.cautionconsomme/item.caution)<0.10)), 'bg-warning': (((item.cautionconsomme/item.caution)>=0.10) && ((item.cautionconsomme/item.caution)<0.35)), 'bg-info': (((item.cautionconsomme/item.caution)>=0.50) && ((item.cautionconsomme/item.caution)<0.75)), 'bg-success': (item.cautionconsomme/item.caution)>=0.75 }\">\r\n                        <div class=\"card-body\">\r\n                            <h6 class=\"card-title\">({{ ((item.cautionconsomme/item.caution) * 100) | number : '1.2'}}%) {{tocurrency(item.cautionconsomme)}}</h6>\r\n                            <p class=\"card-text\">{{item.nomservice}}  <i (click)=\"showModaldepotCompteBBSDetail(contentdepotCompteBBS,item)\" class=\"fa fa-search-plus pull-right\" style=\"margin-right: 1rem; cursor: pointer\" aria-hidden=\"true\"></i></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 1rem; margin-bottom: 1rem; text-align: center\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"card-header\" style=\"text-align: center\">\r\n                        <div *ngIf=\"touslesjours.length!=0 && lineChartData.length!=0 && lineChartLabels.length!=0\">\r\n                            <canvas baseChart height=\"100\" #baseChart1=\"base-chart\"\r\n                                    [datasets]=\"lineChartData\"\r\n                                    [labels]=\"lineChartLabels\"\r\n                                    [options]=\"lineChartOptions\"\r\n                                    [legend]=\"lineChartLegend\"\r\n                                    [chartType]=\"lineChartType\" ></canvas>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\" style=\"margin-bottom: 1px;\">\r\n                    <h4 class=\"card-title\" style=\"text-align: center\">Performance CC</h4>\r\n                    <table class=\"table table-hover table-sm\">\r\n                        <thead>\r\n                        <tr style=\"text-align: center\">\r\n                            <th width=\"5%\">#</th>\r\n                            <th width=\"25%\">CC</th>\r\n                            <th width=\"19%\">Promises</th>\r\n                            <th width=\"17%\">Positionnés</th>\r\n                            <th width=\"17%\">Payés</th>\r\n                            <th width=\"17%\">Versés</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr [ngStyle]=\"{'color': 'black', 'background-color': 'blue'}\">\r\n                            <td width=\"5%\">*</td>\r\n                            <td width=\"25%\" (click)=\"clickPositionnement(detailRecouvrement.promesses.list)\" style=\"cursor: pointer\">ALL</td>\r\n                            <td width=\"19%\"  class=\"bg-danger\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.promesses)\">\r\n                                    ({{tocurrency(detailRecouvrement.promesses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.promesses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-info\"  style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.positionnes)\">\r\n                                    ({{tocurrency(detailRecouvrement.positionnes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.positionnes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-warning\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.payes)\">\r\n                                    ({{tocurrency(detailRecouvrement.payes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.payes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-success\"  style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,detailRecouvrement.verses)\">\r\n                                    ({{tocurrency(detailRecouvrement.verses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(detailRecouvrement.verses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of listeBilanPositionnementCC; let i = index; let first = first; let last = last\" [ngStyle]=\"{'color': 'black', 'background-color': first?'green':last?'red':'orange'}\">\r\n                            <td width=\"5%\">{{i+1}}</td>\r\n                            <td width=\"25%\" (click)=\"clickPositionnement(item.list)\" style=\"cursor: pointer\">{{item.cc}}</td>\r\n                            <td width=\"19%\" class=\"bg-danger\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.promesses)\">\r\n                                    ({{tocurrency(item.detail.promesses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.promesses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-info\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.positionnes)\">\r\n                                    ({{tocurrency(item.detail.positionnes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.positionnes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-warning\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.payes)\">\r\n                                    ({{tocurrency(item.detail.payes.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.payes.montant)}}\r\n                                </p>\r\n                            </td>\r\n                            <td width=\"17%\" class=\"bg-success\" style=\"text-align: right\">\r\n                                <p style=\"cursor: pointer\" (click)=\"showModalBilanBilanPositionnementAllDetail(contentRecouvrementAllDetail,item.detail.verses)\">\r\n                                    ({{tocurrency(item.detail.verses.nbre)}}) <i class=\"fa fa-search-plus pull-right\" aria-hidden=\"true\"></i>\r\n                                    <br>\r\n                                    {{tocurrency(item.detail.verses.montant)}}\r\n                                </p>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead2\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listenewpoints | dataFilterNewPointAdminAdmin: filterQueryNewPoint\" #mfNewPoint=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageNewPoint\" [(mfSortBy)]=\"sortByNewPoint\" [(mfSortOrder)]=\"sortOrderNewPoint\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th colspan=\"2\" style=\"margin: 0 auto; text-align: center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryNewPoint\"/></th>\r\n                        <th>Total : {{listenewpoints.length}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfNewPoint.data; let i = index\">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td><button style=\"background-color: orange\" class=\"btn btn-sm\" (click)=\"validresouscritsentool(item,'nouveau')\" *ngIf=\"item.infosup.service_sentool==0\"><i class=\"fa fa-check\"></i> Sentool</button></td>\r\n                        <td><button style=\"background-color: yellow\" class=\"btn btn-sm\" (click)=\"validresouscritwafacash(item,'nouveau')\" *ngIf=\"item.infosup.service_wafacash==0\"><i class=\"fa fa-check\"></i> Wafacash</button></td>\r\n                        <td><button style=\"background-color: green\" class=\"btn btn-sm\" (click)=\"validresouscritsentoolandwafacash(item,'nouveau')\" *ngIf=\"item.infosup.service_sentool==0 && item.infosup.service_wafacash==0\"><i class=\"fa fa-check\"></i> Sen & Wafa</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead3\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listepointsouscritbbs | dataFilterNewPointAdminAdmin: filterQueryPointSouscription\" #mfPointSouscription=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPagePointSouscription\" [(mfSortBy)]=\"sortByPointSouscription\" [(mfSortOrder)]=\"sortOrderPointSouscription\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"date_ajout\">Date ajout</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"nom_point\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname_gerant\">Client</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone_gerant\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse_point\">Adresse</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"souscription\">Souscription</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryPointSouscription\"/></th>\r\n                        <th>Total : {{listepointsouscritbbs.length}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"8\">\r\n                            <div style=\"color: black; text-align: center; font-size: larger;\">\r\n                                <!--<span style=\"background-color: blue;\"> Pas encore </span>&nbsp;&nbsp;-->\r\n                                <span style=\"background-color: orange;\"> Sentool </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: yellow;\"> Wafacash </span>&nbsp;&nbsp;\r\n                                <span style=\"background-color: green;\"> Sentool et Wafacash </span>\r\n                                <br/>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfPointSouscription.data; let i = index\" [ngStyle]=\"{'color': 'white', 'background-color': (item.infosup.service_sentool==1 && item.infosup.service_wafacash==0)?'orange':(item.infosup.service_sentool==0 && item.infosup.service_wafacash==1)?'yellow':'green'}\">\r\n                        <td>{{item.date_ajout}}</td>\r\n                        <td>{{item.nom_point}}</td>\r\n                        <td>{{item.fullname_gerant}}</td>\r\n                        <td>{{item.telephone_gerant}}</td>\r\n                        <td>{{item.adresse_point}}</td>\r\n                        <td>{{item.souscription}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead6\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\" [mfData]=\"listeetatdeposit | dataFilterAdminadministratifEtat: filterQueryEtatDeposit\" #mfEtatDeposit=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageEtatDeposit\" [(mfSortBy)]=\"sortByEtatDeposit\" [(mfSortOrder)]=\"sortOrderEtatDeposit\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th><mfDefaultSorter by=\"point\">Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"superviseur\">Superviseur</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"last_deposit\">Dernier dépot</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"date_update\">Date dépot</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"montantactuel\">Déposit restant</mfDefaultSorter></th>\r\n                        <th>Option</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryEtatDeposit\"/></th>\r\n                        <th>Total : {{listeetatdeposit.length}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"6\">\r\n                            <div style=\"color: black; text-align: center;\">\r\n                                <span style=\"background-color: blue; color: black; text-align: center\"> pas déposit </span>&nbsp;\r\n                                <span style=\"background-color: red; color: black; text-align: center ;\"> déposit &lsaquo; 25% </span>&nbsp;\r\n                                <span style=\"background-color: orange; color: black; text-align: center;\"> 25% déposit 50% </span>&nbsp;\r\n                                <span style=\"background-color: green; color: black; text-align: center\"> déposit &rsaquo; 50% </span>\r\n                                <br/>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfEtatDeposit.data; let i = index \" [ngStyle]=\"{'color': 'black', 'background-color': item.last_deposit==0?'blue':((100*item.montantactuel)/item.last_deposit)<25?'red':((100*item.montantactuel)/item.last_deposit)>=25 && ((100*item.montantactuel)/item.last_deposit)<=50?'orange':'green'}\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.point}}</td>\r\n                        <td>{{item.superviseur}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td style=\"text-align: right\">{{tocurrency(item.last_deposit)}}</td>\r\n                        <td>{{item.date_update}}</td>\r\n                        <td style=\"text-align: right\">{{tocurrency(item.montantactuel)}}</td>\r\n                        <td style=\"text-align: right\"><button (click)=\"showModalFaireUnDepot(contentValiderFaireUnDepot,item)\" class=\"btn btn-primary btn-sm\">faire un depot</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead7\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\" row\" style=\"margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem\">\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"label-control\" for=\"datejour\">Date par jour:</label>\r\n                    <div class=\"row\">\r\n                        <input type=\"date\" id=\"datejour\" name=\"datejour\" [(ngModel)]=\"selectionjour\" style=\"margin-right: 1rem\"/>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiquejourDepositCaution()\" [disabled]=\"selectionjour==undefined\" >Chercher</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"label-control\">Date par intervalle:</label>\r\n                    <div class=\"row\">\r\n                        <input type=\"date\" name=\"intervalledateinit\" [(ngModel)]=\"selectionintervalledateinit\"  style=\"margin-right: 0.5rem\"/> à <input type=\"date\" name=\"intervalleddatefinal\" [(ngModel)]=\"selectionintervalleddatefinal\"  style=\"margin-left: 0.5rem; margin-right: 1rem\" />\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"historiqueintervalleDepositCaution()\" [disabled]=\"selectionintervalledateinit>selectionintervalleddatefinal || selectionintervalledateinit==undefined || selectionintervalleddatefinal==undefined \" >Chercher</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <table class=\"table table-hover table-responsive\" [mfData]=\"listebilandeposit | dataFilterAdminadministratifBilan: filterQueryBilanDeposit\" #mfBilanDeposit=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageBilanDeposit\" [(mfSortBy)]=\"sortByBilanDeposit\" [(mfSortOrder)]=\"sortOrderBilanDeposit\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th><mfDefaultSorter by=\"point\">Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"superviseur\">Superviseur</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"montant\">Montant dépot</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"date_update\">Date dépot</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"maj_by\">Validé par</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryBilanDeposit\"/></th>\r\n                        <th>Nombre Total: {{listebilandeposit.length}} Déposits</th>\r\n                        <th>Montant Total: {{tocurrency(totaldeposit)}} FCFA.</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mfBilanDeposit.data; let i = index \">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.point}}</td>\r\n                        <td>{{item.superviseur}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td style=\"text-align: right\">{{tocurrency(item.montant)}}</td>\r\n                        <td>{{item.date_update}}</td>\r\n                        <td>{{item.maj_by}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"menuHead.menuHead9\" >\r\n    <recouvrement-demandedepot></recouvrement-demandedepot>\r\n</div>\r\n\r\n<ng-template #contentDepotBBS let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Crediter compte BBS</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"typeservice\">Type service</label>\r\n                        <select class=\"form-control input-sm\" id=\"typeservice\" name=\"typeservice\" [(ngModel)]=\"typeservice\" >\r\n                            <option *ngFor=\"let item of getListeServiceBBS\">{{item.nomservice}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label for=\"montanttypeservice\">Monatnt versé</label>\r\n                    <input type=\"number\" min=\"0\" class=\"form-control\" id=\"montanttypeservice\" name=\"montanttypeservice\" [(ngModel)]=\"montanttypeservice\" placeholder=\"somme verser\"  required>\r\n                </div>\r\n                <div class=\"col-sm-3\"><br><br>{{tocurrency(montanttypeservice)}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!typeservice || montanttypeservice<1 || montanttypeservice==undefined\" (click)=\"valideDepotCompteBBS()\">Valider</button><button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Annuler</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentdepotCompteBBS let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" >\r\n        <div class=\"modal-header\">\r\n            <!--<h4 class=\"modal-title pull-left\">Historique depotCompteBBS pour {{bilandepotCompteBBS.type | uppercase}}</h4>-->\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-hover table-sm\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Date depot</th>\r\n                    <th>Montant</th>\r\n                </tr>\r\n                </thead>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentRecouvrementAllDetail let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" *ngIf=\"bilanPositionnementAllDetail\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Historique recouvrements pour {{bilanPositionnementAllDetail.type | uppercase}}</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-hover table-sm\">\r\n                <thead>\r\n                <tr>\r\n                    <th>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='promesses'\">Date demande</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='positionnes'\">Date positionnement</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='payes'\">Date payement</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='verses'\">Date versement</span>\r\n                    </th>\r\n                    <th>Point</th>\r\n                    <th>Téléphone</th>\r\n                    <th>Demandé</th>\r\n                    <th>Positionné</th>\r\n                    <th>Payé</th>\r\n                    <th>Versé</th>\r\n                    <th>Agent</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of bilanPositionnementAllDetail.list; let i = index\" [ngStyle]=\"{'color': 'black', 'background-color': (item.recouvre_by=='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'red':(item.recouvre_by!='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'orange':(item.etatpositionnement==0 || item.etatpayement==0 || item.etatversement==0)?'yellow':'green'}\">\r\n                    <td>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='promesses'\">{{item.datedemande}}</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='positionnes'\">{{item.positionne_at}}</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='payes'\">{{item.validpaye_at}}</span>\r\n                        <span *ngIf=\"bilanPositionnementAllDetail.type=='verses'\">{{item.validverse_at}}</span>\r\n                    </td>\r\n                    <td>{{item.point}}</td>\r\n                    <td>{{item.telephone}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.montant)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpositionnement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpayement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatversement)}}</td>\r\n                    <td style=\"text-align: right\">{{item.recouvre_by}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentRecouvrementDetailPoint let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" *ngIf=\"bilanPositionnementDetailPoint.type.length!=0\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Historique recouvrements pour {{bilanPositionnementDetailPoint.type | uppercase}}</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-hover table-sm\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Date demande</th>\r\n                    <th>Demandé</th>\r\n                    <th>CC</th>\r\n                    <th>Agent</th>\r\n                    <th>Positionné</th>\r\n                    <th>Payé</th>\r\n                    <th>Versé</th>\r\n                    <th>Reliquat</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of bilanPositionnementDetailPoint.list; let i = index\" [ngStyle]=\"{'color': 'black', 'background-color': (item.recouvre_by=='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'red':(item.recouvre_by!='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'orange':(item.etatpositionnement==0 || item.etatpayement==0 || item.etatversement==0)?'yellow':'green'}\">\r\n                    <td>{{item.datedemande}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.montant)}}</td>\r\n                    <td style=\"text-align: right\">{{item.cc}}</td>\r\n                    <td style=\"text-align: right\">{{item.recouvre_by}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpositionnement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatpayement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatversement)}}</td>\r\n                    <td style=\"text-align: right\">{{tocurrency(item.etatrestant)}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\"><span aria-hidden=\"true\">&times;</span></button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentValiderFaireUnDepot let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\" *ngIf=\"pointdemandedepot\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Faire un depot pour {{pointdemandedepot.superviseur}}</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-7\">\r\n                    <input type=\"number\" min=\"0\" class=\"form-control\" id=\"montantfairedepot\" name=\"montantfairedepot\" [(ngModel)]=\"montantfairedepot\" placeholder=\"montant dépot\"  required>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    {{tocurrency(montantfairedepot)}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"montantfairedepot<1 || montantfairedepot==undefined\" (click)=\"valideFaireUnDepot()\">Valider</button><button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Annuler</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_suivipositionnement_service__ = __webpack_require__("../../../../../src/app/services/suivipositionnement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_newclient_service__ = __webpack_require__("../../../../../src/app/services/newclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminadministratifComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminadministratifComponent = (function () {
    function AdminadministratifComponent(_suivipositionnementService, modalService, router, _utilService, _apiPlatformService, _newclientService) {
        this._suivipositionnementService = _suivipositionnementService;
        this.modalService = modalService;
        this.router = router;
        this._utilService = _utilService;
        this._apiPlatformService = _apiPlatformService;
        this._newclientService = _newclientService;
        this.loading_data = true;
        this.menuHead = { menuHead1: false, menuHead2: false, menuHead3: false, menuHead4: false, menuHead5: false, menuHead6: false, menuHead7: false, menuHead8: false, menuHead9: true };
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
        this.touslesjours = [];
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartOptions = { responsive: true };
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        /***********************************************************************************
        **********************************   PARTIE NEW POINT   ****************************
        ***********************************************************************************/
        this.rowsOnPageNewPoint = 10;
        this.sortByNewPoint = "date_ajout";
        this.sortOrderNewPoint = "desc";
        this.listenewpoints = [];
        /************************************************************************************
        ****************************  PARTIE POINT SOUSCRIT BBS  ****************************
        ************************************************************************************/
        this.rowsOnPagePointSouscription = 10;
        this.sortByPointSouscription = "date_ajout";
        this.sortOrderPointSouscription = "desc";
        this.listepointsouscritbbs = [];
        /************************************************************************************
         ***************************   PARTIE ETAT RECLAMATION   ****************************
         ***********************************************************************************/
        this.rowsOnPageReclamationsnonresolu = 10;
        this.sortByReclamationsnonresolu = "date_reclamation";
        this.sortOrderReclamationsnonresolu = "asc";
        this.listereclamationsnonresolu = [];
        /************************************************************************************
         **********************************   PARTIE ETAT DEPOSIT   COMPTABLE****************************
         ***********************************************************************************/
        this.rowsOnPageEtatDeposit = 10;
        this.sortByEtatDeposit = "date_update";
        this.sortOrderEtatDeposit = "desc";
        this.listeetatdeposit = [];
        this.rowsOnPageBilanDeposit = 10;
        this.sortByBilanDeposit = "date_update";
        this.sortOrderBilanDeposit = "desc";
        this.listebilandeposit = [];
        this.totaldeposit = 0;
        /************************************************************************************
         **********************************   PARTIE STATUS POSITIONNEMENT ****************************
         ***********************************************************************************/
        this.listestatusdeposition = [];
        /***************************************************************************************
         ********************   PARTIE Modify Point crm incomplet   ****************************
         **************************************************************************************/
        this.rowsOnPageSuiviRelequat = 25;
        this.sortBySuiviRelequat = "point";
        this.sortOrderSuiviRelequat = "asc";
        this.listesSuiviRelequat = [];
        this.bilanPositionnementDetailPoint = { type: "", list: [] };
    }
    AdminadministratifComponent.prototype.ngOnInit = function () {
        this.loading_data = true;
        this.getNouveauxpoints();
    };
    AdminadministratifComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    AdminadministratifComponent.prototype.menuHeadClick = function (option) {
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
            this.histPositionnementInit();
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
            this.getNouveauxpoints();
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
            this.getPointssouscritBBS();
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
            this.getListSuiviRelequat();
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
            this.getReclamationsNonResolu();
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
            this.getEtatDeposit();
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
            this.histDepositCautionInit();
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
            this.getListStatusDeposition();
            this.killsetinterval = setInterval(function () {
                _this.getListStatusDeposition();
                console.log('step');
            }, 10000);
        }
        if (option == 9) {
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.menuHead.menuHead9 = true;
            this.getListStatusDeposition();
            this.killsetinterval = setInterval(function () {
                _this.getListStatusDeposition();
                console.log('step');
            }, 10000);
        }
    };
    AdminadministratifComponent.prototype.showModalBilanBilanPositionnementAllDetail = function (content, item) {
        this.bilanPositionnementAllDetail = item;
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    AdminadministratifComponent.prototype.suivionepointgraphe = function (datedebut, datefin) {
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
    AdminadministratifComponent.prototype.historiquejourPositionnement = function () {
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
    AdminadministratifComponent.prototype.historiqueintervallePositionnement = function () {
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
    AdminadministratifComponent.prototype.histPositionnementInit = function () {
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
    AdminadministratifComponent.prototype.initialisation = function (datas, datedebut, datefin) {
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
    AdminadministratifComponent.prototype.clickPositionnement = function (datasGraphe) {
        this.listebilanPositionnement = datasGraphe;
        this.suivionepointgraphe(this.datedebut, this.datefin);
    };
    AdminadministratifComponent.prototype.showModalDepotCompteBBS = function (content) {
        this.typeservice = undefined;
        this.montanttypeservice = undefined;
        this.modalRef = this.modalService.open(content);
    };
    AdminadministratifComponent.prototype.showModaldepotCompteBBSDetail = function (content, item) {
        console.log(item);
        //this.modalRef = this.modalService.open(content);
    };
    AdminadministratifComponent.prototype.getDepotCompteBBS = function () {
        var _this = this;
        this._suivipositionnementService.getDepotCompteBBS({ type: this.type, infotype: this.infotypeDepotCompteBBS })
            .subscribe(function (data) {
            _this.listedepotCompteBBS = data.message;
        }, function (error) { return alert(error); }, function () {
            console.log("finish");
        });
    };
    AdminadministratifComponent.prototype.valideDepotCompteBBS = function () {
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
    AdminadministratifComponent.prototype.getNouveauxpoints = function () {
        var _this = this;
        this.loading_data = true;
        this._utilService.getNouveauxpoints()
            .subscribe(function (data) {
            _this.listenewpoints = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    infosup: JSON.parse(type.infosup),
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint,
                };
            });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log('getNouveauxpoints'); });
    };
    AdminadministratifComponent.prototype.getPointssouscritBBS = function () {
        var _this = this;
        this.loading_data = true;
        this._utilService.getPointssouscritBBS()
            .subscribe(function (data) {
            _this.listepointsouscritbbs = data.message.map(function (type) {
                var adresse_point = JSON.parse(type.adresse_point);
                return {
                    id: type.id,
                    date_ajout: type.date_ajout,
                    nom_point: type.nom_point,
                    infosup: JSON.parse(type.infosup),
                    fullname_gerant: type.prenom_gerant + " " + type.nom_gerant,
                    telephone_gerant: type.telephone_gerant,
                    adresse_point: adresse_point.adressepoint + ", " + adresse_point.souszonepoint + ", " + adresse_point.zonepoint,
                    souscription: (JSON.parse(type.infosup).service_sentool == 1 && JSON.parse(type.infosup).service_wafacash == 0) ? 'SenTool' : (JSON.parse(type.infosup).service_sentool == 0 && JSON.parse(type.infosup).service_wafacash == 1) ? 'WafaCash' : 'SenTool & WafaCash',
                };
            });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log('getPointsdeploye'); });
    };
    AdminadministratifComponent.prototype.getReclamationsNonResolu = function () {
        var _this = this;
        this.loading_data = true;
        this._apiPlatformService.getReclamationsNonResolu()
            .subscribe(function (data) {
            if (data.errorCode == 0) {
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
    AdminadministratifComponent.prototype.validresolutionreclamation = function (reclamation) {
        this._apiPlatformService.validReclamationsNonResolu(reclamation)
            .subscribe(function (data) {
            console.log('');
        }, function (error) { return alert(error); }, function () { return console.log('validReclamationsNonResolu'); });
        this.listereclamationsnonresolu = this.listereclamationsnonresolu.filter(function (opt) { return opt.id_reclamation != reclamation.id_reclamation; });
    };
    AdminadministratifComponent.prototype.getEtatDeposit = function () {
        var _this = this;
        this.loading_data = true;
        this._apiPlatformService.getEtatDeposit()
            .subscribe(function (data) {
            _this.listeetatdeposit = data.message.map(function (type) {
                return {
                    date_update: type.updater.date.split('.')[0],
                    montantactuel: Number(type.caution),
                    last_deposit: Number(type.cautiondebase),
                    superviseur: type.superviseur,
                    telephone: type.telephone,
                    point: type.infopoint ? JSON.parse(type.infopoint).nometps : '-',
                    pointFordemandeDepot: type.user
                };
            });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log('getListBilanDeposit'); });
    };
    /************************************************************************************
    ***********************   PARTIE HISTORIQUE DEPOSIT COMPTABLE ***********************
    ************************************************************************************/
    AdminadministratifComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    AdminadministratifComponent.prototype.historiquejourDepositCaution = function () {
        var _this = this;
        this.totaldeposit = 0;
        this.loading_data = true;
        this.selectionintervalledateinit = undefined;
        this.selectionintervalleddatefinal = undefined;
        this._apiPlatformService.getListBilanDepositByDate({ type: 'jour', infotype: this.selectionjour })
            .subscribe(function (data) {
            _this.listebilandeposit = data.message.map(function (type) {
                return {
                    date_update: type.daterenflu.date.split('.')[0],
                    maj_by: JSON.parse(type.updater).prenom + " " + JSON.parse(type.updater).nom,
                    montant: Number(JSON.parse(type.infotrace).montant),
                    superviseur: type.superviseur,
                    telephone: type.telephone,
                    point: JSON.parse(type.infopoint).nometps,
                };
            });
        }, function (error) { return alert(error); }, function () {
            _this.listebilandeposit.forEach(function (type) {
                _this.totaldeposit += Number(type.montant);
            });
            _this.loading_data = false;
        });
    };
    AdminadministratifComponent.prototype.historiqueintervalleDepositCaution = function () {
        var _this = this;
        this.totaldeposit = 0;
        this.loading_data = true;
        this.selectionjour = undefined;
        this._apiPlatformService.getListBilanDepositByDate({ type: 'intervalle', infotype: this.selectionintervalledateinit + " " + this.selectionintervalleddatefinal })
            .subscribe(function (data) {
            _this.listebilandeposit = data.message.map(function (type) {
                return {
                    date_update: type.daterenflu.date.split('.')[0],
                    maj_by: JSON.parse(type.updater).prenom + " " + JSON.parse(type.updater).nom,
                    montant: Number(JSON.parse(type.infotrace).montant),
                    superviseur: type.superviseur,
                    telephone: type.telephone,
                    point: JSON.parse(type.infopoint).nometps,
                };
            });
        }, function (error) { return alert(error); }, function () {
            _this.listebilandeposit.forEach(function (type) {
                _this.totaldeposit += Number(type.montant);
            });
            _this.loading_data = false;
        });
    };
    AdminadministratifComponent.prototype.histDepositCautionInit = function () {
        var _this = this;
        this.totaldeposit = 0;
        this.loading_data = true;
        this.selectionintervalledateinit = undefined;
        this.selectionintervalleddatefinal = undefined;
        var datenow = ((new Date()).toJSON()).split("T", 2)[0];
        this.selectionjour = datenow;
        this._apiPlatformService.getListBilanDepositByDate({ type: 'jour', infotype: this.selectionjour })
            .subscribe(function (data) {
            _this.listebilandeposit = data.message.map(function (type) {
                return {
                    date_update: type.daterenflu.date.split('.')[0],
                    maj_by: JSON.parse(type.updater).prenom + " " + JSON.parse(type.updater).nom,
                    montant: Number(JSON.parse(type.infotrace).montant),
                    superviseur: type.superviseur,
                    telephone: type.telephone,
                    point: JSON.parse(type.infopoint).nometps,
                };
            });
        }, function (error) { return alert(error); }, function () {
            _this.listebilandeposit.forEach(function (type) {
                _this.totaldeposit += Number(type.montant);
            });
            _this.loading_data = false;
        });
    };
    AdminadministratifComponent.prototype.closedModal = function () {
        this.modalRef.close('Close click');
    };
    AdminadministratifComponent.prototype.getListStatusDeposition = function () {
        var _this = this;
        this._apiPlatformService.getListStatusDeposition()
            .subscribe(function (data) {
            _this.listestatusdeposition = data.message.map(function (type) {
                var pointObjet = JSON.parse(type.point);
                var adressecomplet = (typeof pointObjet.adresse === 'object') ? pointObjet.adresse : JSON.parse(pointObjet.adresse);
                return {
                    id: type.id,
                    dateeffectif: type.dateeffectif,
                    recouvre_by: type.recouvre_by,
                    positionne_by: type.positionne_by,
                    montant: Number(type.montant),
                    point: pointObjet.prenom + " " + pointObjet.nom,
                    telephone: pointObjet.telephone,
                    adresse: adressecomplet.address + ", " + adressecomplet.souszone + ", " + adressecomplet.zone,
                    etatposit: type.etatpositionnement == 0 ? 'KO' : 'OK',
                    etatpayement: type.etatpayement == 0 ? "" + 0 : "".concat(type.etatpayement, " par ", type.modepayement),
                    etatversement: type.etatversement,
                };
            });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log("getListStatusDeposition"); });
    };
    AdminadministratifComponent.prototype.getListSuiviRelequat = function () {
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
    AdminadministratifComponent.prototype.showModalSuiviRelequatDetailPoint = function (content, item) {
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
    AdminadministratifComponent.prototype.showModalFaireUnDepot = function (content, item) {
        this.montantfairedepot = undefined;
        this.pointdemandedepot = item;
        this.modalRef = this.modalService.open(content);
    };
    AdminadministratifComponent.prototype.valideFaireUnDepot = function () {
        var _this = this;
        if (confirm("Confirmer la validation demande dépot")) {
            clearInterval(this.killsetinterval);
            console.log("je confirme");
            this.loading_data = true;
            this._suivipositionnementService.valideFaireUnDepot({ point: this.pointdemandedepot.pointFordemandeDepot, montant: this.montantfairedepot })
                .subscribe(function (data) {
                if (data.errorCode) {
                    _this.closedModal();
                    _this.loading_data = false;
                }
            }, function (error) { return alert(error); }, function () { return console.log("------------------------------------"); });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    return AdminadministratifComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart1"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], AdminadministratifComponent.prototype, "chart1", void 0);
AdminadministratifComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminadministratif',
        template: __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_6__services_newclient_service__["a" /* NewclientService */], __WEBPACK_IMPORTED_MODULE_7__services_apiplateform_service__["a" /* ApiPlatformService */], __WEBPACK_IMPORTED_MODULE_5__services_suivipositionnement_service__["a" /* SuivipositionnementService */]],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_suivipositionnement_service__["a" /* SuivipositionnementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_suivipositionnement_service__["a" /* SuivipositionnementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_newclient_service__["a" /* NewclientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_newclient_service__["a" /* NewclientService */]) === "function" && _g || Object])
], AdminadministratifComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=adminadministratif.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/adminadministratif.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adminadministratif_component__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adminadministratif_routing_module__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/adminadministratif-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filterdata_commercialAdminAdmin_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-commercialAdminAdmin.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filterdata_newpointAdminAdmin_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-newpointAdminAdmin.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filterdata_reclamationsnonresoluAdminAdmin_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-reclamationsnonresoluAdminAdmin.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filterdata_adminadministratif_getbilan_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getbilan.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filterdata_adminadministratif_getetat_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getetat.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filterdata_adminadministratif_getsuivipositionnement_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getsuivipositionnement.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filterdata_adminadministratif_pdvcrmincom_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-pdvcrmincom.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__recouvrement_demandedepot_recouvrement_demandedepot_component__ = __webpack_require__("../../../../../src/app/layout/recouvrement-demandedepot/recouvrement-demandedepot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__recouvrement_demandedepot_filterdata_suividemandepot_pipe__ = __webpack_require__("../../../../../src/app/layout/recouvrement-demandedepot/filterdata-suividemandepot.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filterdata_adminadministratif_getsuivipositionnementhistorique_pipe__ = __webpack_require__("../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getsuivipositionnementhistorique.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminadministratifModule", function() { return AdminadministratifModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AdminadministratifModule = (function () {
    function AdminadministratifModule() {
    }
    return AdminadministratifModule;
}());
AdminadministratifModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__adminadministratif_routing_module__["a" /* AdminadministratifRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__adminadministratif_component__["a" /* AdminadministratifComponent */],
            __WEBPACK_IMPORTED_MODULE_9__filterdata_commercialAdminAdmin_pipe__["a" /* DataFilterCommercialAdminAdminPipe */],
            __WEBPACK_IMPORTED_MODULE_10__filterdata_newpointAdminAdmin_pipe__["a" /* DataFilterNewPointAdminAdminPipe */],
            __WEBPACK_IMPORTED_MODULE_11__filterdata_reclamationsnonresoluAdminAdmin_pipe__["a" /* DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe */],
            __WEBPACK_IMPORTED_MODULE_12__filterdata_adminadministratif_getbilan_pipe__["a" /* DataFilterAdminadministratifBilanPipe */],
            __WEBPACK_IMPORTED_MODULE_13__filterdata_adminadministratif_getetat_pipe__["a" /* DataFilterAdminadministratifEtatPipe */],
            __WEBPACK_IMPORTED_MODULE_14__filterdata_adminadministratif_getsuivipositionnement_pipe__["a" /* DataFilterAdminadministratifSuivipositionnementPipe */],
            __WEBPACK_IMPORTED_MODULE_18__filterdata_adminadministratif_getsuivipositionnementhistorique_pipe__["a" /* DataFilterAdminadministratifSuivipositionnementHistoriquePipe */],
            __WEBPACK_IMPORTED_MODULE_17__recouvrement_demandedepot_filterdata_suividemandepot_pipe__["a" /* DataFilterSuiviDemandepositPipe */],
            __WEBPACK_IMPORTED_MODULE_15__filterdata_adminadministratif_pdvcrmincom_pipe__["a" /* DataFilterAdminadministratifPDVCRMINCOMPipe */],
            __WEBPACK_IMPORTED_MODULE_16__recouvrement_demandedepot_recouvrement_demandedepot_component__["a" /* RecouvrementDemandedepotComponent */],
        ]
    })
], AdminadministratifModule);

//# sourceMappingURL=adminadministratif.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getbilan.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterAdminadministratifBilanPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterAdminadministratifBilanPipe = (function () {
    function DataFilterAdminadministratifBilanPipe() {
    }
    DataFilterAdminadministratifBilanPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_update.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.superviseur.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.montant.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.maj_by.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterAdminadministratifBilanPipe;
}());
DataFilterAdminadministratifBilanPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterAdminadministratifBilan"
    })
], DataFilterAdminadministratifBilanPipe);

//# sourceMappingURL=filterdata-adminadministratif-getbilan.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getetat.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterAdminadministratifEtatPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterAdminadministratifEtatPipe = (function () {
    function DataFilterAdminadministratifEtatPipe() {
    }
    DataFilterAdminadministratifEtatPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_update.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.superviseur.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.montantactuel.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.last_deposit.toLocaleString().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterAdminadministratifEtatPipe;
}());
DataFilterAdminadministratifEtatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterAdminadministratifEtat"
    })
], DataFilterAdminadministratifEtatPipe);

//# sourceMappingURL=filterdata-adminadministratif-getetat.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getsuivipositionnement.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterAdminadministratifSuivipositionnementPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterAdminadministratifSuivipositionnementPipe = (function () {
    function DataFilterAdminadministratifSuivipositionnementPipe() {
    }
    DataFilterAdminadministratifSuivipositionnementPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.dateeffectif.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.positionne_by.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.etatposit.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.montant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.etatpayement.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.etatversement.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.recouvre_by.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterAdminadministratifSuivipositionnementPipe;
}());
DataFilterAdminadministratifSuivipositionnementPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterAdminadministratifSuivipositionnement"
    })
], DataFilterAdminadministratifSuivipositionnementPipe);

//# sourceMappingURL=filterdata-adminadministratif-getsuivipositionnement.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-getsuivipositionnementhistorique.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterAdminadministratifSuivipositionnementHistoriquePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterAdminadministratifSuivipositionnementHistoriquePipe = (function () {
    function DataFilterAdminadministratifSuivipositionnementHistoriquePipe() {
    }
    DataFilterAdminadministratifSuivipositionnementHistoriquePipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.datedemande.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.etatpositionnement.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterAdminadministratifSuivipositionnementHistoriquePipe;
}());
DataFilterAdminadministratifSuivipositionnementHistoriquePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterSuiviDemandepositHistorique"
    })
], DataFilterAdminadministratifSuivipositionnementHistoriquePipe);

//# sourceMappingURL=filterdata-adminadministratif-getsuivipositionnementhistorique.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-adminadministratif-pdvcrmincom.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterAdminadministratifPDVCRMINCOMPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterAdminadministratifPDVCRMINCOMPipe = (function () {
    function DataFilterAdminadministratifPDVCRMINCOMPipe() {
    }
    DataFilterAdminadministratifPDVCRMINCOMPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.libellepoint.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_proprietaire.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.email_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterAdminadministratifPDVCRMINCOMPipe;
}());
DataFilterAdminadministratifPDVCRMINCOMPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterAdminadministratifPDVCRMINCOM"
    })
], DataFilterAdminadministratifPDVCRMINCOMPipe);

//# sourceMappingURL=filterdata-adminadministratif-pdvcrmincom.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-commercialAdminAdmin.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterCommercialAdminAdminPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterCommercialAdminAdminPipe = (function () {
    function DataFilterCommercialAdminAdminPipe() {
    }
    DataFilterCommercialAdminAdminPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.email.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterCommercialAdminAdminPipe;
}());
DataFilterCommercialAdminAdminPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterCommercialAdminAdmin"
    })
], DataFilterCommercialAdminAdminPipe);

//# sourceMappingURL=filterdata-commercialAdminAdmin.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-newpointAdminAdmin.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterNewPointAdminAdminPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterNewPointAdminAdminPipe = (function () {
    function DataFilterNewPointAdminAdminPipe() {
    }
    DataFilterNewPointAdminAdminPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_ajout.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterNewPointAdminAdminPipe;
}());
DataFilterNewPointAdminAdminPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterNewPointAdminAdmin"
    })
], DataFilterNewPointAdminAdminPipe);

//# sourceMappingURL=filterdata-newpointAdminAdmin.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/adminadministratif/filterdata-reclamationsnonresoluAdminAdmin.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe = (function () {
    function DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe() {
    }
    DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.date_reclamation.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nomservice.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.name_caissier.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe;
}());
DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterfilterQueryReclamationsnonresoluAdminAdmin"
    })
], DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe);

//# sourceMappingURL=filterdata-reclamationsnonresoluAdminAdmin.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/recouvrement-demandedepot/filterdata-suividemandepot.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterSuiviDemandepositPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by PC on 04/10/2017.
 */ 

var DataFilterSuiviDemandepositPipe = (function () {
    function DataFilterSuiviDemandepositPipe() {
    }
    DataFilterSuiviDemandepositPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                return (row.datedemande.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.point.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.recouvre_by.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.cc.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.telephone.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.montantdemande.toLocaleString().indexOf(query.toLowerCase()) > -1 ||
                    row.etatpositionnement.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.etatpayement.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    row.etatversement.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
        return array;
    };
    return DataFilterSuiviDemandepositPipe;
}());
DataFilterSuiviDemandepositPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilterSuiviDemandeposit"
    })
], DataFilterSuiviDemandepositPipe);

//# sourceMappingURL=filterdata-suividemandepot.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/recouvrement-demandedepot/recouvrement-demandedepot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading_data\" style=\"margin-top:3rem; position: fixed; z-index: 100; width: 100%; height: 100%; vertical-align:middle; background-color: white; opacity: 0.7\">\r\n    <img src=\"assets/images/loading_1.gif\" style=\"margin-left: 50%; margin-top: 19%; max-height: 10% !important;\r\n\"/>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n        <div class=\"row\">\r\n            <table class=\"table table-hover table-responsive table-sm\" [mfData]=\"listestatusdeposition | dataFilterSuiviDemandeposit: filterQueryStatusDeposition\" #mfBilanDeposit=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPageStatusDeposition\" [(mfSortBy)]=\"sortByStatusDeposition\" [(mfSortOrder)]=\"sortOrderStatusDeposition\">\r\n                <thead>\r\n                    <tr>\r\n                        <th colspan=\"2\" width=\"10%\"><mfDefaultSorter by=\"datedemande\"> Date demande</mfDefaultSorter></th>\r\n                        <th width=\"7%\"><mfDefaultSorter by=\"montantdemande\">Promesse</mfDefaultSorter></th>\r\n                        <th width=\"10%\"><mfDefaultSorter by=\"point\">Point</mfDefaultSorter></th>\r\n                        <th width=\"10%\"><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th width=\"17%\"><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th width=\"10%\"><mfDefaultSorter by=\"cc\">CC en charge</mfDefaultSorter></th>\r\n                        <th width=\"10%\"><mfDefaultSorter by=\"recouvre_by\">Recouvrement</mfDefaultSorter></th>\r\n                        <th width=\"7%\"><mfDefaultSorter by=\"etatpositionnement\">Positionnement</mfDefaultSorter></th>\r\n                        <th width=\"7%\"><mfDefaultSorter by=\"etatpayement\">Payement</mfDefaultSorter></th>\r\n                        <th width=\"7%\"><mfDefaultSorter by=\"etatversement\">Versement</mfDefaultSorter></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"4\"> Recherche: <input class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"filterQueryStatusDeposition\"/></th>\r\n                        <th colspan=\"6\">Total : {{listestatusdeposition.length}} demandes en cours</th>\r\n                    </tr>\r\n                    <tr><br></tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of mfBilanDeposit.data; let i = index\"  [ngStyle]=\"{'color': 'black', 'background-color': (item.recouvre_by=='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'red':(item.recouvre_by!='attente' && item.etatpositionnement==0 && item.etatpayement==0 && item.etatversement==0)?'orange':(item.etatpositionnement==0 || item.etatpayement==0 || item.etatversement==0)?'yellow':'green'}\">\r\n                        <td width=\"2%\">\r\n                            <span *ngIf=\"(item.recouvre_by=='attente' && item.etatpositionnement==0 && item.etatpayement==0)\">\r\n                                <button (click)=\"annulerDemandeDepot(item.id)\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\r\n                            </span>\r\n                        </td>\r\n                        <td width=\"8%\">{{item.datedemande}}</td>\r\n                        <td style=\"text-align: right\">{{tocurrency(item.montantdemande)}}</td>\r\n                        <td>{{item.point}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}</td>\r\n                        <td>{{item.cc}}</td>\r\n                        <td style=\"text-align: right\"><span *ngIf=\"item.recouvre_by!='attente'\">{{item.recouvre_by}}</span><span *ngIf=\"item.recouvre_by=='attente'\"><button (click)=\"showModalRecouvrementDepot(contentValideRecouvrementDepot, item)\" class=\"btn btn-primary btn-sm\">Affecter</button></span></td>\r\n                        <td style=\"text-align: center\"><span *ngIf=\"item.etatpositionnement!=0\">{{tocurrency(item.etatpositionnement)}}</span><span *ngIf=\"item.etatpositionnement==0\"><button [disabled]=\"item.recouvre_by=='attente' || iam!=10\" (click)=\"showModalPositionnementDepot(contentValidePositionnerDepot, item)\" class=\"btn btn-primary btn-sm\">Effectuer</button></span></td>\r\n                        <td style=\"text-align: center\"><span *ngIf=\"item.etatpayement!=0\">{{tocurrency(item.etatpayement)}}</span><span *ngIf=\"item.etatpayement==0\"><button [disabled]=\"item.etatpositionnement==0 || iam!=8\" (click)=\"showModalPayementDepot(contentValidePayementDepot, item)\" class=\"btn btn-primary btn-sm\">Valider</button></span></td>\r\n                        <td style=\"text-align: center\"><span *ngIf=\"item.etatversement!=0\">{{tocurrency(item.etatversement)}}</span><span *ngIf=\"item.etatversement==0\"><button [disabled]=\"item.etatpayement==0 || iam!=9\" (click)=\"showModalVersementDepot(contentValideVersementDepot, item)\" class=\"btn btn-primary btn-sm\">Valider</button></span></td>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25,50,100]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #contentValideRecouvrementDepot let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Recouvrement</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"moderecouvrement\">Mode de versement</label>\r\n                        <select class=\"form-control input-sm\" id=\"moderecouvrement\" name=\"moderecouvrement\" [(ngModel)]=\"moderecouvrement\" >\r\n                            <option>Direct</option>\r\n                            <option>Bureau BBS</option>\r\n                            <option>CPS</option>\r\n                            <option>CBAO</option>\r\n                            <option>WARI</option>\r\n                            <option>Orangemoney</option>\r\n                            <option>Compense</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"moderecouvrement=='Direct'\">\r\n                <div class=\"col-sm-6\">\r\n                    <label for=\"recouvreur\">Recouvré par</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"recouvreur\" name=\"recouvreur\" [(ngModel)]=\"recouvreur\" placeholder=\"recouvreur\" required>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label for=\"recouvreur\">Téléphone recouvreur</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"phonerecouvreur\" name=\"phonerecouvreur\" [(ngModel)]=\"phonerecouvreur\" placeholder=\"Téléphone recouvreur\" required>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!moderecouvrement\" (click)=\"valideRecouvrementDepot()\">Valider</button><button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Annuler</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentValidePositionnerDepot let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Postionné depot</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-7\"><input type=\"number\" min=\"0\" class=\"form-control\" id=\"montantpositionne\" name=\"montantpositionne\" [(ngModel)]=\"montantpositionnement\" placeholder=\"montant positionné\" required></div>\r\n                <div class=\"col-sm-5\">{{tocurrency(montantpositionnement)}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"montantpositionnement<1 || montantpositionnement==undefined\" (click)=\"validePositionnementDepot()\">Valider</button><button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Annuler</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentValidePayementDepot let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Payement depot reçu</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-7\"><input type=\"number\" min=\"0\" class=\"form-control\" id=\"montantpayement\" name=\"montantpayement\" [(ngModel)]=\"montantpayement\" placeholder=\"somme payer\" required></div>\r\n                <div class=\"col-sm-5\">{{tocurrency(montantpayement)}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"montantpayement<1 || montantpayement==undefined\" (click)=\"validePayementDepot()\">Valider</button><button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Annuler</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentValideVersementDepot let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Versement depot reçu</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"moderecouvrement\">Mode versement</label>\r\n                        <select class=\"form-control input-sm\" id=\"modeversement\" name=\"modeversement\" [(ngModel)]=\"modeversement\" >\r\n                            <option>Bureau BBS</option>\r\n                            <option>CPS</option>\r\n                            <option>CBAO</option>\r\n                            <option>WARI</option>\r\n                            <option>Orangemoney</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label for=\"montantversement\">Monatnt versé</label>\r\n                    <input type=\"number\" min=\"0\" class=\"form-control\" id=\"montantversement\" name=\"montantversement\" [(ngModel)]=\"montantversement\" placeholder=\"somme verser\"  required>\r\n                </div>\r\n                <div class=\"col-sm-3\"><br><br>{{tocurrency(montantversement)}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!modeversement || montantversement<1 || montantversement==undefined\" (click)=\"valideVersementDepot()\">Valider</button><button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Annuler</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/recouvrement-demandedepot/recouvrement-demandedepot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/recouvrement-demandedepot/recouvrement-demandedepot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiplateform_service__ = __webpack_require__("../../../../../src/app/services/apiplateform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__ = __webpack_require__("../../../../../src/app/services/suivipositionnement.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecouvrementDemandedepotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecouvrementDemandedepotComponent = (function () {
    function RecouvrementDemandedepotComponent(_apiPlatformService, router, modalService, _utilService, _assignationsuiviService, _suivipositionnementService) {
        this._apiPlatformService = _apiPlatformService;
        this.router = router;
        this.modalService = modalService;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this._suivipositionnementService = _suivipositionnementService;
        this.loading_data = true;
        this.rowsOnPageStatusDeposition = 25;
        this.sortByStatusDeposition = "datedemande";
        this.sortOrderStatusDeposition = "desc";
        this.listestatusdeposition = [];
        this.recouvreurs = [];
        this.listestatusdepositionHistorique = [];
    }
    RecouvrementDemandedepotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading_data = true;
        this.getListStatusDeposition();
        this.killsetinterval = setInterval(function () {
            _this.getListStatusDeposition();
            console.log('step init');
        }, 60000);
    };
    RecouvrementDemandedepotComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.killsetinterval);
    };
    RecouvrementDemandedepotComponent.prototype.closedModal = function () {
        this.modalRef.close('Close click');
    };
    RecouvrementDemandedepotComponent.prototype.showModalRecouvrementDepot = function (content, item) {
        this.moderecouvrement = undefined;
        this.phonerecouvreur = undefined;
        this.recouvreur = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    };
    RecouvrementDemandedepotComponent.prototype.showModalPositionnementDepot = function (content, item) {
        this.montantpositionnement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    };
    RecouvrementDemandedepotComponent.prototype.showModalPayementDepot = function (content, item) {
        this.montantpayement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    };
    RecouvrementDemandedepotComponent.prototype.showModalVersementDepot = function (content, item) {
        this.modeversement = undefined;
        this.montantversement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    };
    RecouvrementDemandedepotComponent.prototype.getPersonForRecouvrement = function () {
        var _this = this;
        this._utilService.getPersonForRecouvrement()
            .subscribe(function (data) {
            if (data.errorCode) {
                _this.recouvreurs = data.message;
            }
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    RecouvrementDemandedepotComponent.prototype.getListStatusDeposition = function () {
        var _this = this;
        this._apiPlatformService.getListStatusDeposition()
            .subscribe(function (data) {
            console.log(data);
            _this.iam = data.iam.match("dev") ? 10 : data.iam.match("khady") ? 9 : data.iam.match("alioune") ? 8 : 0;
            console.log(_this.iam);
            var listestatus = data.message.map(function (type) {
                var pointObjet = JSON.parse(type.point);
                var adressecomplet = (typeof pointObjet.adresse === 'object') ? pointObjet.adresse : JSON.parse(pointObjet.adresse);
                return {
                    id: type.id,
                    datedemande: type.datedemande,
                    montantdemande: Number(type.montant),
                    point: pointObjet.prenom + " " + pointObjet.nom,
                    telephone: pointObjet.telephone,
                    adresse: adressecomplet.address + ", " + adressecomplet.souszone + ", " + adressecomplet.zone,
                    adresseonly: adressecomplet.address + ", " + adressecomplet.souszone,
                    cc: type.cc ? JSON.parse(type.cc).prenom + " " + JSON.parse(type.cc).nom : "alioune",
                    recouvre_by: type.recouvre_by ? ((type.recouvre_by != 'pas besoin') ? type.recouvre_by : type.modepayement) : "attente",
                    etatpositionnement: type.etatpositionnement ? type.etatpositionnement : 0,
                    etatpayement: type.etatpayement ? type.etatpayement : 0,
                    etatversement: type.etatversement ? type.etatversement : 0,
                    dateeffectif: type.dateeffectif ? type.dateeffectif : "attente",
                };
            });
            _this.listestatusdeposition = listestatus.filter(function (opt) { return opt.datedemande && (opt.etatversement == 0 || opt.etatpayement == 0 || opt.etatpositionnement == 0); });
            _this.listestatusdepositionHistorique = listestatus.filter(function (opt) { return (opt.datedemande && Number(opt.etatversement) != 0 && Number(opt.etatpayement) != 0 && Number(opt.etatpositionnement) != 0); });
            _this.loading_data = false;
        }, function (error) { return alert(error); }, function () {
            if (_this.recouvreurs.length == 0) {
                _this.getPersonForRecouvrement();
            }
        });
    };
    RecouvrementDemandedepotComponent.prototype.valideRecouvrementDepot = function () {
        var _this = this;
        if (this.moderecouvrement.toLocaleString() != 'Direct')
            this.recouvreur = "pas besoin";
        if (confirm("Confirmer la validation du Positionnement dépot")) {
            clearInterval(this.killsetinterval);
            console.log("je confirme");
            this.loading_data = true;
            this._suivipositionnementService.valideRecouvrementDepot({ id: this.statusdoneeposition.id, moderecouvrement: this.moderecouvrement, recouvreur: this.recouvreur, phonerecouvreur: this.phonerecouvreur, montantrecouvrement: this.statusdoneeposition.montantdemande, adresserecouvrement: this.statusdoneeposition.adresseonly, pointrecouvrement: this.statusdoneeposition.point, pointphonerecouvrement: this.statusdoneeposition.telephone })
                .subscribe(function (data) {
                if (data.errorCode) {
                    _this.closedModal();
                    _this.loading_data = false;
                }
            }, function (error) { return alert(error); }, function () {
                _this.getListStatusDeposition();
                _this.killsetinterval = setInterval(function () {
                    _this.getListStatusDeposition();
                    console.log('step');
                }, 60000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    RecouvrementDemandedepotComponent.prototype.validePositionnementDepot = function () {
        var _this = this;
        if (confirm("Confirmer la validation du Positionnement dépot")) {
            clearInterval(this.killsetinterval);
            console.log("je confirme");
            this.loading_data = true;
            this._suivipositionnementService.validePositionnementDepot({ id: this.statusdoneeposition.id, montantpositionnement: this.montantpositionnement })
                .subscribe(function (data) {
                if (data.errorCode) {
                    _this.closedModal();
                    _this.loading_data = false;
                }
            }, function (error) { return alert(error); }, function () {
                console.log("------------------------------------");
                _this.getListStatusDeposition();
                _this.killsetinterval = setInterval(function () {
                    _this.getListStatusDeposition();
                    console.log('step');
                }, 60000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    RecouvrementDemandedepotComponent.prototype.validePayementDepot = function () {
        var _this = this;
        if (confirm("Confirmer la validation du payement dépot")) {
            clearInterval(this.killsetinterval);
            console.log("je confirme");
            this.loading_data = true;
            this._suivipositionnementService.validePayementDepot({ id: this.statusdoneeposition.id, montantpayement: this.montantpayement })
                .subscribe(function (data) {
                if (data.errorCode) {
                    _this.closedModal();
                    _this.loading_data = false;
                }
            }, function (error) { return alert(error); }, function () {
                _this.getListStatusDeposition();
                _this.killsetinterval = setInterval(function () {
                    _this.getListStatusDeposition();
                    console.log('step');
                }, 60000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    RecouvrementDemandedepotComponent.prototype.valideVersementDepot = function () {
        var _this = this;
        clearInterval(this.killsetinterval);
        if (confirm("Confirmer la validation du versement dépot")) {
            console.log("je confirme");
            this.loading_data = true;
            this._suivipositionnementService.valideVersementDepot({ id: this.statusdoneeposition.id, montantversement: this.montantversement, modeversement: this.modeversement })
                .subscribe(function (data) {
                if (data.errorCode) {
                    _this.closedModal();
                    _this.loading_data = false;
                }
            }, function (error) { return alert(error); }, function () {
                _this.getListStatusDeposition();
                _this.killsetinterval = setInterval(function () {
                    _this.getListStatusDeposition();
                    console.log('step');
                }, 60000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    RecouvrementDemandedepotComponent.prototype.annulerDemandeDepot = function (id) {
        var _this = this;
        clearInterval(this.killsetinterval);
        if (confirm("Confirmer annulation dépot")) {
            console.log("je confirme");
            this.loading_data = true;
            this._suivipositionnementService.annulerDemandeDepot({ id: id })
                .subscribe(function (data) {
                if (data.errorCode) {
                    _this.loading_data = false;
                }
            }, function (error) { return alert(error); }, function () {
                _this.getListStatusDeposition();
                _this.killsetinterval = setInterval(function () {
                    _this.getListStatusDeposition();
                    console.log('step');
                }, 60000);
            });
        }
        else {
            console.log("Je ne confirme pas");
        }
    };
    RecouvrementDemandedepotComponent.prototype.tocurrency = function (number) {
        return Number(number).toLocaleString();
    };
    return RecouvrementDemandedepotComponent;
}());
RecouvrementDemandedepotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'recouvrement-demandedepot',
        template: __webpack_require__("../../../../../src/app/layout/recouvrement-demandedepot/recouvrement-demandedepot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/recouvrement-demandedepot/recouvrement-demandedepot.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_4__services_assignation_suivi_service__["a" /* AssignationSuiviService */], __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_apiplateform_service__["a" /* ApiPlatformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_apiplateform_service__["a" /* ApiPlatformService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_suivipositionnement_service__["a" /* SuivipositionnementService */]) === "function" && _f || Object])
], RecouvrementDemandedepotComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=recouvrement-demandedepot.component.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map