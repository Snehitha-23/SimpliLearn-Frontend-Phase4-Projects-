import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';


const routes: Routes = [
{path:'addQuestion',component:AddQuestionComponent},
{path:'questionsList',component:QuestionsListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
