import {NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';

import {ApiUserService} from './api-user.service';

@NgModule({
//	providers: [ApiUserService]
})
export class CoreModule {
	public static	forRoot():ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [ApiUserService]
		};
	}
	public	constructor(@Optional() @SkipSelf() guard:CoreModule) {

		console.log("Loading CoreModule");
		if(guard){
			throw new Error('CoreModule was already loaded.');
		}
	}
}
