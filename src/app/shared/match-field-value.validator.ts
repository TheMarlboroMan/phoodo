import {Directive, forwardRef, Attribute} from '@angular/core';
import {AbstractControl, Validator, ValidationErrors, NG_VALIDATORS, FormControl} from '@angular/forms';

//Some good info can be found here... https://stackoverflow.com/questions/35474991/angular-2-form-validating-for-repeat-password

@Directive({
	selector: '[matchFieldValue][ngModel]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchFieldValueValidator), multi: true }
	]
})
export class MatchFieldValueValidator implements Validator {

	constructor( @Attribute('matchFieldValue') public match_control_id: string) {

	}

	public	validate(c:AbstractControl):ValidationErrors | null {

		if(!c.root.get(this.match_control_id)) {
			throw new Error(this.match_control_id+" control does not exist!");
		}

		if(c.value===c.root.get(this.match_control_id).value) {
			return null;
		}
		else {
			return {matchFieldValue: false};
		}
	}
}
