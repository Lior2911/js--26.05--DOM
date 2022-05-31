// console.log(p1)

// document.getElementById("p2").innerText = "my dom app"

// console.log(document.getElementsByClassName("task2"))

// console.log(document.getElementsByClassName("task2")[1])

// console.log(document.getElementsByClassName("task2")[2].innerText)

// console.log(document.getElementsByTagName("h1")) 

// 7.	צרו פונקציה המקבלת מהמשתמש שם והדפיסו אותו למסך בתגית H2.

// function getName(){
//   var someName = prompt("enter ypur name")
//   document.write("<h2>"+someName+"</h2>")
// }
// getName()

// 8.	צרו פונקציה המקבלת מהמשתמש צבע ומספר, הדפיסו למסך את הצבע בתגית SPAN מספר הפעמים שהמשתמש הכניס.

// function getColor (color,num){
//   for (var i = 0 ; i<=num;i++){
//     document.write("<span>"+" "+color+" " + "</span>")
//   }
// }
// getColor(prompt("enter a color"),prompt("enter a num"))

// 9.	צרו פונקציה המקבלת מהמשתמש טקסט ושם תגית ואז בונה את התגית עם הטקסט ב DOM.

// function getUserTag (){
//   var tagName = prompt("enter a tag name")
//   var someText = prompt("enter your text here")
//   var theTag = "<"+tagName+">"+someText+"</"+tagName+">"
//   document.write(theTag)
// }
// getUserTag()
 
// 10.	צרו פונקציה המקבלת מהמשתמש סוג קלט ויוצרת את הקלט המתאים ב DOM.
// function getInputType(){
//   var inputType = prompt("enter type")
//   document.write(document.innerHTML ="<input type ="+inputType+"/>")
// }
// getInputType()



// 11.	צרו פונקציה המקבלת כארגומנט שם class וטקסט, הפונקציה משנה את התוכן של כל האלמנטים עם ה class שהתקבל לטקסט שהמשתמש הכניס.

// function someFunc (p1,someText){
//   var myClass = document.getElementsByClassName("p1");
//   for(var i = 0 ; i< myClass.length;i++){
//    myClass[i].innerText = someText;
//   }

// }
// someFunc("p1","hello lior")

// 12.	צרו 6 אלמנטי P ריקים ב html, צרו פונקציה שמכניסה להם אלמנט SPAN עם טקסט.


// function someFunc (){
//   var pArray = document.getElementsByTagName("p")
//   for (var i = 0 ; i<pArray.length;i++){
//     pArray[i].innerHTML="<span>some text</span>"
//   }

// }
// someFunc()



// 13.	צרו פונקציה המקבלת מהמשתמש שם פרטי, שם משפחה וגיל, היא מדפיסה למסך את כל הפרטים, אם המשתמש מעל 18 היא מציגה מתחת לפרטים קלט.
// function getAge(){
//   var userDetails = {
//   age : +prompt("enter your age"),
//   firstName : prompt("enter your name"),
//   lastName :prompt("enter last name"),
//   }
//   document.write(userDetails.firstName+" "+userDetails.lastName+" "+userDetails.age+"<br>")
//   if (userDetails.age>18){
//     document.write(document.innerHTML = "<input type = number />")
//   }
  
// }
// getAge()


// 14.	צרו פונקציה המייצרת אובייקט של סרט, עם שם, מספר צפיות, שנה ותמונה. תנו להם ערכים מהמשתמש, הדפיסו למסך את הסרטים בצורה יפה, כולל התמונה, שם - הכי גדול ושנה הכי קטן
// function someFuncAboutMovie(){
//   var someMovie = {
//     movieName : prompt("movie name"),
//     views : prompt("num of views"),
//     year : prompt("realese date"),
//     photo : prompt("enter photo adress"),
//   }
//   document.write("<h1>"+someMovie.movieName+"</h1>"+"<br>"+"<h6>"+someMovie.year+"</h6>"+"<img src = " +someMovie.photo +">")
// }
// someFuncAboutMovie();
// 15.	צרו אובייקט של עובד, בעזרת קלטים צרו שדות של שם פרטי, שם משפחה, אימייל ומחלקה. ותנו להם ערכים מהמשתמש, הדפיסו את האובייקט למסך, כל ערך באלמנט משלו.

// var emploee = {
//   firstName : prompt("first name"),
//   lastName : prompt("last name"),
//   email : prompt("email"),
//   section : prompt("section")
// }

// document.write("<h1>"+emploee.firstName+"</h1>"+"<h1>"+emploee.lastName+"</h1>"+"<h1>"+emploee.email+"</h1>"+"<h1>"+emploee.section+"</h1>")

// 16.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של בניין, לכל בניין יש שם קבלן, שם חברה, מספר קומות ומספר דירות בקומה. תנו להם ערכים מהמשתמש, הדפיסו כל אובייקט למסך, כל אובייקט באלמנט משלו.

// function getApartment(){
//   var numOfBuilding = +prompt("enter num of apartments")

//   for(var i = 0 ; i <numOfBuilding;i++){
//     var building = {
//       kablanName : prompt("enter kablan name"),
//       companyName : prompt("company name"),
//       floors : prompt("num of floors"),
//       numOfApart : prompt("num of apart per floor")
//     }
//     document.write(
//     "<span> name of kablan :"
//     +building.kablanName
//     +"</span>"
//     +"<br>"
//     +
//     "<span> company name :"
//     +building.companyName
//     +"</span>"
//     +"<br>"
//     +
//     "<span> floor per bulding :"
//     +building.floors
//     +"</span>"
//     +"<br>"
//     +
//     "<span> apartment per floor : "
//     +building.numOfApart
//     +"</span>"
//     +"<br>"
//     +"<br>"
    
//     )
//   }
// }
// getApartment()

// 17.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של חנות, לכל חנות יש שם החנות, כתובת, מספר מחלקות ומספר עובדים. תנו להם ערכים מהמשתמש, הדפיסו רק למסך רק חנוית עם מספר עובדים גבוה מ 10, כל אובייקט באלמנט משלו. 

// var result=0 ;
// function getStore(){
//   var numOfStores = +prompt("enter num of stores")
//   for (var i = 0 ; i<numOfStores;i++){
//     var store = {
//       storeName : prompt("name of store"),
//       adress : prompt("enter an adress"),
//       numOfSection:prompt("number of section"),
//       numOfEmployees: prompt("num of employees"),
//     }
//     if(store.numOfEmployees>10){
//       document.write(
//       "<h3>"
//       +store.storeName
//       +"</h3>"
//       +"<br>"+
//       "<h3>"
//       +store.adress
//       +"</h3>"
//       +"<br>"+
//       "<h3>"
//       +store.numOfSection
//       +"</h3>"
//       +"<br>"+
//       "<h3>"
//       +store.numOfEmployees
//       +"</h3>"
//       +"<br>"
//       +"<br>"
//       )
//       result+=4

//     }
//   }
// }
//  getStore()

//  function numOfElemnts(){
//   console.log(result)
//  }
//  numOfElemnts()


