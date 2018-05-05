import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExternalapiService {

  constructor(private http: Http) { }

  getSearchResults(serviceUri:string) {
    return this.http.get(serviceUri)
    .map((res:Response) => res.json());
  }
}
