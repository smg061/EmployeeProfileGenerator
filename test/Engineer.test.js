const { Engineer } = require('../lib/engineer');
describe("Employee", () => {
    // Test class initi
    describe("Initialization", () => {
        it("should create an object with a name and age if provided valid arguments", () => {
            // initialize class
            const employee = new Engineer("John", 2, "email", "WebDev01");
            // Assertions
            expect(employee.name).toEqual("John");
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual("email");
            expect(employee.github).toEqual("WebDev01");
            // assert the unique properties of subclass
            expect(employee.uniqueFieldsMap.uniqueField).toEqual("Github");
            expect(employee.uniqueFieldsMap.uniqueFieldValue).toEqual("WebDev01");
        });
        it("Should throw an error as no github is provided", () => {
            const cb = () => new Engineer("Raphael", 4); // no github provided
            expect(cb).toThrow();
        });
    });
});
