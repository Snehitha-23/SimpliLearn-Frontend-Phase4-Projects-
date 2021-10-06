import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { User } from '../user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
private user:User;
private loginres:string;
private loginid:number;
  constructor(private medicineService:MedicineService,private router:Router) {
    this.user=new User;
   }

  ngOnInit() {
  }
  public Login(){
    this.medicineService.LoginUser(this.user).subscribe(res=>{
    console.log("response received")
       this.loginres="Login success";
       this.router.navigate(['/medicinesList']);
    },
    error=>{console.log("exception occured")
      this.loginres="Invalid cerenditials"}
    )
    }
}
