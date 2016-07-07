
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

    import { Component, OnInit, OnDestroy } from '@angular/core';       // This is the base of the Angular magic.
    import { ActiveRoute }                  from '@angular/router';     // MVVC software router

    import { Asset }                        from './asset';             // Bring in our asset class
    import {AssetService}                   from './asset.service';

@Component({
  selector: 'my-asset-detail',
  templateUrl: 'app/asset-detail.component.html',
  styleUrls: ['app/asset-detail.component.css']
})

//--------------------------------------------------------------
export class AssetDetailComponent implements OnInit, OnDestroy {
  asset: Asset;
  sub: any;

  constructor(
    private assetService: AssetService,
    private route: ActivatedRoute) {
  }

    //------------------------
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.assetService.getAsset(id)
                .then(asset => this.asset = asset);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}

// --------------------------  EOF --------------------------

