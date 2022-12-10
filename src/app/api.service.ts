import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userRegister=(data:any)=>{
    return this.http.post("http://localhost:8080/registration",data)
  }
  userSign=(data:any)=>{
    return this.http.post("http://localhost:8080/signin",data)
  }
  viewProfile=(data:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",data)
  }
}
