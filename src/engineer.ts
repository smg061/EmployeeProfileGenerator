import {Employee} from './employee';

export class Engineer extends Employee
{
    constructor(public name: string, public id: number, public email: string, public github: string, public role = "Engineer")
    {
        super(name, id, email);
        this.uniqueFieldsMap = 
        {
        
            "Role": this.getRole(),
            "UniqueField": "GitHub",
            "UniqueFieldValue": this.getGithub(),
            "Icon": "fa fa-briefcase"
        }
    }
    getGithub() { return this.github; }

}