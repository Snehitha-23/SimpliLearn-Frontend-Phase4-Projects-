// //In const array we can push the new value.
// //Its always better to use let or constant than var.
// const person={
// name:'Steve',
// age:30,
// hobbies:['waterpolo','reading']
// };
// //const name=person.name;
// const{ name,age }=person;
// console.log(name,age);
// //to renmame
// const{ name:firstName }=person;
// console.log(name);

//data types==> varibaletype name:datatype=value;
const isAdmin:boolean=true;
const age:number=23;
//hexa and oct also number
const name1:string="snegitha";
const name2:string='acsyts';
const array:number[]=[1,2,3];

const array1:(number|string)[]=[1,2,3,"savgh",7];
const data:any=1;
//any is used to specify any data type
const mix:any[]=['sdssd',3333];
///type is to define our own type
type user=
{
name:string,
age:number;
}
const myUser:user={
name:"John",
age:23
}
//if onky age
const newUser={};
(newUser as user).age=34;
//or
const olduser={};
(<user>olduser).age=56;