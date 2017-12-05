import {Component, OnInit} from '@angular/core';
import {BaseViewComponent} from './base-view-component.component';

@Component({
	templateUrl: 'welcome.component.html',
	styleUrls: ['./welcome.component.css'],
})

export class WelcomeComponent extends BaseViewComponent {

	public ngOnInit():void {

		//TODO: This is actually pretty much stupid, unless there is more stuff
		//in the BaseViewComponent... That should ONLY do view stuff, right?.
		//console.log("Welcome component calls the super and shit");
		//super.ngOnInit();

		this.navservice.hide();
	}
}
