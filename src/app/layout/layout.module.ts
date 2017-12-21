import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {HeaderPublicComponent} from './header-public.component';
import {FooterComponent} from './footer.component';

@NgModule({
	declarations: [
		HeaderPublicComponent,
		FooterComponent,
	],
	imports: [
		SharedModule,
		RouterModule,
	],
	exports: [
		HeaderPublicComponent,
		FooterComponent,
	]
})
export class LayoutModule {

}
