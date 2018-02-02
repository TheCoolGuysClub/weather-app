const promiseadd = (x,y) => {
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(typeof x === `number` &&typeof y ===`number`){
        if (x+y===2) {
          throw new Error("Result can not be 3");
        }
      resolve(x+y);
    }else{
      reject(`Error: both ${x} and ${y} must be numbers!`);
    }
  },1500)
})
}
promiseadd(1,21).then((result) =>{
  console.log("Add was succefful!");
  console.log(`result is ${result}`);
    return promiseadd(3,4).then((result)=>{
      console.log("Second add was successful");
      console.log(`second result: ${result}`);
    })
})
.catch((error)=>{
  if (error) {
    console.log(error);
  }else {
      console.log(error);
  }
})
