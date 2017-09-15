"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProgressionbyComponent = (function () {
    function ProgressionbyComponent() {
    }
    ProgressionbyComponent.prototype.ngOnInit = function () {
        this.notes = (this.dynamic * 100) / this.max;
    };
    return ProgressionbyComponent;
}());
__decorate([
    core_1.Input()
], ProgressionbyComponent.prototype, "max", void 0);
__decorate([
    core_1.Input()
], ProgressionbyComponent.prototype, "dynamic", void 0);
ProgressionbyComponent = __decorate([
    core_1.Component({
        selector: 'app-progressionby',
        templateUrl: './progressionby.component.html',
        styleUrls: ['./progressionby.component.scss']
    })
], ProgressionbyComponent);
exports.ProgressionbyComponent = ProgressionbyComponent;
