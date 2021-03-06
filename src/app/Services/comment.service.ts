import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/classes/user';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url="http://localhost:3000/comment";

  httpOptions:any;

  constructor(private http:HttpClient) { }

  getComment():Observable<Object>{
    return this.http.get(`${this.url}`);
  }

  postComment(obj:any):Observable<Object>{
    this.httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
    return this.http.post(`${this.url}`,obj,this.httpOptions);
  }
  
}
