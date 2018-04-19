webpackJsonp([2],{

/***/ "../../../../../src/app/layout/managerstock/data-filter.pipe.ts":
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

/***/ "../../../../../src/app/layout/managerstock/managerstock-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managerstock_component__ = __webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerstockRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__managerstock_component__["a" /* ManagerstockComponent */] }
];
var ManagerstockRoutingModule = (function () {
    function ManagerstockRoutingModule() {
    }
    return ManagerstockRoutingModule;
}());
ManagerstockRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ManagerstockRoutingModule);

//# sourceMappingURL=managerstock-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <ul class=\"nav nav-tabs  justify-content-center\" style=\"text-align: center; margin: 0 auto\">\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[0]}\" (click)=\"menustockClick(0)\">Vitrine 1</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[1]}\" (click)=\"menustockClick(1)\">Vitrine 2</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[2]}\" (click)=\"menustockClick(2)\">Vitrine 3</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[3]}\" (click)=\"menustockClick(3)\">Vitrine 4</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[4]}\" (click)=\"menustockClick(4)\">Slide 1</a></li>\r\n        <li class=\"nav-item\"><a [ngClass]=\"{'nav-link': true, 'active': menustock[5]}\" (click)=\"menustockClick(5)\">Slide 2</a></li>\r\n    </ul>\r\n <!--  ********************************************\r\n           Vitrine 1\r\n *********************************************** -->\r\n    <div class=\"page-header col-sm-10 col-lg-12 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[0]\">\r\n        <div class=\"row\" *ngIf=\"this.vitrineTarget == 'vitrine1' \">\r\n            <div  class=\"col-lg-5 col-md-5 col-sm-5\" style=\"min-height:40rem; border-right: 1px solid rgba(24, 121, 45, 0.452); border-top: 1px solid rgba(24, 121, 45, 0.452);\">\r\n                <h4 style=\"text-align:center;\">En Lignes</h4>\r\n\r\n                <div class=\"paginationVentes\">\r\n                        <span>\r\n                                <i (click)=\"ventesPrecedant()\" class=\"fa fa-angle-double-left\" ></i>\r\n                        </span>\r\n                        <span>\r\n                                <i  (click)=\"ventesSuivant()\" class=\"fa fa-angle-double-right\"></i>\r\n                        </span>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                    <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.ventes == true\">\r\n                      <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                    </div>\r\n\r\n                        <div *ngFor=\"let prod of this.vitrine.enVentes\" class=\"col-lg-6 col-md-6 col-sm-6\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templateVoir)\" >Voir</button>\r\n                                        <ng-template #templateVoir>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Informations du produit</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                               <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                               </div>\r\n                                               <div class=\"col-lg-8 col-md-8 col-sm-8\">\r\n                                                    <div>\r\n                                                        <h3>Désignation....... {{prod.designation}}</h3>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Description .........{{prod.description}}\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Prix............{{prod.prix}} .....Fcfa\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        categorie ..........{{prod.categ}}\r\n                                                     </div>\r\n                                                </div>\r\n                                             </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"openModal(templateModifier)\">Modifier</button>\r\n                                        <ng-template #templateModifier>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" id=\"image\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                                <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                                <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                          Désignation\r\n                                                                        </div>\r\n                                                                        <div class=\"col-6\">\r\n                                                                              <input  type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                        </div>\r\n\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                  Déscription\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input  type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                 Prix\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                            Catégorie\r\n                                                                          </div>\r\n                                                                         <div class=\"col-6\">\r\n                                                                              <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                         </div>\r\n                                                                  </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\" (click)=\"modifierArticle($event)\" class=\"btn btn-info btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Pageprincipale\"'>Valider</button>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == false\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"remplacerArticle($event)\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Remplacer</button>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"annulerRemplacement($event)\">Annuler</button>\r\n                                        <!-- <ng-template #templateRemplacer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Remplacer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                                    <i>\r\n                                                            <p>Souhaitez-vous vraiment remplacer le produit ? </p>\r\n                                                            <p>Si oui <b>cliquez</b> sur le bouton <button class=\"btn btn-primary btn-sm\">Oui</button>  puis sur le bouton <button class=\"btn btn-warning btn-sm\">Valider</button> du produit qui doit prendre sa place.</p>\r\n                                                            <p>Si non cliquez sur le bouton <button type=\"button\" class=\"btn info btn-sm\" >Annuler</button>.</p>\r\n                                                    </i>\r\n                                             </div>\r\n                                            <div class=\"row\" style=\"margin-top:2rem;\">\r\n                                                    <div class=\"col-lg-8 col-md-8 col-sm-8\"></div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                            <button type=\"button\" (click)=\"remplacerArticle($event)\" class=\"btn btn-primary btn-sm float-right\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                                            <button type=\"button\" class=\"btn  btn-sm float-right\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                    </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                        </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                <h4 style=\"text-align:center;\">En Attentes</h4>\r\n\r\n                <div class=\"paginationAttente\">\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-left\" (click)=\"attentesPrecedant()\" ></i>\r\n                                </span>\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-right\" (click)=\"attentesSuivant()\"></i>\r\n                                </span>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                        <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.attentes == true\">\r\n                          <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                        </div>\r\n                        <div *ngFor=\"let prod of this.vitrine.enAttentes\" class=\"col-lg-4 col-md-4 col-sm-4\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templatePlus)\">plus</button>\r\n                                        <ng-template #templatePlus>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier/Enregistrer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                             <img id=\"image\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                             <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                             <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                  <div class=\"col-6\">\r\n                                                                    Désignation\r\n                                                                  </div>\r\n                                                                  <div class=\"col-6\">\r\n                                                                        <input type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                  </div>\r\n\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                            Déscription\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                           Prix\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                        Catégorie\r\n                                                                      </div>\r\n                                                                     <div class=\"col-6\">\r\n                                                                          <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                     </div>\r\n                                                              </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                                   <button type=\"submit\"  (click)=\"modifierArticle($event)\" class=\"btn btn-primary btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Articles\"'>Enregistrer</button>\r\n                                                                   <button type=\"submit\"  (click)=\"validerArticle($event)\" class=\"btn btn-warning btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"idUser\": {{prod.idUser}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Articles\"'>Valider</button>\r\n                                                                   <button type=\"submit\"  (click)=\"openModalRejetter(templateRejetter)\" class=\"btn btn-danger btn-sm\" style=\"margin-left:1rem;\" >Rejetter</button>\r\n                                                                       <ng-template #templateRejetter>\r\n                                                                         <div class=\"modal-header\">\r\n                                                                             <h4 class=\"modal-title pull-left\">Raison du rejet</h4>\r\n                                                                             <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                                                             <span aria-hidden=\"true\">&times;</span>\r\n                                                                             </button>\r\n                                                                         </div>\r\n                                                                         <div class=\"modal-body\">\r\n                                                                             <div class=\"form-group\">\r\n                                                                                  <label for=\"exampleFormControlTextarea1\">Pourquoi le réjet  de l'article ?</label>\r\n                                                                                  <textarea class=\"form-control\" id=\"messageRejet\" rows=\"4\" #messageRejet></textarea>\r\n                                                                              </div>\r\n                                                                              <div class=\"input-group\">\r\n                                                                                   <button type=\"submit\"  (click)=\"this.modalRef.hide();\" class=\"btn btn-default btn-sm\" style=\"margin-left:1rem;\" >Annuler</button>\r\n                                                                                   <button type=\"submit\"  (click)=\"rejetterArticle($event,messageRejet)\" class=\"btn btn-warning btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"idUser\": {{prod.idUser}} ,\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Articles\"'>Valider</button>\r\n                                                                              </div>\r\n                                                                         </div>\r\n                                                                       </ng-template>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" (click)=\"validerRemplacementActicle($event)\" class=\"btn btn-warning btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": \"\", \"imgLink\": \"{{prod.imgLink}}\"'>Valider</button>\r\n                                        <!-- <ng-template #templateValider>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modal</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            This is a modal.\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"openModal(templateSupprimer)\">Supprimer</button>\r\n                                        <ng-template #templateSupprimer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Supprimer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <p>Souhaitez vous vraiment supprimer ce produit</p>\r\n                                            <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                            <button type=\"submit\" (click)=\"supprimerArticle($event)\" class=\"btn btn-danger btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                        </div>\r\n                                        </ng-template>\r\n                        </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n  <!--  ********************************************\r\n                       Vitrine 2\r\n *********************************************** -->\r\n    <div class=\"page-header col-lg-12 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[1]\" >\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !featured[0], 'btn-success': featured[0]}\" (click)=\"menu1stockClick(1,0)\" style=\"margin-bottom: 1rem\">Nouveautés</button>\r\n        <div class=\"row\" *ngIf=\"this.vitrineTarget == 'vitrine2' \">\r\n            <div  class=\"col-lg-5 col-md-5 col-sm-5\" style=\"min-height:40rem; border-right: 1px solid rgba(24, 121, 45, 0.452); border-top: 1px solid rgba(24, 121, 45, 0.452);\">\r\n                <h4 style=\"text-align:center;\">En Lignes</h4>\r\n\r\n                <div class=\"paginationVentes\">\r\n                        <span>\r\n                                <i (click)=\"ventesPrecedant()\" class=\"fa fa-angle-double-left\" ></i>\r\n                        </span>\r\n                        <span>\r\n                                <i  (click)=\"ventesSuivant()\" class=\"fa fa-angle-double-right\"></i>\r\n                        </span>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                    <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.ventes == true\">\r\n                      <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                    </div>\r\n\r\n                        <div *ngFor=\"let prod of this.vitrine.enVentes\" class=\"col-lg-6 col-md-6 col-sm-6\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templateVoir)\" >Voir</button>\r\n                                        <ng-template #templateVoir>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Informations du produit</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                               <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                               </div>\r\n                                               <div class=\"col-lg-8 col-md-8 col-sm-8\">\r\n                                                    <div>\r\n                                                        <h3>Désignation....... {{prod.designation}}</h3>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Description .........{{prod.description}}\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Prix............{{prod.prix}} .....Fcfa\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        categorie ..........{{prod.categ}}\r\n                                                     </div>\r\n                                                </div>\r\n                                             </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"openModal(templateModifier)\">Modifier</button>\r\n                                        <ng-template #templateModifier>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" id=\"image\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                                <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                                <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                          Désignation\r\n                                                                        </div>\r\n                                                                        <div class=\"col-6\">\r\n                                                                              <input  type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                        </div>\r\n\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                  Déscription\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input  type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                 Prix\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                            Catégorie\r\n                                                                          </div>\r\n                                                                         <div class=\"col-6\">\r\n                                                                              <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                         </div>\r\n                                                                  </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\" (click)=\"modifierArticle($event)\" class=\"btn btn-info btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Pageprincipale\"'>Valider</button>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == false\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"remplacerArticle($event)\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Remplacer</button>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"annulerRemplacement($event)\">Annuler</button>\r\n                                        <!-- <ng-template #templateRemplacer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Remplacer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                                    <i>\r\n                                                            <p>Souhaitez-vous vraiment remplacer le produit ? </p>\r\n                                                            <p>Si oui <b>cliquez</b> sur le bouton <button class=\"btn btn-primary btn-sm\">Oui</button>  puis sur le bouton <button class=\"btn btn-warning btn-sm\">Valider</button> du produit qui doit prendre sa place.</p>\r\n                                                            <p>Si non cliquez sur le bouton <button type=\"button\" class=\"btn info btn-sm\" >Annuler</button>.</p>\r\n                                                    </i>\r\n                                             </div>\r\n                                            <div class=\"row\" style=\"margin-top:2rem;\">\r\n                                                    <div class=\"col-lg-8 col-md-8 col-sm-8\"></div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                            <button type=\"button\" (click)=\"remplacerArticle($event)\" class=\"btn btn-primary btn-sm float-right\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                                            <button type=\"button\" class=\"btn  btn-sm float-right\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                    </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                        </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                <h4 style=\"text-align:center;\">En Attentes</h4>\r\n\r\n                <div class=\"paginationAttente\">\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-left\" (click)=\"attentesPrecedant()\" ></i>\r\n                                </span>\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-right\" (click)=\"attentesSuivant()\"></i>\r\n                                </span>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                        <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.attentes == true\">\r\n                          <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                        </div>\r\n                        <div *ngFor=\"let prod of this.vitrine.enAttentes\" class=\"col-lg-4 col-md-4 col-sm-4\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templatePlus)\">plus</button>\r\n                                        <ng-template #templatePlus>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier/Enregistrer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                             <img id=\"image\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                             <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                             <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                  <div class=\"col-6\">\r\n                                                                    Désignation\r\n                                                                  </div>\r\n                                                                  <div class=\"col-6\">\r\n                                                                        <input type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                  </div>\r\n\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                            Déscription\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                           Prix\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                        Catégorie\r\n                                                                      </div>\r\n                                                                     <div class=\"col-6\">\r\n                                                                          <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                     </div>\r\n                                                              </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                                   <button type=\"submit\"  (click)=\"modifierArticle($event)\" class=\"btn btn-primary btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Articles\"'>Enregistrer</button>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" (click)=\"validerRemplacementActicle($event)\" class=\"btn btn-warning btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": \"\", \"imgLink\": \"{{prod.imgLink}}\"'>Valider</button>\r\n                                        <!-- <ng-template #templateValider>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modal</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            This is a modal.\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"openModal(templateSupprimer)\">Supprimer</button>\r\n                                        <ng-template #templateSupprimer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Supprimer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <p>Souhaitez vous vraiment supprimer ce produit</p>\r\n                                            <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                            <button type=\"submit\" (click)=\"supprimerArticle($event)\" class=\"btn btn-danger btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                        </div>\r\n                                        </ng-template>\r\n                        </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n<!--  ********************************************\r\n           Vitrine 3\r\n *********************************************** -->\r\n    <div class=\"page-header col-sm-10 col-lg-12 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[2]\" >\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !featured[0], 'btn-success': featured[0]}\" (click)=\"menu1stockClick(2,0)\" style=\"margin-bottom: 1rem\">Meilleures Ventes</button>\r\n        <div class=\"row\" *ngIf=\"this.vitrineTarget == 'vitrine3' \">\r\n            <div  class=\"col-lg-5 col-md-5 col-sm-5\" style=\"min-height:40rem; border-right: 1px solid rgba(24, 121, 45, 0.452); border-top: 1px solid rgba(24, 121, 45, 0.452);\">\r\n                <h4 style=\"text-align:center;\">En Lignes</h4>\r\n\r\n                <div class=\"paginationVentes\">\r\n                        <span>\r\n                                <i (click)=\"ventesPrecedant()\" class=\"fa fa-angle-double-left\" ></i>\r\n                        </span>\r\n                        <span>\r\n                                <i  (click)=\"ventesSuivant()\" class=\"fa fa-angle-double-right\"></i>\r\n                        </span>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                    <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.ventes == true\">\r\n                      <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                    </div>\r\n\r\n                        <div *ngFor=\"let prod of this.vitrine.enVentes\" class=\"col-lg-6 col-md-6 col-sm-6\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templateVoir)\" >Voir</button>\r\n                                        <ng-template #templateVoir>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Informations du produit</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                               <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                               </div>\r\n                                               <div class=\"col-lg-8 col-md-8 col-sm-8\">\r\n                                                    <div>\r\n                                                        <h3>Désignation....... {{prod.designation}}</h3>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Description .........{{prod.description}}\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Prix............{{prod.prix}} .....Fcfa\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        categorie ..........{{prod.categ}}\r\n                                                     </div>\r\n                                                </div>\r\n                                             </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"openModal(templateModifier)\">Modifier</button>\r\n                                        <ng-template #templateModifier>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" id=\"image\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                                <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                                <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                          Désignation\r\n                                                                        </div>\r\n                                                                        <div class=\"col-6\">\r\n                                                                              <input  type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                        </div>\r\n\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                  Déscription\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input  type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                 Prix\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                            Catégorie\r\n                                                                          </div>\r\n                                                                         <div class=\"col-6\">\r\n                                                                              <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                         </div>\r\n                                                                  </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\" (click)=\"modifierArticle($event)\" class=\"btn btn-info btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Pageprincipale\"'>Valider</button>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == false\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"remplacerArticle($event)\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Remplacer</button>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"annulerRemplacement($event)\">Annuler</button>\r\n                                        <!-- <ng-template #templateRemplacer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Remplacer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                                    <i>\r\n                                                            <p>Souhaitez-vous vraiment remplacer le produit ? </p>\r\n                                                            <p>Si oui <b>cliquez</b> sur le bouton <button class=\"btn btn-primary btn-sm\">Oui</button>  puis sur le bouton <button class=\"btn btn-warning btn-sm\">Valider</button> du produit qui doit prendre sa place.</p>\r\n                                                            <p>Si non cliquez sur le bouton <button type=\"button\" class=\"btn info btn-sm\" >Annuler</button>.</p>\r\n                                                    </i>\r\n                                             </div>\r\n                                            <div class=\"row\" style=\"margin-top:2rem;\">\r\n                                                    <div class=\"col-lg-8 col-md-8 col-sm-8\"></div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                            <button type=\"button\" (click)=\"remplacerArticle($event)\" class=\"btn btn-primary btn-sm float-right\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                                            <button type=\"button\" class=\"btn  btn-sm float-right\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                    </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                        </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                <h4 style=\"text-align:center;\">En Attentes</h4>\r\n\r\n                <div class=\"paginationAttente\">\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-left\" (click)=\"attentesPrecedant()\" ></i>\r\n                                </span>\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-right\" (click)=\"attentesSuivant()\"></i>\r\n                                </span>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                        <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.attentes == true\">\r\n                          <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                        </div>\r\n                        <div *ngFor=\"let prod of this.vitrine.enAttentes\" class=\"col-lg-4 col-md-4 col-sm-4\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templatePlus)\">plus</button>\r\n                                        <ng-template #templatePlus>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier/Enregistrer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                             <img id=\"image\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                             <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                             <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                  <div class=\"col-6\">\r\n                                                                    Désignation\r\n                                                                  </div>\r\n                                                                  <div class=\"col-6\">\r\n                                                                        <input type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                  </div>\r\n\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                            Déscription\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                           Prix\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                        Catégorie\r\n                                                                      </div>\r\n                                                                     <div class=\"col-6\">\r\n                                                                          <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                     </div>\r\n                                                              </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                                   <button type=\"submit\"  (click)=\"modifierArticle($event)\" class=\"btn btn-primary btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Articles\"'>Enregistrer</button>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" (click)=\"validerRemplacementActicle($event)\" class=\"btn btn-warning btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": \"\", \"imgLink\": \"{{prod.imgLink}}\"'>Valider</button>\r\n                                        <!-- <ng-template #templateValider>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modal</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            This is a modal.\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"openModal(templateSupprimer)\">Supprimer</button>\r\n                                        <ng-template #templateSupprimer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Supprimer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <p>Souhaitez vous vraiment supprimer ce produit</p>\r\n                                            <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                            <button type=\"submit\" (click)=\"supprimerArticle($event)\" class=\"btn btn-danger btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                        </div>\r\n                                        </ng-template>\r\n                        </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n<!--  ********************************************\r\n           Vitrine 4\r\n *********************************************** -->\r\n    <div class=\"page-header col-sm-10 col-lg-12 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[3]\" >\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !femme[0], 'btn-success': femme[0]}\" (click)=\"menu1stockClick(3,0)\" style=\"margin-bottom: 1rem\">HABITS</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !femme[1], 'btn-success': femme[1]}\" (click)=\"menu1stockClick(3,1)\" style=\"margin-bottom: 1rem\">CHAUSSURES</button>\r\n        <button type=\"button\" [ngClass]=\"{'btn': true, 'btn-sm': true, 'btn-primary': !femme[2], 'btn-success': femme[2]}\" (click)=\"menu1stockClick(3,2)\" style=\"margin-bottom: 1rem\">SACS A MAIN</button>\r\n        <div class=\"row\" *ngIf=\"this.vitrineTarget == 'vitrine4' \">\r\n            <div  class=\"col-lg-5 col-md-5 col-sm-5\" style=\"min-height:40rem; border-right: 1px solid rgba(24, 121, 45, 0.452); border-top: 1px solid rgba(24, 121, 45, 0.452);\">\r\n                <h4 style=\"text-align:center;\">En Lignes</h4>\r\n\r\n                <div class=\"paginationVentes\">\r\n                        <span>\r\n                                <i (click)=\"ventesPrecedant()\" class=\"fa fa-angle-double-left\" ></i>\r\n                        </span>\r\n                        <span>\r\n                                <i  (click)=\"ventesSuivant()\" class=\"fa fa-angle-double-right\"></i>\r\n                        </span>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                    <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.ventes == true\">\r\n                      <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                    </div>\r\n\r\n                        <div *ngFor=\"let prod of this.vitrine.enVentes\" class=\"col-lg-6 col-md-6 col-sm-6\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templateVoir)\" >Voir</button>\r\n                                        <ng-template #templateVoir>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Informations du produit</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                               <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%; min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                               </div>\r\n                                               <div class=\"col-lg-8 col-md-8 col-sm-8\">\r\n                                                    <div>\r\n                                                        <h3>Désignation....... {{prod.designation}}</h3>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Description .........{{prod.description}}\r\n                                                    </div>\r\n                                                    <div>\r\n                                                            Prix............{{prod.prix}} .....Fcfa\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        categorie ..........{{prod.categ}}\r\n                                                     </div>\r\n                                                </div>\r\n                                             </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"openModal(templateModifier)\">Modifier</button>\r\n                                        <ng-template #templateModifier>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" id=\"image\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                                <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                                <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                          Désignation\r\n                                                                        </div>\r\n                                                                        <div class=\"col-6\">\r\n                                                                              <input  type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                        </div>\r\n\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                  Déscription\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input  type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                          <div class=\"col-6\">\r\n                                                                                 Prix\r\n                                                                           </div>\r\n                                                                          <div class=\"col-6\">\r\n                                                                               <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                          </div>\r\n                                                                   </div>\r\n\r\n                                                                   <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                        <div class=\"col-6\">\r\n                                                                            Catégorie\r\n                                                                          </div>\r\n                                                                         <div class=\"col-6\">\r\n                                                                              <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                         </div>\r\n                                                                  </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\" (click)=\"modifierArticle($event)\" class=\"btn btn-info btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Pageprincipale\"'>Valider</button>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == false\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"remplacerArticle($event)\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Remplacer</button>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"annulerRemplacement($event)\">Annuler</button>\r\n                                        <!-- <ng-template #templateRemplacer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Remplacer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                             <div class=\"row\">\r\n                                                    <i>\r\n                                                            <p>Souhaitez-vous vraiment remplacer le produit ? </p>\r\n                                                            <p>Si oui <b>cliquez</b> sur le bouton <button class=\"btn btn-primary btn-sm\">Oui</button>  puis sur le bouton <button class=\"btn btn-warning btn-sm\">Valider</button> du produit qui doit prendre sa place.</p>\r\n                                                            <p>Si non cliquez sur le bouton <button type=\"button\" class=\"btn info btn-sm\" >Annuler</button>.</p>\r\n                                                    </i>\r\n                                             </div>\r\n                                            <div class=\"row\" style=\"margin-top:2rem;\">\r\n                                                    <div class=\"col-lg-8 col-md-8 col-sm-8\"></div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                            <button type=\"button\" (click)=\"remplacerArticle($event)\" class=\"btn btn-primary btn-sm float-right\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                                            <button type=\"button\" class=\"btn  btn-sm float-right\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                    </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                        </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                <h4 style=\"text-align:center;\">En Attentes</h4>\r\n\r\n                <div class=\"paginationAttente\">\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-left\" (click)=\"attentesPrecedant()\" ></i>\r\n                                </span>\r\n                                <span>\r\n                                        <i class=\"fa fa-angle-double-right\" (click)=\"attentesSuivant()\"></i>\r\n                                </span>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-bottom:2rem;\">\r\n                        <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.attentes == true\">\r\n                          <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                        </div>\r\n                        <div *ngFor=\"let prod of this.vitrine.enAttentes\" class=\"col-lg-4 col-md-4 col-sm-4\" style=\"margin-top:1rem;\">\r\n                                <h6>{{prod.designation}}</h6>\r\n                                <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(templatePlus)\">plus</button>\r\n                                        <ng-template #templatePlus>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modifier/Enregistrer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                             <img id=\"image\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{prod.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                             <div class=\"row\" style=\"text-align:center\">\r\n                                                                        <div class=\"\">\r\n                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                             <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                  <div class=\"col-6\">\r\n                                                                    Désignation\r\n                                                                  </div>\r\n                                                                  <div class=\"col-6\">\r\n                                                                        <input type=\"text\" name=\"designation\" id=\"designation\" value=\"{{prod.designation}}\">\r\n                                                                  </div>\r\n\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                            Déscription\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"text\" name=\"description\" id=\"description\" value=\"{{prod.description}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                           Prix\r\n                                                                     </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                         <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{prod.prix}}\">\r\n                                                                    </div>\r\n                                                             </div>\r\n                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                        Catégorie\r\n                                                                      </div>\r\n                                                                     <div class=\"col-6\">\r\n                                                                          <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{prod.categ}}\">\r\n                                                                     </div>\r\n                                                              </div>\r\n                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                   <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                                   <button type=\"submit\"  (click)=\"modifierArticle($event)\" class=\"btn btn-primary btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\",\"table\": \"Articles\"'>Enregistrer</button>\r\n                                                              </div>\r\n                                                         </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                <button *ngIf=\"this.remplacerBool == true\" type=\"button\" (click)=\"validerRemplacementActicle($event)\" class=\"btn btn-warning btn-sm\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": \"\", \"imgLink\": \"{{prod.imgLink}}\"'>Valider</button>\r\n                                        <!-- <ng-template #templateValider>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Modal</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            This is a modal.\r\n                                        </div>\r\n                                        </ng-template> -->\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"openModal(templateSupprimer)\">Supprimer</button>\r\n                                        <ng-template #templateSupprimer>\r\n                                        <div class=\"modal-header\">\r\n                                            <h4 class=\"modal-title pull-left\">Supprimer</h4>\r\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <p>Souhaitez vous vraiment supprimer ce produit</p>\r\n                                            <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                            <button type=\"submit\" (click)=\"supprimerArticle($event)\" class=\"btn btn-danger btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{prod.id}},\"designation\": \"{{prod.designation}}\",\"description\":\"{{prod.description}}\",\"prix\":{{prod.prix}},\"categorie\": {{prod.categorie}}, \"imgLink\": \"{{prod.imgLink}}\"'>Oui</button>\r\n                                        </div>\r\n                                        </ng-template>\r\n                        </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--  ********************************************\r\n          Slide 1\r\n *********************************************** -->\r\n    <div class=\"page-header col-sm-10 col-lg-12 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[4]\">\r\n\r\n        <div class=\"row\" style=\"margin-top:2rem;\" *ngIf=\"this.vitrineTarget == 'slide1' \" >\r\n                 <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.ventes == true\">\r\n                        <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                 </div>\r\n                 <div class=\"col-lg-1 col-md-1 col-sm-2 \" ></div>\r\n                 <div class=\"col-lg-7 col-md-7 col-sm-7 \" style=\"border-right: 1px solid blue;padding-right:8%;\">\r\n                                <carousel >\r\n                                                <slide style=\"width:100%;\" *ngFor=\"let slid of  this.vitrine.enVentes\">\r\n                                                   <img style=\"display: block; max-width:40rem;min-width:40rem; min-height:25rem; max-height:25rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" alt=\"First slide\" >\r\n                                                </slide>\r\n\r\n                                </carousel>\r\n                 </div>\r\n                 <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                         <div class=\"row\">\r\n\r\n                                <div class=\"col-lg-6 col-md-6 col-sm-6\" style=\"margin-bottom:1rem;\" *ngFor=\"let slid of  this.vitrine.enVentes\">\r\n                                        <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%;  min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"openModalSlide(templateModifier)\">modifier</button>\r\n                                                <ng-template #templateModifier>\r\n                                                        <div class=\"modal-header\">\r\n                                                                        <h4 class=\"modal-title pull-left\">Modification</h4>\r\n                                                                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                                                        <span aria-hidden=\"true\">&times;</span>\r\n                                                                        </button>\r\n                                                        </div>\r\n                                                        <div class=\"modal-body\">\r\n                                                                        <div class=\"row\">\r\n                                                                                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                                                <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                                                             <img id=\"image\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                                                             <div class=\"row\" style=\"text-align:center\">\r\n                                                                                                        <div class=\"\">\r\n                                                                                                                <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                                                <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                                                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                                                </div>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                        <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                                                        <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                                                             <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                                                  <div class=\"col-6\">\r\n                                                                                                    Désignation\r\n                                                                                                  </div>\r\n                                                                                                  <div class=\"col-6\">\r\n                                                                                                        <input type=\"text\" name=\"designation\" id=\"designation\" value=\"{{slid.designation}}\">\r\n                                                                                                  </div>\r\n\r\n                                                                                             </div>\r\n                                                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                    <div class=\"col-6\">\r\n                                                                                                            Déscription\r\n                                                                                                     </div>\r\n                                                                                                    <div class=\"col-6\">\r\n                                                                                                         <input type=\"text\" name=\"description\" id=\"description\" value=\"{{slid.description}}\">\r\n                                                                                                    </div>\r\n                                                                                             </div>\r\n                                                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                    <div class=\"col-6\">\r\n                                                                                                           Prix\r\n                                                                                                     </div>\r\n                                                                                                    <div class=\"col-6\">\r\n                                                                                                         <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{slid.prix}}\">\r\n                                                                                                    </div>\r\n                                                                                             </div>\r\n                                                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                    <div class=\"col-6\">\r\n                                                                                                        Catégorie\r\n                                                                                                      </div>\r\n                                                                                                     <div class=\"col-6\">\r\n                                                                                                          <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{slid.categ}}\">\r\n                                                                                                     </div>\r\n                                                                                              </div>\r\n                                                                                              <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                   <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                                                                   <button type=\"submit\"  (click)=\"modifierArticle($event)\" class=\"btn btn-primary btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{slid.id}},\"designation\": \"{{slid.designation}}\",\"description\":\"{{slid.description}}\",\"prix\":{{slid.prix}},\"categorie\": \"{{slid.categ}}\", \"imgLink\": \"{{slid.imgLink}}\",\"table\": \"Pageprincipale\"'>Enregistrer</button>\r\n                                                                                              </div>\r\n                                                                                         </div>\r\n                                                                                </div>\r\n                                                        </div>\r\n                                                </ng-template>\r\n                                </div>\r\n                         </div>\r\n                  </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n        <!--  ********************************************\r\n          Slide 2\r\n *********************************************** -->\r\n    <div class=\"page-header  col-lg-12 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\"  style=\"padding-top: 1rem ; margin-bottom: 1rem\" *ngIf=\"menustock[5]\">\r\n                <div class=\"row\" style=\"margin-top:2rem;\" *ngIf=\"this.vitrineTarget == 'slide2' \" >\r\n                                <div class=\"fa-3x col-lg-12 col-md-12 col-sm-12\" *ngIf=\"requestInload.ventes == true\">\r\n                                       <i class=\"fa fa-spinner fa-pulse\"></i>\r\n                                </div>\r\n                                <div class=\"col-lg-1 col-md-1 col-sm-2 \" ></div>\r\n                                <div class=\"col-lg-7 col-md-7 col-sm-7 \" style=\"border-right: 1px solid blue;padding-right:8%;\">\r\n                                               <carousel >\r\n                                                               <slide style=\"width:100%;\" *ngFor=\"let slid of  this.vitrine.enVentes\">\r\n                                                                  <img style=\"display: block; max-width:40rem;min-width:40rem; min-height:25rem; max-height:25rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" alt=\"First slide\" >\r\n                                                               </slide>\r\n\r\n                                               </carousel>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                        <div class=\"row\">\r\n\r\n                                               <div class=\"col-lg-6 col-md-6 col-sm-6\" style=\"margin-bottom:1rem;\" *ngFor=\"let slid of  this.vitrine.enVentes\">\r\n                                                       <img src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%;  min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                       <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"openModalSlide(templateModifier)\">modifier</button>\r\n                                                               <ng-template #templateModifier>\r\n                                                                       <div class=\"modal-header\">\r\n                                                                                       <h4 class=\"modal-title pull-left\">Modification</h4>\r\n                                                                                       <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                                                                       <span aria-hidden=\"true\">&times;</span>\r\n                                                                                       </button>\r\n                                                                       </div>\r\n                                                                       <div class=\"modal-body\">\r\n                                                                                       <div class=\"row\">\r\n                                                                                                       <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                                                                               <a href=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" download=\"\" id=\"telecharger\"><button  type=\"submit\" class=\"btn btn-warning btn-sm\" style=\"width:100%; margin-bottom:1rem;\" >Télécharger</button></a>\r\n                                                                                                            <img id=\"image\" src=\"http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/uploads/{{slid.imgLink}}\" alt=\"\" style=\"max-width:100%;min-width:100%; min-height:10rem; max-height:10rem; border: 2px solid red; border-radius:10px; margin-bottom:3px;\">\r\n                                                                                                            <div class=\"row\" style=\"text-align:center\">\r\n                                                                                                                       <div class=\"\">\r\n                                                                                                                               <div><input type=\"file\" name=\"\" id=\"inputFile\" style=\"margin-top:1rem; background-color:#5bc0de;\" (change)=\"uploadFile($event)\" placeholder=\"Uploader Image\" accept=\".png,.jpg\"></div>\r\n                                                                                                                               <div class=\"progress\" style=\"margin-top:2rem;\">\r\n                                                                                                                                       <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                                                                                               </div>\r\n                                                                                                                       </div>\r\n                                                                                                               </div>\r\n                                                                                                       </div>\r\n                                                                                                       <div class=\"col-lg-1 col-md-1 col-sm-1\"></div>\r\n                                                                                                       <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n                                                                                                            <div class=\"row\" style=\"margin-top:1rem;\">\r\n                                                                                                                 <div class=\"col-6\">\r\n                                                                                                                   Désignation\r\n                                                                                                                 </div>\r\n                                                                                                                 <div class=\"col-6\">\r\n                                                                                                                       <input type=\"text\" name=\"designation\" id=\"designation\" value=\"{{slid.designation}}\">\r\n                                                                                                                 </div>\r\n\r\n                                                                                                            </div>\r\n                                                                                                            <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                                   <div class=\"col-6\">\r\n                                                                                                                           Déscription\r\n                                                                                                                    </div>\r\n                                                                                                                   <div class=\"col-6\">\r\n                                                                                                                        <input type=\"text\" name=\"description\" id=\"description\" value=\"{{slid.description}}\">\r\n                                                                                                                   </div>\r\n                                                                                                            </div>\r\n                                                                                                            <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                                   <div class=\"col-6\">\r\n                                                                                                                          Prix\r\n                                                                                                                    </div>\r\n                                                                                                                   <div class=\"col-6\">\r\n                                                                                                                        <input type=\"number\" name=\"prix\" id=\"prix\" value=\"{{slid.prix}}\">\r\n                                                                                                                   </div>\r\n                                                                                                            </div>\r\n                                                                                                            <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                                   <div class=\"col-6\">\r\n                                                                                                                       Catégorie\r\n                                                                                                                     </div>\r\n                                                                                                                    <div class=\"col-6\">\r\n                                                                                                                         <input type=\"text\" name=\"categorie\" id=\"categorie\" value=\"{{slid.categ}}\">\r\n                                                                                                                    </div>\r\n                                                                                                             </div>\r\n                                                                                                             <div class=\"row\"  style=\"margin-top:1rem;\">\r\n                                                                                                                  <button type=\"submit\"  class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\">Annuler</button>\r\n                                                                                                                  <button type=\"submit\"  (click)=\"modifierArticle($event)\" class=\"btn btn-primary btn-sm\" style=\"margin-left:1rem;\" id= ' \"id\": {{slid.id}},\"designation\": \"{{slid.designation}}\",\"description\":\"{{slid.description}}\",\"prix\":{{slid.prix}},\"categorie\": \"{{slid.categ}}\", \"imgLink\": \"{{slid.imgLink}}\",\"table\": \"Pageprincipale\"'>Enregistrer</button>\r\n                                                                                                             </div>\r\n                                                                                                        </div>\r\n                                                                                               </div>\r\n                                                                       </div>\r\n                                                               </ng-template>\r\n                                               </div>\r\n                                        </div>\r\n                                 </div>\r\n                       </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"appliquerTout row\" *ngIf=\"toutChanger==true;\">\r\n        <div col-lg-6>\r\n                <button class=\"btn btn-default\" (click)=\"toutAnnulerFunc()\" >Tout Annuler</button>\r\n        </div>\r\n        <div col-lg-6>\r\n                <button class=\"btn btn-danger\" (click)=\"toutChangerFunc()\">Tout Appliquer</button>\r\n         </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".appliquerTout {\n  position: fixed;\n  top: 8rem;\n  left: 35%;\n  width: 20rem;\n  background-color: #222;\n  color: white; }\n\n.appliquerTout div {\n  margin-left: 1rem; }\n\n.paginationVentes, .paginationAttente {\n  position: absolute;\n  top: 0;\n  right: 1rem; }\n  .paginationVentes i, .paginationAttente i {\n    cursor: pointer;\n    color: rgba(0, 0, 255, 0.61);\n    font-size: 50px; }\n  .paginationVentes span, .paginationAttente span {\n    margin-left: 1rem;\n    border: 1px solid #F100; }\n\ninput {\n  border: 1px solid #ff9100;\n  padding-left: 0.2rem;\n  font-size: small;\n  color: #1071b7; }\n\ninput:focus {\n  border: 1px solid #1071b7 !important;\n  color: #ff9100 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_managerstock_service__ = __webpack_require__("../../../../../src/app/services/managerstock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerstockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*HttpClient */

