import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/photos")//it is observable of type any.
    .pipe(map((res:any)=>{ 
      return res;
    }))
  }
}