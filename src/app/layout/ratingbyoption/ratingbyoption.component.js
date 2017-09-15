"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RatingbyoptionComponent = (function () {
    function RatingbyoptionComponent() {
        this.rate = 1;
        this.ratingstatic = true;
        this.rating = [
            { indice: 0, checked: false },
            { indice: 1, checked: false },
            { indice: 2, checked: false },
            { indice: 3, checked: false },
            { indice: 4, checked: false },
        ];
    }
    RatingbyoptionComponent.prototype.ngOnInit = function () {
        this.avoter(this.rate);
    };
    RatingbyoptionComponent.prototype.avoter = function (index) {
        for (var i = 0; i < this.rating.length; i++) {
            if (i <= index) {
                this.rating[i].checked = true;
            }
            else {
                this.rating[i].checked = false;
            }
        }
    };
    return RatingbyoptionComponent;
}());
__decorate([
    core_1.Input()
], RatingbyoptionComponent.prototype, "rate", void 0);
__decorate([
    core_1.Input()
], RatingbyoptionComponent.prototype, "ratingstatic", void 0);
RatingbyoptionComponent = __decorate([
    core_1.Component({
        selector: 'app-ratingbyoption',
        templateUrl: './ratingbyoption.component.html',
        styleUrls: ['./ratingbyoption.component.scss']
    })
], RatingbyoptionComponent);
exports.RatingbyoptionComponent = RatingbyoptionComponent;
