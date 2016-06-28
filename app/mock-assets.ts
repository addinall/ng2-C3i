// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : mock-assets.ts 
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

    import { Asset } from './asset';                            // Bring in our asset class


    export var ASSETS: Asset[] = [                              // this lot is going to come out of some
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

// --------------------------  EOF --------------------------

