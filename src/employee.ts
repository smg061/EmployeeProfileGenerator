
export class Employee 
{
    public uniqueFieldsMap;
    constructor(public name: string, public id: number, public email: string, public role: string = "Employee")
    {
        // the object contains the unique fields for each subclass to generate the employee profile accordingly
        // this object has different values in the Intern, Manager, and Engineer subclass, but the keys are the same so the function
        // to generate a card can use generic parameters
        this.uniqueFieldsMap = 
        {
            "role": this.getRole(),
            "uniqueField": "None",
            "uniqueFieldValue": "None",
            "icon": "fa fa-briefcase"
        };

        // is there a way to make the subclasses also throw this error?
        if (name === "" || id === undefined || email === "")
        {
            throw new Error("Error : Not all of the constructor parameters were provided");
        }
    }

    getName():string { return this.name; }
    getId():number { return this.id; }
    getEmail(): string { return this.email; }
    getRole(): string { return this.role; }
    getUniqueMap() : any {return this.uniqueFieldsMap;}

}



