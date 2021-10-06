import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App'
  developer='Snehitha';
  test=new Test(101,'Sachin','INDIA');

}
class Test{
  id:number;
  name:string;
  team:string;
constructor(id:number,name:string,team:string){
this.id=id;
this.name=name;
this.team=team;
}


}
