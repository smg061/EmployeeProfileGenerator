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
        this.uniqueFieldsMap =
            {
                "Role": this.getRole(),
                "UniqueField": "Office number",
                "UniqueFieldValue": this.getOfficeNumber(),
                "Icon": "fa fa-briefcase"
            };
    }
    getOfficeNumber() { return this.officeNumber; }
}
exports.Manager = Manager;
