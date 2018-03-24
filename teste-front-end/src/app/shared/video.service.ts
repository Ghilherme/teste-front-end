import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {VideoModel} from '../shared/video-model';

@Injectable()
export class VideoService {

    private URL_API: string = 'https://www.googleapis.com/youtube/v3/';
	private KEY: string = 'AIzaSyCwTjeEkxNt_Q3ZGCacw0eVB_q642jKzvU';

    constructor(private http: Http){}

    public searchVideo(id: string): Observable<object> {
        let params = `search?part=id,snippet&q=${id}&key=${this.KEY}`;
        return this.http.get(this.URL_API + params)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}