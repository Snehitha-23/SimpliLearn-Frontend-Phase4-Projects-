var RectangleA={
  top:20,
  left:20,
  height:40,
  width:60,
  children:[]  
}

var RectangleB={
    top:30,
    left:30,
    height:20,
    width:30,
    children:[]  
  }

  
function isRectangle(RectangleA,RectangleB){
if(RectangleA.top<RectangleB.top&& RectangleA.left<RectangleB.left){
return {
    top:RectangleA.top,
    left:RectangleA.left,
    height:RectangleA.height,
    width:RectangleA.width,
    children:[
        {
    top:RectangleB.top-RectangleA.top,
    left:RectangleB.left-RectangleA.left,
    height:RectangleB.height,
    width:RectangleB.width
        }
    ]  
}

}
}

var obj=isRectangle(RectangleA, RectangleB);
console.log(obj);