export class Calculator{
    private name:number;
    private name1:number;
    constructor(name:number,name1:number){
        this.name=name;
        this.name1=name1;
    }

    public addition():void{
        console.log('Addition is  '+(this.name+this.name1));

    }
    public subtraction():void{
        console.log('Subtraction is  '+(this.name-this.name1));

    }
    public multiplication():void{
        console.log('Multiplication is  '+(this.name*this.name1));

    }
    public division():void{
        console.log('Division is  '+(this.name/this.name1));

    }
}
