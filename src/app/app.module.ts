import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list.component';
import { DishDetailComponent } from './dish-detail.component';

@NgModule({
  declarations: [
	AppComponent,
	DishDetailComponent,
	DishListComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
