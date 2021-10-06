import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
private question:Questions;
  constructor(private quizService:QuizService,private router:Router) {
    this.question=new Questions();
   }
public addQuestion():void{
  this.quizService.addQuestion(this.question).subscribe(res=>{
    this.question=new Questions();
    this.router.navigate(['/questionsList']);
  }

  )
}


  ngOnInit() {
  }

}
