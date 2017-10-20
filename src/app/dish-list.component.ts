import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Dish} from './dish';
import {Category} from './category';
import {DishDetailComponent} from './dish-detail.component';
import {DishService} from './dish.service';
import {CategoryService} from './category.service';

//TODO: Separate dish and category lists and stuff...

@Component({
	selector: 'dish-list',
	providers: [DishService, CategoryService],
	styleUrls: ['./dish-list.component.html'],
	templateUrl: './dish-list.component.html'
})

export class DishListComponent implements OnInit{

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

		if(!this.category_filter.length) {
			this.category_filter.push(cat);
		}
		else {
			let item_found=-1;
			this.category_filter.forEach((item, index) => {
				if(item.id==cat.id) item_found=index;
			});

			if(item_found!=-1) {
				this.category_filter.splice(item_found, 1);
			}
			else {
				this.category_filter.push(cat);
			}
		}
	}
}
