//Modules...
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms'; TODO...
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

//Components...
import { AppComponent } from './app.component';
import {AppNavigationComponent} from './app-navigation.component';
import { DishListComponent } from './dish-list.component';
import { DishDetailComponent } from './dish-detail.component';
import { DishPreviewComponent } from './dish-preview.component';
import { PlannerComponent } from './planner.component';

@NgModule({
	declarations: [
		AppComponent,
		AppNavigationComponent,
		DishDetailComponent,
		DishListComponent,
		DishPreviewComponent,
		PlannerComponent,
	],
	imports: [
		BrowserModule,
//		FormsModule, //TODO
		AppRoutingModule,
		HttpModule
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
