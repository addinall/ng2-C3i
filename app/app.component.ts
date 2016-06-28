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


    import  { Component         }   from    '@angular/core';
    import  { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

    import  { AssetService      }   from    './asset.service';
    import  { AssetsComponent   }   from    './assets.component';

    import  { DashboardComponent}   from    './dashboard.component';


    @Component({
        selector: 'c3i-assets',
        template: `
                    <h1>{{title}}</h1>
                    <nav>
                        <a [routerLink]="['Dashboard']">Dashboard</a>
                        <a [routerLink]="['Assets']">Assets</a>
                    </nav>
                    <router-outlet><router-outlet>
                  `,
        directives: [ROUTER_DIRECTIVES],
        providers:  [
            ROUTER_PROVIDERS,
            AssetService
        ]
   })

   @RouteConfig([
       {
           path:            '/dashboard',
           name:            'Dashboard',
           component:       DashboardComponent,
           useAsDefault:    true
       },
       {
           path:            '/assets',
           name:            'Assets',
           component:       AssetsComponent
       }
   ])

   export class AppComponent {
       title = 'C3I COMMAND and CONTROL';
   }


//---------------------    EOF   -----------------------------------
   

