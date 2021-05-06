import {Employee} from './employee';

export class Intern extends Employee
{
    constructor(public name: string, public id: number, public email: string, public school: string, public role = "Intern")
    {
        super(name, id, email);
        this.uniqueFieldsMap = 
        {
        
            "Role": this.getRole(),
            "UniqueField": "School",
            "UniqueFieldValue": this.getSchool(),
            "Icon": "fa fa-briefcase"
        }
    
    }

    getSchool(){ return this.school; }

}