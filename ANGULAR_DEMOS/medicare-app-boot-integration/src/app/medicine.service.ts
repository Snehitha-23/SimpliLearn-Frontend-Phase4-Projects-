import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Medicine } from './medicine';
import { Admin } from './admin';
import {catchError} from 'rxjs/operators'
import { User } from './user';
import { Cart } from './cart';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
private  url:string;
private urladmin:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:1700/medicine";
    this.urladmin="http://localhost:1700/adminauthenticate";
  }

  public addMedicine(medicine:Medicine):Observable<Medicine>{
    return this.http.post<Medicine>(this.url,medicine);
  }
  public getAllMedicines():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url+"s");

  }
 
public Login(admin:Admin):Observable<any>
{
return this.http.post<any>(this.urladmin,admin);
}

public Register(user:User):Observable<any>
{
return this.http.post<any>("http://localhost:1700/user/register",user);
}
public LoginUser(user:User):Observable<any>
{
    return this.http.post<any>("http://localhost:1700/user/login",user);
}

public addToCart(cartobj:Cart):Observable<any>
{
  return this.http.post<any>("http://localhost:1700/cart",cartobj);
}

public updateMedicine(medicine:Medicine):Observable<any>
{
  return this.http.put<any>("http://localhost:1700/medicine",medicine);
}


public getAllCartItems():Observable<any>
{
  return this.http.get<Cart[]>("http://localhost:1700/carts");
}
}
