#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\n--------------------------Welcome to the Student-Management project by Abdul Samad------------------------\n"))

let randomId = Math.floor(Math.random()*9999 + 1000)

let nameasking = await inquirer.prompt([{
    name : "name",
    type : "input",
    message : chalk.blueBright.bold.underline("Enter Your Name:")
}])
let selectCourse = await inquirer.prompt([{
    name : "course",
    type : "list",
    message : chalk.blueBright.bold.underline("Select Any One Of The Course : "),
    choices : ["TypeScript", "JavaScript", "Python", "Java", "PHP"]
}])

let coursefees : {[key : string] : number} = {
    "TypeScript" : 4000,
    "JavaScript" : 4200,
    "Python" : 3500,
    "Java" : 3000,
    "PHP" : 3800,
}
let pinCodes : {[key : string]: number} = {
    EasyPaisa : 123,
    JazzCash : 1234,
    PayPal : 12345
}
selectCourse = selectCourse.course

console.log(chalk.redBright.bold(`\nYou Have Selected ${chalk.white.underline(selectCourse)}, And It's Fees is ${chalk.white.bold.underline(coursefees[selectCourse])}\n`))

let selectBank = await inquirer.prompt([{
    name : "bank",
    type : "list",
    message : chalk.yellowBright.bold("Select Any One Of The Bank To Proceed..."),
    choices : ["EasyPaisa", "JazzCash", "PayPal"]
}])

selectBank = selectBank.bank
let pinCheck = await inquirer.prompt([{
    name : "pin",
    type : "input",
    message : chalk.redBright.bold.underline(`Enter The pinCode Of ${selectBank}`)
}])
pinCheck = pinCheck.pin

let balace = 10000

if(pinCheck == pinCodes[selectBank]){
    console.log(chalk.greenBright.bold(`\nYour Balance in ${selectBank} is ${balace}..\n`))

    let enterAmount = await inquirer.prompt([{
        name : "amount",
        type : "number",
        message : chalk.yellow.bold(`Enter The Amount Of the ${chalk.white.underline(selectCourse)} : `)
    }])
    if(enterAmount.amount == coursefees[selectCourse]){
        console.log(chalk.green.bold(`\nCongratulations! You Have brought ${chalk.blue.underline(selectCourse)} Course..\n`))
        let exitMode = await inquirer.prompt([{
            name : "exit",
            type : "list",
            message : chalk.yellow.bold("Select Any One Of The Exit Mode :"),
            choices : ["View Final Status", "Exit"]
        }])
        if(exitMode.exit == "View Final Status" ){
            console.log(chalk.white.bold(`\n ---------------AdmitCard---------------\n`))
            console.log(chalk.green.bold(`Student Name : ${nameasking.name}`))
            console.log(chalk.green.bold(`Student's Id : ${randomId}`))
            console.log(chalk.green.bold(`Selected Course : ${selectCourse}`))
            console.log(chalk.green.bold(`Course Fees : ${coursefees[selectCourse]}`))
            console.log(chalk.green.bold(`Course Fees Paid? : Paid `))
        }
        else{
            console.log(chalk.blue(`\n--------------------Exiting------------------\n`))
        }
    }
    else{
        console.log(chalk.red.bold.underline("\nPlease Enter The Valid Amount\n"))
    }
}
else{
    console.log(chalk.redBright.bold("\n Wrong PinCode!!\n"))
}