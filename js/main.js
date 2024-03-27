
// Variable And Concatenation 
// let title = 'El heithem',
//     dic   = 'Boubaou heithem'
//     data  = '07/10/2023';





    
// let myDiv =
// `
// <div class="card"
//   <h3>${title}</h3>
//   <p>${dic}</p>
//   <span>${data}</span>
// </div>
// `
// document.write(myDiv.repeat(4))


// Operators 

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++)
// console.log(++a + -b + +c++ - -a++ + +a)
// console.log(--c + +b + --a * +b++ - +b * a + --a -+true)

// 11 + 20 + 80 - 11

//13 + -21 + 81 - -13 + 14


// #2

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e) // 2000
// console.log(++e * ++g + -d + ++f); //  =173


// Number

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;


// console.log(Number.parseInt(Math.min(a,b,c,d)))

// console.log(Math.pow(a,Number.parseInt(d)))


// console.log(Number.parseInt(d))
// console.log(Math.round(d))
// console.log(Math.trunc(d))
// console.log(Math.floor(d))

// // b and d

// console.log((Number.parseInt(b) / Math.ceil(d)).toFixed(2)) // 66.67 => string
// console.log(Math.round(b / Math.ceil(d))) // 67 => Number


// // String

// let a = "elzero web School";

// console.log(a.charAt(a.indexOf("zero")).toLocaleUpperCase() +  a.substr(a.indexOf("zero") + 1 , 3) ) // Ziro

// console.log()

// console.log(a.charAt(a.indexOf("School") + 2).toLocaleUpperCase().repeat(8))

// console.log(a.split(" " , 1))

// console.log(a.substr(0 , 6)+ " " + a.substr(-6))


// console.log(a.charAt(0).toLocaleLowerCase() + a.slice(1 , a.length - 1).toLocaleUpperCase() + a.charAt(a.length - 1).toLocaleLowerCase())

// if condtion

// let a = 60;

//     a < 10 
//     ? console.log(10) 
//     : a >= 10 && a <= 40 
//     ? console.log("10 To 40") 
//     : a > 40 
//     ? console.log("> 40") 
//     : console.log("Unknown") ;


// let st = "Elzero Web School" ;


// if((st.length * 2).toString() === "34"){
//     console.log("good")
// }


// if(st.charAt(st.indexOf("Web")) === "W"){
//     console.log("good")
// }

// if (st !== "string") {
//     console.log("Good");
//   }

//   if ((typeof st.length) === "number") {
//     console.log("Good");
//   }


//   if (st.slice(0 ,6) + st.slice(0,6) === "ElzeroElzero") {
//     console.log("Good");
//   }


// Switch Statement 

// let job = "";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }


// switch (job) {

//     case "Manager" :
//         salary = 8000
//         console.log(`Salary is ${salary}`)
//         break;

//         case "IT" :
//         case "Support" :
//         salary = 6000
//         console.log(`Salary is ${salary}`)
//         break;

//         case "Developer" :
//         case "Designer" :
//             salary = 7000
//             console.log(`Salary is ${salary}`)
//             break;
//             default : 
//             salary = 4000
//             console.log(`Salary is ${salary}`)

// }



// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }


// let holidays = 6;
// let money = 0;

// if(holidays == 1 || holidays == 2 ){
//     money = 3000
//     console.log(`My Money is ${money}`);

// }else if(holidays == 3){
//     money = 2000
//     console.log(`My Money is ${money}`);

// }else if(holidays == 4){
//     money = 1000
//     console.log(`My Money is ${money}`);
// }else if(holidays == 5){
//     money = 0
//     console.log(`My Money is ${money}`);
// }else{
//     money = 5000
//     console.log(`My Money is ${money}`);         
//     console.log(`My Money is ${money}`);

// }

// Array

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.splice(++counter)
// my.reverse()

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

//  console.log(my.slice(++zero,--counter)); // ["Elham", "Mazero"]



//  console.log(my[zero].substring(--zero,--counter) + my[counter].substring(counter)); // "Elzero"

