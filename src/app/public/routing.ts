import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found.component';
import {TextComponent} from './text.component';

const routes=[
	{path:'acerca-de',	component:TextComponent},
	{path:'tecnologia',	component:TextComponent},
];

export const Routing=RouterModule.forChild(routes);
