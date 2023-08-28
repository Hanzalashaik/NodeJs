import axios from "axios";
import readline from "readline-sync";
import cli from "cli-color"

async function getData() {
    try {
        let c1=cli.xterm(34);
        let c2=cli.xterm(196);
        let c3=cli.xterm(228);
        let c4=cli.xterm(90);
        let c5=cli.xterm(201);
        let c6=cli.xterm(84);
        console.log(c5("*****************WELCOME TO GITHUB CLI**********************"));
        
        let username = readline.question("Enter your username:");
        let url = `https://api.github.com/users/${username}`;

        let output = await axios(url);
        console.log(c3("Name:"),output.data.name);
        console.log(c2("CompanyName:"),output.data.company);
        console.log(c1("Location:"),output.data.location);
        console.log(c4("Bio:"),output.data.bio);
        console.log(c5("Twitter_Username:"),output.data.twitter_username);
        console.log(c2("Public Repo:"),output.data.public_repos);
        console.log(c3("Public Gist:"),output.data.public_gists); // Corrected property name
        console.log(c4("Followers:"),output.data.followers);
        console.log(c6("Following:"),output.data.following);
    } catch (e) {
        console.log("Invalid Username");
        // console.log(e);
    }
}

getData();