//  console.log(my)

//  console.log(my[counter++].charAt(counter-- + ++zero) + my[counter++].charAt(++zero + counter).toLocaleUpperCase()) // rO



// For Loop

// #Exmpel 1
// let myAdmins = ["Ahmed","Ossama","Sayed","Stop","Samera"];
// let lyEmployees = ["Amged","Samah","Omayma","Ameer","Omer","Othman","Amany","Samia"]



// let forAdmins = []

// for(let i = 0 ; i < myAdmins.length; i++){

//     if(myAdmins[i] === "Stop"){
//         break;
//     }

//     forAdmins.push(myAdmins[i])
// }

// document.write(`<div>We Have ${forAdmins.length} Admins</div> <hr>`)


// for(let e = 0 ; e < forAdmins.length; e++){


//     let cont = 1
//     document.write(`<div>`)
//     document.write(`<h2> your Admin for ${e + 1} in ${forAdmins[e]}</h2>`)
//     document.write(`<h4> is Team </h4>`)

//     for(let j = 0 ; j < lyEmployees.length; j++){

//         if(lyEmployees[j].charAt(0) === forAdmins[e].charAt(0)){
//             document.write(`<p> ${cont} - ${lyEmployees[j]}</p>`)
//             cont++

//         }
//     }

//     document.write(`</div>`)
// }


// #Exmpel 2
// for(; i < myAdmins.length ;i++ ) if(myAdmins[i] === "Stop"){break;}

// document.write(`<div> We Have ${i} Admins </div> <hr>`)

// for(let j = 0; j < myAdmins.length ; j++){
//     let t = 1

//     if(myAdmins[j] === "Stop"){

//        break
//     }
//     document.write(`<div>`)
//     document.write(`<h3> The Admin For team ${j + 1} Is ${myAdmins[j]}</h3>`)
//     document.write(`<h2> Team Members</h2>`)
//     for (let c = 0 ; c < lyEmployees.length ; c++){
//         if(lyEmployees[c].charAt(0) === myAdmins[j].charAt(0) ){

//             document.write(`<h3>  - ${t} ${lyEmployees[c]} </h3>`) 
//             t++

//         }
        
        

//     }
//     document.write(`</div> <hr>`)


// }

// function checkStatus(...data) {
 
//    for(let i = 0 ; i < data.length ; i++){
      
//       typeof data[i] === "string"
//       ? a =  data[i]
//       : typeof data[i] === "number"
//       ? b =  data[i]
//       : console.log("good");


//       if(typeof data[i] === "boolean"){
//          c = data[i]
//          if(c === true){
//             c = "You Are Available For Hire"
//          }else{
//             c = "You Are Not Available For Hire"
//          }
//       }


//       }
//    document.write(`Hello ${a}, Your Age Is ${b}, ${c} <br>`)
// }
//   // Needed Output
//   checkStatus("Osama", 38, false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus( true,38 , "Osama" ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"




// # Chalenge Aroow Fanction

// let names =(...names) =>  `[${names.join('],[')}] => Done` 


// console.log(names("heithem" , "younes" , "taraq","anis","mahdi"))



// let nambers = [20,50,10,60];

// let calc = (one , tow , ...nams) => one + tow + +nams

// console.log(calc(10, nambers[1], nambers[0] )) // 80


// function calc(one , tow , ...nams){

//     return one + tow + +nams
// }
// console.log(calc(10, nambers[1], nambers[0] )) // 80



// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"


// let solution = myString.split(",").filter(function(ele){
//     return isNaN(parseInt(ele))
// }).map(function(ele){
//     return ele === '_' ? ele = ' ' : ele
// }).reduce(function(s,e){
//    return `${s}${e}`
// }).slice(1).slice(0,-1)

// console.log(solution)

// let myst ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";



// let  soluation = myst.split(",").filter(function(ele){
//     return isNaN(parseInt(ele));

// }).map(function(ele){
 
//     return ele === '_' ? ele =(' ') : ele;

