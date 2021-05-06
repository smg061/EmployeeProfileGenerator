
export class Employee 
{
    public uniqueFieldsMap;
    constructor(public name: string, public id: number, public email: string, public role: string = "Employee")
    {
        this.uniqueFieldsMap = {};
    }

    getName():string { return this.name; }
    getId():number { return this.id; }
    getEmail(): string { return this.email; }
    getRole(): string { return this.role; }
    getUniqueMap() : any {return this.uniqueFieldsMap;}

}



