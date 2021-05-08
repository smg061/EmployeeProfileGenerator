"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const employee_1 = require("./employee");
class Manager extends employee_1.Employee {
    constructor(name, id, email, officeNumber, role = "Manager") {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
        // set the unique field value to the office number
        this.uniqueFieldsMap.uniqueField = "Office number";
        this.uniqueFieldsMap.uniqueFieldValue = this.getOfficeNumber();
        if (officeNumber == "" || officeNumber === undefined) {
            throw new Error("Please provide a valid ofice number");
        }
    }
    getOfficeNumber() { return this.officeNumber; }
}
exports.Manager = Manager;