// }).slice(0, -1).reduce(function(acc,current){
//     return acc + current
// }).slice(1)
// console.log(soluation);




// # Intro Object 

// let ob = {

//     theName : "Heithem",
//     Age  : 25,
//     Avinbol  : false,

   
//     os: function(){

//         if(this.Age <= 25 ){
//             return this.Avinbol = true
//         }
//     }

// }

// console.log(ob.theName)
// console.log(ob.Age)
// console.log(ob.os())
// console.log(ob.Avinbol)


// # 2 



// let prodact = {

//     namrPro : "LG",
//     pris : 400,
//     wilaya : "oum el baouagi",
//     shipping : 5, 

//     total : function(){
//        return this.pris + this.shipping
//     }
// }

// let copyPro = Object.create(prodact)
// console.log(prodact.total())

// console.log(copyPro)

// copyPro.pris = 600
// console.log(copyPro.total())




// Created Eelment NarBar
// let navBar = document.createElement('nav')
// navBar.className = 'navbar'

// // Created Styling NarBar
// navBar.style.cssText = `
//     display: flex;
//     justify-content: space-between;
//     background-color: white;
//     padding: 0 50px;
// `


// // created Eelemnet Logo

// let logo = document.createElement('a')
// logo.href = '/index.html'
// logo.className = 'logo'
// logo.innerHTML = `<h3>Elziro</h3>`
// navBar.appendChild(logo)

// // Created Styling Logo
// logo.style.cssText = `
//     display: block;
//     text-decoration: none;
//     font-size: 25px;
//     color: rgb(0, 190, 102);
//     align-self: center;
// `
// // created Eelemnet List Navbar
// let lists = ['Home','About','Service','Contact']

// let createUl = document.createElement('ul')
// createUl.className = 'list-navbar'
// for(let i = 0 ; i < lists.length; i++ ){
//     let createdLi = document.createElement("li")
//     createdLi.textContent = lists[i]
//     createUl.appendChild(createdLi)

// // Created Styling li

//     createdLi.style.cssText = `
//         display: inline-block;
//         margin: 10px;
//         font-size: 20px;
//         cursor: pointer;
//         color: #000000a1;
//         padding: 15px 0;
// }
// `
// }
// // Show Eelemnet In Body
// navBar.appendChild(createUl)
// document.body.append(navBar)



// // created  List Prodact


// // Created Eelment Heder

// let createHeder = document.createElement('header')
// createHeder.style.cssText = `
// padding: 5px 50px;
// }
// `

// // Created Eelment Ul Lists Prodacts

// let listProdcts = document.createElement('ul')
// listProdcts.className = 'prodacts'
// listProdcts.style.cssText = `
// display: flex;
// justify-content: space-between;
// flex-wrap: wrap;
// }
// `

// // Loop Contnr Prodact
 
// for(let i = 0 ; i < 15 ; i++){
// // Created Eelment il  Prodacts

//     let createLi = document.createElement('li')
//     createLi.setAttribute('data-info',`n ${i + 1}`)
//         createLi.className = "pro"
    
//     createLi.innerHTML = `${i + 1}  <span style="font-size: 15px;  color: #000000a1; padding-top: 10px ">Prodact</span>`


//     createLi.style.cssText = `
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     font-size: 30px;
//     font-weight: bold;
//     background: #fff;
//     width: calc(100% / 3 - 10px);
//     height:  calc(489.98px / 4.5);
//     margin : 10px 0;
// }
// `


//     listProdcts.appendChild(createLi)

    

// }








// createHeder.appendChild(listProdcts)
// navBar.after(createHeder)

// listProdcts.children[0].classList.add('active')




// let footer = document.createElement('footer')
// footer.className = 'footer'



// footer.style.cssText = `
    
//     justify-content: space-between;
//     background-color: rgb(0, 190, 102);
    
//     padding:  17px 50px;
//     text-align: center;
//     font-size: 25px;
//     font-weight: bold;
//     color: #fff;

// `

// createHeder.after(footer)

// //localStorage.clear()

// let lisact = document.querySelectorAll('.pro')


