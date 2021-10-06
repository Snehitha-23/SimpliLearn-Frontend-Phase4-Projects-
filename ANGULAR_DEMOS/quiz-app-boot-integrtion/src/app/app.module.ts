import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuizService } from './quiz.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
