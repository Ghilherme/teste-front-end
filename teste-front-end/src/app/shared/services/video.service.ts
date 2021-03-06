import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

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

    public getVideo( id: string ): Observable<object>
	{
		let params = `videos?id=${id}&part=snippet,statistics&key=${this.KEY}`;
		return this.http.get( this.URL_API + params )
		.map( (response: Response) => response.json())
		.catch( this.handleError );
	}

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    public nextPageVideo(id:string, nextPage: string){
        let params = `search?part=id,snippet&q=${id}&pageToken=${nextPage}&key=${this.KEY}`
        return this.http.get(this.URL_API + params)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    public filterData( data: any )
	{
        console.log(data)
        if ( !data['activePage'] )
			data['activePage'] = 1;
		
		data['totalResults'] = data['items'].length;
        data['totalPages'] = Math.ceil( data['pageInfo'].totalResults / data['pageInfo'].resultsPerPage );
		return data;
	}

}