var ManagerstockComponent = (function () {
    function ManagerstockComponent(modalService, managerservice, http) {
        this.modalService = modalService;
        this.managerservice = managerservice;
        this.http = http;
        this.data = [];
        this.src = 'http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/';
        this.percentDone = 0;
        // inbformation sur
        this.modifier = [];
        this.remplacer = [];
        this.supprimer = [];
        this.rejetter = [];
        this.valider = [];
        this.remplacerBool = false;
        this.toutChanger = false;
        this.cursor = { ventes: 4, attentes: 0 };
        this.ventes = [];
        this.attentes = [];
        this.requestInload = { ventes: true, attentes: true };
        this.vitrineTarget = 'vitrine1';
        this.listarticlesvuweb = [
            { id: 1, designation: 'web 1', nomImg: 'bb.jpg' },
            { id: 2, designation: 'web 2', nomImg: 'mc.jpg' },
            { id: 3, designation: 'web 3', nomImg: 'bbb.jpg' },
            { id: 4, designation: 'web 4', nomImg: 'fs.jpg' },
            { id: 5, designation: 'web 5', nomImg: 'bbb.jpg' },
        ];
        this.listarticlesfrompv = [
            { id: 1, designation: 'as', description: 'test 1', nomImg: 'bfa.jpg' },
            { id: 2, designation: 'az', description: 'test 1', nomImg: 'hs.jpg' },
            { id: 3, designation: 'ae', description: 'test 1', nomImg: 'nf.jpg' },
            { id: 4, designation: 'ar', description: 'test 1', nomImg: 'n.jpg' },
            { id: 5, designation: 'at', description: 'test 1', nomImg: 'bea.jpg' },
            { id: 6, designation: 'ay', description: 'test 1', nomImg: 'bha.jpg' },
        ];
        this.vitrine = { enVentes: [], enAttentes: [] };
        this.vitrine1 = { enVentes: [], enAttentes: [] };
        this.vitrine2 = { enVentes: [], enAttentes: [] };
        this.vitrine3 = { enVentes: [], enAttentes: [] };
        this.vitrine4 = { enVentes: [], enAttentes: [] };
        this.slide1 = [
            { id: 1, imgLink: '../../../assets/images/linux.jpg', designation: 'mangue', description: 'je suis dans un champ de mangue', prix: 50, categorie: 'fruits' },
            { id: 2, imgLink: '../../../assets/images/verte.jpg', designation: 'mangue', description: 'je suis dans un champ de mangue', prix: 50, categorie: 'fruits' },
            { id: 3, imgLink: '../../../assets/images/arbre.jpg', designation: 'mangue', description: 'je suis dans un champ de mangue', prix: 50, categorie: 'fruits' },
        ];
        this.menustock = [true, false, false, false, false];
        this.arrivals = [true, false, false];
        this.featured = [true, false, false];
        this.femme = [true, false, false];
        this.homme = [true, false, false];
        this.elctronique = [true, false, false, false];
    }
    ManagerstockComponent.prototype.ngOnInit = function () {
        this.listearticlesselectionner = {
            vuweb: this.listarticlesvuweb, frompv: this.listarticlesfrompv
        };
        this.articles(this.vitrineTarget);
        // this.vitrine.enVentes = this.ventes;
        // this.vitrine.enAttentes = this.attentes;
    };
    ManagerstockComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    };
    ManagerstockComponent.prototype.openModalSlide = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    };
    ManagerstockComponent.prototype.openModalRejetter = function (template) {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    };
    ManagerstockComponent.prototype.menustockClick = function (option) {
        this.menustock = this.menustock.map(function (x) { return false; });
        this.menustock[option] = true;
        switch (option) {
            case 0:
                this.ongletCliked('vitrine1');
                break;
            case 1:
                this.ongletCliked('vitrine2');
                break;
            case 2:
                this.ongletCliked("vitrine3");
                break;
            case 3:
                this.ongletCliked("vitrine4");
                break;
            case 4:
                this.ongletCliked("slide1");
                break;
            case 5:
                this.ongletCliked("slide2");
                break;
        }
    };
    ManagerstockComponent.prototype.menu1stockClick = function (menu1, menu2) {
        if (menu1 == 0) {
            this.arrivals = this.arrivals.map(function (x) { return false; });
            this.arrivals[menu2] = true;
        }
        if (menu1 == 1) {
            this.featured = this.featured.map(function (x) { return false; });
            this.featured[menu2] = true;
        }
        if (menu1 == 2) {
            this.femme = this.femme.map(function (x) { return false; });
            this.femme[menu2] = true;
        }
        if (menu1 == 4) {
            this.homme = this.homme.map(function (x) { return false; });
            this.homme[menu2] = true;
        }
        if (menu1 == 5) {
            this.elctronique = this.elctronique.map(function (x) { return false; });
            this.elctronique[menu2] = true;
        }
    };
    // Réccuprer le fichier
    ManagerstockComponent.prototype.uploadFile = function (event) {
        //fichier
        var fileList = event.target.files;
        //bar de progression
        this.progressBar = event.target.parentElement.parentElement.querySelector('.progress-bar');
        // Balise image de l'article
        var imgArticle = event.target.parentElement.parentElement.parentElement.parentElement.querySelector('img');
        // balise <a> pour le lien de téléchargement
        var aTelecharger = event.target.parentElement.parentElement.parentElement.parentElement.querySelector('#telecharger');
        //si le fichier est choisie
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            this.upload(formData, imgArticle, aTelecharger);
        }
    };
    // upload du fichier
    ManagerstockComponent.prototype.upload = function (file, img, tel) {
        var _this = this;
        var url = this.src + 'index.php';
        var req = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpRequest */]('POST', url, file, {
            reportProgress: true,
        });
        this.http.request(req).subscribe(function (event) {
            // envoie de la requete et ecouter l'évenement télécharment
            if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                // calcule du pourcentage de téléchargement
                _this.percentDone = Math.round(100 * event.loaded / event.total);
                console.log("File is " + _this.percentDone + "% uploaded.");
                //mise a jour de la bar de progréssion
                _this.progressBar.style.width = _this.percentDone + "%";
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
                var data = event.body;
                var imgName = data['generatedName'];
                img.src = tel.href = _this.src + 'uploads/' + imgName;
            }
        });
    };
    ManagerstockComponent.prototype.modifierArticle = function (event) {
        var id, obj, img, prix, image, point, table, categorie, designation, description;
        var target = event.target;
        var bodyModal = target.parentElement.parentElement.parentElement.parentElement;
        obj = JSON.parse('{' + target.id + '}');
        categorie = bodyModal.querySelector('#categorie').value;
        obj.categorie.categorie = categorie;
        console.log(obj);
        id = obj.id;
        img = (bodyModal.querySelector('#image').src).split('/');
        designation = bodyModal.querySelector('#designation').value;
        description = bodyModal.querySelector('#description').value;
        prix = bodyModal.querySelector('#prix').value;
        categorie = JSON.stringify(obj.categorie);
        table = obj.table;
        image = img[img.length - 1];
        this.modifier.push({ id: id, designation: designation, description: description, prix: prix, categorie: categorie, image: image, table: table });
        console.log('Modification------------------------------------------------------------[OK]');
        console.log(this.modifier);
        if (this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;
        this.modalRef.hide();
    };
    ManagerstockComponent.prototype.rejetterArticle = function (event, messageRejet) {
        var id, obj, idUser, message, target, designation;
        target = event.target;
        obj = JSON.parse('{' + target.id + '}');
        id = obj.id;
        idUser = obj.idUser;
        message = messageRejet.value;
        designation = obj.designation;
        for (var i = 0; i < this.rejetter.length; i++) {
            if ((this.rejetter[i]).id == obj.id)
                (this.rejetter).splice(i, 1);
        }
        this.rejetter.push({ id: id, idUser: idUser, message: message, designation: designation });
        console.log(obj);
        console.log('Rejet------------------------------------------------------------[add]');
        console.log(this.rejetter);
        if (this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;
        this.modalRef.hide();
    };
    ManagerstockComponent.prototype.validerArticle = function (event) {
        var obj, target;
        target = event.target;
        obj = JSON.parse('{' + target.id + '}');
        for (var i = 0; i < this.valider.length; i++) {
            if ((this.valider[i]).id == obj.id)
                (this.valider).splice(i, 1);
        }
        this.valider.push(obj);
        console.log(obj);
        console.log('Valider article------------------------------------------------------------[add]');
        console.log(this.valider);
        if (this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;
        this.modalRef.hide();
    };
    ManagerstockComponent.prototype.validerRemplacementActicle = function (event) {
        if (this.remplacer != null) {
            var target = event.target;
            var size = this.remplacer.length;
            (this.remplacer)[size - 1].vaRemplacer = JSON.parse('{' + target.id + '}');
            this.permuterArticle(this.vitrine.enVentes, this.vitrine.enAttentes, (this.remplacer)[size - 1].aRemplacer, (this.remplacer)[size - 1].vaRemplacer);
            if (this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
                this.toutChanger = true;
            else
                this.toutChanger = false;
            console.log(this.remplacer);
            console.log('rempacement------------------------------------------------------------[OK]');
            this.remplacerBool = false;
        }
    };
    ManagerstockComponent.prototype.remplacerArticle = function (event) {
        var target = event.target;
        var size = this.remplacer.length;
        var obj = JSON.parse('{' + target.id + '}');
        this.remplacer.push({ aRemplacer: null, vaRemplacer: null });
        (this.remplacer)[size].aRemplacer = obj;
        this.remplacerBool = true;
        for (var i = 0; i < size; i++)
            if ((((this.remplacer)[i]).vaRemplacer).id == obj.id)
                (this.remplacer).splice(i, 1);
        console.log('rempacement------------------------------------------------------------[load]');
    };
    // annuler le remplacement des article
    ManagerstockComponent.prototype.annulerRemplacement = function ($event) {
        this.remplacer.splice();
        this.remplacerBool = false;
        if (this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;
        console.log('annulation------------------------------------------------------------[OK]');
    };
    // permiter deux articles
    ManagerstockComponent.prototype.permuterArticle = function (tableauArticle1, tableauArticle2, article1, article2) {
        var pos1, pos2, size1, size2;
        size1 = tableauArticle1.length;
        size2 = tableauArticle2.length;
        for (var i = 0; i < size1; i++)
            if (tableauArticle1[i].id == article1.id)
                pos1 = i;
        for (var i = 0; i < size2; i++)
            if (tableauArticle2[i].id == article2.id)
                pos2 = i;
        var inter = tableauArticle1[pos1];
        tableauArticle1[pos1] = tableauArticle2[pos2];
        tableauArticle2[pos2] = inter;
        console.log('permutation------------------------------------------------------------[add]');
    };
    // Suppréssion d'articles
    ManagerstockComponent.prototype.supprimerArticle = function ($event) {
        var target = event.target;
        var obj = JSON.parse('{' + target.id + '}');
        this.supprimer.push(obj);
        if (this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;
        console.log(this.supprimer);
        this.modalRef.hide();
    };
    ManagerstockComponent.prototype.toutChangerFunc = function () {
        var _this = this;
        var reponse = false;
        if (this.remplacer.length != 0)
            this.managerservice.remplacerArticles(this.remplacer).subscribe(function (data) {
                if (data.response.Remplacer == 'true') {
                    alert('Remplacer avec success');
                    _this.articles(_this.vitrineTarget);
                }
            });
        if (this.supprimer.length != 0)
            this.managerservice.supprimerArticles(this.supprimer).subscribe(function (data) {
                if (data.response.Supprimer == 'true') {
                    alert('Supprimer avec success');
                    _this.articles(_this.vitrineTarget);
                }
            });
        if (this.modifier.length != 0)
            this.managerservice.modifierArticles(this.modifier).subscribe(function (data) {
                if (data.response.Modifier == 'true') {
                    alert('Modifier avec success');
                    _this.articles(_this.vitrineTarget);
                }
            });
        if (this.rejetter.length != 0)
            this.managerservice.rejetterArticles(this.rejetter).subscribe(function (data) {
                console.log(data);
                if (data.response.Rejetter == 'true') {
                    alert('Rejetter avec success');
                    _this.articles(_this.vitrineTarget);
                }
            });
        if (this.valider.length != 0)
            this.managerservice.validerArticles(this.valider).subscribe(function (data) {
                if (data.response.Valider == 'true') {
                    alert('Valider avec success');
                    _this.articles(_this.vitrineTarget);
                }
            });
        this.remplacer = [];
        this.supprimer = [];
        this.modifier = [];
        this.valider = [];
        this.rejetter = [];
        this.toutChanger = false;
    };
    ManagerstockComponent.prototype.toutAnnulerFunc = function () {
        this.remplacer = [];
        this.supprimer = [];
        this.modifier = [];
        this.vitrine.enVentes = this.ventes;
        this.vitrine.enAttentes = this.attentes;
        this.toutChanger = false;
    };
    ManagerstockComponent.prototype.ongletCliked = function (menu) {
        var id = menu;
        this.articles(id);
        this.vitrineTarget = id;
    };
    ManagerstockComponent.prototype.ventesSuivant = function () {
        var _this = this;
        this.vitrine.enVentes = [];
        if ((this.ventes).length == this.cursor.ventes) {
            this.requestInload.ventes = true;
            var idVentes = parseInt((this.ventes)[this.cursor.ventes - 1].id);
            var idAttentes = parseInt((this.attentes)[this.cursor.attentes - 1].id);
            this.managerservice.acticles(this.vitrineTarget, { idVentes: idVentes, idAttentes: idAttentes }).subscribe(function (data) {
                _this.requestInload.ventes = false;
                if ((data.response.pageprincipal).length != 0) {
                    for (var i = 0; i < (data.response.pageprincipal).length; i++) {
                        var categorie = (data.response.pageprincipal)[0].categorie;
                        (data.response.pageprincipal)[0].categ = (JSON.parse(categorie)).categorie;
                    }
                    for (var i = 0; i < (data.response.touslesarticles).length; i++) {
                        var categorie = (data.response.touslesarticles)[0].categorie;
                        (data.response.touslesarticles)[0].categ = (JSON.parse(categorie)).categorie;
                    }
                    _this.ventes = _this.ventes.concat(data.response.pageprincipal);
                    _this.attentes = _this.attentes.concat(data.response.touslesarticles);
                    if ((_this.cursor.ventes + 4) > _this.ventes.length) {
                        for (var i = _this.cursor.ventes; i < _this.ventes.length; i++)
                            (_this.vitrine.enVentes).push(_this.ventes[i]);
                        _this.cursor.ventes = _this.ventes.length;
                    }
                    else {
                        for (var i = _this.cursor.ventes; i < (_this.cursor.ventes + 4); i++)
                            (_this.vitrine.enVentes).push(_this.ventes[i]);
                        _this.cursor.ventes += 4;
                    }
                }
            });
        }
        if ((this.ventes).length < 4) {
            this.vitrine.enVentes = this.ventes;
            this.cursor.ventes = (this.ventes).length;
        }
        else if ((this.cursor.ventes + 4) > this.ventes.length) {
            for (var i = this.cursor.ventes; i < this.ventes.length; i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes = this.ventes.length;
        }
        else {
            for (var i = this.cursor.ventes; i < (this.cursor.ventes + 4); i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes += 4;
        }
    };
    ManagerstockComponent.prototype.ventesPrecedant = function () {
        this.vitrine.enVentes = [];
        if ((this.ventes).length < 4) {
            this.vitrine.enVentes = this.ventes;
            this.cursor.ventes = (this.ventes).length;
        }
        else if ((this.cursor.ventes - 4) < 0) {
            for (var i = 0; i < 4; i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes = 4;
        }
        else {
            for (var i = this.cursor.ventes - 4; i < (this.cursor.ventes); i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes -= 4;
        }
    };
    ManagerstockComponent.prototype.attentesSuivant = function () {
        var _this = this;
        this.vitrine.enAttentes = [];
        if ((this.attentes).length == this.cursor.attentes) {
            this.requestInload.attentes = true;
            var idVentes = (this.ventes)[this.ventes.length - 1].id;
            var idAttentes = (this.attentes)[this.attentes.length - 1].id;
            this.managerservice.acticles(this.vitrineTarget, { idVentes: idVentes, idAttentes: idAttentes }).subscribe(function (data) {
                _this.requestInload.attentes = false;
                if ((data.response.touslesarticles).length != 0) {
                    for (var i = 0; i < (data.response.pageprincipal).length; i++) {
                        var categorie = (data.response.pageprincipal)[0].categorie;
                        (data.response.pageprincipal)[0].categ = (JSON.parse(categorie)).categorie;
                    }
                    for (var i = 0; i < (data.response.touslesarticles).length; i++) {
                        var categorie = (data.response.touslesarticles)[0].categorie;
                        (data.response.touslesarticles)[0].categ = (JSON.parse(categorie)).categorie;
                    }
                    _this.ventes = _this.ventes.concat(data.response.pageprincipal);
                    _this.attentes = _this.attentes.concat(data.response.touslesarticles);
                    if (_this.cursor.attentes + 6 > _this.attentes.length) {
                        for (var i = _this.cursor.attentes; i < _this.attentes.length; i++)
                            (_this.vitrine.enAttentes).push(_this.attentes[i]);
                        _this.cursor.attentes = _this.attentes.length;
                    }
                    else {
                        for (var i = _this.cursor.attentes; i < (_this.cursor.attentes + 6); i++)
                            (_this.vitrine.enAttentes).push(_this.attentes[i]);
                        _this.cursor.attentes += 6;
                    }
                    console.log(data);
                }
            });
        }
        else if ((this.attentes).length < 6) {
            this.vitrine.enAttentes = this.attentes;
            this.cursor.attentes = (this.attentes).length;
        }
        else if (this.cursor.attentes + 6 > this.attentes.length) {
            for (var i = this.cursor.attentes; i < this.attentes.length; i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes = this.attentes.length;
        }
        else {
            for (var i = this.cursor.attentes; i < (this.cursor.attentes + 6); i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes += 6;
        }
    };
    ManagerstockComponent.prototype.attentesPrecedant = function () {
        this.vitrine.enAttentes = [];
        if ((this.attentes).length < 6) {
            this.vitrine.enAttentes = this.attentes;
            this.cursor.attentes = (this.attentes).length;
        }
        else if ((this.cursor.attentes - 6) < 0) {
            for (var i = 0; i < 6; i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes = 6;
        }
        else {
            for (var i = this.cursor.attentes - 6; i < (this.cursor.attentes); i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes -= 6;
        }
    };
    ManagerstockComponent.prototype.articles = function (vitrine) {
        var _this = this;
        this.cursor.ventes = 0;
        this.cursor.attentes = 0;
        this.ventes = [];
        this.attentes = [];
        this.vitrine.enVentes = [];
        this.vitrine.enAttentes = [];
        this.requestInload.attentes = true;
        this.requestInload.ventes = true;
        this.managerservice.acticles(vitrine, { idVentes: 0, idAttentes: 0 }).subscribe(function (data) {
            _this.requestInload.attentes = false;
            _this.requestInload.ventes = false;
            for (var i = 0; i < (data.response.pageprincipal).length; i++) {
                var categorie = (data.response.pageprincipal)[0].categorie;
                (data.response.pageprincipal)[0].categ = (JSON.parse(categorie)).categorie;
            }
            for (var i = 0; i < (data.response.touslesarticles).length; i++) {
                var categorie = (data.response.touslesarticles)[0].categorie;
                (data.response.touslesarticles)[0].categ = (JSON.parse(categorie)).categorie;
            }
            _this.ventes = _this.ventes.concat(data.response.pageprincipal);
            _this.attentes = _this.attentes.concat(data.response.touslesarticles);
            _this.vitrine.enVentes = [];
            _this.vitrine.enAttentes = [];
            if ((_this.ventes).length < 4) {
                _this.vitrine.enVentes = _this.ventes;
                _this.cursor.ventes = (_this.vitrine.enVentes).length;
            }
            else {
                for (var i = _this.cursor.attentes; i < (_this.cursor.attentes + 4); i++)
                    (_this.vitrine.enVentes).push(_this.ventes[i]);
                _this.cursor.ventes += 4;
            }
            if ((_this.attentes).length < 6) {
                _this.vitrine.enAttentes = _this.attentes;
                _this.cursor.attentes = (_this.vitrine.enAttentes).length;
            }
            else {
                for (var i = _this.cursor.attentes; i < (_this.cursor.attentes + 6); i++)
                    (_this.vitrine.enAttentes).push(_this.attentes[i]);
                _this.cursor.attentes += 6;
            }
            console.log(data);
        }, function (error) {
        });
    };
    ManagerstockComponent.prototype.lastId = function (table) {
        return table[table.length - 1]['id'];
    };
    return ManagerstockComponent;
}());
ManagerstockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-managerstock',
        template: __webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_2__services_assignation_suivi_service__["a" /* AssignationSuiviService */],
            __WEBPACK_IMPORTED_MODULE_4_app_services_managerstock_service__["a" /* ManagerstockService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__["b" /* CarouselConfig */], useValue: { interval: 1500, noPause: true, showIndicators: true } }
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_managerstock_service__["a" /* ManagerstockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_managerstock_service__["a" /* ManagerstockService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpClient */]) === "function" && _c || Object])
], ManagerstockComponent);

var _a, _b, _c;
//# sourceMappingURL=managerstock.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/managerstock.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progressionby_progressionby_module__ = __webpack_require__("../../../../../src/app/layout/progressionby/progressionby.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ratingbyoption_ratingbyoption_module__ = __webpack_require__("../../../../../src/app/layout/ratingbyoption/ratingbyoption.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managerstock_component__ = __webpack_require__("../../../../../src/app/layout/managerstock/managerstock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managerstock_routing_module__ = __webpack_require__("../../../../../src/app/layout/managerstock/managerstock-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/managerstock/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__zones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/managerstock/zones-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__souszones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/managerstock/souszones-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stockmanaging_stockmanaging_component__ = __webpack_require__("../../../../../src/app/layout/stockmanaging/stockmanaging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerstockModule", function() { return ManagerstockModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ManagerstockModule = (function () {
    function ManagerstockModule() {
    }
    return ManagerstockModule;
}());
ManagerstockModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__managerstock_routing_module__["a" /* ManagerstockRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6__progressionby_progressionby_module__["a" /* ProgressionbyModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__ratingbyoption_ratingbyoption_module__["a" /* RatingbyoptionModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__managerstock_component__["a" /* ManagerstockComponent */],
            __WEBPACK_IMPORTED_MODULE_12__data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_13__zones_filter_pipe__["a" /* ZonesFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_14__souszones_filter_pipe__["a" /* SousZonesFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__stockmanaging_stockmanaging_component__["a" /* StockmanagingComponent */]
        ]
    })
], ManagerstockModule);