// //  Chekd get localStorage item data 
//  if(window.localStorage.getItem('data')){

//     lisact.forEach((o) =>{

//         //localStorage data === data Elemetn
//         if(window.localStorage.getItem('data') === o.dataset.info){

//             o.classList.add('active')
//         }else{
//             o.classList.remove('active')

//         }
//     })
    
//  }


// footer.onclick = function(){

//     let lis = document.querySelector('.active')

// if(lis !== null){
//     let s = lis.nextElementSibling

//     if(s !== null){

//         s.classList.add('active') 

//     }else{
//         lis.parentElement.children[0].classList.add('active')
//     }
//     lis.classList.remove('active')
     
// }


// lisact.forEach((li) => {

//     // Chekd element for class Active => set data-info in locolStorige
//     if(li.classList.contains('active')){

//        window.localStorage.setItem('data',`${li.dataset.info}`)

//     }
// })

// }





// let  myText = document.querySelector('.tasks')
// let  sbmuit = document.querySelector('.sm')
// let  boxTask = document.querySelector('.list-tasks .box')

// let arrayTasks = []

// if(localStorage.getItem("task")){
    
//     arrayTasks = JSON.parse(localStorage.getItem("task"))
    
// }
// getDataToLocalStoreg()

// sbmuit.addEventListener('click',(e) =>{

//     // Ceck input value Not empti

//     let good = myText.value
//     if(good.trim() !== ""){
//         addTaskOfArrya(myText.value)
//        myText.value = ""
//     }
// })

// // Creata Task Arrya Of Object
// function addTaskOfArrya(taxt){
//     const taskObj = {
//         id : Date.now(),
//         title : taxt.trim(),
//         status : false
//     }

//     arrayTasks.push(taskObj)

//     addTaskForElement(arrayTasks)

//     addDataToLocalStoreg(arrayTasks)
// }

// // Creata Element Task 

// function addTaskForElement(arrayTasks){


//     boxTask.innerHTML = ""

//        arrayTasks.forEach((item) =>{
//         let div = document.createElement("div")
//         div.className = "task"
//         div.setAttribute("data-id",item.id)
//         div.appendChild(document.createTextNode(item.title))
//         // delete
//         let del = document.createElement("button")
//             del.className = "del"
//             del.textContent = "delete"
//             div.appendChild(del)

//         boxTask.appendChild(div)
//        })
// }

// // Deleted Task


// boxTask.addEventListener("click", (e) =>{

//     if(e.target.classList.contains("task")){

//         addToogleDone(e.target.getAttribute("data-id"))

//         e.target.classList.toggle("done")
//     }
//     if(e.target.classList.contains('del')){
        
//         deletdTask(e.target.parentElement.getAttribute("data-id"))

//         e.target.parentElement.remove()
//     }

   
// })





// // Add Data task Array Of Object => [{task}]  in Local Storeg 
// function addDataToLocalStoreg(arrayTasks){
//     localStorage.setItem("task",JSON.stringify(arrayTasks))
// }
// // Get Data To Local Storeg 
// function getDataToLocalStoreg(){
//     let data = localStorage.getItem("task")

//     if(data){
//         let dataPars = JSON.parse(data)

//         addTaskForElement(dataPars)
//     }
// }

// function addToogleDone(taksId){

//     for(let i = 0 ; i < arrayTasks.length ; i++){
//         if(arrayTasks[i].id == taksId){

//             arrayTasks[i].status == false ? (arrayTasks[i].status = true) : (arrayTasks[i].status = false) 
//         }
//     }
//     addDataToLocalStoreg(arrayTasks)

// }


// function deletdTask(taskId){
    
//     arrayTasks = arrayTasks.filter((task) => task.id != taskId)

//     addDataToLocalStoreg(arrayTasks)
    
// }



// let myarray = ["heithem","oussama","","ahlem"]


// let [a,b,d] = myarray

// console.log(a)
// console.log(b)
// console.log(d)


// let users = {

//     theName : "Heithem",
//     theAge : 25,
//     title : "good"
// }


