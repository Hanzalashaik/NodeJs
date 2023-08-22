import readline from "readline-sync"
import cli from "cli-color"

let shop=cli.xterm(164)
console.log(shop("*****Mobile Shop*****"));

let customerName = cli.xterm(202);
let question=cli.xterm(48)
console.log(question("Your Name:"));
console.log(customerName(readline.question()));

console.log("***********************");


let question2=cli.xterm(4)
let customerEmail = cli.xterm(202);
console.log(question2("Your Email:"));
console.log(customerEmail(readline.questionEMail()));

console.log("**********************");

let customerAge = cli.xterm(223);
let question3=cli.xterm(87)
console.log(question3("Your Age:"));
console.log(customerAge(readline.questionInt()));

console.log("**********************");

let  productName=cli.xterm(88)
console.log(productName(readline.question("Product Name:")));

console.log("**********************");

let orderId=1;
console.log("Order Id :",orderId);

console.log("**********************");

let discount=cli.xterm(8)
console.log(discount("Discount :15%"));

console.log("**********************");

let warranty=cli.xterm(14)
console.log(warranty("Warranty:One Year"));

console.log("**********************");





