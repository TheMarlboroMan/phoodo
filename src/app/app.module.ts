//Modules...
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgModule} from '@angular/core';

//Custom modules.
import {SharedModule} from './shared/shared.module';
import {LayoutModule} from './layout/layout.module';
import {PublicModule} from './public/public.module';

//Components...
import { AppComponent } from './app.component';

//Routing...
import {Routing} from './routing';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		LayoutModule,
		PublicModule,
		BrowserAnimationsModule,	
		Routing
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
