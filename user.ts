import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

async function input(str1:string,str2:string,str3?:string[]) 
{
 let user= await inquirer.prompt([{
    name:"quiz",
    type:str2,
    message:chalk.red.bold(str1),
    choices:str3,
 }])   

 return user.quiz;
}
export{input}