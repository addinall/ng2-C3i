// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : asset-detail.components.ts 
// System       : ng2-C3I 
// Date         : June  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                Angular2 and Bootstrap4.
//
//
// -------------------------------
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); // This is the base of the Angular magic.
// near EVERYTHING in an Angular app is
// a component 
var asset_1 = require('./asset'); // Bring in our asset class
var AssetDetailComponent = (function () {
    function AssetDetailComponent() {
    }
    __decorate([
        // and make an application component
        core_1.Input(), 
        __metadata('design:type', asset_1.Asset)
    ], AssetDetailComponent.prototype, "asset", void 0);
    AssetDetailComponent = __decorate([
        // Bring in our asset class
        core_1.Component({
            selector: 'my-asset-detail',
            template: "\n                    <div *ngIf=\"asset\">\n                        <h2>{{asset.name}} Details.</h2> \n                        <h3>{{asset.owner}} Owner.</h3> \n                        <div><label>id: </label>{{asset.id}}</div>\n                        <div><label>Name: </label>{{asset.name}}</div>\n                        <div>\n                            <label>Owner: </label>\n                            <input [(ngModel)]=\"asset.owner\" placeholder=\"name\">\n                        </div>\n                    </div>    \n                    "
        }), 
        __metadata('design:paramtypes', [])
    ], AssetDetailComponent);
    return AssetDetailComponent;
}());
exports.AssetDetailComponent = AssetDetailComponent;
// --------------------------  EOF --------------------------
//# sourceMappingURL=asset-detail.component.js.map