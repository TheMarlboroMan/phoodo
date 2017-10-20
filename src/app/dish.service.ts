import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Dish} from './dish';

@Injectable()
export class DishService {

	//TODO: Do this right...
	private get_dishes_url='http://www.caballorenoir.net/phoodo/api/api.php?action=get_dishes';
	private get_dish_url='http://www.caballorenoir.net/phoodo/api/api.php?action=get_dish&id=';

	public constructor(private http: Http){

	}

	get_dishes(): Promise<Dish[]> {
		console.log("requesting all dishes");
		return this.http.get(this.get_dishes_url)
			.toPromise()
//TODO: We should also get the categories... right?.
			.then( (response) => {return response.json().dishes as Dish[];})
			.catch(this.catch_error);
	}

	get_dish_by_id(id: number):Promise<Dish> {
		console.log("requesting a single dish");
		let url=this.get_dish_url+id;
		return this.http.get(url)
			.toPromise()
			.then((response) => {return response.json().dish as Dish;})
			.catch(this.catch_error);
	}

	private catch_error(error: any): Promise<any> {
		alert('ERROR');
		console.error('Error', error);
		return Promise.reject(error.message || error);
	}
}
