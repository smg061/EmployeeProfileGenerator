"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engineer = void 0;
const employee_1 = require("./employee");
class Engineer extends employee_1.Employee {
    constructor(name, id, email, github, role = "Engineer") {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = role;
        this.uniqueFieldsMap =
            {
                "Role": this.getRole(),
                "UniqueField": "GitHub",
                "UniqueFieldValue": this.getGithub(),
                "Icon": "fa fa-briefcase"
            };
    }
    getGithub() { return this.github; }
}
exports.Engineer = Engineer;
