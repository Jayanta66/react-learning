

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
   return userName+message;

};

const user={
    name:"jay",
    age:25
};

console.log(user);
console.log("Name : "+user.name);
console.log("Age : "+user.age);

console.log("Name "+user.name+"  "+"Age : "+user.age);

