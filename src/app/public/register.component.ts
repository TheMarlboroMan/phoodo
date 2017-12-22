import {Component} from '@angular/core';

import {SharedModule} from '../shared/shared.module';


class DataModel {
	email:string="";
	pass:string="";
	verify:string="";
};

@Component({
	templateUrl: './register.component.html',
	styleUrls:['./register.component.css'],
})
export class RegisterComponent {

	public	data_model:DataModel=new DataModel();
	private	message:string="";

	public	get_message():string {return this.message;}

	public	submit_form():void {

		//TODO: Send the form.
		//TODO: Change the message and shit.
		//TODO: Verify must be exactly the same as email and shit.
	}

}
