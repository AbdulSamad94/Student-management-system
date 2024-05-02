#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(" ");
console.log(chalk.yellowBright.bold("-----------------------------------Welcome to the Student Management System project by abdul samad ----------------------------------"));
let easypaisaPin = 123;
let jazzcashPin = 111;
let paypalPin = 192;
let randomNumber = Math.floor(Math.random() * 9);
let randomNumber1 = Math.floor(Math.random() * 9);
let randomNumber2 = Math.floor(Math.random() * 9);
let randomNumber3 = Math.floor(Math.random() * 9);
let randomNumber4 = Math.floor(Math.random() * 9);
let idNumber = `${randomNumber}${randomNumber1}${randomNumber2}${randomNumber3}${randomNumber4}`;
let typescriptFees = 4000;
let javaScriptFees = 4500;
let pythonFees = 4300;
let cFees = 3000;
console.log(" ");
let nameQuestions = await inquirer.prompt([{
        name: "name",
        message: chalk.yellow.bold("Enter Student Name: "),
        type: "input",
    }]);
let condition = true;
while (condition) {
    let courseQuestion = await inquirer.prompt([{
            name: "course",
            type: "list",
            message: chalk.yellow("Select any one of the course: "),
            choices: ["Typescript", "JavaScript", "Python", "C++"]
        }]);
    let names = nameQuestions.name;
    let course = courseQuestion.course;
    console.log(" ");
    //=============================================TYPESCIPT===========================================
    if (course == "Typescript") {
        console.log(chalk.red.bold(`The tution fees of this course is : ${chalk.blue.bold.underline(typescriptFees)}`));
        console.log(" ");
        let confirm = await inquirer.prompt([{
                name: "confirmation",
                type: "list",
                message: chalk.blue.bold("Do you really want to buy this course??"),
                choices: ["Yes, Continue..", "Go back"]
            }]);
        console.log('');
        if (confirm.confirmation == "Yes, Continue..") {
            condition = false;
            let paymentMethod = await inquirer.prompt([{
                    name: "payment",
                    type: "list",
                    message: chalk.yellow.bold("Select the payment method :"),
                    choices: ["Easypaisa", "Jazzcash", "Paypal"]
                }]);
            console.log(" ");
            let payment = paymentMethod.payment;
            if (payment == "Easypaisa") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of EasyPaisa....')
                    }]);
                console.log(" ");
                if (askPin.pin == easypaisaPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    console.log(" ");
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    console.log(" ");
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    console.log(" ");
                    if (moneyTransfer.transfer == typescriptFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        console.log(" ");
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        console.log(" ");
                        if (exitingOption.exit == "View Status") {
                            console.log(" ");
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(" ");
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${typescriptFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(" ");
                        console.log(chalk.redBright.bold("You don't have that much money in the easypaisa..."));
                    }
                    else if (moneyTransfer.transfer < typescriptFees) {
                        console.log(" ");
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(" ");
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else if (payment == "Jazzcash") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Jazzcash...')
                    }]);
                console.log(" ");
                if (askPin.pin == jazzcashPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    console.log(" ");
                    let money = 4500;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    console.log(" ");
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    console.log(" ");
                    if (moneyTransfer.transfer == typescriptFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        console.log(" ");
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        console.log(" ");
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(" ");
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${typescriptFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Jazzcash..."));
                    }
                    else if (moneyTransfer.transfer < typescriptFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Paypal...')
                    }]);
                console.log(" ");
                if (askPin.pin == paypalPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    console.log(" ");
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    console.log(" ");
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    console.log(" ");
                    if (moneyTransfer.transfer == typescriptFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        console.log(" ");
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        console.log(" ");
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(" ");
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${typescriptFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Paypall..."));
                    }
                    else if (moneyTransfer.transfer < typescriptFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
        }
        else {
            condition = true;
        }
    }
    //===============================================JAVASCIPT====================================================
    else if (course == "JavaScript") {
        console.log(" ");
        console.log(chalk.red.bold(`The tution fees of this course is : ${chalk.blue.bold.underline(javaScriptFees)}`));
        console.log(" ");
        let confirm = await inquirer.prompt([{
                name: "confirmation",
                type: "list",
                message: chalk.blue.bold("Do you really want to buy this course??"),
                choices: ["Yes, Continue..", "Go back"]
            }]);
        console.log('');
        if (confirm.confirmation == "Yes, Continue..") {
            condition = false;
            let paymentMethod = await inquirer.prompt([{
                    name: "payment",
                    type: "list",
                    message: chalk.yellow.bold("Select the payment method :"),
                    choices: ["Easypaisa", "Jazzcash", "Paypal"]
                }]);
            let payment = paymentMethod.payment;
            if (payment == "Easypaisa") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of EasyPaisa....')
                    }]);
                if (askPin.pin == easypaisaPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == javaScriptFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${javaScriptFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the easypaisa..."));
                    }
                    else if (moneyTransfer.transfer < javaScriptFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else if (payment == "Jazzcash") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Jazzcash...')
                    }]);
                if (askPin.pin == jazzcashPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 4500;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == javaScriptFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${javaScriptFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Jazzcash..."));
                    }
                    else if (moneyTransfer.transfer < javaScriptFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Paypal...')
                    }]);
                if (askPin.pin == paypalPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == javaScriptFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${javaScriptFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Paypall..."));
                    }
                    else if (moneyTransfer.transfer < javaScriptFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
        }
        else {
            condition = true;
        }
    }
    //===================================================PYTHON===================================================
    else if (course == "Python") {
        console.log(chalk.red.bold(`The tution fees of this course is : ${chalk.blue.bold.underline(pythonFees)}`));
        let confirm = await inquirer.prompt([{
                name: "confirmation",
                type: "list",
                message: chalk.blue.bold("Do you really want to buy this course??"),
                choices: ["Yes, Continue..", "Go back"]
            }]);
        console.log('');
        if (confirm.confirmation == "Yes, Continue..") {
            condition = false;
            let paymentMethod = await inquirer.prompt([{
                    name: "payment",
                    type: "list",
                    message: chalk.yellow.bold("Select the payment method :"),
                    choices: ["Easypaisa", "Jazzcash", "Paypal"]
                }]);
            let payment = paymentMethod.payment;
            if (payment == "Easypaisa") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of EasyPaisa....')
                    }]);
                if (askPin.pin == easypaisaPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == pythonFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${pythonFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the easypaisa..."));
                    }
                    else if (moneyTransfer.transfer < pythonFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else if (payment == "Jazzcash") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Jazzcash...')
                    }]);
                if (askPin.pin == jazzcashPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 4500;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == pythonFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${pythonFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Jazzcash..."));
                    }
                    else if (moneyTransfer.transfer < pythonFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Paypal...')
                    }]);
                if (askPin.pin == paypalPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == pythonFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${pythonFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Paypall..."));
                    }
                    else if (moneyTransfer.transfer < pythonFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
        }
        else {
            condition = true;
        }
    }
    //=======================================================C=====================================================
    else if (course == "C++") {
        console.log(chalk.red.bold(`The tution fees of this course is : ${chalk.blue.bold.underline(cFees)}`));
        let confirm = await inquirer.prompt([{
                name: "confirmation",
                type: "list",
                message: chalk.blue.bold("Do you really want to buy this course??"),
                choices: ["Yes, Continue..", "Go back"]
            }]);
        console.log('');
        if (confirm.confirmation == "Yes, Continue..") {
            condition = false;
            let paymentMethod = await inquirer.prompt([{
                    name: "payment",
                    type: "list",
                    message: chalk.yellow.bold("Select the payment method :"),
                    choices: ["Easypaisa", "Jazzcash", "Paypal"]
                }]);
            let payment = paymentMethod.payment;
            if (payment == "Easypaisa") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of EasyPaisa....')
                    }]);
                if (askPin.pin == easypaisaPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == cFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${cFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the easypaisa..."));
                    }
                    else if (moneyTransfer.transfer < cFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else if (payment == "Jazzcash") {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Jazzcash...')
                    }]);
                if (askPin.pin == jazzcashPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 4500;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == cFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${cFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Jazzcash..."));
                    }
                    else if (moneyTransfer.transfer < cFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
            else {
                let askPin = await inquirer.prompt([{
                        name: "pin",
                        type: "number",
                        message: chalk.white.bold('Enter the pin-code of Paypal...')
                    }]);
                if (askPin.pin == paypalPin) {
                    console.log(chalk.greenBright.bold("Correct pin code"));
                    let money = 5000;
                    console.log(chalk.redBright.bold(`You have ${money} balance....`));
                    let moneyTransfer = await inquirer.prompt([{
                            name: 'transfer',
                            type: 'number',
                            message: chalk.yellow("Enter the amount to transfer : ")
                        }]);
                    if (moneyTransfer.transfer == cFees) {
                        console.log(chalk.greenBright.bold("Congratulations! You have bought the course...."));
                        let exitingOption = await inquirer.prompt([{
                                name: "exit",
                                type: "list",
                                message: chalk.blueBright.bold("Select any options :"),
                                choices: ["View Status", "Exit"]
                            }]);
                        if (exitingOption.exit == "View Status") {
                            console.log(chalk.white.bold('****************STATUS***************'));
                            console.log(chalk.greenBright.bold(`Student's name : ${names}`));
                            console.log(chalk.greenBright.bold(`Student's Id : ${idNumber}`));
                            console.log(chalk.greenBright.bold(`Selected Course : ${course}`));
                            console.log(chalk.greenBright.bold(`Fees paid : ${cFees}`));
                            console.log(" ");
                            console.log(chalk.greenBright.bold("Congratulations!! You have applied for this course..."));
                        }
                        else {
                            console.log(chalk.red.bold("***********Exiting*********"));
                        }
                    }
                    else if (moneyTransfer.transfer > money) {
                        console.log(chalk.redBright.bold("You don't have that much money in the Paypall..."));
                    }
                    else if (moneyTransfer.transfer < cFees) {
                        console.log(chalk.redBright.bold("Insufficient Amount!!!"));
                    }
                }
                else {
                    console.log(chalk.red("Incorrect! pin-code"));
                }
            }
        }
        else {
            condition = true;
        }
    }
}
