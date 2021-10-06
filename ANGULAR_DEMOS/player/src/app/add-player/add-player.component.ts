import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerList:Player[]=[];

  playerModel:Player;

  playerTable:boolean=false;

  idModel:number;

  constructor() { 

    this.playerModel=new Player();

  }



  ngOnInit() {

  }



  public addPlayer():void{

    this.playerTable=true;

    this.playerList.push(this.playerModel);

    this.playerModel=new Player();

  }

public removeLastPlayer():void{

  this.playerList.pop();

  if(this.playerList.length===0){

    this.playerTable=false;

  }

}

  

public removePlayerById():void{

//  const index: number = this.playerList.indexOf[this.idModel];

  //here goes your logic to delete the player by id remember id is captured in idModel object
//   this.playerModel.id=this.idModel;
//   this.playerList.indexOf[this.playerModel.id];
//  let index:number =this.playerList.indexOf(this.idModel);
//  let index1:number=this.idModel;
// this.playerList.indexOf[this.playerModel.id]= this.idModel;
// console.log(this.playerList.indexOf(this.idModel));
// this.playerList.splice(index,1);
// console.log(index);
// console.log(index1);
 this.playerList.splice(this.playerList.findIndex(item =>item.id===this.idModel),1)

  if(this.playerList.length===0){

    this.playerTable=false;

  }

}



}
