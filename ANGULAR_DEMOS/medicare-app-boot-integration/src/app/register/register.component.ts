import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user1:User;
  private registerres:string;
  constructor(private medicineService:MedicineService,private router:Router) {
    this.user1=new User;
   }

   ngOnInit() {
  }
  public Register(){
    this.medicineService.Register(this.user1).subscribe(res=>{
    console.log("response received")
       this.registerres="Registeration successful";
       
    },
    error=>{console.log("exception occured")
      this.registerres="User Already exists"}
    )
    }
}
