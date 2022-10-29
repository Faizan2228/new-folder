// function greet(name, thank) {
//     let msg = `llllll ${name}
//     llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll ${thank}
//     `;
//     return msg;
// }
// // let name = "amaan";
// // let thank = "thanks alot";
// let val = greet("amaaaaaaaan", "thank");
// console.log(val);

// function greet(a, b) {
//     if (a > b) {
//         return ("hello worlds");
//     } else if (a === b) {
//         return ("world hellos");
//     } else {
//         return ("hello theres");
//     }
// }
// greet(2, 1);

// function value(name) {
//     if (name === "") {
//         console.log("you cannot enter");
//     } else if (name === "$") {
//         console.log("please enter correct name");
//     } else {
//         console.log(`hello, ${name} your age is`);
//     }
// }
// value("amaan");

// function gard() {
//     console.log("hello!");
// }

// setTimeout(gard, 4000);

// (function() {
//     console.log("hello world");
//     alert("hello world");
// })();

// // program for a simple calculator

// // take the operator input
// // 

// const firstnum = parseFloat(prompt('Enter first number: '));
// const operator = prompt('enter your operator');
// const secondnum = parseFloat(prompt('Enter second number: '));

// if (operator == "+") {
//     result = (`${firstnum}` + `${secondnum}`);
// } else if (operator == "-") {
//     result = firstnum - secondnum;
// } else if (operator == "*") {
//     result = firstnum * secondnum;
// } else if (operator == "/") {
//     result = firstnum / secondnum;
// } else if (operator == "%") {
//     result = firstnum % secondnum;
// }
// alert(`${firstnum} ${operator} ${secondnum} = ${result}`);
// console.log(2 * 5);


// let and = ["apple", "banana", "orange", "mango"];

// let then = [
//     ["mango", "100"],
//     ["apple", "200"],
//     ["banana", "300"],
//     ["orange", "400"]
// ];
// let was = then[3][0];
// console.log(was);


// and.forEach(myfun);

// function myfun(value) {
//     console.log(value);
// }

// let the = ["pine", "fruits"];
// let sum = and.concat(the);
// console.log(sum);
// console.log(and);
// let all = and.length;
// console.log(all);

// for (i = 0; i < all; i++) {
//     console.log(i);
// }
// and.forEach(and => {
//     console.log(and);
// });


// const outer = () => {
//     var outervar = "hello,";

//     const inner = () => {
//         var innervar = "hi";
//         console.log(outervar, innervar);
//     }
//     return inner;
// }
// const full = outer();
// full();


// // const race = () => {
// //     outervar = "hello";

// //     const win = () => {
// //         innervar = "world";
// //         console.log(outervar, innervar);
// //     }
// //     return win;
// // }
// // const funnr = race();
// // funnr();


// const hand = () => {
//     const outer = "hand";

//     const shake = () => {
//         const inner = "shake";
//         console.log(outer, inner);
//     }
//     return shake;
// }
// const hnsk = hand();
// hnsk();

// const nume = 5;
// if (nume === 5) {
//     (function myfrn() {
//         console.log("number is five");
//     })();

// }
const happ = ["jon", "mike", "dean", "chris", "jenny"];
// happ.splice(2, 0, 'hello');
// console.log(happ);
// const slices = happ.slice(1, 4);
// console.log(slices);
// happ.pop();
// console.log(happ);
// happ.shift();
// console.log(happ);
// happ.unshift("tom");
// console.log(happ);
// happ.splice(1, 1, "/");
// console.log(happ);
// for (let i = 0; i < happ.length; i++) {
//     console.log(happ[i]);
// }
// happ.forEach((name) => console.log(name));
// const eng = ["alone", "suffering", "heat", "winter", "mountain"];
// eng.forEach((values) => console.log(values));

// const under = [
//     { name: "amaan", age: 21 },
//     { name: "faizan", age: 22 },
//     { name: "maamaan", age: 23 },
// ];
// const upper = under.map((values) => console.log(`your names is ${values.name} and your age is ${values.age}`));


// const cars = [
//     { brand: "bmw", color: "black", price: "3million" },
//     { brand: "volvo", color: "white", price: "4millon" },
//     { brand: "mercides", color: "red", price: "5millon" },
//     { brand: "range rover", color: "green", price: "6millon" },
//     { brand: "fortuner", color: "grey", price: "7millon" },
//     { brand: "maruti", color: "blue", price: "8millon" },
// ];
// const car = cars.map((values => console.log(`your car brand is ${values.brand} and color is ${values.color}. NICE CAR!`)));

