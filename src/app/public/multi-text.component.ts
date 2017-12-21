import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, UrlSegment, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap';

import {StaticSectionService} from './static-section.service';
import {StaticSectionModel} from './static-section.model';

@Component({
	templateUrl:'./multi-text.component.html',
	styleUrls:['./multi-text.component.css']
})
export class MultiTextComponent implements OnInit {

	private	model:StaticSectionModel=null;

	public	constructor(
		private	sss:StaticSectionService,
		private actroute:ActivatedRoute,
		private r:Router){

	}

	public	ngOnInit():void {

		this.actroute.url.
			switchMap((data:UrlSegment[]) => {
				this.model=null;
				return Promise.resolve(data[0].path);
			})
			.subscribe((data:string) => {

				this.sss.get_section(data)
					.then( (sm:StaticSectionModel) => {
						this.model=sm;
					})
					//TODO: This is bullshit: doesn't work!.
					.catch( (err) => {
						//TODO: Go to 404.
						console.log("FUCK YOU AND NAVIGATE TO 404 XD!");
						this.r.navigate(['home']);
					});
			});
	}

	public	is_loaded():boolean {return this.model!==null;}
	public	get_section_body():string {return this.model.body;}
	public	get_section_subtitle():string {return this.model.subtitle;}
	public	get_section_title():string {return this.model.title;}

}
