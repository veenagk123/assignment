import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  constructor(private http:HttpClient) { }
  fetchImage(id: number): Observable<any> {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.get(url);
  }
}
