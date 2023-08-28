import axios from "axios"

async function getData(){
    let url="http://124.123.41.139/";

let output=await axios.get(url)

console.log(output.data.customers[2].email);

}

getData()