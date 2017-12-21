import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './public/home.component';

const routes=[
	{path:'home', 		component:HomeComponent},
	{path:'', 		redirectTo:'home', pathMatch:'full'},
//TODO	{path:'**', 		component:PageNotFoundComponent},
];

export const Routing=RouterModule.forRoot(routes);
