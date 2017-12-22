import {animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

export const PublicAnimationChangeSection: AnimationEntryMetadata=trigger('publicchangesection', [
	state('in', style({opacity: 1})),
	transition(':enter', [
		style({opacity: 0}),
		animate('0.3s ease-in')]),
	transition(':leave', [
		animate(
			'0.5s ease-out', 
			style({opacity: 0}))
		])
]);
