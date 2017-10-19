import {Injectable} from '@angular/core';

import {Dish} from './dish';
import {dishes} from './mock-data';

@Injectable()
export class DishService {

	get_dishes(): Promise<Dish[]> {
		return Promise.resolve(dishes);
	}

	get_dish_by_id(id: number):Promise<Dish> {
		return Promise.resolve(dishes[0]);
	}
}
