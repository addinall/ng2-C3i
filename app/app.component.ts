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

    import { Component } from '@angular/core';                  // This is the base of the Angular magic.
                                                                // near EVERYTHING in an Angular app is
                                                                // a component 
    import { Asset } from './asset';                            // Bring in our asset class

    import { AssetDetailComponent } from './asset-detail.component';



    const ASSETS: Asset[] = [                                   // this lot is going to come out of some
        { id: 11, name: 'Barometer',    owner: 'Addinall'   },  // sort of data store that will be provided to
        { id: 12, name: 'Thermometer',  owner: 'Addinall'   },  // us via a RESTful server.  In this case,
        { id: 13, name: 'Bettsometer',  owner: 'Addinall'   },  // the one I am writing in the
        { id: 14, name: 'Actinometer',  owner: 'Smith'      },  // backend bits of code.
        { id: 15, name: 'Densimeter',   owner: 'Smith'      },  // this stuff is for testing purposes.
        { id: 16, name: 'Dynometer',    owner: 'Smith'      },
        { id: 17, name: 'Fathometer',   owner: 'DuPont'     },
        { id: 18, name: 'Hygrometer',   owner: 'DuPont'     },
        { id: 19, name: 'Magnetometer', owner: 'DuPont'     },
        { id: 20, name: 'Manometer',    owner: 'Tynes'      }
    ];



    @Component({                                                // set up THIS Component
                                                                // All iof this CSS is going to live in it's own
                                                                // seperate file by the end of the day.  Just in
                                                                // anyone is having a peek.
        selector: 'my-app',
        template: `<h1>{{title}}</h1>
                    <h2>Active Assets</h2>
                    <ul class="assets">
                        <li *ngFor="let asset of assets" 
                            [class.selected]="asset === selectedAsset"
                            (click)="onSelect(asset)">
                            <span class="state"> {{asset.id}}</span><span class="name"> {{asset.name}}</span> {{asset.owner}}
                        </li>
                    </ul>
                    <my-asset-detail [asset]="selectedAsset"></my-asset-detail>    
                `,
        styles: [`
                    .selected {
                        background-color: #CFD8DC !important;
                        color: white;
                    }
                    .assets {
                        margin: 0 0 2em 0;
                        list-style-type: none;
                        padding: 0;
                        width: 35em;
                    }
                    .assets li {
                        cursor: pointer;
                        position: relative;
                        left: 0;
                        background-color: #EEE;
                        margin: .5em;
                        padding: .3em 0;
                        height: 1.6em;
                        border-radius: 4px;
                    }
                    .assets li.selected:hover {
                        background-color: #BBD8DC !important;
                        color: white;
                    }
                    .assets li:hover {
                        color: #607D8B;
                        background-color: #DDD;
                        left: .1em;
                    }
                    .assets .text {
                        position: relative;
                        top: -3px;
                    }
                    .assets .state {
                        display: inline-block;
                        font-size: small;
                        color: white;
                        padding: 0.8em 0.7em 0 0.7em;
                        background-color: #607D8B;
                        line-height: 1em;
                        position: relative;
                        left: -1px;
                        top: -4px;
                        height: 1.8em;
                        margin-right: .8em;
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .assets .name {
                        display: inline-block;
                        width: 16em;
                        padding: 0.8em 0.7em 0 0.7em;
                        line-height: 1em;
                        position: relative;
                        margin-right: .8em;
                        border-radius: 4px 0 0 4px;
                    }
                `],
        directives: [AssetDetailComponent]
    })              


    export class AppComponent {                                 // and make an application component
        title = 'ng2-C3I COMMAND and CONTROL';                  // visible to all.
        public assets = ASSETS;
        selectedAsset: Asset;
        onSelect(asset: Asset) {
            this.selectedAsset = asset;
        }
    }


// --------------------------  EOF --------------------------

