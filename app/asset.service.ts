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

    import { injectable } from '@angular/core';

    import { Hero } from './hero';
    import { ASSETS } from './mock-assets';


    @Injectable()
    export class AssetService {
        getAssets() {

            return Promise.resolve(ASSETS);
        }
    }


