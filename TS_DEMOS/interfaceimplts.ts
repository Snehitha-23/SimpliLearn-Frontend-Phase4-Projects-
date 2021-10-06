import { MyInterface1, MyInterface2 } from "./interfacesdemo";

class implementors implements MyInterface1,MyInterface2{
hello1(){
    throw new Error("Method not implemented.");
}
hello2(){
    throw new Error("Method not implemented.");
}
hello3(){
    throw new Error("Method not implemented.");
}
}