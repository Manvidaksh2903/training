// let arr=[2,3,4,5,6];
// function printarray(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// printarray(arr);


// // printing array
// function printpretty(elem){
//     console.log(':',elem)
// }

// function printArray(arr){
//     for(let i=0;i<arr.length;i++){
//    printpretty(arr[i]);
//     }
//     arr.forEach(printpretty);
        
//     }
// printArray(arr);


// // printing element with index......a==element b==index  c==array
// arr.forEach((a,b,c)=>{
//     console.log(":",a,b,c);
// })


// // map
// arr.map((a,b,c)=>{
//     console.log(":",a,b,c);
// })


 
// // code will run after 2000 miliseconds
// window.setTimeout(printpretty,20000);





// console.log('GEC START');

// function printpretty(){
//     console.log('pretty start');
//     let ans=2+3;
//     console.log(ans);

//     console.log('pretty end');
// }

// setTimeout(printpretty,5000);
// console.log('gec end'); 

// const btn=document.getElementById('btn');

// btn.addEventListener("click",printpretty);




console.log('start');
const req=fetch("https://jsonplaceholder.typicode.com/posts/1")
const res=req.then(res=>res.json())
console.log(req);
req.then(()=>console.log("fetch hed"));
console.log('end');