import { Component, OnInit } from '@angular/core';
import{Animal} from '../animal';
import{AnimalService} from '../animal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  private animal:Animal;
// navigation between
  constructor(private annimalService:AnimalService,private router:Router) { 
    this.animal=new Animal;
  }
public addAnimal():void{
  this.annimalService.addAnimal(this.animal).subscribe(res=>{
    this.animal=new Animal();
    this.router.navigate(['/animalsList']);
  })
}
  ngOnInit() {
  }

}
