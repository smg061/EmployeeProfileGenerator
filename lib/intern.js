"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intern = void 0;
const employee_1 = require("./employee");
class Intern extends employee_1.Employee {
    constructor(name, id, email, school, role = "Intern") {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = role;
        // set the unique fields for this subclass
        this.uniqueFieldsMap.uniqueFieldValue = this.getSchool();
        this.uniqueFieldsMap.uniqueField = "School";
        this.uniqueFieldsMap.icon = "fa fa-book";
        if (school == "" || school === undefined || typeof school !== "string") {
            throw new Error("Please provide a school  name");
        }
    }
    getSchool() { return this.school; }
}
exports.Intern = Intern;
