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
        this.uniqueFieldsMap =
            {
                "Role": this.getRole(),
                "UniqueField": "School",
                "UniqueFieldValue": this.getSchool(),
                "Icon": "fa fa-briefcase"
            };
    }
    getSchool() { return this.school; }
}
exports.Intern = Intern;
