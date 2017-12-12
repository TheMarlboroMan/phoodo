import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {CategoryService} from './category.service';
import {Dish} from './dish';
import {Category} from './category';

@Injectable()
export class DishService {

	//TODO: Do this right...
	private get_dishes_url='http://www.caballorenoir.net/phoodo/api/api.php?action=get_dishes';
	private get_dish_url='http://www.caballorenoir.net/phoodo/api/api.php?action=get_dish&id=';

	public constructor(
		private http: Http,
		private category_service: CategoryService){
	}

	get_dishes(): Promise<Dish[]> {

		//Okay, this is a way to artificially delay things...
		//See, it creates a function that receives a callback and sets a timeout to call the callback with the value.
		//That function is fed to a promise... What this seems to is bind the "resolve" of the promise to "cb"
		//to the promise does the timeout and then does its "then" upon that, if that makes any sense.

		function crap(value) {
			function c(cb) {setTimeout( () => {cb(value);}, 2000);};
			return new Promise(c);
		}

		return this.http.get(this.get_dishes_url)
			.toPromise()
			.then( (response) => {
				var result=[];
				response.json().dishes.forEach((item, index) => {
					this.build_dish(item)
						.then(res => {result.push(res);})
				});
				return result;
			})
			.then(crap)
			.then( (delayedresult) => {
				console.log("I waited...", delayedresult);
				return delayedresult;
			})
			.catch(this.catch_error);
	}

	get_dish_by_id(id: number):Promise<Dish> {
		let url=this.get_dish_url+id;
		return this.http.get(url)
			.toPromise()
			.then(response => this.build_dish(response.json().dish))
			.catch(this.catch_error);
	}

	private catch_error(error: any): Promise<any> {
		console.error('Error', error);
		return Promise.reject(error.message || error);
	}

	private build_dish(data): Promise<Dish> {
		return Promise.resolve(this.category_service.get_category_by_id(data.category_id))
			.then( (category) => {return <Dish>{id: data.id, name: data.name, category: category};});
	}
}
