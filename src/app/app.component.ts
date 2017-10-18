import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
	title = 'Phoodo is here!!!';
	current : Dish = {
		id: 1,
		name: "Pollo a la miel"
	}
}

export class Category {

	id: number;
	name: string;
}

export class Dish {
	id: number;
	name: string;
}
