import {Component, Input} from '@angular/core';
import {Dish} from './dish';
import {Category} from './category';

@Component({
	selector: 'dish-preview',
	templateUrl: './dish-preview.component.html'
})

export class DishPreviewComponent {
	//Properties...
	@Input() dish: Dish;
}
