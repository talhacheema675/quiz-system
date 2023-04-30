import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { input } from "./user.js";
let count=0
let arr:string[]=
["what is the capital of Pakistan",
"what is the capital of India",
"what is the capital of Bangladesh",
"what is the capital of Srilanka",
"what is the capital of America"]
let optn:string[]=["Islamabad","Delhi","Dhaka","Columbo","Washington"]
let corr_Arr:string[]=[];
let wrong:string[]=[];
let counter=0
console.log(chalk.yellow.bold(figlet.textSync("Welcome to Quiz App")))
for(let i=0;i<5;i++)
{
let a=await input(arr[i],"rawlist",optn)
if(i==counter && a==optn[i])
{
    count++;
    corr_Arr.push(arr[i]);
}
else
{
    wrong.push(arr[i])
}

counter++;
}
console.log(chalk.green. bold(figlet.textSync(`Progress Report`)))
console.log(chalk.green.bold(`Total correct answers: ${count}`))
console.log(chalk.blue.bold(`correct answers: ${corr_Arr}`))
console.log(chalk.red.bold(`Total incorrect answers: ${5-count}`))
console.log(chalk.yellow.bold(`incorrect answers: ${wrong}`))
