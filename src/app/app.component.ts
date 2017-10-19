import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { Dish } from './dish';
import { Category } from './category';
import { DishDetailComponent } from './dish-detail.component';
import {DishService} from './dish.service';
import {CategoryService} from './category.service';


@Component({
	selector: 'app-root',
	providers: [DishService, CategoryService],
	styles: [`
		.selected {background-color: #ccc;}
		ul.dishes li:hover {background-color: blue;}
		ul.dishes li {cursor: pointer;}
		ul.dishes li span.dish{font-size:bold;}
`],
	template: `
	<h1>{{title}}</h1>
	<h2>All categories</h2>
	<ul class="categories">
		<li	*ngFor="let cat of category_list"
			(click)="toggle_category(cat)">
			{{cat.name}}
		</li>
	</ul>
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

export class AppComponent implements OnInit{

	public title = 'Phoodo is here!!!';
	public dish_list: Dish[];
	public category_list: Category[];
	public dish_selected: Dish;
	public category_filter: Category[];


	public constructor(
		private dish_service : DishService, 
		private category_service: CategoryService) {

		this.category_filter=[];
	}

	public ngOnInit(): void {
		this.get_dishes();
		this.get_categories();
	}

	public select_dish(selected: Dish): void {
		this.dish_selected=selected;
	};

	public deselect_dish():void {
		this.dish_selected=null;
	}

	public get_dishes():void {
		this.dish_service.get_dishes().then(received_dishes => this.dish_list=received_dishes);
	}

	public get_categories():void {
		this.category_service.get_categories().then(data => this.category_list=data);
	}

	public toggle_category(cat : Category): void {

		alert(this.category_filter.length);

		//TODO: CHECK THIS SHIT.
		if(this.category_filter[cat.id]!==undefined) 
		{
			alert("removed");
			this.category_filter.splice(cat.id, 1);
		}
		else 
		{
			alert("added");
			this.category_filter[cat.id]=cat;
		}

		alert(this.category_filter.length);
	}
}
