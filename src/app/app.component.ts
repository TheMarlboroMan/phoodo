import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<nav>
		<a routerLink="/all-dishes">All dishes</a>
		<a routerLink="/planner">Planner</a>
	</nav>
	<router-outlet></router-outlet>
`
})

export class AppComponent{
	public title = 'Phoodo is here!!!';

}
