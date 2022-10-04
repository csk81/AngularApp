import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  custEmail: string = "";
  custPass: string = "";
  employee: any;
  id: any;
  invalidLogin: boolean | undefined;

  constructor(private service:UserAuthService) { }

  ngOnInit(): void {
  }
  doLogin(user:NgForm){
    console.log(user.value)
   this.service.getUserByEmail(user.value.custEmail).subscribe((users) => {  
    console.log(users);
  })}

}
