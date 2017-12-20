//Modules...
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


//Custom modules.
import {SharedModule} from './shared/shared.module';
import {LayoutModule} from './layout/layout.module';
import {PublicModule} from './public/public.module';

//Components...
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		LayoutModule,
		PublicModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
