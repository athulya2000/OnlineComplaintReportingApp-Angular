import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-mycomplaints',
  templateUrl: './view-mycomplaints.component.html',
  styleUrls: ['./view-mycomplaints.component.css']
})
export class ViewMycomplaintsComponent {
userId:any=""
constructor(private api:ApiService){
  this.userId=localStorage.getItem("userInfo")
  let data:any={"userid":this.userId}
  this.api.viewMycomplaints(data).subscribe(
    (response:any)=>{
      console.log(response)
      this.Data=response
    }
  )
  
}
 Data:any=[] 

}
