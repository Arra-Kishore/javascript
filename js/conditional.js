//let a=prompt("what is ur age?")
//a = Number.parseInt(a)
//console.log(a)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your age?: ', (answer) => {
    console.log(`You entered: ${answer}`);
 
   rl.close();

   if(r1.question>0)
{
    alert("valid");

}
else{
    alert("invalid");
}
});
