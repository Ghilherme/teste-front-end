import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import VideoModel from './video-model';

@Injectable()
export class DataService {

	public API = new BehaviorSubject<any>([]);

	constructor() { }

}