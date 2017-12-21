import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found.component';
import {MultiTextComponent} from './multi-text.component';

const routes=[
	{path:'acerca-de',	component:MultiTextComponent},
	{path:'tecnologia',	component:MultiTextComponent},
];

export const Routing=RouterModule.forChild(routes);
