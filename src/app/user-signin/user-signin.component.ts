import { Component } from '@angular/core';
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

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"emailid":this.emailid,"password":this.password}
    console.log(data)
    this.api.userSign(data).subscribe(
      (Response:any)=>{
        console.log(Response)
        if (Response.length==0) {
          alert("invalid emial or password")
          this.emailid=""
          this.password=""
        } else {
          this.searchUser=Response
          
        }
      }
    )
  }
}
