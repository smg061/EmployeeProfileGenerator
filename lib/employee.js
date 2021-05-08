"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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
        if (name === "" || id === undefined || email === "") {
            throw new Error("Error : Not all of the constructor parameters were provided");
        }
    }
    getName() { return this.name; }
    getId() { return this.id; }
    getEmail() { return this.email; }
    getRole() { return this.role; }
    getUniqueMap() { return this.uniqueFieldsMap; }
}
exports.Employee = Employee;
