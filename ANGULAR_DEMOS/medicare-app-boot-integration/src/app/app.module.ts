import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicineslistComponent } from './medicines-list/medicineslist.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MedicineService } from './medicine.service';
import { AdminComponent } from './admin/admin.component';
import { AdminspageComponent } from './adminspage/adminspage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { RegisterComponent } from './register/register.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { DeletemedicineComponent } from './deletemedicine/deletemedicine.component';
@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    MedicineslistComponent,
    AdminComponent,
    AdminspageComponent,
    UserloginComponent,
    AddtocartComponent,
    RegisterComponent,
    UpdatemedicineComponent,
    DeletemedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
