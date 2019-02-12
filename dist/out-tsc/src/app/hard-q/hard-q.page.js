var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HardQPage = /** @class */ (function () {
    function HardQPage(router) {
        this.router = router;
    }
    HardQPage.prototype.ngOnInit = function () {
    };
    HardQPage.prototype.nav = function () {
        this.router.navigate(['../home']);
    };
    HardQPage = __decorate([
        Component({
            selector: 'app-hard-q',
            templateUrl: './hard-q.page.html',
            styleUrls: ['./hard-q.page.scss'],
        }),
        __metadata("design:paramtypes", [Router])
    ], HardQPage);
    return HardQPage;
}());
export { HardQPage };
//# sourceMappingURL=hard-q.page.js.map