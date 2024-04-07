// const res=document.querySelector("div");
// console.log(res);
// // res.remove();

// //when we use tag name we need to tell the index of child
// const c=document.getElementsByTagName('p');
// res.removeChild(c[1]);

//  when we use query selector

// const d=document.querySelector('p');
// res.removeChild(c);

function getinfo(e){
    console.log(e);
    // const d=document.querySelector('p');
    // const e2=document.createElement('p');
    // e2.innerHTML=" my name is java";
    // d.prepend(e2);


}
const button=document.getElementById("btn");
button.onclick=()=>{
  let flag=0;
  if(flag==0){

    button.style.backgroundColor="red";
    button.style.color="white";
    flag=1;
}
else{
    button.style.backgroundColor="white";
    button.style.color="black";
    flag=0;
}
}