// const pricess = cars.filter((values => values.price >= "5million"));
// console.log(pricess);
// // const pricesss = cars.filter((values => values.brand === "volvo"));
// // console.log(pricesss);
// const onlynames = pricess.map((namess => namess.brand));
// // onlynames.forEach((guide => console.log(`your car is ${guide}`)));
// onlynames.forEach((guilt => console.log(`you car ${guilt} `)));

// const ferr = 'bmw';
// const person = {
//     ferr,
//     lastname: 'faizan',
//     age: '21',
//     car: {
//         brand: ferr,
//         color: 'black',
//         year: 2015
//     }
// }
// console.log(person);

// const brave = {
//     name: 'tiger',
//     lion: 'lion',
//     chetah: 'chetah',

// }
// brave.ani = { name: 'cool', age: 22 }
// console.log(brave);

// const myys = {
//     name: 'dog',
//     age: '2',
//     arr: ["call", "phone"],
//     listp: function(says) {
//         says = "woof, woof";
//         console.log(this.name, this.age, this.arr, says);
//     }
// }
// myys.listp();
// console.log(myys);


// const comp = {
//     name: 'dog',
//     age: '2',
//     lion: 'lion',
//     chetah: 'chetah'
// }
// const myobjs = Object.entries(comp);
// myobjs.forEach(entry => {
//     let key = entry[0];
//     let car = entry[1];
//     console.log(`${key} : ${car}`);
// });
// const kri = {
//     name: 'coll',
//     age: '22',
//     car: 'bmw'
// }
// const kris = Object.entries(kri);
// kris.forEach(values => {
//     let key = values[0];
//     let keys = values[1];
//     console.log(`${key} : ${keys}`);
// });


// const jeep = {
//     name: 'james',
//     age: '23',
//     car: 'bmw'
// }

// const geeb = Object.entries(jeep);

// geeb.forEach(values => {
//     let key = values[0];
//     let keys = values[1];
//     console.log(`${key} : ${keys}`);
// });


// const mydis = {
//     animal: 'dog',
//     age: '10',
//     listp: function(says) {
//         says = "woof, woof";
//         console.log(says);
//     }
// }
// mydis.age = 'yes';
// // delete mydis.age;
// mydis.listp();
// console.log(mydis);
// const setter = {
//     name: 'amaan',
//     age: '22',
//     set setname(n) {
//         this.name = n.toUpperCase();
//     }
// };
// setter.setname = "faizan";
// console.log(setter);

// //constructor
// function Student(frst, lst, age, cls) {
//     this.firstname = frst;
//     this.lastname = lst;
//     this.age = age;
//     this.class = cls;
// }
// const student1 = new Student("m.a", "amaan", 23, 14);
// const student2 = new Student("m.a", "faizan", 21, 13);
// const student13 = new Student("m.a", "ananaa", 22, 12);
// student1.game = "basket ball";
// console.log(student1, student2, student13);


// student1.name = function() {
//     return this.firstname + " " + this.lastname;
// }
// console.log(student1.name());

// // let c = Math.floor(Math.random() * (min - max) + min);
// // console.log(c);

// function getrandom(min, max) {
//     let x = Math.floor(Math.random() * (max - min) + min);
//     return x;
// }
// console.log(getrandom(20, 25));


// function School(frst, lst, cls, jt) {
//     this.firstname = frst;
//     this.lastname = lst;
//     this.class = cls;
//     this.jet = jt;
// }
// School.prototype.plane = "none";
// School.prototype.craft = "undefined";
// students1 = new School("amaan", "m.a",
//     12, 2);
// students2 = new School("amaan", "m.a",
//     12, 2);
// console.log(students1, students2);

// students1.name = function() {
//     return this.firstname + " " + this.lastname;
// }
// console.log(students1.name());

// students2.car = function() {
//     return this.class + " " +
//         this.jet;
// }
// console.log(students2.car());

// nested object
const userinfo = {
    id: 134,
    password: "123qwe",
    personal: {
        name: "amaan",
        age: 22,
        details: {
            city: "hyderabad",
            country: "india",
        }
    }
}


console.log(userinfo);


function Pers(frst, lst, mdle, age) {
    this.firstname = frst;
    this.lastname = lst;
    this.middle = mdle;
    this.age = age;
}

const option = new Pers("mohammed", "amaan", "abdul", 22);
Pers.prototype.nationality = "indian";

console.log(option);

// html selec element
let elm = document.getElementById("name");
console.log(elm);
// elm.innerHTML = "<b> faizsn </b>";