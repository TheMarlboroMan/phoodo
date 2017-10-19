import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list.component';
import { DishDetailComponent } from './dish-detail.component';
import { DishPreviewComponent } from './dish-preview.component';
import { PlannerComponent } from './planner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
	AppComponent,
	DishDetailComponent,
	DishListComponent,
	DishPreviewComponent,
	PlannerComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	RouterModule.forRoot([
		{path: 'all-dishes', component: DishListComponent},
		{path: 'planner', component: PlannerComponent},
		{path: '', redirectTo: '/all-dishes', pathMatch: 'full'},
		{path: 'dish/:id', component: DishDetailComponent}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


