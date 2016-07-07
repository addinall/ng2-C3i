// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : app.routes.ts 
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
//

import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } 		from './dashboard.component';
import { AssetsComponent } 		from './assets.component';
import { AssetDetailComponent } 	from './asset-detail.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: AssetDetailComponent
  },
  {
    path: 'assets',
    component: AssetsComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

//---------------------  EOF --------------------------
