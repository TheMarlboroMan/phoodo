import { Component, Input } from '@angular/core';
import { Dish } from './dish';
import {Category} from './category';

@Component({
	selector: 'dish-detail',
	template: `
	<div *ngIf="dish">
		<h2>Details of {{dish.name}}</h2>
		<div><label>id:</label> {{dish.id}}</div>
		<div><label>category: </label> {{dish.category.name}}</div>
		<div>
			<label>name:</label> 
			<input [(ngModel)]="dish.name" placeholder="name" />
		</div>
	</div>`
})

export class DishDetailComponent {

	//Properties...
	@Input() dish: Dish;
}
