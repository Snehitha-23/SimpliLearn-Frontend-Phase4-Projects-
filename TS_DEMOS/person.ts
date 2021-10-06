export class Person{
    private id:number;
    private name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    public printPerson():void{
        console.log('id ='+this.id);
        console.log('name ='+this.name);
    }
}