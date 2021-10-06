import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminspageComponent } from './adminspage/adminspage.component';
import { AppComponent } from './app.component';
import { DeletemedicineComponent } from './deletemedicine/deletemedicine.component';
import { MedicineslistComponent } from './medicines-list/medicineslist.component';
import { RegisterComponent } from './register/register.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [
  {path:'addMedicine',component:AddMedicineComponent},
  {path:'medicinesList',component:MedicineslistComponent},
  {path:'admin',component:AdminComponent},
  {path:'app',component:AppComponent},
  {path:'adminspage',component:AdminspageComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'addToCart',component:AddtocartComponent},
  {path:'register',component:RegisterComponent},
  {path:'updatemedicine',component:UpdatemedicineComponent},
  {path:'deletemedicine',component:DeletemedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
