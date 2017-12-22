import {Component} from '@angular/core';

//Animations...
import {PublicAnimationChangeSection} from './public/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [PublicAnimationChangeSection]
})

export class AppComponent{

	public	animate_public(outlet) {

		return outlet.isActivated ? outlet.activatedRoute : '';
	}

}
