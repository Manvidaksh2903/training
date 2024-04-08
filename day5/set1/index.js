let arr=[2,3,4,5,6];
function printarray(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printarray(arr);


// printing array
function printpretty(elem){
    console.log(':',elem)
}

function printArray(arr){
    for(let i=0;i<arr.length;i++){
   printpretty(arr[i]);
    }
    arr.forEach(printpretty);
        
    }
printArray(arr);


// printing element with index......a==element b==index  c==array
arr.forEach((a,b,c)=>{
    console.log(":",a,b,c);
})


// map
arr.map((a,b,c)=>{
    console.log(":",a,b,c);
})


 
// code will run after 2000 miliseconds
window.setTimeout(printpretty,20000);