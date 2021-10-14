//console.log("Hello")
//console.log(document)
// console.dir(document)
// console.log(document.URL)
// console.log(document.title)
// document.title="Hwo are you"
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all[10].textContent)
// document.all[10].textContent=" Welcome to world of js"
// console.log(document.forms)
// console.log(document.links[2])
// console.log(document.links[1])
// console.log(document.links[0])
// console.log(document.images)

// Five Methods of JS for frontend

// getelementbyid
// getelementsbyclassname
// getelementsbytagname
// querrySelector
// querrySelectorall

//<h1>abcd</h1>(called as ELEMENTS)

//<img/>(singular tag && pairing and non-pairing tag)






//GETELEMENTBYID

// console.log(document.getElementById("header-title").textContent)
// console.log(document.getElementById("header-title").innerText)

// let headertitle1=document.getElementById("header-title1")
// console.log(headertitle1)
let headertitle=document.getElementById("header-title")
// console.log(headertitle)
// headertitle.textContent="TesT"
//  headertitle.innerHTML="<h3 style='color:red'>Hello User</h3>"
// headertitle.style.border="groove 5px blue"
// headertitle.style.border="color 5px blue"

//GETELEMENTBYCLASSNAME

let items=document.getElementsByClassName("list-group-item")
// console.log(items)
// console.log(items[1])
// items[1].textContent="Hello!!"
// items[1].style.fontWeight="bold"
// items[1].style.backgroundColor="yellow"
// document.body.style.backgroundColor="red"

//GIVES ERROR
// itmes.style.backgroundColor="yellow"
// console.log(items.length)
// for(let i=0;i<items.length;i++)
// {
//     if(i%2==0)
//     items[i].style.backgroundColor="red"
//     else
//     items[i].style.backgroundColor="yellow"
// }
//var check
// console.log(i)

//GETELEMENTBYTAGNAME

// let li=document.getElementsByTagName("li")
// console.log(li)
// li[1].textContent="Hello!!"
// li[1].style.fontWeight="bold"

//GIVES ERROR
// TimeRanges.style.backgroundColor='#f4f4f4'

// QUERYSELECTOR //
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px red'

// var input=document.querySelector('input[type="text"]') //
//  input.value="Hello World!!"
// var submit=document.querySelector('input[type="submit"]')
// submit.value="Send"

// var item=document.querySelector('.list-group-item')
// item.style.color="red";

// var lastitem=document.querySelector('.list-group-item:last-child')
// lastitem.style.color='red';

// var sitem=document.querySelector('.list-group-item:nth-child()')
// sitem.style.color="red";

// console.log(item)


//QUEEYSELECTORALL

// var titles=document.querySelectorAll('.title')
// titles[0].textContent="Hello!!"
// var odd=document.querySelectorAll('li:nth-child(odd)')
// var even=document.querySelectorAll('li:nth-child(even')
// console.log(odd)
// console.log(even)

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor="red";
//     even[i].style.backgroundColor="Yellow"
// }