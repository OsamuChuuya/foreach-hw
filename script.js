let product =[`non`,`banan`, `mashina`, `asal`, `olma`, `aziza`,]
let result1 =[]
for(let nbor of product){
    if(nbor.includes("n")){
        result1.push(nbor)

    }
}
console.log(`${result1.join(", ")} n ishtirok etgan sozlar`);

let result =[]
for(el of product){
    if(!el.includes("n")){
        result.push(el)
    }
}   
console.log(`${result.join(", ")} n ishtirok etmagan sozlar`)