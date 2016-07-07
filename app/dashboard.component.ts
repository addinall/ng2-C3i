// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : dashboard.component.ts
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

	import { Component, OnInit }    from '@angular/core';
    import { Router }               from '@angular/router';

    import { Asset }                from './asset';
    import { AssetService }         from './asset.service';


	@Component({
		selector: 'c3i-dashboard',
        templateUrl: 'app/dashboard.component.html',
        styleUrls: ['app/dashboard.component.css']
	})

	export class DashboardComponent implements OnInit{ 
    
        assets: Asset[] = [];

        constructor(
            private router: Router,
            private assetService: AssetService) {
        }

        ngOnInit() {
            this.assetService.getAssets()
                .then(assets => this.assets = assets.slice(1, 5));
        }

        gotoDetail(asset: Asset) {
            let link = ['AssetDetail', { id: asset.id }];
            this.router.navigate(link);
        }
    }


// -------------------  EOF   -------------------------------------