// let {theName,b,c} = users

// console.log(theName)
// console.log(b)
// console.log(c)


// let chosen = 1;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// // Write Your Code Here
// function showDetils(myFriends){
//     ({title : t , age : a , available : v , skills : [,tow] } = myFriends)

//     if(v){
//         v = "available"
//     }else{
//         v = "not available"
//     }
    
//     console.log(t)
//     console.log(a)
//     console.log(v)
//     console.log(tow)
// }

//     for (let i = 0 ; i <= myFriends.length; i++){


//         if(chosen == i + 1 ){
        
//             showDetils(myFriends[i])

        
//          }
//     }





// let obj = {
//     theName : "heithem"
// }


// let WekMapA = new WeakMap()


// WekMapA.set(["haitam","boubaou"],"ana")

// obj = null
// console.log(WekMapA)

// console.log("#".repeat(20))

// let objB = {
//     theName : "boubaou"
// }

// let mymap = new Map()

// mymap.set(objB,"heithem")

// mymap.set(["haitam","boubaou"],"ana")
// console.log(mymap)


// let myArray = [10,20,30,40,50,"A","B"]

// myArray.copyWithin(0,-2)


// console.log(Array.from(new Set(myArray), function(e){
//     return +e + +e
// }))


// console.log(myArray)


// let nams = [1,2,3,4,5,6,7,8,9,10]


// let reng = {
//     min : 10,
//     max : 20,
// }

// let checkReng = nams.some((e) => {
//     return e >= reng.max
// },reng)

// console.log(checkReng)

// let obOne = {
//     a:1,
//     b:2
// }
// let obTow = {
//     c:3,
//     d:4
// }


// console.log({...obOne,...obTow})


// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// Needed Output
//210




// g => global 
// i => leter A = a
// 


// let urla = "https://google.com http://www.google.com google.com/";

// let regurl = /(https?:\/\/)?(www.)?\w+.\w+\/?/ig


// console.log(urla.match(regurl))




// let input = document.querySelector("input")


// input.addEventListener("input",() =>{

//     if(input.value.match(/\b0(5|6|7)\d+/)){
//         console.log(input.value)
//     }

// })


// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topidsfsdggsd54546)àçè-_cs';

// let re = /^(https?:\/\/)?(www.)?\w+.(\w{1,9}):?(\d{2,4})?\/?[a-z]+(.php.+)?/g; // Write Your Pattern Here

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));




// class User {
//     #su;
//     constructor (id,us,su){

//         this.id = id
//         this.us = us
//         this.#su = su       
//     }
    
//     getSu(){
//         return this.#su  * 2500
//     }
// }


// class Admin extends User{
//     #po;
//     constructor(id,us,su,po){

//         super(id,us,su)

//         this.#po = po
//     }

//     getPo(){
//       return  this.#po 
//     }
    
// }

// let user = new User(1,"oussama",200)
// let admin = new Admin(2,"Heithem",400,"heithem")



// console.log(user.getSu())

// console.log(admin.getSu())
// console.log(admin.getPo())
// console.log(admin)



// String.prototype.apprcec = function(val){

//     return  /[]/ig
// }


// console.log(String.prototype)

// export default function(){
//   return "good"
// }


// let a = ["a","b","c"]
//  let b = "boubaou"

//  function seyHello(){
//   return "hello Heithem"
// }


// export {a , b , seyHello}


// let req = new XMLHttpRequest;

// req.open("GET", "https://api.github.com/users/haitam9877/repos",true)

// req.send();


// req.onreadystatechange = function(){

//   if(this.readyState == 4 && this.status == 200){
    
//     let jsData = JSON.parse(this.responseText)
//     console.log(jsData)

//     // for (let i = 0; i < jsData ; i++){

//     //   //  let div = document.createElement("div")
//     //   //  let rop =  document.createTextNode(jsData[i].id)
//     //   //  div.appendChild(rop)
       
//     //   //  document.body.appendChild(div)

//     // }
//   }
// }


// let connct = false


