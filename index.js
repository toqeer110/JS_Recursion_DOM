// -----------------Assigment no-2--------------------------------
// Question no-1

// function outerFunc(a) {
//   // closure function
//   function innerFunc(b) {
//     return a + b;
//   }

//   let result = innerFunc(5);
//   console.log(result);
// }
// outerFunc(10);
// ----------------------------------------------------
// Question no-2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function recurFunc(arr, i, id) {
//   if (i < arr.length && id === arr[i]) {
//     return true;
   
//   }  
//   recurFunc(arr, i + 1, id);
 
// }

// let result = recurFunc(arr, i=0, 5);
// console.log(result);

// ---------------------------------------------------
// Question no-3

// function generatePara(name) { // parameter name
//     const para = document.createElement("p");
// const node = document.createTextNode(name);
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para);
// }
// let a = generatePara("this is new paragraph3."); // giving string to name

// ---------------------------------------------------
// Question no-4

// let newListItem = document.createElement('li');
// let item = document.createTextNode('Peach');
// newListItem.appendChild(item);

// document.querySelector('ol').appendChild(newListItem);

// -----------------------------------------------------
// Question no-5

// function changeBackground(color) {
//         document.getElementById("rang").style.background = color;
//      }
//  changeBackground('green') ;

// ----------------------------------------------------
// Question no-6

//  function student(name , car) {
//         return{
//                 name:name,
//                 car: {
//                    car
//                 }
//         };

//  }
// let students = [student("hassan",{model:2022,company:"BMW"})];
// console.log(students);
// let stringify = JSON.stringify(students);
// localStorage.setItem("students", stringify );
// ------------------------------------------------------------
// Question no-7

// let prevData =localStorage.getItem("students");
// let students =  prevData?JSON.parse(prevData):[];
// function studentsData() {
//   let stu = {
//     name: prompt("Enter name"),
//     course: prompt("Enter Course"),
//     gender: prompt("Enter gender"),
//     age: +prompt("enter age"),
//   };

//   students.push(stu);
//   console.log(students);
//   let stringify = JSON.stringify(students);
//   localStorage.setItem("students",stringify);
// }

// ---------------------------------------------------
// Question no-8

// function vehicle() {
//   let bike = {
//     name: prompt("Enter name"),
//     company: prompt("Enter company"),
//     speed: +prompt("Enter speed"),
//   };

//   let stringify = JSON.stringify(bike);
//   localStorage.setItem("bike", stringify);

// let prevVehicles = localStorage.getItem("bike");
//  prevVehicles ? JSON.parse(prevVehicles) : [] ;

// }

// ---------------Assigment no-2-----------------------
