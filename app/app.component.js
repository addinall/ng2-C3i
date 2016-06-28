// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : app.component.ts 
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
var asset_detail_component_1 = require('./asset-detail.component');
var asset_service_1 = require('./asset.service'); // injectable service factory
var AppComponent = (function () {
    function AppComponent(assetService) {
        this.assetService = assetService;
        this.title = 'ng2-C3I COMMAND and CONTROL'; // visible to all.
    } // inject one in
    AppComponent.prototype.getAssets = function () {
        var _this = this;
        this.assetService.getAssets().then(function (assets) { return _this.assets = assets; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getAssets();
    };
    AppComponent.prototype.onSelect = function (asset) {
        this.selectedAsset = asset;
    };
    AppComponent = __decorate([
        // injectable service factory
        core_1.Component({
            // All iof this CSS is going to live in it's own
            // seperate file by the end of the day.  Just in
            // anyone is having a peek.
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n                    <h2>Active Assets</h2>\n                    <ul class=\"assets\">\n                        <li *ngFor=\"let asset of assets\" \n                            [class.selected]=\"asset === selectedAsset\"\n                            (click)=\"onSelect(asset)\">\n                            <span class=\"state\"> {{asset.id}}</span><span class=\"name\"> {{asset.name}}</span> {{asset.owner}}\n                        </li>\n                    </ul>\n                    <my-asset-detail [asset]=\"selectedAsset\"></my-asset-detail>    \n                ",
            styles: ["\n                    .selected {\n                        background-color: #CFD8DC !important;\n                        color: white;\n                    }\n                    .assets {\n                        margin: 0 0 2em 0;\n                        list-style-type: none;\n                        padding: 0;\n                        width: 35em;\n                    }\n                    .assets li {\n                        cursor: pointer;\n                        position: relative;\n                        left: 0;\n                        background-color: #EEE;\n                        margin: .5em;\n                        padding: .3em 0;\n                        height: 1.6em;\n                        border-radius: 4px;\n                    }\n                    .assets li.selected:hover {\n                        background-color: #BBD8DC !important;\n                        color: white;\n                    }\n                    .assets li:hover {\n                        color: #607D8B;\n                        background-color: #DDD;\n                        left: .1em;\n                    }\n                    .assets .text {\n                        position: relative;\n                        top: -3px;\n                    }\n                    .assets .state {\n                        display: inline-block;\n                        font-size: small;\n                        color: white;\n                        padding: 0.8em 0.7em 0 0.7em;\n                        background-color: #607D8B;\n                        line-height: 1em;\n                        position: relative;\n                        left: -1px;\n                        top: -4px;\n                        height: 1.8em;\n                        margin-right: .8em;\n                        border-radius: 4px 0 0 4px;\n                    }\n                    \n                    .assets .name {\n                        display: inline-block;\n                        width: 16em;\n                        padding: 0.8em 0.7em 0 0.7em;\n                        line-height: 1em;\n                        position: relative;\n                        margin-right: .8em;\n                        border-radius: 4px 0 0 4px;\n                    }\n                "],
            directives: [asset_detail_component_1.AssetDetailComponent],
            providers: [asset_service_1.AssetService]
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// --------------------------  EOF --------------------------
//# sourceMappingURL=app.component.js.map