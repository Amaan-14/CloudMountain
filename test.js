
let str = "   fly me   to   the moon  ";

let a = str.replace(/ /g,",");

let b = a.split(",")

let test = []

for(let t of b){
    if(t == ""){
        continue;
    }else{
        test.push(t);
    }
}

let len = test.length - 1;

console.log(len)


console.log(test)

console.log(test[len].length)