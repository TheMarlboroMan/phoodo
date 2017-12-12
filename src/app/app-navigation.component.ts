import {Component, OnInit} from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './app-navigation.component.html',
	styleUrls: ['./app-navigation.component.css'],
})

//TODO: An idea for this shit is to have a service that controls the visibility
//of this crap, even if it must be registered with every single component
//of the application, which basically sucks.

export class AppNavigationComponent implements OnInit {

	public constructor(private navservice: NavigationService){

	}

	public ngOnInit():void {
		console.log("Navigation component initialised");
	}	

	public is_visible():boolean {
		console.log("Component asked for visibility");
		return this.navservice.is_visible();
	}
}
