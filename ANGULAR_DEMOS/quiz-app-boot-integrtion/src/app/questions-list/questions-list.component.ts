import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
private questionsList:Questions[];

  constructor(private quizService:QuizService) { }

  ngOnInit() {
this.quizService.getAllQuestions().subscribe(res=>{
  this.questionsList=res;

  
});

  }
  private selectedLink: string="Male";        
  
  setradio(e: string): void   
{  

      this.selectedLink = e;  
        
}  
private selectedAnswer: string="";  
  isSelected(name: string,question: any): void
{  
//   document.write(name);
// document.write(question);
      if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
          this.selectedAnswer="select an option";  
}  

// return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
if(this.selectedLink === name){
  if(name===question){
    this.selectedAnswer="Correct";
  }

else{
  this.selectedAnswer="Wrong";
}
  }   
}
// result(option: string, answer: string):boolean
// {
//   if(option===answer){
//     return true;
//   }
//   else
//   return false;
// }

}
