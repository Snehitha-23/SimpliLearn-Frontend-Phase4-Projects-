import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Questions}from './questions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9400/question";
  }
  public addQuestion(question:Questions):Observable<Questions>{
return this.http.post<Questions>(this.url,question);
  }
  public getAllQuestions():Observable<Questions[]>{
    return this.http.get<Questions[]>(this.url+"s");
  }


  
}
