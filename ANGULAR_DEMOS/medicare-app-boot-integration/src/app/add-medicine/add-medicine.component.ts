import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
private medicine:Medicine;
  constructor(private medicineService:MedicineService,private router:Router) {
    this.medicine=new Medicine;
   }
public addMedicine():void{
  this.medicineService.addMedicine(this.medicine).subscribe(res=>{
    this.medicine=new Medicine();
    this.router.navigate(['/medicinesList']);
  })
}




  ngOnInit() {
  }

}
