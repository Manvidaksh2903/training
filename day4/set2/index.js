console.log(window)
console.log(innerHeight)
console.log(innerWidth)
console.log(window.document)
console.log(window)

console.log(console)
console.dir(window.document)
const res=document.getElementsByTagName('p')
console.log(res);
 const a=document.getElementById('fd');
 console.log(a);
 const c=document.querySelectorAll('h1.fd');
 console.log(c);

 const result=document.getElementById('fd');
 result['innerText']="hello,world";
 console.log(result); 


// creating new element
 const ne=document.createElement("h3");
 console.log(ne);
 ne.innerText="texting";
 console.log(ne);
 document.body.appendChild(ne);


// adding element into div by giiving div
 const firstdiv=document.getElementsByTagName("div");
 firstdiv[1].appendChild(ne);

