import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	public API = new BehaviorSubject<any>([]);
	public videosearch = new BehaviorSubject<string>('');

	constructor() { }

}