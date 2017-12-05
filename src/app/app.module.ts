//Modules...
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms'; TODO...
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

//Components...
import { AppComponent } from './app.component';
import { BaseViewComponent} from './base-view-component.component';
import { WelcomeComponent } from './welcome.component';
import { AppNavigationComponent } from './app-navigation.component';
import { DishListComponent } from './dish-list.component';
import { DishDetailComponent } from './dish-detail.component';
import { DishPreviewComponent } from './dish-preview.component';
import { PlannerComponent } from './planner.component';
import { RegisterComponent} from './register.component';

//Global services...
import { NavigationService } from './navigation.service';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		AppNavigationComponent,
		DishDetailComponent,
		DishListComponent,
		DishPreviewComponent,
		PlannerComponent,
		RegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule,
	],
	providers: [NavigationService], //This makes the same service available for all children as a single instance.
	bootstrap: [AppComponent]
})

export class AppModule { }
