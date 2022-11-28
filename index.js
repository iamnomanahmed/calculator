#!usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets Start Calculation");
    await sleep();
    rainbowTitle.stop();
}
welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "Operator",
            message: "Which Mathametical operaiton you want to perfom",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: " Enter Number 1",
        },
        {
            type: "number",
            name: "num2",
            message: " Enter Number 2",
        },
    ]);
    if (answers.Operator === "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.Operator === "Subtraction") {
        console.log(chalk.green(`${answers.num1}  - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.Operator === "Division") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.Operator === "Multiplication") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to restart"
        });
    } while (again.restart === 'y' || again.restart === 'Y');
}
startAgain();
