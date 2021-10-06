import { Component, OnInit } from '@angular/core';
import { AddtocartComponent } from '../addtocart/addtocart.component';
import { Cart } from '../cart';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { User } from '../user';

@Component({
  selector: 'app-medicineslist',
  templateUrl: './medicineslist.component.html',
  styleUrls: ['./medicineslist.component.css']
})
export class MedicineslistComponent implements OnInit {
private medicinesList:Medicine[]=[];
private cartobj:Cart;
private cartItems:Medicine[]=[];
  constructor(private medicineService:MedicineService) {
   
   }

  ngOnInit() {
this.medicineService.getAllMedicines().subscribe(res=>{
this.medicinesList=res;
this.cartobj={
  id:0,
  products:[],
  user:null
  
}
})

  }
 
public AddToCart(medicine:Medicine){
  this.cartItems.push(medicine);
  this.cartobj.products=this.cartItems;
  
  this.medicineService.addToCart(this.cartobj).subscribe(res=>{
    window.alert('Your product has been added to the cart!');
  })
}


}
