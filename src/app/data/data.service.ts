import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IData } from './data';

@Injectable()
export class DataService {

    private _dataUrl = './api/data/drifterData.json';

    constructor(private _http: Http) { }

    getData(): Observable<IData[]> {
        return this._http.get(this._dataUrl)
        .map((response: Response) => <IData[]>response.json())
      //  .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    saveData(data): any {
        console.log(data);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');

    }
}