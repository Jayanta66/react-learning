

const userMessage ="Hello World";

console.log(userMessage);
console.log(userMessage);

console.log(10===10);
console.log(10===11);
console.log(10<=1);

if(10===10){
console.log("works");
}

//Math
let a=3;
let b=5;
console.log("Sum = "+(a+b));

console.log("hello"+"world")

//Function

function greet(){
    console.log("Hellow world");
}
greet();
greet();
greet();
greet();

function greetUser(userName,message){
    console.log(userName);
    console.log(message);
}

greetUser("Jayanta","Hello world");
greetUser("Jay", "Java Full Stack Web Developer");

function greetUserr(userName,message="Halder"){
    console.log(userName);
    console.log(message);
}

greetUserr("H");
greetUserr("ret", "Java Full Stack Web Developer");



//WIth out Function

const aa=4;
const bb=4;
const c=2;
console.log(aa*bb/c);

//Using Function

function calculate(a,b,c){
    a=4;
b=4;
c=2;
console.log(a*b/c);

}

calculate(4,4,2);


function combine (a,b,c){
    
return console.log(a*b/c);

}

combine (50,4,2);

//Arrow Function or Annonymous function

export default (userName="ljlk", message="dsfa") =>{
    console.log("Arrow Function or Annonymous function");
   return this.userName+message;

};

const user={
    name:"jay",
    age:25
};

console.log(user);
console.log("Name : "+user.name);
console.log("Age : "+user.age);

console.log("Name "+user.name+"  "+"Age : "+user.age);

const users = {
    name:"jj",
    age:"33",
    grees(){
        console.log("dfadsfs");
        console.log("Name : "+this.name);
        console.log("Age : "+this.age);
    }

}

users.grees();

//class and Constructor and method

class Userrr{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    gre(){
        console.log("HI");
    }
}

const userrr1 = new Userrr("Manuel",35);
console.log(userrr1); 

//Arrays & Array method like map()

const hobbies =["coding", "playing cricket", "sleeping", "watching movies"];
console.log("My hobies : "+hobbies);

// add new elements to array 
hobbies.push("dsjfl");
console.log(hobbies);

// find elements
const index = hobbies.findIndex( 
        (item) =>{
            return item ==="coding";
        }
);

console.log("Index location : "+index);

// map

const editedhobies = hobbies.map( (item) => item + "!");
console.log(editedhobies);


const editedhobiess = hobbies.map( (item) => ({text:item}));
console.log(editedhobiess);


function transformToObjects(numberArray) {
    //  Todo: Add your logic
    numberArray=["1","2","3","4"];
    
  const  newww = numberArray.map( (item) => ({text:item}));
  console.log(newww);
    
 }

transformToObjects();

//Destructuring

const [firstName, lastName] = ["Max","dsfdsfds"];
console.log(firstName);
console.log(lastName);
 
// Spread Operator
//...

//Controll Structures 

/*
const password = prompt('Your password');

if(password === "Hellow"){
    console.log("Hellow works");

}else if(password === "hello"){
    console.log("hello works");
}
else{
    console.log("Access not granted");
}
*/

const ho = ["dsfa","dsfadsfdsf"];
for(const hof of ho){
    console.log(ho);
}

// Using Function as Value

function handleTimeout(){
    console.log("Time out !!");
}

const handleTimeout2 = () => {
    console.log("Time out .... again !!!!");
};

setTimeout(handleTimeout);

setTimeout(handleTimeout,2000);
setTimeout(handleTimeout2,3000);
setTimeout(
    () => {

        console.log("More timing out .....");

    }

);

function greeter(greeFn){
    greeFn();
}

greeFn(() => console.log("Hi"));

