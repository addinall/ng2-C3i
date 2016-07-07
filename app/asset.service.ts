// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : asset.service.ts 
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

    import { Injectable } from '@angular/core';         // allow us to inject factories

    import { Asset } from './asset';                    // asset object definition
    import { ASSETS } from './mock-assets';             //  test data


    @Injectable()                                       // this is the class we will inject
    export class AssetService {                         // as a service 'factory'
        getAssets() {
            return Promise.resolve(ASSETS);             // asynchronous, so PROMISE
        }

       getAsset(id: number) {
           return this.getAssets()
                    . then(assets => assets.find(asset => asset.id === id));
       }
    }

    // -------------- EOF -------------------

