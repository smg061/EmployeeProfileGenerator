import {Employee} from './employee';

export class Manager extends Employee
{

    constructor(public name :string, public id: number, public email :string, public officeNumber: string, public role: string = "Manager")
    {
        super(name, id, email);
        this.uniqueFieldsMap = 
        {
        
            "Role": this.getRole(),
            "UniqueField": "Office number",
            "UniqueFieldValue": this.getOfficeNumber(),
            "Icon": "fa fa-briefcase"
        }
    }
    getOfficeNumber():string { return this.officeNumber; }

}