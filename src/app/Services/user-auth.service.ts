import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) {} 
   getUserByEmail(custEmail:any){
    return this.http.get("http://localhost:8083/customers");
  }
}
