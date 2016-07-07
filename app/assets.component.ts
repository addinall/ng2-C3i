// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : asset.component.ts 
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

    import { Component, OnInit } from '@angular/core';          // This is the base of the Angular magic.
                                                                // near EVERYTHING in an Angular app is
                                                                // a component 
    import { Asset } from './asset';                            // Bring in our asset class


    import { AssetService } from './asset.service';             // injectable service factory







    @Component({                                                // set up THIS Component
                                                                // All iof this CSS is going to live in it's own
                                                                // seperate file by the end of the day.  Just in
                                                                // anyone is having a peek.
        selector: 'c3i-assets',
        templateUrl: 'app/assets.component.html',
        styleUrls:  ['app/assets.component.css']
        })


//----------------------------------------------
export class AssetsComponent implements OnInit {

    assets: Asset[];
    selectedAsset: Asset;

    constructor(
        private router: Router,
        private assetService: AssetService) { }


    //------------
    getAssets() {
        this.assetService.getAssetes().then(assets => this.assets = assets);
    }

    //----------
    ngOnInit() {
        this.getAssets();
    }

    //----------------------
    onSelect(asset: Asset) { 
        this.selectedAsset = asset; 
    }


    //------------
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedAsset.id]);
    }
}


// --------------------------  EOF --------------------------

