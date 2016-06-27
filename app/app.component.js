// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : app.components.ts 
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
var Asset = (function () {
    function Asset() {
    }
    return Asset;
}());
exports.Asset = Asset;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ng2-C3I COMMAND and CONTROL'; // visible to all.
        this.assets = ASSETS;
        this.asset = {
            id: 10.,
            name: 'Speedometer',
            owner: 'Addinall'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            // All iof this CSS is going to live in it's own
            // seperate file by the end of the day.  Just in
            // anyone is having a peek.
            selector: 'my-app',
            styles: ["\n                    .selected {\n                        background-color: #CFD8DC !important;\n                        color: white;\n                    }\n                    .assets {\n                        margin: 0 0 2em 0;\n                        list-style-type: none;\n                        padding: 0;\n                        width: 15em;\n                    }\n                    .assets li {\n                        cursor: pointer;\n                        position: relative;\n                        left: 0;\n                        background-color: #EEE;\n                        margin: .5em;\n                        padding: .3em 0;\n                        height: 1.6em;\n                        border-radius: 4px;\n                    }\n                    .assets li.selected:hover {\n                        background-color: #BBD8DC !important;\n                        color: white;\n                    }\n                    .assets li:hover {\n                        color: #607D8B;\n                        background-color: #DDD;\n                        left: .1em;\n                    }\n                    .assets .text {\n                        position: relative;\n                        top: -3px;\n                    }\n                    .assets .badge {\n                        display: inline-block;\n                        font-size: small;\n                        color: white;\n                        padding: 0.8em 0.7em 0 0.7em;\n                        background-color: #607D8B;\n                        line-height: 1em;\n                        position: relative;\n                        left: -1px;\n                        top: -4px;\n                        height: 1.8em;\n                        margin-right: .8em;\n                        border-radius: 4px 0 0 4px;\n                    }\n                "],
            template: "<h1>{{title}}</h1>\n                    <h2>Active Assets</h2>\n                    <ul class=\"assets\">\n                        <li *ngFor=\"let asset of assets\">\n                            <span class=\"state\"> {{asset.id}}</span><span> {{asset.name}}</span> {{asset.owner}}\n                        </li>\n                    </ul>\n                    <h2>{{asset.name}} Details.</h2> \n                    <h3>{{asset.owner}} Owner.</h3> \n                    <div><label>id: </label>{{asset.id}}</div>\n                    <div>\n                        <label>Owner: </label>\n                        <input [(ngModel)]=\"asset.owner\" placeholder=\"name\">\n                    </div>\n                    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var ASSETS = [
    { id: 11, name: 'Barometer', owner: 'Addinall' },
    { id: 12, name: 'Thermometer', owner: 'Addinall' },
    { id: 13, name: 'Bettsometer', owner: 'Addinall' },
    { id: 14, name: 'Actinometer', owner: 'Smith' },
    { id: 15, name: 'Densimeter', owner: 'Smith' },
    { id: 16, name: 'Dynometer', owner: 'Smith' },
    { id: 17, name: 'Fathometer', owner: 'DuPont' },
    { id: 18, name: 'Hygrometer', owner: 'DuPont' },
    { id: 19, name: 'Magnetometer', owner: 'DuPont' },
    { id: 20, name: 'Manometer', owner: 'Tynes' }
];
// --------------------------  EOF --------------------------
//# sourceMappingURL=app.component.js.map