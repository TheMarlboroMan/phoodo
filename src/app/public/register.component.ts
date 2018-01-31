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
	private	sending:boolean=false;

	public	get_message():string {return this.message;}

	public	is_show_form():boolean {return !this.sending;}

	public	submit_form():void {

		//TODO: Change the message and shit.
		console.log("SENDING DA FORM");
		this.sending=true;
		this.message="Enviando información...";

		//TODO: Send the form.

	}

}
