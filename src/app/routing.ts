import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './public/home.component';
import {PageNotFoundComponent} from './public/page-not-found.component';

const routes=[
	{path:'home', 		component:HomeComponent},
	{path:'', 		redirectTo:'home', pathMatch:'full'},
	{path:'404-no-encontrado', component:PageNotFoundComponent},
	{path:'**', 		component:PageNotFoundComponent},
];

export const Routing=RouterModule.forRoot(routes);
