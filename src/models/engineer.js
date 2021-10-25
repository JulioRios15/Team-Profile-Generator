import { Employee } from "./employee.js";

export class Engineer extends Employee {
    constructor(id, name, email, githubUsername){
        super(id, name, email);
        this.githubUsername = githubUsername;
    }

    getGithubUsername(){
        return this.githubUsername;
    }

    getRole(){
        return 'Engineer';
    }
}
