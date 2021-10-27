
const generateManager = (manager) => {
    console.log("generating manager");
    return `
    <div class="employee-card">
        <div class="employee-card-header">
            <h2>${manager.getName()}</h2>
            <h3><span></span>${manager.getRole()}</h3>
        </div>
        <div class="employee-card-content">
            <div class="employee-card-content-item">
                ID: ${manager.getId()}
            </div>      
            <div class="employee-card-content-item">
                E-Mail: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a>
            </div>      
            <div class="employee-card-content-item">
                Office Number: ${manager.getOfficeNumber()}
            </div>      
        </div>
    </div>
    `;
}

const generateEngineer = (engineer) => {
    console.log("generating engineer");
    return `
    <div class="employee-card">
        <div class="employee-card-header">
            <h2>${engineer.getName()}</h2>
            <h3><span></span>${engineer.getRole()}</h3>
        </div>
        <div class="employee-card-content">
            <div class="employee-card-content-item">
                ID: ${engineer.getId()}
            </div>      
            <div class="employee-card-content-item">
                E-Mail: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a>
            </div>      
            <div class="employee-card-content-item">
                GitHub: <a href = "https://github.com/${engineer.getGithubUsername()}" target="_blank">${engineer.getGithubUsername()}</a>
            </div>      
        </div>
    </div>
    `;
}

const generateIntern = (intern) => {
    console.log("generating intern");
    return `
    <div class="employee-card">
        <div class="employee-card-header">
            <h2>${intern.getName()}</h2>
            <h3><span></span>${intern.getRole()}</h3>
        </div>
        <div class="employee-card-content">
            <div class="employee-card-content-item">
                ID: ${intern.getId()}
            </div>      
            <div class="employee-card-content-item">
                E-Mail: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a>
            </div>      
            <div class="employee-card-content-item">
                School: ${intern.getSchool()}
            </div>      
        </div>
    </div>
    `;
}

const generateRoster = (roster) => {
    console.log('generating roster');
    let employeeSection = ``;

    for (let i = 0; i < roster.length; i++) {
        const employeeType = roster[i].getRole();

        switch (employeeType) {
            case 'Manager':
                employeeSection += generateManager(roster[i]);
                break;
            case 'Engineer':
                employeeSection += generateEngineer(roster[i]);
                break;
            case 'Intern':
                employeeSection += generateIntern(roster[i]);
                break;
        
            default:
                break;
        }
    }

    return employeeSection;
}




export const generateHtmlMarkdown = (roster) => {
    console.log('generating html markdown');
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Roster</title>
        <link rel="stylesheet" href="./template.css">
    </head>
    <body>
        <header class="header">My Team</header>   

        <div class="container">
            ${generateRoster(roster)}
        </div>
        
    </body>
    </html>
    `;
}