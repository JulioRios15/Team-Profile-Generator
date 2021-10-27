import {inquirerPrompt} from './utils/inquirer/index.js';
import questions from './utils/inquirer/config/questions.js';
import {Manager} from './models/manager.js';
import {Intern} from './models/intern.js';
import {Engineer} from './models/engineer.js';
import {generateHtmlMarkdown} from './utils/markdown/html.js'
import fs from 'fs';

// All emplyees data to be pushed during quierer prompts
const roster = [];
const getRoster = () => roster;

const writeHtmlFile = (fileName, roster) => {
    const htmlData = generateHtmlMarkdown(roster);
    fs.writeFileSync(fileName, htmlData);
}

const writeCssFile = (fileName, roster) => {

}

async function init() {
    let index = 1;

    const managerData = await inquirerPrompt(questions.managerQuestions);
    const manager = new Manager(1, managerData.name, managerData.email, managerData.officeNumber);
    roster.push(manager);
    
    let confirm = await inquirerPrompt(questions.newEmployeeConfirm);

    while(confirm.newEmployeeConfirm == true){
        index++;

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

    //generate the html file with user inquirer inputs
     writeHtmlFile('./src/dist/index.html', getRoster());
    

    //console.log(roster);
}

await init()