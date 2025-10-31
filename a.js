// let b=3;
// b=3;
// let b=5;
// console.log(b);
// // const a=3;
// // a=3;
// // console.log(a);
// var c=4;
// c=4;
// var c=4;
// console.log(c);


// function greet(){
//     console.log("hello");
// }
// greet();


// function test(){
//     var x=10;
//     console.log("inside",x);
// }
// test();
// console.log(x);//error

// function test(){
//     let x=10;
//     console.log("inside",x);
// }
// test();
// console.log(x);//error


// function test(){
//     const x=10;
//     console.log("inside",x);
// }
// test();
// console.log(x);//error


// var x=10;
// function test(){
//     x=10;
//     console.log("inside",x);
// }
// test();
// console.log(x);

// const x=10;
// function test(){
//     x=10;
//     console.log("inside",x);
// }
// test();
// console.log(x);

// let x=10;
// function test(){
//     x=10;
//     console.log("inside",x);
// }
// test();
// console.log(x);

// function Name(){
//     console.log("janhvi");
// }
// Name();

// const addKeyValue = (key, value) => {
//   const obj = {};      // create empty object
//   obj[key] = value;    // assign dynamic key-value
//   return obj;          // return object
// };

// console.log(addKeyValue("name", "Janhvi"));  
// // Output: { name: "Janhvi" }

// console.log(addKeyValue("age", 21));  
// // Output: { age: 21 }


// const student ={
//     name:"janhvi",
//     age:20,
//     course: "cse",
//     isActive: true
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);


// const car = {
//     brand: "toyota",
//     model: "Camry",
//     start:function(){
//         console.log("Car has started");
//     }
// };



// const person = {
//   name: "Janhvi",
//   age: 22,

//   abcd: function() {
//     console.log(`I am ${this.name} and ${this.age} years old`);
//   }
// };

// person.abcd();



// const greet=(a)=>{
//     return a*a*a;
// }
// console.log(greet(2));


// const student = {
//     name: "janhvi",
//     greet:()=>{
//         console.log("hello , my name is"+ this.name);
//     }
// };
// student.greet();


// const car = {
//     brand:"fortuner",
//     start: function (){
//         console.log("regular function: ",this.brand);
//     },
//     arrowStart: () =>{
//         console.log("regular function: ",this.brand);
//     }

// };
// car.start();
// car.arrowStart();


// function Car(brand){
// this.brand=brand;
// this.start=function(){
//     console.log(`${this.brand} is starting...`);
// };
// }
// const c1=new Car("BMW");
// const c2=new Car("Audi");
// console.log(c1.start===c2.start);



// class Car{
//     constructor(brand){
//         this.brand=brand;
//     }
//     start(){
//         console.log(`${this.brand} is starting...`);
//     }
// }
// const c1=new Car("BMW");
// const c2=new Car("Audi");
// console.log(c1.start===c2.start);


// class Student{
//     constructor(name,marks){
//         this.name=name;
//         this.marks=marks;
//     }
//     check(){
//         if(this.marks<33){
//             console.log(`${this.name} failed`);
//         }
//         else{
//             console.log(`${this.name} passed`);
//         }
//     }
// }
// const c1=new Student("janhvi",34);
// const c2=new Student("pranshu",32);
// c1.check(); 
// c2.check();

// class Student{
//     constructor(name,marks,grade){
//         this.name=name;
//         this.marks=marks;
//          this.grade=grade;
//     }
//     print(){
        
//             console.log(`${this.name}`);
//             console.log(`${this.marks} and ${this.grade}`);
//         }
    
// }
// const c1=new Student("janhvi",34,"B");
// const c2=new Student("pranshu",32,"C");
// const c3=new Student("shreya",44,"A");
// c1.print(); 
// c2.print();
// c3.print();


// Array methods
//concat()
//every()
//filter()
//find()
//forEach()


// const str="hello";
// const letters=Array.from(str);
// console.log(letters);

// const colors=["red", "green","blue","green"];
// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("green"));

// const numbers=[10,20,30];
// const total=numbers.reduce((sum,num)=>sum+num);
// console.log(total);

// const numbers=[10,20,30];
// numbers.map((num)=>{console.log(`${num}`);});

// const numbers=[10,20,30,40,50,60];
// numbers.filter((num)=>{
//     if(num>30){
// console.log(`${num}`);}
//     });

// var c1=[10,20,30];
// var c2=[40,50,60];
// c1=c1.concat(c2);
// console.log(c1);

// class Student{
//     constructor(name,marks){
//         this.name=name;
//         this.marks=marks;
//     }
//     check(){
//         if(this.marks.every(mark=>mark>40)){
//             console.log(`${this.name} passed`);
//         }
//         else{
//             console.log(`${this.name} failed`);
//         }
//     }
// }
// const s=new Student(["janhvi","pranshu","shreya","rishav"],[34,26,48,60]);
// s.check();

// create a class order that stores a list of items (each item is an object with name and price) 
// add the following methods: getTotal()-> use .reduce() to find total price
// getExpensiveitems()-> use.filter() to return items with price>500.
// displayItems()-> use .forEach() to print each item
// class Order{

// }



// const fruits = ["apple","banana","mango"]
// const [first,second,third]=fruits;
// console.log(first);
// console.log(second);
// console.log(third);

// const student = {name:"janhvi",age:25,course:"ReactJs"};
// const {name,course}=student;
// console.log(name);
// console.log(course);

// const numbers=[1,2,3];
// const newNumbers=[...numbers,4,5];
// console.log(newNumbers);


//merging objects
// const person={name:"Janhvi"}
// const details={age:25,course:"ReactJs"}
// const fullInfo={...person,...details};
// console.log(fullInfo);

// const numbers=[10,20,30,40,50]
// const [first,second,...restNumbers]=numbers
// console.log(first);
// console.log(second);
// console.log(restNumbers);

//functional parameters
// function sum(...nums){
//     console.log(nums);
// }
// sum(5,10,15)

// const fruits=["apple","banana","mango","orange"]
// const [first,second]=fruits
// console.log(first);
// console.log(second);

// function filterGreaterThan(limit,...values){
//     const result=values.filter(value=>value>limit);
//     return result
// }
// console.log(filterGreaterThan(5,10,15));

// let sum=0;
// function sumAll(...values){
//    for(let i of values){
//     sum+=i;
//    }
//    return sum;
// }
// console.log(sumAll(5,10,15));


const studentInfo={name:"Janhvi",age:21,subjects:["Math","Science","English","AI","ML"]}
const {name,age,subjects}=studentInfo
console.log(name);
console.log(age);
console.log(subjects);
const clonedSubjects = [...subjects];
const [core1, core2, ...electiveSubjects] = clonedSubjects;
console.log( [core1, core2]);
console.log( electiveSubjects);
const modify={core1,core2,...electiveSubjects}
console.log(modify);