import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './public/home.component';
import {PageNotFoundComponent} from './public/page-not-found.component';

const routes=[
	{path:'home', 		component:HomeComponent},
	{path:'', 		redirectTo:'home', pathMatch:'full'},
	{path:'**', 		component:PageNotFoundComponent},
];

export const Routing=RouterModule.forRoot(routes);
