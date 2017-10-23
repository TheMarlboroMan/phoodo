import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Category} from './category';

//TODO: Implement a cache and update it?

@Injectable()
export class CategoryService {

	//TODO: Do shit right...
	private get_categories_url="http://www.caballorenoir.net/phoodo/api/api.php?action=get_categories";
	private get_categories_by_id_url="http://www.caballorenoir.net/phoodo/api/api.php?action=get_category_by_id&id=";

	public constructor(private http: Http){
	
	}

	public get_categories(): Promise<Category[]> {
		return this.http.get(this.get_categories_url)
			.toPromise()
			.then((response) => {return response.json().categories as Category[];})
			.catch(this.catch_error);
	}

	public get_category_by_id(id: number): Promise<Category> {
		var url=this.get_categories_by_id_url+id;
		return this.http.get(url)
			.toPromise()
			.then((response) => {return response.json().category as Category;})
			.catch(this.catch_error);
	}

	private catch_error(error: any): Promise<any> {
		console.error('Error', error);
		return Promise.reject(error.message || error);
	}
}
