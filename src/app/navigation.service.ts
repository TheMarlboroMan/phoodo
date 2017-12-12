import {Injectable} from '@angular/core';

//TODO: Comment this shit, tell me what it does.

@Injectable()
export class NavigationService {

	private visible:boolean=true;

	public constructor() {
	}

	public is_visible():boolean {
		return this.visible;
	}

	public hide():void {
		this.visible=false;
	}

	public show():void {
		this.visible=true;
	}
}
