// // ********chapter 21-25
// // ******task 1*******
// var user1Fname =prompt("enter your first name");
// var user1Lname =prompt("enter your last name");
// var user2Fname =prompt("enter your first name");
// var user2Lname =prompt("enter your last name");

// alert("Welcome"+ " "+user1Fname + " "+ user1Lname);
// alert("Welcome"+ " "+user2Fname + " "+user2Lname );

// ******task 2********
// var favMob =prompt('enter your  favorite mobile phone model',' Samsung Galaxy S6 Edge Plus');
// var lnth= favMob.length
// document.write("my favourite phone is"+ " " +favMob +"<br>")
// document.write("length of string:"+ ""+lnth)

// // *****task 3********
// var natio ="Pakistani";
// var b = natio.indexOf("n");
// document.write("string:"+ " "+ natio+"<br>")
// document.write("index of n:"+ " "+b)

// / // *****task 4********
// var greet= "Hello world";
// var b = greet.lastIndexOf("l");
// document.write("string:"+ " "+ greet+"<br>")
// document.write("last index of l:"+ " "+b)

// // *****task 5********
// var natio ="Pakistani";
// var char =natio.charAt(3)
// document.write("string:"+ " "+ natio+"<br>")
// document.write("Character at index 3:"+ " "+char)

// *****task 7********
// var city= "Hyderabad";

//  var replacingText ="Islam";

//  var remaningText=city.slice(5,9)
//  var newTxt =replacingText + remaningText

//  document.write("city:"+ " "+ city+"<br>")
//  document.write("After replacement:"+ " "+newTxt)

//  *****task 8********
//  var message ="Ali and Sami are best friends. They play cricket and football together."; 
//  var msg1 = message.replace(/and/g,"&")

// document.write(msg1)
// *****task 9********
// var value = "472";
// var convertNum = parseInt(value) 
// document.write("Value:"+ ""+value+"<br>")
// document.write("Type:"+ ""+"String"+"<br>")
// document.write("value:"+ ""+convertNum+"<br>")
// document.write("Type:"+ ""+"Number")

// *****task 10********
// var nuts =prompt("enter your favourite nut","peanuts");
// var nut1 = nuts.toUpperCase()
// document.write("user input:"+ "  "+nuts+"<br>")
// document.write("Uppercase:"+ "  "+nut1)

// *****task 11********
// var language =prompt("enter your programing language","javascript");
// var titleCase = language.toTitleCase()
// document.write("user input:"+ "  "+language+"<br>")
// document.write("Uppercase:"+ "  "+titleCase)
// *****task 12********
// var numberAsNumber = 35.36; 
//  var numberAsString = numberAsNumber.toString();
//  checkedNew = numberAsString.split('.').join("");
 
//  document.write("number:"+ "  "+numberAsNumber+"<br>")
//  document.write("Result:"+ "  "+checkedNew)

//  *****task 14********
// var arrayA =["cake”, “apple pie”, “cookie”, “chips”, “patties"]
// var items =prompt("Welcome to Disco bakery,what do you want to order sir/ma'am ")
// items =items.toUpperCase();
// var bakeItems = arrayA.indexOf(items);
// if(arrayA.indexOf(items) && arrayA != -1){
//     alert(items+"is available at index"+bakeItems+"in our bakery")
// }else{
//     alert(items+"is not available in our bakery")
// }


// ********chapter 26-30
// // ******task 1*******

// var num =prompt("enter a positive integar",3.45214);
// var round =Math.round(num);
// var round1 =Math.ceil(num);
// var round2 = Math.floor(num);
// document.write("number:"+ "  "+num+"<br>")
// document.write("roundoff value:"+ "  "+round+"<br>")
// document.write("floor value:"+ "  "+round2+"<br>")
// document.write("ceil value:"+ "  "+round1+"<br>")
// ******task 2*******
// var num =prompt("enter a negative integar",-2.673);
// var round =Math.round(num);
// var round1 =Math.ceil(num);
// var round2 = Math.floor(num);
// document.write("number:"+ "  "+num+"<br>")
// document.write("roundoff value:"+ "  "+round+"<br>")
// document.write("floor value:"+ "  "+round2+"<br>")
// document.write("ceil value:"+ "  "+round1+"<br>")

// ******task 3*******
// var value1 = Math.abs(-4);
// var value2 = Math.abs(-5);
//  document.write("The absolute value of -4 is : " + value1+"<br>" );
//  document.write("The absolute value of -5 is : " + value2 );

// ******task 4*******
// var num = Math.random();

//  var improvNum =(num *4) ;
//  var randomNum1 = Math.num(4.4);
   
// // *******************
//  var num_1 = Math.random();
//  var improvNum_1 =(num_1 *5) ;
//  var randomNum2 = Math.ceil(improvNum_1);
//  document.write("Ranndom dice value is : " + randomNum1+"<br>" );
//  document.write("Ranndom dice value is : " + randomNum2  );

//  ********chapter 31-34
 // // ******task 1*******
//  var date =new Date();
//  document.write(date)

 //******task2******
//  var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// var d = new Date();
// alert(" current month: " + monthNames[d.getMonth()]);
// ******task3******

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date(dateString);
// var dayName = days[d.getDay()];
// alert(" current day: " + monthNames[d.getMonth()]);