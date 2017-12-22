import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
//TODO: I am pretty much sure this shit will be EVERYWHERE. Maybe load it in shared?
import {FormsModule} from '@angular/forms';

import {HomeComponent} from './home.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {TextComponent} from './text.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

import {StaticSectionService} from './static-section.service';

import {BypassHtmlSanitizerPipe} from './bypass-html-sanitizer.pipe';

import {Routing} from './routing';

@NgModule({
	declarations: [
		HomeComponent,
		PageNotFoundComponent,
		TextComponent,
		LoginComponent,
		RegisterComponent,
		BypassHtmlSanitizerPipe,
	],
	imports: [
		SharedModule,
		Routing,
		FormsModule,
	],
	exports: [
		HomeComponent,
		PageNotFoundComponent,
		TextComponent,
		LoginComponent,
		RegisterComponent,
		BypassHtmlSanitizerPipe,
	],
	providers: [
		StaticSectionService,
	]
})
export class PublicModule {
}
