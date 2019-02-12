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
var ChtestPage = /** @class */ (function () {
    function ChtestPage(router) {
        this.router = router;
    }
    ChtestPage.prototype.ngOnInit = function () {
    };
    ChtestPage.prototype.nav = function () {
        this.router.navigate(['../home']);
    };
    ChtestPage = __decorate([
        Component({
            selector: 'app-chtest',
            templateUrl: './chtest.page.html',
            styleUrls: ['./chtest.page.scss'],
        }),
        __metadata("design:paramtypes", [Router])
    ], ChtestPage);
    return ChtestPage;
}());
export { ChtestPage };
//# sourceMappingURL=chtest.page.js.map