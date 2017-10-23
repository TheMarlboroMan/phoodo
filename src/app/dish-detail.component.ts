import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {DishService} from './dish.service';
import {CategoryService} from './category.service';
import {Dish} from './dish';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'dish-detail',
	templateUrl: './dish-detail.component.html',
	providers: [DishService, CategoryService]
})

export class DishDetailComponent implements OnInit {

	dish: Dish;

	public constructor(
		private dish_service: DishService,
		private route: ActivatedRoute,
		private location: Location
	){

	}

	public ngOnInit():void {
		this.route.paramMap.
			switchMap((params:ParamMap) => this.dish_service.get_dish_by_id(+params.get('id'))).
			subscribe((data:Dish) => this.dish=data);
	}

	public go_back():void {
		this.location.back();
	}
}
