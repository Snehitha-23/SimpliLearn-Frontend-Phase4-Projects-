import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { MedicineService } from '../medicine.service';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
private cartList:Cart[];
  constructor(private medicineService:MedicineService) { }

  ngOnInit() {
    this.medicineService.getAllCartItems().subscribe(res=>{
      this.cartList=res;
    })
  }

}
