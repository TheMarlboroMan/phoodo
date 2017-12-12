import {Component, OnInit} from '@angular/core';
import {NavigationService} from './navigation.service';

//TODO: Comment this shit, tell me what it does.

@Component({

})
export class BaseViewComponent implements OnInit {

	public constructor(protected navservice:NavigationService){

	}

	//TODO: Actually this is NOT a good idea... more stuff could be called "onInit".

	//TODO. you know what could actually be better?. To call a method of this
	//thing on the ngOnInit of each component. Somewhat this is much more
	//coupled that it should.

	public ngOnInit():void {
		console.log("BaseViewComponent shows the thing");
		this.navservice.show();
	}
};
