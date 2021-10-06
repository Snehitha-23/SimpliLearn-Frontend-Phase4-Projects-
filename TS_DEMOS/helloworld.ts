import { Hello } from "./hello";
import {  Calculator } from "./calculator";
export let x:string='Vinay';
//x=121;

console.log('Hello World from TS '+x);

function sayhello(name:string){

    console.log('hello from function '+name);
}

sayhello('RAJJJ');

sayhello('SIMRANNNNN');

let h=new Hello('Dineshh');

h.sayHello();
let c=new Calculator(2,3);
c.addition();