//# sourceMappingURL=managerstock.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/managerstock/souszones-filter.pipe.ts":
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

/***/ "../../../../../src/app/layout/managerstock/zones-filter.pipe.ts":
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

/***/ "../../../../../src/app/layout/stockmanaging/stockmanaging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fuid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <em style=\"text-align: center; margin: 0 auto\">Articles affichés sur le site</em>\r\n            <pagination-template #p=\"paginationApi\" [id]=\"'second'\" (pageChange)=\"p20 = $event\">\r\n                <div class=\"custom-pagination\">\r\n                    <div class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" style=\"text-align: center\">\r\n                        <a *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\"> <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i> </a>\r\n                    </div>\r\n\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlesvuweb  | paginate: { itemsPerPage: 2, currentPage: p20 , id: 'second'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                            <input type=\"checkbox\" name=\"items\" value=\"{{article.value}}\"\r\n                                   [(ngModel)]=\"article.checked\" (change)=\"updateCheckedOptionsvuweb()\"\r\n                            />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" style=\"text-align: center\">\r\n                        <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\"> <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i> </a>\r\n                    </div>\r\n                </div>\r\n            </pagination-template>\r\n            <div style=\"text-align: center; margin-top: 1rem; \" >\r\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"open(contentApercu, article)\"> Apercu avant validation</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-9\">\r\n            <em>Tous les articles</em>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4 card\" *ngFor=\"let article of listarticlesfrompv  | paginate: { itemsPerPage: 3, currentPage: p10 , id: 'first'}\">\r\n                    <img class=\"card-img-top\" src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\"  alt=\"Card image cap\" width=\"200\" height=\"200\">\r\n                    <div class=\"card-block\" style=\"text-align: center ;\">\r\n                        <h4 class=\"card-title\">{{article.designation}}</h4>\r\n                        <p class=\"card-text\">{{article.description}}</p>\r\n                        <span *ngIf=\"!article.checked\"><button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"article.checked = true; updateCheckedOptionsfrompv()\">\r\n                            <i class=\"fa fa-square-o\" aria-hidden=\"true\"></i> Cocher\r\n                        </button></span>\r\n                        <span *ngIf=\"article.checked\"><button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"article.checked = false; updateCheckedOptionsfrompv()\">\r\n                            <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Décocher\r\n                        </button></span>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"open(content, article)\"> Modifier</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row text-center center-block\" style=\"margin-top: 3rem; margin-bottom: 5rem; margin-right: auto; margin-left: auto; text-align: center\">\r\n                <pagination-controls previousLabel=\"Précedent\" nextLabel=\"Suivant\" (pageChange)=\"p10 = $event\" id=\"first\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-header\" *ngIf=\"article\">\r\n        <h4 class=\"modal-title\">Modification de l'article</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"card\" >\r\n            <img class=\"card-img-top\" src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\"  alt=\"Card image cap\" width=\"200\" height=\"200\">\r\n            <div class=\"card-block\" style=\"text-align: center ;\">\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"file\" class=\"form-control-file\" id=\"imagearticle\" accept=\".jpg, .jpeg, .png\" title=\"Changer l'image\" ngFileSelect>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"designationarticle\" class=\"col-sm-2 col-form-label\">Désignation</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"designationarticle\" placeholder=\"Désignation\" [(ngModel)]=\"article.designation\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"descriptionarcticle\" class=\"col-sm-2 col-form-label\">Description</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <textarea class=\"form-control\" id=\"descriptionarcticle\" rows=\"3\" [(ngModel)]=\"article.description\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"validmodifarticle(); c('Close click')\">Valider modification</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ng-template>\r\n\r\n<ng-template #contentApercu let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Apercu</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <em style=\"text-align: center; margin: 0 auto\">Articles à retirer</em>\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlesretirer | paginate: { itemsPerPage: 2, currentPage: p3 , id: 'third'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <em style=\"text-align: center; margin: 0 auto\">Articles à rajouter</em>\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlesrajouter | paginate: { itemsPerPage: 2, currentPage: p4 , id: 'four'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <em style=\"text-align: center; margin: 0 auto\">Articles pour comparer</em>\r\n                    <div class=\"well well-sm\" *ngFor=\"let article of listarticlescomparer  | paginate: { itemsPerPage: 2, currentPage: p5 , id: 'five'}\" style=\"margin: 0 auto\">\r\n                        <img src=\"http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/img/{{article.nomImg}}\" alt=\"Card image cap\" height=\"200\" width=\"200\">\r\n                        <div class=\"text-center\">\r\n                            <p class=\"card-title\">{{article.designation}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <pagination-controls directionLinks=\"false\" (pageChange)=\"p3 = $event\" id=\"third\"></pagination-controls>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <pagination-controls directionLinks=\"false\" (pageChange)=\"p4 = $event\" id=\"four\"></pagination-controls>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <pagination-controls directionLinks=\"false\" (pageChange)=\"p5 = $event\" id=\"five\"></pagination-controls>\r\n                </div>\r\n            </div>\r\n            <hr/>\r\n            <div class=\"row\" style=\"margin: 0 auto; text-align: center; width: 10%; margin-top: 1rem; margin-bottom: 1rem\">\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"validarcticleafficher(); c('Close click')\">Valider</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/stockmanaging/stockmanaging.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/stockmanaging/stockmanaging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockmanagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockmanagingComponent = (function () {
    function StockmanagingComponent(modalService) {
        this.modalService = modalService;
        this.listarticlesvuweb = [];
        this.listarticlesfrompv = [];
        this.listarticlesretirer = [];
        this.listarticlesrajouter = [];
        this.listarticlescomparer = [];
    }
    StockmanagingComponent.prototype.ngOnInit = function () {
        this.listarticlesvuweb = this.listeacrticles.vuweb.map(function (type) {
            return { id: type.id, designation: type.designation, nomImg: type.nomImg, value: type.id, checked: false };
        });
        this.listarticlesfrompv = this.listeacrticles.frompv.map(function (type) {
            return { id: type.id, designation: type.designation, description: type.description,
                nomImg: type.nomImg, value: type.id, checked: false
            };
        });
        this.listarticlescomparer = this.listarticlesfrompv;
    };
    Object.defineProperty(StockmanagingComponent.prototype, "selectedOptionsvuweb", {
        get: function () {
            return this.listarticlesvuweb.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    StockmanagingComponent.prototype.updateCheckedOptionsvuweb = function () {
        this.listarticlesretirer = this.listarticlesvuweb.filter(function (opt) { return opt.checked; });
    };
    Object.defineProperty(StockmanagingComponent.prototype, "selectedOptionsfrompv", {
        get: function () {
            return this.listarticlesfrompv.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    StockmanagingComponent.prototype.updateCheckedOptionsfrompv = function () {
        this.listarticlesrajouter = this.listarticlesfrompv.filter(function (opt) { return opt.checked; });
        this.listarticlescomparer = this.listarticlesfrompv.filter(function (opt) { return !opt.checked; });
    };
    StockmanagingComponent.prototype.open = function (content, article) {
        var _this = this;
        this.article = article;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StockmanagingComponent.prototype.getDismissReason = function (reason) {
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
    StockmanagingComponent.prototype.validmodifarticle = function () {
        console.log('validmodifarticle');
    };
    StockmanagingComponent.prototype.validarcticleafficher = function () {
        console.log('validarcticleafficher');
    };
    return StockmanagingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StockmanagingComponent.prototype, "listeacrticles", void 0);
StockmanagingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stockmanaging',
        template: __webpack_require__("../../../../../src/app/layout/stockmanaging/stockmanaging.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/stockmanaging/stockmanaging.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], StockmanagingComponent);

var _a;
//# sourceMappingURL=stockmanaging.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/managerstock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerstockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagerstockService = (function () {
    function ManagerstockService(_http) {
        this._http = _http;
        //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
        //private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
        //private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
        this.link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    ManagerstockService.prototype.getTest = function () {
        var url = this.link + "/managerStock/test";
        var datas = JSON.stringify({ login: 'login', pwd: 'pwd' });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.acticles = function (methode, params) {
        if (methode === "vitrine1")
            return this.acticlesVitrine1(params);
        if (methode === "vitrine2")
            return this.acticlesVitrine2(params);
        if (methode === "vitrine3")
            return this.acticlesVitrine3(params);
        if (methode === "vitrine4")
            return this.acticlesVitrine4(params);
        if (methode === "slide1")
            return this.acticlesVitrine1(params);
        if (methode === "slide2")
            return this.acticlesVitrine1(params);
    };
    ManagerstockService.prototype.acticlesVitrine1 = function (ids) {
        var url = this.link + "/managerStock/acticlesVitrine1";
        var datas = JSON.stringify(ids);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.acticlesVitrine2 = function (ids) {
        var url = this.link + "/managerStock/acticlesVitrine2";
        var datas = JSON.stringify(ids);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.acticlesVitrine3 = function (ids) {
        var url = this.link + "/managerStock/acticlesVitrine3";
        var datas = JSON.stringify(ids);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.acticlesVitrine4 = function (ids) {
        var url = this.link + "/managerStock/acticlesVitrine4";
        var datas = JSON.stringify(ids);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.slide1 = function () {
        var url = this.link + "/managerStock/acticlesSlide1";
        var datas = JSON.stringify({});
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.slide2 = function () {
        var url = this.link + "/managerStock/acticlesSlide1";
        var datas = JSON.stringify({});
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.remplacerArticles = function (dataTable) {
        var url = this.link + "/managerStock/remplacerArticles";
        var datas = JSON.stringify(dataTable);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.modifierArticles = function (dataTable) {
        var url = this.link + "/managerStock/modifierArticles";
        var datas = JSON.stringify(dataTable);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.supprimerArticles = function (dataTable) {
        var url = this.link + "/managerStock/supprimerArticles";
        var datas = JSON.stringify(dataTable);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.rejetterArticles = function (dataTable) {
        var url = this.link + "/managerStock/rejetterArticles";
        var datas = JSON.stringify(dataTable);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ManagerstockService.prototype.validerArticles = function (dataTable) {
        var url = this.link + "/managerStock/validerArticles";
        var datas = JSON.stringify(dataTable);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return ManagerstockService;
}());
ManagerstockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ManagerstockService);

var _a;
//# sourceMappingURL=managerstock.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/carousel.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_config__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.config.js");
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this._slides = new __WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* LinkedList */]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\"> <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"> <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span> </a> <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"> <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div> "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__carousel_config__["a" /* CarouselConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    CarouselComponent.propDecorators = {
        'noWrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'noPause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showIndicators': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeSlideChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeSlide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/carousel.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });

var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /** Show carousel-indicators */
        this.showIndicators = true;
    }
    CarouselConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
    return CarouselConfig;
}());

//# sourceMappingURL=carousel.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/carousel.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/slide.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.config.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });





var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.component.js");
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/slide.component.js");
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__carousel_config__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/slide.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });


var SlideComponent = (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */], },
    ]; };
    SlideComponent.propDecorators = {
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.item',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());

//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ "../../../../ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < p.getCurrent()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=2.chunk.js.map