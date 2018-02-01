// const add=(x,y)=>{
//   return x+y;
// }
//
// const result =add(1,3);
// console.log("My result is " + result);
const addCallback=(x,y,callback)=>{
  callback(x+y);
}
addCallback(1,3,(result)=>{
  console.log("My result is "+result);
})
