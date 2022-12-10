import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-allcomplaints',
  templateUrl: './view-allcomplaints.component.html',
  styleUrls: ['./view-allcomplaints.component.css']
})
export class ViewAllcomplaintsComponent {

constructor(private api:ApiService){
  this.api.viewAllcomplaints().subscribe(
    (response)=>{
      this.viewall=response
    }
  )
}

  viewall:any=[]
}
