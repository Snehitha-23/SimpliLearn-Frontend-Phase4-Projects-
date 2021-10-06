import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
private admin:Admin;
private loginres:string;
  constructor(private medicineService:MedicineService,private router:Router) {
    this.admin=new Admin;
   }
   ngOnInit() {
  }
public Login(){
this.medicineService.Login(this.admin).subscribe(res=>{
console.log("response received")
   this.loginres="Login success";
this.router.navigate(['/adminspage']);
},
error=>{console.log("exception occured")
  this.loginres="Invalid cerenditials"}
)
}

}

  


