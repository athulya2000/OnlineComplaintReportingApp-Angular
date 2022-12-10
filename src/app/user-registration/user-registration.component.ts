import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  phoneno=""
  dob=""
  emailid=""
 password=""

 constructor(private api:ApiService,private route:Router){}

 readValues=()=>{
  let data:any={"name":this.name,"address":this.address,"phoneno":this.phoneno,"dob":this.dob,"emailid":this.emailid,"password":this.password}
  console.log(data)
  this.api.userRegister(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("successfully registerd")
        this.name=""
        this.address=""
        this.phoneno=""
        this.dob=""
        this.emailid=""
        this.password=""
        this.route.navigate(['/signin'])
      } else {
        alert("something went wrong")
      }
    }
  )
 }
}
