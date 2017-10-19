import {Dish} from './dish';
import {Category} from './category';


export const categories: Category[]=[
	{id: 1, name: "Carnes"},
	{id: 2, name: "Entrantes"},
	{id: 3, name: "Otros"},
	{id: 4, name: "Verduras"},
	{id: 5, name: "Pescados"}
];

//This should go away too...

export const dishes: Dish[]=[
	{id: 1, name: "Pollo a la miel", 	category: categories[0]},
	{id: 2, name: "Gazpacho", category: 	categories[1]},
	{id: 3, name: "Lomo a la sal", 		category: categories[0]},
	{id: 4, name: "Ajoblanco", category: 	categories[2]},
	{id: 5, name: "Arroz especial Nete", 	category: categories[2]},
	{id: 6, name: "Menestra de verduras", 	category: categories[3]},
	{id: 7, name: "Pisto", category: 	categories[3]},
	{id: 8, name: "Merluza al ajillo", 	category: categories[4]},
	{id: 9, name: "Espinacas con garbanzos", category: categories[3]},
	{id: 10, name: "Hummus",		category: categories[1]}
];
