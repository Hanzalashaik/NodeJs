import readline from "readline-sync";

import fs from "fs/promises"

async function library(){
    try{
    let name=readline.question("Enter your name:");
    let email=readline.questionEMail("Enter your email:");
    let favbook=readline.question("Enter your favorite Book:");

    let data={
        name,
        email,
        favbook
    };

    
    await fs.writeFile("record.json",JSON.stringify(data));
    
    //reading file

    let display=await fs.readFile("record.json","utf-8");
    console.log(display);
    }catch(error){
        console.log(error);
        
    }
    
}
library()