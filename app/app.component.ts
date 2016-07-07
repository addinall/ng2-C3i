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
    import  { ROUTER_DIRECTIVES }   from    '@angular/router';

    import  { AssetService      }   from    './asset.service';



    @Component({
        selector: 'c3i-assets',
        template: `
                    <h1>{{title}}</h1>
                    <nav>
                        <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
                        <a [routerLink]="['/assets']" routerLinkActive="active">Assets</a>
                    </nav>
                    <router-outlet><router-outlet>
                  `,
        styleUrls: ['app/app.component.css'],
        directives: [ROUTER_DIRECTIVES],
        providers:  [
            AssetService
        ]
   })


   export class AppComponent {
       title = 'C3I COMMAND and CONTROL';
   }


//---------------------    EOF   -----------------------------------
   

