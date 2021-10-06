import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrls: ['./updatemedicine.component.css']
})
export class UpdatemedicineComponent implements OnInit {

  private medicine:Medicine;
  private updateres:string;
  constructor(private medicineService:MedicineService,private router:Router) {
    this.medicine=new Medicine;
   }
   ngOnInit() {
  }

   public updateMedicine():void{
    this.medicineService.updateMedicine(this.medicine).subscribe(res=>{
      console.log("response received")
       this.updateres="Updated successfully";
      },
      error=>{console.log("exception occured")
        this.updateres="Failure to update!!Try Again"}
      )
      }
  }

 

