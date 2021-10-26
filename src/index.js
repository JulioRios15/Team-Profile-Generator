import {inquirerPrompt} from './utils/inquirer/index.js';
import questions from './utils/inquirer/config/questions.js';
import {Manager} from './models/manager.js';
import {Intern} from './models/intern.js';
import {Engineer} from './models/engineer.js';

const roster = [];

async function init() {
    let index = 1;

    const managerData = await inquirerPrompt(questions.managerQuestions);
    const manager = new Manager(1, managerData.name, managerData.email, managerData.officeNumber);
    roster.push(manager);
    
    let confirm = await inquirerPrompt(questions.newEmployeeConfirm);

    while(confirm.newEmployeeConfirm == true){
        index++;
        //TODO: fix employee type choices to only one option
        const employeeType = await inquirerPrompt([questions.employeeType]);
        const internQuestions = questions.internQuestions;
        const engineerQuestions = questions.engineerQuestions;

        if(employeeType.employeeType == 'Intern'){
            const internData = await inquirerPrompt(internQuestions);
            const newIntern = new Intern(index, internData.name, internData.email, internData.school);
            roster.push(newIntern);
        }
        else if (employeeType.employeeType == 'Engineer'){
            const engineerData = await inquirerPrompt(engineerQuestions);
            const newEngineer = new Engineer(index, engineerData.name, engineerData.email, engineerData.githubUsername);
            roster.push(newEngineer);
        }

        confirm = await inquirerPrompt(questions.newEmployeeConfirm);
    }
    
    console.log(roster);
}

await init()