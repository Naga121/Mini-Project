import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url="http://localhost:3000/item";

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get(this.url);
  }
}
