import axios from "axios";
import readline from "readline-sync"


function getData(){
    return new Promise((resovle,reject)=>{

        let username=readline.question("Enter your username:");
        let url=`https://api.github.com/users/${username}`
    
        axios.get(url).then((response)=>{
            resovle(response.data);
        }).catch((error)=>{
            reject(error);
        })
    })
    
}
getData().then((data)=>{

console.log(data.name);
    console.log(data.company);
    console.log(data.location);
    console.log(data.bio);
    console.log(data.twitter_username);
    console.log(data.public_repos);
    console.log(data.public_gists);
    console.log(data.followers);
    console.log(data.following);
}).catch((error)=>{
    console.log("Invalid github usename",error);
    
})