const managerName = {
    type: "input",
    name: "name",
    message: "Enter managers name"
}

const engineerName = {
    type: "input",
    name: "name",
    message: "Enter Engineer name"
}
const internName = {
    type: "input",
    name: "name",
    message: "Enter Intern name"
}

const officeNumber = {
    type: "input",
    name: "officeNumber",
    message: "Enter office manager office number"
}

const githubUsername = {
    type: "input",
    name: "githubUsername",
    message: "Enter github username"
}

const school = {
    type: "input",
    name: "school",
    message: "Enter intern school name"
}

const email = {
    type: "input",
    name: "email",
    message: "Enter employee email"
}

const newEmployeeConfirm = {
    type: "confirm",
    name: "newEmployeeConfirm",
    message: "Do you want to add a new employee"
}

const employeeType = {
    type: "checkbox",
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
 