import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found.component';
import {TextComponent} from './text.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

const routes=[
	{path:'acerca-de',		component:TextComponent},
	{path:'tecnologia',		component:TextComponent},
	{path:'datos-de-contacto',	component:TextComponent},
	{path:'portfolio',		component:TextComponent},
	{path:'aviso-legal',		component:TextComponent},
	{path:'proteccion-de-datos',	component:TextComponent},
	{path:'politica-de-cookies',	component:TextComponent},
	{path:'consigue-ayuda',		component:TextComponent},
	{path:'informa-de-un-fallo',	component:TextComponent},
	{path:'login',			component:LoginComponent},
	{path:'registro',		component:RegisterComponent},
];

export const Routing=RouterModule.forChild(routes);
