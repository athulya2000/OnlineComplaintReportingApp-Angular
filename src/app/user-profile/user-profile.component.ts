import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
userId:any=""

constructor(private api:ApiService){
  this.userId=localStorage.getItem("userInfo")
  let data:any={"id":this.userId}
  this.api.viewProfile(data).subscribe(
    (response:any)=>{
      console.log(response)
      this.data=response
    }
  )
}
data:any=[]
 
  
}

