// let a=new String("hello");
// let b="hello";

// if(a===b){
//     console.log("yes");

// }
// else{
//     console.log("no");
// }


// const obj={
//     name:"ajay",
//     lastname:"kumar"

// };

// console.log(obj);
// document.write(obj);


// const str=JSON.stringify(obj);
// document.write(str);

const obj={
      name:"ajay",
         lastname:"kumar"
    
     };

     obj.age=20;

     document.write(obj);
     console.log(obj);


     const arr=[1,2,3,4];
    //  arr[1]=20;
    //  arr[10]=2;
    //  arr.push(25);
    //  arr.pop();
     console.log(arr);
     console.log(typeof(arr));

     console.log(typeof(obj));

     console.log(Array.isArray(obj));

     function checkifobject(obj){
          if(typeof obj=='object'){
            if(Array.isArray(obj)){
                return false;
            }
            return true;
          }
          else
          return false;
     }

     console.log(checkifobject(null));

     for(let i=0;i<10;i++)
     {
         console.log(arr[i]);
     }

     for(let i=0;i<10;i++)
     {
         console.log(obj);
     }

     for(let i=0;i<10;i++)
     {
         console.log(obj[i]);
     }


     for(let i of arr){
       console.log(i);
     }

    //  for(let i of obj){
    //     console.log(i);
    //  }


     for(let i in arr){
        console.log(i);
     }

     for(let i in obj){
        console.log(i);
     }