// let mypromes = new Promise((ses,err)=>{

//   if(connct){
//     ses("good")
//   }else{
//     err("of")
//   }
// })
// mypromes.then(
//   (sesValue) => console.log(sesValue),
//   (errValue) => console.log(errValue)
// )

// console.log(mypromes)


// const getData = (apiLink) =>{


// let btn = document.querySelector("button")

// btn.addEventListener("click",() =>{
//   const mypromis =  new Promise((res,rej)=>{
//     let req = new XMLHttpRequest

//        req.onload = function(){
//         if(this.readyState === 4 && this.status === 200){
//           res(JSON.parse(this.responseText))
//         }else{
//           rej(Error("data is not fonde"))
//         }
//        }

//        req.open("GET","../json/homoe.json");
//        req.send();
//   })
// // }

// mypromis.then(
//   (ses) => {
//           for(let i = 0 ; i< ses.length; i++){
//           let div = document.createElement("div")
//           let rsb = document.createTextNode(ses[i].name)
//           div.appendChild(rsb)
//           document.body.appendChild(div)
//           }
//         }

// ).catch(
//   (err) => {
//     let div = document.createElement("div")
//       div.appendChild(document.createTextNode(err))
//         document.body.appendChild(div)

//   }
// )

// })
  

//  let btn = document.querySelector("button")

//  btn.addEventListener("click",() =>{

//   fetch("../json/home.json").then(
//     (resalt) => {
      
//       return resalt.json()
//     }
//     ).then(
//       (onedata) => console.log(onedata[0])
//     )
//  })



// async function getData(){

//   setTimeout(() => {
//   console.log("before")
    
//   }, 2000);

//    try {
//     let mydata =  await fetch("../json/dhome.json")

//     console.log( await mydata.json())
//    } catch(rej){

//     console.log(Error(rej))
//    }

//    console.log("after")

// }

// getData()




// let req = new XMLHttpRequest()


// req.open("GET","index.html")

// req.responseType = "json"



// req.send()

// req.onload = function(){
// 	let resp = req.response
// 	console.log(resp)
// }

let contOne = document.getElementById("contone")
let contTow = document.getElementById("conttow")

// let req = new XMLHttpRequest()
// req.open("GET","https://jsonplaceholder.typicode.com/users")
// req.responseType  = "json"

// req.send()
// req.onload = function(){
   
//     let users = req.response
   
//     for(user of users){
//         let div = document.createElement("div")

//         div.setAttribute("data-id",user.id)

//         div.innerHTML = `<h3>${user.name}</h3>
//                          <span>${user.email}</span>`
    
//         contOne.appendChild(div)

       
  
//                 let req = new XMLHttpRequest()

//                 req.open("POST","https://jsonplaceholder.typicode.com/posts")
//                 req.responseType = "json"
                
//                 req.setRequestHeader("Accept","application/json")
//                 req.setRequestHeader("Content-Type","application/json")
                
//                 req.send(JSON.stringify({
//                     "title" : "hlou word",
//                     "body"  : "orgkzepogzep zepo fkzeofkpozegerihnr",
//                     "userId" : 1
//                 }))

//                 req.onload = function(){
                   
//                     let reqGet = new XMLHttpRequest()
//                     reqGet.open("GET","https://jsonplaceholder.typicode.com/posts/1")
//                     reqGet.responseType  = "json"
//                     reqGet.send( req.response)
                    
//                     reqGet.onload = function(){
//                         let posts = reqGet.response
    
//                         console.log(posts)
//                 }

              
                
//                     div.addEventListener("click",function(){
                        

//                         contTow.innerHTML = ""
//                         for(post of posts){
//                             let divTow = document.createElement("div")

//                             console.log(post)
//                             if(this.getAttribute("data-id") == post.userId){

//                                 divTow.setAttribute("data-user-id",post.userId)

//                                 divTow.innerHTML = `<h3>${post.title}</h3>
//                                                 <p>${post.body}</p>`
                            
//                                                 contTow.appendChild(divTow)

//                             } 
                            
