import { Component, OnInit, ɵPlayer } from '@angular/core';
import {Player} from "../player";
@Component({
  selector: 'app-bindingdemo',
  templateUrl: './bindingdemo.component.html',
  styleUrls: ['./bindingdemo.component.css']
})
export class BindingdemoComponent implements OnInit {
message:string;
url:string;
player:Player;
  constructor() { 
    this.player=new Player();
  }

  ngOnInit() {
  }
sayHello():void{
this.message="Hello from event binding";
}
sayHi():void{
  this.message="Hello from event binding,Hey I am JERRRYYY and its me below which is done using property binding";
  this.url="https://media.tenor.com/images/91adc4c2619963eb5d1a827d90ca485f/tenor.gif"
}
}
