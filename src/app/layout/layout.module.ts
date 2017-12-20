import {NgModule} from '@angular/core';

import {HeaderPublicComponent} from './header-public.component';
import {FooterComponent} from './footer.component';

@NgModule({
	declarations: [
		HeaderPublicComponent,
		FooterComponent,
	],
	exports: [
		HeaderPublicComponent,
		FooterComponent,
	]
})
export class LayoutModule {

}
