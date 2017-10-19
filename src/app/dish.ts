export class Category {

	id: number;
	name: string;
}

export class Dish {
	id: number;
	name: string;
	category: Category;
}