//                         }
                       
                       
//                     })

                    
//                 }
      
//     }

       

// }

let date = new Date();
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let d = date.getDay()


let fullData = `${day}-0${month + 1}-${year}`


function navgtor(){

    return new Promise((resolve,reject) => {
                if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(position) {

                            const latitude = position.coords.latitude;
                            const longitude = position.coords.longitude;
                            getLoctionNow(latitude,longitude)
                                resolve()
                                
                    },erore =>{
                        var date = new Date();
                        let year = date.getFullYear()
                        let month = date.getMonth()
                        let day = date.getDate()
                        let d = date.getDay()
                        let fullData = `${day}-0${month + 1}-${year}`
                    
                        axios.get(`https://api.aladhan.com/v1/calendarByCity/${year}/${month + 1}?city=London&country=Null Null&method=2`)
                        .then((response)=> response.data.data)
                        .then((datas) => {
            
                            console.log(datas)
                            // for(data of datas){
            
                            //     getDataNow(data)
                            
                      
                            reject(erore)
            
                            // }
                        })

                       
                    });

                }
        })
}





 

   

    navgtor()
    .then(()=>{

  
        
    })
    .catch((erore) =>{


        console.log(erore ,Error("not good"))
    })
    


        function getLoctionNow(latitude,longitude){

         
                
                axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ar`)
                .then((response) => response.data )
                .then((DataAr) => {
    
    
                   let city = DataAr.city
                   let countryName = DataAr.countryName
                     document.querySelector(".adrass h2").innerHTML = `${city}  ${countryName}`

                   
                    
                   
                })
                
                axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                .then((response) => response.data )
                .then((dataEn) => {
    
    
                    
                    
                    getTimes(dataEn)
                })
                
                
      

            }
          

       function getTimes(dataLociton){

         let city = dataLociton.city
         let countryName = dataLociton.countryName

            axios.get(`https://api.aladhan.com/v1/calendarByCity/2024/2?city=${city}&country=${countryName}`)
            .then((response)=> response.data.data)
            .then((datas) => {
    
                
                getDataNow(datas)
                
            })
        }  
 
   
     function  getDataNow(datas){
       
        for(dataNow of datas ){

            if(dataNow.date.gregorian.date === fullData ){

          
                getMonth(dataNow)

            }
        }
  
  }

    function getMonth(data){
     let dateMiladi = document.querySelector(".day-miladi")
     let dateHijr = document.querySelector(".day-hijri")
     let ofMonth = ["جانفي","فيفري" ,"مارس", "أفريل", "ماي" ,"جوان" ,"جويلية","أوت", "سبتمبر", "أكتوبر" ,"نوفمبر" ,"ديسمبر"]

    for(let i = 0; i < ofMonth.length; i++){

             if(i + 1 === data.date.gregorian.month.number){

                dateMiladi.innerHTML += `${data.date.gregorian.day} ${ofMonth[i]} ${year}`
                dateHijr.innerHTML += `${data.date.hijri.day}  ${data.date.hijri.month.ar}  ${data.date.hijri.year}`
             }
    }

        let salouat = data.timings

        let ofNamesSalout = ["الفجر","الشروق" ,"الظهر", "العصر", "المغرب" ,"العشاء"]

        let boxTimings = document.querySelector(".box-timings")
        let salouatKeys = Object.keys(salouat)
        let filterSalouat = []

            for(let i = 0; i < salouatKeys.length; i++){

                if(salouatKeys[i] !== 'Sunset' && salouatKeys[i] !== 'Imsak' && salouatKeys[i] !== 'Midnight' && salouatKeys[i] !== 'Firstthird' && salouatKeys[i] !== 'Lastthird'){
            
                        filterSalouat.push(salouatKeys[i])   
                }
            }
                 for(let o = 0; o < filterSalouat.length; o++){

            for(salouatB of salouatKeys){
                if(salouatB === filterSalouat[o]){

                    let filterNum = salouat[salouatB].slice(0,5)

                
                    for(let g = 0; g < ofNamesSalout.length; g++){

                        
                        if(g === o){
                            let createBoxCard = document.createElement("div")
                    
                            createBoxCard.className = "card"
        
                            createBoxCard.innerHTML = `<div class="name-salat">
                                                           <h3>${ofNamesSalout[g]}</h3>
                                                       </div>
                                                       <hr>
                                                       <div class="timing">
                                                           <h4>${filterNum}</h4>
                                                       </div>
                            `
        
        
                            boxTimings.appendChild(createBoxCard)
                           
                        }
                        
                    }
                    
                    
                   
                    
                }
            }
        }
}

