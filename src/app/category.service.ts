import {Injectable} from '@angular/core';

import {Category} from './category';
import {categories} from './mock-data';

@Injectable()
export class CategoryService {
	get_categories(): Promise<Category[]> {
		return Promise.resolve(categories);
	}
}
