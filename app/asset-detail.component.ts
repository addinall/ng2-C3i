
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

    import { Component, Input } from '@angular/core';           // This is the base of the Angular magic.
                                                                // near EVERYTHING in an Angular app is
                                                                // a component 
    import { Asset } from './asset';                            // Bring in our asset class

    @Component({                                                // set up THIS Component
        selector: 'my-asset-detail',
        template: `
                    <div *ngIf="asset">
                        <h2>{{asset.name}} Details.</h2> 
                        <h3>{{asset.owner}} Owner.</h3> 
                        <div><label>id: </label>{{asset.id}}</div>
                        <div><label>Name: </label>{{asset.name}}</div>
                        <div>
                            <label>Owner: </label>
                            <input [(ngModel)]="asset.owner" placeholder="name">
                        </div>
                    </div>    
                    `
    })              


    export class AssetDetailComponent {                         // and make an application component
        @Input()
        asset:  Asset;
    }



// --------------------------  EOF --------------------------

