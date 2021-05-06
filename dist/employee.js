"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.uniqueFieldsMap = {};
    }
    getName() { return this.name; }
    getId() { return this.id; }
    getEmail() { return this.email; }
    getRole() { return this.role; }
    getUniqueMap() { return this.uniqueFieldsMap; }
}
exports.Employee = Employee;
