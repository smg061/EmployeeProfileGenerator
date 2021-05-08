import {Employee} from './employee';

export class Engineer extends Employee
{
    constructor(public name: string, public id: number, public email: string, public github: string, public role = "Engineer")
    {
        super(name, id, email);
        // set the unique fields for this subclass
        this.uniqueFieldsMap.uniqueField = "Github";
        this.uniqueFieldsMap.uniqueFieldValue = `<a href=https://github.com/${this.getGithub()}> ${this.getGithub()} </a>`;
        this.uniqueFieldsMap.icon = "fa fa-star";
        if (github == "" || github === undefined || typeof github !== "string")
        {
            throw new Error("Please provide a github username");
        }
    }
    getGithub() { return this.github; }

}