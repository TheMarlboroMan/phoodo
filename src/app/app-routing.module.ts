import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DishListComponent} from './dish-list.component';
import {PlannerComponent} from './planner.component';
import {DishDetailComponent} from './dish-detail.component';

const router_config=[
	{path: 'all-dishes', component: DishListComponent},
	{path: 'planner', component: PlannerComponent},
	{path: '', redirectTo: '/all-dishes', pathMatch: 'full'},
	{path: 'dish/:id', component: DishDetailComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(router_config)],
	exports: [RouterModule]
})

export class AppRoutingModule {

};
