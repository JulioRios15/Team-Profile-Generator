import validation from "./validation.js"

const managerName = {
    type: "input",
    name: "name",
    message: "Enter managers name",
    validate: validation.validateNotEmpty
}

const engineerName = {
    type: "input",
    name: "name",
    message: "Enter Engineer name",
    validate: validation.validateNotEmpty
}
const internName = {
    type: "input",
    name: "name",
    message: "Enter Intern name",
    validate: validation.validateNotEmpty
}

const officeNumber = {
    type: "input",
    name: "officeNumber",
    message: "Enter office manager office number",
    validate: validation.validateNotEmpty
}

const githubUsername = {
    type: "input",
    name: "githubUsername",
    message: "Enter github username",
    validate: validation.validateNotEmpty
}

const school = {
    type: "input",
    name: "school",
    message: "Enter intern school name",
    validate: validation.validateNotEmpty
}

const email = {
    type: "input",
    name: "email",
    message: "Enter employee email",
    validate: validation.validateEmail
}

const newEmployeeConfirm = {
    type: "confirm",
    name: "newEmployeeConfirm",
    message: "Do you want to add a new employee",
    choices: ["Yes", "No"]
}

const employeeType = {
    type: "list",
    name: "employeeType",
    message: "select employee type",
    choices: ['Engineer', 'Intern']
}

const managerQuestions = [
    managerName,
    email,
    officeNumber,
];

const engineerQuestions = [
    engineerName,
    email,
    githubUsername
];

const internQuestions = [
    internName,
    email,
    school
];

export default {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    newEmployeeConfirm,
    employeeType
}
 