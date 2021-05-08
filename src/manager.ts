import {Employee} from './employee';

export class Manager extends Employee
{

    constructor(public name :string, public id: number, public email :string, public officeNumber: string, public role: string = "Manager")
    {
        super(name, id, email);
        // set the unique field value to the office number
        this.uniqueFieldsMap.uniqueField = "Office number";
        this.uniqueFieldsMap.uniqueFieldValue = this.getOfficeNumber();
    
        if (officeNumber == "" || officeNumber === undefined)
        {
            throw new Error("Please provide a valid ofice number");
        }
    }
    getOfficeNumber():string { return this.officeNumber; }

}