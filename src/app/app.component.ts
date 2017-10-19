import {Component} from '@angular/core';
import {DishListComponent} from './dish-list.component';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<dish-list></dish-list>
`
})

export class AppComponent{
	public title = 'Phoodo is here!!!';
}