// let ofDay = ["الاحد","الإثنين" ,"الثلاثاء", "الأربعاء", "الخميس" ,"الجمعة" ,"السبت"]

// for(let i = 0; i < ofDay.length; i++){

   
//     if(i === d){
//         dayElement.innerHTML = ofDay[i]
//     }
// }

// // let big = document.getElementById("big")

// // let date = new Date()



 

      
        
// new Promise((resolve,reject) => {
//      if (navigator.geolocation) {
//        return  navigator.geolocation.getCurrentPosition(function(position) {
                
//                     const latitude = position.coords.latitude;
//                     const longitude = position.coords.longitude;
//                     resolve()
                    
//                      getLoctionNow(latitude,longitude)
                   
    
//         });
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//         reject(erorr)
//       }
    
// }).then(() => {
    // return  function getLoctionNow(latitude,longitude){
    //         axios.get(` http://api.aladhan.com/v1/timings/20-02-2024?latitude=${latitude}&longitude=${longitude}`)
    //         .then((response) => response.data )
    //         .then((data) => console.log(data))
    // }
   
// })
// .catch((erorr) => alert(erorr))



// let dayElement = document.querySelector(".date h4")




// var date = new Date();
// let year = date.getFullYear()
// let month = date.getMonth()
// let day = date.getDate()
// let d = date.getDay()


// let fullData = `${day}-0${month + 1}-${year}`




// axios.get(`https://api.aladhan.com/v1/calendarByCity/${year}/${month + 1}?city=London&country=Null Null&method=2`)
// .then((response)=> response.data.data)
// .then((datas) => {

//     for(data of datas){

//         
       
       

//     }
// })







// function getTimings(timing){




  
   

//      for(let o = 0; o < filterSalouat.length; o++){

//             for(salouatB of salouatKeys){
//                 if(salouatB === filterSalouat[o]){

//                     let filterNum = salouat[salouatB].slice(0,5)

                
//                     for(let g = 0; g < ofNamesSalout.length; g++){

                        
//                         if(g === o){
//                             let createBoxCard = document.createElement("div")
                    
//                             createBoxCard.className = "card"
        
//                             createBoxCard.innerHTML = `<div class="name-salat">
//                                                            <h3>${ofNamesSalout[g]}</h3>
//                                                        </div>
//                                                        <hr>
//                                                        <div class="timing">
//                                                            <h4>${filterNum}</h4>
//                                                        </div>
//                             `
        
        
//                             boxTimings.appendChild(createBoxCard)
                           
//                         }
                        
//                     }
                    
                    
                   
                    
//                 }
//             }
//         }
// }

// let ofDay = ["الاحد","الإثنين" ,"الثلاثاء", "الأربعاء", "الخميس" ,"الجمعة" ,"السبت"]

// for(let i = 0; i < ofDay.length; i++){

   
//     if(i === d){
//         dayElement.innerHTML = ofDay[i]
//     }
// }

// // let big = document.getElementById("big")

// // let date = new Date()




     
         


     
      



                             
// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition((position)=>{
//         let latitude = position.coords.latitude
//         let longitude = position.coords.longitude
//         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

//         getAddresForLociton(latitude,longitude)
//     });
// }else{
//     console.log("Geolocation is not supported by this browser.");

// }
   

// function getAddresForLociton(latitude,longitude){
    
//     axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ar`)
//     .then((response) => response.data)
//     .then((data) => console.log(data))

// }



 


