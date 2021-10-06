import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FullNamePipe } from './full-name.pipe';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FullNamePipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
