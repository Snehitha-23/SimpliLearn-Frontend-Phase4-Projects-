import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import {Animal} from '../animal';
@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {
private animalsList:Animal[];

  constructor(private animalService:AnimalService) {
    
   }

  ngOnInit() {
    this.animalService.getAllAnimals().subscribe(res=>{
      this.animalsList=res;
    });
  }

}
