const {Employee} = require('../lib/employee');

describe("Employee", () => {
    // Test class initi
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        //
        const employee = new Employee("Sarah", 3, "email");
  
        // Assertions
        expect(employee.name).toEqual("Sarah");
        expect(employee.id).toEqual(3);
        expect(employee.email).toEqual("email");
        expect(employee.uniqueFieldsMap.uniqueField).toEqual("None")
        expect(employee.uniqueFieldsMap.uniqueFieldValue).toEqual("None")

      })

      it("Should throw an error as no parameters are provided", ()=> 
      {
          const cb = ()=> new Employee(); // no params provided
          expect(cb).toThrow();
      })
    })
})    