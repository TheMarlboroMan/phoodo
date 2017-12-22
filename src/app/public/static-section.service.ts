import {Injectable} from '@angular/core';

import {StaticSectionModel} from './static-section.model';

import {static_texts} from './static-section.data';

@Injectable()
export class StaticSectionService {

	public	get_section(key:string):Promise<StaticSectionModel> {

		return Promise.resolve(
			() => static_texts[key]);
/*
		if(static_texts.hasOwnProperty(key)) {
			return Promise.resolve(static_texts[key]);
		}
		else {
			//TODO: This does NOT WORK.
			throw new Error("Unknown section "+key);
		}
*/
	}
}
