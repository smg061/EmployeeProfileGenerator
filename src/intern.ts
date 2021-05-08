import {Employee} from './employee';

export class Intern extends Employee
{
    constructor(public name: string, public id: number, public email: string, public school: string, public role = "Intern")
    {
        super(name, id, email);
        // set the unique fields for this subclass
        this.uniqueFieldsMap.uniqueFieldValue = this.getSchool();
        this.uniqueFieldsMap.uniqueField = "School";

        if (school == "" || school === undefined || typeof school !== "string")
        {
            throw new Error("Please provide a school  name");
        }
    
    }

    getSchool(){ return this.school; }

}