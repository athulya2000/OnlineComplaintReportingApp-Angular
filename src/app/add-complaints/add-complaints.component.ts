import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaints',
  templateUrl: './add-complaints.component.html',
  styleUrls: ['./add-complaints.component.css']
})
export class AddComplaintsComponent {
 complaints=""

 constructor(private api:ApiService){}

 readValues=()=>{
  let data:any={
    "userid":localStorage.getItem("userInfo"),
    "complaints":this.complaints
   }
   this.api.addComplaints(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("complaint added successfully")
        this.complaints=""
      } else {
        alert("something went wrong")
      }
    }
   )
  
 }
 
 
}
