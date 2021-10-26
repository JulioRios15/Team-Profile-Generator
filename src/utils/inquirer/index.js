import inquirer from "inquirer";

export const inquirerPrompt = async (questions) => {
    return await inquirer
    .prompt(questions)
    .then((data) => data)
    .catch((error) => error);
}