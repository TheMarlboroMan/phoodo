import { Component } from '@angular/core';
import { Dish, Category } from './dish';
import { DishDetailComponent } from './dish-detail.component';

@Component({
	selector: 'app-root',
	styles: [`
		.selected {background-color: #ccc;}
		ul.dishes li:hover {background-color: blue;}
		ul.dishes li {cursor: pointer;}
		ul.dishes li span.dish{font-size:bold;}
`],
	template: `
	<h1>{{title}}</h1>
	<h2>Available dishes...</h2>
	<ul class="dishes">
		<li 	*ngFor="let dish of dish_list" 
			(click)="select_dish(dish)" 
			[class.selected]="dish === dish_selected">
			{{dish.id}} : <span class="dish">{{dish.name}}</span>
		</li>
	</ul>
	<dish-detail [dish]="dish_selected"></dish-detail>
	<div *ngIf="dish_selected">
		<input type="button" value="Clear selection" (click)="deselect_dish()" />
	</div>
`
})

export class AppComponent {

	//Properties...
	title = 'Phoodo is here!!!';
	dish_list = dishes;
	dish_selected: Dish;

	//Functions...
	select_dish(selected: Dish): void {
		this.dish_selected=selected;
	};

	deselect_dish():void {
		this.dish_selected=null;
	}
}

//This should go away...

const categories: Category[]=[
	{id: 1, name: "Carnes"},
	{id: 2, name: "Entrantes"},
	{id: 3, name: "Otros"},
	{id: 4, name: "Verduras"},
	{id: 5, name: "Pescados"}
];

//This should go away too...

const dishes: Dish[]=[
	{id: 1, name: "Pollo a la miel", 	category: categories[0]},
	{id: 2, name: "Gazpacho", category: 	categories[1]},
	{id: 3, name: "Lomo a la sal", 		category: categories[0]},
	{id: 4, name: "Ajoblanco", category: 	categories[2]},
	{id: 5, name: "Arroz especial Nete", 	category: categories[2]},
	{id: 6, name: "Menestra de verduras", 	category: categories[3]},
	{id: 7, name: "Pisto", category: 	categories[3]},
	{id: 8, name: "Merluza al ajillo", 	category: categories[4]},
	{id: 9, name: "Espinacas con garbanzos", category: categories[3]},
	{id: 10, name: "Hummus",		category: categories[1]}
];

