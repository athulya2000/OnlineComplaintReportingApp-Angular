import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent {
  emailid=""
  password=""

  searchUser:any=[]

  constructor(private api:ApiService,private route:Router){}

  readValues=()=>{
    let data:any={"emailid":this.emailid,"password":this.password}
    console.log(data)
    this.api.userSign(data).subscribe(
      (Response:any)=>{
        this.emailid=""
          this.password=""
        if (Response.status=="success") {
          let userId=Response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.route.navigate(['/profile'])
          
        } else {
          alert(Response.message)
          
        }
      }
    )
  }
}
