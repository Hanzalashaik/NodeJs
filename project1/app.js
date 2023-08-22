import readline, { question } from "readline-sync"

const username=readline.question("may i ask your name :");

console.log("hi my name is ",username);


//Int
const age=readline.questionInt("what is your age :");
console.log("your age:",age);

//Float
const readings=readline.questionFloat("meter readings :")
console.log(readings);

//Email

const email=readline.questionEMail("Enter your email:")
console.log(email);
