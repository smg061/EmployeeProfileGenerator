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
        // set the unique fields for this subclass
        this.uniqueFieldsMap.uniqueField = "Github";
        this.uniqueFieldsMap.uniqueFieldValue = this.getGithub();
        this.uniqueFieldsMap.icon = "fa fa-star";
        if (github == "" || github === undefined || typeof github !== "string") {
            throw new Error("Please provide a github username");
        }
    }
    getGithub() { return this.github; }
}
exports.Engineer = Engineer;
