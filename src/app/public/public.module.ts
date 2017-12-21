import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {HomeComponent} from './home.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {MultiTextComponent} from './multi-text.component';

import {StaticSectionService} from './static-section.service';

import {BypassHtmlSanitizerPipe} from './bypass-html-sanitizer.pipe';

import {Routing} from './routing';

@NgModule({
	declarations: [
		HomeComponent,
		PageNotFoundComponent,
		MultiTextComponent,
		BypassHtmlSanitizerPipe,
	],
	imports: [
		SharedModule,
		Routing
	],
	exports: [
		HomeComponent,
		PageNotFoundComponent,
		MultiTextComponent,
		BypassHtmlSanitizerPipe,
	],
	providers: [
		StaticSectionService,
	]
})
export class PublicModule {
}
